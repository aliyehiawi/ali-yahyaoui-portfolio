# Ali Yahyaoui - Software Engineer Portfolio

> A modern, multilingual portfolio showcasing my expertise as a Software Engineer specializing in full-stack development and system architecture.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue.svg)](https://www.linkedin.com/in/ali-yahyaoui-a49a6421b)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black.svg)](https://github.com/aliyehiawi)

## About

Personal portfolio website built with modern web technologies featuring responsive design, 3D animations, and complete multilingual support in English, Arabic (RTL), and French.

## Key Features

- **Multilingual Support** - Seamless language switching between English, Arabic (RTL), and French with full translation coverage
- **3D Interactive Background** - Powered by Three.js for engaging visual experience
- **Responsive Design** - Optimized for all devices from mobile to desktop
- **Smooth Animations** - GSAP-powered scroll animations and Vanilla Tilt effects
- **Smart Contact Form** - Integrated with Formspree, with localized validation messages
- **Modern Tech Stack** - Built with React 19, Next.js 15, TypeScript, and Tailwind CSS
- **Dynamic Phone Formatting** - Automatic phone number formatting based on country code

## Technologies Used

### Core
- **React 19** - UI framework
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

### Animations & 3D
- **GSAP** - Scroll animations and transitions
- **Three.js** - 3D background effects
- **Vanilla Tilt** - 3D card tilt effects

### Internationalization
- **i18next** - Translation management
- **react-i18next** - React integration with automatic RTL support

### Additional Tools
- **Formspree** - Contact form backend
- **Font Awesome** - Icon library

## Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/             # React components
│   ├── Layout.jsx         # Navigation & Footer
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About & Education
│   ├── Skills.jsx         # Technical skills
│   ├── Experience.jsx     # Work experience
│   ├── Projects.jsx       # Featured projects
│   ├── AnimatedContactSection.jsx # Contact form with 3D background
│   ├── Background3D.jsx   # Three.js background
│   └── ErrorBoundary.jsx  # Error handling
├── hooks/                  # Custom React hooks
│   └── useGsapEffects.js  # GSAP animations
├── i18n/                   # Internationalization
│   ├── i18n.js           # i18next configuration
│   └── locales/          # Translation files (en, ar, fr)
└── index.css              # Global styles & animations
```

## Multilingual Support

The portfolio supports three languages with complete translation coverage:

- **English** - Default language
- **Arabic** - Full RTL support with Arabic numerals
- **French** - Complete translations

**Features:**
- Automatic language detection
- Persistent language selection
- Localized form validation messages
- Dynamic content translation (dates, numbers)
- RTL layout support for Arabic

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/aliyehiawi/ali-yahyaoui-portfolio.git
```

2. Navigate to the project directory

```bash
cd ali-yahyaoui-portfolio
```

3. Install dependencies

```bash
npm install
```

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Key Sections

- **Hero** - Introduction with downloadable CV
- **About** - Educational background and methodologies
- **Skills** - Technical skills categorized by domain
- **Experience** - Professional work history
- **Projects** - Featured project portfolio
- **Contact** - Interactive 3D contact form

## Contact

- **Email**: [ali.yehiawii@gmail.com](mailto:ali.yehiawii@gmail.com)
- **Phone**: +33 07 65 77 60 14
- **LinkedIn**: [Ali Yahyaoui](https://www.linkedin.com/in/ali-yahyaoui-a49a6421b)
- **GitHub**: [@aliyehiawi](https://github.com/aliyehiawi)
- **Location**: Saint-Étienne, France

## Education

**Master's in Cyber-Physical and Social Systems (CPS2)**  
École des Mines de Saint-Étienne & Université Jean Monnet, University of Lyon  
*2025 – Present*

**Bachelor's in Computer Science**  
Lebanese University  
*2019 – 2022*

## License

All rights reserved © 2025 Ali Yahyaoui

---

**Note**: This portfolio is continuously updated to reflect my latest projects and skills. Feel free to explore and reach out if you'd like to connect!
