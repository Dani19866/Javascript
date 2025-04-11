import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='w-full py-2 px-5 shadow'>
        {/* Content */}
        <div className="flex justify-between items-center w-full">

          {/* Brand */}
          <div className="flex flex-col items-center h-full">
            <h2 className="font-bold uppercase text-base">Daniel De Oliveira</h2>
            <h3 className="uppercase text-xs">Ingeniero en Sistemas</h3>
          </div>

          {/* Buttons */}
          <div className="flex flex-row h-full gap-x-6 items-center justify-center">
            <a className="uppercase hover:cursor-pointer hover:text-gray-500">Inicio</a>
            <a className="uppercase hover:cursor-pointer hover:text-gray-500">Estudios</a>
            <a className="uppercase hover:cursor-pointer hover:text-gray-500">Experiencia</a>
            <a className="uppercase hover:cursor-pointer hover:text-gray-500">Proyectos</a>
          </div>

        </div>
      </div>
    </div>
  )
}
