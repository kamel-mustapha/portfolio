from django.http import HttpResponse
from django.shortcuts import render


def index(req, *args, **kwargs):
    return render(req, 'index.html')
