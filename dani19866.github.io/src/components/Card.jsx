import React from 'react'

export default function Card({ children, title, classNameTitle, className }) {
    return (
        <div className='w-full bg-white boxShadow relative overflow-hidden'>
            {/* Content */}
            <div className={className}>
                <h2 className={`text-6xl font-bold ${classNameTitle}`}>{title}</h2>
                {children}
            </div>
        </div>
    )
}
