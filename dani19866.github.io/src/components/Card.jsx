import React from 'react'
import historyBackground from "../assets/images/history_background.svg"
import timeline from "../assets/images/timeline.png"

export default function Card() {
    return (
        <div className='w-full bg-white boxShadow relative overflow-hidden'>
            {/* SVG */}
            <img src={historyBackground} alt="" className='absolute z-10 w-full h-full opacity-65 xl:scale-125' />

            {/* Content */}
            <div className='relative p-4 <-'>
                <h2 className="text-5xl font-bold">Estudios</h2>

                <div className='py-32 flex justify-center items-center'>
                    <img src={timeline} alt="" className='w-[1214px]'/>
                </div>
            </div>
        </div>
    )
}
