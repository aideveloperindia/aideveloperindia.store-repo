import React from 'react';
import Head from 'next/head';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Aditya Nandagiri - AI Developer & Innovator',
  description = 'Portfolio of Aditya Nandagiri - Recognized Innovator, Ethical Hacker, Founder, and AI Developer from India.',
  keywords = 'Aditya Nandagiri, AI Developer, Innovator, Ethical Hacker, Founder, India, Portfolio'
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Aditya Nandagiri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/workshops photos/favicon.png" type="image/png" />
        <link rel="icon" href="/workshops photos/favicon.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/workshops photos/favicon.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/workshops photos/favicon.png" sizes="48x48" type="image/png" />
        <link rel="apple-touch-icon" href="/workshops photos/favicon.png" />
        <meta name="theme-color" content="#2563eb" />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aideveloperindia.store/" />
        <meta property="og:image" content="/images/og-image.jpg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/images/og-image.jpg" />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1 pt-20 sm:pt-24">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout; 