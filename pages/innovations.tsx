import React from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import InnovationCard from '../components/InnovationCard';

const Innovations = () => {
  const innovations = [
    {
      title: "Anti-Theft Slate",
      description: "A patented security device (Published not yet Granted) designed to prevent infant abduction and provide decentralized security solutions for valuable items.",
      useCases: "Prevent infant abduction in hospitals, decentralized locker security in banks and jewelry shops",
      patentLink: "http://ipindia.nic.in/writereaddata/Portal/IPOJournal/1_4840_1/Part-2.pdf",
      videoUrl: "" // Add YouTube URL when available
    },
    {
      title: "Votes App",
      description: "A digital platform designed to revolutionize election campaigns and political engagement through cost reduction and better governance mechanisms.",
      useCases: "Election campaign cost reduction, better governance, citizen engagement, transparent political processes",
      websiteUrl: "https://www.votesapp.in/",
      videoUrl: "" // Add YouTube URL when available
    },
    {
      title: "Switch-Phone",
      description: "An innovative communication solution designed to connect elderly people to essential services and provide feedback systems for various institutions.",
      useCases: "Connect elderly to essentials, feedback system for hostels, emergency communication, healthcare connectivity",
      websiteUrl: "https://www.switch-phone.in/",
      videoUrl: "" // Add YouTube URL when available
    },
    {
      title: "Kinkar AI",
      description: "An AI-powered platform that fully automates recruiting and bench sales processes, streamlining HR operations with intelligent automation.",
      useCases: "Fully automates recruiting and bench sales, HR process optimization, intelligent candidate matching",
      websiteUrl: "", // Awaiting link
      videoUrl: "" // Add YouTube URL when available
    },
    {
      title: "Berum",
      description: "A revolutionary bargaining-based e-commerce platform that enables better profit margins through dynamic pricing and negotiation features.",
      useCases: "Bargaining-based e-commerce with better profit margins, dynamic pricing, enhanced seller-buyer interactions",
      websiteUrl: "", // Awaiting link
      videoUrl: "" // Add YouTube URL when available
    },
    {
      title: "Japam",
      description: "A unique spiritual application that gamifies mantra chanting, combining traditional spiritual practices with modern gaming elements.",
      useCases: "Spiritual Candy Crush, digitized mantra chanting, meditation gamification, spiritual engagement",
      websiteUrl: "", // Awaiting link
      videoUrl: "" // Add YouTube URL when available
    },
    {
      title: "Credbill",
      description: "A financial calculator tool designed to help users understand and calculate interest on unpaid credit card bills, promoting financial literacy.",
      useCases: "Interest calculator for unpaid credit card bills, financial planning, debt management, financial literacy",
      websiteUrl: "https://www.creditcardfeecalculator.com/",
      videoUrl: "" // Add YouTube URL when available
    }
  ];

  return (
    <Layout
      title="Innovations - Aditya Nandagiri"
      description="Explore Aditya Nandagiri's 7 innovative projects including patented Anti-theft slate (Published not yet Granted), Switch-Phone, Votes App, and more transformative solutions."
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
              My Innovations
            </h1>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Seven transformative innovations designed to solve real-world problems through first principles thinking and cutting-edge technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Innovations Grid */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {innovations.map((innovation, index) => (
              <InnovationCard
                key={innovation.title}
                title={innovation.title}
                description={innovation.description}
                useCases={innovation.useCases}
                websiteUrl={innovation.websiteUrl}
                videoUrl={innovation.videoUrl}
                patentLink={innovation.patentLink}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Innovation Process */}
      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-6 leading-tight">
              My Innovation Process
            </h2>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto px-4 leading-relaxed">
              How I approach problem-solving through First Principles Innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Identify Problem
              </h3>
              <p className="text-secondary-600 text-sm">
                Find real-world problems that affect people's daily lives
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Break It Down
              </h3>
              <p className="text-secondary-600 text-sm">
                Apply first principles thinking to understand fundamental elements
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Build Solution
              </h3>
              <p className="text-secondary-600 text-sm">
                Create innovative solutions using technology and creativity
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Test & Scale
              </h3>
              <p className="text-secondary-600 text-sm">
                Validate solutions with real users and scale for maximum impact
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
              Have an Innovation Idea?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's collaborate and bring your innovative ideas to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Get In Touch
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

export default Innovations; 