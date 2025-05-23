'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const DesignerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-900 to-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-amber-200 mb-4">
            Les Maîtres du Design
          </h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
            <div className="mx-4 text-amber-400 text-lg">✧</div>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          </div>
          <p className="text-lg text-amber-100/80 font-light max-w-2xl mx-auto">
            Découvrez les visionnaires derrière l'élégance d'ANZAR
          </p>
        </motion.div>

        {/* Two Designers Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Interior Architect */}
          <motion.div 
            className="bg-gradient-to-b from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-600/20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Designer Image */}
            <div className="relative mb-6">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/interieur.jpg" 
                  alt="Architecte d'intérieur Marcus Zhang" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-2 -right-2 w-16 h-16 bg-amber-500/20 rounded-full blur-xl" />
            </div>

            {/* Designer Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-serif text-amber-200 mb-1">
                  Marcus Zhang
                </h3>
                <p className="text-amber-400 font-medium mb-3">
                  Architecte d'Intérieur
                </p>
                <div className="inline-block px-3 py-1 bg-amber-900/30 text-amber-300 text-sm rounded-full border border-amber-600/30">
                  Spécialité: Architecture & Espaces
                </div>
              </div>

              <div className="text-neutral-300 leading-relaxed text-sm space-y-3">
                <p>
                  Diplômé de l'École d'Architecture de Tokyo, Marcus Zhang est reconnu 
                  pour ses créations d'espaces qui marient harmonieusement tradition 
                  orientale et modernité sophistiquée.
                </p>
                
                <p>
                  Pour ANZAR, il a conçu l'architecture intérieure complète : 
                  l'agencement des espaces, l'éclairage ambiant, et la circulation 
                  des clients pour créer une expérience immersive unique.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="text-center p-3 bg-neutral-800/50 rounded-lg border border-amber-700/20">
                  <div className="text-lg font-bold text-amber-300">12+</div>
                  <div className="text-xs text-amber-200/70">Années d'expérience</div>
                </div>
                <div className="text-center p-3 bg-neutral-800/50 rounded-lg border border-amber-700/20">
                  <div className="text-lg font-bold text-amber-300">35+</div>
                  <div className="text-xs text-amber-200/70">Projets réalisés</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-amber-100/80 italic text-sm border-l-2 border-amber-600/50 pl-4 mt-4">
                "L'espace doit respirer l'élégance et inviter à la découverte."
              </blockquote>
            </div>
          </motion.div>

          {/* Uniform Designer */}
          <motion.div 
            className="bg-gradient-to-b from-neutral-800/50 to-neutral-900/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-600/20"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Designer Image */}
            <div className="relative mb-6">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="/designers.jpg" 
                  alt="Designer de mode Amélie Dubois" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-amber-500/20 rounded-full blur-xl" />
            </div>

            {/* Designer Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-serif text-amber-200 mb-1">
                  Amélie Dubois
                </h3>
                <p className="text-amber-400 font-medium mb-3">
                  Designer de Mode & Uniformes
                </p>
                <div className="inline-block px-3 py-1 bg-amber-900/30 text-amber-300 text-sm rounded-full border border-amber-600/30">
                  Spécialité: Mode & Textiles
                </div>
              </div>

              <div className="text-neutral-300 leading-relaxed text-sm space-y-3">
                <p>
                  Ancienne styliste chez Christian Dior, Amélie Dubois s'est 
                  spécialisée dans la création d'uniformes haut de gamme pour 
                  l'industrie de la restauration de luxe.
                </p>
                
                <p>
                  Elle a créé pour ANZAR une collection d'uniformes élégants 
                  qui reflètent l'identité du restaurant : coupes raffinées, 
                  tissus nobles et détails inspirés de l'art oriental.
                </p>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <div className="text-center p-3 bg-neutral-800/50 rounded-lg border border-amber-700/20">
                  <div className="text-lg font-bold text-amber-300">8+</div>
                  <div className="text-xs text-amber-200/70">Années d'expérience</div>
                </div>
                <div className="text-center p-3 bg-neutral-800/50 rounded-lg border border-amber-700/20">
                  <div className="text-lg font-bold text-amber-300">25+</div>
                  <div className="text-xs text-amber-200/70">Collections créées</div>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="text-amber-100/80 italic text-sm border-l-2 border-amber-600/50 pl-4 mt-4">
                "Chaque uniforme raconte l'histoire du lieu qu'il représente."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DesignerSection;