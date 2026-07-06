import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Flame, ShoppingCart, Check } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from './data';
import { Product } from './types';

interface MenuProps {
  lang: 'en' | 'ar';
  onAddToCart: (product: Product) => void;
}

export default function Menu({ lang, onAddToCart }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});

  const isRtl = lang === 'ar';

  const content = {
    title: { en: 'Our Culinary Masterpieces', ar: 'قائمة مخبوزاتنا الطازجة' },
    subtitle: {
      en: 'Explore our wide range of freshly baked breads, signature croissants, authentic fatayer, wholesome salads, and premium drinks.',
      ar: 'تصفح تشكيلتنا المتنوعة والواسعة من المخبوزات الحية، الكرواسون الهش، الفطاير الشهية، السلطات الصحية، والمشروبات الباردة والساخنة.'
    },
    searchPlaceholder: { en: 'Search for fresh baked goods...', ar: 'ابحث عن أشهى المخبوزات والحلويات...' },
    caloriesLabel: { en: 'Cal', ar: 'سعرة' },
    currency: { en: 'SAR', ar: 'ر.س' },
    addToCart: { en: 'Add to Cart', ar: 'أضف للسلة' },
    added: { en: 'Added!', ar: 'تمت الإضافة!' },
    noResults: { en: 'No products found matching your search.', ar: 'لم نعثر على أي منتجات تطابق بحثك.' },
    bestSellerBadge: { en: 'Best Seller', ar: 'الأكثر مبيعاً' }
  };

  // Filter products based on category and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesEnName = product.name.en.toLowerCase().includes(query);
      const matchesArName = product.name.ar.toLowerCase().includes(query);
      const matchesEnDesc = product.description.en.toLowerCase().includes(query);
      const matchesArDesc = product.description.ar.toLowerCase().includes(query);

      return matchesCategory && (matchesEnName || matchesArName || matchesEnDesc || matchesArDesc);
    });
  }, [selectedCategory, searchQuery]);

  const handleAddToCartClick = (product: Product) => {
    onAddToCart(product);
    
    // Quick success animation feedback per card
    setAddedItems((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [product.id]: false }));
    }, 1500);
  };

  return (
    <section id="menu" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Headers */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-serif text-[#C5A059] font-semibold text-sm tracking-wider uppercase mb-3 block">
            {isRtl ? 'الأصناف اللذيذة' : 'Premium Menu'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3E2723] tracking-tight mb-4">
            {content.title[lang]}
          </h2>
          <p className="font-sans text-[#3E2723]/80 text-sm sm:text-base leading-relaxed">
            {content.subtitle[lang]}
          </p>
        </div>

        {/* Search Bar & Category Filters wrapper */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10 pb-4 border-b border-[#E8E2D6]/60">
          
          {/* Categories Horizontal Scroller */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar py-2 flex items-center">
            <div className={`flex gap-2.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4.5 py-2 rounded-full font-sans text-xs sm:text-sm font-semibold whitespace-nowrap border transition-all duration-200 cursor-pointer ${
                    selectedCategory === category.id
                      ? 'bg-[#C5A059] border-[#C5A059] text-white shadow-md'
                      : 'bg-white border-[#E8E2D6] text-[#3E2723] hover:bg-[#F9F7F2] hover:border-[#C5A059]'
                  }`}
                >
                  {category.name[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <div className={`absolute inset-y-0 flex items-center pointer-events-none text-[#3E2723]/60 ${
              isRtl ? 'left-4' : 'right-4'
            }`}>
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={content.searchPlaceholder[lang]}
              className={`w-full py-2.5 bg-white border border-[#E8E2D6] rounded-xl text-sm text-[#3E2723] placeholder-[#3E2723]/50 focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:border-transparent shadow-sm ${
                isRtl ? 'pl-11 pr-4 text-right' : 'pr-11 pl-4 text-left'
              }`}
            />
          </div>

        </div>

        {/* Products Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {filteredProducts.map((product) => {
                const isAdded = addedItems[product.id];
                return (
                  <motion.div
                    layout
                    key={product.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white rounded-2xl border border-[#E8E2D6] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative"
                  >
                    {/* Image Area */}
                    <div className="relative overflow-hidden aspect-square bg-[#F9F7F2] flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name[lang]}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Ambient overlay top-bottom */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none"></div>

                      {/* Best seller ribbon */}
                      {product.isBestSeller && (
                        <div className={`absolute top-3.5 bg-[#C5A059] text-white font-sans text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1 ${
                          isRtl ? 'left-3.5' : 'right-3.5'
                        }`}>
                          <Flame className="w-3.5 h-3.5 fill-current text-white" />
                          <span>{content.bestSellerBadge[lang]}</span>
                        </div>
                      )}

                      {/* Calories badge */}
                      {product.calories !== undefined && (
                        <div className={`absolute bottom-3 bg-black/60 backdrop-blur-sm text-white font-sans text-[10px] font-medium px-2 py-0.5 rounded ${
                          isRtl ? 'right-3' : 'left-3'
                        }`}>
                          {product.calories} {content.caloriesLabel[lang]}
                        </div>
                      )}
                    </div>

                    {/* Metadata Content Card */}
                    <div className="p-4.5 flex flex-col flex-grow justify-between text-start">
                      <div>
                        {/* Name and Price Row */}
                        <div className={`flex justify-between items-start gap-2 mb-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                          <h3 className="font-serif text-base font-bold text-[#3E2723] tracking-tight group-hover:text-[#C5A059] transition-colors duration-200">
                            {product.name[lang]}
                          </h3>
                          <span className="font-sans font-extrabold text-sm text-[#C5A059] whitespace-nowrap">
                            {product.price.toFixed(2)} {content.currency[lang]}
                          </span>
                        </div>

                        {/* Description */}
                        <p className={`font-sans text-xs text-[#3E2723]/80 leading-relaxed mb-5 ${isRtl ? 'text-right' : 'text-left'}`}>
                          {product.description[lang]}
                        </p>
                      </div>

                      {/* Add to Cart button */}
                      <button
                        onClick={() => handleAddToCartClick(product)}
                        className={`w-full py-2.5 rounded-xl font-sans text-xs sm:text-sm font-bold border transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer transform active:scale-95 ${
                          isRtl ? 'flex-row-reverse' : ''
                        } ${
                          isAdded
                            ? 'bg-emerald-600 border-emerald-600 text-white shadow-md'
                            : 'bg-white border-[#E8E2D6] text-[#3E2723] hover:bg-[#F9F7F2] hover:border-[#C5A059]'
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-4 h-4 animate-scale" />
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
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 border-2 border-dashed border-[#E8E2D6] rounded-3xl"
            >
              <p className="font-sans text-base text-[#3E2723]/70 font-semibold mb-2">
                {content.noResults[lang]}
              </p>
              <button
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="text-xs font-bold text-[#C5A059] hover:underline"
              >
                {isRtl ? 'عرض جميع المنتجات' : 'Reset filters and search'}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
