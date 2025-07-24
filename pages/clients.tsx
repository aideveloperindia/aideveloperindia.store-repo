import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import Layout from '../components/Layout';

const Clients = () => {
  const projects = [
    {
      title: "KDSMS",
      description: "Karimnagar Dairy Sales Management System - A revolutionary sales tracking and management system powering dairy operations across 6 zones, 24 areas, and 480 sub areas with real-time analytics and comprehensive reporting.",
      websiteUrl: "https://kdsms.vercel.app/",
      image: "/images/clients/kdsms.jpg", // Placeholder
      status: "Live"
    },
    {
      title: "Maareech",
      description: "smallest.ai-based Full Stack Dev Demo. An innovative demonstration of AI-powered full-stack development capabilities showcasing modern web technologies.",
      websiteUrl: "https://maareech.vercel.app/",
      image: "/images/clients/maareech.jpg", // Placeholder
      status: "Live"
    },
    {
      title: "Mr. PHOTO",
      description: "Portfolio site for top Karimnagar photographer. A stunning visual portfolio showcasing professional photography work with modern design aesthetics.",
      websiteUrl: "https://mr-photo-portfolio.vercel.app/",
      image: "/images/clients/mrphoto.jpg", // Placeholder
      status: "Live"
    }
  ];

  return (
    <Layout
      title="Client Projects - Aditya Nandagiri"
      description="Explore client projects by Aditya Nandagiri including business analytics dashboards, AI-powered applications, and professional portfolio websites."
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
              Client Projects
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Transforming businesses through custom software solutions, analytics dashboards, and innovative web applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-secondary-700 mb-2">
                      {project.title}
                    </h3>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      project.status === 'Live' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {project.status}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex gap-3">
                    {project.websiteUrl ? (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 text-sm"
                      >
                        <FiExternalLink size={16} />
                        Visit Website
                      </a>
                    ) : (
                      <div className="btn-secondary inline-flex items-center gap-2 text-sm opacity-50 cursor-not-allowed">
                        <FiExternalLink size={16} />
                        Link Coming Soon
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Services I Offer
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Comprehensive development and consulting services to help businesses thrive in the digital age
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                📊
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Business Analytics
              </h3>
              <p className="text-secondary-600">
                Custom dashboards and analytics solutions to help businesses make data-driven decisions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                🤖
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                AI Integration
              </h3>
              <p className="text-secondary-600">
                Implement AI-powered solutions to automate processes and enhance user experiences
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                🌐
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Full-Stack Development
              </h3>
              <p className="text-secondary-600">
                Complete web application development from frontend to backend with modern technologies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Security Consulting
              </h3>
              <p className="text-secondary-600">
                Cybersecurity assessment and implementation based on ethical hacking expertise
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                💡
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Innovation Consulting
              </h3>
              <p className="text-secondary-600">
                First principles thinking applied to solve complex business challenges and create innovations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center text-xl font-bold mx-auto mb-4">
                🎨
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Portfolio Development
              </h3>
              <p className="text-secondary-600">
                Professional portfolio websites and digital presence optimization for individuals and businesses
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              What Clients Say
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Client testimonials and feedback coming soon
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="text-primary-600 text-4xl mb-4">"</div>
              <p className="text-secondary-600 italic mb-4">
                Testimonial from KDSMS project coming soon...
              </p>
              <div className="font-semibold text-secondary-900">
                — Client Name, Position
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="text-primary-600 text-4xl mb-4">"</div>
              <p className="text-secondary-600 italic mb-4">
                Testimonial from photography portfolio project coming soon...
              </p>
              <div className="font-semibold text-secondary-900">
                — Mr. Photo, Professional Photographer
              </div>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Let's discuss how I can help bring your vision to life with innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                Start a Conversation
              </a>
              <a
                href="/innovations"
                className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                View My Innovations
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients; 