import React, { useContext } from 'react';
import { LangContext } from '../LangContext';

const About = () => {
    const { lang, toggleLang } = useContext(LangContext);

    return (
        <div className='aboutDiv flex flex-col lg:flex-row items-center p-10 gap-6 lg:w-full lg:justify-evenly'>
            <div className="animacionAllay bg-neutral-800 bg-opacity-50 border border-yellow-500 rounded-lg p-5 overflow-hidden relative w-[20rem] transition-all">
                <img src="/portal.webp" rel='preload' alt="" className='portalGif w-16 h-16 absolute right-0' />
                <img src="/portal.webp" alt="" rel='preload' className='portalGif w-16 h-16 absolute left-0' id='invertirPortal' />
                <img src='/allay.gif' alt="allay" rel='preload' className='allayGif w-16 h-16 rounded-full transition-all pb-2 animate-[volar_10s_linear_infinite]' />
                <p className='fontTitle text-yellow-500 text-2xl text-center transition-all'>Marrrk.dev</p>
                <div className="aboutMe flex justify-center p-2 rounded-lg">
                    <img src="/miniyo.webp" rel='preload' alt="perfil" className='w-72 h-52 rounded-lg border border-yellow-500 bg-slate-200 bg-opacity-30' />
                </div>
            </div>
            <div className="flex flex-col items-center pb-2 justify-evenly w-[22rem] gap-2 lg:h-[24rem] overflow-hidden transition-all">
                <p className='fontTitle text-yellow-600 text-2xl cursor-pointer lg:hover:scale-105 lg:hover:text-yellow-500 drop-shadow-xl transition-all select-none w-fit bg-neutral-800 bg-opacity-50 p-2 rounded-lg border border-yellow-500 pl-2.5' onClick={toggleLang}>{lang}</p>
                <p className='w-fit h-fit text-yellow-500 text-xl text-center p-2'>
                    {lang === 'ESP' ?
                        '¡Hola! Soy Marcos, tengo 19 años y soy desarrollador Frontend. Me considero una persona autodidacta, detallista, objetiva y adaptable. Actualmente estoy profundizando en mis conocimientos de React, CSS y TailwindCSS. A su vez estoy experimentando un poco con Astro.' :
                        'Hello! I\'m Marcos, I\'m 19 years old and I\'m a Frontend developer. I consider myself a self-taught, detailed, objective and adaptable person. I am currently deepening my knowledge of React, CSS, and TailwindCSS. I am also experimenting a bit with Astro.'}
                </p>
            </div>
        </div>
    );
}

export default About;
