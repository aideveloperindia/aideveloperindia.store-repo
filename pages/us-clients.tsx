import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FiGlobe, 
  FiSmartphone, 
  FiZap, 
  FiShield, 
  FiTrendingUp, 
  FiClock,
  FiCheck,
  FiStar,
  FiArrowRight,
  FiMessageCircle
} from 'react-icons/fi';
import Layout from '../components/Layout';

const USClientsPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    urgency: 'required',
    service: 'dynamic'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleScrollToContact = () => {
    // Scroll to the bottom of the page where contact form section is
    const contactSection = document.querySelector('#contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback: scroll to bottom if section not found
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
  };

  const handleWhatsAppClick = () => {
    if (!showContactForm) {
      setShowContactForm(true);
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }

    const phoneNumber = '+919505009699';
    const serviceNames = {
      static: 'Static Website',
      dynamic: 'Dynamic Website/PWA',
      social: 'AI Social Media Content'
    };
    
    const urgencyText = {
      urgent: 'URGENT (Need within 1-2 weeks)',
      asap: 'ASAP (Need within 1 month)',
      required: 'Required (Need within 2-3 months)',
      planning: 'Planning (No rush, exploring options)'
    };

    const message = encodeURIComponent(
      `Hi Aditya! I'm ${formData.name}, interested in your AI-powered services for my US business.\n\n` +
      `📧 Email: ${formData.email}\n` +
      `🌐 Current Website: ${formData.website || 'None/New website needed'}\n` +
      `🚀 Service Interested: ${serviceNames[formData.service as keyof typeof serviceNames]}\n` +
      `⏰ Timeline: ${urgencyText[formData.urgency as keyof typeof urgencyText]}\n\n` +
      `Can we discuss my requirements and next steps?`
    );
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Layout
      title="AI-Powered Websites & Social Media for US Businesses | Aditya Nandagiri"
      description="Get stunning, high-performance websites and AI-generated social media content for your US business. Professional web development with AI automation."
      keywords="AI websites, US business websites, social media content, web development, AI automation, PWA, static websites, US clients"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container-width section-padding text-center relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              AI-Powered Websites & Social Media
              <span className="block text-yellow-400">for US Businesses</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg xs:text-xl sm:text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed px-4 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Get a stunning, high-performance website + ongoing AI-generated content to grow your business.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <button 
                onClick={handleScrollToContact}
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
              >
                <FiMessageCircle size={24} />
                Book a Free Consultation
              </button>
              
              <Link href="#services" className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2">
                <FiArrowRight size={20} />
                View Services
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section id="services" className="section-padding bg-white">
        <div className="container-width">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mb-6">
              Professional AI-Powered Services
            </h2>
            <p className="text-blue-700 text-lg max-w-3xl mx-auto">
              Combining cutting-edge AI technology with professional web development to deliver exceptional results for US businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiGlobe size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Static Websites</h3>
              <p className="text-blue-700 mb-6 leading-relaxed">
                Fast-loading, SEO-friendly websites perfect for small businesses and portfolios. Features responsive design, secure hosting, basic SEO setup, and AI-written copy.
              </p>
              <div className="text-yellow-600 font-bold text-2xl mb-2">Starting $399</div>
              <div className="text-blue-600 text-sm">One-time payment</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-2xl border-2 border-yellow-400"
            >
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiSmartphone size={32} className="text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Dynamic Websites / PWAs</h3>
              <div className="bg-yellow-400 text-blue-900 px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">
                MOST POPULAR
              </div>
              <p className="text-blue-700 mb-6 leading-relaxed">
                Feature-rich apps with database integration, login systems, payment gateways, custom dashboards, real-time updates, and AI chatbots.
              </p>
              <div className="text-yellow-600 font-bold text-2xl mb-2">Starting $999</div>
              <div className="text-blue-600 text-sm">One-time payment</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-8 text-center hover:shadow-2xl"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FiTrendingUp size={32} className="text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">AI Social Media Content</h3>
              <p className="text-blue-700 mb-6 leading-relaxed">
                Monthly packages with Canva-designed posts, AI-written captions, trending video content with Veo 3 Pro, and scheduled posting.
              </p>
              <div className="text-yellow-600 font-bold text-2xl mb-2">From $299</div>
              <div className="text-blue-600 text-sm">Per month</div>
            </motion.div>
          </div>

          <motion.div 
            className="text-center mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-600 font-semibold">Custom packages available - Contact us for enterprise solutions</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-blue-50">
        <div className="container-width">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose Our AI-Powered Solutions?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FiSmartphone, title: "Mobile-Optimized", desc: "Perfect performance on all devices with responsive design" },
              { icon: FiZap, title: "Lightning Fast", desc: "Optimized for speed with AI-powered performance enhancements" },
              { icon: FiTrendingUp, title: "SEO-Ready", desc: "Built-in SEO optimization for better search rankings" },
              { icon: FiShield, title: "Secure & Scalable", desc: "Enterprise-grade security with cloud infrastructure" },
              { icon: FiClock, title: "AI Content Automation", desc: "Automated content generation and social media management" },
              { icon: FiGlobe, title: "US Time-Zone Support", desc: "Dedicated support during US business hours" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{feature.title}</h3>
                  <p className="text-blue-700">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">
                Why Choose Me for Your US Business?
              </h2>
              
              <div className="space-y-6">
                {[
                  "10+ years experience building websites & apps",
                  "Canva Pro + AI tools for professional visuals",
                  "Veo 3 Pro for cinematic video content",
                  "Fast turnaround and US client focus",
                  "Proven track record with innovation awards",
                  "Full-stack development expertise"
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                      <FiCheck size={14} className="text-blue-900" />
                    </div>
                    <p className="text-blue-700 font-medium">{point}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-blue-900 text-white p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-4">Recognition & Awards</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <FiStar className="text-yellow-400" size={20} />
                  <span>4× "Intinta Innovator" Award Winner</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiStar className="text-yellow-400" size={20} />
                  <span>State Innovation Cell Recognition</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiStar className="text-yellow-400" size={20} />
                  <span>5000+ Students Trained</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiStar className="text-yellow-400" size={20} />
                  <span>Certified Ethical Hacker</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-blue-50">
        <div className="container-width">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What Our US Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechStart Solutions, Austin TX",
                text: "Aditya delivered an amazing website for our startup. The AI-powered features have significantly improved our user engagement and conversion rates."
              },
              {
                name: "Michael Chen",
                company: "GreenLeaf Consulting, Seattle WA",
                text: "The social media automation has been a game-changer for our business. Professional content generated consistently, saving us hours every week."
              },
              {
                name: "Amanda Rodriguez",
                company: "Bella's Boutique, Miami FL",
                text: "Working with Aditya was seamless despite the time difference. Our e-commerce PWA loads incredibly fast and our sales have increased by 40%."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                <p className="text-blue-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-blue-900">{testimonial.name}</p>
                  <p className="text-blue-600 text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact-section" className="section-padding bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container-width text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Your Website & Marketing,
              <span className="block text-yellow-400">Supercharged with AI</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Ready to transform your business with AI-powered web solutions? Let's discuss how we can help you grow your US business with cutting-edge technology.
            </p>

            {!showContactForm ? (
              <div>
                <button 
                  onClick={handleWhatsAppClick}
                  className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 px-12 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-3"
                >
                  <FiMessageCircle size={24} />
                  Let's Get Started
                </button>
                
                <p className="text-blue-200 mt-4 text-sm">
                  Click to provide your details and start a WhatsApp conversation • Free consultation • No commitment required
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto bg-white rounded-lg p-8 text-blue-900"
              >
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Tell Us About Your Project
                </h3>
                <p className="text-blue-700 mb-6 text-center">
                  Please provide your details so we can send you a personalized WhatsApp message
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-blue-900 mb-2">
                    Current Website (if any)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    placeholder="https://yourwebsite.com (optional)"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="static">Static Website ($399+)</option>
                      <option value="dynamic">Dynamic Website/PWA ($999+)</option>
                      <option value="social">AI Social Media Content ($299/mo)</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-blue-900 mb-2">
                      Project Timeline
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="urgent">🔥 URGENT (1-2 weeks)</option>
                      <option value="asap">⚡ ASAP (1 month)</option>
                      <option value="required">📅 Required (2-3 months)</option>
                      <option value="planning">💭 Planning (No rush)</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={handleWhatsAppClick}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center gap-3"
                  >
                    <FiMessageCircle size={20} />
                    Send WhatsApp Message
                  </button>
                  
                  <button 
                    onClick={() => setShowContactForm(false)}
                    className="px-6 py-4 border-2 border-blue-300 text-blue-700 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                </div>
                
                <p className="text-blue-600 mt-4 text-sm text-center">
                  This will open WhatsApp with your details pre-filled for faster communication
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default USClientsPage;

