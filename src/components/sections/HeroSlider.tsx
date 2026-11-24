"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { heroSlides } from "@/data/homeData";

function buildHeroClipPath(w: number, h: number, isDesktop: boolean): string {
  if (!w || !h) return "";
  const r = 20;
  const slant = Math.round(w * 0.022); // subtle top slope matching Figma
  if (isDesktop) {
    return [
      `M 0 ${r}`,
      `A ${r} ${r} 0 0 1 ${r} 0`,
      `L ${w - r} ${slant}`,
      `A ${r} ${r} 0 0 1 ${w} ${slant + r}`,
      `L ${w} ${h}`,
      `L 0 ${h}`,
      "Z",
    ].join(" ");
  }
  // Mobile / Tablet (< 1024px): all 4 corners rounded with exact r=20px inside live W x H
  return [
    `M 0 ${r}`,
    `A ${r} ${r} 0 0 1 ${r} 0`,
    `L ${w - r} ${slant}`,
    `A ${r} ${r} 0 0 1 ${w} ${slant + r}`,
    `L ${w} ${h - r}`,
    `A ${r} ${r} 0 0 1 ${w - r} ${h}`,
    `L ${r} ${h}`,
    `A ${r} ${r} 0 0 1 0 ${h - r}`,
    "Z",
  ].join(" ");
}

export function HeroSlider() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const heroMaskRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState<{ w: number; h: number; isDesktop: boolean }>({
    w: 700,
    h: 525,
    isDesktop: true,
  });

  useEffect(() => {
    const el = heroMaskRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const isDesktop = window.innerWidth >= 1024;
      setDims({
        w: Math.round(rect.width),
        h: Math.round(rect.height),
        isDesktop,
      });
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    window.addEventListener("resize", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const slides = heroSlides;
  const currentSlide = slides[activeSlideIndex];

  const nextSlide = useCallback(() => {
    setActiveSlideIndex((prev) => (prev + 1) % heroSlides.length);
  }, []);

  // Auto-play timer (6.5s per Figma specs)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      className="w-full pt-6 overflow-visible relative z-10"
      style={{
        background:
          "linear-gradient(to top, rgba(186, 226, 248, 0.58) 0%, rgba(208, 235, 250, 0.32) 32%, rgba(255, 255, 255, 0) 62%)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Global SVG Clip-Path Definitions for Hero Component */}
      <svg width="0" height="0" className="pointer-events-none absolute opacity-0" aria-hidden="true">
        <defs>
          {/* Dynamic Hero Clip Path tracking live width x height */}
          <clipPath id="hero-dynamic-mask" clipPathUnits="userSpaceOnUse">
            <path d={buildHeroClipPath(dims.w, dims.h, dims.isDesktop)} />
          </clipPath>

          <clipPath id="hero-tab-trapezoid-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.24 C 0,0.11 0.04,0.055 0.095,0.048 L 0.905,0.002 C 0.96,-0.003 1,0.055 1,0.185 L 1,1 L 0,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Inner Container: 12-Column Grid (RTL: Col 5 Right = Text + Tabs, Col 7 Left = Image) */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        {/* Right Column (Text + Tabs — lg:col-span-5) */}
        <div className="contents lg:flex lg:flex-col lg:justify-between lg:col-span-5 pt-4 lg:pt-7 text-right">
          <div className="order-0 lg:order-none">
            {/* Eyebrow & Brush Stroke */}
            <div className="flex flex-col items-start">
              <span className="text-[#D4A017] text-[14px] lg:text-[15px] font-semibold">
                {currentSlide.subTitle}
              </span>
              <div className="relative w-[96px] h-[16px] mt-1.5 mb-3">
                <Image
                  src="/icons/vector-hero-underline.svg"
                  alt=""
                  fill
                  className="object-contain object-right"
                />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-[#035B81] text-[30px] sm:text-[36px] lg:text-[42px] font-extrabold leading-[1.22] tracking-tight whitespace-pre-line">
              {currentSlide.mainTitle}
            </h1>

            {/* 4 Dark Pill Badges */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {currentSlide.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[#1E293B] text-white text-[11px] font-medium px-3 py-1 rounded-full leading-none"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Subtitle */}
            <p className="mt-3.5 text-[#64748B] text-[12px] lg:text-[13px] leading-[1.7] max-w-[480px]">
              {currentSlide.description}
            </p>

            {/* CTA Button */}
            <div className="flex flex-col">
              <Link
                href="#services"
                className="mt-6 self-start bg-[#035B81] hover:bg-[#024866] text-white font-medium px-4 py-2.5 text-[13px] gap-2 rounded-[10px] lg:px-7 lg:py-3.5 lg:text-[15px] lg:gap-3 lg:rounded-[12px] inline-flex items-center transition-colors group cursor-pointer"
              >
                <span>{currentSlide.ctaText}</span>
                <div className="relative w-4 h-4 transition-transform group-hover:-translate-x-1">
                  <Image
                    src={currentSlide.ctaIcon}
                    alt=""
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </Link>
            </div>
          </div>

          {/* 4-Tab Bar */}
          <div className="order-2 lg:order-none mt-4 lg:mt-10 w-full grid grid-cols-4 gap-1.5 items-end -mb-4 lg:-mb-5 relative z-10">
            {slides.map((slide, idx) => {
              const isActive = idx === activeSlideIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  tabIndex={-1}
                  onClick={() => setActiveSlideIndex(idx)}
                  style={{ clipPath: "url(#hero-tab-trapezoid-mask)" }}
                  className={`relative w-full pt-3 pb-7 px-1.5 flex flex-col items-center justify-start transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none ring-0 focus:ring-0 select-none after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-8 after:bg-gradient-to-t after:from-slate-900/[0.04] after:to-transparent after:pointer-events-none ${
                    isActive
                      ? "h-[82px] bg-[#035B81] text-white z-20"
                      : "h-[76px] bg-white text-[#64748B] hover:text-[#334155] z-10"
                  }`}
                >
                  <span className="text-[12px] lg:text-[13px] font-normal truncate max-w-full leading-none">
                    {slide.tabTitle}
                  </span>

                  {isActive && (
                    <div className="w-[56px] lg:w-[66px] h-[2px] rounded-full bg-white/90 overflow-hidden mt-2">
                      <div
                        key={`timer-${activeSlideIndex}`}
                        className="h-full bg-[#38BDF8] animate-timer rounded-full"
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Left Column (Hero Image Card — lg:col-span-7) */}
        <div className="order-1 lg:order-none lg:col-span-7 relative z-10 mb-3 lg:-mb-12">
          <div style={{ filter: "drop-shadow(0px 18px 38px rgba(3, 91, 129, 0.15))" }}>
            <div
              ref={heroMaskRef}
              style={{
                clipPath: "url(#hero-dynamic-mask)",
                WebkitClipPath: "url(#hero-dynamic-mask)",
              }}
              className="w-full h-[360px] sm:h-[440px] lg:h-[525px] relative overflow-hidden mb-3 lg:mb-0"
            >
              <Image
                key={currentSlide.id}
                src={currentSlide.bannerImage}
                alt={currentSlide.mainTitle}
                fill
                priority
                className="w-full h-full object-cover object-center transition-opacity duration-500 animate-fade-in"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              {/* Ambient vignette */}
              <div className="absolute inset-0 bg-vignette opacity-20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSlider;
