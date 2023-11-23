from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from . models import Task
from .serializers import TaskSerializers
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
    api_urls={

        'list':'/task-list/',
        'detail view':'/task-detail/<str:pk>/',
        'create':'/task-create/',
        'update':'/task-update/<str:pk>/',
        'delete':'/task-delete/<str:pk>',
    }
    return Response(api_urls)


@api_view(['GET'])
def TaskList(request):
    task=Task.objects.all()
    serializer=TaskSerializers(task,many=True)

    return Response(serializer.data)

@api_view(['GET'])
def DetailView(request,pk):
    task=Task.objects.get(id=pk)
    serializer=TaskSerializers(task)

    return Response(serializer.data)

@api_view(['POST'])
def TaskCreate(request):

    serializer=TaskSerializers(data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)

@api_view(['POST'])
def TaskUpdate(request,pk):
    task=Task.objects.get(id=pk)
    serializer=TaskSerializers(instance=task,data=request.data)
    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)
@api_view(['DELETE'])
def TaskDelete(request,pk):
    task=Task.objects.get(id=pk)
    task.delete()

    return Response("item successfully deleted")