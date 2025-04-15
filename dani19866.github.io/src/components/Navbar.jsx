import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const mailto = 'mailto:deoliveiradaniel200@gmail.com'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cierra el menú móvil al hacer clic en un enlace
  const handleNavClick = () => {
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  return (
    <div className={`fixed w-full z-50 transition-all shadow duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-1 shadow-lg' : 'bg-white py-2'}`}>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className="flex justify-between items-center w-full">
          {/* Brand */}
          <div className="flex flex-col items-center h-full transform hover:scale-105 transition-transform duration-200">
            <h2 className="font-bold uppercase text-base md:text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Daniel De Oliveira
            </h2>
            <h3 className="uppercase text-xs md:text-sm text-gray-600">Ingeniero en Sistemas</h3>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex flex-row h-full gap-x-6 md:gap-x-8 items-center justify-center">
            {['Servicios', 'Experiencia', 'Proyectos'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="uppercase hover:cursor-pointer text-sm md:text-base font-medium relative group transition-colors duration-300 hover:text-blue-600"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href={mailto} >
              <button className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-md">
                Contacto
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`sm:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <div className="pt-4 pb-6 space-y-4">
            {['Servicios', 'Experiencia', 'Proyectos'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                onClick={handleNavClick}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <a href={mailto} >
              <button className="mt-2 w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:from-blue-600 hover:to-purple-600 transition-all duration-300">
                Contacto
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}