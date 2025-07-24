import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Layout from '../components/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create WhatsApp message with form data
    const whatsappMessage = `*New Contact Form Message*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from your portfolio website contact form`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/919505009699?text=${encodedMessage}`;
    
    // Small delay to show loading state, then redirect
    setTimeout(() => {
      setIsSubmitting(false);
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
      // Clear form
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Show success message
      alert('Redirecting to WhatsApp! Your message has been prepared and will be sent directly to me.');
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <FiMail size={24} />,
      title: 'Email',
      detail: 'aideveloperindia@gmail.com',
      action: 'mailto:aideveloperindia@gmail.com',
      description: 'Send me an email for business inquiries or collaborations'
    },
    {
      icon: <FaWhatsapp size={24} />,
      title: 'WhatsApp',
              detail: '+91 95050 09699',
      action: 'https://wa.me/919505009699',
      description: 'Quick response for urgent matters and project discussions'
    },
    {
      icon: <FiLinkedin size={24} />,
      title: 'LinkedIn',
      detail: '@aditya-nanda',
      action: 'https://www.linkedin.com/in/aditya-nanda/',
      description: 'Connect professionally and view my complete career profile'
    },
    {
      icon: <FiMapPin size={24} />,
      title: 'Location',
      detail: 'Hyderabad, Telangana, India',
      action: '',
      description: 'Available for local meetings and workshops in Telangana region'
    }
  ];

  const reasons = [
    {
      title: 'Innovation Consulting',
      description: 'Need help with first principles innovation or startup strategy?',
      icon: '💡'
    },
    {
      title: 'Workshop Request',
      description: 'Want to organize an ethical hacking or cybersecurity workshop?',
      icon: '🎓'
    },
    {
      title: 'Speaking Engagement',
      description: 'Invite me to speak at your conference or event?',
      icon: '🎤'
    },
    {
      title: 'Project Collaboration',
      description: 'Looking for a technical partner for your next big idea?',
      icon: '🤝'
    },
    {
      title: 'Media Interview',
      description: 'Journalist or content creator wanting to feature my work?',
      icon: '📺'
    },
    {
      title: 'General Inquiry',
      description: 'Have questions about my innovations or career journey?',
      icon: '💬'
    }
  ];

  return (
    <Layout
      title="Contact - Aditya Nandagiri"
      description="Get in touch with Aditya Nandagiri for innovation consulting, workshop requests, speaking engagements, and project collaborations."
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
              Let's Connect
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Ready to innovate together? I'm always excited to discuss new ideas, 
              collaborate on projects, or share insights about technology and entrepreneurship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Contact Me */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Reasons to Reach Out
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Here are some common reasons people get in touch with me
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="text-3xl mb-4">{reason.icon}</div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-secondary-600 text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Methods */}
      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">
                  Send me a message
                </h3>
                
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
                  <div className="flex items-center">
                    <FaWhatsapp className="text-green-600 mr-2" size={20} />
                    <p className="text-sm text-green-800">
                      <strong>Quick & Direct:</strong> This form will redirect you to WhatsApp with your message pre-filled, ensuring I get your inquiry instantly!
                    </p>
                  </div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-secondary-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                        placeholder="Ram Nath"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                        placeholder="ram.nath@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
                    >
                      <option value="">Select a topic</option>
                      <option value="innovation">Innovation Consulting</option>
                      <option value="workshop">Workshop Request</option>
                      <option value="speaking">Speaking Engagement</option>
                      <option value="collaboration">Project Collaboration</option>
                      <option value="media">Media Interview</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-secondary-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors resize-y"
                      placeholder="Tell me more about your project, event, or inquiry..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full btn-primary inline-flex items-center justify-center gap-2 ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Preparing WhatsApp...
                      </>
                    ) : (
                      <>
                        <FaWhatsapp size={20} />
                        Send via WhatsApp
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                  Other ways to reach me
                </h3>
                <p className="text-secondary-600 mb-8">
                  Choose the communication method that works best for you
                </p>
              </div>

              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary-600 bg-primary-50 p-3 rounded-lg">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-secondary-900 mb-1">
                        {method.title}
                      </h4>
                      {method.action ? (
                        <a
                          href={method.action}
                          target={method.action.startsWith('http') ? '_blank' : '_self'}
                          rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
                          className="text-primary-600 font-semibold hover:text-primary-700 block mb-2"
                        >
                          {method.detail}
                        </a>
                      ) : (
                        <p className="text-secondary-700 font-medium mb-2">
                          {method.detail}
                        </p>
                      )}
                      <p className="text-secondary-600 text-sm">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Response Promise */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card p-8 text-center max-w-3xl mx-auto"
          >
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Quick Response Promise
            </h3>
            <p className="text-secondary-600 leading-relaxed">
              I understand the value of timely communication in business and innovation. 
              I typically respond to emails and messages within 24-48 hours during business days. 
              For urgent matters, WhatsApp is the fastest way to reach me.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social Links */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Follow My Journey
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Stay connected and follow my latest innovations, insights, and updates
            </p>
            
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/aditya-nanda/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
              >
                <FiLinkedin size={24} />
              </a>
              
              <a
                href="https://github.com/adityanandagiri"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
              >
                <FiGithub size={24} />
              </a>
              
              <a
                href="https://wa.me/919505009699"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center transition-all duration-300 hover:transform hover:scale-110"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact; 