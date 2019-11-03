from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth import get_user_model

User = get_user_model()

class Command(BaseCommand):
    """Creates superuser when app is run for the first time"""
    help = __doc__

    def handle(self, *args, **options):
        """Create default super user."""
        if not User.objects.filter(username='root').first():
            user = User.objects.create_superuser('root', 'root@admin.com', 'root')
            print("Default super user created:", user.username)

        else:
            print("Default super user already exists")
