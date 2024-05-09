import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"

const Marque = (prop) => {


    window.addEventListener("wheel",(e)=>{
        if (e.deltaY > 0) {
            // console.log("nichhe");
             gsap.to(".marque",{

                    transform: 'translateX(-200%)',
                    duration: 3,
                    repeat:-1,
                    ease: 'none'
                })
            gsap.to(".marque .arrow",{
                rotate: 180,
            })
        } else {
            // console.log("upper");
            gsap.to(".marque",{

                transform: 'translateX(0%)',
                duration: 3,
                repeat:-1,
                ease: 'none'
            })
            gsap.to(".marque .arrow",{
                rotate: 0,
            })
            
        }
    })

    var nextPost = document.getElementsByClassName("next-post");

// SWAPS POSITION RELATIVE TO POSITION FIXED AND VICE VERSA
function fixedNextPostButton() {
  if (nextPost) {
    if (window.innerWidth < 580) {
        gsap.to(".marque",{
            transform: 'translateX(-200%)',
            duration: 3,
            repeat:-1,
            ease: 'none'
        })
    }
  }
}

fixedNextPostButton();
addEventListener("resize", fixedNextPostButton, false);



  return (
    <>
        <div className='  bg-purple text-[7vw] flex gap-4'>
            <div className=' marque  flex-shrink-0 flex items-center '>
            <h1 > {prop.heading} </h1>
            <div className='arrow'>

            <FaArrowRight />
            </div>
            </div>

            <div className=' marque flex-shrink-0 flex items-center '>
            <h1 >{prop.heading}  </h1>
            <div className='arrow'>

            <FaArrowRight />
            </div>
            </div>

            <div className=' marque flex-shrink-0 flex items-center '>
            <h1 >{prop.heading}  </h1>
            <div className='arrow'>

            <FaArrowRight />
            </div>
            </div>
            <div className=' marque flex-shrink-0 flex items-center '>
            <h1 >{prop.heading}  </h1>
            <div className='arrow'>

            <FaArrowRight />
            </div>
            </div>            <div className=' marque flex-shrink-0 flex items-center '>
            <h1 >{prop.heading}  </h1>
            <div className='arrow'>

            <FaArrowRight />
            </div>
            </div>         
              
             <div className=' marque flex-shrink-0 flex items-center '>
            <h1 >{prop.heading}  </h1>
            <div className='arrow'>

            <FaArrowRight />
            </div>
            </div>

        </div>
    </>
  )
}

export default Marque