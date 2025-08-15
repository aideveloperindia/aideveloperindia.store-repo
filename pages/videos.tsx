import React from 'react';
import { motion } from 'framer-motion';
import { FiPlay, FiExternalLink } from 'react-icons/fi';
import Layout from '../components/Layout';

const Videos = () => {
  const videos = [
    {
      id: 'video1',
      title: 'TSIC Talks 2.0 - Aditya Nandagiri',
      description: 'Keynote talk at Telangana State Innovation Cell discussing innovation, entrepreneurship, and technology solutions.',
      youtubeId: 'LznuZU20L2Y',
      category: 'interviews',
      duration: '15:30',
      views: '25K+',
      isExternal: false
    },
    {
      id: 'video2',
      title: 'Mobile Hacking Demonstration - TV5 News',
      description: 'Live demonstration of mobile security vulnerabilities and ethical hacking techniques on TV5 News.',
      youtubeId: 'Fta6mvhGQkQ',
      category: 'workshops',
      duration: '8:45',
      views: '18K+',
      isExternal: false
    },
    {
      id: 'video3',
      title: 'Hacking in 30 Seconds - ETV Yuva',
      description: 'Quick demonstration of cybersecurity techniques and ethical hacking on ETV Yuva program.',
      youtubeId: 'Q61XL-q9Edo',
      category: 'workshops',
      duration: '5:30',
      views: '32K+',
      isExternal: false
    },
    {
      id: 'video4',
      title: '2019 Intinta Innovator Recognition',
      description: 'First-ever Intinta Innovator award recognition ceremony for breakthrough innovation contributions.',
      youtubeId: 'd7OrZXwP2bc',
      category: 'awards',
      duration: '12:15',
      views: '15K+',
      isExternal: false
    },
    {
      id: 'video5',
      title: 'Innovation Yatra by TGIC 2020',
      description: 'Innovation journey showcase during Telangana Innovation Cell\'s innovation yatra program.',
      youtubeId: '',
      category: 'awards',
      duration: '10:00',
      views: '8K+',
      externalUrl: 'https://www.facebook.com/nad.nandagiri/videos/2922850651112769',
      isExternal: true
    },
    {
      id: 'video6',
      title: 'Guest Speaker at JITS - World Creativity Day',
      description: 'Guest speaking session at JITS for World Creativity and Innovation Day by TGIC.',
      youtubeId: '',
      category: 'interviews',
      duration: '20:00',
      views: '12K+',
      externalUrl: 'https://www.facebook.com/share/r/1CAKhLXTqt/',
      isExternal: true
    },
    {
      id: 'video7',
      title: 'Innovator Recognition ID Card Presentation by Cabinet Minister',
      description: 'Cabinet Minister, IT, Telangana Government presenting the official Innovator Recognition ID Card (TGIC/KR/INN/2025/007) to Aditya Nandagiri.',
      youtubeId: '',
      category: 'awards',
      duration: '3:00',
      views: '5K+',
      externalUrl: 'https://www.facebook.com/share/v/17BjW2dSBK/',
      isExternal: true
    }
  ];

  const categories = [
    { id: 'all', name: 'All Videos', icon: '📹' },
    { id: 'interviews', name: 'Talks & Interviews', icon: '🎙️' },
    { id: 'workshops', name: 'Demonstrations', icon: '👨‍💻' },
    { id: 'awards', name: 'Awards & Recognition', icon: '🏆' }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredVideos = selectedCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedCategory);

  return (
    <Layout
      title="Videos - Aditya Nandagiri"
      description="Watch interviews, workshop highlights, innovation demos, and educational content by Aditya Nandagiri. Learn about ethical hacking, innovation, and technology."
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
              Video Content
            </h1>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Watch interviews, workshop demonstrations, innovation showcases, and educational content
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Videos Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card overflow-hidden"
              >
                {/* Video Thumbnail */}
                <div className="relative bg-secondary-200 aspect-video">
                  {video.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  ) : video.isExternal ? (
                    <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center cursor-pointer hover:bg-blue-300 transition-colors">
                      <a
                        href={video.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center p-8 w-full h-full flex flex-col items-center justify-center"
                      >
                        <FiPlay size={48} className="text-blue-600 mx-auto mb-4" />
                        <p className="text-blue-800 font-medium mb-2">
                          {video.title}
                        </p>
                        <p className="text-sm text-blue-600 mb-2">
                          Watch on Facebook
                        </p>
                        <FiExternalLink size={20} className="text-blue-600" />
                      </a>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-100 to-secondary-200 flex items-center justify-center">
                      <div className="text-center">
                        <FiPlay size={48} className="text-primary-600 mx-auto mb-4" />
                        <p className="text-secondary-700 font-medium mb-2">
                          {video.title}
                        </p>
                        <p className="text-sm text-secondary-500">
                          Video URL to be added
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Video Info Overlay */}
                  {(!video.youtubeId && !video.isExternal) && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg">
                        <div className="flex justify-between items-center text-sm">
                          <span>{video.duration}</span>
                          <span>{video.views} views</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Video Details */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                      {categories.find(cat => cat.id === video.category)?.name || 'Video'}
                    </span>
                    {video.youtubeId && (
                      <span className="text-xs text-red-600 font-semibold">YOUTUBE</span>
                    )}
                    {video.isExternal && (
                      <span className="text-xs text-blue-600 font-semibold">FACEBOOK</span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {video.title}
                  </h3>
                  
                  <p className="text-secondary-600 mb-4 leading-relaxed">
                    {video.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-secondary-500">
                      {video.duration} • {video.views} views
                    </div>
                    
                    {video.youtubeId && (
                      <a
                        href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold text-sm"
                      >
                        <FiExternalLink size={16} />
                        Watch on YouTube
                      </a>
                    )}
                    
                    {video.isExternal && (
                      <a
                        href={video.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                      >
                        <FiExternalLink size={16} />
                        Watch on Facebook
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Playlist */}
      <section className="section-padding bg-secondary-50">
        <div className="container-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-6">
              Featured Content Series
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Deep dive into specific topics with these curated video series
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
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🔒
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Ethical Hacking Series
              </h3>
              <p className="text-secondary-600 mb-4">
                Complete ethical hacking tutorial series covering fundamentals to advanced techniques
              </p>
              <div className="text-sm text-secondary-500">
                Coming Soon • 8 Episodes
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                💡
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Innovation Insights
              </h3>
              <p className="text-secondary-600 mb-4">
                Behind-the-scenes look at my innovation process and startup journey
              </p>
              <div className="text-sm text-secondary-500">
                Coming Soon • 5 Episodes
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 text-center"
            >
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                🚀
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Startup Stories
              </h3>
              <p className="text-secondary-600 mb-4">
                Real stories from building Peppty Technologies Pvt Ltd, NoPareshan.com, and Switch-Phone
              </p>
              <div className="text-sm text-secondary-500">
                Coming Soon • 6 Episodes
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
              Subscribe for More Content
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Stay updated with my latest videos on innovation, ethical hacking, and technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/channel/your-channel-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                <span className="mr-2">▶️</span>
                Subscribe on YouTube
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Request a Video Topic
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Videos; 