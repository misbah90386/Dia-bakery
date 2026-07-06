import React, { useState } from 'react';
import { ShoppingBag, Globe, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
  cartCount: number;
  onOpenCart: () => void;
}

export default function Navbar({ lang, setLang, cartCount, onOpenCart }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
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
    setIsOpen(false);
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

  const isRtl = lang === 'ar';

  return (
    <nav className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#E8E2D6] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center" onClick={() => scrollToSection('hero')}>
            <span className="font-serif text-2xl font-bold tracking-tight text-[#3E2723] flex items-center gap-2">
              <span className="text-[#C5A059]">✦</span>
              {isRtl ? (
                <>
                  <span className="font-sans">مخابز ديا</span>
                  <span className="text-xs font-serif text-[#C5A059] tracking-widest hidden sm:inline ml-1 uppercase">Dia Bakery</span>
                </>
              ) : (
                <>
                  <span>Dia Bakery</span>
                  <span className="text-sm font-sans text-[#C5A059] hidden sm:inline ml-1">مخابز ديا</span>
                </>
              )}
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <div className={`flex items-center ${isRtl ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="font-sans text-sm font-medium text-[#3E2723] hover:text-[#C5A059] transition-colors duration-200 cursor-pointer"
                >
                  {item.label[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side Controls */}
          <div className={`hidden md:flex items-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#3E2723] bg-[#FDFBF7] hover:bg-[#E8E2D6] border border-[#E8E2D6] rounded-full transition-all duration-200 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 text-[#3E2723] hover:text-[#C5A059] bg-[#FDFBF7] border border-[#E8E2D6] rounded-full hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#C5A059] text-[10px] font-bold text-white shadow-sm ring-2 ring-[#FDFBF7] animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu & Cart Trigger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Cart Button for Mobile */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#3E2723] bg-[#FDFBF7] border border-[#E8E2D6] rounded-full cursor-pointer"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#C5A059] text-[9px] font-bold text-white ring-2 ring-[#FDFBF7]">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Language switch quick button */}
            <button
              onClick={toggleLanguage}
              className="p-2 text-xs font-bold text-[#3E2723] bg-[#FDFBF7] border border-[#E8E2D6] rounded-full cursor-pointer"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>

            {/* Hamburguer menu */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#3E2723] bg-[#FDFBF7] border border-[#E8E2D6] rounded-full cursor-pointer"
            >
              {isOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#FDFBF7] border-t border-[#E8E2D6]"
          >
            <div className="px-4 pt-3 pb-6 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full py-2.5 text-base font-semibold text-[#3E2723] border-b border-[#FDFBF7] hover:border-[#E8E2D6] cursor-pointer ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                >
                  {item.label[lang]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
