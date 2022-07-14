import React from "react";

// TRANSLATION FILES

import { translations } from '../../../translations/components.translation'

export let UtilContext = React.createContext();

// THIS CONTEXT PROVIDER MANAGES THE LANGUAGE AND THEME FUNCTIONALITIES OF THE WEB

export function UtilProvider({ children }) {
    let [files, setFiles] = React.useState([]);

    let [lang, setLang] = React.useState('es');

    // light | dark | contrast  
    // IMPLEMENTATION FOR contrast NOT YET STARTED, MAYBE DONE IN THE FUTURE
    let [theme, setTheme] = React.useState('light');

    React.useEffect(() => {
        check();
    });

    function changeLang(_lang) {
        setLang(_lang)
        localStorage.setItem('corban_lang', _lang);
    }

    function changeTheme(_theme) {
        setTheme(_theme)
        localStorage.setItem('corban_theme', _theme);
    }

    let getTranslation = (_key) => {
        if (!translations[_key]) return {}
        return translations[_key][lang]
    }

    let check = () => {
        let _lang = localStorage.getItem('corban_lang');
        let _theme = localStorage.getItem('corban_theme');
        if (_lang && _theme) {
            setLang(_lang || lang)
            setTheme(_theme || theme)
        }
    }

    let value = { theme, lang, changeTheme, getTranslation, changeLang, files, setFiles };

    return <UtilContext.Provider value={value}>{children}</UtilContext.Provider>;
}
