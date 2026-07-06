import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Send, Check, Mail, ChevronRight, ChevronLeft } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'ar';
}

export default function Footer({ lang }: FooterProps) {
  const isRtl = lang === 'ar';

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const content = {
    brandDesc: {
      en: 'Dia Bakery serves premium hot breads, flaky pastries, fresh croissants, fatayer, sandwiches, and salads prepared with love in Riyadh daily.',
      ar: 'يقدم مخبز ديا أشهى المخبوزات والخبز الحار، الكرواسون الهش، الفطاير اللذيذة، السندوتشات الطازجة، والسلطات المتنوعة المحضرة بكل حب يومياً بالرياض.'
    },
    quickLinks: { en: 'Quick Links', ar: 'روابط سريعة' },
    helpSupport: { en: 'Help & Support', ar: 'المساعدة والدعم' },
    newsletterTitle: { en: 'Subscribe to Our Newsletter', ar: 'اشترك في نشرتنا البريدية' },
    newsletterSub: {
      en: 'Join our neighborhood family to receive special morning offers, new menu item releases, and exclusive Riyadh deals.',
      ar: 'انضم لعائلة جيراننا لتصلك عروض الصباح الساخنة، إطلاقات المنتجات الجديدة والخصومات الحصرية بالرياض.'
    },
    newsletterPlaceholder: { en: 'Enter your email address...', ar: 'أدخل بريدك الإلكتروني هنا...' },
    subscribeCTA: { en: 'Subscribe', ar: 'اشترك الآن' },
    subscribedMsg: { en: 'Successfully subscribed! Welcome.', ar: 'تم الاشتراك بنجاح! مرحباً بك في عائلتنا.' },
    privacy: { en: 'Privacy Policy', ar: 'سياسة الخصوصية' },
    terms: { en: 'Terms & Conditions', ar: 'الشروط والأحكام' },
    faq: { en: 'FAQ', ar: 'الأسئلة الشائعة' },
    copyright: {
      en: '© 2026 Dia Bakery (مخابز ديا). All Rights Reserved.',
      ar: '© ٢٠٢٦ مخابز ديا (Dia Bakery). جميع الحقوق محفوظة.'
    },
    madeWith: { en: 'Made with traditional Saudi hospitality', ar: 'صُنع بكرم الضيافة السعودية الأصيلة' }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setErrorMsg(isRtl ? 'يرجى إدخال بريد إلكتروني صحيح' : 'Please enter a valid email address');
      setTimeout(() => setErrorMsg(''), 3000);
      return;
    }

    setIsSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  const menuItems = [
    { id: 'hero', label: { en: 'Home', ar: 'الرئيسية' } },
    { id: 'about', label: { en: 'About Us', ar: 'من نحن' } },
    { id: 'menu', label: { en: 'Our Menu', ar: 'قائمتنا' } },
    { id: 'why-choose-us', label: { en: 'Why Us', ar: 'لماذا ديا' } },
    { id: 'gallery', label: { en: 'Gallery', ar: 'المعرض' } },
    { id: 'reviews', label: { en: 'Reviews', ar: 'الآراء' } },
    { id: 'contact', label: { en: 'Contact', ar: 'اتصل بنا' } },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#3E2723] text-white/90 pt-16 pb-8 border-t border-[#E8E2D6]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12 pb-12 border-b border-white/10">
          
          {/* Brand Info (4 Columns) */}
          <div className={`md:col-span-4 text-start space-y-4 ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#C5A059] flex items-center gap-2">
              <span>✦</span>
              <span>{isRtl ? 'مخابز ديا' : 'Dia Bakery'}</span>
            </span>
            <p className="font-sans text-xs text-white/70 leading-relaxed max-w-sm">
              {content.brandDesc[lang]}
            </p>
            
            {/* Social Icons */}
            <div className={`flex gap-3 pt-2 ${isRtl ? 'justify-start md:flex-row-reverse' : 'justify-start'}`}>
              {['instagram', 'twitter', 'facebook', 'tiktok'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-8 h-8 rounded-full border border-white/20 hover:border-[#C5A059] hover:text-[#C5A059] flex items-center justify-center transition-colors text-white/80 cursor-pointer"
                >
                  <span className="font-sans text-[10px] uppercase font-bold tracking-tighter">
                    {social.substring(0, 2)}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (2 Columns) */}
          <div className={`md:col-span-2 text-start ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            <h4 className="font-serif text-sm font-extrabold text-[#C5A059] mb-5 uppercase tracking-wider">
              {content.quickLinks[lang]}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-white/85">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 cursor-pointer text-left"
                  >
                    {isRtl ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                    <span>{item.label[lang]}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support (2 Columns) */}
          <div className={`md:col-span-2 text-start ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            <h4 className="font-serif text-sm font-extrabold text-[#C5A059] mb-5 uppercase tracking-wider">
              {content.helpSupport[lang]}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-white/85">
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 cursor-pointer">
                  {isRtl ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                  <span>{content.faq[lang]}</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 cursor-pointer">
                  {isRtl ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                  <span>{content.privacy[lang]}</span>
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-[#C5A059] transition-colors flex items-center gap-1.5 cursor-pointer">
                  {isRtl ? <ChevronLeft className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
                  <span>{content.terms[lang]}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box (4 Columns) */}
          <div className={`md:col-span-4 text-start ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            <h4 className="font-serif text-sm font-extrabold text-[#C5A059] mb-4 uppercase tracking-wider">
              {content.newsletterTitle[lang]}
            </h4>
            <p className="font-sans text-xs text-white/70 leading-relaxed mb-4">
              {content.newsletterSub[lang]}
            </p>

            {/* Form */}
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex bg-white/5 border border-white/20 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#C5A059]">
                <div className="flex items-center px-3.5 text-white/40">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  placeholder={content.newsletterPlaceholder[lang]}
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className={`w-full py-2.5 bg-transparent border-none text-xs text-white placeholder-white/40 focus:outline-none ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                />
                <button
                  type="submit"
                  className="px-4.5 bg-[#C5A059] hover:bg-[#B5914B] text-white font-sans text-xs font-bold transition-all cursor-pointer flex items-center justify-center"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Status Message Display */}
              <AnimatePresence mode="wait">
                {isSubscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[11px] font-sans font-medium text-emerald-400 flex items-center gap-1"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>{content.subscribedMsg[lang]}</span>
                  </motion.p>
                )}
                {errorMsg && (
                  <motion.p
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-[11px] font-sans font-medium text-rose-400"
                  >
                    {errorMsg}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

        </div>

        {/* Lower Row / Copyright */}
        <div className={`flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 gap-4 pt-4 border-t border-white/5`}>
          <span>{content.copyright[lang]}</span>
          <div className="flex items-center gap-1.5 font-sans">
            <span>{content.madeWith[lang]}</span>
            <Heart className="w-3.5 h-3.5 text-[#C5A059] fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
}
