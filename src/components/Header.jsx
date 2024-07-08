import React, { useContext } from 'react';
import { LangContext } from '../LangContext';

const Header = () => {
    const { lang, toggleLang } = useContext(LangContext);

    return (
        <header id="header" className='flex p-4 w-full'>
            <nav id='nav' className='w-full'>
                <ul id='ul-nav' className='grid grid-cols-2 justify-items-center text-yellow-500 text-xl gap-2 '>
                    <li className='li-nav lg:hover:scale-105 lg:hover:text-yellow-600 drop-shadow-xl transition-all'>Marrrk.dev</li>
                    <li className='li-nav cursor-pointer lg:hover:scale-105 lg:hover:text-yellow-600 drop-shadow-xl transition-all select-none' onClick={toggleLang}>{lang}</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
