'use client';

import { useTranslation, Trans } from 'react-i18next';
import '../index.css';          // already in page.tsx—remove if duplicated

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center"
    >
      {/* ───────── Left: Text ───────── */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          <Trans
            i18nKey="hero.greeting"
            values={{ name: t('nav.brand') }}
            components={{ 1: <span className="gradient-text" /> }}
          />
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          {t('hero.subtitle')}
        </h2>

        <p className="text-lg text-gray-400 mb-8 max-w-lg">
          {t('hero.description')}
        </p>

        <div className="flex space-x-4">
          <a
            href="#contact"
            className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            {t('hero.cta.contact')}
          </a>
          <a
            href="/assets/Ali Yahyaoui CV.pdf"
            download="Ali Yahyaoui CV.pdf"
            className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg transition transform hover:scale-105 shadow-lg flex items-center"
          >
            <i className="fas fa-download mr-2" />
            {t('hero.cta.download')}
          </a>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-xl transform transition hover:scale-105 hover:shadow-2xl">
          <img
            src="/assets/images/profile.jpg"          
            alt={t('hero.imageAlt')}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary opacity-0 hover:opacity-20 transition" />
        </div>
      </div>
    </section>
  );
}