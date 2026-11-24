/**
 * Typed Mock Data for Azar Tarkhis (بازرگانی اصولی شجاعی)
 * Extracted from FIGMA_SPECS.md
 */

// 1. Navigation & Header User State
export interface NavItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderData {
  brand: {
    name: string;
    logoUrl: string;
    tagline: string;
  };
  navigation: NavItem[];
  actions: {
    consultation: {
      label: string;
      icon: string;
      href: string;
    };
    login: {
      label: string;
      icon: string;
      href: string;
    };
    userProfile: {
      name: string;
      role: string;
      avatarUrl?: string;
    };
  };
}

export const headerData: HeaderData = {
  brand: {
    name: "بازرگانی اصولی شجاعی",
    logoUrl: "/icons/logo-brand.svg",
    tagline: "همراه شما در مسیر تجارت جهانی",
  },
  navigation: [
    { id: "home", label: "خانه", href: "#", active: true },
    { id: "services", label: "خدمات ما", href: "#services" },
    { id: "daily-price", label: "قیمت روز", href: "#prices" },
    { id: "currency-rates", label: "نرخ ارز امروز", href: "#exchange" },
    { id: "weblog", label: "وبلاگ و مقالات", href: "#weblog" },
  ],
  actions: {
    consultation: {
      label: "مشاوره",
      icon: "/icons/icon-call-outgoing.svg",
      href: "#consultation",
    },
    login: {
      label: "ورود | ثبت نام",
      icon: "/icons/icon-login.svg",
      href: "/login",
    },
    userProfile: {
      name: "کاربر اصولی",
      role: "مدیر بازرگانی",
    },
  },
};

// 2. Story Carousel Items (9 items)
export interface StoryItem {
  id: string;
  title: string;
  imageUrl: string;
}

export const storyItems: StoryItem[] = [
  { id: "story-9", title: "خودرو‌های سواری", imageUrl: "/images/story-khodroha.png" },
  { id: "story-8", title: "کشنده", imageUrl: "/images/story-keshandeh.png" },
  { id: "story-7", title: "بازرسی مبدا", imageUrl: "/images/story-bazrasi-mabda.png" },
  { id: "story-6", title: "بارگیری", imageUrl: "/images/story-bargiri.png" },
  { id: "story-5", title: "حمل از چین", imageUrl: "/images/story-haml-chin.png" },
  { id: "story-4", title: "ترانزیت", imageUrl: "/images/story-transit.png" },
  { id: "story-3", title: "انبار", imageUrl: "/images/story-anbar.png" },
  { id: "story-2", title: "تامین ارز", imageUrl: "/images/story-tamin-arz.png" },
  { id: "story-1", title: "ترخیص کالا", imageUrl: "/images/story-tarkhis-kala.png" },
];

// 3. Hero Slider Slides (4 slides with tabs, descriptions, CTAs)
export interface HeroSlide {
  id: number;
  tabTitle: string;
  subTitle: string;
  mainTitle: string;
  tags: string[];
  description: string;
  ctaText: string;
  ctaIcon: string;
  bannerImage: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    tabTitle: "امور گمرکی",
    subTitle: "انجام کلیه امور گمرکی",
    mainTitle: "بازرگانی اصولی شجاعی",
    tags: ["ثبت سفارش", "انبارداری", "ترخیص", "حمل"],
    description: "هر قدم با یک کارشناس هماهنگ‌کننده و برآورد آنلاین همان لحظه",
    ctaText: "مشاهده خدمات",
    ctaIcon: "/icons/icon-arrow-left.svg",
    bannerImage: "/images/shipping-container.jpg",
  },
  {
    id: 2,
    tabTitle: "خودرو",
    subTitle: "خودروهای صفر و کارکرده موجود",
    mainTitle: "قیمت روز به دلار،\nپلاک ارس و ماکو",
    tags: ["خرید", "سفارش خاص", "حمل و نقل", "ترانزیت"],
    description: "خرید از موجودی یا سفارش خودروی خاص از دبی؛ پیش‌فاکتور، قرارداد، ترخیص و تحویل",
    ctaText: "مشاهده خدمات",
    ctaIcon: "/icons/icon-arrow-left.svg",
    bannerImage: "/images/hero-banner-car.png",
  },
  {
    id: 3,
    tabTitle: "کشنده",
    subTitle: "کشنده‌های وارداتی از اروپا و ترکیه",
    mainTitle: "ثبت سفارش یا اسقاط،\nترخیص و پلاک",
    tags: ["خرید", "سفارش خاص", "حمل و نقل", "ترانزیت"],
    description: "کشنده‌های موجود با وضعیت گمرکی و قیمت یورو، یا سفارش کشنده خاص با مشخصات دلخواه",
    ctaText: "مشاهده خدمات",
    ctaIcon: "/icons/icon-arrow-left.svg",
    bannerImage: "/images/blog-mercedes-actros-import.png",
  },
  {
    id: 4,
    tabTitle: "حمل بین‌الملل",
    subTitle: "حمل دریایی، زمینی و ریلی بار کامل",
    mainTitle: "از چین، ترکیه و اروپا\nتا گمرک مقصد",
    tags: ["ریلی", "دریایی", "داخلی", "بین المللی"],
    description: "محاسبه خودکار تعداد کانتینر یا تریلی بر اساس وزن و حجم، همراه بیمه و اسناد حمل",
    ctaText: "مشاهده خدمات",
    ctaIcon: "/icons/icon-arrow-left.svg",
    bannerImage: "/images/logistics.jpg",
  },
];

