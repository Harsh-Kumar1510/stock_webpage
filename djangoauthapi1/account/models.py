from django.db import models
from django.contrib.auth.models import BaseUserManager,AbstractBaseUser
from django.contrib.auth.models import User


#  Custom User Manager
class UserManager(BaseUserManager):
  def create_user(self, email, name, tc, password=None, password2=None):
      """
      Creates and saves a User with the given email, name, tc and password.
      """
      if not email:
          raise ValueError('User must have an email address')

      user = self.model(
          email=self.normalize_email(email),
          name=name,
          tc=tc,
      )

      user.set_password(password)
      user.save(using=self._db)
      return user

  def create_superuser(self, email, name, tc, password=None):
      """
      Creates and saves a superuser with the given email, name, tc and password.
      """
      user = self.create_user(
          email,
          password=password,
          name=name,
          tc=tc,
      )
      user.is_admin = True
      user.save(using=self._db)
      return user

#  Custom User Model
class User(AbstractBaseUser):
  email = models.EmailField(
      verbose_name='Email',
      max_length=255,
      unique=True,
  )
  name = models.CharField(max_length=200)
  tc = models.BooleanField()
  is_active = models.BooleanField(default=True)
  is_admin = models.BooleanField(default=False)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name', 'tc']

  def __str__(self):
      return self.email

  def has_perm(self, perm, obj=None):
      "Does the user have a specific permission?"
      # Simplest possible answer: Yes, always
      return self.is_admin

  def has_module_perms(self, app_label):
      "Does the user have permissions to view the app `app_label`?"
      # Simplest possible answer: Yes, always
      return True

  @property
  def is_staff(self):
      "Is the user a member of staff?"
      # Simplest possible answer: All admins are staff
      return self.is_admin



# added
# class Contact(models.Model):
#     name = models.CharField(max_length=122)
#     email = models.CharField(max_length=122)
#     phone = models.CharField(max_length=12)
#     desc = models.TextField()
#     date = models.DateField()

#     def __str__(self):
#         return self.name
    
# # 
# class UserStock(models.Model):
#     User = models.ForeignKey(User, on_delete=models.CASCADE)
#     high = models.CharField(max_length=10)
#     low = models.PositiveIntegerField()
#     name = models.DecimalField(max_digits=10, decimal_places=2)

#     class Meta:
#         unique_together = ('user', 'stock_symbol')

#     def _str_(self):
#         return f"{self.user.username} - {self.stock_symbol}: {self.quantity} shares at ${self.price}"

from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    message = models.TextField()

    def __str__(self):
        return self.name
