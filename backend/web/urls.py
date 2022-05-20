from django.urls import path
from web.views import *


urlpatterns = [
    path('', index)
]

handler404 = 'web.views.index'
