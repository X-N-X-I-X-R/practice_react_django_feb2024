from django.db import models


class Customers(models.Model):
    customer_id = models.AutoField(primary_key=True, unique=True, editable=False)
    customer_name = models.CharField(max_length=20)
    customer_last_name = models.CharField(max_length=30)
    customer_email = models.EmailField(max_length=50)
    customer_phone = models.CharField(max_length=10)
    customer_address = models.CharField(max_length=50)
    customer_city = models.CharField(max_length=30)
    customer_img = models.ImageField(upload_to='backend/main/static/customers', null=True, blank=True)
    customer_password = models.CharField(max_length=30, default='default_password') 
    customer_active = models.BooleanField(default=True)

    def __str__(self):
        return f'{self.customer_name} {self.customer_last_name} {self.customer_email} {self.customer_phone} {self.customer_address} {self.customer_city}'
    
    