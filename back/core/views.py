from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def register_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

            if not username or not email or not password:
                return JsonResponse({'message': 'Բոլոր դաշտերը պարտադիր են։'}, status=400)

            if User.objects.filter(username=username).exists():
                return JsonResponse({'message': 'Այս օգտանունն արդեն զբաղված է։'}, status=400)

            if User.objects.filter(email=email).exists():
                return JsonResponse({'message': 'Այս էլ. հասցեով օգտատեր արդեն կա։'}, status=400)


            user = User.objects.create_user(username=username, email=email, password=password)
            
            return JsonResponse({
                'message': 'Գրանցումը հաջողվեց։',
                'user': {'id': user.id, 'username': user.username, 'email': user.email},
                'token': 'mock-jwt-token-for-now'
            }, status=201)
        except Exception as e:
            return JsonResponse({'message': str(e)}, status=500)
    return JsonResponse({'message': 'Միայն POST հարցումներ են թույլատրվում։'}, status=405)

@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            email = data.get('email')
            password = data.get('password')

           
            try:
                user_obj = User.objects.get(email=email)
                username = user_obj.username
            except User.DoesNotExist:
                return JsonResponse({'message': 'Սխալ էլ. հասցե կամ գաղտնաբառ։'}, status=400)

            user = authenticate(username=username, password=password)

            if user is not None:
                return JsonResponse({
                    'message': 'Մուտքը հաջողվեց։',
                    'user': {'id': user.id, 'username': user.username, 'email': user.email},
                    'token': 'mock-jwt-token-for-now'
                }, status=200)
            else:
                return JsonResponse({'message': 'Սխալ էլ. հասցե կամ գաղտնաբառ։'}, status=400)
        except Exception as e:
            return JsonResponse({'message': str(e)}, status=500)
    return JsonResponse({'message': 'Միայն POST հարցումներ են թույլատրվում։'}, status=405)