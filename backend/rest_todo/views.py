from django.contrib.auth import get_user_model
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import viewsets, status, permissions
from rest_framework.authtoken.models import Token
from .serializers import UserSerializer

USER = get_user_model()

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = USER.objects.all()
    serializer_class = UserSerializer
    permission_classes = (permissions.AllowAny,)

    @action(methods=['POST'], detail=False, name="Get User By Token")
    def get_by_token(self, request):
        """ Get User by Token """
        queryset = Token.objects.get(key=request.data['userToken']).user
        serializer = self.get_serializer(queryset, many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)