// 4. Services Grid (6 services)
export interface ServiceCard {
  id: string;
  watermark: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
}

export const servicesData: ServiceCard[] = [
  {
    id: "service-cars",
    watermark: "Cars",
    title: "خودرو‌های سواری",
    description: "خودروهای موجود و سفارش اختصاصی • گالری و فیلتر • مشخصات کامل • قیمت نهایی • رزرو و پیش‌پرداخت",
    imageUrl: "/images/service-car.png",
    ctaText: "مشاهده خدمات",
  },
  {
    id: "service-truck",
    watermark: "Truck",
    title: "کشنده و کامیون",
    description: "کشنده‌های موجود و سفارشی • گالری و فیلتر • مشخصات فنی • ترخیص • ثبت سفارش • اسقاط",
    imageUrl: "/images/service-truck.png",
    ctaText: "مشاهده خدمات",
  },
  {
    id: "service-shipping",
    watermark: "Shipping",
    title: "حمل و نقل",
    description: "شیپینگ کانتینری • ترانزیت زمینی • حمل ریلی • حمل داخلی ایران • درخواست چند قلم کالا",
    imageUrl: "/images/service-shipping.png",
    ctaText: "مشاهده خدمات",
  },
  {
    id: "service-customs",
    watermark: "Import/Export",
    title: "واردات، صادرات و ترخیص",
    description: "واردات و صادرات کالا • ترخیص مستقل • گمرکات سرزمین اصلی و مناطق آزاد • مسیر ترکیبی خدمات",
    imageUrl: "/images/service-customs-clearance.png",
    ctaText: "مشاهده خدمات",
  },
  {
    id: "service-storage",
    watermark: "Storage",
    title: "انبارداری و سردخانه گمرکی",
    description: "ارس • بازرگان • بندرعباس • محاسبه ظرفیت بر مبنای کامیون • برآورد متناسب با نوع کالا",
    imageUrl: "/images/service-warehouse.png",
    ctaText: "مشاهده خدمات",
  },
  {
    id: "service-orders",
    watermark: "Orders",
    title: "ثبت سفارش و امور ارزی",
    description: "ثبت سفارش متناسب با کالا • تأمین ارز • حواله • خدمات بانکی و پیگیری فرایند",
    imageUrl: "/images/service-order-currency.png",
    ctaText: "مشاهده خدمات",
  },
];

// 5. Vehicle Showcase & Catalog (Cars vs Trucks)
export interface VehicleItem {
  id: string;
  name: string;
  brandName: string;
  brandLogo: string;
  imageUrl: string;
  status: string;
  priceCurrency: string;
  priceToman: string;
  specs?: string[];
  year?: string;
  type: "car" | "truck";
}

export interface FeaturedVehicleCard {
  title: string;
  badge: string;
  category: string;
  imageUrl: string;
}

