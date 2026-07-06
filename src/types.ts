export interface BilingualText {
  en: string;
  ar: string;
}

export interface Product {
  id: string;
  name: BilingualText;
  description: BilingualText;
  price: number; // in SAR
  category: string; // e.g. 'bread', 'croissants', 'fatayer', 'pastries', 'sandwiches', 'salads', 'desserts', 'drinks'
  image: string;
  isBestSeller?: boolean;
  calories?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Review {
  id: string;
  name: BilingualText;
  role: BilingualText;
  comment: BilingualText;
  rating: number;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: BilingualText;
  category: string; // 'interior' | 'products'
  image: string;
}

export interface FAQItem {
  question: BilingualText;
  answer: BilingualText;
}
