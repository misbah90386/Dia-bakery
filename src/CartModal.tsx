import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2, Plus, Minus, ShoppingBag, ShoppingCart, MessageSquare } from 'lucide-react';
import { CartItem } from './types';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ar';
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export default function CartModal({
  isOpen,
  onClose,
  lang,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}: CartModalProps) {
  const isRtl = lang === 'ar';
  const [checkoutType, setCheckoutType] = useState<'takeaway' | 'delivery'>('takeaway');

  const content = {
    cartTitle: { en: 'Your Freshly Picked Basket', ar: 'سلة مشترياتك الطازجة' },
    emptyCart: { en: 'Your basket is currently empty.', ar: 'سلتك فارغة حالياً، تصفح قائمتنا لملئها.' },
    subtotal: { en: 'Subtotal', ar: 'المجموع الفرعي' },
    total: { en: 'Total Price', ar: 'السعر الإجمالي' },
    currency: { en: 'SAR', ar: 'ر.س' },
    clearCart: { en: 'Clear Basket', ar: 'تفريغ السلة' },
    checkoutOption: { en: 'How would you like your order?', ar: 'كيف تفضل استلام طلبك؟' },
    takeaway: { en: 'Self Takeaway', ar: 'استلام من المخبز' },
    delivery: { en: 'Riyadh Delivery', ar: 'توصيل داخل الرياض' },
    checkoutCTA: { en: 'Send Order via WhatsApp', ar: 'إرسال الطلب للواتساب' },
    itemsLabel: { en: 'items', ar: 'منتجات' }
  };

  const totalBill = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    const targetNumber = '966530028344';
    
    // Construct preformatted message
    let message = '';
    
    if (lang === 'ar') {
      message += `*🍞 طلب جديد من مخابز ديا (Dia Bakery) 🍞*\n`;
      message += `-------------------------------------------\n`;
      message += `*طريقة الاستلام:* ${checkoutType === 'takeaway' ? 'استلام من المخبز (حي الربوة)' : 'توصيل داخل الرياض'}\n\n`;
      message += `*المنتجات المحددة:*\n`;
      cartItems.forEach((item, index) => {
        message += `${index + 1}. *${item.product.name.ar}* (الكمية: ${item.quantity}) - السعر: ${(item.product.price * item.quantity).toFixed(2)} ر.س\n`;
      });
      message += `\n-------------------------------------------\n`;
      message += `*الحساب الإجمالي:* *${totalBill.toFixed(2)} ر.س*\n\n`;
      message += `يرجى تأكيد وتجهيز الطلب للبدء في التحضير فوراً. شكراً لكم!`;
    } else {
      message += `*🍞 New Order from Dia Bakery 🍞*\n`;
      message += `-------------------------------------------\n`;
      message += `*Order Method:* ${checkoutType === 'takeaway' ? 'Self Takeaway (Ar Rabwah)' : 'Riyadh Delivery'}\n\n`;
      message += `*Selected Products:*\n`;
      cartItems.forEach((item, index) => {
        message += `${index + 1}. *${item.product.name.en}* (Qty: ${item.quantity}) - Price: ${(item.product.price * item.quantity).toFixed(2)} SAR\n`;
      });
      message += `\n-------------------------------------------\n`;
      message += `*Grand Total:* *${totalBill.toFixed(2)} SAR*\n\n`;
      message += `Please confirm and prepare the order. Thank you!`;
    }

    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black"
          />

          {/* Drawer Panel */}
          <motion.div
            initial={{ x: isRtl ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? '-100%' : '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className={`relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between z-10 border-l border-[#E8E2D6] ${
              isRtl ? 'left-auto right-0' : 'right-auto left-0'
            }`}
          >
            
            {/* Header */}
            <div className={`p-5 border-b border-[#E8E2D6] flex items-center justify-between bg-[#F9F7F2] ${isRtl ? 'flex-row-reverse' : ''}`}>
              <div className={`flex items-center gap-2.5 ${isRtl ? 'flex-row-reverse' : ''}`}>
                <ShoppingBag className="w-5 h-5 text-[#C5A059]" />
                <h2 className="font-serif text-lg font-bold text-[#3E2723]">
                  {content.cartTitle[lang]}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 hover:bg-[#E8E2D6] rounded-full text-[#3E2723] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable list area */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4">
              {cartItems.length > 0 ? (
                <>
                  <div className={`flex justify-end pb-2 border-b border-[#E8E2D6]/60 ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <button
                      onClick={onClearCart}
                      className="text-xs font-semibold text-[#3E2723]/70 hover:text-red-500 flex items-center gap-1 transition-colors cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{content.clearCart[lang]}</span>
                    </button>
                  </div>

                  {cartItems.map((item) => (
                    <div
                      key={item.product.id}
                      className={`flex gap-4 p-3 bg-[#F9F7F2] border border-[#E8E2D6]/60 rounded-xl items-center ${isRtl ? 'flex-row-reverse' : ''}`}
                    >
                      {/* Product Thumbnail */}
                      <img
                        src={item.product.image}
                        alt={item.product.name[lang]}
                        referrerPolicy="no-referrer"
                        className="w-16 h-16 object-cover rounded-lg border border-[#E8E2D6]"
                      />

                      {/* Content Area */}
                      <div className="flex-grow text-start">
                        <h4 className={`font-serif text-sm font-bold text-[#3E2723] ${isRtl ? 'text-right' : 'text-left'}`}>
                          {item.product.name[lang]}
                        </h4>
                        <span className={`font-sans text-xs text-[#C5A059] font-bold block mt-0.5 ${isRtl ? 'text-right' : 'text-left'}`}>
                          {item.product.price.toFixed(2)} {content.currency[lang]}
                        </span>

                        {/* Quantity Modifiers */}
                        <div className={`flex items-center gap-3 mt-2 ${isRtl ? 'flex-row-reverse justify-start' : 'justify-start'}`}>
                          <div className="flex items-center border border-[#E8E2D6] rounded-lg bg-white overflow-hidden">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-[#F9F7F2] text-[#3E2723] transition-colors cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2.5 font-sans text-xs font-bold text-[#3E2723]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-[#F9F7F2] text-[#3E2723] transition-colors cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="text-[#3E2723]/60 hover:text-red-500 p-1 rounded transition-colors cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center py-20 text-center text-[#3E2723]/60">
                  <div className="p-4 bg-[#F9F7F2] rounded-full border border-[#E8E2D6] mb-4">
                    <ShoppingCart className="w-10 h-10 text-[#C5A059]/60" />
                  </div>
                  <p className="font-sans text-sm font-semibold max-w-[200px]">
                    {content.emptyCart[lang]}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom Checkout Controls */}
            {cartItems.length > 0 && (
              <div className="p-5 border-t border-[#E8E2D6] bg-[#F9F7F2] space-y-4">
                
                {/* Takeaway / Delivery Switcher */}
                <div className="space-y-2">
                  <label className={`block text-xs font-bold text-[#3E2723] font-sans ${isRtl ? 'text-right' : 'text-left'}`}>
                    {content.checkoutOption[lang]}
                  </label>
                  <div className={`grid grid-cols-2 gap-2 p-1 bg-white border border-[#E8E2D6] rounded-xl ${isRtl ? 'flex-row-reverse' : ''}`}>
                    <button
                      onClick={() => setCheckoutType('takeaway')}
                      className={`py-2 text-xs font-bold font-sans rounded-lg transition-all duration-200 cursor-pointer ${
                        checkoutType === 'takeaway'
                          ? 'bg-[#C5A059] text-white shadow-sm'
                          : 'text-[#3E2723] hover:bg-[#F9F7F2]'
                      }`}
                    >
                      {content.takeaway[lang]}
                    </button>
                    <button
                      onClick={() => setCheckoutType('delivery')}
                      className={`py-2 text-xs font-bold font-sans rounded-lg transition-all duration-200 cursor-pointer ${
                        checkoutType === 'delivery'
                          ? 'bg-[#C5A059] text-white shadow-sm'
                          : 'text-[#3E2723] hover:bg-[#F9F7F2]'
                      }`}
                    >
                      {content.delivery[lang]}
                    </button>
                  </div>
                </div>

                {/* Subtotal Bill summary */}
                <div className={`flex justify-between items-center pt-2 ${isRtl ? 'flex-row-reverse' : ''}`}>
                  <span className="font-sans text-sm font-semibold text-[#3E2723]">
                    {content.total[lang]}
                  </span>
                  <span className="font-sans text-lg font-extrabold text-[#C5A059]">
                    {totalBill.toFixed(2)} {content.currency[lang]}
                  </span>
                </div>

                {/* Order Submit CTA Button */}
                <button
                  onClick={handleWhatsAppCheckout}
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer transform active:scale-95"
                >
                  <MessageSquare className="w-4.5 h-4.5 fill-current text-white" />
                  <span>{content.checkoutCTA[lang]}</span>
                </button>

              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
