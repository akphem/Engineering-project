import React from 'react';

const testimonials = [
  {
    name: 'Benny',
    role: 'ARCHITECT (INTJ-A)',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.,
    img: 'path-to-image/benny.png',
    roleColor: 'text-purple-600',
    borderColor: 'border-purple-300',
  },
  {
    name: 'Nicole',
    role: 'ADVOCATE (INFJ-T)',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'path-to-image/nicole.png',
    roleColor: 'text-green-600',
    borderColor: 'border-green-300',
  },
  {
    name: 'Caroline',
    role: 'DEFENDER (ISFJ-A)',
    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'path-to-image/caroline.png',
    roleColor: 'text-blue-600',
    borderColor: 'border-blue-300',
  },
  {
    name: 'Marta',
    role: 'COMMANDER (ENTJ-A)',
    comment: 'It is awesome to read something that describes you so well. I did not expect the profile to be so accurate.',
    img: 'path-to-image/marta.png',
    roleColor: 'text-purple-600',
    borderColor: 'border-purple-300',
  },
];

const TestimonialCard = ({ name, role, comment, img, roleColor, borderColor }) => {
  return (
    <div className={`max-w-xs p-6 border-t-4 rounded-md ${borderColor} bg-white shadow-lg`}>
      <div className="flex items-center space-x-4 mb-4">
        <img className="w-16 h-16 rounded-full object-cover" src={img} alt={name} />
        <div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className={`${roleColor} font-semibold`}>{role}</p>
        </div>
      </div>
      <p className="text-gray-600">{comment}</p>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-12">See what others have to say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
