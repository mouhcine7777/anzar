import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

interface Cocktail {
  name: string;
  price: number;
  ingredients: string;
  description: string;
}

interface CocktailSection {
  title: string;
  subtitle?: string;
  cocktails: Cocktail[];
}

const CocktailMenuSection = () => {
  const [expandedCocktailIndex, setExpandedCocktailIndex] = useState<string | null>(null);
  
  const cocktailSections: CocktailSection[] = [
    {
      title: "Nos Cocktails",
      subtitle: "Créations signature inspirées du Maroc",
      cocktails: [
        {
          name: "Afri",
          price: 200,
          ingredients: "Cognac Hennessy, Caramel au Beurre Salé, Amaretto Disaronno, Café",
          description: "Un voyage sensoriel qui marie l'élégance du cognac français à la chaleur du caramel salé et l'intensité du café marocain."
        },
        {
          name: "Anzar",
          price: 200,
          ingredients: "Vodka Belvedere, Passion Fruit, Pistache, Vin Mousseux Rosé",
          description: "Nommé d'après notre restaurant, ce cocktail évoque la pluie bénie avec ses bulles pétillantes et sa douceur exotique."
        },
        {
          name: "Idir",
          price: 200,
          ingredients: "Ananas, Malibu, Cacao Blanc, Jus de Citron, Bitter Chocolat",
          description: "Un équilibre tropical parfait entre la douceur de l'ananas et l'amertume subtile du chocolat, rappelant les oasis du désert."
        },
        {
          name: "Moreyba",
          price: 200,
          ingredients: "Jack Daniels Whisky, Ras el Hanout, Jus Citron, Vin Rouge, Œuf",
          description: "Une création audacieuse qui fusionne les épices berbères traditionnelles avec la robustesse du whisky américain."
        },
        {
          name: "Illu",
          price: 200,
          ingredients: "Gin Hendricks, Licor Maraschino, Fruits Rouges, Bitter Orange",
          description: "Délicate harmonie florale où les fruits rouges dansent avec les botaniques du gin et l'amertume citronnée."
        },
        {
          name: "Gurzil",
          price: 200,
          ingredients: "Vodka Belvedere, Cacao Blanc, Ananas, Sirop de Fleur",
          description: "Un cocktail lumineux comme le dieu berbère du soleil, mêlant douceur tropicale et notes florales raffinées."
        },
        {
          name: "Atlas",
          price: 200,
          ingredients: "Tequila, Mango, Jus Citron, Jalapeño, Bière",
          description: "Fort comme les montagnes de l'Atlas, ce cocktail épicé équilibre parfaitement douceur fruitée et piquant du jalapeño."
        },
        {
          name: "Yakush",
          price: 200,
          ingredients: "Bacardi Gold, Orange, Cannelle, Bitter Angostura, Œuf",
          description: "Une création veloutée aux épices chaudes, évoquant les soirées d'hiver au coin du feu dans les riads traditionnels."
        },
        {
          name: "Carafe de Sangria",
          price: 900,
          ingredients: "Rouge / Blanche / Rosé / Cava Blanche / Cava Rosé",
          description: "Nos sangrias artisanales, parfaites pour partager, infusées de fruits frais et d'épices méditerranéennes."
        }
      ]
    },
    {
      title: "Chich Cocktails",
      subtitle: "L'art de la chicha revisité en cocktail",
      cocktails: [
        {
          name: "Love Magic",
          price: 600,
          ingredients: "Mélange secret aux saveurs romantiques",
          description: "Un philtre d'amour moderne aux arômes envoûtants qui éveille tous les sens."
        },
        {
          name: "Mint Magic",
          price: 600,
          ingredients: "Menthe fraîche et essences mystérieuses",
          description: "La fraîcheur de la menthe marocaine sublimée dans une expérience cocktail unique."
        },
        {
          name: "Apple Magic",
          price: 600,
          ingredients: "Pomme verte et épices secrètes",
          description: "La douceur croquante de la pomme transformée en élixir rafraîchissant."
        },
        {
          name: "Mi Amour Magic",
          price: 600,
          ingredients: "Fruits de la passion et notes sucrées",
          description: "Un cocktail tendre comme une déclaration d'amour, aux saveurs passionnées."
        },
        {
          name: "Raisin Magic",
          price: 600,
          ingredients: "Raisin blanc et touches vineuses",
          description: "L'essence du raisin capturée dans une création pétillante et sophistiquée."
        },
        {
          name: "Arabi Mint Magic",
          price: 600,
          ingredients: "Menthe arabe authentique",
          description: "La tradition de la menthe orientale réinventée avec une touche contemporaine."
        },
        {
          name: "Tabo Mint Magic",
          price: 600,
          ingredients: "Menthe spéciale et mélanges exotiques",
          description: "Une variation unique de notre menthe signature avec des notes mystérieuses."
        },
        {
          name: "0% Nico Magic",
          price: 600,
          ingredients: "Version sans nicotine de nos créations",
          description: "Toute la magie de nos cocktails chich dans une version pure et naturelle."
        }
      ]
    },
    {
      title: "Meter Shots",
      subtitle: "Spiritueux premium au mètre",
      cocktails: [
        {
          name: "Tequila",
          price: 900,
          ingredients: "Tequila premium mexicaine",
          description: "L'esprit du Mexique dans sa forme la plus pure, servie avec style."
        },
        {
          name: "Passion Vodka",
          price: 900,
          ingredients: "Vodka infusée aux fruits de la passion",
          description: "La pureté de la vodka rencontre l'exotisme tropical du fruit de la passion."
        },
        {
          name: "Sambuca",
          price: 900,
          ingredients: "Sambuca italienne authentique",
          description: "L'anisé italien traditionnel avec ses notes de réglisse et ses flammes bleues."
        },
        {
          name: "Jägermeister",
          price: 900,
          ingredients: "Liqueur allemande aux 56 herbes",
          description: "Le secret des herbes allemandes dans cette liqueur légendaire aux vertus digestives."
        }
      ]
    },
    {
      title: "Soft",
      subtitle: "Rafraîchissements et essentiels",
      cocktails: [
        {
          name: "Evian",
          price: 120,
          ingredients: "Eau minérale naturelle",
          description: "La pureté des Alpes françaises dans chaque gorgée."
        },
        {
          name: "Evian Pétillante",
          price: 120,
          ingredients: "Eau minérale naturelle gazéifiée",
          description: "La même pureté alpine avec une effervescence rafraîchissante."
        },
        {
          name: "Sodas",
          price: 100,
          ingredients: "Sélection de sodas premium",
          description: "Notre gamme de sodas artisanaux et classiques pour tous les goûts."
        },
        {
          name: "Café Nespresso",
          price: 70,
          ingredients: "Café espresso de qualité suisse",
          description: "L'excellence du café suisse pour parfaire votre expérience culinaire."
        }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const toggleExpand = (sectionIndex: number, cocktailIndex: number) => {
    const key = `${sectionIndex}-${cocktailIndex}`;
    if (expandedCocktailIndex === key) {
      setExpandedCocktailIndex(null);
    } else {
      setExpandedCocktailIndex(key);
    }
  };

  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    if (expandedCocktailIndex && itemRefs.current.has(expandedCocktailIndex)) {
      const element = itemRefs.current.get(expandedCocktailIndex);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [expandedCocktailIndex]);

  return (
    <section id="cocktail-menu" className="bg-[#0a0400] py-24 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-500/5 to-transparent rounded-full blur-3xl" />
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
            <span className="text-9xl font-serif text-amber-500">Cocktails</span>
          </div>
          
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"
          />
          
          <h2 className="text-amber-100 text-sm tracking-[0.4em] mb-4 uppercase">Libations</h2>
          <h1 className="text-5xl md:text-6xl font-serif text-amber-400 mb-6">Art Liquide</h1>
          <p className="text-amber-100/70 text-lg font-light max-w-2xl mx-auto">
            Chaque cocktail raconte une histoire, mêlant traditions marocaines et techniques modernes de mixologie
          </p>
        </motion.div>
      </div>
      
      {/* Cocktail Sections */}
      <div className="container mx-auto px-4 relative z-10 space-y-16">
        {cocktailSections.map((section, sectionIndex) => (
          <div key={section.title}>
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl md:text-4xl font-serif text-amber-400 mb-2">{section.title}</h3>
              {section.subtitle && (
                <p className="text-amber-100/60 text-sm tracking-wide">{section.subtitle}</p>
              )}
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto mt-4" />
            </motion.div>

            {/* Cocktail Items */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {section.cocktails.map((cocktail, cocktailIndex) => {
                const key = `${sectionIndex}-${cocktailIndex}`;
                const isExpanded = expandedCocktailIndex === key;
                
                return (
                  <motion.div 
                    key={cocktail.name}
                    variants={itemVariants}
                    transition={{ duration: 0.5 }}
                    className="relative"
                    ref={(el) => {
                      if (el) {
                        itemRefs.current.set(key, el);
                      } else {
                        itemRefs.current.delete(key);
                      }
                    }}
                  >
                    {/* Cocktail Item Card */}
                    <div className="bg-gradient-to-br from-[#1a1208] to-[#0e0a04] rounded-sm border border-amber-500/10 p-6 relative overflow-hidden group cursor-pointer"
                         onClick={() => toggleExpand(sectionIndex, cocktailIndex)}>
                      {/* Decorative corner element */}
                      <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden">
                        <div className="absolute -top-10 -right-10 w-20 h-20 transform rotate-45 bg-gradient-to-r from-amber-500/10 to-transparent scale-150" />
                      </div>
                      
                      {/* Item Header */}
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-xl font-serif text-amber-100 mb-1 uppercase">{cocktail.name}</h4>
                        </div>
                        <div className="text-lg font-serif text-amber-400">
                          {cocktail.price}
                        </div>
                      </div>
                      
                      {/* Ingredients */}
                      <p className="text-amber-100/60 text-sm mb-3">
                        {cocktail.ingredients}
                      </p>
                      
                      {/* Expanded Content */}
                      {isExpanded && (
                        <div className="mt-3">
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent mb-3" />
                          <p className="text-amber-100/80 text-sm">
                            {cocktail.description}
                          </p>
                        </div>
                      )}
                      
                      {/* Details Button */}
                      <div 
                        className="inline-flex items-center text-amber-400 text-sm group-hover:text-amber-300 transition-colors duration-300 mt-3"
                      >
                        <span className="relative">
                          {isExpanded ? 'Moins' : 'Détails'}
                          <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber-400 group-hover:w-full transition-all duration-300" />
                        </span>
                        <span className="ml-2 text-amber-400">
                          {isExpanded ? '−' : '+'}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        ))}
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
          <span className="text-amber-500/60">🍸</span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500/30" />
        </div>
      </motion.div>
    </section>
  );
};

export default CocktailMenuSection;