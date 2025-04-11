from fastapi import APIRouter

router = APIRouter()

# Sample data structure for projects
projects_data = [
    {
        "id": 1,
        "title": "Portfolio Website",
        "description": "A modern responsive portfolio website.",
        "technologies": ["React", "Tailwind CSS", "FastAPI"],
        "url": "https://example.com"
    },
    # Add more projects as needed...
]

@router.get("/", summary="Get all projects")
async def get_projects():
    return projects_data
