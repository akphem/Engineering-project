import React from 'react';

const IconWrapper = ({ children, color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

const servicesData = [
  {
    id: 1,
    icon: (
      <IconWrapper color="#3B82F6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </IconWrapper>
    ),
    title: 'Electrical Engineering Design',
    description: 'We specialize in efficient services across multiple sectors to meet modern standards and community requirements',
    bgColor: 'bg-blue-50',
  },
  {
    id: 2,
    icon: (
      <IconWrapper color="#10B981">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </IconWrapper>
    ),
    title: 'Electrical Reticulation in Buildings',
    description: 'We provide expert electrical reticulation services for residential, commercial, and industrial buildings.',
    bgColor: 'bg-green-50',
  },
  {
    id: 3,
    icon: (
      <IconWrapper color="#FBBF24">
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </IconWrapper>
    ),
    title: 'Substation Planning and Control',
    description: 'Our team is experienced in planning and controlling substations to ensure reliable power distribution.',
    bgColor: 'bg-yellow-50',
  },
  {
    id: 4,
    icon: (
      <IconWrapper color="#EF4444">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </IconWrapper>
    ),
    title: 'Technical Support',
    description: 'Providing ongoing support and troubleshooting for engineering issues, ensuring smooth operations and maintenance.',
    bgColor: 'bg-red-50',
  },
];

const Services = () => {
  const handleReadMore = (title) => {
    console.log(`More information about ${title}`);
    // Implement your logic here
  };

  return (
    <section className="bg-gray-100 py-12 text-gray-600">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">Our Services</h2>
        <p className="text-center mb-10 text-lg text-gray-700 max-w-2xl mx-auto">
          We offer a variety of engineering services to meet your needs, from electrical engineering to technical support.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {servicesData.map(service => (
            <div
              key={service.id}
              className={`rounded-lg shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl ${service.bgColor}`}
            >
              <div className="mb-4 md:mb-6 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-4 text-sm md:text-base">{service.description}</p>
              <button
                onClick={() => handleReadMore(service.title)}
                className="w-full mt-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-label={`Read more about ${service.title}`}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;