from django.db import models

# Create your models here.
class category(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)    
    description = models.TextField()
    img = models.ImageField(upload_to='category', null=True, blank=True)


    def __str__(self):
        return self.name
    
class product(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    img = models.ImageField(upload_to='product', null=True, blank=True)
    category = models.ForeignKey(category, on_delete=models.CASCADE)
    

    def __str__(self):
        return self.name
    

    
