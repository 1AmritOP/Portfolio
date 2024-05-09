import React, { useState } from 'react'
import { Link ,NavLink } from 'react-router-dom';
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

const Navbar = (prop) => {
    const [darkMode, setdarkMode] = useState(true)
    
    useGSAP(() => {
        const tl=gsap.timeline()
        tl.from(".logo h1, .other li, .other label, .other h1",{
            y:-100,
            duration:0.7,
            opacity:0,
            stagger: 0.4,
            ease: "bounce.out",
        })
      },[]);



  return (
    <>
        <div className="navbar w-full h-16 py-4 pl-4 pr-10 flex justify-between">
            <NavLink to='/' className="logo text-3xl font-bold"> 
                <h1>{prop.name}</h1>
            </NavLink>
            <ul className="other flex gap-4 items-center">


                <NavLink to='/about' className={({isActive})=> `${isActive ? "text-red-600": ""} hover:text-red-600 transition-all ease-in`} 
                  > <h1>About-me</h1> </NavLink>


                <NavLink to='/skill' className={({isActive}) => `${isActive ? "text-red-600": ""} hover:text-red-600 transition-all ease-in`
                 } > 
                 <h1>Skills</h1> 
                </NavLink>


                <NavLink to='/contact' className={({isActive})=>
                    ` ${isActive ? "text-red-600":""} hover:text-red-600 transition-all ease-in`
                }
                > 
                <h1>Contact-me</h1> 
                </NavLink>

                <label
                 className="swap swap-rotate ml-4 scale-75">

                    <input type="checkbox"                     
                    onClick={()=>{
                        if (darkMode) {
                            // seticon(<MdLightMode/>)
                            document.querySelector("body").className="light-theme"
                        } else {
                            // seticon(<MdOutlineDarkMode />)
                            document.querySelector("body").className="dark-theme"
    
                        }
                        setdarkMode(!darkMode)
                    }} />
                    
                    {/* sun icon */}
                    <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
                    
                    {/* moon icon */}
                    <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
                    
                </label>
            </ul>
        </div>
    </>
  )
}

export default Navbar