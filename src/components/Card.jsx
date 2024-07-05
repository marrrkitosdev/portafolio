import React from 'react'

const Card = ({ parrafo, alinear, urlGitHub, urlNetlify, urlImg }) => {
    return (
        <div className={`card rounded-lg bg-neutral-200 bg-opacity-30 flex flex-col items-center p-2 gap-4 border border-yellow-500 w-80 justify-between text-center ${alinear}`}>
            <img src={urlImg} alt="imagen" className='imgCard text-neutral-200 font-light rounded-lg border border-yellow-500' />
            <p className="parraphCard text-yellow-500 text-lg lg:text-xl drop-shadow-[1px_1px_1px_rgba(0,0,0,1)]">{parrafo}</p>
            <div className="linksCard text-neutral-200 flex justify-around w-full p-2 items-center">
                <a href={urlNetlify} className="linkCard" target='_blank'><img src="/link-45deg.svg" alt="linkIcon" className='linkIcon invert opacity-70 lg:hover:opacity-90 w-8 lg:hover:scale-105 transition-all'/></a>
                <a href={urlGitHub} className="linkCard" target='_blank'><img src="/github.svg" alt="linkedinLogo" className='linkedinLogo invert opacity-70 lg:hover:opacity-90 w-6 lg:hover:scale-105 transition-all'/></a>
            </div>
        </div>
    )
}

export default Card
