import React from 'react';
import { FiGithub } from 'react-icons/fi';
import blackjackImg from "../assets/images/blackjack.jpg";
import universityImg from "../assets/images/university.png";
import bingoImg from "../assets/images/bingo.png";
import graphImg from "../assets/images/graph.png";
import menuImg from "../assets/images/menu1.png";
import menu2Img from "../assets/images/menu2.png";
import scriptImg from "../assets/images/pentesting.jpg";
import laravelImg from "../assets/images/laravel.png";

const images = {
    blackjackImg: blackjackImg,
    universityImg: universityImg,
    bingoImg: bingoImg,
    graphImg: graphImg,
    menuImg: menuImg,
    menu2Img: menu2Img,
    scriptImg: scriptImg,
    laravelImg: laravelImg
}

export default function CardProject({ project }) {
    const tagColors = {
        // Lenguajes
        'JAVA': 'bg-blue-100 text-blue-800',
        'Python': 'bg-amber-100 text-amber-800',
        'JavaScript': 'bg-yellow-100 text-yellow-800',
        'PHP': 'bg-fuchsia-100 text-fuchsia-800',
        'CSS': 'bg-blue-100 text-blue-800',
        
        // Frameworks/Librerías
        'Swing': 'bg-purple-100 text-purple-800',
        'React': 'bg-cyan-100 text-cyan-800',
        'Laravel': 'bg-red-100 text-red-800',
        'Tailwind': 'bg-teal-100 text-teal-800',
        'JUnit': 'bg-indigo-100 text-indigo-800',
        'Matplotlib': 'bg-green-100 text-green-800',
        
        // Tecnologías/Herramientas
        'Firebase': 'bg-orange-100 text-orange-800',
        'Arduino': 'bg-gray-100 text-gray-800',
        'RFID': 'bg-amber-100 text-amber-800',
        'PostgreSQL': 'bg-violet-100 text-violet-800',
        'Requests': 'bg-emerald-100 text-emerald-800',
        
        // Conceptos
        'UI/UX': 'bg-pink-100 text-pink-800',
        'Testing': 'bg-lime-100 text-lime-800',
        'Estructura': 'bg-rose-100 text-rose-800',
        'Seguridad': 'bg-red-100 text-red-800',
        'Pentesting': 'bg-rose-100 text-rose-800',
        'SQLi': 'bg-orange-100 text-orange-800',
        'Scraping': 'bg-indigo-100 text-indigo-800',
        'WPA': 'bg-blue-100 text-blue-800',
        
        // Tipos de proyecto
        'Juego': 'bg-green-100 text-green-800',
        'App': 'bg-emerald-100 text-emerald-800',
        'Herramienta': 'bg-purple-100 text-purple-800',
        
        // Otros
        'Archivos': 'bg-gray-100 text-gray-800',
        'JSON': 'bg-yellow-100 text-yellow-800',
    };

    const getTagColor = (tag) => {
        return tagColors[tag] || 'bg-gray-100 text-gray-800';
    };

    return (
        <div className="h-[575px] w-[300px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            {/* Image Container - Fixed Height */}
            <div className='h-[220px] w-full overflow-hidden'>
                <img 
                    src={images[project.img]} 
                    alt={project.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-500" 
                />
            </div>

            {/* Content Container - Flex Grow for Fixed Card Height */}
            <div className='p-5 flex-1 flex flex-col'>
                {/* Text Content */}
                <div className='flex-1'>
                    <span className='text-sm font-medium text-blue-600'>
                        {project.subtitle}
                    </span>

                    <h4 className="font-bold text-xl mt-1 text-gray-800">
                        {project.title}
                    </h4>

                    <p className='mt-3 text-gray-600 text-sm leading-relaxed line-clamp-4'>
                        {project.desc}
                    </p>
                </div>

                {/* Tags */}
                <div className='mt-4 flex flex-wrap gap-2'>
                    {project.tags.map((tag, index) => (
                        <span
                            key={index}
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Button - Fixed at Bottom Right */}
                <div className='mt-4 flex justify-end'>
                    <a 
                        href={project.git_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm font-semibold"
                    >
                        <FiGithub className="text-sm" />
                        Ver código
                    </a>
                </div>
            </div>
        </div>
    );
}