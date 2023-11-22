from django.shortcuts import render
from django.http import HttpResponse





# Create your views here.
def calculator(request):
    return render(request, 'calculator.html')


def calculator(request):
    result = None

    if request.method == 'POST':
        expression = request.POST['expression']

        try:
            result = eval(expression)
        except Exception:
            result = "Error"

    
    return render(request, 'calculator_app/calculator.html', {'result': result})

