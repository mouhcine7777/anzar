'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutAnzar = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  
  return (
    <section ref={sectionRef} className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: "url('/pattern.png')", 
          backgroundSize: "200px",
          backgroundRepeat: "repeat" 
        }} />
      </div>
      
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-700/10 to-transparent rounded-full -translate-y-48 -translate-x-48" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-amber-600/10 to-transparent rounded-full translate-y-32 translate-x-32" />
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-16 bg-amber-700 mr-4" />
            <span className="text-amber-100 uppercase text-sm tracking-[0.3em] font-light">Notre Histoire</span>
            <div className="h-px w-16 bg-amber-700 ml-4" />
          </div>
          <h2 className="text-amber-50 text-4xl md:text-5xl font-serif mb-6">
            L'univers <span className="text-amber-600">ANZAR</span>
          </h2>
          <p className="text-amber-100/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Une expérience gastronomique unique où l'art culinaire rencontre l'élégance, 
            créant des moments inoubliables dans un cadre d'exception.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column - Text Content */}
          <motion.div 
            className="lg:col-span-2 order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-amber-50 text-2xl md:text-3xl font-serif mb-6 leading-tight">
              Un voyage culinaire d'<span className="text-amber-600">exception</span>
            </h3>
            
            {/* Ornamental Element */}
            <div className="flex items-center mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-amber-700/60 to-transparent" />
            </div>
            
            <div className="space-y-4 text-amber-100/70 leading-relaxed mb-8 text-lg font-light">
              <p>
                Niché au cœur de la ville, ANZAR vous invite à découvrir un univers où la gastronomie 
                devient un art de vivre. Notre restaurant allie sophistication contemporaine et 
                chaleur authentique pour créer une atmosphère unique.
              </p>
              <p>
                Chaque détail a été pensé pour sublimer votre expérience : de notre décoration 
                soignée à notre service attentionné, en passant par une carte qui évolue au 
                rythme des saisons et des inspirations de notre chef.
              </p>
              <p>
                ANZAR représente l'excellence gastronomique, où tradition et innovation se rencontrent 
                pour offrir une expérience culinaire mémorable dans un cadre raffiné et chaleureux.
              </p>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-amber-900/20 rounded-lg backdrop-blur-sm border border-amber-700/20">
                <div className="text-3xl font-serif text-amber-600 mb-2">2023</div>
                <p className="text-amber-100/60 text-sm uppercase tracking-wider">Ouverture</p>
              </div>
              <div className="text-center p-4 bg-amber-900/20 rounded-lg backdrop-blur-sm border border-amber-700/20">
              <div className="text-3xl font-serif text-amber-600 mb-2">∞</div>
              <p className="text-amber-100/60 text-sm uppercase tracking-wider">Émotions</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Images Gallery */}
          <motion.div 
            className="lg:col-span-3 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Mobile Layout */}
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {/* Top row - two images side by side */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src="/sharing-plates-bg.jpg" 
                    alt="Intérieur élégant du restaurant ANZAR" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-amber-600" />
                </div>
              </div>
              
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src="/cocktails-bg.jpg" 
                    alt="Ambiance raffinée ANZAR" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-amber-600" />
                </div>
              </div>
              
              {/* Bottom row - single centered image */}
              <div className="col-span-2 relative group">
                <div className="relative overflow-hidden rounded-lg h-40 max-w-sm mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src="/ambiance.jpg" 
                    alt="Excellence culinaire ANZAR" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-amber-600" />
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-6 h-full">
              
              {/* Large Image - Spans full height on desktop */}
              <div className="md:row-span-2 relative group">
                <div className="relative overflow-hidden rounded-lg h-full min-h-96">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src="/sharing-plates-bg.jpg" 
                    alt="Intérieur élégant du restaurant ANZAR" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-amber-600" />
                </div>
              </div>
              
              {/* Top Right Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg h-48 lg:h-56">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src="/ambiance.jpg" 
                    alt="Ambiance raffinée ANZAR" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-amber-600" />
                </div>
              </div>
              
              {/* Bottom Right Image */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-lg h-48 lg:h-56">
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src="/cocktails-bg.jpg"
                    alt="Excellence culinaire ANZAR" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-amber-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Quote Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-serif text-amber-100 mb-8 leading-relaxed italic">
              "ANZAR, c'est l'alliance parfaite entre tradition culinaire et innovation contemporaine, 
              dans un écrin d'élégance et de raffinement."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAnzar;