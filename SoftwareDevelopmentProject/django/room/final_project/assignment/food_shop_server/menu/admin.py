from django.contrib import admin

# Register your models here.
from . import models

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',), }
    
admin.site.register(models.Category, CategoryAdmin)
admin.site.register(models.Menu)
admin.site.register(models.Review)