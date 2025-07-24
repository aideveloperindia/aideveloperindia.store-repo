# Public Folder Structure

This document outlines the required folder structure for the public directory to ensure all images, audio files, and assets are properly organized.

## Required Directory Structure

```
public/
├── images/
│   ├── gallery/
│   │   ├── workshop1.jpg
│   │   ├── workshop2.jpg
│   │   ├── interview1.jpg
│   │   ├── award1.jpg
│   │   └── ... (up to 20 images)
│   ├── certificates/
│   │   ├── intinta-2019.jpg
│   │   ├── intinta-2020.jpg
│   │   ├── intinta-2022.jpg
│   │   └── intinta-2023.jpg
│   ├── trademarks/
│   │   ├── trademark1.jpg
│   │   ├── trademark2.jpg
│   │   └── trademark3.jpg
│   ├── book/
│   │   └── apavarga-cover.jpg
│   ├── clients/
│   │   ├── kdsms.jpg
│   │   ├── maareech.jpg
│   │   └── mrphoto.jpg
│   ├── innovations/
│   │   ├── anti-theft-slate.jpg
│   │   ├── switch-phone.jpg
│   │   ├── votes-app.jpg
│   │   ├── kinkar-ai.jpg
│   │   ├── berum.jpg
│   │   ├── japam.jpg
│   │   └── credbill.jpg
│   └── og-image.jpg
├── audio/
│   ├── ganesha.mp3
│   ├── parvathi.mp3
│   ├── shiva.mp3
│   ├── vishnu.mp3
│   ├── subrahmanya.mp3
│   └── surya.mp3
├── favicon.ico
└── robots.txt
```

## File Specifications

### Images
- **Format**: JPG, PNG, or WebP
- **Quality**: High resolution (minimum 800x600 for galleries)
- **Size**: Optimize for web (under 500KB per image)

### Audio Files
- **Format**: MP3 (recommended), WAV, or OGG
- **Quality**: 128kbps or higher
- **Duration**: Varies per stotra

### Special Files
- **favicon.ico**: Website icon (32x32px)
- **og-image.jpg**: Social media preview image (1200x630px)
- **robots.txt**: SEO directives

## Instructions for Adding Content

1. **Gallery Photos**: Place workshop and interview photos in `/images/gallery/`
2. **Certificates**: Add Intinta Innovator certificate images in `/images/certificates/`
3. **Stotras**: Place all 6 audio files in `/audio/` folder
4. **Book Cover**: Add book cover image in `/images/book/`
5. **Innovation Images**: Add innovation screenshots/photos in `/images/innovations/`

## Notes
- Ensure all file paths match exactly with those referenced in the code
- Use descriptive, SEO-friendly filenames
- Compress images for optimal loading performance
- Test audio files for proper playback before deployment 