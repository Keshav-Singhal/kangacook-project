from django.urls import path
from .views import greeting, status

urlpatterns = [
    path('greeting/', greeting, name='greeting'),
    path('status/', status, name='status'),
]
