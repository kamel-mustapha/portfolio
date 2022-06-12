from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length = 100)
    purpose = models.CharField(max_length = 100)
    text = models.TextField()
    ip = models.CharField(max_length = 20)
