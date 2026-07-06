import { Product, Review, GalleryItem, FAQItem } from './types';

export const CATEGORIES = [
  { id: 'all', name: { en: 'All Items', ar: 'الكل' } },
  { id: 'bread', name: { en: 'Fresh Bread', ar: 'خبز طازج' } },
  { id: 'croissants', name: { en: 'Croissants', ar: 'كرواسون' } },
  { id: 'fatayer', name: { en: 'Fatayer', ar: 'فطاير' } },
  { id: 'pastries', name: { en: 'Pastries', ar: 'معجنات' } },
  { id: 'sandwiches', name: { en: 'Sandwiches', ar: 'سندوتشات' } },
  { id: 'salads', name: { en: 'Salads', ar: 'سلطات' } },
  { id: 'desserts', name: { en: 'Desserts', ar: 'حلويات' } },
  { id: 'drinks', name: { en: 'Drinks', ar: 'مشروبات' } },
];

export const PRODUCTS: Product[] = [
  // --- FRESH BREAD ---
  {
    id: 'arabic-bread',
    name: { en: 'Arabic Bread', ar: 'خبز عربي' },
    description: { en: 'Traditional soft, stone-baked pita flatbread. Made fresh daily.', ar: 'خبز مفرود تقليدي، مخبوز على الحجر طازج يومياً.' },
    price: 3.00,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    calories: 180
  },
  {
    id: 'white-bread',
    name: { en: 'White Bread Loaf', ar: 'خبز أبيض (صامولي/توست)' },
    description: { en: 'Soft and fluffy white bread loaf, perfect for your favorite sandwiches.', ar: 'توست أبيض طري وهش، مثالي لسندوتشاتك المفضلة.' },
    price: 5.00,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
    calories: 220
  },
  {
    id: 'brown-bread',
    name: { en: 'Brown Bread Loaf', ar: 'خبز أسمر (توست نخالة)' },
    description: { en: 'Nutritious whole wheat loaf made with high-fiber grains.', ar: 'توست بر مغذي ومصنوع من حبوب القمح الكاملة عالية الألياف.' },
    price: 6.00,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
    calories: 190
  },
  {
    id: 'sesame-bread',
    name: { en: 'Sesame Bread', ar: 'خبز بالسمسم' },
    description: { en: 'Golden-baked traditional bread covered in rich roasted sesame seeds.', ar: 'خبز تقليدي مغطى ببذور السمسم الذهبية المحمصة.' },
    price: 4.50,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=600',
    calories: 210
  },
  {
    id: 'milk-bread',
    name: { en: 'Milk Bread', ar: 'خبز الحليب' },
    description: { en: 'Incredibly pillowy, buttery milk buns baked to a perfect light gold.', ar: 'خبز حليب ناعم كالقطن وبنكهة الزبدة الغنية، مخبوز بشكل مثالي.' },
    price: 7.00,
    category: 'bread',
    image: 'https://images.unsplash.com/photo-1589415081126-16002f6259f2?auto=format&fit=crop&q=80&w=600',
    calories: 240
  },

  // --- CROISSANTS ---
  {
    id: 'butter-croissant',
    name: { en: 'Butter Croissant', ar: 'كرواسون زبدة' },
    description: { en: 'Classic flaky, laminated French butter croissant with a golden crust.', ar: 'كرواسون فرنسي كلاسيكي بطبقات هشة ومقرمشة وغني بالزبدة الطبيعية.' },
    price: 8.00,
    category: 'croissants',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    calories: 280
  },
  {
    id: 'cheese-croissant',
    name: { en: 'Cheese Croissant', ar: 'كرواسون جبنة' },
    description: { en: 'Golden flaky croissant stuffed with melted, premium white Cheddar cheese.', ar: 'كرواسون ذهبي مقرمش محشو بجبنة الشيدر البيضاء الفاخرة الذائبة.' },
    price: 10.00,
    category: 'croissants',
    image: 'https://images.unsplash.com/photo-1620921556328-1a9300dce76d?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    calories: 340
  },
  {
    id: 'chocolate-croissant',
    name: { en: 'Chocolate Croissant', ar: 'كرواسون شوكولاتة' },
    description: { en: 'Decadent Pain au Chocolat with double bars of rich Belgian dark chocolate.', ar: 'كرواسون هباري فرنسي محشو بقطعتين من الشوكولاتة البلجيكية الداكنة واللذيذة.' },
    price: 11.00,
    category: 'croissants',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600',
    calories: 360
  },
  {
    id: 'zaatar-croissant',
    name: { en: 'Zaatar Croissant', ar: 'كرواسون زعتر' },
    description: { en: 'Premium butter croissant topped and filled with aromatic wild thyme (Zaatar).', ar: 'كرواسون زبدة فاخر ممزوج ومغطى بالزعتر البري العطري والسمسم.' },
    price: 9.00,
    category: 'croissants',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=600',
    calories: 310
  },

  // --- FATAYER ---
  {
    id: 'cheese-fatayer',
    name: { en: 'Cheese Fatayer', ar: 'فطاير جبن' },
    description: { en: 'Soft baked boat pastry filled with a rich blend of Halloumi & Akkawi cheeses.', ar: 'فطيرة مخبوزة طرية ومحشوة بمزيج غني من جبنة الحلوم والعكاوي.' },
    price: 6.00,
    category: 'fatayer',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    calories: 220
  },
  {
    id: 'spinach-fatayer',
    name: { en: 'Spinach Fatayer', ar: 'فطاير سبانخ' },
    description: { en: 'Tangy Mediterranean spinach mix with sumac, onions, and fresh lemon juice.', ar: 'فطيرة سبانخ متبلة بالسماق، البصل وعصير الليمون الطازج على الطريقة المتوسطية.' },
    price: 5.50,
    category: 'fatayer',
    image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?auto=format&fit=crop&q=80&w=600',
    calories: 170
  },
  {
    id: 'meat-fatayer',
    name: { en: 'Meat Fatayer (Sfiha)', ar: 'فطاير لحم (صفيحة)' },
    description: { en: 'Crispy dough baked with finely minced seasoned local lamb, tomatoes, and pine nuts.', ar: 'عجين مقرمش مخبوز باللحم البلدي المفروم والمتبل مع الطماطم والصنوبر.' },
    price: 8.00,
    category: 'fatayer',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600',
    calories: 290
  },
  {
    id: 'zaatar-fatayer',
    name: { en: 'Zaatar Fatayer (Manakish)', ar: 'فطاير زعتر (مناقيش)' },
    description: { en: 'Traditional flatbread spread with premium olive oil and local thyme blend.', ar: 'فطيرة مناقيش تقليدية مفرودة بزيت الزيتون البكر والزعتر الفاخر.' },
    price: 5.00,
    category: 'fatayer',
    image: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    calories: 260
  },

  // --- PASTRIES ---
  {
    id: 'danish-pastries',
    name: { en: 'Danish Pastry', ar: 'دانش الفواكه' },
    description: { en: 'Light flaky pastry with rich custard and fresh glazed seasonal berries.', ar: 'معجنات هشة وخفيفة محشوة بالكاسترد الغني ومغطاة بقطع التوت الطازج اللامع.' },
    price: 12.00,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600',
    calories: 290
  },
  {
    id: 'cinnamon-rolls',
    name: { en: 'Cinnamon Roll', ar: 'رول القرفة' },
    description: { en: 'Spiced cinnamon-swirled soft bun topped with a velvety cream cheese glaze.', ar: 'لفافة قرفة طرية غنية بالقرفة والتوابل، مغطاة بكريمة الجبن المخفوقة الناعمة.' },
    price: 13.00,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&q=80&w=600',
    calories: 390
  },
  {
    id: 'puff-pastries',
    name: { en: 'Puff Pastries', ar: 'باف باستري بالكريمة' },
    description: { en: 'Crispy, airy puff sheets baked and filled with sweet whipped cream.', ar: 'طبقات باف باستري مقرمشة وخفيفة، مخبوزة ومحشوة بالكريمة المخفوقة اللطيفة.' },
    price: 10.00,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=600',
    calories: 320
  },
  {
    id: 'sweet-pastries',
    name: { en: 'Assorted Sweet Pastries', ar: 'معجنات حلوة مشكلة' },
    description: { en: 'A curated variety of mini sweet bites including tarts and cream horns.', ar: 'تشكيلة مختارة من الحلويات والمعجنات الصغيرة اللذيذة كالتارت والقرون بالكريمة.' },
    price: 15.00,
    category: 'pastries',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&q=80&w=600',
    calories: 340
  },

  // --- SANDWICHES ---
  {
    id: 'chicken-sandwich',
    name: { en: 'Chicken Breast Sandwich', ar: 'سندوتش صدور دجاج' },
    description: { en: 'Grilled local chicken breast, fresh avocado, lettuce, and house herb mayo on baked sourdough.', ar: 'صدر دجاج محلي مشوي، أفوكادو طازج، خس، ومايونيز الأعشاب الخاص في خبز الساوردو.' },
    price: 18.00,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1521302200778-33500795e128?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    calories: 420
  },
  {
    id: 'turkey-sandwich',
    name: { en: 'Smoked Turkey Sandwich', ar: 'سندوتش تركي مدخن' },
    description: { en: 'Sliced smoked turkey breast with Swiss cheese, tomato, and Dijon on fresh baguette.', ar: 'شرائح تركي (ديك رومي) مدخن مع جبنة سويسرية، طماطم، وخردل ديجون في باجيت طازج.' },
    price: 19.00,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1521390188846-e2a3a97453a0?auto=format&fit=crop&q=80&w=600',
    calories: 380
  },
  {
    id: 'cheese-sandwich',
    name: { en: 'Halloumi & Mint Sandwich', ar: 'سندوتش حلوم بالنعناع' },
    description: { en: 'Grilled Halloumi cheese with fresh mint leaves, cucumber, and olive tapenade.', ar: 'جبنة حلوم مشوية مع أوراق النعناع الطازج، الخيار، ومعجون الزيتون في خبز ريفي.' },
    price: 16.00,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80&w=600',
    calories: 390
  },
  {
    id: 'club-sandwich',
    name: { en: 'Dia Club Sandwich', ar: 'كلوب سندوتش ديا' },
    description: { en: 'Triple-decker bread with grilled chicken, smoked beef bacon, boiled eggs, cheese, and tomatoes.', ar: 'سندوتش ثلاثي الطبقات مع الدجاج المشوي، بيكون البقر المدخن، البيض المسلوق، الجبن والطماطم.' },
    price: 22.00,
    category: 'sandwiches',
    image: 'https://images.unsplash.com/photo-1567234669003-dce7a7a88821?auto=format&fit=crop&q=80&w=600',
    calories: 540
  },

  // --- SALADS ---
  {
    id: 'caesar-salad',
    name: { en: 'Classic Caesar Salad', ar: 'سلطة سيزر الكلاسيكية' },
    description: { en: 'Crisp romaine lettuce, sourdough croutons, parmesan cheese shavings, and creamy Caesar dressing.', ar: 'خس روماني مقرمش، قطع خبز محمص ساوردو، رقائق جبن بارميزان مع صلصة السيزر الكريمية.' },
    price: 16.00,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    calories: 290
  },
  {
    id: 'greek-salad',
    name: { en: 'Greek Feta Salad', ar: 'سلطة يونانية بالفيتا' },
    description: { en: 'Juicy tomatoes, crisp cucumbers, red onion, Kalamata olives, and creamy block of Feta.', ar: 'طماطم حلوة، خيار مقرمش، بصل أحمر، زيتون كالاماتا، مكعبات من جبنة الفيتا الغنية مع زيت الزيتون.' },
    price: 15.00,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=600',
    calories: 210
  },
  {
    id: 'garden-salad',
    name: { en: 'Fresh Garden Salad', ar: 'سلطة البستان الخضراء' },
    description: { en: 'Mixed baby greens, cherry tomatoes, carrots, and refreshing lemon-pomegranate dressing.', ar: 'أوراق خضراء مشكلة، طماطم كرزية، جزر، مع تتبيلة الليمون ودبس الرمان المنعشة.' },
    price: 14.00,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=600',
    calories: 130
  },
  {
    id: 'chicken-salad',
    name: { en: 'Honey-Mustard Chicken Salad', ar: 'سلطة الدجاج بالخردل والعسل' },
    description: { en: 'Tender sliced chicken breast over mixed greens, toasted walnuts, and honey mustard.', ar: 'شرائح صدر دجاج طرية فوق تشكيلة من الخضار الورقية، جوز محمص، وتتبيلة الخردل بالعسل دافئة.' },
    price: 18.00,
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600',
    calories: 360
  },

  // --- DESSERTS ---
  {
    id: 'cheesecake',
    name: { en: 'New York Cheesecake', ar: 'نيويورك تشيز كيك' },
    description: { en: 'Rich, velvet-smooth baked cheesecake on a crunchy digestive biscuit crust.', ar: 'تشيز كيك مخبوز غني وناعم الملمس، يرتكز على طبقة بسكويت دايجستف مقرمشة.' },
    price: 15.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1524351199679-46cddf530c04?auto=format&fit=crop&q=80&w=600',
    calories: 450
  },
  {
    id: 'chocolate-cake',
    name: { en: 'Fudge Chocolate Cake', ar: 'كيكة فادج الشوكولاتة' },
    description: { en: 'Layers of moist dark chocolate sponge and rich Belgian chocolate fudge frosting.', ar: 'طبقات من إسفنج الشوكولاتة الداكنة الطرية مع كريمة فادج الشوكولاتة البلجيكية الغنية.' },
    price: 17.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    calories: 490
  },
  {
    id: 'brownies',
    name: { en: 'Walnut Chocolate Brownie', ar: 'براوني الشوكولاتة بالجوز' },
    description: { en: 'Chewy, intensely fudgy dark chocolate brownie packed with toasted walnuts.', ar: 'براوني شوكولاتة داكنة غنية متبلة بالجوز المحمص، طرية ومتماسكة بشكل رائع.' },
    price: 10.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600',
    calories: 320
  },
  {
    id: 'cookies',
    name: { en: 'Belgian Chocolate Chip Cookie', ar: 'كوكيز الشوكولاتة البلجيكية' },
    description: { en: 'Giant freshly-baked chewy cookie loaded with melting milk chocolate pools.', ar: 'قطعة كوكيز عملاقة ومقرمشة من الأطراف، طرية من المنتصف وغنية بقطع شوكولاتة الحليب الذائبة.' },
    price: 8.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=600',
    isBestSeller: true,
    calories: 270
  },
  {
    id: 'muffins',
    name: { en: 'Blueberry Streusel Muffin', ar: 'مافن التوت الأزرق' },
    description: { en: 'Plump moist muffin packed with wild blueberries and a buttery sweet crumble top.', ar: 'مافن طري غني بحبات التوت البري ومنتهي بطبقة كرامبل السكر والزبدة المقرمشة.' },
    price: 9.00,
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?auto=format&fit=crop&q=80&w=600',
    calories: 290
  },

  // --- DRINKS ---
  {
    id: 'coffee',
    name: { en: 'Specialty Latte', ar: 'لاتيه مختص' },
    description: { en: 'Double shot of locally roasted Saudi-blend espresso combined with silky steamed milk.', ar: 'جرعة مزدوجة من إسبريسو حبوب البن المحمصة محلياً مع حليب ناعم ومبخر.' },
    price: 14.00,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600',
    calories: 140
  },
  {
    id: 'tea',
    name: { en: 'Arabic Mint Tea', ar: 'شاي أحمر بالنعناع' },
    description: { en: 'Brewed black tea infused with refreshing, aromatic organic mint leaves.', ar: 'شاي أحمر مخمر ومغلي بعناية مع أوراق النعناع الطازج والمنعش.' },
    price: 6.00,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600',
    calories: 45
  },
  {
    id: 'fresh-juice',
    name: { en: 'Fresh Orange Juice', ar: 'عصير برتقال طازج' },
    description: { en: '100% freshly squeezed sweet Saudi oranges, high in vitamin C and ice cold.', ar: 'عصير برتقال طبيعي معصور طازجاً ١٠٠٪ وغني بفيتامين سي بارد ومنعش.' },
    price: 12.00,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&q=80&w=600',
    calories: 110
  },
  {
    id: 'water',
    name: { en: 'Mineral Water', ar: 'مياه معدنية' },
    description: { en: 'Chilled local pure mineral water.', ar: 'مياه معدنية نقية وباردة.' },
    price: 2.00,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&q=80&w=600',
    calories: 0
  },
  {
    id: 'soft-drinks',
    name: { en: 'Soft Drinks', ar: 'مشروبات غازية' },
    description: { en: 'Assorted chilled sparkling sodas.', ar: 'مشروبات غازية متنوعة باردة.' },
    price: 4.00,
    category: 'drinks',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=600',
    calories: 140
  },
];

