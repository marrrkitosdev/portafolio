import React from 'react'
import Card from './Card'


const Proyectos = () => {
    return (
        <div className="proyectosDiv grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 auto-rows-auto gap-4 p-2 justify-items-center">
            <Card parrafo='Este sitio web está construido en base a un proyecto laboral/estudiantil que busca recuperar, compartir e impulsar el cuidado del medio ambiente.' urlImg='/previaSMV.png' urlNetlify='https://sentandomentesverdes.netlify.app/' urlGitHub='https://github.com/marrrkitosdev/sentandomentesverdes'/>
            <Card parrafo='Trabajo integrador basado en React que realicé durante mi diplomatura en desarrollo frontend.' urlImg='/previaCOT.png' urlNetlify='https://proyecto-escolar-react.netlify.app/' urlGitHub='https://github.com/marrrkitosdev/proyectoReact'/>
            <Card parrafo='Trabajo integrador basado en la utilización de datos obtenidos de una API y el uso de LocalStorage, también perteneciente a la diplomatura de desarrollo frontend.' alinear="md:col-span-2 md:self-center lg:col-span-1" urlImg='/previaECM.png' urlNetlify='https://proyecto-escolar-ecommerce-untref.netlify.app/' urlGitHub='https://github.com/marrrkitosdev/Ecommerce'/>
        </div>
    )
}

export default Proyectos
