from django.db import models
from django.contrib.auth import get_user_model
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from rest_framework.authtoken.models import Token

USER = get_user_model()


class Todo(models.Model):
    """ Todo Table model """

    name = models.CharField(max_length=200)
    user = models.ForeignKey(USER, on_delete=models.PROTECT)
    created_on = models.DateTimeField(auto_now=False, auto_now_add=True)
    is_completed = models.BooleanField(default=False, blank=False, null=False)
    is_active = models.BooleanField(default=True, blank=False, null=False)

    def complete(self):
        """ Set is_completed to True """
        self.is_completed = True
        return self.save()
    
    def deactivate(self):
        """ Set is_active to False """
        self.is_active = False
        return self.save()

    def __str__(self):
        """ Return the string representation """
        return self.name
    
    def publish(self):
        """ Alternative save method """
        return self.save()


@receiver(post_save, sender=USER)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)