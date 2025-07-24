# Deployment Guide - Vercel

This guide will help you deploy the Aditya Nandagiri portfolio website to Vercel with the custom domain `www.aideveloperindia.store`.

## 🚀 Quick Deployment Steps

### 1. Prerequisites
- GitHub account
- Vercel account (free tier is sufficient)
- Domain ownership of `aideveloperindia.store`

### 2. GitHub Setup

1. **Create new repository on GitHub**
   ```bash
   # Repository name: aditya-portfolio
   # Description: Portfolio website for Aditya Nandagiri
   # Visibility: Public (recommended for easy deployment)
   ```

2. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio setup"
   git branch -M main
   git remote add origin https://github.com/yourusername/aditya-portfolio.git
   git push -u origin main
   ```

### 3. Vercel Deployment

1. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import `aditya-portfolio` repository

2. **Configure Project Settings**
   ```
   Project Name: aditya-portfolio
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Install Command: npm install
   Output Directory: .next
   ```

3. **Environment Variables (Optional)**
   ```
   NEXT_PUBLIC_SITE_URL=https://www.aideveloperindia.store
   NEXT_PUBLIC_CONTACT_EMAIL=aditya@aideveloperindia.store
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for build completion (2-3 minutes)
   - Your site will be live at `https://aditya-portfolio.vercel.app`

### 4. Custom Domain Setup

1. **Add Domain in Vercel**
   - Go to Project Settings → Domains
   - Add `www.aideveloperindia.store`
   - Add `aideveloperindia.store` (will redirect to www)

2. **DNS Configuration**
   Update your domain DNS settings:
   
   **For Cloudflare/Domain Provider:**
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   
   Type: A
   Name: @
   Value: 76.76.21.21
   ```
   
   **Alternative (A Records):**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: A  
   Name: www
   Value: 76.76.21.21
   ```

3. **SSL Certificate**
   - Vercel automatically provides SSL certificates
   - Wait 10-15 minutes for propagation
   - Your site will be live at `https://www.aideveloperindia.store`

## 🔧 Advanced Configuration

### Build Optimization

Add to `next.config.js`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
}

module.exports = nextConfig
```

### Vercel Analytics (Optional)

1. **Install Vercel Analytics**
   ```bash
   npm install @vercel/analytics
   ```

2. **Add to `_app.tsx`**
   ```javascript
   import { Analytics } from '@vercel/analytics/react';
   
   export default function App({ Component, pageProps }: AppProps) {
     return (
       <>
         <Component {...pageProps} />
         <Analytics />
       </>
     );
   }
   ```

### Performance Monitoring

Enable in Vercel dashboard:
- Speed Insights
- Web Vitals monitoring
- Function logs
- Edge Network analytics

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Check build locally first
   npm run build
   npm run start
   ```

2. **Domain Not Working**
   - Check DNS propagation: `nslookup www.aideveloperindia.store`
   - Wait 24-48 hours for full DNS propagation
   - Clear browser cache

3. **Images Not Loading**
   - Ensure all images are in `public/` folder
   - Check file paths and naming
   - Verify image optimization settings

4. **Functions Timeout**
   - Check for infinite loops in components
   - Optimize heavy computations
   - Use static generation where possible

### Deployment Checklist

- [ ] All dependencies installed and working
- [ ] Build completes without errors
- [ ] All images placed in correct folders
- [ ] Audio files uploaded to `/public/audio/`
- [ ] YouTube video IDs added
- [ ] Contact form tested
- [ ] Meta tags and SEO configured
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility tested

## 🔄 Continuous Deployment

Every push to `main` branch will automatically deploy to Vercel:

```bash
# Make changes
git add .
git commit -m "Update content"
git push origin main

# Vercel will automatically rebuild and deploy
```

## 📊 Monitoring

Monitor your deployment:
- **Vercel Dashboard**: Real-time analytics
- **Google Search Console**: SEO performance
- **Google Analytics**: User behavior (add tracking code)
- **PageSpeed Insights**: Performance metrics

## 🛡️ Security

Vercel provides:
- Automatic HTTPS/SSL certificates
- DDoS protection
- Edge network security
- Secure headers by default

## 📈 Performance

Expected performance metrics:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🎯 Next Steps After Deployment

1. **Test all functionality**
   - Navigation between pages
   - Contact form submission
   - Audio player functionality
   - Image gallery lightbox
   - Video embeds

2. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Verify domain ownership
   - Set up Google Analytics (optional)

3. **Content Updates**
   - Add real images to gallery
   - Upload audio files for stotras
   - Add YouTube video IDs
   - Update innovation links

4. **Social Media Integration**
   - Share on LinkedIn
   - Update social media profiles
   - Add social sharing buttons (optional)

## 📞 Support

If you encounter issues:
- Check Vercel deployment logs
- Review browser console errors
- Verify DNS settings
- Contact Vercel support if needed

---

**Your portfolio website will be live at: https://www.aideveloperindia.store** 