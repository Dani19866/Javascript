import React from 'react'

export default function Card({ children, title, classNameTitle, className, id }) {
    return (
        <div className='w-full bg-white boxShadow relative overflow-hidden' id={id}>
            {/* Content */}
            <div className={className}>
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${classNameTitle}`}>{title}</h2>
                {children}
            </div>
        </div>
    )
}
