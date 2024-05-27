import React from 'react'
import HeroImg from '../assets/HeroImg.png'
import { MdWavingHand } from 'react-icons/md'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"




const Hero = () => {
  useGSAP(() => {
    const tl=gsap.timeline()
    tl.from(".left p,.left h1",{
        x:-200,
        delay: 1,
        duration:0.5,
        opacity:0,
        stagger: 0.4,
    },"same")
    tl.from(".right img",{
      x:200,
      delay: 1,
      duration:1,
      opacity:0,
    },"same")
  },[]);


  return (
    <>
        <div className="hero w-full min-h-[calc(100vh-64px)]   flex items-center justify-between overflow-hidden pl-[7vw] pr-[7vw] flex-wrap max-md:justify-center">
          <div className="left">
            <p className='  font-bold text-lg flex items-center'>Hello there! <MdWavingHand className=' text-[#EFAF33] ' /> </p>
            <h1 className='   font-bold text-[7vw] max-md:text-[18vw] max-md:text-5xl  leading-10'>I am <span>Amrit</span></h1>
            <h1 className='  font-bold text-[7vw] max-md:text-[18vw] max-md:text-5xl  '> 
            <span className=' text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-indigo-600'>Web </span> 
            devloper </h1>
            <p className=' text-sm text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          </div>
          <div className="right">
            <img src={HeroImg} alt="" className=' h-80 w-80 scale-150 max-md:scale-150' />
          </div>
        </div>
    </>
  )
}

export default Hero