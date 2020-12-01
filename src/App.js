import React, { useState } from 'react';
import './App.css';
import { IntlProvider, FormattedMessage } from 'react-intl';
import Select from '@material-ui/core/Select';

const en = require('react-intl/locale-data/en');
const zh = require('react-intl/locale-data/zh');
const ru = require('react-intl/locale-data/ru');
const fr = require('react-intl/locale-data/fr');

const addLocaleData = require('react-intl').addLocaleData; 
addLocaleData(en);
addLocaleData(zh);
addLocaleData(ru);
addLocaleData(fr);

const defaultLocale = localStorage['locale'] ? localStorage['locale'] : 'en'; // English is default locale if none is set
const localeList = [
    { name: 'English', code: 'en', lang: 'English' },
    { name: '中文', code: 'zh', lang: 'Chinese' },
    { name: 'русский', code: 'ru', lang: 'Russian' },
    { name: 'Française', code: 'fr', lang: 'French' }
];
const messages={
    en: {
      'dashboard.header': `Localization in Create React App`,
      'dashboard.footer': 'lets change'
    },
    zh: {
      'dashboard.header': `Create React App中的本地化`,
      'dashboard.footer': `爱你3000`
    },
    ru: {
      'dashboard.header': `Локализация в приложении Создать React`,
      'dashboard.footer': `Люблю тебя 3000`
    },
    fr: {
      'dashboard.header': `Localisation dans l'application Create React`,
      'dashboard.footer': `Je t'aime 3000`
    },
}
function App() {
  const [currentLocale, setCurrentLocale] = useState(defaultLocale);
  const onChangeLanguage = (e) => {
    const selectedLocale = e.target.value;
    setCurrentLocale(selectedLocale);
    localStorage.setItem('locale',selectedLocale)
}
  return (
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>

      <div className="App">
      <div class="navbar">
 
  <div class="dropdown">
    <button class="dropbtn"
    >Country 
      {/* <i class="fa fa-caret-down"></i> */}
    </button>
    <select onChange={onChangeLanguage} defaultValue={currentLocale}>
            {
                localeList.map((locale,index)=>(
                  <option key={index} value={locale.code}>{locale.name}</option>
                ))
            }
        </select>
  </div> 
</div>
        <h1><FormattedMessage id="dashboard.header" defaultMessage="Localization in Create React App"/></h1>
        {/* <select onChange={onChangeLanguage} defaultValue={currentLocale}>
            {
                localeList.map((locale,index)=>(
                  <option key={index} value={locale.code}>{locale.name}</option>
                ))
            }
        </select> */}
        <footer><FormattedMessage id="dashboard.footer" defaultMessage="let's change 3000"/>&spades;</footer>
      </div>
    </IntlProvider>
  );
}

export default App;