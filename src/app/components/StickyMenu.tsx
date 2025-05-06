import { useState, useEffect } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const StickyHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Menu links - using the same categories from MenuSection
  const menuLinks = [
    { name: "COCKTAILS", href: "/menu/cocktails" },
    { name: "CHAMPAGNE & WINES", href: "/menu/champagne" },
    { name: "BEERS & DRINKS", href: "/menu/beers" },
    { name: "À PARTAGER", href: "/menu/sharing-plates" },
    { name: "LES ENTRÉES FROIDES", href: "/menu/cold-appetizers" },
    { name: "LES PLATS", href: "/menu/main-dishes" },
    { name: "DESSERTS", href: "/menu/desserts" },
  ];

  // Function to handle menu item click
  const handleMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string): void => {
    event.preventDefault();
    setMenuOpen(false);
    window.location.href = href;
  };

  // No need for handleLogoClick with Next.js Link component

  return (
    <>
      {/* Sticky Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-[#0a0400]/95 backdrop-blur-sm py-2 shadow-lg shadow-amber-900/10' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between">
            {/* Logo with Home Link */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex items-center"
            >
              <Link 
                href="/"
                className="cursor-pointer" 
                aria-label="Go to homepage"
              >
                <img 
                  src="/logo.png" 
                  alt="Restaurant Logo" 
                  className={`transition-all duration-500 ${
                    isScrolled ? 'h-12' : 'h-16'
                  }`}
                />
              </Link>
            </motion.div>
            
            {/* Hamburger Menu Button - Both Mobile and Desktop */}
            <div>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative w-10 h-10 text-amber-400 focus:outline-none"
                aria-label="Toggle Menu"
              >
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span 
                    className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                      menuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                    }`}
                  ></span>
                  <span 
                    className={`block w-6 h-0.5 bg-current transform transition-all duration-300 mt-1 ${
                      menuOpen ? 'opacity-0' : 'opacity-100'
                    }`}
                  ></span>
                  <span 
                    className={`block w-6 h-0.5 bg-current transform transition-all duration-300 mt-1 ${
                      menuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Menu Overlay for both Mobile and Desktop */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0400]/95 backdrop-blur-md flex flex-col"
          >
            <div className="flex-1 flex flex-col items-center justify-center">
              <motion.nav 
                className="flex flex-col items-center space-y-8"
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {menuLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className="text-amber-100 hover:text-amber-400 transition-colors duration-300 text-xl font-serif cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-amber-500/10"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            
            {/* Bottom Decorative Element */}
            <div className="pb-12 text-center relative w-full pointer-events-none">
              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-amber-500/30" />
                <span className="text-amber-500/60">✧</span>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-amber-500/30" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default StickyHeader;