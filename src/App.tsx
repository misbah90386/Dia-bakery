import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import BestSellers from './BestSellers';
import WhyChooseUs from './WhyChooseUs';
import Menu from './Menu';
import Gallery from './Gallery';
import Reviews from './Reviews';
import Contact from './Contact';
import CartModal from './CartModal';
import Footer from './Footer';
import { ArrowUp, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, Product } from './types';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Manage body direction and HTML lang tag dynamically
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Set class to change fonts globally if needed
    if (lang === 'ar') {
      document.body.className = 'font-arabic bg-[#FDFBF7] text-[#3E2723]';
    } else {
      document.body.className = 'font-sans bg-[#FDFBF7] text-[#3E2723]';
    }
  }, [lang]);

  // Handle scroll to top appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart operations
  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden">
      
      {/* Sticky Navigation bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main layout contents */}
      <main className="flex-grow">
        
        {/* Full-screen Hero Section */}
        <Hero lang={lang} />

        {/* About Us section */}
        <About lang={lang} />

        {/* Best Sellers Slider */}
        <BestSellers lang={lang} onAddToCart={handleAddToCart} />

        {/* Why Choose Dia Bakery */}
        <WhyChooseUs lang={lang} />

        {/* Interactive Menu with Filters and Search */}
        <Menu lang={lang} onAddToCart={handleAddToCart} />

        {/* Masonry Lightbox Gallery */}
        <Gallery lang={lang} />

        {/* Customer reviews testimonial feed */}
        <Reviews lang={lang} />

        {/* Contact Form, Address details & Google Maps */}
        <Contact lang={lang} />

      </main>

      {/* Cart Modal Slide-over Drawer */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        lang={lang}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Beautiful Footer */}
      <Footer lang={lang} />

      {/* Persistent floating elements: Scroll-to-top & quick cart shortcut */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`fixed bottom-6 z-30 flex flex-col gap-3 ${
              lang === 'ar' ? 'left-6' : 'right-6'
            }`}
          >
            {/* Quick floating cart button shortcut */}
            {cartCount > 0 && (
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-4 bg-[#C5A059] hover:bg-[#B5914B] text-white rounded-full shadow-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all flex items-center justify-center relative ring-4 ring-white"
              >
                <ShoppingBag className="w-5.5 h-5.5" />
                <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow ring-2 ring-white">
                  {cartCount}
                </span>
              </button>
            )}

            {/* Scroll-to-top button */}
            <button
              onClick={scrollToTop}
              className="p-4 bg-[#3E2723] hover:bg-[#4E342E] text-white rounded-full shadow-2xl cursor-pointer hover:scale-105 active:scale-95 transition-all flex items-center justify-center ring-4 ring-white"
            >
              <ArrowUp className="w-5.5 h-5.5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
