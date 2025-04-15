import React from 'react'
import unimetLogo from "../assets/images/unimet.png"
import santosLogo from "../assets/images/santos.png"
import { FiCalendar, FiLayers, FiCheckCircle, FiFileText } from 'react-icons/fi'

const logos = {
    unimetLogo: unimetLogo,
    santosLogo: santosLogo
};

export default function CardExperience({ experience }) {
    return (
        <div className='w-full md:w-1/2 max-w-[660px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1'>
            <div className='relative flex flex-col gap-6 h-full p-6 md:p-8 z-10'>
                {/* Logo y título */}
                <div className='flex flex-col md:flex-row md:items-center gap-4 md:gap-6'>
                    <img 
                        src={logos[experience.logo]} 
                        alt={experience.title} 
                        className="object-contain h-20 w-auto max-w-[120px] rounded-lg p-2" 
                    />
                    <h2 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                        {experience.title}
                    </h2>
                </div>
                
                {/* Detalles de la experiencia */}
                <div className='flex flex-col gap-y-4 text-gray-700'>
                    {/* Tiempo */}
                    <div className='flex items-start gap-3'>
                        <FiCalendar className="text-blue-500 mt-1 flex-shrink-0" />
                        <p>
                            <span className='font-semibold text-gray-800'>Duración:</span> {experience.time}
                        </p>
                    </div>

                    {/* Marco de trabajo */}
                    <div className='flex items-start gap-3'>
                        <FiLayers className="text-purple-500 mt-1 flex-shrink-0" />
                        <p>
                            <span className='font-semibold text-gray-800'>Marco de trabajo:</span> {experience.framework}
                        </p>
                    </div>

                    {/* Responsabilidades */}
                    <div className='flex items-start gap-3'>
                        <FiCheckCircle className="text-blue-500 mt-1 flex-shrink-0" />
                        <p>
                            <span className='font-semibold text-gray-800'>Responsabilidades:</span> {experience.responsibilities}
                        </p>
                    </div>

                    {/* Descripción */}
                    <div className='flex items-start gap-3 pt-2'>
                        <FiFileText className="text-purple-500 mt-1 flex-shrink-0" />
                        <p className="leading-relaxed">
                            {experience.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}