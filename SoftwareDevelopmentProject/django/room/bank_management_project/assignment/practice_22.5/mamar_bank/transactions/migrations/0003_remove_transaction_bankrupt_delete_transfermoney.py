# Generated by Django 5.0.4 on 2024-06-17 16:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0002_transfermoney_transaction_bankrupt_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaction',
            name='bankrupt',
        ),
        migrations.DeleteModel(
            name='TransferMoney',
        ),
    ]
