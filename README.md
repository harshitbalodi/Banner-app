# Banner App

## Description

Banner App is a dynamic one-page website built with React, featuring a controllable banner with a countdown timer and an internal dashboard for managing banner settings. The backend is built with Node.js and Express, using MySQL for data storage.

## Deployed Links

- Frontend: [https://banner-app-gamma.vercel.app/](https://banner-app-gamma.vercel.app/)
- Backend: [https://banner-app-1ua7.onrender.com/](https://banner-app-1ua7.onrender.com/)

## Project Structure

The project is divided into two main directories:

- `client/`: Contains the frontend React application
- `server/`: Contains the backend Node.js/Express application

## Features

- Controllable banner with countdown timer
- Internal dashboard for banner management
- Night mode toggle
- MySQL database integration for storing banner settings


## Environment Variables

The following environment variables are required for the project. Note that the values provided here are for reference only. You should set up your own environment variables with appropriate values for your development and production environments.

### Client (.env in client directory)

Create a `.env` file in the client directory with the following variable:

VITE_APP_BACKEND_URI= your_backend_uri

Replace the value with the appropriate backend URL for your environment.

### Server (.env in server directory)

Create a `.env` file in the server directory with the following variables:

DATABASE_NAME=your_database_name
DATABASE_HOST=your_database_host
DATABASE_SERVICE_URI=your_database_service_uri
DATABASE_PORT=your_database_port
DATABASE_PASSWORD=your_database_password
DATABASE_USER=your_database_user

Replace the placeholders with your actual database credentials and connection details. Ensure that you keep these values secret and never commit them to version control.

## Installation and Setup

### Frontend (Client)

1. Navigate to the client directory:```cd client```

2. Install dependencies:```npm install```
   
3. Create a `.env` file in the client directory and add the environment variable as mentioned above.

4. Start the development server: ```npm run dev```

The frontend should now be running on `http://localhost:5173` (or another port if 5173 is in use).

### Backend (Server)

1. Navigate to the server directory:```cd server```

2. Install dependencies:```npm install```

3. Create a `.env` file in the server directory and add the environment variables as mentioned above.

4. Start the server:``` npm run dev```

The backend should now be running on `http://localhost:3000`.

## Usage

1. Open your browser and go to `http://localhost:5173` (or the appropriate frontend URL).
2. Use the dashboard to control the banner settings:
- Toggle banner visibility
- Update banner description
- Set the countdown timer
- Add a clickable link to the banner
3. The banner will appear on the main page according to your settings and will disappear when the countdown reaches zero.
4. Use the night mode toggle to switch between light and dark themes.

## Development

- The frontend is built with React and uses Vite as the build tool.
- Styling is done using styled-components.
- The backend uses Express.js and connects to a MySQL database(aiven cloud MySQL server).
- API endpoints are available for fetching and updating banner settings.

## Deployment

- The frontend is deployed on Vercel.
- The backend is deployed on Render.
- Make sure to set the appropriate environment variables in your deployment platforms.

## Contact

Your Name - balodiharshit1907@example.com

Project Link: [https://github.com/yourusername/banner-app](https://github.com/harshitbalodi/banner-app)





