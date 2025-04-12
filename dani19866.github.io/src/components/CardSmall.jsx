import React from 'react'

export default function CardSmall({ children }) {
    return (
        <div className='flex flex-col gap-2'>
            {/* Title */}
            <div className='w-full bg-[#efeeee] bg-opacity-0 boxShadow relative overflow-hidden'>
                <div className='relative p-4'>
                    <h2 className="text-5xl font-bold text-right">Experiencia</h2>
                </div>
            </div>

            {/* Content */}

            <div className='flex flex-row gap-4'>
                {children}
            </div>
        </div>
    )
}
