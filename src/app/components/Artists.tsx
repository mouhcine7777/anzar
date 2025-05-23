'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const LesArtistes = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeArtist, setActiveArtist] = useState(0);

  // Artist data - replace with your actual artists
  const artists = [
    {
      id: 1,
      name: "Dancers",
      genre: "Groove & Performance",
      description: "Fusionnant mouvement et musique, Dancers transforme chaque note en une chorégraphie vibrante. Un spectacle où le rythme prend vie.",
      image: "/artist1.jpg",
      performances: "Vendredi & Samedi",
      specialty: "Groove live, Scène dynamique"
    },
    {
      id: 2,
      name: "Gnawa",
      genre: "Tradition Spirituelle",
      description: "Puisant dans les racines ancestrales du Maroc, Gnawa fait vibrer les âmes au rythme du guembri et des qraqebs. Une transe musicale authentique.",
      image: "/artist2.jpg",
      performances: "Mercredi & Jeudi",
      specialty: "Rituels Gnawa, Fusion spirituelle"
    },
    {
      id: 3,
      name: "Lamiaa Zaidi",
      genre: "Chanson Poétique",
      description: "Avec une voix douce et des textes profonds, Lamiaa Zaidi peint des paysages sonores pleins d’émotion. Une artiste qui chante l’âme.",
      image: "/artist3.jpg",
      performances: "Dimanche & Lundi",
      specialty: "Ballades acoustiques, Poésie chantée"
    }    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveArtist((prev) => (prev + 1) % artists.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [artists.length]);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-stone-950 to-stone-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: "url('/pattern.png')", 
          backgroundSize: "200px",
          backgroundRepeat: "repeat" 
        }} />
      </div>
      
      {/* Floating musical notes */}
      <div className="absolute top-20 left-10 text-amber-700/20 text-4xl">♪</div>
      <div className="absolute top-40 right-20 text-amber-600/20 text-3xl">♫</div>
      <div className="absolute bottom-32 left-1/4 text-amber-700/20 text-2xl">♪</div>
      <div className="absolute bottom-20 right-1/3 text-amber-600/20 text-3xl">♫</div>

      {/* Decorative gradient circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-amber-700/10 to-transparent rounded-full -translate-y-40 translate-x-40" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-600/10 to-transparent rounded-full translate-y-32 -translate-x-32" />
      
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
            <span className="text-amber-100 uppercase text-sm tracking-[0.3em] font-light">Entertainment</span>
            <div className="h-px w-16 bg-amber-700 ml-4" />
          </div>
          <h2 className="text-amber-50 text-4xl md:text-5xl font-serif mb-6">
            Les <span className="text-amber-600">Artistes</span>
          </h2>
          <p className="text-amber-100/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Des voix exceptionnelles et des mélodies envoûtantes subliment vos soirées chez ANZAR, 
            créant une atmosphère unique où gastronomie et art musical se rencontrent.
          </p>
        </motion.div>

        {/* Artists Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
              onClick={() => setActiveArtist(index)}
            >
              {/* Creative Artist Card */}
              <div className="relative h-96 overflow-hidden">
                
                {/* Background Image with Creative Masking */}
                <div className="absolute inset-0">
                  <img 
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Creative Overlay Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-stone-900/40 to-stone-950/90" />
                  
                  {/* Geometric Frame Elements */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-600/60 transition-all duration-500 group-hover:w-20 group-hover:h-20" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-600/60 transition-all duration-500 group-hover:w-20 group-hover:h-20" />
                  
                  {/* Musical Note Decoration */}
                  <div className="absolute top-6 right-6 text-amber-600/30 text-2xl font-serif transform rotate-12 transition-all duration-500 group-hover:rotate-0 group-hover:text-amber-600/60">♪</div>
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  
                  {/* Genre Badge with Creative Design */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-amber-900/80 backdrop-blur-sm px-4 py-2 transform -skew-x-12 border-l-2 border-amber-600">
                      <span className="text-amber-100 text-xs uppercase tracking-wider font-light transform skew-x-12 block">{artist.genre}</span>
                    </div>
                  </div>

                  {/* Artist Name with Creative Typography */}
                  <div className="relative mb-4">
                    <h3 className="text-amber-50 text-2xl font-serif mb-1 relative z-10">{artist.name}</h3>
                    <div className="absolute -bottom-1 left-0 w-24 h-px bg-gradient-to-r from-amber-600 to-transparent" />
                  </div>

                  {/* Performance Schedule with Icon */}
                  <div className="flex items-center mb-3 text-amber-600 text-sm">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3 animate-pulse" />
                    <span className="font-light uppercase tracking-wider">{artist.performances}</span>
                  </div>

                  {/* Description */}
                  <p className="text-amber-100/80 text-sm leading-relaxed mb-2">
                    {artist.description}
                  </p>

                  {/* Specialty Tag */}
                  <div className="mt-3">
                    <span className="inline-block bg-stone-900/60 backdrop-blur-sm px-3 py-1 rounded-full text-amber-100/60 text-xs uppercase tracking-wider border border-amber-700/20">
                      {artist.specialty}
                    </span>
                  </div>
                </div>

                {/* Hover State Creative Effects */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {/* Animated Border */}
                  <div className="absolute inset-2 border border-amber-600/40 rounded-lg">
                    <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-amber-600 transform -translate-x-1 -translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-amber-600 transform translate-x-1 translate-y-1 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                  
                  {/* Floating Musical Elements */}
                  <div className="absolute top-12 right-12 text-amber-600/40 text-lg animate-bounce">♫</div>
                  <div className="absolute bottom-12 left-12 text-amber-600/40 text-sm animate-pulse">♪</div>
                </div>

                {/* Creative Shadow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-600/20 to-stone-900/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            </motion.div>
          ))}
        </div>



        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-2xl mx-auto mb-8">
            <blockquote className="text-xl md:text-2xl font-serif text-amber-100 italic leading-relaxed">
              "Chaque note résonne avec les saveurs, chaque mélodie accompagne vos moments précieux."
            </blockquote>
          </div>
          
          <div className="inline-flex items-center space-x-6 bg-amber-900/30 backdrop-blur-sm px-8 py-4 rounded-full border border-amber-700/30">
            <span className="text-amber-100/80 font-light">Programme musical</span>
            <div className="w-px h-6 bg-amber-700/50" />
            <span className="text-amber-600 font-serif">Tous les soirs à partir de 20h</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LesArtistes;