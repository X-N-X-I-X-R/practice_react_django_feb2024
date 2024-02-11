from django.urls import path
from .views import MyTokenObtainPairView, customer_detail, customers_list

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
     path('customers/', customers_list, name='customers-list'),
    path('customers/<int:customer_id>/', customer_detail, name='customer-detail'),
    
]