export const carVehicles: VehicleItem[] = [
  {
    id: "car-toyota-cross",
    name: "تویوتا کراس",
    brandName: "تویوتا",
    brandLogo: "/icons/logo-toyota.svg",
    imageUrl: "/images/car-toyota-cross.png",
    status: "موجود، مدل روز",
    priceCurrency: "$ 29,500",
    priceToman: "۹٬۵۰۰٬۰۰۰٬۰۰۰",
    specs: ["۲۰۲۶", "برقی", "۲.۰ لیتر توربو", "اتومات"],
    year: "2026",
    type: "car",
  },
  {
    id: "car-mg5",
    name: "ام جی ۵",
    brandName: "ام‌جی",
    brandLogo: "/icons/logo-mg.svg",
    imageUrl: "/images/car-mg-5.png",
    status: "موجود، تحویل روز",
    priceCurrency: "$ 19,800",
    priceToman: "۳٬۱۰۰٬۰۰۰٬۰۰۰",
    specs: ["۲۰۲۶", "برقی", "۲.۰ لیتر توربو", "اتومات"],
    year: "2025",
    type: "car",
  },
  {
    id: "car-toyota-camry",
    name: "تویوتا کمری LE",
    brandName: "تویوتا",
    brandLogo: "/icons/logo-toyota.svg",
    imageUrl: "/images/car-toyota-camry.png",
    status: "موجود، مدل روز",
    priceCurrency: "$ 32,000",
    priceToman: "۸٬۸۰۰٬۰۰۰٬۰۰۰",
    specs: ["۲۰۲۶", "برقی", "۲.۰ لیتر توربو", "اتومات"],
    year: "2026",
    type: "car",
  },
  {
    id: "car-mercedes",
    name: "A250",
    brandName: "مرسدس بنز",
    brandLogo: "/icons/logo-mercedes-benz.svg",
    imageUrl: "/images/car-mercedes-benz.png",
    status: "سفارشی از دبی",
    priceCurrency: "$ 54,000",
    priceToman: "۱۱٬۲۰۰٬۰۰۰٬۰۰۰",
    specs: ["۲۰۲۶", "برقی", "۲.۰ لیتر توربو", "اتومات"],
    year: "2025",
    type: "car",
  },
  {
    id: "car-mitsubishi",
    name: "اوتلندر اچ‌لاین تیپ دو",
    brandName: "میتسوبیشی",
    brandLogo: "/icons/logo-mitsubishi.svg",
    imageUrl: "/images/car-mitsubishi-outlander.png",
    status: "موجود، مدل روز",
    priceCurrency: "$ 38,500",
    priceToman: "۷٬۶۰۰٬۰۰۰٬۰۰۰",
    specs: ["۲۰۲۶", "برقی", "۲.۰ لیتر توربو", "اتومات"],
    year: "2026",
    type: "car",
  },
];

export const truckVehicles: VehicleItem[] = [
  {
    id: "truck-daf",
    name: "DAF XF 480",
    brandName: "داف",
    brandLogo: "/icons/logo-daf.svg",
    imageUrl: "/images/blog-mercedes-actros-import.png",
    status: "وارداتی، مدل روز",
    priceCurrency: "€ 128,000",
    priceToman: "۱۴٬۸۰۰٬۰۰۰٬۰۰۰",
    specs: ["فول آپشن", "فول کالر", "۲۰۲۶"],
    year: "2026",
    type: "truck",
  },
  {
    id: "truck-volvo",
    name: "Volvo FH 500",
    brandName: "ولوو",
    brandLogo: "/icons/logo-volvo.svg",
    imageUrl: "/images/truck-volvo-fh500.png",
    status: "وارداتی، مدل روز",
    priceCurrency: "€ 134,000",
    priceToman: "۱۶٬۵۰۰٬۰۰۰٬۰۰۰",
    specs: ["فول آپشن", "ریتاردر", "۲۰۲۶"],
    year: "2026",
    type: "truck",
  },
  {
    id: "truck-renault",
    name: "Renault T520",
    brandName: "رنو",
    brandLogo: "/icons/logo-renault.svg",
    imageUrl: "/images/truck-renault-t520.png",
    status: "وارداتی، ترخیص اروپا",
    priceCurrency: "€ 98,000",
    priceToman: "۱۳٬۲۰۰٬۰۰۰٬۰۰۰",
    specs: ["اتومات", "کولر درجا", "۲۰۲۵"],
    year: "2025",
    type: "truck",
  },
  {
    id: "truck-scania",
    name: "Scania R450",
    brandName: "اسکانیا",
    brandLogo: "/icons/logo-scania.svg",
    imageUrl: "/images/truck-scania-r450.png",
    status: "وارداتی، آماده ترخیص",
    priceCurrency: "€ 112,000",
    priceToman: "۱۵٬۱۰۰٬۰۰۰٬۰۰۰",
    specs: ["فول آپشن", "فول کالر", "۲۰۲۶"],
    year: "2026",
    type: "truck",
  },
  {
    id: "truck-man",
    name: "MAN TGX 510",
    brandName: "مان",
    brandLogo: "/icons/logo-man.svg",
    imageUrl: "/images/truck-man-tgx.png",
    status: "وارداتی، پلاک ارس",
    priceCurrency: "€ 118,000",
    priceToman: "۱۴٬۳۰۰٬۰۰۰٬۰۰۰",
    specs: ["فول آپشن", "یورو ۶", "۲۰۲۶"],
    year: "2026",
    type: "truck",
  },
];

