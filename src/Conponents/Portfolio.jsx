import React from "react";
import image from "../assets/p1.jpg"; // Correct import for image
import image2 from "../assets/p4.jpg"; // Correct import for image

// Portfolio data array
const projects = [
  {
    name: "Aldgate Tower",
    description: "A state-of-the-art electrical installation project.",
    image: image, // Direct reference to imported image
  },
  {
    name: "West Hill Primary School",
    description: "Innovative engineering solutions for educational facilities.",
    image: image2, // Direct reference to imported image
  },
  {
    name: "Huawei Nanjing R&D Center",
    description: "Leading-edge research and development infrastructure.",
    image: "path-to-image/huawei-nanjing.png", // Keeping this as a placeholder
  },
  {
    name: "Huawei Nanjing R&D Center",
    description: "Advanced technology center to support global initiatives.",
    image: "path-to-image/huawei-nanjing.png", // Keeping this as a placeholder
  },
];

// Individual project card component
const PortfolioCard = ({ name, description, image }) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg group">
    <img
      className="w-full h-60 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110"
      src={image}
      alt={name}
    />
    <div className="absolute bottom-0 left-0 bg-gray-800 bg-opacity-70 text-white p-4 w-full">
      <h3 className="font-bold text-lg text-center">{name}</h3>
      {description && <p className="text-center text-sm mt-1">{description}</p>}
    </div>
  </div>
);

// Main portfolio component
const Portfolio = () => {
  return (
    <section className="py-12 bg-gray-100 flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Our Projects</h1>
          <p className="mt-4 text-lg text-gray-600">
            WyreGate Engineering Limited specializes in delivering high-quality electrical and mechanical engineering solutions. Our projects span a wide range of industries, ensuring efficient and reliable outcomes for each client.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            Across the globe, our teams push the limits of what’s possible and build legacies for generations to come.
          </p>
        </div>

        {/* Completed Projects */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <p className="font-semibold text-gray-700 text-2xl">
            Completed Projects:
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>

        {/* Ongoing Projects */}
        <div className="flex flex-col items-center space-y-4 mb-8 pt-10">
          <p className="font-semibold text-gray-700 text-2xl">Ongoing Projects:</p>
        </div>

        {/* Projects Grid for Ongoing Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
