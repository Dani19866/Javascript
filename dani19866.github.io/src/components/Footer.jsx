import React from 'react'

const borderStyle = {
    "borderTop": "1px solid rgb(0, 0, 0, 0.10)"
}

export default function Footer() {
  return (
    <div className='w-full p-2 flex items-center justify-center flex-col gap-y-1 bg-white' style={borderStyle}>
        <h3 className='font-bold text-center'>Portafolio de Daniel De Oliveira</h3>
        <p className="text-center">Para más información contácteme a través del correo deoliveiradaniel200@gmail.com</p>
    </div>
  )
}
