import React from 'react'
import './App.css'
import ScrollX from './components/ScrollX'
import Proyectos from './components/Proyectos'
import About from './components/About'
import Contacto from './components/Contacto'
import { LangProvider } from './LangContext'
import Footer from './components/Footer'


const App = () => {
  return (
    <LangProvider>
      <div id='divBody' className='bg-gradient-to-b from-[#381B4F] via-[#853FBC] to-[#381B4F] min-h-screen min-x-screen'>
        <About />
        <ScrollX />
        <Proyectos />
        <Contacto />
        <Footer />
      </div>
    </LangProvider>
  )
}

export default App
