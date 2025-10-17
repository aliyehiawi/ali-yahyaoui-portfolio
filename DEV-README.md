# Ali Yahyaoui - Portfolio (Development Guide)

> Personal development documentation for maintaining and customizing the portfolio.

## Quick Start

   ```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Tech Stack Details

### Core Technologies

- **React 19** - Latest React features
- **Next.js 15** - App Router, Server Components
- **TypeScript** - Type safety (config files only)
- **Tailwind CSS 3** - Utility-first CSS

### Animations

- **GSAP 3** - Scroll-triggered animations
- **Three.js** - 3D background and contact section
- **Vanilla Tilt** - 3D card tilt effects

### Internationalization

- **i18next** - Translation framework
- **react-i18next** - React bindings
- **I18nProvider** - Custom RTL direction management
- Custom digit transformation for Arabic numerals
- Automatic RTL support using CSS logical properties

### Forms & Validation

- **Formspree** - Form submission backend (ID: mblynvld)
- Custom HTML5 validation with localized messages
- Dynamic validation error translation

## Project Structure

```
├── build/                  # Next.js build output
├── public/                 # Static assets
│   └── assets/
│       ├── Ali Yahyaoui CV.pdf
│       └── images/
│           └── profile.jpg
├── src/
│   ├── app/               # Next.js app directory
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/        # React components
│   ├── hooks/            # Custom hooks
│   ├── i18n/             # Translations
│   └── index.css         # Global styles
├── tailwind.config.js    # Tailwind configuration
├── next.config.ts        # Next.js configuration
└── package.json          # Dependencies
```

## Internationalization System

### Translation Files

Located in `src/i18n/locales/`:

- `en.json` - English (default)
- `ar.json` - Arabic (RTL)
- `fr.json` - French

### Key Features

1. **Automatic RTL Support**
   - Arabic language automatically enables RTL layout via `I18nProvider` component
   - Uses CSS logical properties (e.g., `margin-inline-start`, `padding-inline-end`)
   - Tailwind's built-in logical utilities: `ms-*`, `me-*`, `ps-*`, `pe-*`
   - Direction-agnostic spacing with `gap-*` utilities
   - Automatic `dir` attribute switching on `<html>` element
   - Arabic typography with Tajawal font from Google Fonts

2. **Arabic Numerals**
   - Western digits (0-9) automatically convert to Arabic (٠-٩)
   - Use `{{value, digits}}` in translations
   - Configured in `src/i18n/i18n.js`

3. **Form Validation**
   - Custom validation messages in all languages
   - Implemented via `setCustomValidity()` API
   - See `AnimatedContactSection.jsx` lines 95-131

4. **Dynamic Phone Formatting**
   - Pattern-based formatting in `Layout.jsx`
   - Supports multiple country codes
   - Easily extensible for new formats

### Adding Translations

```javascript
// In translation file
{
  "section": {
    "key": "Translation text",
    "withInterpolation": "Hello {{name}}",
    "withDigits": "Year: {{year, digits}}"
  }
}

// In component
const { t } = useTranslation();
t('section.key')
t('section.withInterpolation', { name: 'Ali' })
```

## Customization Guide

### Update Personal Information

**1. Contact Details** (`src/i18n/locales/*.json`)

```json
{
  "contact": {
    "email": "your-email@example.com",
    "phoneRaw": "33765776014",  // Without + or spaces
    "location": "Your City, Country"
  }
}
```

**2. Profile Image** (`public/assets/images/`)

- Replace `profile.jpg` (recommended: 400x400px, square)

**3. CV File** (`public/assets/`)

- Replace `Ali Yahyaoui CV.pdf`
- Update filename in `Hero.jsx` if renamed

### Update Content

**About Section** (`src/i18n/locales/*.json`)

```json
{
  "about": {
    "education": {
      "masters": "Your Master's Degree",
      "mastersSchool1": "University 1",
      "mastersSchool2": "University 2",
      "mastersYears": "2025 – Present",
      "mastersDescription": "Description of your program..."
    }
  }
}
```

**Skills** (`src/i18n/locales/*.json` + `src/components/Skills.jsx`)

1. Add skill translations to JSON files
2. Update `Skills.jsx` to include new skills:

```javascript
techs={[
  t("skills.frontend.html5"),
  t("skills.frontend.yourNewSkill"),  // Add here
  // ...
]}
```

**Experience** (`src/i18n/locales/*.json`)

- Add new experience items in translation files
- Update `Experience.jsx` to render new items

### Styling

**Colors** (`tailwind.config.js`)

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      accent: '#your-color',
    }
  }
}
```

**Animations** (`src/hooks/useGsapEffects.js`)

- Modify GSAP animation parameters
- Adjust scroll trigger positions
- Customize tilt effects

### Phone Number Formatting

**Add New Format** (`src/components/Layout.jsx`)

```javascript
const patterns = {
  11: { country: 2, groups: [1, 2, 2, 2, 2] },  // French
  12: { country: 3, groups: [2, 3, 3] },        // Lebanese
  // Add your format:
  10: { country: 1, groups: [3, 3, 4] }         // US
};
```

## Development Notes

### Form Validation

- HTML5 validation provides basic checks
- Custom messages set via `useEffect` hooks
- Messages update when language changes
- See `AnimatedContactSection.jsx` for implementation

### 3D Effects

- Three.js scenes in `Background3D.jsx` and `AnimatedContactSection.jsx`
- Automatically cleanup on unmount
- Responsive to window resize
- Performance optimized with `requestAnimationFrame`

### Responsive Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Deploy automatically
4. Configure custom domain if needed

### Build Locally

```bash
npm run build
npm start
```

### Environment Variables

No environment variables required for basic functionality.

Optional:

- `NEXT_PUBLIC_FORMSPREE_ID` - Can be set but currently hardcoded

## Translation Management

### Best Practices

1. Keep translation keys consistent across all languages
2. Use semantic key names: `section.component.description`
3. Test all languages after adding new translations
4. Verify RTL layout for Arabic content

### Validation Checklist

- [ ] All keys exist in all three language files
- [ ] Arabic numerals display correctly
- [ ] Form validation messages work in all languages
- [ ] RTL layout is correct for Arabic
- [ ] No hardcoded strings in components

## Troubleshooting

### Build Errors

- Clear `.next` and `build` folders
- Delete `node_modules` and reinstall
- Check for TypeScript errors in `.ts`/`.tsx` files

### Translation Issues

- Verify translation keys exist in all files
- Check for typos in key paths
- Ensure i18n is initialized before rendering

### Animation Issues

- Check browser console for Three.js errors
- Verify GSAP is properly loaded
- Ensure elements have `.section` or `.card-3d` classes

## Performance Tips

1. **Images**: Optimize all images before adding
2. **Animations**: Use `will-change` CSS for animated elements
3. **Lazy Loading**: Consider lazy loading for heavy components
4. **Bundle Size**: Monitor with `npm run build`

## Security

- No sensitive data in repository
- API keys should be environment variables
- Formspree handles form security
- Regular dependency updates for security patches

## Support

For questions or issues:

- Check this documentation first
- Review component code and comments
- Test in multiple browsers and devices
- Validate translations in all languages

---

**Last Updated**: 2025
**Maintained by**: Ali Yahyaoui
