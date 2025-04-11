import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { id } = useParams();
  
  // In a real application, you would fetch the specific project by id
  return (
    <div className="container-custom py-10">
      <h1 className="text-center mb-10">Project Details</h1>
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg mb-4">Project ID: {id}</p>
        <p className="text-gray-700">
          This is a placeholder for a detailed project view. In a real application,
          this would show all details about the selected project.
        </p>
        <button 
          onClick={() => window.history.back()}
          className="btn btn-primary mt-6"
        >
          Back to Projects
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;