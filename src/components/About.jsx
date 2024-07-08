import React, { useContext } from 'react';
import { LangContext } from '../LangContext';

const About = () => {
    const { lang } = useContext(LangContext);

    return (
        <div className='aboutDiv flex flex-col p-4 pb-6 w-full items-center'>
            <div className="animacionAllay bg-neutral-200 bg-opacity-20 rounded-lg p-5 max-w-screen-sm overflow-hidden relative w-80 md:w-[30rem] lg:w-[35rem] transition-all">
                <img src="/portal.webp" rel='preload' alt="" className='w-16 h-16 absolute right-0' />
                <img src="/portal.webp" alt="" rel='preload' className='w-16 h-16 absolute left-0' id='invertirPortal' />
                <img src='/allay.webp' alt="allay" rel='preload' className='allayGif w-16 h-16 rounded-full transition-all pb-2 animate-[volar3_10s_linear_infinite] sm:animate-[volar_10s_linear_infinite] md:animate-[volar2_12s_linear_infinite]' />
                <div className="aboutMe grid grid-cols-1 justify-items-center border border-yellow-500 p-2 rounded-lg gap-5 bg-neutral-200 bg-opacity-30">
                    <img src="/perfil.webp" rel='preload' alt="miniyo" className='w-52 h-60 rounded-lg border border-yellow-500' />
                    <p className='w-full h-fit text-yellow-500 drop-shadow-[1px_1px_1px_rgba(0,0,0,1)] text-lg lg:text-xl text-center'>
                        {lang === 'ESP' ? 
                        '¡Hola! Soy Marcos, tengo 19 años y soy desarrollador Frontend. Me considero una persona autodidacta, detallista, objetiva y adaptable. Actualmente estoy profundizando en mis conocimientos de React, CSS y TailwindCSS. A su vez estoy experimentando un poco con Astro.' : 
                        'Hello! I\'m Marcos, I\'m 19 years old and I\'m a Frontend developer. I consider myself a self-taught, detailed, objective and adaptable person. I am currently deepening my knowledge of React, CSS, and TailwindCSS. I am also experimenting a bit with Astro.'}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
