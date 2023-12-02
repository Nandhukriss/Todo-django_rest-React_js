# Todo-django_rest-React_js
## Introduction

Todo application built Django Rest Framework  and React.

## Requirements
* Python3

## Getting started
1. Clone the project to your machine ```[git clone https://github.com/Nandhukriss/Todo-django_rest-React_js.git```
2. Navigate into the diretory ```[cd todo]```
5. Navigate into the frontend directory ```[cd frontend-react]```
5. Install the dependencies ```[npm install]```

## Run the application
You will need two terminals pointed to the frontend and backend directories to start the servers for this application.

1. Run this command to start the server  ```[python manage.py runserver]```

![django rest](https://github.com/Nandhukriss/Todo-django_rest-React_js/assets/103727372/28ff69d0-2c40-42b3-9e76-7b9c017aa1df)

# Todo API

This API allows you to perform CRUD (Create, Read, Update, Delete) operations on tasks.

## API Endpoints

### Overview
- **GET** `/api/`: Get an overview of available API endpoints.

### List all tasks
- **GET** `/api/task-list/`: Get a list of all tasks.

### Task Detail View
- **GET** `/api/task-detail/<str:pk>/`: Get details of a specific task.

### Create a task
- **POST** `/api/task-create/`: Create a new task.

### Update a task
- **POST** `/api/task-update/<str:pk>/`: Update an existing task.

### Delete a task
- **DELETE** `/api/task-delete/<str:pk>/`: Delete a task.

## How to Use

### Get an Overview
Send a **GET** request to `/api/` to get an overview of available endpoints.

### List all tasks
Send a **GET** request to `/api/task-list/` to retrieve a list of all tasks.

### Task Detail View
Send a **GET** request to `/api/task-detail/<str:pk>/` to get details of a specific task.

### Create a task
Send a **POST** request to `/api/task-create/` with the task data in the request body to create a new task.

### Update a task
Send a **POST** request to `/api/task-update/<str:pk>/` with the updated task data in the request body to update an existing task.

### Delete a task
Send a **DELETE** request to `/api/task-delete/<str:pk>/` to delete a task.

## Example Usage


 

## Built With

* [React](https://reactjs.org) - A progressive JavaScript framework.
* [Python](https://www.python.org/) - A programming language that lets you work quickly and integrate systems more effectively.
* [Django Rest Framework]([http://djangoproject.org/](https://www.django-rest-framework.org/)) - Django REST framework is a powerful and flexible toolkit for building Web APIs.design.
