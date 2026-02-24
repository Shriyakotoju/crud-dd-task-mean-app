# CRUD Tutorials App (MEAN Stack)

This is a full-stack CRUD application using the MEAN stack (MongoDB, Express, Angular 15, Node.js). 

The backend provides REST APIs connecting to a MongoDB database.  
The frontend Angular application uses HTTPClient to interact with the backend.  

The app allows users to **create, retrieve, update, and delete tutorials** and search by title.

---

## Project Setup

### Node.js Server (Backend)
1. Navigate to the backend folder:

bash
cd backend
npm install

Update MongoDB credentials if needed in app/config/db.config.js.

Run the backend server:

node server.js

Backend runs on port 8080 by default.

Angular Client (Frontend)

Navigate to the frontend folder:

cd frontend
npm install

Run the Angular app:

ng serve --port 8081

Open the app in your browser: http://localhost:8081

To change API endpoints, edit src/app/services/tutorial.service.ts.

Docker Setup

Make sure you have Docker and Docker Compose installed.

From the project root, build and run containers:

docker compose up -d --build

Access running services:

Frontend: http://localhost:4200

Backend API: http://localhost:3000

MongoDB: Port 27017

CI/CD Pipeline

GitHub Actions workflow automatically builds Docker images for backend and frontend when code is pushed to the main branch.

Docker images are automatically pushed to Docker Hub.

Workflow file path: .github/workflows/ci-cd.yml

Workflow Steps:

Checkout repo

Setup Docker Buildx

Login to Docker Hub using secrets

Build and push backend Docker image

Build and push frontend Docker image

Logout from Docker Hub

Screenshots

(Add actual screenshots in screenshots/ folder and reference below)

Docker containers running

GitHub Actions workflow success

Docker Hub repositories for backend and frontend

Frontend UI working with CRUD operations

Backend API responses

Example:

![Docker ps](screenshots/docker-ps.png)
![Frontend UI](screenshots/frontend.png)
![GitHub Actions](screenshots/github-actions.png)
Nginx Reverse Proxy (Optional)

Nginx can serve the Angular frontend and proxy API requests to the backend.

Application will be accessible via port 80 when deployed on a server/VM.

HTTPS and domain mapping are not required for this assignment.

Notes

Make sure Docker images are pushed to Docker Hub.

CI/CD pipeline should be verified by checking the GitHub Actions run logs.

Screenshots should be added after deployment for full submission completeness.




