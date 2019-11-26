from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelSerializer):
    """ Todo model serializer class """
    id = serializers.ReadOnlyField()
    
    class Meta:
        model = Todo
        fields = ('id', 'name', 'user', 'is_completed', 'is_active', 'created_on')
        read_only_fields = ('id', 'created_on')
