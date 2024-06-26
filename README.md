# Clinic-Appointment-System
# Documentation

## Project Architecture

### Overview
The Clinic Appointment System consists of a frontend built with HTML, CSS, and JavaScript, and a backend using Node.js with Express. Data is stored in a MongoDB database.

### Frontend
- **Technologies**: HTML, CSS, JavaScript
- **Structure**: Main files include index.html, styles.css, scripts.js
- **UI Components**: Login popup, signup popup, home page, appointments page

### Backend
- **Technologies**: Node.js, Express
- **API Design**: RESTful API with endpoints for authentication and appointment management
- **Database**: MongoDB with collections for users and appointments

### Setup Instructions

#### Prerequisites
- Node.js installed
- MongoDB installed and running

#### Installation Steps
1. Clone the repository: `git clone https://github.com/your/repository.git`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env` file with MongoDB URI and other configurations.

#### Running the Application
- Frontend: `npm start`
- Backend: `npm run start-server`

## API Documentation

### Authentication

- `POST /api/login`: Authenticate user
  Request:
  ```json
  {
    "email": "user@example.com",
    "password": "Change@123"
  }
