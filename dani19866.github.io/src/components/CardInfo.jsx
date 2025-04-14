import React from 'react'
import devLogo from "../assets/icons/devLogo.svg"
import platformsLogo from "../assets/icons/platformsLogo.svg"
import bigDataLogo from "../assets/icons/bigDataLogo.svg"
import serverLogo from "../assets/icons/serverLogo.svg"

const icons = {
  devLogo: devLogo,
  platformsLogo: platformsLogo,
  bigDataLogo: bigDataLogo,
  serverLogo: serverLogo
}

export default function CardInfo({ duty }) {
  return (
    <div className='flex flex-row gap-3.5 boxShadow w-full h-fit max-w-[975px] p-5'>
      {/* SVG */}
      <div className="w-[104px] h-[92px] flex justify-center items-center">
        <img src={icons[duty.icon]} alt="" />
      </div>

      {/* Text */}
      <div className='flex flex-col gap-y-2 w-full'>
        <h3 className='font-extrabold text-lg'>{duty.title}</h3>
        <p className='h-full text-base'>{duty.description}</p>
      </div>
    </div>
  )
}
