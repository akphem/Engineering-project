import React, { useState } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: 'John Doe',
    title: 'CEO, Company A',
    testimonial: 'The engineering consulting services provided were exceptional. They helped us optimize our design and significantly reduce costs.',
    image: 'https://via.placeholder.com/100', // Replace with an actual image URL
  },
  {
    id: 2,
    name: 'Jane Smith',
    title: 'Project Manager, Company B',
    testimonial: 'Their project management skills are top-notch! They ensured timely delivery and adhered to our budget without compromising quality.',
    image: 'https://via.placeholder.com/100', // Replace with an actual image URL
  },
  {
    id: 3,
    name: 'Mark Johnson',
    title: 'Head of Design, Company C',
    testimonial: 'The design services were innovative and tailored to our specific needs. We were very impressed with the results!',
    image: 'https://via.placeholder.com/100', // Replace with an actual image URL
  },
  {
    id: 4,
    name: 'Emily Davis',
    title: 'Operations Manager, Company D',
    testimonial: 'Technical support has been excellent. They are always there to assist us with any issues that arise.',
    image: 'https://via.placeholder.com/100', // Replace with an actual image URL
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section className="bg-gradient-to-r from-gray-200 to-white p-8">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">What Our Clients Say</h2>
        <p className="text-center mb-12 text-lg text-gray-600">
          Hear from our satisfied clients about their experiences with us.
        </p>
        <div className="flex justify-center">
          <div className="bg-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out">
            <div className="flex items-center mb-4">
              <img
                src={testimonialsData[currentIndex].image}
                alt={testimonialsData[currentIndex].name}
                className="h-16 w-16 rounded-full border-2 border-gray-300 mr-4"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{testimonialsData[currentIndex].name}</h3>
                <p className="text-sm text-gray-500 italic">{testimonialsData[currentIndex].title}</p>
              </div>
            </div>
            <p className="text-gray-700 italic text-lg mb-6">
              "{testimonialsData[currentIndex].testimonial}"
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={prevTestimonial}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Previous
              </button>
              <button
                onClick={nextTestimonial}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
