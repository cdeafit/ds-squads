# from re import U
from django.urls import path
from .views import ReportView
from rest_framework import routers

# router = routers.DefaultRouter()
# router.register("parsepdf", ReportView, "parsepdf")
# print(router.urls)
urlpatterns = [
    path('parsepdf', ReportView.as_view(), name="parsepdf")
]
