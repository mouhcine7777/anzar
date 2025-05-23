import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// Define the Dessert type without subtitle
interface Dessert {
  name: string;
  price: number;
  shortDescription: string;
  fullDescription: string;
}

const DessertMenuSection = () => {
  const [expandedDessertIndex, setExpandedDessertIndex] = useState<number | null>(null);
  
  const desserts: Dessert[] = [
    {
      name: "Fondant au Chocolat à l'Orange Glace Vanille",
      price: 120,
      shortDescription: "Chocolat fondant à l'essence d'orange",
      fullDescription: "Un gâteau au chocolat chaud indulgent avec un cœur coulant infusé de zeste d'orange, servi avec une glace à la vanille de Madagascar et des écorces d'orange confites. Le contraste du chocolat chaud et de la glace froide crée un délice sensoriel qui honore les traditions pâtissières françaises."
    },
    {
      name: "Tarte au Citron Meringuée Revisitée",
      price: 120,
      shortDescription: "Tarte au citron réinventée avec techniques modernes",
      fullDescription: "L'interprétation contemporaine de notre chef de la tarte au citron classique présente une croûte sablée au beurre, une crème au citron soyeuse infusée à la bergamote, et un nuage de meringue italienne caramélisée à la perfection. Servie avec un sorbet au yuzu et décorée de feuilles d'or comestibles et de micro-herbes fraîches."
    },
    {
      name: "Sablé Chocolat-Framboise avec Glace Vanille",
      price: 120,
      shortDescription: "Sablé chocolat-framboise avec glace vanille",
      fullDescription: "Une délicate base de sablé au chocolat superposée de ganache au chocolat noir et de compote de framboises fraîches, garnie de framboises lyophilisées et accompagnée d'une glace maison à la vanille. L'interaction des textures et des températures crée une symphonie de sensations."
    },
    {
      name: "Pavlova aux Fruits Rouges et à l'Eau de Rose",
      price: 120,
      shortDescription: "Meringue croustillante aux fruits rouges et eau de rose",
      fullDescription: "Une coque de meringue légère comme un nuage avec un cœur moelleux, surmontée de crème Chantilly infusée à l'eau de rose et d'un assortiment de fruits rouges frais. Finie avec une légère poudre de pistache et des pétales de rose comestibles. Le délicat arôme d'eau de rose évoque les jardins de Damas."
    },
    {
      name: "Tiramisu aux Dattes",
      price: 110,
      shortDescription: "Tiramisu infusé aux dattes et café arabe",
      fullDescription: "Une touche orientale sur ce classique italien, avec des couches de biscuits imbibés de dattes, de crème au mascarpone parfumée à la cardamome, et un riche sirop de café arabe. Saupoudré de cacao et garni de morceaux de dattes caramélisées et de feuilles d'or pour une finition opulente."
    },
    {
      name: "Jawhara à la Fleur d'Oranger",
      price: 90,
      shortDescription: "Joyau à la fleur d'oranger avec notes de miel",
      fullDescription: "Une pâtisserie traditionnelle du Moyen-Orient transformée en un dessert élégant. Couches de pâte filo remplies de crème parfumée à la fleur d'oranger, pistaches concassées et miel de fleurs sauvages. Servie avec une quenelle de glace au miel et lavande, décorée de fleurs d'oranger cristallisées."
    },
    {
      name: "Gâteau Anzar au Safran",
      price: 100,
      shortDescription: "Notre gâteau signature infusé au safran",
      fullDescription: "Le joyau de notre carte des desserts, nommé d'après notre restaurant. Un délicat gâteau moelleux infusé de fils de safran premium, superposé de crème au beurre à l'eau de rose et de pistaches concassées. Garni de feuilles d'or 24 carats et servi avec une crème anglaise à la cardamome."
    },
    {
      name: "Sélection de Fruits de Saison",
      price: 120,
      shortDescription: "Fruits de saison sélectionnés avec touches exotiques",
      fullDescription: "Une sélection soigneusement choisie de fruits de saison premium, élégamment présentée et rehaussée d'éléments exotiques. Selon la saison, cela peut inclure des figues au miel, des baies au sirop de grenade, ou des fruits tropicaux glacés au fruit de la passion, accompagnés d'un sorbet maison."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Use index instead of id
  const toggleExpand = (index: number) => {
    if (expandedDessertIndex === index) {
      setExpandedDessertIndex(null);
    } else {
      setExpandedDessertIndex(index);
    }
  };

  // Use array index for refs instead of ID
  const itemRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  useEffect(() => {
    if (expandedDessertIndex !== null && itemRefs.current.has(expandedDessertIndex)) {
      const element = itemRefs.current.get(expandedDessertIndex);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [expandedDessertIndex]);

  return (
    <section id="dessert-menu" className="bg-[#0a0400] py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-full blur-3xl" />
      </div>
      
      {/* Section Header */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <div className="absolute inset-0 flex justify-center items-center opacity-5">
            <span className="text-9xl font-serif text-amber-500">Desserts</span>
          </div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"
          />
          
          <h2 className="text-amber-100 text-sm tracking-[0.4em] mb-4 uppercase">Indulgence</h2>
          <h1 className="text-5xl md:text-6xl font-serif text-amber-400 mb-6">Finales Sucrées</h1>
          <p className="text-amber-100/70 text-lg font-light max-w-2xl mx-auto">
            Chaque dessert est une poésie de saveurs, textures et arômes—une conclusion parfaite à votre voyage culinaire
          </p>
        </motion.div>
      </div>
      
      {/* Dessert Menu Items */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {desserts.map((dessert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              transition={{ duration: 0.6 }}
              className="relative"
              ref={(el) => {
                if (el) {
                  itemRefs.current.set(index, el);
                } else {
                  itemRefs.current.delete(index);
                }
              }}
            >
              {/* Dessert Item Card */}
              <div className="bg-gradient-to-br from-[#1a1208] to-[#0e0a04] rounded-sm border border-amber-500/10 p-6 relative overflow-hidden group cursor-pointer"
                   onClick={() => toggleExpand(index)}>
                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className="absolute -top-12 -right-12 w-24 h-24 transform rotate-45 bg-gradient-to-r from-amber-500/10 to-transparent scale-150" />
                </div>
                
                {/* Item Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-serif text-amber-100 mb-1">{dessert.name}</h3>
                  </div>
                  <div className="text-xl font-serif text-amber-400">
                    {dessert.price}
                  </div>
                </div>
                
                {/* Short Description */}
                <p className="text-amber-100/70 text-sm mb-4">
                  {dessert.shortDescription}
                </p>
                
                {/* Expanded Content - no animation */}
                {expandedDessertIndex === index && (
                  <div className="mt-4">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-4" />
                    <p className="text-amber-100/90 text-sm">
                      {dessert.fullDescription}
                    </p>
                  </div>
                )}
                
                {/* Details Button */}
                <div 
                  className="inline-flex items-center text-amber-400 text-sm group-hover:text-amber-300 transition-colors duration-300 mt-4"
                >
                  <span className="relative">
                    {expandedDessertIndex === index ? 'Moins' : 'Détails'}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
                  </span>
                  <span className="ml-2 text-amber-400">
                    {expandedDessertIndex === index ? '−' : '+'}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Bottom Decoration */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 text-center"
      >
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500/30" />
          <span className="text-amber-500/60">✧</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default DessertMenuSection;