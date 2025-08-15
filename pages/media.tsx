import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { 
  FiCamera, 
  FiUsers, 
  FiAward, 
  FiTrendingUp, 
  FiMic, 
  FiPlay, 
  FiExternalLink,
  FiImage,
  FiVideo
} from 'react-icons/fi';
import Layout from '../components/Layout';

const Media = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideoCategory, setSelectedVideoCategory] = useState('all');

  // Gallery Categories for filtering
  const galleryCategories = [
    { id: 'all', name: 'All', icon: FiCamera },
    { id: 'workshops', name: 'Workshops', icon: FiUsers },
    { id: 'awards', name: 'Awards & Recognition', icon: FiAward },
    { id: 'innovations', name: 'Innovation Prototypes', icon: FiTrendingUp },
    { id: 'guest', name: 'Guest Appearances', icon: FiMic }
  ];

  // Workshop images
  const workshopImages = [
    {
      src: '/images/gallery/workshops/0. Certified Ethical Hacker.jpg',
      title: 'Certified Ethical Hacker',
      description: 'EC Council Certified Ethical Hacker certification achievement'
    },
    {
      src: '/images/gallery/workshops/0.1 Workshop at Paramita School (My 1st).jpg',
      title: 'Workshop at Paramita School',
      description: 'My first workshop - A memorable beginning of the journey'
    },
    {
      src: '/images/gallery/workshops/1. Workshop at KLE University, Karnataka.jpg',
      title: 'Workshop at KLE University, Karnataka',
      description: 'Ethical hacking workshop conducted at KLE University'
    },
    {
      src: '/images/gallery/workshops/2. Workshop at Karpaga Vinayaga University 1 TamilNadu.jpg',
      title: 'Workshop at Karpaga Vinayaga University, Tamil Nadu',
      description: 'Cybersecurity workshop session 1 at Karpaga Vinayaga University'
    },
    {
      src: '/images/gallery/workshops/2.1 Workshop at Karpaga Vinayaga University,TamilNadu.jpg',
      title: 'Workshop at Karpaga Vinayaga University, Tamil Nadu',
      description: 'Cybersecurity workshop session 2 at Karpaga Vinayaga University'
    },
    {
      src: '/images/gallery/workshops/3. Workshop at Mahindra University.jpg',
      title: 'Workshop at Mahindra University',
      description: 'Interactive ethical hacking session at Mahindra University'
    },
    {
      src: '/images/gallery/workshops/4. Workshop at Gitam University, Hyderabad.jpg',
      title: 'Workshop at Gitam University, Hyderabad',
      description: 'Cybersecurity awareness workshop at Gitam University'
    },
    {
      src: '/images/gallery/workshops/5. Workshop at IIIT Basar.jpg',
      title: 'Workshop at IIIT Basar',
      description: 'Technical workshop on ethical hacking at IIIT Basar'
    },
    {
      src: '/images/gallery/workshops/6. Workshop at KITS.jpg',
      title: 'Workshop at KITS',
      description: 'Comprehensive cybersecurity workshop at KITS'
    },
    {
      src: '/images/gallery/workshops/7. Workshop at Vageswari Enginnering College.jpg',
      title: 'Workshop at Vageswari Engineering College',
      description: 'Hands-on ethical hacking session at Vageswari Engineering College'
    },
    {
      src: '/images/gallery/workshops/8. Workshop at St.Mary Engineering College.jpg',
      title: 'Workshop at St.Mary Engineering College',
      description: 'Cybersecurity fundamentals workshop at St.Mary Engineering College'
    },
    {
      src: '/images/gallery/workshops/9. Workshop at Sahaja Engineering College.jpg',
      title: 'Workshop at Sahaja Engineering College',
      description: 'Advanced ethical hacking techniques at Sahaja Engineering College'
    }
  ];

  // Awards & Recognition images
  const awardImages = [
    {
      src: '/workshops photos/Innovations images/2. TGIC/TG 10 years celebrations.jpg',
      title: 'Telangana 10 Years Celebrations',
      description: 'Celebrating 10 years of Telangana state formation',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/TG 10 years celebrations 1.jpg',
      title: 'Telangana 10 Years Celebrations - 1',
      description: 'Government celebration event for Telangana formation day',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/TG 10 Years celebrations 2.jpg',
      title: 'Telangana 10 Years Celebrations - 2',
      description: 'State celebration event with dignitaries',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/2024 August 15,IT Minister.jpg',
      title: 'Meeting with IT Minister - August 2024',
      description: 'Independence Day meeting with Telangana IT Minister',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/2024 August 15 IT Minister.jpg',
      title: 'IT Minister Meeting - Independence Day 2024',
      description: 'Formal meeting with IT Minister on August 15, 2024',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/2023.jpg',
      title: 'INTINTA INNOVATOR 2023',
      description: 'Intinta Innovator award recognition for 2023',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/2022.jpg',
      title: 'INTINTA INNOVATOR 2022',
      description: 'Intinta Innovator award recognition for 2022',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/2020.jpg',
      title: 'INTINTA INNOVATOR 2020',
      description: 'Intinta Innovator award recognition for 2020',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/2020 C.jpg',
      title: 'INTINTA INNOVATOR 2020 Certificate',
      description: 'Certificate ceremony for 2020 Intinta Innovator award',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/2022 C.jpg',
      title: 'INTINTA INNOVATOR 2022 Certificate',
      description: 'Certificate presentation for 2022 Intinta Innovator award',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/2019 INTINTA INNOVATOR - Anti Theft Slate.jpg',
      title: 'INTINTA INNOVATOR 2019 - Anti Theft Slate',
      description: 'First Intinta Innovator award for Anti Theft Slate innovation',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/2023 INTINTA INNOVATOR -Haptic Sensor Glove.jpg',
      title: 'INTINTA INNOVATOR 2023 - Haptic Sensor Glove',
      description: 'Intinta Innovator award for Haptic Sensor Glove project',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/My page in _Innovations 101_ book.jpg',
      title: 'Featured in "Innovations 101" Book',
      description: 'My page featured in the official Innovations 101 publication',
      category: 'awards'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/Police Hackathon.jpg',
      title: 'Police Hackathon Participation',
      description: 'Participating in cybersecurity and innovation hackathon with police department',
      category: 'awards'
    },
    {
      src: '/workshops photos/patent and trademarks/My first Startup Peppty_s Patent.jpg',
      title: 'Peppty Startup Patent (Published not yet Granted)',
      description: 'Patent registration (Published not yet Granted) for my first startup Peppty - intellectual property milestone',
      category: 'awards'
    },
    {
      src: '/workshops photos/patent and trademarks/Anti theft slate patent image.jpg',
      title: 'Anti-theft Slate Patent (Published not yet Granted)',
      description: 'Patent document for Anti-theft slate innovation published in IP India Journal - security solution for healthcare',
      category: 'awards'
    },
    {
      src: '/workshops photos/patent and trademarks/Trademark _A_.jpg',
      title: 'Trademark "A" Registration',
      description: 'Trademark registration for brand identity and intellectual property protection',
      category: 'awards'
    },
    {
      src: '/workshops photos/patent and trademarks/Trademark 1.jpg',
      title: 'Trademark Registration 1',
      description: 'First trademark registration showcasing brand development efforts',
      category: 'awards'
    },
    {
      src: '/workshops photos/patent and trademarks/Trademark 2.jpg',
      title: 'Trademark Registration 2',
      description: 'Second trademark registration expanding intellectual property portfolio',
      category: 'awards'
    },
    {
      src: '/workshops photos/patent and trademarks/Trademark 3.jpg',
      title: 'Trademark Registration 3',
      description: 'Third trademark registration demonstrating comprehensive IP strategy',
      category: 'awards'
    }
  ];

  // Innovation Prototype images
  const innovationImages = [
    {
      src: '/workshops photos/Innovations images/2. TGIC/Switch Phone 1st prototype.jpg',
      title: 'Switch-Phone First Prototype',
      description: 'Initial prototype of the Switch-Phone communication device',
      category: 'innovations'
    },
    {
      src: '/workshops photos/Innovations images/2. TGIC/Switch Phone last prototype with sensor 3d printed.jpg',
      title: 'Switch-Phone Latest Prototype with 3D Printed Sensor',
      description: 'Advanced prototype featuring 3D printed haptic sensor technology',
      category: 'innovations'
    }
  ];

  // Guest Appearances images
  const guestImages = [
    {
      src: '/workshops photos/guest appearance/5. Guest Appearances/Jury Member at MGIT Hackathon.jpg',
      title: 'Jury Member at MGIT Hackathon',
      description: 'Serving as a jury member and judge at MGIT hackathon competition',
      category: 'guest'
    },
    {
      src: '/workshops photos/guest appearance/5. Guest Appearances/Jury Member at MGIT Hackathon 1.jpg',
      title: 'MGIT Hackathon Judging Panel',
      description: 'Participating in the judging panel at MGIT hackathon event',
      category: 'guest'
    },
    {
      src: '/workshops photos/guest appearance/5. Guest Appearances/My first Startup Peppty Launch.jpg',
      title: 'Peppty Startup Launch Event',
      description: 'Launch event of my first startup Peppty - a milestone moment',
      category: 'guest'
    },
    {
      src: '/workshops photos/guest appearance/5. Guest Appearances/Felicitation by Sarpanch Republic Day.jpg',
      title: 'Republic Day Felicitation by Sarpanch',
      description: 'Being felicitated by village Sarpanch on Republic Day for contributions',
      category: 'guest'
    },
    {
      src: '/workshops photos/guest appearance/5. Guest Appearances/Panelist at Symbiosis University on Startups Discussion.jpg',
      title: 'Panelist at Symbiosis University',
      description: 'Guest panelist for startup discussion at Symbiosis University',
      category: 'guest'
    },
    {
      src: '/workshops photos/guest appearance/5. Guest Appearances/Panelist at JITS.jpg',
      title: 'Panelist at JITS',
      description: 'Guest speaker and panelist at JITS educational institution',
      category: 'guest'
    }
  ];

  // Videos data
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
    }
  ];

  const videoCategories = [
    { id: 'all', name: 'All Videos', icon: '📹' },
    { id: 'interviews', name: 'Talks & Interviews', icon: '🎙️' },
    { id: 'workshops', name: 'Demonstrations', icon: '👨‍💻' },
    { id: 'awards', name: 'Awards & Recognition', icon: '🏆' }
  ];

  // Combine all images based on active category
  const getAllImages = () => {
    const allImages = [
      ...workshopImages.map(img => ({ ...img, category: 'workshops' })),
      ...awardImages,
      ...innovationImages,
      ...guestImages
    ];
    
    if (activeCategory === 'all') return allImages;
    return allImages.filter(img => img.category === activeCategory);
  };

  const displayedImages = getAllImages();
  const filteredVideos = selectedVideoCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === selectedVideoCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxSlides = displayedImages.map(image => ({
    src: image.src
  }));

  return (
    <Layout
      title="Media - Photos & Videos | Aditya Nandagiri"
      description="Comprehensive media gallery featuring photos from workshops, awards, government recognition, innovation prototypes, and video content including interviews, demonstrations, and educational material by Aditya Nandagiri."
      keywords="Aditya Nandagiri, gallery, videos, workshops, awards, innovation, ethical hacking, media"
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
              Media Gallery
            </h1>
            <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto px-4 leading-relaxed">
              Visual journey through workshops, innovations, awards, and educational content that showcase 10+ years of impact
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
                <FiUsers className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">5000+</h3>
              <p className="text-secondary-600">Students Trained</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card p-6 text-center"
            >
              <div className="text-primary-600 bg-primary-50 p-3 rounded-lg inline-block mb-4">
                <FiCamera className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">12+</h3>
              <p className="text-secondary-600">Institutions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card p-6 text-center"
            >
              <div className="text-primary-600 bg-primary-50 p-3 rounded-lg inline-block mb-4">
                <FiAward className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">4x</h3>
              <p className="text-secondary-600">Intinta Innovator</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card p-6 text-center"
            >
              <div className="text-primary-600 bg-primary-50 p-3 rounded-lg inline-block mb-4">
                <FiVideo className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">6+</h3>
              <p className="text-secondary-600">Video Features</p>
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
                onClick={() => setActiveTab('photos')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                  activeTab === 'photos'
                    ? 'bg-white text-primary-600 shadow-lg'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                <FiImage size={20} />
                Photos Gallery
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                  activeTab === 'videos'
                    ? 'bg-white text-primary-600 shadow-lg'
                    : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                <FiVideo size={20} />
                Video Content
              </button>
            </div>
          </motion.div>

          {/* Photos Tab Content */}
          {activeTab === 'photos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                  Photo Gallery
                </h2>
                <p className="text-secondary-600 max-w-2xl mx-auto">
                  Explore workshops, awards, government recognition, and innovation prototypes from my journey
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-2">
                {galleryCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`inline-flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold transition-all duration-300 text-xs sm:text-sm touch-manipulation ${
                        activeCategory === category.id
                          ? 'bg-primary-600 text-white shadow-lg'
                          : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200 active:bg-secondary-300'
                      }`}
                    >
                      <IconComponent size={16} className="sm:w-[18px] sm:h-[18px]" />
                      <span className="hidden xs:inline">{category.name}</span>
                      <span className="xs:hidden">{category.name.split(' ')[0]}</span>
                      <span className="text-xs sm:text-sm opacity-75">
                        ({category.id === 'all' ? displayedImages.length : 
                          category.id === 'workshops' ? workshopImages.length :
                          category.id === 'awards' ? awardImages.length :
                          category.id === 'innovations' ? innovationImages.length :
                          guestImages.length})
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Image Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-6">
                {displayedImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group cursor-pointer"
                    onClick={() => openLightbox(index)}
                  >
                    <div className="relative aspect-square overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center p-4">
                          <h3 className="font-semibold mb-2 text-sm">{image.title}</h3>
                          <p className="text-xs text-gray-200">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Videos Tab Content */}
          {activeTab === 'videos' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
                  Video Content
                </h2>
                <p className="text-secondary-600 max-w-2xl mx-auto">
                  Watch interviews, workshop demonstrations, innovation showcases, and educational content
                </p>
              </div>

              {/* Video Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {videoCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedVideoCategory(category.id)}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center gap-2 ${
                      selectedVideoCategory === category.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                    }`}
                  >
                    <span>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>

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
                    </div>

                    {/* Video Details */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                          {videoCategories.find(cat => cat.id === video.category)?.name || 'Video'}
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
            </motion.div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={lightboxSlides}
      />
    </Layout>
  );
};

export default Media;
