from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.endpoints import projects, contact

app = FastAPI(
    title="My Portfolio API",
    description="APIs for my portfolio website",
    version="1.0.0",
    # Disable automatic redirects for trailing slashes
    redirect_slashes=False
)

# Enable CORS to allow the React front-end to communicate with the API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "http://frontend", "http://frontend:80"],  # Added Vite dev server
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include API endpoints
app.include_router(projects.router, prefix="/api/projects", tags=["projects"])
app.include_router(contact.router, prefix="/api/contact", tags=["contact"])

# Optional: Add a root endpoint to serve a quick status check
@app.get("/")
async def read_root():
    return {"message": "Welcome to my Portfolio API"}
