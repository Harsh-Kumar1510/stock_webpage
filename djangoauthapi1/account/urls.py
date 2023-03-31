from django.urls import path
from account.views import SendPasswordResetEmailView, UserChangePasswordView, UserLoginView, UserProfileView, UserRegistrationView, UserPasswordResetView,ContactFormView
from account import views
urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('profile/', UserProfileView.as_view(), name='profile'),
    path('changepassword/', UserChangePasswordView.as_view(), name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/<uid>/<token>/', UserPasswordResetView.as_view(), name='reset-password'),
    # added
    # path('contact', views.contact, name='contact'),

    # 
    # path('update-stock/<int:user_id>/<str:stock_symbol>/', views.update_stock, name='update_stock'),


    path('contact/', ContactFormView.as_view(), name='contact'),



]