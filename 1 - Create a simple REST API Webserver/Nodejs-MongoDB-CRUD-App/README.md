docker build commands:
```
docker login
docker build -t tejasdurge55/mongo-crud-one2n-sre-bootcamp:latest .
docker push tejasdurge55/mongo-crud-one2n-sre-bootcamp:latest
```

labe nodes:
```
k label node controlplane type=application
```


untaint node command:
```
kubectl taint nodes controlplane group=ampa:NoSchedule-
```

# Student CRUD API

## Overview
A simple REST API for managing student records, built with Node.js, Express, and MongoDB.

## Features
- Add a new student
- Get all students
- Get a student by ID
- Update a student's information
- Delete a student record

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
    ```bash
    make install
    ```
3. Set up environment variables in the `.env` file.
4. Run database migrations:
    ```bash
    make migrate
    ```
5. Start the server:
    ```bash
    make run
    ```

## Testing
Run tests with:
```bash
make test
```

## API Documentation
Use Postman to test the API endpoints.
