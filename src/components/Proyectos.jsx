import React, { useContext } from 'react';
import { LangContext } from '../LangContext';
import Card from './Card';

const Proyectos = () => {
    const { lang } = useContext(LangContext);

    return (
        <div className="proyectosDiv flex flex-col items-center p-10 gap-5">
            <h2 className='text-yellow-500 text-4xl'>{lang === 'ESP' ? 'Proyectos' : 'Projects'}</h2>
            <div className="cardsEfecto flex flex-col gap-4 items-center lg:flex-row lg:justify-center lg:gap-1 flex-wrap">
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
                    urlImg='/previaECM.webp'
                    urlNetlify='https://proyecto-escolar-ecommerce-untref.netlify.app/'
                    urlGitHub='https://github.com/marrrkitosdev/Ecommerce'
                />
            </div>

        </div>
    );
}

export default Proyectos;
