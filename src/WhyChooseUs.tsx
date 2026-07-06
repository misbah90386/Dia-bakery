import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldCheck, Heart, Sparkles, Smile, Users, Coins, Utensils } from 'lucide-react';

interface WhyChooseUsProps {
  lang: 'en' | 'ar';
}

export default function WhyChooseUs({ lang }: WhyChooseUsProps) {
  const isRtl = lang === 'ar';

  const content = {
    badge: { en: 'Our Promise', ar: 'سر تميزنا وعراقتنا' },
    title: { en: 'Why Choose Dia Bakery', ar: 'لماذا يختار عملاؤنا مخابز ديا؟' },
    subtitle: {
      en: 'We strive to deliver unforgettable moments by keeping our standards premium and authentic.',
      ar: 'نحرص دوماً على تقديم تجربة استثنائية تفوق توقعاتكم من خلال الحفاظ على معايير الجودة العالية.'
    }
  };

  const features = [
    {
      icon: Clock,
      title: { en: 'Freshly Baked Daily', ar: 'طازج يومياً' },
      desc: { en: 'Baked in our stone ovens every morning, so your bread is always perfectly fresh.', ar: 'تُخبز منتجاتنا طازجة في أفراننا الحجرية كل صباح لتصل إليكم بأفضل طعم وقوام.' }
    },
    {
      icon: ShieldCheck,
      title: { en: 'Premium Ingredients', ar: 'مكونات طبيعية فاخرة' },
      desc: { en: 'We select non-GMO organic flour, premium European butter, and local fresh herbs.', ar: 'نختار أجود أنواع الدقيق العضوي والزبدة الأوروبية الفاخرة والأعشاب المحلية الطازجة.' }
    },
    {
      icon: Sparkles,
      title: { en: 'Authentic Recipes', ar: 'وصفات تقليدية أصيلة' },
      desc: { en: 'Generations-tested recipes reflecting traditional Saudi warmth and European baking arts.', ar: 'وصفات متوارثة تجمع بين أصالة المذاق السعودي وعراقة فنون المخبوزات الأوروبية.' }
    },
    {
      icon: Smile,
      title: { en: 'Friendly Staff', ar: 'طاقم عمل ودود' },
      desc: { en: 'Welcoming you with authentic Saudi hospitality and helpful customer support.', ar: 'نستقبلكم بكرم الضيافة السعودية الأصيلة ونقدم لكم المساعدة بكل حب ورحابة صدر.' }
    },
    {
      icon: Coins,
      title: { en: 'Affordable Prices', ar: 'أسعار مناسبة للجميع' },
      desc: { en: 'Luxury quality at reasonable prices, so you can enjoy gourmet bakes daily.', ar: 'نقدم الجودة الفاخرة بأسعار مناسبة ومدروسة لتستمتع بأشهى المخبوزات يومياً دون قلق.' }
    },
    {
      icon: Clock,
      title: { en: 'Fast Service', ar: 'خدمة سريعة ومميزة' },
      desc: { en: 'Quick takeaway packaging and prompt support to save your precious time.', ar: 'تعبئة وتغليف سريع وسلس لطلبات الاستلام لضمان الحفاظ على وقتك الثمين.' }
    },
    {
      icon: Utensils,
      title: { en: 'Hygienic Kitchen', ar: 'مطبخ معقم ونظيف' },
      desc: { en: 'Strict food safety standards, sterile workspaces, and daily sanitization protocols.', ar: 'نطبق أعلى معايير السلامة الغذائية العالمية ونحرص على التعقيم والتنظيف الدوري.' }
    },
    {
      icon: Users,
      title: { en: 'Family Friendly', ar: 'بيئة عائلية دافئة' },
      desc: { en: 'A cozy neighborhood spot designed for all generations to share memories over treats.', ar: 'مكان دافئ ومريح يناسب جميع أفراد العائلة لمشاركة أسعد الأوقات وتناول ألذ الحلويات.' }
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={idx}
                whileInView={{ opacity: [0, 1], y: [20, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-[#E8E2D6] p-6 hover:shadow-lg transition-all duration-300 hover:border-[#C5A059] text-start flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 bg-[#F9F7F2] border border-[#E8E2D6] text-[#C5A059] rounded-xl flex items-center justify-center mb-5 flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-sans font-bold text-base text-[#3E2723] mb-2 tracking-tight">
                    {feat.title[lang]}
                  </h3>
                  <p className="font-sans text-xs text-[#3E2723]/80 leading-relaxed">
                    {feat.desc[lang]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Daily Fresh Products - Special morning showcase */}
        <div className="mt-20 bg-gradient-to-br from-[#3E2723] to-[#271512] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-2xl -mr-16 -mt-16"></div>
          
          <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isRtl ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`lg:col-span-6 text-center lg:text-start ${isRtl ? 'lg:text-right' : ''}`}>
              <span className="font-serif text-[#C5A059] text-xs font-semibold tracking-widest uppercase block mb-3">
                {isRtl ? 'مخبوزات الصباح الدافئة' : 'Baked Fresh Every Morning'}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                {isRtl ? 'رائحة الفرن الحقيقي تبدأ من السادسة صباحاً' : 'The Real Stone Oven Experience'}
              </h3>
              <p className="font-sans text-sm text-white/80 leading-relaxed mb-6 max-w-lg">
                {isRtl
                  ? 'يومياً، في الساعات الأولى من الفجر، يبدأ خبراؤنا بعجن وتحضير الفطاير والخبز العربي والكرواسون الساخن لتستمتع بها مقرمشة ودافئة في بداية يومك.'
                  : 'Our skilled bakers start preparing and kneading artisan flatbreads, flaky croissants, and fresh fatayer in the early dawn hours, so you start your morning with the most heavenly aromas.'
                }
              </p>
              
              {/* Checklist */}
              <div className="grid grid-cols-2 gap-4 text-start font-sans text-xs font-medium text-white/90">
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059]">✦</span>
                  <span>{isRtl ? 'خبز عربي مفرود' : 'Fresh Arabic Bread'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059]">✦</span>
                  <span>{isRtl ? 'كرواسون زبدة فرنسية' : 'Butter Croissants'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059]">✦</span>
                  <span>{isRtl ? 'مناقيش وفطاير ساخنة' : 'Fresh Fatayer'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#C5A059]">✦</span>
                  <span>{isRtl ? 'معجنات حلوة يومية' : 'Sweet Pastries'}</span>
                </div>
              </div>
            </div>

            {/* Showcase Visual */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative max-w-md w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border-2 border-white/10">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800"
                  alt="Daily fresh baked products"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
