from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from rest_framework import viewsets, renderers, permissions, status

from . import success_response, failure_response
from .serializers import TodoSerializer
from .models import Todo


class TodoViewset(viewsets.ModelViewSet):
    """ Todo model viewsets. Also includes get_completed, trigger_complete
        and activate methods.
    """

    serializer_class = TodoSerializer
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (TokenAuthentication,)

    def get_queryset(self):
        return Todo.objects.filter(is_active=True)


    def list(self, request):
        """ List method override to list only active items """
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    def destroy(self, request, pk=None):
        """ Delete method override to set is_active to False """
        query = Todo.objects.get(pk=pk)
        if query:
            query.deactivate()
            query.save()
            return Response(success_response, status=status.HTTP_200_OK)
        else:
            return Response(failure_response, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


    @action(methods=['GET'], detail=False, name="Get All Completed Todos")
    def get_completed(self, request, *args, **kwargs):
        """ Get all completed todos """
        queryset = Todo.objects.all().filter(is_completed=True).order_by('created_on')
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


    @action(methods=['GET'], detail=True, name="Trigger Complete Todo")
    def trigger_complete(self, request, pk=None):
        """ Set todo as completed or not completed"""
        query = Todo.objects.get(pk=pk)
        if query:
            query.is_completed = not(query.is_completed)
            query.save()
            return Response(success_response, status=status.HTTP_200_OK)
        else:
            return Response(failure_response, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


    @action(methods=['GET'], detail=True, name="Activate Todo")
    def activate(self, request, pk=None):
        """ Set todo as completed """
        query = Todo.objects.get(pk=pk)
        if query:
            query.is_active = True
            query.save()
            return Response(success_response, status=status.HTTP_200_OK)
        else:
            return Response(failure_response, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
