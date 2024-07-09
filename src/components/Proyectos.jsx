import React, { useContext } from 'react';
import { LangContext } from '../LangContext';
import Card from './Card';

const Proyectos = () => {
    const { lang } = useContext(LangContext);

    return (
        <div className="proyectosDiv flex flex-col items-center md:flex-row flex-wrap gap-4 pt-10 justify-evenly">
            <Card 
                parrafo={lang === 'ESP' ? 
                    'Este sitio web está construido en base a un proyecto laboral/estudiantil que busca recuperar, compartir e impulsar el cuidado del medio ambiente.' :
                    'This website is built based on a work/study project that aims to recover, share, and promote environmental care.'} 
                urlImg='/previaSMV.webp' 
                urlNetlify='https://sentandomentesverdes.netlify.app/' 
                urlGitHub='https://github.com/marrrkitosdev/sentandomentesverdes' 
            />
            <Card 
                parrafo={lang === 'ESP' ? 
                    'Trabajo integrador basado en React que realicé durante mi diplomatura en desarrollo frontend.' :
                    'Integrative work based on React that I did during my frontend development diploma.'} 
                urlImg='/previaCOT.webp' 
                urlNetlify='https://proyecto-escolar-react.netlify.app/' 
                urlGitHub='https://github.com/marrrkitosdev/proyectoReact' 
            />
            <Card 
                parrafo={lang === 'ESP' ? 
                    'Trabajo integrador basado en la utilización de datos obtenidos de una API y el uso de LocalStorage, también perteneciente a la diplomatura de desarrollo frontend.' :
                    'Integrative work based on the use of data obtained from an API and the use of LocalStorage, also part of the frontend development diploma.'} 
                alinear="md:col-span-2 md:self-center lg:col-span-1" 
                urlImg='/previaECM.webp' 
                urlNetlify='https://proyecto-escolar-ecommerce-untref.netlify.app/' 
                urlGitHub='https://github.com/marrrkitosdev/Ecommerce' 
            />
            <Card 
                parrafo={lang === 'ESP' ? 
                    'Trabajo integrador basado en la utilización de datos obtenidos de una API y el uso de LocalStorage, también perteneciente a la diplomatura de desarrollo frontend.' :
                    'Integrative work based on the use of data obtained from an API and the use of LocalStorage, also part of the frontend development diploma.'} 
                alinear="md:col-span-2 md:self-center lg:col-span-1" 
                urlImg='/previaECM.webp' 
                urlNetlify='https://proyecto-escolar-ecommerce-untref.netlify.app/' 
                urlGitHub='https://github.com/marrrkitosdev/Ecommerce' 
            />
        </div>
    );
}

export default Proyectos;
