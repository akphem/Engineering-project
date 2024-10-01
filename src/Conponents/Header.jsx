import React from 'react';
import logo_1 from '../assets/logo_1.png'; // Adjust the path according to your project structure

const Header = () => {
  return (
    <header className="bg-white text-gray-700 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Slogan Section */}
        <div className="flex items-center space-x-4">
          <img
            src={logo_1} // Use the imported logo
            alt="Company Logo"
            className="h-12 w-12 object-contain"
          />
          <div>
            <h1 className="text-2xl font-bold">WyreGate Engineering Ltd.</h1>
            <p className="text-sm italic">RC 1333545</p>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="hidden md:flex space-x-6 ml-auto">
          <a href="/" className="text-lg font-semibold transition duration-300 hover:text-blue-600 hover:underline">Home</a>
          <a href="/services" className="text-lg font-semibold transition duration-300 hover:text-blue-600 hover:underline">Services</a>
          <a href="/projects" className="text-lg font-semibold transition duration-300 hover:text-blue-600 hover:underline">Projects</a> {/* Added Projects Link */}
          <a href="/about" className="text-lg font-semibold transition duration-300 hover:text-blue-600 hover:underline">About Us</a>
          <a href="/contact" className="text-lg font-semibold transition duration-300 hover:text-blue-600 hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
