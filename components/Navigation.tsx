import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/innovations', label: 'Innovations' },
    { href: '/clients', label: 'Client Projects' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/videos', label: 'Videos' },
    { href: '/book', label: 'Book' },
    { href: '/stotras', label: 'Stotras' },
    { href: '/contact', label: 'Contact' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-secondary-200 z-50">
      <div className="container-width">
        <div className="relative flex items-center justify-center md:justify-between h-20 sm:h-24 px-4 sm:px-6">
          {/* Logo - Centered on mobile, left-aligned on desktop */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt="Aditya Nandagiri Logo"
              width={64}
              height={64}
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-lg shadow-sm"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                  router.pathname === item.href
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-700 hover:shadow-md'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button - Positioned absolutely on the right */}
          <button
            onClick={toggleMenu}
            className="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-lg bg-secondary-50 hover:bg-primary-100 border-2 border-transparent hover:border-primary-200 transition-all duration-300 hover:scale-105 touch-manipulation shadow-sm hover:shadow-md"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-secondary-200 bg-white"
            >
              <div className="py-6 space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-6 py-4 text-base font-semibold rounded-xl mx-2 transition-all duration-300 transform hover:scale-105 touch-manipulation ${
                      router.pathname === item.href
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-700 active:bg-primary-100 shadow-sm hover:shadow-md'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation; 