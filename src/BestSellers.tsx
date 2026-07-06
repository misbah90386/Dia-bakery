import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, ShoppingCart, Star, Flame, Check } from 'lucide-react';
import { PRODUCTS } from './data';
import { Product } from './types';

interface BestSellersProps {
  lang: 'en' | 'ar';
  onAddToCart: (product: Product) => void;
}

export default function BestSellers({ lang, onAddToCart }: BestSellersProps) {
  const isRtl = lang === 'ar';

  // Extract products explicitly marked as Best Sellers
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const content = {
    badge: { en: 'Top Favorites', ar: 'الأكثر طلباً ومبيعاً' },
    title: { en: 'Our Signature Best Sellers', ar: 'روائع ديا الأكثر مبيعاً في الرياض' },
    subtitle: {
      en: 'Voted by our beloved local neighborhood as the must-try daily freshly-baked items.',
      ar: 'مخبوزات مميزة يوصي بها ضيوفنا الكرام في الرياض كخيار مثالي يومي لا بد من تجربته.'
    },
    currency: { en: 'SAR', ar: 'ر.س' },
    addToCart: { en: 'Add to Cart', ar: 'أضف للسلة' },
    added: { en: 'Added!', ar: 'تمت الإضافة!' }
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % bestSellers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + bestSellers.length) % bestSellers.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  // We want to show a gorgeous 3-item split carousel on desktop or a smooth single-item on mobile.
  // To keep it perfectly clean, we can render an interactive visible slider or grid of cards
  // that can be traversed, or simply a beautifully responsive grid that slides seamlessly.
  // Let's implement a responsive bento-inspired sliding showcase where the current active items are beautifully structured.

  return (
    <section id="best-sellers" className="py-20 bg-[#F9F7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className={`text-center md:text-start max-w-2xl ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            <span className="font-serif text-[#C5A059] font-semibold text-sm tracking-wider uppercase mb-2 block">
              {content.badge[lang]}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3E2723] tracking-tight">
              {content.title[lang]}
            </h2>
            <p className="font-sans text-[#3E2723]/80 text-sm sm:text-base mt-2">
              {content.subtitle[lang]}
            </p>
          </div>
          
          {/* Slider controls */}
          <div className={`flex gap-3 ${isRtl ? 'flex-row-reverse' : ''}`}>
            <button
              onClick={prevSlide}
              className="p-3 bg-white hover:bg-[#C5A059] hover:text-white border border-[#E8E2D6] rounded-full transition-all duration-200 cursor-pointer text-[#3E2723] hover:shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white hover:bg-[#C5A059] hover:text-white border border-[#E8E2D6] rounded-full transition-all duration-200 cursor-pointer text-[#3E2723] hover:shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Show 3 items starting from currentIndex, wrapping around */}
            {[0, 1, 2].map((offset) => {
              const itemIndex = (currentIndex + offset) % bestSellers.length;
              const product = bestSellers[itemIndex];
              const isAdded = addedItems[product.id];

              return (
                <motion.div
                  key={`${product.id}-${offset}`}
                  initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: offset * 0.1 }}
                  className="bg-white rounded-2xl border border-[#E8E2D6] p-4 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group h-full"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#F9F7F2] mb-4">
                    <img
                      src={product.image}
                      alt={product.name[lang]}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    
                    {/* Floating star ratings and seller indicators */}
                    <div className={`absolute top-3 bg-[#C5A059] text-white font-sans text-[10px] font-bold px-2 py-1 rounded-md shadow flex items-center gap-1 ${
                      isRtl ? 'left-3' : 'right-3'
                    }`}>
                      <Star className="w-3 h-3 fill-current" />
                      <span>{isRtl ? 'موصى به' : 'Popular'}</span>
                    </div>

                    <div className={`absolute bottom-3 bg-[#FDFBF7]/90 backdrop-blur-sm border border-[#E8E2D6] text-[#3E2723] font-sans text-xs font-bold px-2.5 py-1 rounded-full shadow ${
                      isRtl ? 'left-3' : 'right-3'
                    }`}>
                      {product.price.toFixed(2)} {content.currency[lang]}
                    </div>
                  </div>

                  {/* Descriptions and Content */}
                  <div className="text-start flex-grow flex flex-col justify-between">
                    <div>
                      <span className="font-serif text-[#C5A059] text-xs font-semibold tracking-wider uppercase mb-1 block">
                        ✦ {product.category.toUpperCase()}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-[#3E2723] mb-1.5 group-hover:text-[#C5A059] transition-colors">
                        {product.name[lang]}
                      </h3>
                      <p className="font-sans text-xs text-[#3E2723]/80 leading-relaxed mb-4">
                        {product.description[lang]}
                      </p>
                    </div>

                    {/* Button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className={`w-full py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold border transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform active:scale-95 ${
                        isRtl ? 'flex-row-reverse' : ''
                      } ${
                        isAdded
                          ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                          : 'bg-[#C5A059] border-[#C5A059] text-white hover:bg-[#B5914B] hover:shadow-md'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>{content.added[lang]}</span>
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4" />
                          <span>{content.addToCart[lang]}</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
