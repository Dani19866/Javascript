import React from 'react'
import unimetLogo from "../assets/images/unimet.png"
import santosLogo from "../assets/images/santos.png"
import experienceBackground from "../assets/images/experience_background.svg"

const logos = {
    unimetLogo: unimetLogo,
    santosLogo: santosLogo
  };

export default function CardFifty({ className, cardData }) {
    return (
        <div className='w-1/2 h-[700px] bg-[#E5E5E5] boxShadow relative overflow-hidden '>
            <img src={experienceBackground} alt="" className={`absolute h-full w-[1000px] ${className}`} />

            <div className='relative flex flex-col justify-center gap-4 h-full p-4 z-10'>
                <img src={logos[cardData.logo]}  alt="" srcset="" className="object-contain h-[95px] w-fit" />
                <h2 className='text-3xl font-medium'>{cardData.title}</h2>
                <div className='flex flex-col gap-y-2 lg:text-lg'>
                    {/* Tiempo */}
                    <div>
                        <p>
                            <span className='font-bold'>Tiempo:</span> {cardData.time}
                        </p>
                    </div>

                    {/* Marco de trabajo */}
                    <div>
                        <p>
                            <span className='font-bold'>Marco de trabajo:</span> {cardData.framework}
                        </p>
                    </div>

                    {/* Responsabilidades */}
                    <div>
                        <p>
                            <span className='font-bold'>Responsabilidades:</span> {cardData.responsibilities}
                        </p>
                    </div>

                    {/* Descripción */}
                    <div>
                        <p>
                            {cardData.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
