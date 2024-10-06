import React from 'react';
import image from '../assets/watermark remove man.jpeg'; // Ensure the image path is correct

const Whoweare = () => {
  return (
    <section className="bg-gray-100 py-16 lg:py-24">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 space-y-10 lg:space-y-0 lg:space-x-12">
        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            WyreGate Engineering Limited is a leading provider of electrical and mechanical engineering solutions.
            Our team of experts is committed to delivering innovative solutions tailored to meet the unique needs of
            each client. Whether you're looking for industrial, commercial, or residential services, we are dedicated 
            to helping you achieve success with precision and excellence.
          </p>
          <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 hover:shadow-xl transform hover:scale-105">
            Read More
          </button>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <div className="relative w-full h-full">
            <img
              src={image}
              alt="Who We Are"
              className="w-full h-auto object-cover rounded-lg shadow-xl border-4 border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whoweare;
