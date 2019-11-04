from django.urls import path, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token

from api import views as api_views
from . import views as main_views

router = routers.DefaultRouter()
router.register(r'user', main_views.UserViewSet, basename="User")
router.register(r'todo', api_views.TodoViewset, basename="Todo")

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('api-auth-token/', obtain_auth_token, name="getApiAuthToken")
] 
