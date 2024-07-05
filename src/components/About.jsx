import React from 'react'

const About = () => {
    return (
        <div className='aboutDiv flex flex-col p-4 w-full items-center'>
            <div className="animacionAllay bg-neutral-200 bg-opacity-20 rounded-lg p-5 w-1/2">
                <img src='/allay.gif' alt="allay" className='allayGif w-18 h-16 rounded-full transition-all pb-2' />
                <div className="aboutMe flex flex-col items-center border border-yellow-500 p-2 rounded-lg gap-5 bg-neutral-200 bg-opacity-30">
                    <img src="/miniyo.jpg" alt="miniyo" className='w-64 h-fit rounded-lg border border-yellow-500' />
                    <p className='w-fit h-fit text-yellow-500 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] text-xl text-center'>¡Hola! Soy Marcos, tengo 19 años y soy desarrollador Frontend. Me considero una persona autodidacta, detallista, objetiva y adaptable. Tengo como reto personal la autosuperación, por lo que estoy abierto a profundizar y adquirir conocimientos si hace falta. Actualmente estoy profundizando en mis conocimientos de React, CSS y TailwindCSS. A su vez estoy experimentando un poco con Astro.</p>
                </div>
            </div>
        </div>
    )
}

export default About
