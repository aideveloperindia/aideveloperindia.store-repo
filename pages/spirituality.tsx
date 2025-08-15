import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiShoppingCart, FiBook, FiStar, FiMusic, FiHeart } from 'react-icons/fi';
import Layout from '../components/Layout';
import AudioPlayer from '../components/AudioPlayer';

const Spirituality = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState('book');

  const stotras = [
    {
      title: "Lord Ganesha – Proton",
      description: "Sacred chants dedicated to Lord Ganesha, representing the fundamental proton in modern scientific understanding while maintaining spiritual essence.",
      audioSrc: "/Strotras/Lord Ganesha – Proton.mp3"
    },
    {
      title: "Goddess Parvathi – String",
      description: "Divine hymns to Goddess Parvathi, symbolizing the cosmic string theory that connects all existence in both spiritual and scientific realms.",
      audioSrc: "/audio/parvathi.mp3"
    },
    {
      title: "Lord Shiva – String",
      description: "Powerful mantras invoking Lord Shiva, the cosmic dancer whose divine energy resonates with the fundamental strings of the universe.",
      audioSrc: "/audio/shiva.mp3"
    },
    {
      title: "Lord Vishnu – Nuclear Forces",
      description: "Sacred verses praising Lord Vishnu, the preserver whose divine force maintains cosmic balance like nuclear forces in atomic structure.",
      audioSrc: "/audio/vishnu.mp3"
    },
    {
      title: "Lord Subrahmanya – Electron",
      description: "Devotional chants to Lord Subrahmanya, the dynamic deity whose energy parallels the electron's role in cosmic and atomic manifestations.",
      audioSrc: "/audio/subrahmanya.mp3"
    },
    {
      title: "God Surya – Hydrogen",
      description: "Luminous hymns to God Surya, the solar deity whose radiant energy mirrors hydrogen's fundamental role as the universe's primary element.",
      audioSrc: "/audio/surya.mp3"
    }
  ];

  return (
    <Layout
      title="Spirituality - Book & Stotras | Aditya Nandagiri"
      description="Explore Aditya Nandagiri's spiritual work including 'Apavarga - You Shall See God' book and Shanmatha Stotras that bridge ancient wisdom with modern science."
      keywords="Apavarga, book, spirituality, Shanmatha Stotras, meditation, spiritual philosophy"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-3xl xs:text-4xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-6 leading-tight">
              Spiritual Wisdom
            </h1>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Bridging ancient spiritual wisdom with modern scientific understanding through literature and sacred audio
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card p-6 text-center"
            >
              <div className="text-primary-600 bg-primary-50 p-3 rounded-lg inline-block mb-4">
                <FiBook className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">1</h3>
              <p className="text-secondary-600">Published Book</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6 text-center"
            >
              <div className="text-primary-600 bg-primary-50 p-3 rounded-lg inline-block mb-4">
                <FiMusic className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">6</h3>
              <p className="text-secondary-600">Sacred Stotras</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-6 text-center"
            >
              <div className="text-primary-600 bg-primary-50 p-3 rounded-lg inline-block mb-4">
                <div className="text-2xl">🕉️</div>
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">6</h3>
              <p className="text-secondary-600">Deities (Shanmatha)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card p-6 text-center"
            >
              <div className="text-primary-600 bg-primary-50 p-3 rounded-lg inline-block mb-4">
                <FiHeart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">∞</h3>
              <p className="text-secondary-600">Spiritual Impact</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Tabs Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="bg-secondary-100 p-2 rounded-lg inline-flex">
              <button
                onClick={() => setActiveTab('book')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                  activeTab === 'book'
                    ? 'bg-white text-primary-600 shadow-lg'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                <FiBook size={20} />
                Apavarga Book
              </button>
              <button
                onClick={() => setActiveTab('stotras')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                  activeTab === 'stotras'
                    ? 'bg-white text-primary-600 shadow-lg'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                <FiMusic size={20} />
                Shanmatha Stotras
              </button>
            </div>
          </motion.div>

          {/* Book Tab Content */}
          {activeTab === 'book' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Book Hero */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-16">
                <div className="flex flex-col justify-start order-2 lg:order-1">
                  <div className="text-center lg:text-left">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                    >
                      📚 Spiritual Philosophy
                    </motion.div>
                    
                    <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 leading-tight">
                      Apavarga
                    </h2>
                    
                    <p className="text-lg xs:text-xl sm:text-xl md:text-2xl text-secondary-600 mb-6 italic leading-relaxed">
                      "You Shall See God"
                    </p>
                    
                    <p className="text-sm sm:text-base md:text-lg text-secondary-600 mb-8 leading-relaxed px-1">
                      A profound exploration of spirituality and modern science, bridging ancient wisdom 
                      with contemporary understanding to reveal the path to divine realization.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 px-1">
                      <button className="btn-primary inline-flex items-center justify-center gap-2">
                        <FiShoppingCart size={20} />
                        Buy Now
                      </button>
                      <button className="btn-secondary inline-flex items-center justify-center gap-2">
                        <FiDownload size={20} />
                        Download Sample
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-sm text-secondary-500">
                      <div className="flex items-center gap-1">
                        <FiStar className="text-yellow-500 fill-current" />
                        <FiStar className="text-yellow-500 fill-current" />
                        <FiStar className="text-yellow-500 fill-current" />
                        <FiStar className="text-yellow-500 fill-current" />
                        <FiStar className="text-yellow-500 fill-current" />
                        <span className="ml-1">5.0 (Coming Soon)</span>
                      </div>
                      <span className="hidden sm:inline">•</span>
                      <span>Available in English</span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center lg:justify-end items-start order-1 lg:order-2">
                  <div className="relative">
                    {/* Interactive Book Cover with Flip Effect */}
                    <div className="relative w-48 xs:w-56 sm:w-64 md:w-72 lg:w-80 h-auto max-w-sm mx-auto mt-0 lg:mt-0">
                      <div 
                        className="book-container cursor-pointer transform rotate-1 hover:rotate-0 transition-transform duration-500"
                        onClick={() => setIsFlipped(!isFlipped)}
                        onMouseEnter={() => setIsFlipped(true)}
                        onMouseLeave={() => setIsFlipped(false)}
                        style={{ perspective: '1000px' }}
                      >
                        <div className={`book-card ${isFlipped ? 'flipped' : ''}`}>
                          {/* Front Cover */}
                          <div className="book-front">
                            <div className="rounded-lg shadow-2xl overflow-hidden bg-white p-2">
                              <Image
                                src="/workshops photos/Apavarga book image.png"
                                alt="Apavarga Front Cover - You Shall See God by Aditya Nandagiri"
                                width={400}
                                height={600}
                                className="w-full h-auto rounded-lg"
                              />
                            </div>
                          </div>
                          
                          {/* Back Cover */}
                          <div className="book-back">
                            <div className="rounded-lg shadow-2xl overflow-hidden bg-white p-2">
                              <Image
                                src="/workshops photos/Apavarga back cover.png"
                                alt="Apavarga Back Cover - You Shall See God by Aditya Nandagiri"
                                width={400}
                                height={600}
                                className="w-full h-auto rounded-lg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Flip Instruction */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center z-10"
                      >
                        <p className="text-xs text-secondary-500 bg-white px-3 py-1 rounded-full shadow-sm inline-block">
                          <span className="hidden sm:inline">🖱️ Hover to see back cover</span>
                          <span className="sm:hidden">👆 Tap to see back cover</span>
                        </p>
                      </motion.div>
                    </div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-2 -right-2 w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center text-lg sm:text-2xl"
                    >
                      ✨
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Key Themes */}
              <div className="mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                    Key Themes Explored
                  </h3>
                  <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                    The book covers essential topics that connect science and spirituality
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: '🧬',
                      title: 'Consciousness & Science',
                      description: 'How modern neuroscience and quantum physics illuminate the nature of consciousness'
                    },
                    {
                      icon: '🕉️',
                      title: 'Ancient Wisdom',
                      description: 'Timeless spiritual principles from Eastern philosophy and meditation traditions'
                    },
                    {
                      icon: '🌌',
                      title: 'Cosmic Perspective',
                      description: 'Understanding our place in the universe through both scientific and spiritual lenses'
                    },
                    {
                      icon: '⚛️',
                      title: 'Quantum Reality',
                      description: 'How quantum mechanics reveals the interconnected nature of all existence'
                    },
                    {
                      icon: '🧘',
                      title: 'Practical Spirituality',
                      description: 'Meditation techniques and practices for modern spiritual seekers'
                    },
                    {
                      icon: '🔬',
                      title: 'Evidence-Based Faith',
                      description: 'Reconciling scientific methodology with spiritual experience and belief'
                    }
                  ].map((theme, index) => (
                    <motion.div
                      key={theme.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="card p-6 text-center"
                    >
                      <div className="text-4xl mb-4">{theme.icon}</div>
                      <h4 className="text-xl font-bold text-secondary-900 mb-3">
                        {theme.title}
                      </h4>
                      <p className="text-secondary-600">
                        {theme.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Purchase Options */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                  Get Your Copy
                </h3>
                <p className="text-xl text-secondary-600 mb-8">
                  Available in multiple formats for your convenience
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="card p-6 text-center"
                  >
                    <FiBook size={48} className="text-primary-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-secondary-900 mb-2">
                      Physical Book
                    </h4>
                    <p className="text-secondary-600 mb-4">
                      Premium paperback edition
                    </p>
                    <div className="text-2xl font-bold text-primary-600 mb-4">
                      $24.99
                    </div>
                    <button className="btn-primary w-full">
                      Coming Soon
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="card p-6 text-center border-2 border-primary-200 relative"
                  >
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Popular
                    </div>
                    <FiDownload size={48} className="text-primary-600 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-secondary-900 mb-2">
                      Digital Edition
                    </h4>
                    <p className="text-secondary-600 mb-4">
                      PDF, EPUB, and MOBI formats
                    </p>
                    <div className="text-2xl font-bold text-primary-600 mb-4">
                      $12.99
                    </div>
                    <button className="btn-primary w-full">
                      Coming Soon
                    </button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="card p-6 text-center"
                  >
                    <div className="text-4xl mb-4">🎧</div>
                    <h4 className="text-xl font-bold text-secondary-900 mb-2">
                      Audiobook
                    </h4>
                    <p className="text-secondary-600 mb-4">
                      Narrated by the author
                    </p>
                    <div className="text-2xl font-bold text-primary-600 mb-4">
                      $19.99
                    </div>
                    <button className="btn-secondary w-full">
                      In Progress
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Stotras Tab Content */}
          {activeTab === 'stotras' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stotras Hero */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
                  Shanmatha Stotras
                </h2>
                <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
                  Six sacred audio compositions bridging ancient spiritual wisdom with modern scientific understanding
                </p>
                <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-md">
                  <p className="text-sm font-medium text-secondary-700">
                    🎧 Use headphones for the best spiritual audio experience
                  </p>
                </div>
              </div>

              {/* Audio Players Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {stotras.map((stotra, index) => (
                  <AudioPlayer
                    key={stotra.title}
                    title={stotra.title}
                    description={stotra.description}
                    audioSrc={stotra.audioSrc}
                    index={index}
                  />
                ))}
              </div>

              {/* About Shanmatha */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                    About Shanmatha Tradition
                  </h3>
                  <div className="space-y-4 text-secondary-600 leading-relaxed">
                    <p>
                      The <strong>Shanmatha</strong> tradition represents the worship of six primary deities in Hindu philosophy, each embodying different aspects of the divine cosmic energy. This ancient system recognizes the interconnectedness of all existence.
                    </p>
                    <p>
                      In my unique approach, I've bridged these timeless spiritual concepts with modern scientific understanding, drawing parallels between divine energies and fundamental forces of physics.
                    </p>
                    <p>
                      Each stotra in this collection is crafted to help practitioners connect with both the spiritual essence and the scientific wonder of our universe, creating a holistic understanding of existence.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="card p-8"
                >
                  <h4 className="text-xl font-bold text-secondary-900 mb-6">
                    Spiritual-Scientific Connections
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                        🕉️
                      </div>
                      <div>
                        <p className="font-semibold text-secondary-900">Ganesha ↔ Proton</p>
                        <p className="text-sm text-secondary-600">Fundamental positive energy</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                        🌸
                      </div>
                      <div>
                        <p className="font-semibold text-secondary-900">Parvathi ↔ String</p>
                        <p className="text-sm text-secondary-600">Cosmic connectivity</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                        🔱
                      </div>
                      <div>
                        <p className="font-semibold text-secondary-900">Shiva ↔ String Theory</p>
                        <p className="text-sm text-secondary-600">Cosmic dance of creation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                        🐚
                      </div>
                      <div>
                        <p className="font-semibold text-secondary-900">Vishnu ↔ Nuclear Forces</p>
                        <p className="text-sm text-secondary-600">Binding and preservation</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                        🦚
                      </div>
                      <div>
                        <p className="font-semibold text-secondary-900">Subrahmanya ↔ Electron</p>
                        <p className="text-sm text-secondary-600">Dynamic energy flow</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-bold">
                        ☀️
                      </div>
                      <div>
                        <p className="font-semibold text-secondary-900">Surya ↔ Hydrogen</p>
                        <p className="text-sm text-secondary-600">Primary cosmic element</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Usage Instructions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h3 className="text-3xl font-bold text-secondary-900 mb-6">
                  How to Experience These Stotras
                </h3>
                <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
                  Guidelines for optimal spiritual and contemplative experience
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-6"
                  >
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      1
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Prepare</h4>
                    <p className="text-secondary-600 text-sm">
                      Find a quiet space and use quality headphones for the best audio experience
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-center p-6"
                  >
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      2
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Listen</h4>
                    <p className="text-secondary-600 text-sm">
                      Play the stotras mindfully, allowing the sacred sounds to resonate within
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center p-6"
                  >
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Contemplate</h4>
                    <p className="text-secondary-600 text-sm">
                      Reflect on the spiritual-scientific connections while listening
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center p-6"
                  >
                    <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                      4
                    </div>
                    <h4 className="font-semibold text-secondary-900 mb-2">Integrate</h4>
                    <p className="text-secondary-600 text-sm">
                      Allow the experience to deepen your understanding of cosmic unity
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Spirituality;
