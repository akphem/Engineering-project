import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">WyreGate Engineering Limited</h1>
          <p className="text-sm">Engineering Solutions for Tomorrow</p>
        </div>
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/services" className="hover:underline">Services</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/projects" className="hover:underline">Projects</a>
        </div>
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} WyreGate Engineering Limited. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
