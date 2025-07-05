import { ReactNode } from 'react';
import Script from 'next/script';

/**
 * Global <head> metadata
 * (Next automatically injects <title> & <meta description> into <head>)
 */
export const metadata = {
  title: 'Ali Yahyaoui',
  description: 'Ali Yahyaoui Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {/* viewport is already handled by Next, but keeping it is fine */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <base target="_self" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />

        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>

      <body>
        {/* ────────────────────────────────────────────────
            App content (your <App /> tree) renders here  */}
        {children}

        <noscript>You need to enable JavaScript to run this app.</noscript>

        {/* External scripts – loaded early, before your React code runs */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
