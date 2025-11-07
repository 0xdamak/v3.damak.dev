# 🚀 Damak | Portfolio v3

A modern, performant portfolio website built with Next.js, featuring smooth animations, a contact form with spam protection, and SEO optimization.

![Next.js](https://img.shields.io/badge/Next.js-12.1.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-17.0.2-61DAFB?style=flat-square&logo=react)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-6.2.8-FF0055?style=flat-square)
![SCSS](https://img.shields.io/badge/SCSS-Modules-CC6699?style=flat-square&logo=sass)

## ✨ Features

- 🎨 **Modern UI/UX** - Smooth animations powered by Framer Motion
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🌙 **Dark Theme** - Eye-friendly dark mode design
- 📧 **Contact Form** - Integrated with Resend API for email delivery
- 🤖 **Spam Protection** - Google reCAPTCHA v2 integration
- 🔒 **Rate Limiting** - Built-in request throttling
- 🎯 **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, sitemap, and structured data
- 🖼️ **Image Carousel** - Auto-playing project image galleries with smooth transitions
- ⚡ **Performance** - Optimized loading and rendering
- 🎭 **Micro-interactions** - Engaging hover effects and transitions

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) 12.1.0
- **UI Library**: [React](https://reactjs.org/) 17.0.2
- **Animations**: [Framer Motion](https://www.framer.com/motion/) 6.2.8
- **Styling**: SCSS Modules
- **Forms**: React Hook Form
- **Email**: [Resend](https://resend.com/)
- **Security**: Google reCAPTCHA v2
- **SEO**: Next SEO

## 📋 Prerequisites

- Node.js 14.x or higher
- Yarn or npm
- Resend API account
- Google reCAPTCHA v2 keys

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd v3.damak.dev
```

### 2. Install dependencies

```bash
yarn install
# or
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory:

```bash
# Resend API (Required for contact form)
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
FROM_EMAIL=onboarding@resend.dev  # Or your verified domain email
TO_EMAIL=your-email@gmail.com     # Where you'll receive messages

# Google reCAPTCHA v2 (Required)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

### 4. Run the development server

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

This script verifies your environment variables are configured correctly.

## 📁 Project Structure

```
v3.damak.dev/
├── components/          # React components
│   ├── about/          # About section
│   ├── arsenal/        # Skills/tools section
│   ├── contact/        # Contact form
│   ├── experience/     # Work experience timeline
│   ├── footer/         # Footer component
│   ├── hero/           # Hero section
│   ├── layout/         # Main layout wrapper
│   ├── navigation/     # Navigation bar
│   ├── seo/            # SEO components
│   ├── ui/             # Reusable UI components
│   │   ├── button/
│   │   ├── pre-loader/
│   │   ├── progress-icon/
│   │   ├── project-card/  # Image carousel component
│   │   ├── section/
│   │   ├── social-icons/
│   │   └── toggle-button/
│   └── work/           # Projects/portfolio section
├── hooks/              # Custom React hooks
├── pages/              # Next.js pages
│   ├── api/           # API routes
│   │   ├── contact.js # Contact form handler
│   │   └── sitemap.js # Dynamic sitemap
│   ├── _app.js        # App wrapper
│   ├── _document.js   # Document wrapper
│   └── index.js       # Homepage
├── public/            # Static assets
│   ├── images/        # Project images
│   ├── svg/           # SVG icons and illustrations
│   ├── favicon.svg
│   ├── manifest.json
│   ├── robots.txt
│   └── sitemap.xml
├── styles/            # Global styles
├── seo.config.js      # SEO configuration
└── next.config.js     # Next.js configuration
```

## 🎨 Key Components

### Image Carousel

The project cards feature an auto-playing image carousel with:

- Smooth slide transitions
- Navigation controls (prev/next buttons)
- Dot indicators
- Play/pause functionality
- Loading states with spinner

### Contact Form

Fully-featured contact form with:

- Real-time validation
- Spam protection (reCAPTCHA v2)
- Rate limiting (3 requests per 15 minutes)
- Input sanitization
- Email delivery via Resend
- Success/error feedback

### Navigation

- Smooth scroll to sections
- Active section highlighting
- Mobile-responsive menu
- Scroll progress indicator

## 🔧 Available Scripts

```bash
# Development server
yarn dev

# Production build
yarn build

# Start production server
yarn start

# Lint code
yarn lint
```

## 📧 Contact Form Setup

The contact form uses **Resend** for email delivery and **Google reCAPTCHA v2** for spam protection.

### Why reCAPTCHA v2?

- ✅ Definitive bot protection
- ✅ No false positives for real users
- ✅ Clear security signal
- ✅ Perfect for contact forms

See [RESEND_SETUP.md](./RESEND_SETUP.md) for complete setup instructions.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push your code to GitHub
2. Import your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`
   - `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
   - `RECAPTCHA_SECRET_KEY`
4. Deploy!

### Other Platforms

- **Netlify**: Supports Next.js
- **Railway**: Simple deployment
- **AWS Amplify**: Full AWS integration

> ⚠️ **Important**: Don't forget to add your environment variables to your deployment platform!

## 🔒 Security Features

- Input sanitization and validation
- Rate limiting on contact form
- reCAPTCHA v2 verification
- Environment variable protection
- CORS headers
- XSS protection

## 🎯 SEO Features

- Meta tags optimization
- Open Graph tags
- Twitter Cards
- Structured data (JSON-LD)
- Dynamic sitemap
- Robots.txt
- Canonical URLs
- Performance optimization

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🤝 Contributing

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 License

This project is private and proprietary.

## 👤 Author

**Damilola Akinlade**

- Website: [damak.dev](https://damak.dev)
- Twitter: [@damakdev](https://twitter.com/damakdev)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Resend](https://resend.com/) - Email API
- [Vercel](https://vercel.com/) - Hosting platform

---

Made with ❤️ by Damak
