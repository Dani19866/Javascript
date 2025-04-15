import React from 'react';
import photo from "../assets/images/photo.png";
import heroBackgroundPhoto from "../assets/images/hero_background_photo.svg";
import HeroBackgroundText from "../assets/images/hero_background_text.svg";
import download from "../assets/icons/download.svg";
import contactme from "../assets/icons/contactme.svg";
import { FiDownload, FiMail } from 'react-icons/fi';

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden">
            {/* Container flex */}
            <div className="flex flex-col-reverse md:flex-row gap-0 min-h-screen">

                {/* Picture Hero - Left Side */}
                <div className="md:w-[45%] flex justify-center items-center relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM0MDk2RkYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzQuNUMzNiAxOS4zNjkgMjMuNjMxIDcgOC41IDdDMTkuMzY5IDcgMzIgMTkuMzY5IDMyIDM0LjVDMzIgNDkuNjMxIDQ0LjM2OSA2MiA1OS41IDYyQzQ4LjYzMSA2MiAzNiA0OS42MzEgMzYgMzQuNVoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
                    
                    {/* Photo with floating animation */}
                    <div className="relative z-10 group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition-all duration-300 animate-tilt"></div>
                        <img 
                            src={photo} 
                            alt="Daniel De Oliveira" 
                            className="relative z-10 object-cover object-center max-h-[80vh] rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105" 
                        />
                    </div>
                </div>

                {/* Text Hero - Right Side */}
                <div className="w-full md:w-[55%] flex items-center justify-center relative overflow-hidden bg-white py-12 px-6 sm:px-12 lg:px-24">
                    {/* Animated background elements */}
                    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
                    </div>

                    {/* Text content */}
                    <div className='w-full max-w-2xl flex flex-col z-10 relative gap-y-8'>
                        {/* Title with gradient */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Lleva tu empresa al siguiente nivel
                            </span> con soluciones tecnológicas avanzadas
                        </h1>

                        {/* Paragraph */}
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Soy <strong className="text-blue-600">Daniel De Oliveira</strong>, estudiante de últimos trimestres
                            de Ingeniería en Sistemas en la Universidad Metropolitana de
                            Caracas. Especializado en <strong className="text-purple-600">análisis de datos</strong>, 
                            <strong className="text-blue-600"> desarrollo BackEnd</strong>, 
                            <strong className="text-purple-600"> administración de servidores Linux</strong> y 
                            <strong className="text-blue-600"> servicios en la nube (AWS)</strong>.
                        </p>

                        {/* Buttons */}
                        <div className='flex flex-wrap gap-4 mt-4'>
                            <a 
                                href="https://docs.google.com/document/d/1x8FFzH5Gfforw-_zITdCjgzUDjQWOii8HaseurX3u4I" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold flex items-center gap-2 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <FiDownload className="text-lg" />
                                Descargar CV
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}