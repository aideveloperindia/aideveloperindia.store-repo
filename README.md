# Aditya Nandagiri - Portfolio Website

A modern, responsive portfolio website built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. Features include interactive galleries, audio players, animations, and full mobile responsiveness.

## 🚀 Live Demo

Visit the website: **https://www.aideveloperindia.store/**

## 🛠 Tech Stack

- **Frontend Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Gallery**: Yet Another React Lightbox
- **Deployment**: Vercel
- **Language**: TypeScript

## 📋 Features

### 🏠 Multi-Page Portfolio
- **Home**: Hero section with statistics and featured work
- **About**: Detailed biography, achievements, and awards
- **Innovations**: 7 innovations with descriptions and links
- **Clients**: 3 client projects with case studies
- **Gallery**: 20+ photos with filtering and lightbox
- **Videos**: YouTube embeds with categories
- **Book**: "Apavarga" book showcase
- **Stotras**: 6 spiritual audio players
- **Contact**: Contact form and social links

### ✨ Key Functionalities
- 📱 **Fully Responsive**: Works perfectly on all devices
- 🎨 **Modern Design**: Clean, professional aesthetic
- ⚡ **Fast Performance**: Optimized for speed
- 🌙 **Smooth Animations**: Framer Motion transitions
- 📧 **Contact Form**: Functional contact form
- 🎵 **Audio Players**: Custom HTML5 audio controls
- 🖼️ **Image Gallery**: Lightbox with filtering
- 📺 **Video Embeds**: YouTube integration
- 🔍 **SEO Optimized**: Meta tags and structured data

## 🚀 Quick Start

