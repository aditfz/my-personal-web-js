import fa_ir from './fa';
import en_us from './en';

const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
export { lang };
const direction = {
  en: 'ltr',
  fa: 'rtl',
};
const getDirection = () => {
  return direction[lang];
};
export { getDirection };

const fonts = {
  en: 'Muli',
  fa: 'IRANSans',
};
const getFont = () => {
  return fonts[lang];
};
export { getFont };

const translates = {
  en: en_us,
  fa: fa_ir,
};
const getTranslate = () => {
  return translates[lang];
};
export { getTranslate };

const changeLanguage = (newLang) => {
  if (newLang === lang) {
    return;
  }
  localStorage.setItem('lang', newLang);
  window.location.reload();
};
export { changeLanguage };
