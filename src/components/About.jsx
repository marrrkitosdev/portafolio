import React from 'react'

const About = () => {
    return (
        <div className='aboutDiv flex flex-col p-8 w-full items-center'>
            <div className="animacionAllay bg-neutral-200 bg-opacity-20 rounded-lg p-5 max-w-screen-sm overflow-hidden relative w-80 md:w-[30rem] lg:w-[35rem] transition-all">
                <img src="/portal.webp" alt="" className='w-16 h-16 absolute right-0' />
                <img src="/portal.webp" alt="" className='w-16 h-16 absolute left-0' id='invertirPortal' />
                <img src='/allay.webp' alt="allay" className='allayGif w-16 h-16 rounded-full transition-all pb-2 animate-[volar3_10s_linear_infinite] sm:animate-[volar_10s_linear_infinite] md:animate-[volar2_12s_linear_infinite]' />
                <div className="aboutMe grid grid-cols-1 justify-items-center border border-yellow-500 p-2 rounded-lg gap-5 bg-neutral-200 bg-opacity-30">
                    <img src="/miniyo.webp" alt="miniyo" className='w-64 h-fit rounded-lg border border-yellow-500' />
                    <p className='w-3/4 h-fit text-yellow-500 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] text-lg lg:text-xl text-center'>¡Hola! Soy Marcos, tengo 19 años y soy desarrollador Frontend. Me considero una persona autodidacta, detallista, objetiva y adaptable. Tengo como reto personal la autosuperación, por lo que estoy abierto a profundizar y adquirir conocimientos si hace falta. Actualmente estoy profundizando en mis conocimientos de React, CSS y TailwindCSS. A su vez estoy experimentando un poco con Astro.</p>
                </div>
            </div>
        </div>
    )
}

export default About