### Prerequisites
- Node.js 16.8 or later
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/adityanandagiri/portfolio-website.git
cd portfolio-website
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
Visit [http://localhost:3000](http://localhost:3000)

## 📦 Deployment on Vercel

### Automatic Deployment (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Configure domain to `aideveloperindia.store`
   - Click "Deploy"

3. **Custom Domain Setup**
   - Go to Project Settings → Domains
   - Add `www.aideveloperindia.store`
   - Update DNS records as instructed by Vercel

### Manual Deployment

```bash
npm run build
npm run start
```

## 🎨 Customization Guide

### 1. Personal Information

**Update personal details in:**
- `pages/about.tsx` - Biography and achievements
- `pages/index.tsx` - Hero section content
- `components/Footer.tsx` - Contact information
- `components/Layout.tsx` - Meta tags and SEO

### 2. Innovations Section

**Edit `pages/innovations.tsx`:**
```javascript
const innovations = [
  {
    title: "Your Innovation",
    description: "Description here",
    useCases: "Use cases here",
    websiteUrl: "https://your-website.com",
    videoUrl: "YouTube URL",
    patentLink: "Patent URL (optional)"
  },
  // Add more innovations...
];
```

### 3. Client Projects

**Edit `pages/clients.tsx`:**
```javascript
const projects = [
  {
    title: "Project Name",
    description: "Project description",
    websiteUrl: "https://project-url.com",
    status: "Live" // or "Coming Soon"
  },
  // Add more projects...
];
```

### 4. Gallery Images

**Add images to `public/images/gallery/`:**
- Create folders: `workshop1.jpg`, `interview1.jpg`, etc.
- Update `pages/gallery.tsx` with correct file paths
- Ensure images are optimized (< 500KB)

### 5. Audio Files (Stotras)

**Add MP3 files to `public/audio/`:**
- `ganesha.mp3`
- `parvathi.mp3`
- `shiva.mp3`
- `vishnu.mp3`
- `subrahmanya.mp3`
- `surya.mp3`

### 6. Video Content

**Add YouTube videos in `pages/videos.tsx`:**
```javascript
const videos = [
  {
    title: "Video Title",
    description: "Video description",
    youtubeId: "dQw4w9WgXcQ", // Extract from YouTube URL
    category: "interviews"
  },
  // Add more videos...
];
```

### 7. Colors and Branding

**Customize colors in `tailwind.config.js`:**
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb', // Main brand color
    // ... other shades
  }
}
```

### 8. Contact Information

**Update contact details:**
- Email: `aditya@aideveloperindia.store`
- WhatsApp: Update phone number in contact forms
- Social links: LinkedIn, GitHub, etc.

## 📁 Project Structure

```
aditya-portfolio/
├── components/           # Reusable React components
│   ├── Navigation.tsx   # Header navigation
│   ├── Footer.tsx       # Footer component
│   ├── Layout.tsx       # Page layout wrapper
│   ├── InnovationCard.tsx # Innovation display card
│   └── AudioPlayer.tsx  # Custom audio player
├── pages/               # Next.js pages
│   ├── index.tsx        # Home page
│   ├── about.tsx        # About page
│   ├── innovations.tsx  # Innovations page
│   ├── clients.tsx      # Client projects
│   ├── gallery.tsx      # Photo gallery
│   ├── videos.tsx       # Video content
│   ├── book.tsx         # Book page
│   ├── stotras.tsx      # Audio stotras
│   ├── contact.tsx      # Contact form
│   └── _app.tsx         # App wrapper
├── public/              # Static assets
│   ├── images/          # All images
│   ├── audio/           # MP3 files
│   └── favicon.ico      # Site icon
├── styles/              # CSS styles
│   └── globals.css      # Global styles
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript config
└── next.config.js       # Next.js config
```

## 🎵 Adding Audio Files

1. **Prepare Audio Files**
   - Format: MP3 (recommended)
   - Quality: 128kbps or higher
   - Naming: Match the filenames in `stotras.tsx`

2. **Upload Files**
   - Place in `public/audio/` folder
   - Ensure correct naming: `ganesha.mp3`, `parvathi.mp3`, etc.

3. **Test Playback**
   - Audio controls are custom HTML5 players
   - Support play/pause, seeking, and download
   - Responsive design for mobile devices

## 🖼️ Adding YouTube Videos

1. **Get Video ID**
   ```
   YouTube URL: https://www.youtube.com/watch?v=dQw4w9WgXcQ
   Video ID: dQw4w9WgXcQ
   ```

2. **Add to Videos Array**
   ```javascript
   {
     youtubeId: "dQw4w9WgXcQ",
     title: "Your Video Title",
     description: "Video description",
     category: "interviews" // or workshops, innovations, etc.
   }
   ```

## 🔧 Environment Variables

Create `.env.local` for local development:

```bash
NEXT_PUBLIC_SITE_URL=https://www.aideveloperindia.store
NEXT_PUBLIC_CONTACT_EMAIL=aditya@aideveloperindia.store
```

## 📱 Mobile Responsiveness

The website is fully responsive with:
- Mobile-first design approach
- Touch-friendly navigation
- Optimized images for mobile
- Responsive typography
- Mobile-optimized forms

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social media
- Structured data markup
- XML sitemap (auto-generated)
- Fast loading speeds
- Mobile-friendly design

## 🚨 Troubleshooting

### Common Issues

1. **Images not loading**
   - Verify file paths in `public/images/`
   - Check file naming conventions
   - Ensure images are optimized

2. **Audio not playing**
   - Confirm MP3 files are in `public/audio/`
   - Check browser compatibility
   - Verify file permissions

3. **Videos not embedding**
   - Ensure YouTube video is public
   - Verify video ID is correct
   - Check YouTube embedding permissions

4. **Build errors**
   ```bash
   npm run build
   # Check for TypeScript errors
   npm run lint
   ```

## 📄 License

This project is licensed under the MIT License. See `LICENSE` file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions:
- Email: [aditya@aideveloperindia.store](mailto:aditya@aideveloperindia.store)
- LinkedIn: [Aditya Nandagiri](https://www.linkedin.com/in/aditya-nanda/)
- Website: [www.aideveloperindia.store](https://www.aideveloperindia.store)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Animated with [Framer Motion](https://www.framer.com/motion/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Deployed on [Vercel](https://vercel.com/)

---

**Built with ❤️ by Aditya Nandagiri - Recognized Innovator | Ethical Hacker | Founder | AI Developer** 