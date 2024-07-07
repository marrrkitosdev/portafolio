import React from 'react'

const Contacto = () => {
    return (
        <div className='contactoDiv w-full grid grid-cols-1 grid-rows-1 justify-items-center pt-6'>
            <div className="animacionAllay bg-neutral-200 bg-opacity-20 rounded-lg p-5 max-w-screen-sm overflow-hidden relative w-80 md:w-[30rem] lg:w-[35rem] transition-all flex flex-col gap-4 border border-yellow-500">
                <h2 className='contactoTitle text-yellow-500 text-2xl'>Contacto</h2>
                <p className='contactoText text-yellow-500 text-lg drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]'>Si deseas contactarme o ver más de mi trabajo, puedes enviar un correo electrónico a <a href="mailto:marrrkteves.dev@gmail.com">marrrkteves.dev@gmail.com</a> o puedes encontrarme en Instagram como @_marrrkitos</p>
            </div>
        </div>
    )
}

export default Contacto
