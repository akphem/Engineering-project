import React from 'react';
import { FiTool, FiPackage, FiLightbulb, FiSettings } from 'react-icons/fi'; // Icons from React Icons library

const servicesData = [
  {
    id: 1,
    icon: <FiTool className="text-blue-500" size={50} />, // Replace emoji with actual icon
    title: 'Engineering Consulting',
    description: 'Providing expert advice on engineering projects and solutions, ensuring optimal design and functionality.',
    bgColor: 'bg-blue-50', // Updated lighter background color for a modern look
  },
  {
    id: 2,
    icon: <FiPackage className="text-green-500" size={50} />, // Replace emoji with actual icon
    title: 'Project Management',
    description: 'Managing engineering projects from inception to completion, ensuring timely delivery and budget adherence.',
    bgColor: 'bg-green-50', // Updated lighter background color
  },
  {
    id: 3,
    icon: <FiLightbulb className="text-yellow-500" size={50} />, // Replace emoji with actual icon
    title: 'Design Services',
    description: 'Offering innovative design solutions tailored to your needs, focusing on creativity and sustainability.',
    bgColor: 'bg-yellow-50', // Updated lighter background color
  },
  {
    id: 4,
    icon: <FiSettings className="text-red-500" size={50} />, // Replace emoji with actual icon
    title: 'Technical Support',
    description: 'Providing ongoing support and troubleshooting for engineering issues, ensuring smooth operations and maintenance.',
    bgColor: 'bg-red-50', // Updated lighter background color
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-12 text-gray-600">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Our Services</h2>
        <p className="text-center mb-12 text-lg text-gray-700">
          We offer a variety of engineering services to meet your needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map(service => (
            <div
              key={service.id}
              className={`rounded-lg shadow-lg p-8 transition-transform transform hover:scale-105 hover:shadow-2xl ${service.bgColor}`}
            >
              <div className="mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
