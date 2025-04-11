#!/bin/bash

# Define the base directory for the portfolio website
BASE_DIR="portfolio-website"

echo "Creating base directory: $BASE_DIR"
mkdir -p "$BASE_DIR"

# -------------------------------
# Create Backend Structure
# -------------------------------
echo "Creating backend directories..."
mkdir -p "$BASE_DIR/backend/app/api/endpoints"
mkdir -p "$BASE_DIR/backend/app/models"

# Create backend placeholder files
echo "Creating backend placeholder files..."
touch "$BASE_DIR/backend/app/main.py"
touch "$BASE_DIR/backend/app/api/__init__.py"
touch "$BASE_DIR/backend/app/api/endpoints/__init__.py"
touch "$BASE_DIR/backend/app/api/endpoints/projects.py"
touch "$BASE_DIR/backend/app/api/endpoints/contact.py"
touch "$BASE_DIR/backend/app/models/project.py"
touch "$BASE_DIR/backend/requirements.txt"
touch "$BASE_DIR/backend/Dockerfile"

# -------------------------------
# Create Frontend Structure
# -------------------------------
echo "Creating frontend directories..."
mkdir -p "$BASE_DIR/frontend/public"
mkdir -p "$BASE_DIR/frontend/src/components"
mkdir -p "$BASE_DIR/frontend/src/pages"

# Create frontend placeholder files
echo "Creating frontend placeholder files..."
touch "$BASE_DIR/frontend/src/App.jsx"
touch "$BASE_DIR/frontend/src/index.jsx"
touch "$BASE_DIR/frontend/src/index.css"
touch "$BASE_DIR/frontend/src/components/ContactForm.jsx"
touch "$BASE_DIR/frontend/package.json"
touch "$BASE_DIR/frontend/tailwind.config.js"
touch "$BASE_DIR/frontend/Dockerfile"

# -------------------------------
# Create Root-Level Files
# -------------------------------
echo "Creating docker-compose file..."
touch "$BASE_DIR/docker-compose.yml"

echo "Project tree for the portfolio website has been created under: $BASE_DIR"
