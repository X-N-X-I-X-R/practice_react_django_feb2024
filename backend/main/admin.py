from django.contrib import admin

from .models.user_model import Customers
from .models.models import category, product

admin.site.register(category)
admin.site.register(product)
admin.site.register(Customers)
