 # A simple REST API using Node.js with Express and Cloud Firestore 

## Overview
This project is a simple REST API built using Node.js with Express for backend development. It provides endpoints for managing users, expenses, and income, using Firebase cloud firestore as the database.

## Features

- **Backend:** Node.js with Express, providing a RESTful API for managing users, expenses, and income.
- **Database:** Firebase cloud firestore.
- **Secure Configuration:** Environment variables managed using `.env` for sensitive information.
- **Organized File Structure:** Modular architecture with `routes/`,`config/`, `public` and `middleware` directories.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

   * Node.js and npm installed on your computer.
   * Firebase project set up and configured.
   * Postman or Thunder client extension in VS code (For testing api locally)
   * Firebase-Admin
   * Nodemon
   * express

### Commands in windows
   * npm install
   * npm install express firebase-admin nodemon
   * npm i dotenv

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Dipti-gogoi/node-rest-api.git
     ```

2. **Install dependencies:**
   ```bash
   * npm install
   * npm install express firebase-admin nodemon
   * npm i dotenv
    ```
3. **Set up Firebase:**
   - Create a Firebase cloud firestore and download the.json file and named as firebase.json inside /.config folder.

4. **Set up environment variables:**
   - Create a `.env` file in the root directory.
   - Add Firebase credentials and other necessary configuration variables.

5. **Start the development server:**
   ```bash
   cd Node
   nodemon index.js or npx nodemon index.js
   The API will be accessible at `http://localhost:3000/`
   ```

7. **How to Use Thunder Client:**

- Install the extension, click the Thunder Client icon on the Action Bar.
- From the sidebar click `New Request` button to test API
- Video: [youtube.com/watch?v=NKZ0ahNbmak](https://youtu.be/NKZ0ahNbmak?t=3)
  
![git](https://github.com/user-attachments/assets/357347a9-55d6-48c4-90d2-f37a34c9d979)



## API Endpoints

### Landing page/Home URL
- Provides a brief description of the API and available endpoints.

### Users Endpoints
- **GET /users** - Retrieve all users.
- **POST /users** - Add a new user.
- **PUT /users/:id** - Update an existing user by ID.
- **DELETE /users/:id** - Delete a user by ID.

### Expenses Endpoints
- **GET /expenses** - Retrieve all expenses.
- **POST /expenses** - Add a new expense.
- **PUT /expenses/:id** - Update an existing expense by ID.
- **DELETE /expenses/:id** - Delete an expense by ID.

### Income Endpoints
- **GET /income** - Retrieve all income.
- **POST /income** - Add a new income.
- **PUT /income/:id** - Update an existing income by ID.
- **DELETE /income/:id** - Delete an income by ID.

## Workflow
### API Requests
- The client sends HTTP requests to the Express backend.
- The backend processes these requests and interacts with the Firebase database.
- Responses are sent back to the client, reflecting the updated data.

### Data Management
- CRUD operations (Create, Read, Update, Delete) are performed on users, expenses, and income data.
- The Firebase database ensures persistent storage.

### Error Handling
- The application includes basic error handling.
- If an API request fails, an error response is sent to the client with relevant status codes and messages.

## Development and Deployment
- **Development Server:** Run `npm start` for local testing with live reload.
- **Production Build:** The backend can be deployed to a cloud service (e.g., Firebase Functions, AWS, Heroku, or Vercel) for production use.

## Summary
This project provides a simple yet functional REST API for managing users, expenses, and income data. It ensures seamless data handling through Firebase while maintaining a structured and modular backend using Express.


