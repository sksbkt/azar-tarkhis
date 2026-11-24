"use client";

import React, { useState } from "react";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSent(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSent(false), 3000);
    }
  };

  return (
    <footer
      style={{ clipPath: "url(#footer-top-slant-mask)" }}
      className="w-full bg-[#1F242D] text-white pt-16 pb-10 select-none relative"
    >
      {/* Straight Diagonal Slanted SVG Clip-Path for Footer Top Edge */}
      <svg width="0" height="0" className="pointer-events-none absolute opacity-0" aria-hidden="true">
        <defs>
          <clipPath id="footer-top-slant-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.092 C 0,0.074 0.006,0.066 0.016,0.065 L 0.984,0.000 C 0.994,-0.001 1,0.025 1,0.025 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div dir="rtl" className="max-w-[1380px] mx-auto px-6 sm:px-8">
        {/* Top Row: Company Identity with Multi-Color OCS Logo (Right) & Newsletter (Left) */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
          {/* Right Side: Identity + Multi-Color OCS Logo */}
          <div className="flex flex-col items-start text-right">
            <div dir="ltr" className="inline-flex items-center gap-2.5">
              <svg width="64" height="32" viewBox="0 0 64 32" fill="none" aria-hidden="true">
                {/* Left Blue O */}
                <circle cx="14" cy="16" r="10.5" stroke="#026AA2" strokeWidth="4.5" />
                {/* Center Gold C */}
                <path
                  d="M36.5 8.2A10.5 10.5 0 1 0 36.5 23.8"
                  stroke="#F0A818"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
                {/* Right Blue S */}
                <path
                  d="M55.5 9.5C54.2 7.2 51.8 5.8 49 5.8C45.2 5.8 42.5 8.1 42.5 11.1C42.5 14.3 45.4 15.5 49.2 16.4C53 17.3 55.8 18.6 55.8 21.8C55.8 25 52.8 27.2 48.8 27.2C45.6 27.2 43.1 25.8 41.8 23.5"
                  stroke="#026AA2"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                />
              </svg>
              <div className="flex flex-col text-left leading-[1.08] text-white font-sans text-[11px] font-light tracking-[0.06em]">
                <span>OSULI</span>
                <span>CUSTOMS</span>
                <span>SERVICES</span>
              </div>
            </div>

            <h3 className="mt-3 text-white text-[20px] font-bold">
              شرکت بازرگانی اصولی شجاعی
            </h3>
            <p className="mt-1.5 text-[#94A3B8] text-[13px]">
              واردات و صادرات کالا • ترخیص مستقل • گمرکات سرزمینی اصلی و مناطق آزاد • مسیر ترکیبی خدمات
            </p>
          </div>

          {/* Left Side: Newsletter Signup */}
          <div className="flex flex-col items-start lg:items-end w-full lg:w-auto">
            {newsletterSent ? (
              <div className="px-4 py-2.5 bg-emerald-500/15 border border-emerald-500/30 rounded-[10px] text-[12px] text-emerald-400 font-medium">
                ایمیل شما با موفقیت ثبت شد.
              </div>
            ) : (
              <div dir="rtl" className="flex flex-col items-start">
                <span className="text-white text-[15.5px] font-bold leading-snug">
                  عضویت در خبرنامه
                </span>
                <span className="mt-1.5 mb-3.5 h-[2.5px] w-7 rounded-full bg-gradient-to-l from-[#F0A818] to-transparent" />

                <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2.5">
                  {/* Right: Dark Email Input */}
                  <div className="w-[270px] sm:w-[300px] h-11 rounded-[10px] bg-[#282E38] border border-white/10 px-3.5 flex items-center gap-2.5">
                    <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#94A3B8] shrink-0" fill="none" aria-hidden="true">
                      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
                      <path d="M3.5 6L10 10.5L16.5 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                    </svg>
                    <input
                      type="email"
                      required
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      placeholder="ایمیل خود را وارد کنید"
                      className="w-full bg-transparent text-white placeholder-[#94A3B8] text-[13px] focus:outline-none text-right"
                    />
                  </div>

                  {/* Left: Blue Square Send Button with Exact Paper-Plane SVG */}
                  <button
                    type="submit"
                    aria-label="عضویت"
                    className="w-11 h-11 shrink-0 rounded-[10px] bg-[#0284C7] hover:bg-[#0369A1] text-white flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[18px] h-[18px]"
                      aria-hidden="true"
                    >
                      <path
                        d="M20.5 3.5L10.8 13.2M20.5 3.5L14.2 20.5L10.8 13.2M20.5 3.5L3.5 9.8L10.8 13.2"
                        stroke="currentColor"
                        strokeWidth="1.85"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Middle Navigation Pill Bar (bg-[#2C333E] rounded-[12px]) */}
        <nav className="mt-8 w-full rounded-[12px] bg-[#2C333E] px-6 sm:px-8 py-3.5 flex flex-wrap items-center justify-start gap-6 sm:gap-8 text-[13.5px]">
          <a href="#home" className="inline-flex items-center gap-1.5 text-white font-bold">
            <span>صفحه اصلی</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 text-white/80 shrink-0"
              aria-hidden="true"
            >
              <path
                d="M10 12L6 8L10 4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#prices" className="text-[#CBD5E1] hover:text-white transition-colors">
            خودروهای سواری
          </a>
          <a href="#prices" className="text-[#CBD5E1] hover:text-white transition-colors">
            کشنده و کامیون
          </a>
          <a href="#services" className="text-[#CBD5E1] hover:text-white transition-colors">
            حمل و نقل
          </a>
          <a href="#services" className="text-[#CBD5E1] hover:text-white transition-colors">
            واردات، صادرات و ترخیص
          </a>
          <a href="#services" className="text-[#CBD5E1] hover:text-white transition-colors">
            انبارداری و سردخانه گمرکی
          </a>
          <a href="#services" className="text-[#CBD5E1] hover:text-white transition-colors">
            ثبت سفارش و امور ارزی
          </a>
        </nav>

        {/* Contact Information & Social Media Row */}
        <div className="mt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Right Side: Inline Contact Items Separated by Tall Thin / Slashes */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-2">
            {/* Email */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[#94A3B8] text-[12.5px]">پست الکترونیک</span>
              <span dir="ltr" className="text-white text-[13.5px] font-medium">info@osoulicustoms.com</span>
              <svg viewBox="0 0 16 16" className="w-4 h-4 text-[#0284C7] shrink-0" fill="none" aria-hidden="true">
                <rect x="2" y="3.5" width="12" height="9" rx="2" stroke="currentColor" strokeWidth="1.2" />
                <path d="M2.5 4.5L8 8.5L13.5 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <span aria-hidden="true" className="text-white/15 text-[20px] font-extralight mx-2">/</span>

            {/* Phone */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[#94A3B8] text-[12.5px]">تلفن تماس</span>
              <span dir="ltr" className="text-white text-[13.5px] font-medium">۰۲۱-۴۴۵۴۵۶۷</span>
              <svg viewBox="0 0 16 16" className="w-4 h-4 text-[#0284C7] shrink-0" fill="none" aria-hidden="true">
                <path
                  d="M3 2.5H5.5L7 6L5.5 7.25C6.35 9 7.5 10.15 9.25 11L10.5 9.5L14 11V13.5C14 13.78 13.78 14 13.5 14C6.5 14 2 9.5 2 2.5C2 2.22 2.22 2H3V2.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <span aria-hidden="true" className="text-white/15 text-[20px] font-extralight mx-2">/</span>

            {/* Address */}
            <div className="inline-flex items-center gap-2">
              <span className="text-[#94A3B8] text-[12.5px]">آدرس</span>
              <span className="text-white text-[13.5px] font-medium">تهران • جردن • ناهید غربی • گروه اصولی</span>
              <svg viewBox="0 0 16 16" className="w-4 h-4 text-[#0284C7] shrink-0" fill="none" aria-hidden="true">
                <path
                  d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9.5 8 14.5 8 14.5C8 14.5 12.5 9.5 12.5 6C12.5 3.5 10.5 1.5 8 1.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
                <circle cx="8" cy="6" r="2" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>
          </div>

          {/* Left Side: Social Media Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="اینستاگرام"
              className="w-10 h-10 rounded-[10px] bg-[#252B34] hover:bg-[#2F3743] border border-white/10 text-[#CBD5E1] hover:text-white flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M10 2C12.17 2 12.43 2.01 13.28 2.05C14.14 2.09 14.72 2.22 15.22 2.42C15.74 2.62 16.18 2.9 16.62 3.34C17.06 3.78 17.34 4.22 17.54 4.74C17.74 5.24 17.87 5.82 17.91 6.68C17.95 7.53 17.96 7.79 17.96 10C17.96 12.21 17.95 12.47 17.91 13.32C17.87 14.18 17.74 14.76 17.54 15.26C17.34 15.78 17.06 16.22 16.62 16.66C16.18 17.1 15.74 17.38 15.22 17.58C14.72 17.78 14.14 17.91 13.28 17.95C12.43 17.99 12.17 18 10 18C7.83 18 7.57 17.99 6.72 17.95C5.86 17.91 5.28 17.78 4.78 17.58C4.26 17.38 3.82 17.1 3.38 16.66C2.94 16.22 2.66 15.78 2.46 15.26C2.26 14.76 2.13 14.18 2.09 13.32C2.05 12.47 2.04 12.21 2.04 10C2.04 7.79 2.05 7.53 2.09 6.68C2.13 5.82 2.26 5.24 2.46 4.74C2.66 4.22 2.94 3.78 3.38 3.34C3.82 2.9 4.26 2.62 4.78 2.42C5.28 2.22 5.86 2.09 6.72 2.05C7.57 2.01 7.83 2 10 2ZM10 3.44C7.8 3.44 7.54 3.45 6.67 3.49C5.87 3.53 5.43 3.66 5.14 3.77C4.76 3.92 4.49 4.1 4.2 4.39C3.91 4.68 3.73 4.95 3.58 5.33C3.47 5.62 3.34 6.06 3.3 6.86C3.26 7.73 3.25 7.99 3.25 10.19C3.25 12.39 3.26 12.65 3.3 13.52C3.34 14.32 3.47 14.76 3.58 15.05C3.73 15.43 3.91 15.7 4.2 15.99C4.49 16.28 4.76 16.46 5.14 16.61C5.43 16.72 5.87 16.85 6.67 16.89C7.54 16.93 7.8 16.94 10 16.94C12.2 16.94 12.46 16.93 13.33 16.89C14.13 16.85 14.57 16.72 14.86 16.61C15.24 16.46 15.51 16.28 15.8 15.99C16.09 15.7 16.27 15.43 16.42 15.05C16.53 14.76 16.66 14.32 16.7 13.52C16.74 12.65 16.75 12.39 16.75 10.19C16.75 7.99 16.74 7.73 16.7 6.86C16.66 6.06 16.53 5.62 16.42 5.33C16.27 4.95 16.09 4.68 15.8 4.39C15.51 4.1 15.24 3.92 14.86 3.77C14.57 3.66 14.13 3.53 13.33 3.49C12.46 3.45 12.2 3.44 10 3.44ZM10 6C12.21 6 14 7.79 14 10C14 12.21 12.21 14 10 14C7.79 14 6 12.21 6 10C6 7.79 7.79 6 10 6ZM10 7.44C8.59 7.44 7.44 8.59 7.44 10C7.44 11.41 8.59 12.56 10 12.56C11.41 12.56 12.56 11.41 12.56 10C12.56 8.59 11.41 7.44 10 7.44ZM14.16 4.9C14.67 4.9 15.08 5.31 15.08 5.82C15.08 6.33 14.67 6.74 14.16 6.74C13.65 6.74 13.24 6.33 13.24 5.82C13.24 5.31 13.65 4.9 14.16 4.9Z" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noreferrer"
              aria-label="واتس‌اپ"
              className="w-10 h-10 rounded-[10px] bg-[#252B34] hover:bg-[#2F3743] border border-white/10 text-[#CBD5E1] hover:text-white flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M10 2C5.58 2 2 5.58 2 10C2 11.53 2.43 12.96 3.18 14.18L2.09 17.91L5.94 16.85C7.14 17.58 8.53 18 10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2ZM14.17 13.43C14 13.91 13.33 14.32 12.83 14.43C12.49 14.5 12.04 14.56 10.53 13.93C8.6 13.12 7.36 11.16 7.26 11.03C7.17 10.9 6.47 9.97 6.47 9C6.47 8.03 6.96 7.56 7.14 7.37C7.29 7.21 7.5 7.15 7.71 7.15C7.78 7.15 7.84 7.15 7.9 7.15C8.08 7.16 8.17 7.17 8.29 7.45C8.44 7.81 8.8 8.69 8.84 8.78C8.89 8.87 8.93 8.98 8.86 9.11C8.8 9.24 8.75 9.31 8.65 9.42C8.55 9.53 8.44 9.66 8.35 9.75C8.24 9.86 8.12 9.98 8.25 10.2C8.38 10.42 8.83 11.15 9.49 11.74C10.34 12.5 11.03 12.75 11.28 12.85C11.47 12.93 11.66 12.91 11.8 12.75C11.97 12.55 12.19 12.24 12.38 11.97C12.52 11.77 12.7 11.8 12.89 11.87C13.08 11.94 14.1 12.44 14.31 12.54C14.52 12.64 14.66 12.69 14.71 12.78C14.76 12.87 14.76 13.3 14.17 13.43Z" />
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me"
              target="_blank"
              rel="noreferrer"
              aria-label="تلگرام"
              className="w-10 h-10 rounded-[10px] bg-[#252B34] hover:bg-[#2F3743] border border-white/10 text-[#CBD5E1] hover:text-white flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M16.92 4.19C16.69 3.96 16.35 3.89 16.05 4.02L2.57 9.26C2.26 9.38 2.06 9.69 2.07 10.02C2.08 10.35 2.3 10.63 2.62 10.73L6.09 11.82L7.43 16.14C7.54 16.48 7.84 16.71 8.2 16.71C8.36 16.71 8.52 16.65 8.65 16.54L10.74 14.62L13.88 16.93C14.07 17.07 14.31 17.13 14.55 17.09C14.78 17.04 14.98 16.89 15.09 16.69L17.26 4.96C17.33 4.67 17.21 4.36 16.92 4.19ZM8.22 15.02L7.33 12.16L14.02 7.74L8.76 12.67L8.22 15.02ZM14.19 15.68L10.04 12.63L15.35 6.64L14.19 15.68Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Giant Edge-to-Edge SVG Vector Watermark */}
        <div dir="ltr" aria-hidden="true" className="mt-10 w-full select-none pointer-events-none">
          <svg
            viewBox="0 0 1320 112"
            className="w-full h-auto block overflow-visible"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="footer-watermark-grad" x1="0" y1="0" x2="0" y2="112" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.11" />
                <stop offset="58%" stopColor="#FFFFFF" stopOpacity="0.05" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.015" />
              </linearGradient>
            </defs>
            <text
              x="660"
              y="94"
              textAnchor="middle"
              textLength="1316"
              lengthAdjust="spacingAndGlyphs"
              fill="url(#footer-watermark-grad)"
              className="font-sans"
              style={{
                fontSize: "102px",
                fontWeight: 700,
                letterSpacing: "0.035em",
              }}
            >
              OSULI CUSTOMS SERVICES
            </text>
          </svg>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Right Side */}
          <div className="inline-flex items-center gap-2.5 text-[#F0A818] text-[13.5px] font-medium">
            <span className="w-5 h-[2px] rounded-full bg-[#F0A818]" />
            <span>همراه شما در مسیر تجارت جهانی</span>
          </div>

          {/* Left Side */}
          <p className="text-[#94A3B8] text-[12.5px]">
            © ۲۰۲۶ - تمامی حقوق برای شرکت بازرگانی اصولی شجاعی محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
