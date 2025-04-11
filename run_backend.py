import os
import sys
import uvicorn

# Add the backend directory to the Python path
backend_dir = os.path.join(os.path.dirname(__file__), "portfolio-website", "backend")
sys.path.insert(0, backend_dir)

if __name__ == "__main__":
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)