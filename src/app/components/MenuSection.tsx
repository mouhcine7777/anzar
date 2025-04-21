import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const MenuSection = () => {
  // Client-side state to prevent hydration mismatch
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const menuItems = [
    {
      title: "COCKTAILS",
      subtitle: "Artisanal Mixology",
      description: "Signature creations with exotic ingredients",
      image: "/cocktails-bg.jpg",
      link: "/menu/cocktails"
    },
    {
      title: "CHAMPAGNE & WINES",
      subtitle: "Curated Selection",
      description: "World's finest vintages and rare finds",
      image: "/champagne-wines-bg.jpg",
      link: "/menu/champagne-wines"
    },
    {
      title: "BEERS & DRINKS",
      subtitle: "Global Collections",
      description: "International craft and premium labels",
      image: "/beers-drinks-bg.jpg",
      link: "/menu/beers-drinks"
    },
    {
      title: "À PARTAGER",
      subtitle: "Shared Moments",
      description: "Communal plates for celebration",
      image: "/sharing-plates-bg.jpg",
      link: "/menu/sharing-plates"
    },
    {
      title: "LES ENTRÉES FROIDES",
      subtitle: "Cold Delicacies",
      description: "Fresh starters and seafood selections",
      image: "/cold-appetizers-bg.jpg",
      link: "/menu/cold-appetizers"
    },
    {
      title: "LES PLATS",
      subtitle: "Main Signatures",
      description: "Oriental culinary masterpieces",
      image: "/main-dishes-bg.jpg",
      link: "/menu/main-dishes"
    },
    {
      title: "DESSERTS",
      subtitle: "Sweet Finales",
      description: "Artisanal confections and delights",
      image: "/desserts-bg.jpg",
      link: "/menu/desserts"
    },
  ];

  return (
    <section id="menu" className="bg-[#0a0400] py-32 relative overflow-hidden">
      {/* Decorative dots background - only rendered on client */}
      <div className="absolute inset-0">
        {isClient && [...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 rounded-full bg-amber-500/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Creative Section Header */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-24 relative"
        >
          <div className="absolute inset-0 flex justify-center items-center opacity-10">
            <span className="text-9xl font-serif text-amber-500">Menu</span>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"
          />
          <h2 className="text-amber-100 text-sm tracking-[0.4em] mb-4 uppercase">Experience</h2>
          <h1 className="text-5xl md:text-6xl font-serif text-amber-400 mb-4">
            Our Selection
          </h1>
          <p className="text-amber-100/70 text-lg font-light max-w-2xl mx-auto">
            A journey through flavors, carefully crafted for your palate
          </p>
        </motion.div>

        {/* Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className="perspective"
            >
              {/* Card Design - Default state is like the hover state */}
              <div className="relative h-96 transform-style-3d rotate-y-6">
                {/* Card Background Layer - REDUCED SHADOW OPACITY */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900/15 to-transparent rounded-lg rotate-0" />
                
                {/* Main Card */}
                <div className="relative h-full bg-[#1a1208] rounded-lg overflow-hidden border border-amber-500/40">
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0">
                    <img 
                      src={item.image} 
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1208] via-[#1a1208]/80 to-transparent" />
                  </div>

                  {/* Card Content */}
                  <div className="relative h-full p-8 flex flex-col">
                    {/* Number Section */}
                    <div className="mb-auto">
                      <div className="absolute top-8 right-8 text-amber-500/20 text-6xl font-serif">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>

                    {/* Title and Description */}
                    <div className="mt-auto">
                      <h4 className="text-amber-400/80 text-sm uppercase tracking-wider mb-2">
                        {item.subtitle}
                      </h4>
                      <h3 className="text-3xl font-serif text-amber-100 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-amber-100/60 mb-6">
                        {item.description}
                      </p>

                      {/* CTA Button */}
                      <a 
                        href={item.link}
                        className="inline-flex items-center text-amber-400 font-medium"
                      >
                        <span className="relative">
                          Discover
                          <span className="absolute -bottom-1 left-0 w-full h-px bg-amber-400" />
                        </span>
                        <svg 
                          className="w-4 h-4 ml-2 translate-x-2" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>

                    {/* Decorative Corner Elements */}
                    <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                      <div className="absolute -top-12 -right-12 w-24 h-24 transform rotate-45 bg-gradient-to-r from-amber-500/10 to-transparent scale-150" />
                    </div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 overflow-hidden">
                      <div className="absolute -bottom-12 -left-12 w-24 h-24 transform rotate-45 bg-gradient-to-r from-transparent to-amber-500/10 scale-150" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 text-center relative"
        >
          <p className="text-amber-200/40 font-light text-sm tracking-[0.3em] uppercase mb-4">
            Oriental Elegance
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500/30" />
            <span className="text-amber-500/60">✧</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500/30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;