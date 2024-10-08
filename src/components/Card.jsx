import React from 'react'

const Card = ({ parrafo, urlGitHub, urlNetlify, urlImg }) => {
    return (
        <div className={'card rounded-lg bg-neutral-800 bg-opacity-50 flex flex-col items-center p-2 border border-yellow-500 w-[20rem] md:w-[30rem] lg:w-[18rem] lg:h-[28rem] justify-between text-jusftify pt-6'}>
            <img src={urlImg} alt="overview" className='imgCard text-neutral-200 font-light rounded-lg border border-yellow-500' />
            <p className="parraphCard text-yellow-500 text-lg lg:text-md p-2 select-none">{parrafo}</p>
            <div className="linksCard text-neutral-200 flex justify-around w-full p-2 items-center">
                <a href={urlNetlify} className="linkCard" target='_blank'><img src="/link-45deg.webp" alt="linkIcon" className='linkIcon invert w-8 lg:hover:scale-105 transition-all'/></a>
                <a href={urlGitHub} className="linkCard" target='_blank'><img src="/github.webp" alt="linkedinLogo" className='linkedinLogo invert opacity-70 lg:hover:opacity-90 w-6 lg:hover:scale-105 transition-all'/></a>
            </div>
        </div>
    )
}

export default Card
