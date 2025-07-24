import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiFileText, FiPlay } from 'react-icons/fi';

interface InnovationCardProps {
  title: string;
  description: string;
  useCases: string;
  websiteUrl?: string;
  videoUrl?: string;
  patentLink?: string;
  index: number;
}

const InnovationCard: React.FC<InnovationCardProps> = ({
  title,
  description,
  useCases,
  websiteUrl,
  videoUrl,
  patentLink,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="card p-4 sm:p-6 h-full flex flex-col"
    >
      <div className="flex-grow">
        <h3 className="text-xl sm:text-2xl font-bold text-secondary-900 mb-3 sm:mb-4 leading-tight">
          {title}
        </h3>
        
        <p className="text-secondary-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
          {description}
        </p>
        
        <div className="mb-4 sm:mb-6">
          <h4 className="font-semibold text-secondary-800 mb-2 text-sm sm:text-base">
            Use Cases:
          </h4>
          <p className="text-secondary-600 text-xs sm:text-sm leading-relaxed">
            {useCases}
          </p>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-2 bg-primary-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold hover:bg-primary-700 active:bg-primary-800 transition-colors text-xs sm:text-sm touch-manipulation"
          >
            <FiExternalLink size={16} />
            Visit Website
          </a>
        )}
        
        {patentLink && (
          <a
            href={patentLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-2 bg-secondary-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold hover:bg-secondary-700 active:bg-secondary-800 transition-colors text-xs sm:text-sm touch-manipulation"
          >
            <FiFileText size={16} />
            View Patent (Published not yet Granted)
          </a>
        )}
        
        {videoUrl && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 sm:gap-2 bg-red-600 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold hover:bg-red-700 active:bg-red-800 transition-colors text-xs sm:text-sm touch-manipulation"
          >
            <FiPlay size={16} />
            Watch Video
          </a>
        )}
      </div>

      {/* Status Indicators */}
      <div className="flex flex-wrap gap-1 sm:gap-2 mt-3 sm:mt-4">
        {patentLink && (
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">
            Patented (Published not yet Granted)
          </span>
        )}
        {websiteUrl && (
          <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium">
            Live
          </span>
        )}
        {videoUrl && (
          <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs font-medium">
            Video Available
          </span>
        )}
      </div>
    </motion.div>
  );
};

export default InnovationCard; 