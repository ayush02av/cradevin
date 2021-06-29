from django.shortcuts import render

def HomePage(request):

    if request.method == 'GET':
        for i in request.GET:
            print(f'{i} : {request.GET[i]}')

    return render(request, 'index.html')