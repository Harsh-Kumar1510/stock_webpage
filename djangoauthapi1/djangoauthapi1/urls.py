from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/user/', include('account.urls'))
    # 
    # path('update-stock/<int:user_id>/<str:stock_symbol>/', views.update_stock, name='update_stock'),

]
