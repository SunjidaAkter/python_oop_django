# Generated by Django 5.0.4 on 2024-08-22 15:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('menu', '0008_alter_menu_discount'),
        ('user_accounts', '0002_useraccounts_amount_useraccounts_role'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quantity', models.IntegerField()),
                ('created_on', models.DateField(auto_now_add=True)),
                ('cost', models.IntegerField(default=0)),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_accounts.useraccounts')),
                ('menu', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='menu.menu')),
            ],
        ),
    ]
