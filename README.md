# Ali Yahyaoui - Portfolio

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Software Engineer.

## 🚀 Features

- **Multilingual Support**: English, Arabic, and French
- **3D Background Animation**: Interactive Three.js background
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: GSAP-powered scroll animations
- **Contact Form**: Formspree integration for easy communication
- **Modern Tech Stack**: React, Next.js, TypeScript, Tailwind CSS
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Tech Stack

- **Frontend**: React 19, Next.js 15, TypeScript
- **Styling**: Tailwind CSS, CSS3
- **Animations**: GSAP, Three.js, Vanilla Tilt
- **Internationalization**: i18next, react-i18next
- **Form Handling**: Formspree
- **Icons**: Font Awesome
- **Fonts**: Inter, Fira Code

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aliyehiawi/ali-yahyaoui-portfolio.git
   cd ali-yahyaoui-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_FORMSPREE_ID=your_formspree_form_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js app directory
├── components/             # React components
│   ├── Layout.jsx         # Main layout with navigation
│   ├── Hero.jsx           # Hero section
│   ├── About.jsx          # About section
│   ├── Skills.jsx         # Skills section
│   ├── Experience.jsx     # Experience timeline
│   ├── Projects.jsx       # Projects showcase
│   └── AnimatedContactSection.jsx # Contact form
├── hooks/                  # Custom React hooks
├── i18n/                   # Internationalization
│   └── locales/           # Translation files
└── index.css              # Global styles
```

## 🌐 Internationalization

The portfolio supports three languages:
- **English** (en) - Default
- **Arabic** (ar) - RTL support
- **French** (fr)

Translation files are located in `src/i18n/locales/`.

## 🎨 Customization

### Colors & Styling
- Primary colors are defined in `tailwind.config.js`
- Gradient text uses CSS custom properties
- 3D card effects are in `src/index.css`

### Content
- Update personal information in translation files
- Modify project details in `Projects.jsx`
- Update experience in `Experience.jsx`

### Contact Form
- Replace Formspree form ID in `AnimatedContactSection.jsx`
- Update email and phone in translation files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms
The project works with any static hosting service.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 📄 License

This project is private and proprietary. All rights reserved.

## 🤝 Contact

- **Email**: ali.yehiawii@gmail.com
- **LinkedIn**: [Ali Yehiawi](https://www.linkedin.com/in/ali-yehiawi-a49a6421b)
- **GitHub**: [aliyehiawi](https://github.com/aliyehiawi)

---

Built with ❤️ using modern web technologies
