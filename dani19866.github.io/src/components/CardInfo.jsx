import React from 'react';
import devLogo from "../assets/icons/devLogo.svg";
import platformsLogo from "../assets/icons/platformsLogo.svg";
import bigDataLogo from "../assets/icons/bigDataLogo.svg";
import serverLogo from "../assets/icons/serverLogo.svg";

const icons = {
  devLogo: devLogo,
  platformsLogo: platformsLogo,
  bigDataLogo: bigDataLogo,
  serverLogo: serverLogo
};

export default function CardInfo({ duty }) {
  return (
    <div className='flex flex-row gap-6 w-full max-w-[975px] p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10 pointer-events-auto'>
      {/* SVG Container */}
      <div className="flex-shrink-0 w-20 h-20 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 flex justify-center items-center p-4 pointer-events-auto">
        <img 
          src={icons[duty.icon]} 
          alt={duty.title} 
          className="w-full h-full object-contain pointer-events-auto"
        />
      </div>

      {/* Text Content */}
      <div className='flex flex-col gap-y-3 flex-1 pointer-events-auto'>
        <h3 className='font-bold text-xl text-gray-800'>{duty.title}</h3>
        <p className='text-gray-600 leading-relaxed pointer-events-auto'>
          {duty.description.map((part, index) => (
            part.bold ? (
              <strong key={index} className="text-blue-600 pointer-events-auto">{part.text}</strong>
            ) : (
              <span key={index} className="pointer-events-auto">{part.text}</span>
            )
          ))}
        </p>
      </div>
    </div>
  );
}