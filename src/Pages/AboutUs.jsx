

import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          About Us
        </h2>
        <p className="text-lg text-center mb-6 animate-fade-in delay-200">
          At [Your Company Name], we are committed to providing innovative solutions in electrical and mechanical engineering. Our team of experts is dedicated to delivering quality services that exceed our clients' expectations.
        </p>
        <p className="text-lg text-center mb-8 animate-fade-in delay-400">
          With a focus on sustainability and efficiency, we strive to push the boundaries of technology while ensuring safety and reliability in all our projects.
        </p>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full md:w-1/3 p-4 animate-slide-up delay-500">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-gray-700">{member.title}</p>
                  <p className="mt-2 text-gray-800">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-opacity-25" style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }} />
    </section>
  );
};

const teamMembers = [
  {
    name: 'Alice Thompson',
    title: 'Lead Electrical Engineer',
    description: 'Alice has over 15 years of experience in electrical systems design and implementation, specializing in renewable energy solutions.',
    image: 'image1.jpg',
  },
  {
    name: 'David Smith',
    title: 'Mechanical Engineer',
    description: 'With expertise in CAD and mechanical design, David leads our mechanical projects with a focus on innovation and precision.',
    image: 'image2.jpg',
  },
  {
    name: 'Emily Carter',
    title: 'Project Manager',
    description: 'Emily ensures seamless project execution, managing timelines and resources to deliver high-quality results for our clients.',
    image: 'image3.jpg',
  },
];

export default AboutUs;
