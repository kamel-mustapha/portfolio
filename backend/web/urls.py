from django.urls import path, re_path
from web.views import *


urlpatterns = [
    path('', index)
]

urlpatterns += [
    re_path('^.*$', index),
]
