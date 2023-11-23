
from django.urls import path
from . import views

urlpatterns = [

    # path('',views.apiOverview,name="apiOverview"),
    path('task-list',views.TaskList,name="task-list"),
    path('task-create',views.TaskCreate,name="task-create"),
    path('task-update/<str:pk>',views.TaskUpdate,name="task-update"),
    path('task-detail/<str:pk>',views.DetailView,name="detail-view"),
    path('task-delete/<str:pk>',views.TaskDelete,name="task_delete"),
]
