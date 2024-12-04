from rest_framework import viewsets
from . import models
# from rest_framework.response import Response  # Ensure this import is included
from . import serializers
from rest_framework.exceptions import ValidationError
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string
from django.template.loader import render_to_string
from django.shortcuts import get_object_or_404
from xhtml2pdf import pisa
from django.http import HttpResponse 
from django.conf import settings   
import os
import html

class OrderViewSet(viewsets.ModelViewSet):
    queryset = models.Order.objects.select_related('menu').all()
    serializer_class = serializers.OrderSerializer
    http_method_names = ['get', 'post', 'patch', 'delete']
    # def retrieve(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance)
        
    #     # Manually add related data
    #     data = serializer.data
    #     data['menu_title'] = instance.menu.title if instance.menu else None
    #     data['menu_price'] = instance.menu.price if instance.menu else None
    #     data['menu_image'] = instance.menu.image if instance.menu else None

        # return Response(data)
    def get_queryset(self):
        customer_id = self.request.query_params.get('customer_id')

        # If customer_id is not provided, return the full queryset
        if customer_id is None:
            return super().get_queryset()

        # Check if customer_id is a valid integer
        if not customer_id.isdigit():
            raise ValidationError({"customer_id": "Invalid customer_id. It must be a number."})

        # Filter queryset by customer_id
        return super().get_queryset().filter(customer_id=int(customer_id))
    def perform_update(self, serializer):
        instance = serializer.save()
        if instance.order_status == "Delivering":
            self.send_delivery_email(instance)

    def send_delivery_email(self, order):
        email_subject = "Your order has been delivered"
        email_body = render_to_string('dealer_email.html', {'customer': order.customer, 'menu': order.menu})
        
        email = EmailMultiAlternatives(email_subject, '', to=[order.customer.user.email])
        email.attach_alternative(email_body, "text/html")
        email.send()


def download_order_pdf(request, order_id):
    order = get_object_or_404(models.Order, id=order_id)

    
    context = {
        'order': order,
        # 'total_cost': total_cost,
    }

    # order details HTML template to
    html_string = render_to_string('order_details.html', context)

    # Create HTTP response with PDF
    response = HttpResponse(content_type='application/pdf')
    response['Content-Disposition'] = f'attachment; filename=Order_Confirmation_{order.id}.pdf'

    # Generate PDF from HTML
    pisa_status = pisa.CreatePDF(
        html_string, dest=response,
        link_callback=lambda uri, _: os.path.join(
            settings.MEDIA_ROOT, uri.replace(settings.MEDIA_URL, ''))
    )

    # PDF generation
    if pisa_status.err:
        return HttpResponse('We had some errors <pre>' + html.escape(html_string) + '</pre>')

    return response    