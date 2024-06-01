import React from 'react';
import i18next from 'i18next';

import STATIC from './data/static_data.json';
import en_translation from './data/en.json';
import pt_translation from './data/pt.json';

import {Bio, Education, Experience, Footer, Header, Intro} from './components';

const data = {en:{ translation: en_translation}, pt:{ translation: pt_translation}}


function App() {
  
  const [lang, setLang] = React.useState('pt');

  function handleLangChange(lang){
    setLang(lang);
  }

  i18next.init({
    lng: lang,
    debug: true,
    resources: data
  });

  return (
    <div className="App">
      <Header
        STATIC={STATIC}
        resume={i18next.t('static.resume')}
        resumePath={i18next.t('static.resume_path')}
        phone={i18next.t('static.phone')}
        neighborhood={i18next.t('static.neighborhood')}
        city={i18next.t('static.city')}
        handleClick={handleLangChange}
      />
      <Intro 
        birth={i18next.t('static.birth')} 
        title={i18next.t('static.title')}
        birthDate={i18next.t('static.birth_date')}
        resume={i18next.t('static.resume')}
        resumePath={i18next.t('static.resume_path')}
      />
      <Bio bio={i18next.t('bio')} aboutme={i18next.t('static.aboutme')}/>
      <Experience 
        data={i18next.t('experience', {returnObjects:true})} 
        experience={i18next.t('static.experience')} 
        experience_sub={i18next.t('static.experience_sub')} 
      />
      <Education 
        data={i18next.t('education', {returnObjects:true})} 
        education={i18next.t('static.education')} 
        education_sub={i18next.t('static.education_sub')}
      />
      <Footer />
    </div>
  );
}




export default App;
