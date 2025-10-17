'use client';

import '../index.css';
import '../i18n/i18n';
import { StrictMode } from 'react';
import App from '../App';
import I18nProvider from '../components/I18nProvider';

export default function Home() {
  return (
    <StrictMode>
      <I18nProvider>
        <App />
      </I18nProvider>
    </StrictMode>
  );
}
