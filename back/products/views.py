from django.http import JsonResponse
from .models import WatchProduct

def get_products(request):
    if request.method == 'GET':
        category = request.GET.get('category')
        search = request.GET.get('search')

        products_queryset = WatchProduct.objects.all()

        if category:
            products_queryset = products_queryset.filter(category=category)

        if search:
            products_queryset = products_queryset.filter(title__icontains=search)

        data = list(products_queryset.values('id', 'title', 'imgUrl', 'category', 'price'))
        return JsonResponse(data, safe=False, status=200)
    
    return JsonResponse({'message': 'Only GET requests allowed'}, status=405)