import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Import icons for the menu
import logo from '../assets/logo_1.png'; // Importing logo image

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/aboutus', label: 'About Us' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="bg-gradient-to-r from-white to-indigo-300 text-green-800 shadow-lg">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo and Slogan Section */}
          <div className="flex items-center space-x-3 md:space-x-5">
            <img
              src={logo}
              alt="WyreGate Engineering Ltd. Logo"
              className="h-12 w-12 md:h-14 md:w-14 object-contain"
            />
            <div>
              <h1 className="text-xl md:text-3xl font-bold tracking-wide text-indigo-950">WyreGate Engineering Ltd.</h1>
              <p className="text-xs md:text-sm italic text-green-800 font-bold">RC 1333545</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-lg font-medium hover:text-indigo-600 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 shadow-md rounded-lg bg-white">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-3 px-5 text-lg font-semibold text-indigo-500 transition-colors duration-300 hover:text-yellow-400 hover:bg-transparent"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
