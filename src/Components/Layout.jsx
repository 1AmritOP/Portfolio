import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import CustomCursor from './CustomCursor'
// import CustomCursor from './CustomCursor'

const Layout = () => {
  return (
    <>
        <div className="wrapper w-full h-full overflow-hidden">
            <CustomCursor />
            <Navbar name="Amrit" />
            {/* <CustomCursor /> */}
            <Outlet />
            <Footer />
        </div>
    </>
  )
}

export default Layout