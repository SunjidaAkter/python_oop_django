# Generated by Django 5.0.4 on 2024-05-31 17:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userbankaccount',
            name='account_no',
            field=models.IntegerField(unique=True),
        ),
    ]