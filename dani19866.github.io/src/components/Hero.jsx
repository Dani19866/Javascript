import React from 'react'
import photo from "../assets/images/photo.png"
import heroBackgroundPhoto from "../assets/images/hero_background_photo.svg"
import HeroBackgroundText from "../assets/images/hero_background_text.svg"
import download from "../assets/icons/download.svg"
import contactme from "../assets/icons/contactme.svg"

export default function Hero() {
    return (
        <div>

            {/* Container flex */}
            <div className="flex flex-row gap-4 md:h-full lg:h-[725px]">

                {/* Picture Hero*/}
                <div className="w-[45%] flex justify-center relative overflow-hidden boxShadow">
                    <img src={heroBackgroundPhoto} alt="" className='absolute w-full h-full opacity-65' />
                    <img src={photo} alt="" className="z-10 relative object-cover" />
                </div>

                {/* Text Hero */}
                <div className="w-[55%] flex items-center justify-center relative overflow-hidden boxShadow">

                    {/* Background */}
                    <img src={HeroBackgroundText} alt="" className='absolute w-full h-full opacity-65 md:-top-28 lg:-top-14 xl:top-0' />

                    {/* Text */}
                    <div className='w-[658px] xl:w-[800px] flex flex-col z-10 relative xl:gap-y-10 md:p-10 md:gap-y-5 lg:mt-28'>
                        
                        {/* Title */}
                        <h1 className="font-bold lg:text-7xl lg:font-bold md:text-5xl md:font-extrabold">Lleva tu empresa al otro nivel con personal capacitado</h1>

                        {/* Paragraph */}
                        <p className="leading-6"> Soy Daniel De Oliveira y estoy cursando mis últimos trimestres
                            de ingeniería en sistemas en la Universidad Metropolitana de
                            Caracas, en Venezuela. En los sistemas de información me especializo en la
                            <strong> base de datos, análisis de datos, Big Data, desarrollo BackEnd, redes, </strong> 
                            administración de servidores
                            <strong> Linux </strong>
                            y el manejo de servicios en la nube 
                            <strong> (AWS)</strong>.</p>

                        <div className='flex-row gap-5 flex'>
                            <button className='p-2 border border-black rounded-2xl font-semibold text-sm bg-black text-white flex flex-row justify-center items-center gap-2 hover:cursor-pointer'>
                                <img src={download} alt="" />
                                <a href="https://docs.google.com/document/d/1x8FFzH5Gfforw-_zITdCjgzUDjQWOii8HaseurX3u4I" target="_blank">Descargar CV</a>
                            </button>
                            <button className='p-2 border border-black rounded-2xl font-semibold text-sm flex flex-row justify-center items-center gap-2 hover:cursor-pointer'>
                                <img src={contactme} alt="" />
                                <a href='mailto:deoliveiradaniel200@gmail.com'>Contactarme</a>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
