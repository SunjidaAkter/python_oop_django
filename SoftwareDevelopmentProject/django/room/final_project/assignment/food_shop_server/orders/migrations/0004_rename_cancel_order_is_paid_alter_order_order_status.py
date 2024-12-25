# Generated by Django 5.0.4 on 2024-08-22 00:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0003_order_cost_alter_order_customer'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='cancel',
            new_name='is_paid',
        ),
        migrations.AlterField(
            model_name='order',
            name='order_status',
            field=models.CharField(choices=[('Paid', 'Paid'), ('Pending', 'Pending'), ('Delivering', 'Delivering')], default='Pending', max_length=10),
        ),
    ]