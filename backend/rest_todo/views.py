from django.contrib.auth import get_user_model
from rest_framework import viewsets
from .serializers import UserSerializer

USER = get_user_model()

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = USER.objects.all()
    serializer_class = UserSerializer