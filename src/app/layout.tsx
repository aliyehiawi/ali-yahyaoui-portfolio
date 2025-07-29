import { ReactNode } from 'react';
import Script from 'next/script';

/**
 * Global <head> metadata
 * (Next automatically injects <title> & <meta description> into <head>)
 */
export const metadata = {
  title: 'Ali Yahyaoui - Software Engineer Portfolio',
  description: 'Full Stack Software Engineer specializing in Java, Spring Boot, React, and microservices architecture. View my projects, experience, and get in touch.',
  keywords: 'Software Engineer, Full Stack Developer, Java, Spring Boot, React, Microservices, Portfolio',
  authors: [{ name: 'Ali Yahyaoui' }],
  creator: 'Ali Yahyaoui',
  publisher: 'Ali Yahyaoui',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ali-yahyaoui-portfolio.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Ali Yahyaoui - Software Engineer Portfolio',
    description: 'Full Stack Software Engineer specializing in Java, Spring Boot, React, and microservices architecture.',
    url: 'https://ali-yahyaoui-portfolio.vercel.app',
    siteName: 'Ali Yahyaoui Portfolio',
    images: [
      {
        url: '/assets/images/profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Ali Yahyaoui - Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ali Yahyaoui - Software Engineer Portfolio',
    description: 'Full Stack Software Engineer specializing in Java, Spring Boot, React, and microservices architecture.',
    images: ['/assets/images/profile.jpg'],
    creator: '@aliyehiawi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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

        <noscript>
          <div className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">JavaScript Required</h1>
              <p className="text-gray-400">This portfolio requires JavaScript to function properly.</p>
            </div>
          </div>
        </noscript>

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
