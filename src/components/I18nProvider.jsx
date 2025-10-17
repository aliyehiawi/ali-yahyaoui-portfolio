'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/i18n';

const RTL_LANGUAGES = ['ar'];

export default function I18nProvider({ children }) {
  useEffect(() => {
    const updateDirection = (lng) => {
      const dir = RTL_LANGUAGES.includes(lng) ? 'rtl' : 'ltr';
      document.documentElement.dir = dir;
      document.documentElement.lang = lng;
    };

    updateDirection(i18n.language);

    i18n.on('languageChanged', updateDirection);

    return () => {
      i18n.off('languageChanged', updateDirection);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
