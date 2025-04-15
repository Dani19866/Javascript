import React from 'react';
import { FiMail, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Primera fila: Logo y redes */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <FiCode className="text-2xl text-blue-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Daniel De Oliveira
            </span>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/Dani19866" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FiGithub className="text-2xl" />
            </a>
            <a 
              href="https://www.linkedin.com/in/daniel-antonio-de-oliveira-/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-2xl" />
            </a>
            <a 
              href="mailto:deoliveiradaniel200@gmail.com" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
              aria-label="Email"
            >
              <FiMail className="text-2xl" />
            </a>
          </div>
        </div>

        {/* Segunda fila: Menú rápido */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Inicio</a>
          <a href="#servicios" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Servicios</a>
          <a href="#experiencia" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Experiencia</a>
          <a href="#proyectos" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Proyectos</a>
        </div>

        {/* Tercera fila: Derechos y créditos */}
        <div className="text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Daniel De Oliveira. Todos los derechos reservados.</p>
          <p className="mt-1">Desarrollado con React y Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}