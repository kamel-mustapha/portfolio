from django.contrib import admin
from web.models import Contact


@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'purpose',
        'text',
        'ip'
    )
    readonly_fields = (
        'name',
        'purpose',
        'text',
        'ip'
    )
