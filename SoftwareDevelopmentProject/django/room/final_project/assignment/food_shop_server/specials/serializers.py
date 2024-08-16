from rest_framework import serializers
from . import models

class SpecialsSerializer(serializers.ModelSerializer):
    menu = serializers.StringRelatedField(many=False)
    class Meta:
        model = models.Specials
        fields = '__all__'
