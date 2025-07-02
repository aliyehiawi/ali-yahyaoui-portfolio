'use client';

import '../index.css';     // global styles
import '../i18n/i18n';     // load translations

import { StrictMode } from 'react';
import App from '../App';

/**
 * Home route – renders the same <App /> component you had in CRA.
 */
export default function Home() {
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}
