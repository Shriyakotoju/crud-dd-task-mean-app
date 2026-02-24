
## Local Setup (Without Docker)

### Backend Setup
```bash
cd backend
npm install
node server.js
```

Runs on: http://localhost:3000

### Frontend Setup
```bash
cd frontend
npm install
ng serve --port 8081
```

Runs on: http://localhost:8081

## Docker Deployment

Build and start containers:

```bash
docker compose up -d --build
```

Check running containers:

```bash
docker ps
```

Services:

- Frontend: http://localhost:4200
- Backend: http://localhost:3000
- MongoDB: Port 27017
  

## CI/CD Pipeline (GitHub Actions)

The CI/CD pipeline automatically:

- Builds Docker images
- Logs into Docker Hub
- Pushes backend image
- Pushes frontend image

Workflow file:
.github/workflows/ci-cd.yml

Triggered on:
Push to main branch

## Nginx Reverse Proxy

Nginx can be configured to:

- Serve Angular frontend
- Proxy API requests to backend
- Expose application via port 80

This enables production-style deployment.

![CI/CD Success](screenshots/github-actions.png)
![Docker Hub](screenshots/dockerhub.png)
![App UI](screenshots/frontend-ui.png)
