import React from 'react'
import './App.css'
import Header from './components/Header'
import ScrollX from './components/ScrollX'
import Proyectos from './components/Proyectos'


const App = () => {
  return (
    <div id='divBody' className='bg-gradient-to-b from-[#381B4F] via-[#853FBC] to-[#381B4F] min-h-screen min-x-screen'>
      <Header />
      <ScrollX />
      <Proyectos />
    </div>
  )
}

export default App
