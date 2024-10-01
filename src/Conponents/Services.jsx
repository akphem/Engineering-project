import React from 'react';

const servicesData = [
  {
    id: 1,
    icon: '🔧', // Replace with an actual icon or image
    title: 'Engineering Consulting',
    description: 'Providing expert advice on engineering projects and solutions, ensuring optimal design and functionality.',
    bgColor: 'bg-blue-200', // Background color for this card
  },
  {
    id: 2,
    icon: '🏗️', // Replace with an actual icon or image
    title: 'Project Management',
    description: 'Managing engineering projects from inception to completion, ensuring timely delivery and budget adherence.',
    bgColor: 'bg-green-200', // Background color for this card
  },
  {
    id: 3,
    icon: '💡', // Replace with an actual icon or image
    title: 'Design Services',
    description: 'Offering innovative design solutions tailored to your needs, focusing on creativity and sustainability.',
    bgColor: 'bg-yellow-200', // Background color for this card
  },
  {
    id: 4,
    icon: '⚙️', // Replace with an actual icon or image
    title: 'Technical Support',
    description: 'Providing ongoing support and troubleshooting for engineering issues, ensuring smooth operations and maintenance.',
    bgColor: 'bg-red-200', // Background color for this card
  },
];

const Services = () => {
  return (
    <section className="bg-white p-8 text-grey-600">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
        <p className="text-center mb-12 text-lg">
          We offer a variety of engineering services to meet your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map(service => (
            <div key={service.id} className={`rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-2xl ${service.bgColor}`}>
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              <p className="mt-2 text-gray-800">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
