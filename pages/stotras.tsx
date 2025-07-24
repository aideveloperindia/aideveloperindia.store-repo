import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import AudioPlayer from '../components/AudioPlayer';

const Stotras = () => {
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
      title="Shanmatha Stotras - Aditya Nandagiri"
      description="Experience spiritual audio content by Aditya Nandagiri - Six sacred Shanmatha Stotras combining ancient wisdom with modern scientific understanding."
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-100">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
              Shanmatha Stotras
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto mb-8">
              Six sacred audio compositions bridging ancient spiritual wisdom with modern scientific understanding
            </p>
            <div className="inline-block bg-white px-6 py-3 rounded-lg shadow-md">
              <p className="text-sm font-medium text-secondary-700">
                🎧 Use headphones for the best spiritual audio experience
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Audio Players Grid */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
        </div>
      </section>

      {/* About Shanmatha */}
      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                About Shanmatha Tradition
              </h2>
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
              <h3 className="text-xl font-bold text-secondary-900 mb-6">
                Spiritual-Scientific Connections
              </h3>
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
        </div>
      </section>

      {/* Usage Instructions */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              How to Experience These Stotras
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Guidelines for optimal spiritual and contemplative experience
            </p>
          </motion.div>

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
              <h3 className="font-semibold text-secondary-900 mb-2">Prepare</h3>
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
              <h3 className="font-semibold text-secondary-900 mb-2">Listen</h3>
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
              <h3 className="font-semibold text-secondary-900 mb-2">Contemplate</h3>
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
              <h3 className="font-semibold text-secondary-900 mb-2">Integrate</h3>
              <p className="text-secondary-600 text-sm">
                Allow the experience to deepen your understanding of cosmic unity
              </p>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Explore More Spiritual Content
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Discover the intersection of spirituality and science in my book "Apavarga"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Read "Apavarga"
              </a>
              <a
                href="/about"
                className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Learn More About Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Stotras; 