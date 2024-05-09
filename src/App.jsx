import { useState } from 'react'
import './App.css'
import Layout from './Components/Layout'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Pages from './Components/Pages'
import ContactMe from './Components/ContactMe'
import About from './Components/About'


function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>} >
        <Route path='' element={<Pages />}></Route>
        <Route path='skill' element={<Skills/>}></Route>
        <Route path='contact' element={<ContactMe/>}></Route>
        <Route path='about' element={<About/>}></Route>

      </Route>
    )
  )
  

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
