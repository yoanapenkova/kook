# serializers.py
from rest_framework import serializers
from .models import Ingredient

class IngredientSerializer(serializers.Serializer):
    id = serializers.CharField()
    name = serializers.CharField(max_length=255)
    quantity = serializers.IntegerField()

    def create(self, validated_data):
        return Ingredient(**validated_data).save()

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.quantity = validated_data.get('quantity', instance.quantity)
        instance.save()
        return instance
