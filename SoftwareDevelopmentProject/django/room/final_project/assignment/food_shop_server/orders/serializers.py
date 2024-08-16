from rest_framework import serializers
from . import models

class OrderSerializer(serializers.ModelSerializer):
    customer = serializers.StringRelatedField(many=False)
    menu = serializers.StringRelatedField(many=False)
    class Meta:
        model = models.Order
        fields = '__all__'
