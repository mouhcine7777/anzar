'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const MotDuChef = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  
  return (
    <section ref={sectionRef} className="py-24 bg-stone-950 relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: "url('/pattern.png')", 
          backgroundSize: "200px",
          backgroundRepeat: "repeat" 
        }} />
      </div>
      
      {/* Content container */}
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Column - Chef's Image */}
          <motion.div 
            className="md:w-2/5 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 border-2 border-amber-700/30 transform translate-x-4 translate-y-4 -z-10" />
              <img 
                src="/chef.jpg" 
                alt="Chef Hiroshi Anzar" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-amber-700 py-2 px-6 shadow-lg">
                <p className="text-amber-50 font-serif italic">Chef Exécutif Issam Benrahhou</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Chef's Message */}
          <motion.div 
            className="md:w-3/5 md:pl-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            {/* Section Title */}
            <div className="flex items-center mb-8">
              <div className="h-px w-12 bg-amber-700 mr-4" />
              <h2 className="text-amber-50 uppercase text-sm tracking-[0.3em] font-light">Mot du Chef</h2>
            </div>
            
            {/* Heading */}
            <h3 className="text-amber-50 text-3xl md:text-4xl font-serif mb-6 leading-tight">
              "L'art de l'<span className="text-amber-600">harmonie</span> et de la <span className="text-amber-600">créativité</span> dans chaque assiette"
            </h3>
            
            {/* Ornamental Element */}
            <div className="flex items-center mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-amber-700/30 to-transparent" />
            </div>
            
            {/* Chef's Message */}
            <div className="text-amber-100/80 space-y-4 mb-8 text-lg font-light leading-relaxed">
              <p>
                Chez ANZAR, nous célébrons la diversité gastronomique mondiale en fusionnant des traditions culinaires du monde entier avec des techniques contemporaines pour créer des plats qui éveillent tous les sens.
              </p>
              <p>
                Mon parcours à travers les cuisines du monde m'a enseigné que l'essence de la gastronomie réside dans l'équilibre—cette danse subtile entre les saveurs, les textures et les arômes qui transcende les frontières culturelles.
              </p>
              <p>
                Chaque plat raconte une histoire, chaque ingrédient a son rôle. Nous sélectionnons uniquement les meilleurs produits de saison et des spécialités soigneusement choisies pour garantir que chaque expérience culinaire chez ANZAR devienne un souvenir à chérir.
              </p>
            </div>
            
            {/* Signature */}
            <div className="mt-8">
              <img 
                src="/signature.png" 
                alt="Signature du Chef Hiroshi" 
                className="h-16 w-auto"
              />
              <p className="text-amber-600 font-serif italic mt-2">Avec passion et dévouement</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MotDuChef;