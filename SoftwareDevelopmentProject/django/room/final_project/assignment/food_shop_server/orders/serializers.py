from rest_framework import serializers
from . import models
from menu.serializers import MenuSerializer
# from django.contrib.auth.models import Usera
class OrderSerializer(serializers.ModelSerializer):
    customer = serializers.PrimaryKeyRelatedField(queryset=models.UserAccounts.objects.all())
    menu = serializers.PrimaryKeyRelatedField(queryset=models.Menu.objects.all())
    class Meta:
        model = models.Order
        fields = "__all__"
      