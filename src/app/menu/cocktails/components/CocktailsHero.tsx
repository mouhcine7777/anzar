'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

const DessertHeroSection = () => {
  useEffect(() => {
    // Smooth scroll function
    const smoothScroll = (target: string) => {
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    // Add click event listener to dessert menu links
    const dessertLinks = document.querySelectorAll('a[href="#dessert-menu"]');
    dessertLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        smoothScroll('#dessert-menu');
      });
    });

    // Cleanup event listeners
    return () => {
      dessertLinks.forEach(link => {
        link.removeEventListener('click', (e) => {
          e.preventDefault();
          smoothScroll('#dessert-menu');
        });
      });
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/desserts-bg.jpg" 
          alt="ANZAR Desserts Background" 
          className="w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
        {/* Dessert Title with simple fade in */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-serif text-amber-50">
            Desserts
          </h1>
        </motion.div>

        {/* Simple ornamental divider */}
        <motion.div 
          className="flex items-center justify-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
          <div className="mx-4 text-amber-300 text-lg">✧</div>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300/60 to-transparent" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-[#ad761d] font-serif italic text-xl tracking-widest mb-8"
        >
          - Sweet Finales & Culinary Poetry -
        </motion.p>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl mb-12 max-w-2xl font-light text-amber-50/90"
        >
          Indulge in our exquisite dessert creations,
          <br className="hidden md:block" /> where Eastern spices meet sweet artistry
        </motion.p>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a 
            href="#dessert-menu" 
            className="bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-50 py-4 px-12 transition-all duration-300 tracking-widest uppercase text-sm font-medium shadow-lg border border-amber-600/30"
          >
            Explore Desserts
          </a>
        </motion.div>

        {/* Simple scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center">
            <p className="text-amber-100/70 text-xs mb-3 tracking-widest font-light">SCROLL TO INDULGE</p>
            <div className="h-8 w-px bg-gradient-to-b from-amber-100/70 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DessertHeroSection;