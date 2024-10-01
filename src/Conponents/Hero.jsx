import React, { useState, useEffect } from 'react';

// Importing images from the assets folder
import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fadeText, setFadeText] = useState(true); // Control for smooth text transition

  // Array of slides with images, titles, and descriptions
  const slides = [
    {
      image: slide1,
      title: 'Electrical Design & Installation',
      description: 'Expert electrical design, installation, and maintenance for all industrial needs.',
    },
    {
      image: slide2,
      title: 'Mechanical Engineering Solutions',
      description: 'Innovative mechanical solutions tailored to enhance your production efficiency.',
    },
    {
      image: slide3,
      title: 'Automation & Control Systems',
      description: 'Providing state-of-the-art automation and control systems to optimize your operations.',
    },
  ];

  // Change slides every 5 seconds with a smooth fade for captions
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setFadeText(false); // Start text fade-out

      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length); // Change slide after text fade-out
        setFadeText(true); // Start text fade-in after slide change
      }, 500); // Duration for fade-out effect before switching the slide
    }, 5000); // Slide change every 5 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-screen bg-gray-900 text-white flex justify-center items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {/* Fade-in and fade-out images */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
      </div>

      {/* Hero content with smoother text transitions */}
      <div className="relative z-10 max-w-4xl text-center p-6">
        {/* Smooth Animated Title */}
        <h1
          className={`text-5xl md:text-6xl font-bold mb-4 transition-all duration-700 ease-in-out transform ${
            fadeText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {slides[currentSlide].title}
        </h1>

        {/* Smooth Animated Description */}
        <p
          className={`text-lg md:text-xl mb-8 transition-all duration-700 ease-in-out transform ${
            fadeText ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {slides[currentSlide].description}
        </p>

        {/* Static Call-to-Action Button */}
        <a
          href="#services"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
