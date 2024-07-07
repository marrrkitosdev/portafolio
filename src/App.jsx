import React from 'react'
import './App.css'
import Header from './components/Header'
import ScrollX from './components/ScrollX'
import Proyectos from './components/Proyectos'
import About from './components/About'
import Contacto from './components/Contacto'


const App = () => {
  return (
    <div id='divBody' className='bg-gradient-to-b from-[#381B4F] via-[#853FBC] to-[#381B4F] min-h-screen min-x-screen'>
      <Header />
      <ScrollX />
      <About />
      <Proyectos />
      <Contacto />
    </div>
  )
}

export default App
