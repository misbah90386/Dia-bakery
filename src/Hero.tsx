import React from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, ShoppingCart, Star, Flame } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'ar';
}

export default function Hero({ lang }: HeroProps) {
  const isRtl = lang === 'ar';

  const content = {
    title: { en: 'Freshly Baked Every Day', ar: 'طازج كل يوم' },
    subheading: {
      en: 'Experience authentic bakery products prepared daily with premium ingredients and traditional recipes.',
      ar: 'استمتع بأشهى المخبوزات الطازجة يومياً والمحضرة بأفضل المكونات والوصفات التقليدية الأصيلة.'
    },
    ctaViewMenu: { en: 'View Menu', ar: 'عرض القائمة' },
    ctaOrderWhatsapp: { en: 'Order via WhatsApp', ar: 'اطلب عبر الواتساب' },
    badges: {
      rating: { en: '4.7 Customer Rating', ar: '٤.٧ تقييم العملاء' },
      fresh: { en: 'Fresh Daily', ar: 'طازج يومياً' },
      takeaway: { en: 'Takeaway Available', ar: 'الاستلام متوفر' },
      premium: { en: 'Premium Ingredients', ar: 'مكونات فاخرة' }
    }
  };

  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = menuSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsApp = () => {
    const phoneNumber = '966530028344';
    const text = isRtl
      ? 'مرحباً مخابز ديا، أود الاستفسار عن المخبوزات الطازجة اليوم.'
      : 'Hello Dia Bakery, I would like to inquire about today\'s fresh bakes.';
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="hero" className="relative min-h-[calc(100vh-80px)] flex items-center bg-[#FDFBF7] py-12 md:py-20 overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#3E2723]/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Hero text */}
          <div className={`lg:col-span-6 flex flex-col justify-center text-center lg:text-start ${isRtl ? 'lg:order-2 lg:text-right' : ''}`}>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-[#F9F7F2] border border-[#E8E2D6] text-[#C5A059] text-xs font-semibold mb-6 shadow-sm"
            >
              <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>{isRtl ? 'مخبوزات ساخنة يومياً في الرياض' : 'Daily Fresh Ovens in Riyadh'}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#3E2723] leading-tight tracking-tight mb-6"
            >
              {content.title[lang]}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-[#3E2723]/90 font-sans leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              {content.subheading[lang]}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 ${isRtl ? 'sm:flex-row-reverse' : ''}`}
            >
              <button
                onClick={handleScrollToMenu}
                className="px-8 py-4 bg-[#C5A059] hover:bg-[#B5914B] text-white font-sans font-semibold rounded-xl transition-all duration-200 hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                {content.ctaViewMenu[lang]}
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-semibold rounded-xl transition-all duration-200 hover:shadow-lg cursor-pointer flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.665.988 3.3.15 5.32.15 5.473-.003 9.925-4.451 9.928-9.925.002-2.652-1.03-5.145-2.902-7.017-1.872-1.873-4.363-2.903-7.015-2.904-5.478 0-9.93 4.45-9.933 9.926-.001 2.128.556 4.204 1.611 6.002L1.813 22.2l4.834-1.266c-.001-.001-.001-.001 0 0z" />
                </svg>
                <span>{content.ctaOrderWhatsapp[lang]}</span>
              </button>
            </motion.div>

            {/* Trust badges container */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-4 text-start border-t border-[#E8E2D6] pt-8"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-amber-50 text-amber-500">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#3E2723]">⭐ 4.7</h4>
                  <p className="font-sans text-xs text-[#3E2723]/85">{content.badges.rating[lang]}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#F9F7F2] text-[#C5A059]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#3E2723]">{isRtl ? 'طازج' : '100% Oven'}</h4>
                  <p className="font-sans text-xs text-[#3E2723]/85">{content.badges.fresh[lang]}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-rose-50 text-rose-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#3E2723]">{isRtl ? 'مكونات نقيّة' : 'Selected'}</h4>
                  <p className="font-sans text-xs text-[#3E2723]/85">{content.badges.premium[lang]}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-blue-50 text-blue-500">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#3E2723]">{isRtl ? 'طلب مريح' : 'Convenient'}</h4>
                  <p className="font-sans text-xs text-[#3E2723]/85">{content.badges.takeaway[lang]}</p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Hero Visual Imagery */}
          <div className={`lg:col-span-6 relative flex justify-center items-center ${isRtl ? 'lg:order-1' : ''}`}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/80"
            >
              {/* Main product photo */}
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200"
                alt="Dia Bakery Fresh Bread and Croissants"
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700"
              />
              
              {/* Ambient overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>

              {/* Float Card */}
              <motion.div
                initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`absolute bottom-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-[#E8E2D6] ${
                  isRtl ? 'left-6' : 'right-6'
                }`}
              >
                <div className="p-2.5 bg-[#F9F7F2] text-[#C5A059] rounded-xl font-bold font-serif">
                  ✦
                </div>
                <div>
                  <p className="font-sans font-bold text-sm text-[#3E2723]">
                    {isRtl ? 'خبز بالسمسم وكرواسون ساخن' : 'Hot Croissants'}
                  </p>
                  <p className="font-sans text-xs text-[#3E2723]/80">
                    {isRtl ? 'خبز طازج كل ساعة' : 'Baked fresh every hour'}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Decorative smaller floating image cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`absolute -bottom-8 bg-[#FDFBF7] p-2.5 rounded-2xl shadow-lg border border-[#E8E2D6] hidden sm:flex items-center gap-3 w-48 ${
                isRtl ? 'right-4' : 'left-4'
              }`}
            >
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=150"
                alt="Croissants"
                referrerPolicy="no-referrer"
                className="w-12 h-12 object-cover rounded-xl"
              />
              <div>
                <h5 className="font-sans font-bold text-xs text-[#3E2723]">{isRtl ? 'كرواسون الزبدة' : 'Croissant'}</h5>
                <span className="text-[10px] text-amber-600 font-sans font-bold">8.00 SAR</span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
