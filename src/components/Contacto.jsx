import React, { useContext } from 'react';
import { LangContext } from '../LangContext';

const Contacto = () => {
    const { lang } = useContext(LangContext);

    return (
        <div className='contactoDiv w-full flex justify-center pt-6 text-center'>
            <div className="animacionAllay bg-neutral-800 bg-opacity-50 rounded-lg p-5 overflow-hidden relative w-[20rem] lg:w-[32rem] transition-all flex flex-col gap-4 border border-yellow-500">
                <h2 className='contactoTitle text-yellow-500 text-2xl'>{lang === 'ESP' ? 'Contacto' : 'Contact'}</h2>
                <p className='contactoText text-yellow-500 text-lg'>
                    {lang === 'ESP' ? 
                    `Si deseas contactarme o ver más de mi trabajo, puedes enviar un correo electrónico a marrrkteves.dev@gmail.com o enviar un mensaje a través de este formulario.` :
                    'If you want to contact me or see more of my work, you can send an email to marrrkteves.dev@gmail.com or send a message through this form.'}
                </p>
                <form className='contactoForm flex flex-col gap-2' action="https://formsubmit.co/8d8b4a9203ae6be0489e8267f7d87233" method="POST">
                    <input type='text' placeholder={lang === 'ESP' ? 'Nombre' : 'Name'} name="name" className='contactoInput hover:bg-yellow-500 hover:bg-opacity-10 focus:bg-yellow-500 focus:bg-opacity-10 transition-all text-neutral-200 bg-transparent w-full p-1 rounded-lg border border-yellow-500' required/>
                    <input type='email' placeholder={lang === 'ESP' ? 'Correo electrónico' : 'Email'} name="email" className='contactoInput hover:bg-yellow-500 hover:bg-opacity-10 focus:bg-yellow-500 focus:bg-opacity-10 transition-all text-neutral-200 bg-transparent w-full p-1 rounded-lg border border-yellow-500' required/>
                    <div className="divRow flex flex-col lg:flex-row justify-between gap-2">
                        <textarea placeholder={lang === 'ESP' ? 'Mensaje' : 'Message'} name="msg" className='contactoInput hover:bg-yellow-500 hover:bg-opacity-10 focus:bg-yellow-500 focus:bg-opacity-10 transition-all text-neutral-200 bg-transparent p-1 rounded-lg lg:w-5/6 border border-yellow-500 resize-none' required></textarea>
                        <button type='submit' className='contactoButton p-4 text-neutral-400 hover:text-neutral-200 hover:bg-yellow-500 hover:bg-opacity-10 hover:scale-105 focus:bg-yellow-500 focus:bg-opacity-10 transition-all rounded-lg font-medium border border-yellow-500'>
                            {lang === 'ESP' ? 'Enviar' : 'Send'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacto;
