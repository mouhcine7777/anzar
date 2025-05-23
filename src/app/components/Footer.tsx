import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0a0400] py-12 border-t border-amber-900/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer" aria-label="Go to homepage">
              <img 
                src="/logo.png" 
                alt="Restaurant Logo" 
                className="h-12 transition-opacity duration-300 hover:opacity-80"
              />
            </Link>
          </div>
          
          {/* Center Content - Instagram */}
          <div className="flex flex-col items-center text-center">
            <p className="text-amber-100 mb-2 font-serif">
              Suivez notre page Instagram
            </p>
            <a 
              href="https://www.instagram.com/anzar.morocco/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 transition-colors duration-300 font-medium"
            >
              @anzar.morocco
            </a>
          </div>
          
          {/* Menu Link */}
          <div className="flex items-center">
            <Link 
              href="/menu"
              className="text-amber-100 hover:text-amber-400 transition-colors duration-300 font-serif text-lg"
            >
              Menu
            </Link>
          </div>
          
        </div>
        
        {/* Decorative Line */}
        <div className="mt-8 pt-6 border-t border-amber-900/10">
          <div className="flex items-center justify-center">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/30" />
            <span className="mx-4 text-amber-500/60">✧</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/30" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;