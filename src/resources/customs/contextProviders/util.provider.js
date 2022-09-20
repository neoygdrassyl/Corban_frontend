import React from "react";

// TRANSLATION FILES

import { translations } from '../../../translations/components.translation'

export let UtilContext = React.createContext();

// THIS CONTEXT PROVIDER MANAGES THE LANGUAGE AND THEME FUNCTIONALITIES OF THE WEB

export function UtilProvider({ children }) {
    let [files, setFiles] = React.useState([]);
    let [lang, setLang] = React.useState('es'); // es | en 
    let [theme, setTheme] = React.useState('light');  // light | dark | (TODO)contrast  
    let [dateformat, setDateFormat] = React.useState('YYYY-MMM-DD'); // YYYY-MMM-DD | DD/MM/YYYY | DD/MM/YY || LL | MM/DD/YY
    let [fontScale, setFtonScale] = React.useState(1); // 0.75 | 1 | 1.25 | 1.5 | 2 | 3
    let [fontFamily, setFntFamily] = React.useState('Helvetica'); // Helvetica,  Verdana, Arial, Tahoma, Serif

    const _moment = require('moment');
    const [moment, setMoment] = React.useState(_moment);

    React.useEffect(() => {
        check();
    });

    function changeLang(_lang) {
        setLang(_lang)
        localStorage.setItem('corban_lang', _lang);
        let esLocale = require('moment/locale/es');
        moment.locale(_lang, esLocale);
    }

    function changeTheme(_theme) {
        setTheme(_theme)
        localStorage.setItem('corban_theme', _theme);
    }

    function changeDateFormat(_format) {
        setDateFormat(_format)
        localStorage.setItem('corban_dateformat', _format);
    }

    function changeFontScale(_scale) {
        setFtonScale(_scale)
        localStorage.setItem('corban_fontize', _scale);
    }

    function changeFontFamily(_family) {
        setFntFamily(_family)
        localStorage.setItem('corban_fontFamily', _family);
    }

    let getTranslation = (_key) => {
        if (!translations[_key]) return {}
        return translations[_key][lang]
    }

    let check = () => {
        let _lang = localStorage.getItem('corban_lang');
        let _theme = localStorage.getItem('corban_theme');
        let _format = localStorage.getItem('corban_dateformat');
        let _fontSize = localStorage.getItem('corban_fontize');
        let _fontFamily = localStorage.getItem('corban_fontFamily');
        if (_lang && _theme && _format) {
            setLang(_lang || lang)
            setTheme(_theme || theme)
            setDateFormat(_format || dateformat)
            setFtonScale(_fontSize || fontScale)
            setFntFamily(_fontFamily || fontFamily)
        }
    }

    let parseDate = (date) => {
        if (!date) return '';
        let __moment = require('moment');
        if (lang == 'es') {
            let locale = require('moment/locale/es');
            __moment.locale(lang, locale);
        }
        if (lang == 'en') __moment.locale(lang);
        return __moment(date).format(dateformat);
    }

    let value = {
        theme, lang, dateformat, files, moment, fontScale, fontFamily,
        changeTheme, changeLang, setFiles, changeDateFormat, changeFontScale, changeFontFamily,
        getTranslation, parseDate
    };

    return <UtilContext.Provider value={value}>{children}</UtilContext.Provider>;
}
