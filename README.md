# Portfolio Website

A modern responsive portfolio website with a React frontend and FastAPI backend.

## Architecture

+---------------+         API Calls (JSON)         +-----------------+
|               |  <------------------------------>  |                 |
|   React App   |                                  |    FastAPI      |
| (Tailwind CSS)|                                  |    Back-End     |
|               |         Static Assets          +-| (APIs, Auth,   |
+---------------+ <------- React Build Folder -----+ |  Contact, etc.)|
                                                      +-----------------+

portfolio-website
    |-- backend
    |   |-- Dockerfile
    |   |-- app
    |   |   |-- api
    |   |   |   |-- __init__.py
    |   |   |   `-- endpoints
    |   |   |       |-- __init__.py
    |   |   |       |-- contact.py
    |   |   |`-- projects.py
    |   |   |-- main.py
    |   |   `-- models
    |   |`-- project.py
    |   `-- requirements.txt
    |-- docker-compose.yml
    `-- frontend
        |-- Dockerfile
        |-- package.json
        |-- public
        |-- src
        |   |-- App.jsx
        |   |-- components
        |   |   `-- ContactForm.jsx
        |   |-- index.css
        |   |-- index.jsx
        |`-- pages
        `-- tailwind.config.js

## Features

- Responsive design with Tailwind CSS
- Project showcase section
- Contact form with form validation
- Docker containers for easy deployment
- API endpoints for projects and contact form

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Python](https://www.python.org/downloads/) (for local development)
- [Node.js](https://nodejs.org/) (for local development)

### Running the Application

#### Using Docker (Recommended)

1. Clone the repository

   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```
