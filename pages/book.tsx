import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload, FiShoppingCart, FiBook, FiStar } from 'react-icons/fi';
import Layout from '../components/Layout';

const Book = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Layout
      title="Apavarga - Book by Aditya Nandagiri"
      description="Discover 'Apavarga - You Shall See God' by Aditya Nandagiri. A profound exploration of spirituality and modern science, bridging ancient wisdom with contemporary understanding."
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-100 pb-24">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-start order-2 lg:order-1"
            >
              <div className="text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4"
                >
                  📚 Spiritual Philosophy
                </motion.div>
                
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4 leading-tight">
                  Apavarga
                </h1>
                
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end items-start order-1 lg:order-2"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book Overview */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                About the Book
              </h2>
              <p className="text-xl text-secondary-600">
                A unique synthesis of spiritual wisdom and scientific understanding
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none text-secondary-700 leading-relaxed"
            >
              <p className="text-lg mb-6">
                In "Apavarga - You Shall See God," I explore the profound connections between ancient spiritual traditions 
                and modern scientific discoveries. This book represents years of contemplation and research into the 
                fundamental nature of existence, consciousness, and divine realization.
              </p>
              
              <p className="text-lg mb-6">
                Drawing from my background in technology and innovation, I present a unique perspective that bridges 
                the gap between spiritual seeking and rational inquiry. The book offers practical insights for modern 
                seekers who wish to understand both the mystical and the measurable aspects of reality.
              </p>
              
              <p className="text-lg mb-6">
                Through carefully crafted chapters, readers will discover how concepts from quantum physics, consciousness 
                studies, and neuroscience align with timeless spiritual principles found in Eastern philosophy and meditation practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Themes */}
      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Key Themes Explored
            </h2>
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
                <h3 className="text-xl font-bold text-secondary-900 mb-3">
                  {theme.title}
                </h3>
                <p className="text-secondary-600">
                  {theme.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Author's Note */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                  ✍️
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                    Author's Note
                  </h3>
                  <div className="text-secondary-700 leading-relaxed space-y-4">
                    <p className="italic text-lg">
                      "This book emerged from my journey as both a technologist and a spiritual seeker. 
                      Having spent years in the world of innovation and scientific thinking, I found 
                      myself drawn to the profound questions that lie at the intersection of matter and consciousness."
                    </p>
                    <p>
                      Through my experiences in creating technology solutions and my deep contemplation 
                      of spiritual truths, I've discovered that the apparent divide between science and 
                      spirituality is largely illusory. Both paths lead to the same fundamental understanding 
                      of the interconnected, unified nature of existence.
                    </p>
                    <p>
                      My hope is that readers will find in these pages a bridge between the rational and 
                      the mystical, between the provable and the experiential, ultimately leading to a 
                      more complete understanding of reality and our place within it.
                    </p>
                  </div>
                  <div className="mt-6 text-right">
                    <div className="font-semibold text-secondary-900">— Aditya Nandagiri</div>
                    <div className="text-sm text-secondary-500">Author & Innovator</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Purchase Options */}
      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Get Your Copy
            </h2>
            <p className="text-xl text-secondary-600">
              Available in multiple formats for your convenience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <FiBook size={48} className="text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Physical Book
              </h3>
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
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Digital Edition
              </h3>
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
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Audiobook
              </h3>
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
        </div>
      </section>


    </Layout>
  );
};

export default Book; 