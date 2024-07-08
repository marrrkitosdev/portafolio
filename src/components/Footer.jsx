import React, { useContext } from 'react';
import { LangContext } from '../LangContext';

const Footer = () => {
    const { lang } = useContext(LangContext);

    return (
        <footer className="footer flex justify-around items-center p-5">
            <a href="https://www.instagram.com/_marrrkitos" target='_blank'><img src="/instagram.webp" alt="instagram logo" className='invert w-6 h-6 hover:scale-105 transition-all' title={lang === 'ESP' ? 'Seguime en Instagram!!' : 'Follow me on Instagram!!'}/></a>
            <p className="text-center text-neutral-300 p-2">{lang === 'ESP' ? 'Desarrollado por' : 'Developed by'} <a href="https://github.com/MarrrkDev" target="_blank" rel="noopener noreferrer">Marrrk.dev</a> 2024</p>
            <a href="https://www.linkedin.com/in/marrrkteves" target='_blank'><img src="/linkedin.webp" alt="whatsapp logo" className='invert w-6 h-6 hover:scale-105 transition-all' title={lang === 'ESP' ? 'Mi Cuenta de LinkedIn' : 'My LinkedIn Account'}/></a>
        </footer>
    )
}

export default Footer
