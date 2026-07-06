import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ZoomIn, X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY } from './data';
import { GalleryItem } from './types';

interface GalleryProps {
  lang: 'en' | 'ar';
}

export default function Gallery({ lang }: GalleryProps) {
  const isRtl = lang === 'ar';
  
  const [activeFilter, setActiveFilter] = useState<'all' | 'interior' | 'products'>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const content = {
    badge: { en: 'Our Gallery', ar: 'معرض الصور الحية' },
    title: { en: 'A Visual Scent of Our Bakery', ar: 'تأمل روائع مخبوزاتنا بصرياً' },
    subtitle: {
      en: 'Take a virtual tour through our cozy Riyadh interior and explore our artisan freshly-prepared food products.',
      ar: 'قم بجولة بصرية دافئة داخل فرعنا بالرياض وتأمل دقة تفاصيل المخبوزات والحلويات المحضرة يدوياً.'
    },
    filterAll: { en: 'All Photos', ar: 'الكل' },
    filterInterior: { en: 'Bakery Interior', ar: 'المخبز والفرع' },
    filterProducts: { en: 'Our Products', ar: 'المخبوزات والأطباق' },
    viewInFull: { en: 'Click to view in full screen', ar: 'انقر للعرض بالحجم الكامل' }
  };

  const filteredItems = GALLERY.filter(
    (item) => activeFilter === 'all' || item.category === activeFilter
  );

  const openLightbox = (item: GalleryItem) => {
    setLightboxItem(item);
  };

  const closeLightbox = () => {
    setLightboxItem(null);
  };

  return (
    <section id="gallery" className="py-20 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="font-serif text-[#C5A059] font-semibold text-sm tracking-wider uppercase mb-3 block">
            {content.badge[lang]}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3E2723] tracking-tight mb-4">
            {content.title[lang]}
          </h2>
          <p className="font-sans text-[#3E2723]/80 text-sm sm:text-base leading-relaxed">
            {content.subtitle[lang]}
          </p>
        </div>

        {/* Gallery Tabs/Filters */}
        <div className="flex justify-center mb-10">
          <div className={`flex gap-2 p-1 bg-white border border-[#E8E2D6] rounded-full shadow-sm ${
            isRtl ? 'flex-row-reverse' : ''
          }`}>
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4.5 py-1.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#C5A059] text-white shadow-sm'
                  : 'text-[#3E2723] hover:text-[#C5A059]'
              }`}
            >
              {content.filterAll[lang]}
            </button>
            <button
              onClick={() => setActiveFilter('interior')}
              className={`px-4.5 py-1.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === 'interior'
                  ? 'bg-[#C5A059] text-white shadow-sm'
                  : 'text-[#3E2723] hover:text-[#C5A059]'
              }`}
            >
              {content.filterInterior[lang]}
            </button>
            <button
              onClick={() => setActiveFilter('products')}
              className={`px-4.5 py-1.5 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeFilter === 'products'
                  ? 'bg-[#C5A059] text-white shadow-sm'
                  : 'text-[#3E2723] hover:text-[#C5A059]'
              }`}
            >
              {content.filterProducts[lang]}
            </button>
          </div>
        </div>

        {/* Masonry Grid (Visual Layout columns) */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid bg-white border border-[#E8E2D6] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg group cursor-pointer relative"
              onClick={() => openLightbox(item)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                />
                
                {/* Elegant Black Hover Overlay with Title */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  <div className={`flex justify-end ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <span className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <ZoomIn className="w-4 h-4" />
                    </span>
                  </div>
                  <div className={`text-start ${isRtl ? 'text-right' : 'text-left'}`}>
                    <span className="text-[10px] uppercase font-sans tracking-widest text-[#C5A059] font-semibold">
                      ✦ {item.category === 'interior' ? content.filterInterior[lang] : content.filterProducts[lang]}
                    </span>
                    <h4 className="font-serif text-base font-bold mt-1">
                      {item.title[lang]}
                    </h4>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Overlay Portal */}
        <AnimatePresence>
          {lightboxItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/25 rounded-full text-white cursor-pointer transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Box Content Container */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl relative"
              >
                <div className="flex flex-col md:flex-row max-h-[85vh]">
                  {/* Photo Area */}
                  <div className="md:w-2/3 bg-black flex items-center justify-center">
                    <img
                      src={lightboxItem.image}
                      alt={lightboxItem.title[lang]}
                      referrerPolicy="no-referrer"
                      className="max-h-[50vh] md:max-h-[80vh] w-full object-contain"
                    />
                  </div>

                  {/* Metadata Sidebar Area */}
                  <div className="md:w-1/3 p-6 flex flex-col justify-between bg-[#F9F7F2] text-start">
                    <div>
                      <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-[#C5A059] block mb-2">
                        ✦ {lightboxItem.category === 'interior' ? content.filterInterior[lang] : content.filterProducts[lang]}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-[#3E2723] mb-4">
                        {lightboxItem.title[lang]}
                      </h3>
                      <p className="font-sans text-xs text-[#3E2723]/80 leading-relaxed">
                        {lang === 'ar'
                          ? 'لقطة مباشرة من أروقة مخابز ديا بالرياض، تعرض تميز التحضير الحقيقي والاهتمام البالغ بجودة ونظافة منتجاتنا اليومية.'
                          : 'A candid visual moment from our Riyadh bakery, capturing our genuine baking process and strict adherence to hygiene and premium culinary standards.'
                        }
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-[#E8E2D6]">
                      <button
                        onClick={closeLightbox}
                        className="w-full py-2 bg-[#3E2723] text-white font-sans text-xs font-semibold rounded-lg hover:bg-[#4E342E] transition-colors cursor-pointer"
                      >
                        {isRtl ? 'إغلاق المعاينة' : 'Close View'}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
