import React from 'react';
import { motion } from 'motion/react';
import { Heart, Landmark, Coffee } from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'ar';
}

export default function About({ lang }: AboutProps) {
  const isRtl = lang === 'ar';

  const content = {
    badge: { en: 'Our Story', ar: 'قصتنا وعراقتنا' },
    title: { en: 'Crafting Happiness Since 2020', ar: 'نصنع السعادة والحب يومياً' },
    paragraph: {
      en: 'Dia Bakery has become a favorite neighborhood bakery by serving fresh breads, pastries, croissants, fatayer, sandwiches, and salads every day. We focus on quality ingredients, traditional baking methods, and exceptional customer service to ensure every visit is memorable.',
      ar: 'أصبحت مخابز ديا المخبز المفضل في الحي بتقديم الخبز الطازج، المعجنات، الكرواسون، الفطاير، السندوتشات، والسلطات اللذيذة يومياً. نحن نركز على اختيار المكونات عالية الجودة، وطرق الخبز التقليدية العريقة، بالإضافة إلى تقديم خدمة عملاء مميزة واستثنائية لضمان أن تكون كل زيارة لنا تجربة دافئة لا تُنسى.'
    },
    missionTitle: { en: 'Traditional Recipes', ar: 'الوصفات التقليدية' },
    missionText: { en: 'Baked in custom stone ovens to maintain authentic Middle Eastern flavors.', ar: 'مخبوزة بالكامل في أفران حجرية مخصصة للحفاظ على النكهة الشرقية الأصيلة.' },
    hospitalityTitle: { en: 'Saudi Hospitality', ar: 'كرم الضيافة السعودي' },
    hospitalityText: { en: 'Welcoming you with open arms and the scent of freshly brewed Arabic cardamom coffee.', ar: 'نستقبلكم دائماً بابتسامة دافئة ورائحة القهوة السعودية الفواحة بالهيل والزعفران.' },
    freshnessTitle: { en: 'Always Warm', ar: 'دافئ وطازج دائماً' },
    freshnessText: { en: 'We bake multiple times throughout the day, so you always receive warm bakes.', ar: 'نخبز عدة مرات طوال اليوم للتأكد من حصولك دائماً على مخبوزات طازجة تخرج من الفرن للتو.' },
    stats: [
      { num: '100%', label: { en: 'Fresh Daily', ar: 'طازج يومياً' } },
      { num: '30+', label: { en: 'Oven Masterpieces', ar: 'صنف فريد' } },
      { num: '10k+', label: { en: 'Riyadh Customers', ar: 'عميل سعيد في الرياض' } }
    ]
  };

  return (
    <section id="about" className="py-20 bg-[#F9F7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Images Grid */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3] border border-[#E8E2D6]"
              >
                <img
                  src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800"
                  alt="Dia Bakery Elegant Interior Cafe"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>
            
            <div className="col-span-4 flex items-end">
              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="rounded-2xl overflow-hidden shadow-lg aspect-square w-full border border-[#E8E2D6]"
              >
                <img
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=400"
                  alt="Freshly baked pastries"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>

            <div className="col-span-4">
              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl overflow-hidden shadow-lg aspect-square w-full border border-[#E8E2D6]"
              >
                <img
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=400"
                  alt="Fresh bread prep"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>

            <div className="col-span-8">
              <motion.div
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="rounded-2xl overflow-hidden shadow-lg aspect-[16/9] border border-[#E8E2D6]"
              >
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
                  alt="Oven baking freshly baked bread"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>
          </div>

          {/* Story Text Column */}
          <div className={`lg:col-span-6 flex flex-col justify-center text-center lg:text-start ${isRtl ? 'lg:text-right' : ''}`}>
            
            <span className="font-serif text-[#C5A059] font-semibold text-sm tracking-wider uppercase mb-3 block">
              {content.badge[lang]}
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3E2723] tracking-tight leading-tight mb-6">
              {content.title[lang]}
            </h2>

            <p className="font-sans text-[#3E2723]/90 leading-relaxed text-base mb-8">
              {content.paragraph[lang]}
            </p>

            {/* Structured Vibe Bullets */}
            <div className="space-y-6 mb-10 text-start">
              
              <div className={`flex gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-11 h-11 bg-[#F9F7F2] border border-[#E8E2D6] rounded-xl flex items-center justify-center text-[#C5A059]">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-[#3E2723]">{content.missionTitle[lang]}</h4>
                  <p className="font-sans text-xs text-[#3E2723]/80 mt-0.5">{content.missionText[lang]}</p>
                </div>
              </div>

              <div className={`flex gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-11 h-11 bg-rose-50 border border-rose-100 rounded-xl flex items-center justify-center text-rose-500">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-[#3E2723]">{content.hospitalityTitle[lang]}</h4>
                  <p className="font-sans text-xs text-[#3E2723]/80 mt-0.5">{content.hospitalityText[lang]}</p>
                </div>
              </div>

              <div className={`flex gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="flex-shrink-0 w-11 h-11 bg-amber-50 border border-amber-100 rounded-xl flex items-center justify-center text-amber-500">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-base text-[#3E2723]">{content.freshnessTitle[lang]}</h4>
                  <p className="font-sans text-xs text-[#3E2723]/80 mt-0.5">{content.freshnessText[lang]}</p>
                </div>
              </div>

            </div>

            {/* Quick stats counter */}
            <div className={`grid grid-cols-3 gap-4 border-t border-[#E8E2D6] pt-8 ${isRtl ? 'text-right' : 'text-left'}`}>
              {content.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#C5A059]">{stat.num}</span>
                  <span className="font-sans text-[11px] font-semibold text-[#3E2723]/80 uppercase mt-1">{stat.label[lang]}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
