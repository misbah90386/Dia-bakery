import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { REVIEWS } from './data';

interface ReviewsProps {
  lang: 'en' | 'ar';
}

export default function Reviews({ lang }: ReviewsProps) {
  const isRtl = lang === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);

  const content = {
    badge: { en: 'Our Guests\' Opinions', ar: 'آراء ومحبة ضيوفنا' },
    title: { en: 'Loved by the Neighborhood', ar: 'ماذا يقول عنّا مجتمع الرياض؟' },
    subtitle: {
      en: 'Real stories and feedback from customers who visit our bakery daily for fresh goods.',
      ar: 'قصص وتقييمات حقيقية من ضيوفنا الكرام الذين يزورون مخبزنا يومياً للاستمتاع بأطيب المذاقات.'
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="py-20 bg-[#FDFBF7] relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Header section */}
        <div className="mb-12">
          <span className="font-serif text-[#C5A059] font-semibold text-sm tracking-wider uppercase mb-3 block">
            {content.badge[lang]}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3E2723] tracking-tight mb-4">
            {content.title[lang]}
          </h2>
          <p className="font-sans text-[#3E2723]/80 text-sm leading-relaxed max-w-xl mx-auto">
            {content.subtitle[lang]}
          </p>
        </div>

        {/* Testimonial Active Display Card with Fade Animation */}
        <div className="relative min-h-[250px] bg-white border border-[#E8E2D6] rounded-3xl p-8 sm:p-12 shadow-md">
          {/* Quote Icon */}
          <div className="absolute top-6 left-6 text-[#C5A059]/15 pointer-events-none">
            <Quote className="w-16 h-16 transform -scale-x-100" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-amber-400" />
                ))}
              </div>

              {/* Comment Quote */}
              <blockquote className="font-serif text-lg sm:text-xl text-[#3E2723] italic leading-relaxed mb-8 font-medium max-w-2xl">
                "{REVIEWS[activeIndex].comment[lang]}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3.5">
                <img
                  src={REVIEWS[activeIndex].avatar}
                  alt={REVIEWS[activeIndex].name[lang]}
                  referrerPolicy="no-referrer"
                  className="w-11 h-11 rounded-full object-cover border border-[#E8E2D6]"
                />
                <div className={`text-start ${isRtl ? 'text-right' : 'text-left'}`}>
                  <h4 className="font-sans font-bold text-sm text-[#3E2723]">
                    {REVIEWS[activeIndex].name[lang]}
                  </h4>
                  <p className="font-sans text-xs text-[#3E2723]/70">
                    {REVIEWS[activeIndex].role[lang]}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons integrated on card sides on large screens, or center bottom on mobile */}
          <div className={`absolute inset-y-0 -left-6 -right-6 hidden sm:flex items-center justify-between pointer-events-none`}>
            <button
              onClick={handlePrev}
              className="p-3.5 bg-white border border-[#E8E2D6] rounded-full text-[#3E2723] hover:bg-[#C5A059] hover:text-white transition-all shadow-md pointer-events-auto cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 bg-white border border-[#E8E2D6] rounded-full text-[#3E2723] hover:bg-[#C5A059] hover:text-white transition-all shadow-md pointer-events-auto cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Small Dot Indicators & mobile arrows */}
        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="flex gap-1.5">
            {REVIEWS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === index ? 'w-6 bg-[#C5A059]' : 'w-2 bg-[#E8E2D6]'
                }`}
              />
            ))}
          </div>

          {/* Mobile Arrows only */}
          <div className="flex sm:hidden gap-4">
            <button
              onClick={handlePrev}
              className="p-2.5 bg-white border border-[#E8E2D6] rounded-full text-[#3E2723] cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="p-2.5 bg-white border border-[#E8E2D6] rounded-full text-[#3E2723] cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
