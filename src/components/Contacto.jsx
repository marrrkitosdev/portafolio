import React, { useContext } from 'react';
import { LangContext } from '../LangContext';

const Contacto = () => {
    const { lang } = useContext(LangContext);

    return (
        <div className='contactoDiv w-full grid grid-cols-1 grid-rows-1 justify-items-center pt-6 text-center'>
            <div className="animacionAllay bg-neutral-200 bg-opacity-20 rounded-lg p-5 max-w-screen-sm overflow-hidden relative w-80 md:w-[30rem] lg:w-[35rem] transition-all flex flex-col gap-4 border border-yellow-500">
                <h2 className='contactoTitle text-yellow-500 text-2xl'>{lang === 'ESP' ? 'Contacto' : 'Contact'}</h2>
                <p className='contactoText text-yellow-500 text-lg drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]'>
                    {lang === 'ESP' ? 
                    'Si deseas contactarme o ver más de mi trabajo, puedes enviar un correo electrónico a marrrkteves.dev@gmail.com o enviar un mensaje a través de este formulario.' :
                    'If you want to contact me or see more of my work, you can send an email to marrrkteves.dev@gmail.com or send a message through this form.'}
                </p>
                <form className='contactoForm flex flex-col gap-2' action="https://formsubmit.co/8d8b4a9203ae6be0489e8267f7d87233" method="POST">
                    <input type='text' placeholder={lang === 'ESP' ? 'Nombre' : 'Name'} name="name" className='contactoInput w-full p-1 rounded-lg text-[#853FBC]' required/>
                    <input type='email' placeholder={lang === 'ESP' ? 'Correo electrónico' : 'Email'} name="email" className='contactoInput w-full p-1 rounded-lg text-[#853FBC]' required/>
                    <div className="divRow flex flex-col lg:flex-row justify-between gap-2">
                        <textarea placeholder={lang === 'ESP' ? 'Mensaje' : 'Message'} name="msg" className='contactoInput p-1 rounded-lg lg:w-5/6 text-[#853FBC]' required></textarea>
                        <button type='submit' className='contactoButton p-4 text-yellow-400 bg-neutral-200 bg-opacity-20 rounded-lg font-bold' formTarget='_blank'>
                            {lang === 'ESP' ? 'Enviar' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacto;
