import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
import Overlay from './Overlay'
// import CustomCursor from './CustomCursor'

const Layout = () => {

  const [loading, setloading] = useState(false)

  useEffect(() => {
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 5000);

  }, [])

  return (
    <>
    
            {
          loading ?
          <div className=' h-screen w-full flex justify-center items-center'>
            <Overlay/>
          </div>
          :
        <div className="wrapper w-full h-full overflow-hidden">
            <CustomCursor />
            <Navbar name="Amrit" />
            {/* <CustomCursor /> */}
            <Outlet />
            <Footer />
        </div>
        }
    </>
  )
}

export default Layout