import React from 'react'
import unimetLogo from "../assets/images/unimet.png"
import santosLogo from "../assets/images/santos.png"

const logos = {
    unimetLogo: unimetLogo,
    santosLogo: santosLogo
};

export default function CardExperience({ experience }) {
    return (
        <div className='w-full md:w-1/2 max-w-[660px] boxShadow relative overflow-hidden '>
            <div className='relative flex flex-col justify-center gap-4 h-full p-4 z-10'>
                <img src={logos[experience.logo]} alt="" srcset="" className="object-contain h-[95px] w-fit" />
                <h2 className='text-3xl font-medium'>{experience.title}</h2>
                
                <div className='flex flex-col gap-y-3'>
                    {/* Tiempo */}
                    <div>
                        <p>
                            <span className='font-bold'>Tiempo:</span> {experience.time}
                        </p>
                    </div>

                    {/* Marco de trabajo */}
                    <div>
                        <p>
                            <span className='font-bold'>Marco de trabajo:</span> {experience.framework}
                        </p>
                    </div>

                    {/* Responsabilidades */}
                    <div>
                        <p>
                            <span className='font-bold'>Responsabilidades:</span> {experience.responsibilities}
                        </p>
                    </div>

                    {/* Descripción */}
                    <div>
                        <p className="leading-7">
                            {experience.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
