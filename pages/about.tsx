import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiAward, FiTrendingUp, FiUsers, FiLinkedin } from 'react-icons/fi';
import Layout from '../components/Layout';

const About = () => {
  const achievements = [
    {
      title: "Patent Holder (Published not yet Granted)",
      description: "Anti-theft slate (No. 201841028672) with functional prototype",
      icon: <FiAward className="w-6 h-6" />
    },
    {
      title: "Certified Ethical Hacker v8",
      description: "EC Council certified security professional",
      icon: <FiTrendingUp className="w-6 h-6" />
    },
    {
      title: "5000+ Students Trained",
      description: "Conducted Ethical Hacking & Cybersecurity workshops",
      icon: <FiUsers className="w-6 h-6" />
    }
  ];

  const awards = [
    {
      year: "2023",
      title: "Intinta Innovator", 
      organization: "State Innovation Cell, Govt. of Telangana",
      description: "4th consecutive year recognition for innovation excellence"
    },
    {
      year: "2022",
      title: "Intinta Innovator",
      organization: "State Innovation Cell, Govt. of Telangana", 
      description: "3rd consecutive year recognition for outstanding innovation"
    },
    {
      year: "2020",
      title: "Intinta Innovator",
      organization: "State Innovation Cell, Govt. of Telangana",
      description: "2nd consecutive year recognition for innovative solutions"
    },
    {
      year: "2020",
      title: "TimesNext Super 30",
      organization: "Times of India",
      description: "Selected among top 30 young achievers"
    },
    {
      year: "2020",
      title: "APJ Abdul Kalam Memorial Award",
      organization: "ACTNOW NGO",
      description: "Honored for contributions to technology and society"
    },
    {
      year: "2019",
      title: "Intinta Innovator",
      organization: "State Innovation Cell, Govt. of Telangana",
      description: "First recognition for innovative breakthrough and excellence"
    }
  ];

  return (
    <Layout
      title="About - Aditya Nandagiri"
      description="Learn more about Aditya Nandagiri's journey as an innovator, ethical hacker, and entrepreneur. Winner of multiple awards and recognition."
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
              About Me
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              A passionate innovator dedicated to solving real-world problems through technology and first principles thinking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-secondary-600 leading-relaxed">
                <p>
                  I'm <strong>Aditya Nandagiri</strong>, a full-time founder of <strong>The Switch-Phone Company</strong> and a recognized innovator who has been honored as <strong>"Intinta Innovator"</strong> by the State Innovation Cell, Government of Telangana for four consecutive years (2019, 2020, 2022, 2023).
                </p>
                <p>
                  My journey began with a passion for solving real-world problems through technology. As a co-founder of two earlier startups and known for <strong>First Principles Innovation</strong>, I believe in breaking down complex problems to their fundamental elements and building solutions from the ground up.
                </p>
                <p>
                  With a background in ethical hacking and cybersecurity, I've conducted workshops for over <strong>5000 students</strong>, sharing knowledge about digital security and ethical practices in technology.
                </p>
                <p>
                  My innovations range from healthcare security (Anti-theft slate patent - Published not yet Granted) to elderly care (Switch-Phone) and political engagement (Votes App), each designed to make a meaningful impact on society.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/workshops photos/Aditya.png"
                    alt="Aditya Nandagiri - Innovator and Ethical Hacker"
                    fill
                    style={{ objectFit: 'cover' }}
                    className="rounded-2xl"
                  />
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-1 gap-6">
                {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card p-6 flex items-start gap-4"
                >
                  <div className="text-primary-600 bg-primary-50 p-3 rounded-lg">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-900 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-secondary-600">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-secondary-900 text-center mb-12"
          >
            Professional Experience
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Current Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/workshops photos/switch phone logo.png"
                    alt="Switch Phone Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Current (2022 - Present)</h3>
              <h4 className="font-semibold text-primary-600 mb-2">Founder & CEO</h4>
              <p className="text-secondary-600 mb-3">The Switch-Phone Company</p>
              <p className="text-sm text-secondary-500">
                Leading innovation in elderly communication solutions
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  🛡️
                </div>
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Current (2014 - Present)</h3>
              <h4 className="font-semibold text-primary-600 mb-2">Ethical Hacking Trainer</h4>
              <p className="text-secondary-600 mb-3">Independent</p>
              <p className="text-sm text-secondary-500">
                Trained 5000+ students in cybersecurity & ethical hacking
              </p>
            </motion.div>

            {/* Former Roles (Reverse Chronological) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/workshops photos/mergen_logo.png"
                    alt="Mergen LLC Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Former (2021 - 2022)</h3>
              <h4 className="font-semibold text-primary-600 mb-2">Innovations Evangelist</h4>
              <p className="text-secondary-600 mb-2">Mergen LLC</p>
              <p className="text-xs text-secondary-500 mb-3">(Operations Manager)</p>
              <p className="text-sm text-secondary-500">
                Strategic innovation operations and evangelism
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/workshops photos/nopreshna logo.jpg"
                    alt="NoPareshan Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Former (2020 - 2021)</h3>
              <h4 className="font-semibold text-primary-600 mb-2">CEO</h4>
              <p className="text-secondary-600 mb-3">NoPareshan.com</p>
              <p className="text-sm text-secondary-500">
                Bootstrapped $23,000 in revenue (Sold and Exited)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <Image
                    src="/workshops photos/peppty_logo.png"
                    alt="Peppty Technologies Logo"
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Former (2017 - 2020)</h3>
              <h4 className="font-semibold text-primary-600 mb-2">COO</h4>
              <p className="text-secondary-600 mb-3">Peppty Technologies Pvt Ltd</p>
              <div className="mb-3">
                <a 
                  href="https://play.google.com/store/apps/details?id=com.strangers.chat_developers.strangerschatapp&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 mb-2 hover:bg-secondary-50 rounded-lg p-2 transition-colors"
                >
                  <div className="relative w-6 h-6">
                    <Image
                      src="/workshops photos/chathub logo.png"
                      alt="ChatHub Logo"
                      fill
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                  <span className="text-sm font-medium text-secondary-700 hover:text-primary-600">ChatHub (10M+ Downloads)</span>
                </a>
              </div>
              <p className="text-sm text-secondary-500">
                Helped raise $52,000 for the startup
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
                  🎓
                </div>
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2">Former (2014 - 2016)</h3>
              <h4 className="font-semibold text-primary-600 mb-2">Academic Guide</h4>
              <p className="text-secondary-600 mb-3">Wilmington University (Remote)</p>
              <p className="text-sm text-secondary-500">
                Guided 22 MS students in their academic journey
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-secondary-900 text-center mb-12"
          >
            Awards & Recognition
          </motion.h2>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <motion.div
                key={`${award.year}-${award.title}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 flex flex-col md:flex-row gap-6"
              >
                <div className="md:w-20 text-center">
                  <div className="text-2xl font-bold text-primary-600">
                    {award.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {award.title}
                  </h3>
                  <p className="text-primary-600 font-semibold mb-2">
                    {award.organization}
                  </p>
                  <p className="text-secondary-600">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
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
              Let's Connect and Innovate Together
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Interested in collaboration or have a project in mind? I'd love to hear from you.
            </p>
            <a
              href="https://www.linkedin.com/in/aditya-nanda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              <FiLinkedin size={20} />
              Connect with me on LinkedIn
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About; 