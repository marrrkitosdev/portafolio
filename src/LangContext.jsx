import React, { createContext, useState } from 'react';

export const LangContext = createContext();

export const LangProvider = ({ children }) => {
    const [lang, setLang] = useState('ESP');

    const toggleLang = () => {
        setLang((prevLang) => (prevLang === 'ESP' ? 'ENG' : 'ESP'));
    };

    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {children}
        </LangContext.Provider>
    );
};
