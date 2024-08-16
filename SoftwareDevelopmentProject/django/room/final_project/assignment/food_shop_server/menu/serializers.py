from rest_framework import serializers
from . import models

class MenuSerializer(serializers.ModelSerializer):
    category = serializers.StringRelatedField(many=True)
    class Meta:
        model = models.Menu
        fields = '__all__'
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Category
        fields = '__all__'
class CuisineSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cuisine
        fields = '__all__'
        
        
class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Review
        fields = '__all__'
