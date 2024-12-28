# Full Stack Podcast App

A comprehensive full-stack application designed for managing and displaying podcasts. This project includes a Flask API and Python backend for processing and storing podcast data from XML and JSON files, paired with a React frontend for a seamless user experience. Docker Compose simplifies development and deployment by tying the components together.

## Key Features

- **Backend**: Flask API with Python logic for handling podcast data storage and updates.
- **Frontend**: React application with an intuitive interface for browsing podcasts.
- **Data Handling**: Import podcast data from XML and JSON files.
- **Dockerized Deployment**: Use Docker Compose for effortless deployment of the frontend and backend.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [Frontend Features](#frontend-features)
- [Development Guide](#development-guide)
- [License](#license)

## Project Structure

```
.
|-- apps/
|   |-- client/                # React application
|   |   |-- node_modules/      # Node.js dependencies
|   |   |-- podcast-feed/      # Frontend podcast modules
|   |   |-- public/            # Public assets for React
|   |   |-- src/               # React source files
|   |   |-- Dockerfile.frontend # Dockerfile for the frontend
|   |   |-- package.json       # React dependencies
|   |-- server/                # Flask API and Python backend logic
|       |-- src/               # Backend source files
|       |-- Dockerfile         # Dockerfile for backend
|       |-- Dockerfile.backend # Alternate backend Dockerfile
|       |-- entrypoint.sh      # Backend entrypoint script
|-- podcast-feed/              # Shared podcast logic (if applicable)
|-- docker-compose.yml         # Docker Compose file
|-- LICENSE                    # License information
|-- README.md                  # Project documentation
|-- requirements.txt           # Python dependencies
```

## Setup Instructions

### Prerequisites

Ensure the following tools are installed on your system:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/fullstack-podcast-app.git
   cd fullstack-podcast-app
   ```

2. Build and start the application using Docker Compose:

   ```bash
   docker-compose up --build
   ```

3. Access the application:

   - **Backend API**: `http://localhost:5000`
   - **Frontend**: `http://localhost:3000`

## Usage

### Adding Podcasts

- Place XML or JSON podcast files in the appropriate directory in the backend.
- The Flask API processes and stores the data either automatically or through a specific endpoint.

### Viewing Podcasts

- Open the React frontend at `http://localhost:3000` to browse, search, and interact with the podcasts.

## Frontend Features

- **Responsive Design**: View podcasts on any device with a clean, adaptable UI.
- **Search and Filter**: Quickly find podcasts using metadata such as title and author.
- **Detailed Views**: Access in-depth information about each podcast.

## Development Guide

### Backend Development

1. Navigate to the backend directory:

   ```bash
   cd apps/server
   ```

2. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask application:

   ```bash
   flask run
   ```

### Frontend Development

1. Navigate to the frontend directory:

   ```bash
   cd apps/client
   ```

2. Install Node.js dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

## License

This project is licensed under the [MIT License](LICENSE).