export const featuredVehicles: Record<"car" | "truck", FeaturedVehicleCard> = {
  car: {
    title: "خودروهای موجود، مدل روز",
    badge: "موجود",
    category: "خودرو‌ها",
    imageUrl: "/images/card-featured-car.png",
  },
  truck: {
    title: "وارداتی، مدل روز",
    badge: "Tractor",
    category: "کشنده‌ها",
    imageUrl: "/images/card-featured-truck.png",
  },
};

// 6. Currency Exchange Ticker (16 Currencies)
export interface CurrencyItem {
  id: string;
  name: string;
  code: string;
  rate: string;
  trend: "up" | "down" | "neutral";
  change?: string;
}

export const currencyTickerItems: CurrencyItem[] = [
  { id: "usd", name: "دلار آمریکا", code: "USD", rate: "۲۷۲٬۵۰۰", trend: "up", change: "+۰.۸%" },
  { id: "eur", name: "یورو", code: "EUR", rate: "۳۰۴٬۹۰۰", trend: "up", change: "+۰.۵%" },
  { id: "aed", name: "درهم امارت", code: "AED", rate: "۷۴٬۵۲۴", trend: "neutral", change: "۰.۰%" },
  { id: "gbp", name: "پوند انگلیس", code: "GBP", rate: "۳۶۳٬۹۰۰", trend: "up", change: "+۱.۲%" },
  { id: "try", name: "لیر ترکیه", code: "TRY", rate: "۵٬۴۸۰", trend: "down", change: "-۰.۳%" },
  { id: "chf", name: "فرانک سوئیس", code: "CHF", rate: "۳۲۹٬۹۱۰", trend: "up", change: "+۰.۴%" },
  { id: "cny", name: "یوآن چین", code: "CNY", rate: "۴۰٬۸۷۰", trend: "up", change: "+۰.۲%" },
  { id: "jpy", name: "ین ژاپن", code: "JPY", rate: "۱۷۳٬۳۰۰", trend: "down", change: "-۰.۱%" },
  { id: "cad", name: "دلار کانادا", code: "CAD", rate: "۱۹۴٬۴۰۰", trend: "up", change: "+۰.۶%" },
  { id: "aud", name: "دلار استرالیا", code: "AUD", rate: "۱۹۱٬۵۰۰", trend: "up", change: "+۰.۴%" },
  { id: "nzd", name: "دلار نیوزلند", code: "NZD", rate: "۱۵۴٬۹۰۰", trend: "down", change: "-۰.۲%" },
  { id: "sgd", name: "دلار سنگاپور", code: "SGD", rate: "۲۱۳٬۰۰۰", trend: "up", change: "+۰.۳%" },
  { id: "inr", name: "روپیه هند", code: "INR", rate: "۲٬۸۵۶", trend: "neutral", change: "۰.۰%" },
  { id: "pkr", name: "روپیه پاکستان", code: "PKR", rate: "۹۶۴", trend: "down", change: "-۰.۵%" },
  { id: "iqd", name: "دینار عراق", code: "IQD", rate: "۱۷۵", trend: "up", change: "+۰.۱%" },
  { id: "syp", name: "لیر سوریه", code: "SYP", rate: "۲٬۲۴۳", trend: "neutral", change: "۰.۰%" },
];

