import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiPlay, FiEye, FiLinkedin } from 'react-icons/fi';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout
      title="Aditya Nandagiri - AI Developer & Innovator"
      description="Portfolio of Aditya Nandagiri - Recognized Innovator, Ethical Hacker, Founder, and AI Developer from India."
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-100 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-primary-300 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container-width section-padding text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Aditya Nandagiri
            </motion.h1>
            
            <motion.p 
              className="text-lg xs:text-xl sm:text-xl md:text-2xl text-secondary-700 mb-8 max-w-3xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              "Recognized Innovator | Ethical Hacker | Founder | AI Developer"
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg text-secondary-600 mb-12 max-w-2xl mx-auto px-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Honored 4 times as "Intinta Innovator" by the State Innovation Cell, Govt. of Telangana
              <br className="hidden sm:block" />
              <span className="sm:hidden"> - </span>
              Full-time founder of The Switch-Phone Company
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Link href="/innovations" className="btn-primary inline-flex items-center gap-2">
                <FiEye size={20} />
                View My Work
              </Link>
              
              <Link href="/videos" className="btn-secondary inline-flex items-center gap-2">
                <FiPlay size={20} />
                Watch My Videos
              </Link>
              
              <a 
                href="https://www.linkedin.com/in/aditya-nanda/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <FiLinkedin size={20} />
                Connect on LinkedIn
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-secondary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary-400 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Quick Stats */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-primary-600 mb-2">7+</h3>
              <p className="text-secondary-600">Innovations</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-primary-600 mb-2">5000+</h3>
              <p className="text-secondary-600">Students Trained</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-primary-600 mb-2">4x</h3>
              <p className="text-secondary-600">Awards Winner</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-primary-600 mb-2">3</h3>
              <p className="text-secondary-600">Companies Founded</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Featured Work
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Explore my latest innovations and projects that are making a difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Switch-Phone</h3>
              <p className="text-secondary-600 mb-4">
                Connect elderly to essentials with innovative communication solutions
              </p>
              <Link href="/innovations" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Anti-Theft Slate</h3>
              <p className="text-secondary-600 mb-4">
                Patented innovation (Published not yet Granted) for preventing infant abduction in hospitals
              </p>
              <Link href="/innovations" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Kinkar AI</h3>
              <p className="text-secondary-600 mb-4">
                Fully automates recruiting and bench sales with AI
              </p>
              <Link href="/innovations" className="text-primary-600 font-semibold hover:text-primary-700">
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home; 