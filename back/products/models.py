from django.db import models

class WatchProduct(models.Model):
    CATEGORY_CHOICES = [
        ('classic', 'Classic'),
        ('sport', 'Sport'),
    ]

    title = models.CharField(max_length=255)
    imgUrl = models.URLField(max_length=1000)  
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='classic')
    price = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return f"{self.title} ({self.category})"
