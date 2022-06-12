from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length = 100, editable = False)
    purpose = models.CharField(max_length = 100, editable = False)
    text = models.TextField(editable = False)
    ip = models.CharField(max_length = 20, editable = False)
