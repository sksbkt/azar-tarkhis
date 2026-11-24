"use client";

import React from "react";
import { blogArticles } from "@/data/homeData";

export function WeblogSection() {
  const handlePrev = () => {};
  const handleNext = () => {};

  return (
    <section id="weblog" className="w-full bg-[#F8FAFC] py-14 sm:py-16 relative">
      {/* Global SVG Clip-Path for Slanted Blog Body & Parallelogram Meta Badge */}
      <svg width="0" height="0" className="pointer-events-none absolute opacity-0" aria-hidden="true">
        <defs>
          {/* White content body: upward-sloping top and bottom edges (parallel parallelogram with rounded corners) */}
          <clipPath id="blog-body-slant-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.092 C 0,0.060 0.018,0.046 0.045,0.044 L 0.955,0.000 C 0.982,-0.002 1,0.014 1,0.046 L 1,0.908 C 1,0.940 0.982,0.954 0.955,0.956 L 0.045,1.000 C 0.018,1.002 0,0.986 0,0.954 Z" />
          </clipPath>

          {/* Bottom-right Date & Author parallelogram badge: parallel upward-sloping top and bottom edges */}
          <clipPath id="blog-meta-badge-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.190 C 0,0.130 0.032,0.095 0.085,0.088 L 0.915,0.000 C 0.968,-0.006 1,0.028 1,0.088 L 1,0.810 C 1,0.870 0.968,0.905 0.915,0.912 L 0.085,1.000 C 0.032,1.006 0,0.972 0,0.912 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="max-w-[1380px] mx-auto px-6 sm:px-8">
        {/* Section Header with Next/Prev Arrow Buttons */}
        <div className="flex items-center justify-between mb-8">
          <div className="text-right">
            <h2 className="text-[#035B81] text-[24px] lg:text-[28px] font-extrabold leading-9">
              وبلاگ و مقالات
            </h2>
            <div className="w-5 h-[2.5px] bg-[#D4A017] rounded-full mt-2 mb-2" />
            <p className="text-[#64748B] text-[13px] mt-2.5">
              راهکارهای تخصصی برای بازرگانان، شرکتها و صاحبان کالا؛ برآورد اولیه همان لحظه
            </p>
          </div>

          {/* Top-left navigation buttons */}
          <div dir="rtl" className="flex items-center gap-2.5">
            {/* Right button: White bordered with right-pointing chevron (>) */}
            <button
              type="button"
              onClick={handlePrev}
              aria-label="مقاله قبلی"
              className="w-10 h-10 rounded-[11px] bg-white border border-[#CBD5E1] text-[#035B81] hover:bg-slate-50 flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" aria-hidden="true">
                <path
                  d="M6.5 3.5L11 8L6.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Left button: Solid #035B81 teal with left-pointing chevron (<) */}
            <button
              type="button"
              onClick={handleNext}
              aria-label="مقاله بعدی"
              className="w-10 h-10 rounded-[11px] bg-[#035B81] hover:bg-[#024866] text-white shadow-[0_4px_12px_rgba(3,91,129,0.2)] flex items-center justify-center transition-colors"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" aria-hidden="true">
                <path
                  d="M9.5 3.5L5 8L9.5 12.5"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* 3-Column Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {blogArticles.map((article) => (
            <article
              key={article.id}
              className="relative flex flex-col select-none group pb-7"
            >
              {/* Layer A — Narrower Top Image Container */}
              <div className="relative z-0 w-[calc(100%-36px)] mx-auto h-[188px] rounded-t-[16px] overflow-hidden">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
                />

                {/* Category Pill Tag on Top-Left of Image */}
                <span className="absolute top-3 left-3 z-10 rounded-full bg-[#5B6777]/75 backdrop-blur-sm px-3.5 py-1.5 text-white text-[12px] font-medium leading-none shadow-sm">
                  {article.category}
                </span>
              </div>

              {/* Layer B — Wider Slanted White Content Body Overlapping Upward Over the Image */}
              <div className="relative z-10 w-full -mt-5 drop-shadow-[0_10px_24px_rgba(15,23,42,0.05)]">
                <div
                  style={{ clipPath: "url(#blog-body-slant-mask)" }}
                  className="bg-white pt-8 pb-11 px-6 text-right min-h-[215px] flex flex-col justify-between"
                >
                  <div>
                    {/* Title */}
                    <h3 className="text-[#1E293B] text-[16px] lg:text-[17px] font-extrabold leading-snug mb-3 group-hover:text-[#035B81] transition-colors">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[#64748B] text-[13px] font-normal leading-[1.9] line-clamp-2 mb-6">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Bottom-Left Ice-Blue Square Arrow Button (←) */}
                  <div className="flex items-center justify-end">
                    <a
                      href={article.slug ? `/blog/${article.slug}` : `#blog-${article.id}`}
                      aria-label={article.title}
                      className="w-9 h-9 rounded-[10px] bg-[#E3F2FC] group-hover:bg-[#035B81] text-[#035B81] group-hover:text-white flex items-center justify-center transition-colors duration-200"
                    >
                      <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" aria-hidden="true">
                        <path
                          d="M12.5 8H3.5M3.5 8L7.5 4M3.5 8L7.5 12"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Layer C — Protruding Slanted Parallelogram Date & Author Badge */}
              <div
                style={{ clipPath: "url(#blog-meta-badge-mask)" }}
                className="absolute bottom-0 right-5 z-20 bg-[#D8DEE6] px-4 py-4 flex flex-col items-center justify-center shadow-[0_6px_14px_rgba(15,23,42,0.07)]"
              >
                <div
                  dir="rtl"
                  className="inline-flex items-center gap-1.5 rounded-full bg-[#131926] px-3.5 py-1.5 text-white text-[11.5px] font-bold tracking-tight leading-none"
                >
                  <svg viewBox="0 0 14 14" className="w-3.5 h-3.5 text-white/90 shrink-0" fill="none" aria-hidden="true">
                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M7 4.2V7.2L9 8.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span dir="ltr">{article.date || "۱۴۰۵/۰۷/۳۱"}</span>
                </div>
                <span className="mt-3 text-[#035B81] text-[12.5px] font-semibold leading-tight">
                  {article.author || "محمد پوراسکندر"}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Center موارد بیشتر < Link */}
        <div className="mt-10 flex justify-center">
          <a
            href="#blog"
            dir="rtl"
            className="group inline-flex items-center gap-2.5 text-[#035B81] hover:text-[#024866] text-[16px] font-semibold transition-colors"
          >
            <span>موارد بیشتر</span>
            <svg
              viewBox="0 0 16 16"
              className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3L5 8L10 13"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default WeblogSection;
