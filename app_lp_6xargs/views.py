from django.shortcuts import render
from django.views.generic.base import View



class LandingPage(View):
    def get(self, request, *args, **kwargs):
        context={

        }
        return render(request, 'index.html', context)