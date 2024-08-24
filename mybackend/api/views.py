from django.shortcuts import render


from django.http import JsonResponse

def greeting(request):
    return JsonResponse({"message": "Hello Recruiters of Kangacook. I hope you like my very simple project using React and Django!"})

def status(request):
    return JsonResponse({"status": "Please have a look at my Resume!"})