export const REVIEWS: Review[] = [
  {
    id: 'review-1',
    name: { en: 'Ahmad Al-Saeed', ar: 'أحمد السعيد' },
    role: { en: 'Riyadh Food Guide', ar: 'مرشد الرياض الغذائي' },
    comment: {
      en: 'Fresh products every single day and outstanding, warm customer service. Their brown sourdough is a masterpiece!',
      ar: 'مخبوزات طازجة ومقرمشة كل يوم وخدمة عملاء رائعة جداً وودودة. خبز الساوردو الأسمر عندهم تحفة حقيقية!'
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'review-2',
    name: { en: 'Sarah Mansour', ar: 'سارة منصور' },
    role: { en: 'Local Guide', ar: 'مرشدة محلية' },
    comment: {
      en: 'The cheese and zaatar croissants are easily among the absolute best in Riyadh. Very fluffy and buttery.',
      ar: 'كرواسون الجبنة والزعتر بدون مبالغة من بين الأفضل في الرياض بأكملها. طري جداً وغني بنكهة الزبدة الفرنسية.'
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150'
  },
  {
    id: 'review-3',
    name: { en: 'Khalid Abdullah', ar: 'خالد عبدالله' },
    role: { en: 'Regular Customer', ar: 'عميل دائم' },
    comment: {
      en: 'Extremely clean bakery, delightful pastries, and very friendly staff who greet you with traditional Saudi hospitality.',
      ar: 'مخبز نظيف للغاية ومرتب بشكل يفتح النفس، المعجنات لذيذة والموظفون ودودون ويستقبلونك بكرم الضيافة السعودية الأصيلة.'
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150'
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: { en: 'Traditional Stone Oven', ar: 'الأفران الحجرية التقليدية' },
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-2',
    title: { en: 'Flaky Golden Croissants', ar: 'كرواسون ذهبي هش' },
    category: 'products',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-3',
    title: { en: 'Artisanal Sourdough Prep', ar: 'تحضير خبز الريف الفاخر' },
    category: 'products',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-4',
    title: { en: 'Warm & Luxury Interior Cafe', ar: 'التصميم الداخلي الدافئ والفاخر' },
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-5',
    title: { en: 'Freshly Baked Sandwiches', ar: 'سندوتشات محضرة طازجة' },
    category: 'products',
    image: 'https://images.unsplash.com/photo-1521302200778-33500795e128?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-6',
    title: { en: 'Vibrant Healthy Salads', ar: 'سلطات البستان الحية والصحية' },
    category: 'products',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-7',
    title: { en: 'Belgian Chocolate Cake', ar: 'كيكة الشوكولاتة الفاخرة' },
    category: 'products',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-8',
    title: { en: 'Staff Baking Artisan Bread', ar: 'خبراء المخبوزات أثناء العمل' },
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'gal-9',
    title: { en: 'Satisfied Customer Experience', ar: 'ابتسامة ضيوفنا الكرام' },
    category: 'interior',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800'
  }
];

export const FAQS: FAQItem[] = [
  {
    question: { en: 'What are Dia Bakery opening hours?', ar: 'ما هي ساعات العمل في مخابز ديا؟' },
    answer: {
      en: 'We are open daily from 6:00 AM to 11:00 PM, serving hot bread straight from our stone ovens starting early morning.',
      ar: 'نسعد باستقبالكم يومياً من الساعة السادسة صباحاً وحتى الحادية عشرة مساءً، ونقدم لكم الخبز الساخن من الفرن مباشرة منذ الصباح الباكر.'
    }
  },
  {
    question: { en: 'Do you offer delivery or online pre-ordering?', ar: 'هل تتوفر لديكم خدمة التوصيل أو الطلب المسبق؟' },
    answer: {
      en: 'Yes! You can assemble your order on our website and place it directly via WhatsApp for self-takeaway or delivery arrangements. We make sure everything is freshly packed and warm.',
      ar: 'نعم بالتأكيد! يمكنك اختيار منتجاتك وتنسيق طلبك عبر موقعنا الإلكتروني وإرساله بضغطة واحدة مباشرة عبر الواتساب للاستلام من الفرع أو ترتيب التوصيل دافئاً وطازجاً.'
    }
  },
  {
    question: { en: 'Where is Dia Bakery located?', ar: 'أين يقع فرع مخابز ديا؟' },
    answer: {
      en: 'We are proudly located in Riyadh, Saudi Arabia, on Prince Mouteeb Ibn Abd Al Aziz Road, Ar Rabwah district.',
      ar: 'يقع مخبزنا بكل فخر في مدينة الرياض، المملكة العربية السعودية، على طريق الأمير متعب بن عبدالعزيز، حي الربوة.'
    }
  },
  {
    question: { en: 'Do you cater for special events or large gatherings?', ar: 'هل توفرون طلبيات خاصة للمناسبات والجمعات الكبيرة؟' },
    answer: {
      en: 'Absolutely! We provide custom platters of fresh fatayer, mini pastries, croissants, and dessert assortments for corporate and family events. Please contact us 24 hours in advance via phone or WhatsApp.',
      ar: 'نعم بكل سرور! نقوم بتحضير بوكسات وصواني مشكلة مخصصة للمناسبات والاجتماعات العائلية من الفطاير والمعجنات الصغيرة والحلويات المتنوعة. يرجى التواصل معنا قبل المناسبة بـ ٢٤ ساعة.'
    }
  }
];
