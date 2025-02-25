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
