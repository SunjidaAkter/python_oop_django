# Generated by Django 5.0.4 on 2024-04-24 17:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_profile_author'),
    ]

    operations = [
        migrations.RenameField(
            model_name='profile',
            old_name='title',
            new_name='name',
        ),
    ]