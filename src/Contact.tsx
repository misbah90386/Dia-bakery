import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  lang: 'en' | 'ar';
}

export default function Contact({ lang }: ContactProps) {
  const isRtl = lang === 'ar';

  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const content = {
    badge: { en: 'Find & Reach Us', ar: 'تواصل معنا وزرنا' },
    title: { en: 'We Would Love to Hear From You', ar: 'نسعد دائماً بخدمتكم وتواصلكم' },
    subtitle: {
      en: 'Drop by for a warm loaf, call us for quick takeaway orders, or send us a message below.',
      ar: 'تفضل بزيارتنا للاستمتاع بأطيب المخبوزات دافئة، أو اتصل بنا لتجهيز طلبك، أو أرسل لنا رسالة مباشرة.'
    },
    bizName: { en: 'Dia Bakery (مخابز ديا)', ar: 'مخابز ديا (Dia Bakery)' },
    addressLabel: { en: 'Address', ar: 'العنوان' },
    addressVal: {
      en: 'Prince Mouteeb Ibn Abd Al Aziz Road, Ar Rabwah, Riyadh 12822, Saudi Arabia',
      ar: 'طريق الأمير متعب بن عبدالعزيز، حي الربوة، الرياض ١٢٨٢٢، المملكة العربية السعودية'
    },
    phoneLabel: { en: 'Phone Support', ar: 'الاتصال الهاتفي' },
    phoneVal: '053 002 8344',
    whatsappCTA: { en: 'WhatsApp Inquiry', ar: 'استفسار سريع بالواتساب' },
    hoursLabel: { en: 'Business Hours', ar: 'ساعات العمل' },
    hoursVal: {
      en: 'Open Daily: 6:00 AM - 11:00 PM',
      ar: 'يومياً: من الساعة ٦:٠٠ صباحاً وحتى ١١:٠٠ مساءً'
    },
    formTitle: { en: 'Send a Message', ar: 'أرسل لنا رسالة مباشرة' },
    formName: { en: 'Full Name', ar: 'الاسم الكامل' },
    formPhone: { en: 'Phone Number', ar: 'رقم الجوال' },
    formEmail: { en: 'Email Address', ar: 'البريد الإلكتروني' },
    formMessage: { en: 'Your Message', ar: 'نص الرسالة' },
    formSubmit: { en: 'Send Message', ar: 'إرسال الرسالة الآن' },
    formSending: { en: 'Sending...', ar: 'جاري الإرسال...' },
    formSuccess: {
      en: 'Thank you! Your message has been sent successfully. We will contact you shortly.',
      ar: 'شكراً لك! تم إرسال رسالتك بنجاح. سنقوم بالتواصل معك في أقرب وقت ممكن.'
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', phone: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const handleWhatsApp = () => {
    const text = isRtl
      ? 'مرحباً مخابز ديا، أود الاستفسار عن المخبوزات والطلبات.'
      : 'Hello Dia Bakery, I have an inquiry about menu options and ordering.';
    window.open(`https://wa.me/966530028344?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-[#F9F7F2]">
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

        {/* Form, details and map grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details column (5 columns) */}
          <div className={`lg:col-span-5 space-y-6 ${isRtl ? 'lg:order-2' : ''}`}>
            
            <div className="bg-white border border-[#E8E2D6] rounded-3xl p-8 shadow-sm text-start space-y-6">
              
              <h3 className="font-serif text-xl font-bold text-[#3E2723] border-b border-[#E8E2D6]/60 pb-4">
                {content.bizName[lang]}
              </h3>

              {/* Address */}
              <div className={`flex gap-4 items-start ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-3 bg-amber-50 rounded-xl text-amber-500 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#3E2723]">
                    {content.addressLabel[lang]}
                  </h4>
                  <p className="font-sans text-xs text-[#3E2723]/80 leading-relaxed mt-1">
                    {content.addressVal[lang]}
                  </p>
                </div>
              </div>

              {/* Phone / Contact */}
              <div className={`flex gap-4 items-start ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-3 bg-emerald-50 rounded-xl text-emerald-500 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#3E2723]">
                    {content.phoneLabel[lang]}
                  </h4>
                  <a
                    href={`tel:${content.phoneVal}`}
                    className="font-sans text-sm font-bold text-[#C5A059] block mt-1 hover:underline"
                  >
                    {content.phoneVal}
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className={`flex gap-4 items-start ${isRtl ? 'flex-row-reverse' : ''}`}>
                <div className="p-3 bg-blue-50 rounded-xl text-blue-500 flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#3E2723]">
                    {content.hoursLabel[lang]}
                  </h4>
                  <p className="font-sans text-xs text-[#3E2723]/80 mt-1">
                    {content.hoursVal[lang]}
                  </p>
                </div>
              </div>

              {/* WhatsApp Quick CTA */}
              <div className="pt-4 border-t border-[#E8E2D6]/60">
                <button
                  onClick={handleWhatsApp}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-sans text-xs sm:text-sm font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-current text-white" />
                  <span>{content.whatsappCTA[lang]}</span>
                </button>
              </div>

            </div>

            {/* Google Map Box */}
            <div className="bg-white border border-[#E8E2D6] rounded-3xl p-3 shadow-sm h-80 overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.3216896228385!2d46.7454238753239!3d24.681491778044738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f06764bb7cf89%3A0xe54df6373b88ea28!2sPrince%20Mutaib%20Bin%20Abdulaziz%20Rd%2C%20Ar%20Rabwah%2C%20Riyadh!5e0!3m2!1sen!2ssa!4v1710000000000!5m2!1sen!2ssa"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.25rem' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dia Bakery Location Riyadh Map"
              ></iframe>
            </div>

          </div>

          {/* Form column (7 columns) */}
          <div className={`lg:col-span-7 bg-white border border-[#E8E2D6] rounded-3xl p-8 sm:p-10 shadow-sm text-start ${isRtl ? 'lg:order-1' : ''}`}>
            
            <h3 className="font-serif text-xl font-bold text-[#3E2723] mb-6">
              {content.formTitle[lang]}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row for Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-[#3E2723] mb-1.5 font-sans">
                    {content.formName[lang]} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-[#F9F7F2] border border-[#E8E2D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#3E2723] ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#3E2723] mb-1.5 font-sans">
                    {content.formPhone[lang]} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2.5 bg-[#F9F7F2] border border-[#E8E2D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#3E2723] ${
                      isRtl ? 'text-right' : 'text-left'
                    }`}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-bold text-[#3E2723] mb-1.5 font-sans">
                  {content.formEmail[lang]}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-[#F9F7F2] border border-[#E8E2D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#3E2723] ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-[#3E2723] mb-1.5 font-sans">
                  {content.formMessage[lang]} <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 bg-[#F9F7F2] border border-[#E8E2D6] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] text-[#3E2723] resize-none ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                />
              </div>

              {/* Submit Success / Loading wrapper */}
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-sans font-semibold rounded-xl flex items-center gap-2.5"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>{content.formSuccess[lang]}</span>
                  </motion.div>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 bg-[#C5A059] hover:bg-[#B5914B] text-white font-sans font-bold text-sm rounded-xl transition-all duration-200 shadow hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? content.formSending[lang] : content.formSubmit[lang]}</span>
                  </button>
                )}
              </AnimatePresence>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
