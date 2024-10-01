import React, { useState } from 'react';

const portfolioData = [
  {
    id: 1,
    title: 'Project Alpha',
    description: 'A state-of-the-art residential building designed with sustainability in mind.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
    details: 'This project involved the design and construction of a residential building with energy-efficient systems and sustainable materials. Key features include solar panels and green roofs.',
  },
  {
    id: 2,
    title: 'Project Beta',
    description: 'An innovative bridge design that enhances connectivity and safety.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
    details: 'The bridge was designed using advanced engineering techniques to improve traffic flow and safety. It includes pedestrian walkways and lighting for enhanced usability.',
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A cutting-edge renewable energy facility utilizing solar power.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
    details: 'This facility harnesses solar energy to provide clean power to the local grid. It features state-of-the-art solar panel technology and energy storage solutions.',
  },
  {
    id: 4,
    title: 'Project Delta',
    description: 'A modern office complex focused on energy efficiency and employee well-being.',
    image: 'https://via.placeholder.com/300', // Replace with actual image URL
    details: 'The office complex was designed with employee wellness in mind, incorporating natural light, green spaces, and sustainable building practices.',
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="bg-gray-100 p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Our Portfolio</h2>
        <p className="text-center mb-12 text-lg text-gray-600">
          Explore our recent projects that demonstrate our commitment to quality and innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioData.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 cursor-pointer" onClick={() => handleOpenModal(project)}>
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for displaying project details */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{selectedProject.title}</h2>
              <p className="text-gray-700 mb-4">{selectedProject.details}</p>
              <button className="mt-4 bg-gray-800 text-white py-2 px-4 rounded" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
