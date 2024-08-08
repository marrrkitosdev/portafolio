import React, { useContext } from 'react';
import { LangContext } from '../LangContext';

const Footer = () => {
    const { lang } = useContext(LangContext);

    return (
        <footer className="footer flex justify-center gap-10 items-center p-5 bg-black bg-opacity-30">
            <p className="text-center text-neutral-300 p-2">{lang === 'ESP' ? 'Desarrollado por' : 'Developed by'} <a href="https://github.com/marrrkitosdev" target="_blank" rel="noopener noreferrer"><br/><strong className='hover:scale-105 text-yellow-500'>Marrrk.dev</strong></a> 2024</p>
            <div className="redesContainer flex gap-2">
                <a href="https://www.instagram.com/_marrrkitos" target='_blank'><img src="/instagram.webp" alt="instagram logo" className='invert w-6 h-6 hover:scale-105 transition-all' title={lang === 'ESP' ? 'Seguime en Instagram!!' : 'Follow me on Instagram!!'} /></a>
                <a href="https://www.linkedin.com/in/marrrkteves" target='_blank'><img src="/linkedin.webp" alt="whatsapp logo" className='invert w-6 h-6 hover:scale-105 transition-all' title={lang === 'ESP' ? 'Mi Cuenta de LinkedIn' : 'My LinkedIn Account'} /></a>
            </div>
        </footer>
    )
}

export default Footer
