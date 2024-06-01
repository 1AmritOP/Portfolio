import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Skills = () => {
  return (
    <div className='mt-16 min-h-[80vh] w-full flex flex-wrap items-center max-[830px]:justify-center max-[830px]:gap-y-8 p-8 justify-between '>

      <div className=' w-[30rem] max-lg:w-[24rem] max-[830px]:w-[30rem] flex flex-col gap-4  px-4'>
        <div className="upper flex justify-between items-center">
          <h1 className=' font-bold text-4xl'>01</h1>
          <div className=' p-3 rounded-full bg-purple hover:-rotate-45 hover:bg-indigo-400 hover:scale-110 transition-all ease-in  rotate-45 text-2xl'> <FaArrowRight /> </div>
        </div>
        <div className="heading">
          <h1 className='text-5xl'>Web Devlopment</h1>
        </div>
        <div className="text text-lg">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga laudantium velit, recusandae voluptate quia obcaecati!</p>
        </div>
        <div className="line w-[80%] bg-purple h-[1px] rounded-sm m-2"></div>
      </div>

      <div className=' w-[30rem] max-lg:w-[24rem] max-[830px]:w-[30rem] flex flex-col gap-4  px-4'>
        <div className="upper flex justify-between items-center">
          <h1 className=' font-bold text-4xl'>02</h1>
          <div className=' p-3 rounded-full bg-purple hover:-rotate-45 hover:bg-indigo-400 hover:scale-110 transition-all ease-in  rotate-45 text-2xl'> <FaArrowRight /> </div>
        </div>
        <div className="heading">
          <h1 className='text-5xl'>UI/UX DESING</h1>
        </div>
        <div className="text text-lg">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga laudantium velit, recusandae voluptate quia obcaecati!</p>
        </div>
        <div className="line w-[80%] bg-purple h-[1px] rounded-sm m-2"></div>
      </div>
      
      <div className=' w-[30rem] max-lg:w-[24rem] max-[830px]:w-[30rem] flex flex-col gap-4  px-4'>
        <div className="upper flex justify-between items-center">
          <h1 className=' font-bold text-4xl'>03</h1>
          <div className=' p-3 rounded-full bg-purple hover:-rotate-45 hover:bg-indigo-400 hover:scale-110 transition-all ease-in  rotate-45 text-2xl'> <FaArrowRight /> </div>
        </div>
        <div className="heading">
          <h1 className='text-5xl'>App Devlopment</h1>
        </div>
        <div className="text text-lg">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga laudantium velit, recusandae voluptate quia obcaecati!</p>
        </div>
        <div className="line w-[80%] bg-purple h-[1px] rounded-sm m-2"></div>
      </div>

      <div className=' w-[30rem] max-lg:w-[24rem] max-[830px]:w-[30rem] flex flex-col gap-4  px-4'>
        <div className="upper flex justify-between items-center">
          <h1 className=' font-bold text-4xl'>04</h1>
          <div className=' p-3 rounded-full bg-purple hover:-rotate-45 hover:bg-indigo-400 hover:scale-110 transition-all ease-in  rotate-45 text-2xl'> <FaArrowRight /> </div>
        </div>
        <div className="heading">
          <h1 className='text-5xl'>AI & ML</h1>
        </div>
        <div className="text text-lg">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga laudantium velit, recusandae voluptate quia obcaecati!</p>
        </div>
        <div className="line w-[80%] bg-purple h-[1px] rounded-sm m-2"></div>
      </div>
    </div>
  )
}

export default Skills