from django.contrib import admin
from web.models import Contact


@admin.register(Contact)
class ContactAdmin(admin.AdminSite):
    list_display = (
        'name',
        'purpose',
        'text',
        'ip'
    )