// 7. Weblog & Articles (3 items)
export interface BlogArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  imageUrl: string;
  slug: string;
  author?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: "blog-3",
    category: "کشنده و کامیون",
    title: "راهنمای واردات کشنده مرسدس بنز آکتروس",
    excerpt: "با شرایط واردات کشنده‌های مرسدس بنز آکتروس، الزامات قانونی، مدارک موردنیاز و مراحل ترخیص آشنا شوید تا مسیر ورود این خودروهای سنگین را بهتر بشناسید.",
    readTime: "۶ دقیقه مطالعه",
    date: "۱۴۰۵/۰۷/۳۱",
    author: "محمد پوراسکندر",
    imageUrl: "/images/blog-mercedes-actros-import.png",
    slug: "mercedes-actros-import-guide",
  },
  {
    id: "blog-2",
    category: "امور گمرکی",
    title: "آشنایی با مراحل ترخیص کالا",
    excerpt: "ترخیص اصولی کالا نیازمند شناخت مقررات گمرکی و تهیه اسناد موردنیاز است. با مراحل ترخیص آشنا شوید و موانع احتمالی را کاهش دهید.",
    readTime: "۸ دقیقه مطالعه",
    date: "۱۴۰۵/۰۷/۳۱",
    author: "محمد پوراسکندر",
    imageUrl: "/images/blog-customs-clearance-steps.png",
    slug: "customs-clearance-steps",
  },
  {
    id: "blog-1",
    category: "خودروهای لوکس",
    title: "خودروهای لوکس پورشه در بازار",
    excerpt: "با جدیدترین مدل‌های پورشه، طراحی منحصربه‌فرد، فناوری‌های پیشرفته و مشخصات فنی این خودروهای لوکس آشنا شوید و نگاهی به ویژگی‌های متمایز آن‌ها داشته باشید.",
    readTime: "۵ دقیقه مطالعه",
    date: "۱۴۰۵/۰۷/۳۱",
    author: "محمد پوراسکندر",
    imageUrl: "/images/blog-porsche-luxury.png",
    slug: "porsche-luxury-cars",
  },
];

// 8. Consultation & Footer Data
export interface ConsultationData {
  title: string;
  description: string;
  ctaText: string;
}

export const consultationData: ConsultationData = {
  title: "تجارت شما، با یک شریک مطمئن",
  description: "از مشاوره تا اجرا، در کنار شما هستیم. نام و شماره همراه را بگذارید؛ کارشناس همان خدمت با شما تماس می‌گیرد.",
  ctaText: "مشاوره",
};

export interface FooterData {
  companyName: string;
  tagline: string;
  newsletter: {
    title: string;
    placeholder: string;
    buttonIcon: string;
  };
  contactInfo: {
    address: { label: string; value: string; icon: string };
    phone: { label: string; value: string; icon: string };
    email: { label: string; value: string; icon: string };
  };
  socialLinks: {
    instagram: { label: string; href: string; icon: string };
    whatsapp: { label: string; href: string; icon: string };
  };
  copyright: string;
}

export const footerData: FooterData = {
  companyName: "شرکت بازرگانی اصولی شجاعی",
  tagline: "همراه شما در مسیر تجارت جهانی",
  newsletter: {
    title: "عضویت در خبرنامه",
    placeholder: "ایمیل خود را وارد کنید",
    buttonIcon: "/icons/icon-send.svg",
  },
  contactInfo: {
    address: {
      label: "آدرس",
      value: "تهران • جردن • ناهید غربی • گروه اسولی",
      icon: "/icons/icon-location.svg",
    },
    phone: {
      label: "تلفن تماس",
      value: "۰۲۱- ۴۴۵ ۴۵۶۷",
      icon: "/icons/icon-call-calling.svg",
    },
    email: {
      label: "پست الکترونیک",
      value: "info@osoolishojaei.com",
      icon: "/icons/icon-sms.svg",
    },
  },
  socialLinks: {
    instagram: {
      label: "اینستاگرام",
      href: "https://instagram.com",
      icon: "/icons/icon-instagram.svg",
    },
    whatsapp: {
      label: "واتس‌اپ",
      href: "https://whatsapp.com",
      icon: "/icons/icon-whatsapp.svg",
    },
  },
  copyright: "© ۲۰۲۶ - تمامی حقوق برای شرکت بازرگانی اصولی شجاعی محفوظ است.",
};
