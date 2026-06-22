from django.http import JsonResponse
from .models import WatchProduct

def get_products(request):
    if request.method == 'GET':
        category = request.GET.get('category') 
        
        if category:
            products_queryset = WatchProduct.objects.filter(category=category)
        else:
            products_queryset = WatchProduct.objects.all()

       
        data = list(products_queryset.values('id', 'title', 'imgUrl', 'category'))
        return JsonResponse(data, safe=False, status=200)
    
    return JsonResponse({'message': 'Only GET requests allowed'}, status=405)