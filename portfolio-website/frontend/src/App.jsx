import React, { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ContactForm from './components/ContactForm';

// Import pages
const ProjectPage = React.lazy(() => import('./pages/ProjectPage'));

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Use API URL from environment variable or default to localhost
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000';
        // Ensure the URL has no trailing slash before adding the endpoint
        const baseUrl = apiUrl.endsWith('/') ? apiUrl.slice(0, -1) : apiUrl;
        const response = await fetch(`${baseUrl}/api/projects`);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Set empty array on error to avoid map errors
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="container-custom py-10">
      <h1 className="text-center mb-10">My Portfolio</h1>
      
      <section className="mb-16">
        <h2 className="mb-6">About Me</h2>
        <p className="text-lg">
          I am a passionate developer with experience in full-stack web development.
          My skills include React, Tailwind CSS, FastAPI, and more.
        </p>
      </section>
      
      <section className="mb-16">
        <h2 className="mb-6">Projects</h2>
        {loading ? (
          <p>Loading projects...</p>
        ) : projects.length === 0 ? (
          <p>No projects found. Add some projects to showcase your work!</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <span className="font-semibold">Technologies: </span>
                  {project.technologies.join(', ')}
                </div>
                <div className="flex space-x-4">
                  {project.url && (
                    <a 
                      href={project.url} 
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                  )}
                  <Link to={`/project/${project.id}`} className="text-primary hover:underline">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      
      <section>
        <h2 className="mb-6">Contact Me</h2>
        <ContactForm />
      </section>
    </div>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md py-4">
        <nav className="container-custom flex justify-between items-center">
          <div className="text-xl font-bold">Portfolio</div>
          <div className="space-x-4">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
          </div>
        </nav>
      </header>
      
      <main className="flex-grow">
        <React.Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={
              <div className="container-custom py-10">
                <h1 className="text-center mb-10">Contact Me</h1>
                <ContactForm />
              </div>
            } />
            <Route path="/project/:id" element={<ProjectPage />} />
            <Route path="*" element={
              <div className="container-custom py-10 text-center">
                <h1>404 - Page Not Found</h1>
                <p className="mt-4">The page you're looking for doesn't exist.</p>
                <Link to="/" className="btn btn-primary mt-4">Go Home</Link>
              </div>
            } />
          </Routes>
        </React.Suspense>
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="container-custom text-center">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;