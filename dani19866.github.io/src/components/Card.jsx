import React from 'react'

// Componente Card (Padre)
export default function Card({ children, title, classNameTitle, className, id }) {
    return (
        <section id={id} className="w-full bg-white relative overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
            {/* Fondo decorativo */}
            <div className="absolute  overflow-hidden opacity-10">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl opacity-30"></div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
            </div>

            <div className={`max-w-7xl mx-auto ${className}`}>
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 md:mb-16 ${classNameTitle}`}>
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {title}
                    </span>
                </h2>
                {children}
            </div>
        </section>
    );
}
