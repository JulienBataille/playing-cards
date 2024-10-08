"""
URL configuration for playing_cards_backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView, SpectacularYAMLAPIView

from user_management.urls import router as user_management_router
from monster.urls import router as monster_router

router = routers.DefaultRouter()
router.registry.extend(user_management_router.registry)
router.registry.extend(monster_router.registry)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),

    path('api/schema', SpectacularAPIView.as_view(), name='schema'),
    path('api/swagger-ui/', SpectacularSwaggerView.as_view(), name='swagger-ui'),
    path('api/redoc', SpectacularYAMLAPIView.as_view(), name='redoc')
]
