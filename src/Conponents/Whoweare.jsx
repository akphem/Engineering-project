import React from 'react';
import image from '../assets/watermark remove man.jpeg'; // Adjust the image file name as needed

const Whoweare = () => {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-10 lg:px-20">
        {/* Text Section */}
        <div className="md:w-1/2 mb-8 md:mb-0 lg:pr-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            WHO WE ARE
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            WyreGate Engineering Limited is a leading provider of electrical and mechanical
            engineering solutions. Our team of experts is committed to delivering innovative
            solutions tailored to meet the unique needs of each client. Whether you're looking for
            industrial, commercial, or residential services, we are dedicated to helping you achieve
            success with precision and excellence.
          </p>
          <button className="bg-blue-600 text-white py-3 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300 hover:shadow-lg">
            READ MORE
          </button>
        </div>
        
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt="Who We Are Background"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
