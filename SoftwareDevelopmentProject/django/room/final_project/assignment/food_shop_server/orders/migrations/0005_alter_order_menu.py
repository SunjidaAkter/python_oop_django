# Generated by Django 5.0.4 on 2024-08-23 02:26

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('menu', '0008_alter_menu_discount'),
        ('orders', '0004_rename_cancel_order_is_paid_alter_order_order_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='menu',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='menu.menu'),
        ),
    ]
