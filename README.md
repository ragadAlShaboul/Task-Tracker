# Task-Tracker-Application

## Overview

This project is a simple Task Management Application developed using Node.js, MongoDB for the backend, and React for the frontend. The application allows users to sign up, log in, create, read, update, delete tasks, mark tasks as completed.

## Features

- User Authentication (Sign Up, Log In, Log Out)
- Create, Read, Update, and Delete (CRUD) tasks
- Mark tasks as completed

## Technologies Used

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- JWT for authentication
- Jest and Supertest for testing

### Frontend

- React
- Axios for API calls

## Getting Started

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ragadAlShaboul/Task-Managment-System.git
    cd task-management-app
    ```

2. Install backend dependencies:
    ```bash
    cd back-end
    npm install
    ```

3. Install frontend dependencies:
    ```bash
    cd ../front-end
    npm install
    ```

### Environment Variables

Create the `.env` file in the `back-end` directory with the following content:
PORT=5000
MONGO_URI=your_mongo_db_connection_path
JWT_SECRET=your_jwt_secret


### Running the Application

1. Start the backend server:
    ```bash
    cd back-end
    npm start
    ```

2. Start the frontend development server:
    ```bash
    cd ../front-end
    npm start
    ```

## Project Structure
### Backend
- controllers/: Contains the logic for handling requests.
- models/: Contains Mongoose models for User and Task.
- routes/: Contains the route definitions.
- middleware/: Contains authentication middleware.

### Frontend
- src/components/: Contains React components.
- src/context/: Contains Authentication Context.
- src/api/: Contains API calls.
