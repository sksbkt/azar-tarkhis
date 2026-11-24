# Azar Tarkhis (بازرگانی اصولی شجاعی) - Figma Design Specifications

- **Figma File Key:** `CeRORMTj0asqhsdQAah6TL`
- **File Name:** `Test Exam`
- **Figma URL:** [Figma Design Link](https://www.figma.com/design/CeRORMTj0asqhsdQAah6TL/Test-Exam?node-id=0-1)
- **Top-Level Node IDs:**
  - `Home` Frame (Left): `1:3552` (Width: 1512px, Hug Content)
  - `Landing Level Components` Section (Middle / Interactive States): `10:5508` (2970px x 6423px)
  - `Basic Components` Section (Right / Design System & Tokens): `10:5509` (4956px x 3239px)

---

## 1. Color & Gradient Tokens

### Primary Blues
- **Brand Primary Blue:** `#016596` (`fill_8c97763b`) - Main titles, active nav buttons, brand identity.
- **Electric / Accent Sky Blue:** `#03AEF4` (`fill_246dfa73`) - Curved underlines, badge highlights, active indicators.
- **Ice / Light Blue Surface:** `#EFF9FF` (`fill_f27635c8`) - Subtle tinted backgrounds, badge surfaces.
- **Soft Sky Background:** `#DFF3FF` (`fill_fc498ee5`) - Button text in hero, light accent surfaces.
- **Transparent Primary Blue:** `rgba(1, 101, 150, 0.4)` (`fill_a3b82c4c`).

### Accent & Status Colors
- **Amber / Gold Accent:** `#F0A510` (`fill_61268dd5`) - Secondary headings, currency alerts, badges.
- **Warm Gold Subtle:** `rgba(240, 165, 16, 0.1)` (`fill_2af22948`).
- **Success Green:** `#15803D` (`fill_5469bf22`) - Positive price trends, active badges.
- **Success Light Surface:** `#F0FDF4` (`fill_182ead0a`).
- **Success Accent Glow:** `rgba(34, 197, 94, 0.4)` (`fill_75d08f8b`).
- **Warning Yellow/Orange:** `#B45309` (`fill_531db922`) / `#FFFBEB` (`fill_159948f1`).
- **Error / Danger Red:** `#B91C1C` (`fill_c828e2a8`) - Negative price trend, error tags.
- **Error Light Surface:** `#FEF2F2` (`fill_bdc5cd1d`).
- **Error Accent Glow:** `rgba(239, 68, 68, 0.4)` (`fill_f362838b`).

### Neutrals & Surfaces
- **Pure White:** `#FFFFFF` (`fill_658ab2fa`) - Card backgrounds, header surfaces, white text.
- **Off-White Surface 1:** `#F8FAFC` (`fill_85065e9e`) - Slide tags, subtle section background.
- **Off-White Surface 2:** `#F3F3F3` (`fill_c8223be7`) - Component section canvas.
- **Gray Surface / Dividers:** `#ECEEF2` (`fill_4fc55d3b`) - Secondary containers, card placeholder fills.
- **Border Gray:** `#D5DAE2` (`fill_f4c1598d`) - Outlines for buttons, cards, story rings.
- **Muted Text / Slate:** `#64748B` (`fill_ba795e8a`) - Secondary descriptions, metadata.
- **Body Text Slate:** `#3A4352` (`fill_ded0cb39`) - Main paragraphs and list items.
- **Dark Neutral Text:** `#343A46` (`fill_5e5cfae6`) - Card titles, service descriptions.
- **Darkest Navy / Slate:** `#0F172A` (`fill_78125c34`) - Dark headings, overlay badges.
- **Footer Surface Dark:** `#23272E` (`fill_0e8e45b0`) - Primary footer background color.
- **Footer Deep Surface:** `#1E2228` - Dark nested containers in footer.

### Linear Gradients
1. **Neutral-Blue-Transition (Hero Background):**
   ```css
   background: linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(223, 243, 255, 1) 100%);
   ```
2. **Metallic Title / Watermark Transition:**
   ```css
   background: linear-gradient(180deg, rgba(177, 186, 200, 1) 0%, rgba(246, 247, 249, 1) 80%);
   ```
3. **Horizontal Subtle Sky Fade:**
   ```css
   background: linear-gradient(90deg, rgba(239, 249, 255, 1) 0%, rgba(239, 249, 255, 0) 100%);
   ```
4. **Card Image Bottom Vignette:**
   ```css
   background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
   ```
5. **Gold Glow Fade:**
   ```css
   background: linear-gradient(90deg, rgba(240, 165, 16, 0) 0%, rgba(240, 165, 16, 1) 100%);
   ```

---

## 2. Typography Tokens

- **Font Family:** `PeydaFaNum`, system fallback: `system-ui, -apple-system, sans-serif`
- **Direction:** RTL (`direction: rtl; text-align: right;`)

| Style Name | Weight | Size | Line Height | Letter Spacing | Alignment | Primary Role |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `Display/xl` | 600 (SemiBold) | 48px | 48px | -0.014em | Right / Center | Hero Main Title Slide |
| `Display/Heading/sm` | 600 (SemiBold) | 20px | 42px | -0.014em | Right | Hero Secondary Title |
| `Heading/sm` | 600 (SemiBold) | 20px | 32px | -0.014em | Right / Center | Section Headings |
| `Watermark / Service Big` | 700 (Bold) | 36px | 44px | -0.014em | Center | English Background Watermarks |
| `Body/base` | 400 (Regular) | 16px | 26px | -0.014em | Right | Standard body copy, blog excerpts |
| `Body/sm` | 400 (Regular) | 14px | 22px | -0.014em | Right | Service card descriptions, story text |
| `Label/lg` | 600 (SemiBold) | 16px | 24px | -0.014em | Center | Main buttons, navigation links |
| `Label/base` | 500 (Medium) | 14px | 22px | -0.014em | Center | Medium buttons, tabs, tags |
| `Display/Label/sm` | 500 (Medium) | 12px | 20px | -0.014em | Center | Small badges, story titles, meta tags |
| `Caption` | 400 (Regular) | 12px | 18px | -0.014em | Right / Center | Timestamps, copyright, disclaimers |

---

## 3. Shadows, Blurs & Border Radii

### Drop Shadows
- **Card / Dropdown Shadow (`shadow-lg`):**
  ```css
  box-shadow: 0px 10px 15px 0px rgba(15, 23, 42, 0.1), 0px 4px 6px 0px rgba(15, 23, 42, 0.05);
  ```
- **Top Elevated Surface Shadow (Services Section Header):**
  ```css
  box-shadow: 0px -5px 12px 0px rgba(0, 0, 0, 0.08);
  ```
- **Subtle Card Elevation:**
  ```css
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.06);
  ```
- **Blue Accent Glow:**
  ```css
  box-shadow: 0px 0px 16px 0px rgba(3, 174, 244, 0.35);
  ```

### Backdrop Blurs
- **Badge / Frosted Glass Overlay:** `backdrop-filter: blur(6px);`
- **Mini-Card Bottom Fade:** `backdrop-filter: blur(2px);`

### Border Radii
- **Tag / Pill Buttons:** `999px` (fully rounded)
- **Standard Cards / Hero Banner:** `16px`
- **Service Cards / Mini Cards:** `12px`
- **Service Cards Asymmetric (Featured):** `12px 12px 12px 0px` or `12px 12px 0px 0px`
- **Buttons (Small / Medium):** `6px` / `8px`
- **Story Thumbnails:** `6px`

---

## 4. Layout & Grid Specifications

- **Desktop Frame Width:** `1512px`
- **Inner Content Container:** `max-width: 1280px` (or `1464px` with `padding: 0 24px`)
- **Main Header Padding:** `24px` horizontal/vertical
- **Section Vertical Gap:**
  - Hero to Services overlap: `-80px`
  - Services to Exchange overlap: `-24px`
  - Standard Section Padding: `40px 0px` or `48px 0px`
- **Service Cards Grid:** 3 columns, 2 rows, `gap: 24px`
- **Hero Grid:** 5 columns (`grid-column: span 3` for Image Banner, `span 2` for Content & Navigation)
- **Currency Ticker:** Infinite horizontal auto-scroll row, `gap: 16px`, height `48px`
- **Weblog Grid:** 3 columns, `gap: 24px`

---

## 5. Home Layer Breakdown (Top to Bottom)

### Section 1: Main Header (`#1:3553`)
- **Dimensions:** `1512px x 112px`, padding: `24px`
- **Inner Header Container:** Floating white pill card (`borderRadius: 16px`, `boxShadow: shadow-lg`, padding: `16px 24px`)
- **Right (Logo & Menu):**
  - Brand Logo: Vector emblem (`logo-brand.svg`, 93x24) + Company name "بازرگانی اصولی شجاعی"
  - Nav Items: "خانه", "خدمات ما", "قیمت روز", "نرخ ارز امروز", "وبلاگ و مقالات"
- **Left (Actions):**
  - "مشاوره" Button (Border outline `#D5DAE2`, icon `call-outgoing.svg`)
  - "ورود | ثبت نام" Button (Primary Blue background `#016596`, text `#FFFFFF`, icon `login.svg`)
- **Interactive State (Signed In):**
  - Replaces login button with user avatar chip: "User In Header" with profile name & dropdown.

### Section 2: Hero & Stories (`#1:3556`)
- **Background:** `linear-gradient(180deg, #FFFFFF 0%, #DFF3FF 100%)`
- **Stories Bar (`#1:3557`):** Row of 9 circular/rounded story items (`80px x 112px`, border radius `6px`, gap `12px`):
  1. ترخیص کالا (`story-tarkhis-kala.png`)
  2. تامین ارز (`story-tamin-arz.png`)
  3. انبار (`story-anbar.png`)
  4. ترانزیت (`story-transit.png`)
  5. حمل از چین (`story-haml-chin.png`)
  6. بارگیری (`story-bargiri.png`)
  7. بازرسی مبدا (`story-bazrasi-mabda.png`)
  8. کشنده (`story-keshandeh.png`)
  9. خودرو‌های سواری (`story-khodroha.png`)
- **Main Hero Slider (`#1:3567`):**
  - **Left (Col span 3):** Large rounded vehicle image banner (`hero-banner-car.png`, height `504px`, `borderRadius: 16px`).
  - **Right (Col span 2):** Slide Content:
    - Slide Secondary Heading (Yellow `#F0A510`, 20px SemiBold)
    - Blue decorative underline (`vector-hero-underline.svg`)
    - Slide Primary Heading (Dark Blue `#016596`, 48px SemiBold)
    - Tags row (Pills in `#F8FAFC`, text `#0F172A`)
    - Slide Description text (`#64748B`, 14px)
    - Primary CTA Button ("مشاهده خدمات" with `icon-arrow-left.svg`)
  - **Hero Slider Tabs / Pagination:**
    - 4 Carousel Slide Tabs with animated timer indicator bar (`Timer Bar` height 2px `#016596`):
      - **Slide 1:** بازرگانی اصولی شجاعی ("انجام کلیه امور گمرکی") | Tags: ثبت سفارش, انبارداری, ترخیص, حمل | "هر قدم با یک کارشناس هماهنگ‌کننده و برآورد آنلاین همان لحظه"
      - **Slide 2:** قیمت روز به دلار، پلاک ارس و ماکو ("خودروهای صفر و کارکرده موجود") | Tags: ترانزیت, تحویل فوری | "خرید از موجودی یا سفارش خودروی خاص از دبی؛ پیش‌فاکتور، قرارداد، ترخیص و تحویل"
      - **Slide 3:** ثبت سفارش یا اسقاط، ترخیص و پلاک ("کشنده‌های وارداتی از اروپا و ترکیه") | Tags: اسقاط, ترخیص اروپا | "کشنده‌های موجود با وضعیت گمرکی و قیمت یورو، یا سفارش کشنده خاص با مشخصات دلخواه"
      - **Slide 4:** از چین، ترکیه و اروپا تا گمرک مقصد ("حمل دریایی، زمینی و ریلی بار کامل") | Tags: ریلی, دریایی, داخلی, بین المللی | "محاسبه خودکار تعداد کانتینر یا تریلی بر اساس وزن و حجم، همراه بیمه و اسناد حمل"

### Section 3: Services Grid (`#1:3570`)
- **Title:** "خدمات ما" (`#016596`, 20px)
- **3x2 Grid of Cards:**
  1. **حمل و نقل (Shipping):** "شیپینگ کانتینری • ترانزیت زمینی • حمل ریلی • حمل داخلی ایران • درخواست چند قلم کالا" | Image: `service-shipping.png`
  2. **کشنده و کامیون (Truck):** "کشنده‌های موجود و سفارشی • گالری و فیلتر • مشخصات فنی • ترخیص • ثبت سفارش • اسقاط" | Image: `service-truck.png`
  3. **خودرو‌های سواری (Cars):** "خودروهای موجود و سفارش اختصاصی • گالری و فیلتر • مشخصات کامل • قیمت نهایی • رزرو و پیش‌پرداخت" | Image: `service-car.png`
  4. **ثبت سفارش و امور ارزی (Orders):** "ثبت سفارش متناسب با کالا • تأمین ارز • حواله • خدمات بانکی و پیگیری فرایند" | Image: `service-order-currency.png`
  5. **انبارداری و سردخانه گمرکی (Storage):** "ارس • بازرگان • بندرعباس • محاسبه ظرفیت بر مبنای کامیون • برآورد متناسب با نوع کالا" | Image: `service-warehouse.png`
  6. **واردات، صادرات و ترخیص (Import/Export):** "واردات و صادرات کالا • ترخیص مستقل • گمرکات سرزمین اصلی و مناطق آزاد • مسیر ترکیبی خدمات" | Image: `service-customs-clearance.png`

### Section 4: Live Prices & Exchange Rate Ticker (`#1:3646` & `#1:3714`)
- **Tabs:** "خودرو‌ها" (Cars) & "کشنده‌ها" (Trucks)
- **Cars Showcase:**
  - Mitsubishi Outlander H-Line (`car-mitsubishi-outlander.png`, `logo-mitsubishi.svg`)
  - Mercedes Benz (`car-mercedes-benz.png`, `logo-mercedes-benz.svg`)
  - Toyota Camry LE (`car-toyota-camry.png`, `logo-toyota.svg`)
  - MG 5 (`car-mg-5.png`, `logo-mg.svg`)
  - Toyota Cross (`car-toyota-cross.png`, `logo-toyota.svg`)
- **Trucks Showcase:**
  - MAN TGX (`truck-man-tgx.png`, `logo-man.svg`)
  - Mercedes Benz Actros (`truck-mercedes-actros.png`, `logo-mercedes-benz.svg`)
  - Scania R450 (`truck-scania-r450.png`, `logo-scania.svg`)
  - Renault T520 (`truck-renault-t520.png`, `logo-renault.svg`)
  - Volvo FH500 (`truck-volvo-fh500.png`, `logo-volvo.svg`)
- **Exchange Rate Marquee Ticker:**
  - 16 Currencies: US Dollar (۲۷۲٬۵۰۰), Euro (۳۰۴٬۹۰۰), UAE Dirham (۷۴٬۵۲۴), British Pound (۳۶۳٬۹۰۰), Turkish Lira (۵٬۴۸۰), Swiss Franc (۳۲۹٬۹۱۰), Chinese Yuan (۴۰٬۸۷۰), Japanese Yen (۱۷۳٬۳۰۰), Canadian Dollar (۱۹۴٬۴۰۰), Australian Dollar (۱۹۱٬۵۰۰), NZ Dollar (۱۵۴٬۹۰۰), Singapore Dollar (۲۱۳٬۰۰۰), Indian Rupee (۲٬۸۵۶), Pakistan Rupee (۹۶۴), Iraq Dinar (۱۷۵), Syrian Lira (۲٬۲۴۳).

### Section 5: Weblog & Articles (`#1:3716`)
- **Title:** "وبلاگ و مقالات" with CTA button "موارد بیشتر"
- **3 Blog Article Cards:**
  1. **خودروهای لوکس پورشه در بازار:** "با جدیدترین مدل‌های پورشه، طراحی منحصربه‌فرد، فناوری‌های پیشرفته و مشخصات فنی این خودروهای لوکس آشنا شوید..." | Image: `blog-porsche-luxury.png`
  2. **آشنایی با مراحل ترخیص کالا:** "ترخیص اصولی کالا نیازمند شناخت مقررات گمرکی و تهیه اسناد موردنیاز است..." | Image: `blog-customs-clearance-steps.png`
  3. **راهنمای واردات کشنده مرسدس بنز آکتروس:** "با شرایط واردات کشنده‌های مرسدس بنز آکتروس، الزامات قانونی، مدارک موردنیاز و مراحل ترخیص آشنا شوید..." | Image: `blog-mercedes-actros-import.png`

### Section 6: Consultation Banner & Footer (`#1:3731` & `#1:3744`)
- **Consultation Box:**
  - Title: "تجارت شما، با یک شریک مطمئن"
  - Copy: "از مشاوره تا اجرا، در کنار شما هستیم. نام و شماره همراه را بگذارید؛ کارشناس همان خدمت با شما تماس می‌گیرد."
  - CTA Button: "مشاوره"
- **Footer:**
  - Background: `#23272E`
  - Newsletter Form: "عضویت در خبرنامه", input "ایمیل خود را وارد کنید", button `icon-send.svg`
  - Company Description: "شرکت بازرگانی اصولی شجاعی - همراه شما در مسیر تجارت جهانی"
  - Quick Contact Info:
    - آدرس: تهران • جردن • ناهید غربی • گروه اسولی (`icon-location.svg`)
    - تلفن تماس: ۰۲۱- ۴۴۵ ۴۵۶۷ (`icon-call-calling.svg`)
    - ایمیل: info@osoolishojaei.com (`icon-sms.svg`)
  - Socials: Instagram (`icon-instagram.svg`), WhatsApp (`icon-whatsapp.svg`)
  - Copyright: "© ۲۰۲۶ - تمامی حقوق برای شرکت بازرگانی اصولی شجاعی محفوظ است."

---

## 6. Downloaded Asset Manifest

### Raster Images (`public/images/`) - 2x PNGs
| File Name | Resolution | Figma Source Node | Description |
| :--- | :--- | :--- | :--- |
| `story-tarkhis-kala.png` | 1024x1024 | `I1:3558;3022:112185` | Story: ترخیص کالا |
| `story-tamin-arz.png` | 1024x1024 | `I1:3559;3022:112185` | Story: تامین ارز |
| `story-anbar.png` | 1200x896 | `I1:3560;3022:112185` | Story: انبار |
| `story-transit.png` | 1024x1024 | `I1:3561;3022:112185` | Story: ترانزیت |
| `story-haml-chin.png` | 1024x1024 | `I1:3562;3022:112185` | Story: حمل از چین |
| `story-bargiri.png` | 1024x1024 | `I1:3563;3022:112185` | Story: بارگیری |
| `story-bazrasi-mabda.png` | 1024x1024 | `I1:3564;3022:112185` | Story: بازرسی مبدا |
| `story-keshandeh.png` | 1024x1024 | `I1:3565;3022:112185` | Story: کشنده |
| `story-khodroha.png` | 1024x1024 | `I1:3566;3022:112185` | Story: خودرو‌های سواری |
| `hero-banner-car.png` | 1500x1008 | `I1:3567;3756:26110` | Main Hero Carousel Banner Car |
| `service-shipping.png` | 1200x800 | `1:3576` | Service: حمل و نقل کانتینری |
| `service-truck.png` | 1200x800 | `1:3588` | Service: کشنده و کامیون |
| `service-car.png` | 1200x800 | `1:3600` | Service: خودرو‌های سواری |
| `service-order-currency.png` | 869x779 | `1:3612` | Service: ثبت سفارش و امور ارزی |
| `service-warehouse.png` | 3016x2474 | `1:3624` | Service: انبارداری و سردخانه گمرکی |
| `service-customs-clearance.png` | 3806x4096 | `1:3636` | Service: واردات، صادرات و ترخیص |
| `car-mitsubishi-outlander.png` | 2023x1139 | `I1:3659;691:5805;6332:78497` | Mitsubishi Outlander |
| `car-mercedes-benz.png` | 1184x1184 | `I1:3660;691:5805;6332:78497` | Mercedes Benz Car |
| `car-toyota-camry.png` | 1200x800 | `I1:3661;691:5805;6332:78497` | Toyota Camry LE |
| `car-mg-5.png` | 1079x706 | `I1:3662;691:5805;6332:78497` | MG 5 |
| `car-toyota-cross.png` | 1600x1067 | `I1:3663;691:5805;6332:78497` | Toyota Cross |
| `card-featured-car.png` | 640x480 | `1:3679` | Featured Vehicle Card |
| `truck-man-tgx.png` | 1600x900 | `I1:3686;691:5805;6332:78497` | MAN TGX Truck |
| `truck-mercedes-actros.png` | 1417x945 | `I1:3687;691:5805;6332:78497` | Mercedes Benz Actros Truck |
| `truck-scania-r450.png` | 1280x720 | `I1:3688;691:5805;6332:78497` | Scania R450 Truck |
| `truck-renault-t520.png` | 1280x960 | `I1:3689;691:5805;6332:78497` | Renault T520 Truck |
| `truck-volvo-fh500.png` | 3840x2880 | `I1:3690;691:5805;6332:78497` | Volvo FH500 Truck |
| `card-featured-truck.png` | 1144x760 | `1:3706` | Featured Truck Card |
| `blog-porsche-luxury.png` | 1600x1067 | `I1:3726;3626:71606;1127:50676` | Blog: پورشه لوکس |
| `blog-customs-clearance-steps.png` | 4096x2341 | `I1:3727;3626:71606;1127:50676` | Blog: مراحل ترخیص کالا |
| `blog-mercedes-actros-import.png` | 1680x945 | `I1:3728;3626:71606;1127:50676` | Blog: واردات مرسدس بنز آکتروس |

### UI Icons & Logos (`public/icons/`) - SVGs
| File Name | Dimensions | Figma Source Node | Description |
| :--- | :--- | :--- | :--- |
| `logo-brand.svg` | 93x24 | `I1:3554;3337:20888` | Azar Tarkhis Official Brand Logo |
| `icon-login.svg` | 16x16 | `I1:3554;2892:55743;293:22912` | Login / User outline icon |
| `icon-call-outgoing.svg` | 16x16 | `I1:3554;3022:111486;293:23312` | Consultation / Call outgoing icon |
| `icon-home.svg` | 16x16 | `I1:3554;3894:96618;293:23160` | Home navigation icon |
| `icon-arrow-left.svg` | 24x24 | `I1:3567;3756:26111;3056:112489;292:21252` | RTL Primary button arrow icon |
| `icon-arrow-right.svg` | 20x20 | `I1:3723;293:22240` | RTL Next navigation arrow |
| `icon-line-arrow-left.svg` | 20x20 | `I1:3726;3626:71607;763:1453;3626:71734;293:22726` | Read more line arrow icon |
| `vector-hero-underline.svg` | 106x16 | `I1:3567;3756:26111;3056:112480` | Curved light-blue accent underline |
| `logo-mitsubishi.svg` | 20x20 | `I1:3659;691:5805;6330:78307` | Mitsubishi Brand Logo |
| `logo-mercedes-benz.svg` | 20x20 | `I1:3660;691:5805;6330:78307` | Mercedes-Benz Brand Logo |
| `logo-toyota.svg` | 20x20 | `I1:3661;691:5805;6330:78307` | Toyota Brand Logo |
| `logo-mg.svg` | 20x20 | `I1:3662;691:5805;6330:78307` | MG Brand Logo |
| `logo-man.svg` | 20x20 | `I1:3686;691:5805;6330:78307` | MAN Truck Brand Logo |
| `logo-scania.svg` | 20x20 | `I1:3687;691:5805;6330:78307` | Scania Truck Brand Logo |
| `logo-renault.svg` | 20x20 | `I1:3688;691:5805;6330:78307` | Renault Truck Brand Logo |
| `logo-volvo.svg` | 20x20 | `I1:3689;691:5805;6330:78307` | Volvo Truck Brand Logo |
| `logo-daf.svg` | 24x24 | `I1:3690;691:5805;6330:78307` | DAF Truck Brand Logo |
| `icon-currency-indicator.svg` | 33x15 | `10:5469` | Currency rate indicator trend icon |
| `icon-clock.svg` | 12x12 | `I1:3726;3626:71566;763:1500;763:1453;3624:71445;655:11746` | Clock / Read time metadata icon |
| `icon-send.svg` | 24x24 | `I1:3744;2176:22585;293:21548` | Newsletter send airplane icon |
| `icon-sms.svg` | 20x20 | `I1:3744;2176:22589` | Email / SMS contact icon |
| `icon-instagram.svg` | 20x20 | `I1:3744;2176:22610;293:22322` | Instagram social icon |
| `icon-whatsapp.svg` | 20x20 | `I1:3744;2176:22611;293:22322` | WhatsApp social icon |
| `icon-location.svg` | 20x20 | `I1:3744;2176:22616` | Location map pin icon |
| `icon-call-calling.svg` | 20x20 | `I1:3744;2176:22622` | Phone call icon |
