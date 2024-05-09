import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaRegCopyright } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className=' h-[20vh] px-12 w-full flex items-center justify-between'>
      <div className='flex items-center'>
       <p className=' text-xs mx-1'><FaRegCopyright /> </p>
        2024 amrit kumar
      </div>
      <div className=' flex items-center font-bold text-lg gap-5 '>
          <a className=' hover:opacity-100 opacity-80 hover:scale-150 transition-all ease-in' href="#"> <FaGithub /> </a>
          <a className=' hover:opacity-100 opacity-80 hover:scale-150 transition-all ease-in' href="https://www.linkedin.com/in/amrit-kumar-a20234281/"> <FaLinkedin /> </a>
          <a className=' hover:opacity-100 opacity-80 hover:scale-150 transition-all ease-in' href="#" > <FaInstagram /> </a>
          <a className=' hover:opacity-100 opacity-80 hover:scale-150 transition-all ease-in' href="#"> <FaDiscord /> </a>
      </div>
      <div className=' text-xs'>
        IMPRINT
      </div>
    </div>
  )
}

export default Footer