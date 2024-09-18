from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import IngredientViewSet

router = DefaultRouter()
router.register(r'ingredients', IngredientViewSet, basename='ingredients')

urlpatterns = [
    path('recipes/', include(router.urls)),
]

'''
urlpatterns = [
    path('', views.index, name='index'),
    path('add/', views.add_ingredient, name='add_ingredient'),
    path('update/<str:id>/', views.update_ingredient, name='update_ingredient'),
    path('show/<str:id>/', views.show_ingredient, name='show_ingredient'),
    path('list/', views.get_all_ingredients, name='get_all_ingredients'),
    path('delete/<str:id>/', views.delete_ingredient, name='delete_ingredient'),
]
'''