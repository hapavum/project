from django.contrib import admin
from .models import WatchProduct


@admin.register(WatchProduct)
class WatchProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'price')
    list_filter = ('category',)
    search_fields = ('title',)