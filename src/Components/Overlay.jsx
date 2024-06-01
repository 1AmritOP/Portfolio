import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { LiaPrayingHandsSolid } from "react-icons/lia";

const Overlay = () => {

    useGSAP(()=>{
        var tl=gsap.timeline();
        tl.from(".texts h1",{
            opacity:0,
            y:-20,
            stagger:0.2,
            duration:0.5,
        },"ak")
        tl.from(".texts p",{
            opacity:0,
            x:100,
            // scale:0.5,
            duration:1,
        },"ak")

        tl.to(".texts h1",{
            opacity:0,
            stagger:0.2,
            y:20,
            duration:0.3,
        },"ak2")
        tl.to(".texts p",{
            opacity:0,
            x:150,
            // scale:0,
            duration:1,
        },"ak2")

        tl.to(".bars",{
            height:0,
            duration:2,
            stagger: 0.2,
            ease: "circ.out",
            borderBottomRightRadius:30,
            borderBottomLeftRadius:30,
        })
    },[])

  return (
    <>
        <div className="wrapper relative flex h-full w-full">
            <div className="texts absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 font-black text-9xl max-md:text-6xl ">
                <h1>H</h1>
                <h1>E</h1>
                <h1>L</h1>
                <h1>L</h1>
                <h1>O</h1>
                <p className=' ml-4 flex text-black'> नमस्ते <LiaPrayingHandsSolid /></p>
            </div>
            <div className="bars h-[100vh] w-[10vw] bg-slate-400"></div>
            <div className="bars h-[100vh] w-[10vw] bg-slate-400"></div>
            <div className="bars h-[100vh] w-[10vw] bg-slate-400"></div>
            <div className="bars h-[100vh] w-[10vw] bg-slate-400"></div>
            <div className="bars h-[100vh] w-[10vw] bg-slate-400"></div>
            <div className="bars h-[100vh] w-[10vw] bg-slate-400"></div>
            <div className="bars h-[100vh] w-[10vw] bg-slate-400"></div>
            <div className="bars h-[100vh] w-[10vw] bg-slate-400"></div>
            <div className="bars h-[100vh] w-[10vw] bg-slate-400"></div>
            <div className="bars h-[100vh] w-[10vw] bg-slate-400"></div>

        </div>
    
    </>
  )
}

export default Overlay