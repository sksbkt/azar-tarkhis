"use client";

import React from "react";
import { servicesData } from "@/data/homeData";

// Per-card calibration: exact scale & translate-y values to compensate for PNG whitespace
const cardConfigs: Record<
  string,
  {
    imageSrc?: string;
    imgTransform?: string;
    style?: React.CSSProperties;
    imgClass?: string;
  }
> = {
  "service-cars": {
    imageSrc: "/images/two_cars.png",
    imgTransform: "scale-[1.16] translate-y-[34px]",
  },
  Cars: {
    imageSrc: "/images/two_cars.png",
    imgTransform: "scale-[1.16] translate-y-[4px]",
  },
  "service-truck": {
    imgTransform: "scale-[1.03] translate-y-[2px]",
  },
  Truck: {
    imgTransform: "scale-[1.03] translate-y-[2px]",
  },
  "service-shipping": {
    style: {
      transform: "translateY(94px) scale(1.72)",
      transformOrigin: "bottom center",
    },
  },
  Shipping: {
    style: {
      transform: "translateY(34px) scale(1.42)",
      transformOrigin: "bottom center",
    },
  },
  "service-customs": {
    imgTransform: "scale-[1.24] translate-y-[6px]",
  },
  "Import/Export": {
    imgTransform: "scale-[1.24] translate-y-[6px]",
  },
  "service-storage": {
    style: {
      transform: "translateY(2px) scale(0.96)",
      transformOrigin: "bottom center",
    },
  },
  Storage: {
    style: {
      transform: "translateY(2px) scale(0.96)",
      transformOrigin: "bottom center",
    },
  },
  "service-orders": {
    imgTransform: "scale-[1.02] translate-y-[10px]",
  },
  Orders: {
    imgTransform: "scale-[1.02] translate-y-[10px]",
  },
};

export function ServicesGrid() {
  return (
    <div
      className="relative z-30 -mt-5"
      style={{ filter: "drop-shadow(0px -10px 22px rgba(15, 23, 42, 0.14))" }}
    >
      <section
        id="services"
        className="w-full pb-20 bg-white pt-10"
        style={{ clipPath: "polygon(0 14px, 100% 0, 100% 100%, 0 100%)" }}
      >
        {/* Global SVG Clip-Path for Service Base Cards */}
        <svg width="0" height="0" className="pointer-events-none absolute opacity-0" aria-hidden="true">
          <defs>
            <clipPath id="service-card-trapezoid-mask" clipPathUnits="objectBoundingBox">
              <path d="M 0,0.065 C 0,0.025 0.018,0 0.042,0 L 0.958,0 C 0.982,0 1,0.025 1,0.065 L 1,0.860 C 1,0.900 0.982,0.925 0.958,0.927 L 0.042,1.000 C 0.018,1.002 0,0.977 0,0.937 Z" />
            </clipPath>
          </defs>
        </svg>

        <div className="pt-12 sm:pt-14">
          <div className="max-w-[1220px] mx-auto px-4">
            {/* 1. Section Heading + Subtitle */}
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-[#035B81] text-[24px] lg:text-[28px] font-extrabold leading-9">
                خدمات ما
              </h2>
              <div className="w-5 h-[2.5px] rounded-full bg-[#D4A017] mx-auto mt-2" />
              <p className="text-[#64748B] text-[13px] lg:text-[14px] text-center mt-3 max-w-2xl mx-auto">
                راهکارهای تخصصی برای بازرگانان، شرکتها و صاحبان کالا؛ برآورد اولیه همان لحظه
              </p>
            </div>

            {/* 2. Unified 6-Card Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12 max-w-[1220px] mx-auto px-4 mt-12">
              {servicesData.map((service) => {
                const watermarkText =
                  service.watermark === "Import/Export"
                    ? "Import / Export"
                    : service.watermark;

                const cfg =
                  cardConfigs[service.id] ||
                  cardConfigs[service.watermark] || {
                    imageSrc: undefined,
                    imgTransform: "scale-[1.10] translate-y-[4px]",
                  };

                const serviceImage = cfg.imageSrc || service.imageUrl || (service as { image?: string }).image;

                return (
                  <div
                    key={service.id}
                    className="group flex flex-col items-center text-center cursor-pointer transition-transform duration-300 ease-out hover:scale-[1.008]"
                  >
                    {/* 1. Standardized English Watermark */}
                    <span
                      dir="ltr"
                      style={{
                        backgroundImage:
                          "linear-gradient(180deg, #D5DCE4 0%, #E7ECF1 58%, rgba(255, 255, 255, 0) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                      className="relative z-10 block text-[42px] lg:text-[50px] font-semibold tracking-tight leading-none bg-clip-text text-transparent select-none pointer-events-none -mb-5 lg:-mb-6"
                    >
                      {watermarkText}
                    </span>

                    {/* 2. Unified Cutout Stage with Per-Card Sizing & Overlap */}
                    <div className="relative z-20 w-full h-[210px] flex items-end justify-center -mb-7 pointer-events-none overflow-visible">
                      <div className="w-full h-full flex items-end justify-center transition-transform duration-300 ease-out origin-bottom group-hover:scale-[1.1]">
                        <img
                          src={serviceImage}
                          alt={service.title}
                          style={cfg.style}
                          className={`w-full h-full object-contain object-bottom origin-bottom drop-shadow-[0_12px_16px_rgba(15,23,42,0.16)] ${cfg.imgTransform || ""}`}
                        />
                      </div>
                    </div>

                    {/* 3. Angled #EAEEF2 Base Card (flat top, upward-slanted bottom) */}
                    <div
                      style={{ clipPath: "url(#service-card-trapezoid-mask)" }}
                      className="relative z-10 w-full bg-[#EAEEF2] pt-11 pb-11 px-6 flex flex-col items-center text-center"
                    >
                      <h3 className="text-[#2B3440] text-[20px] lg:text-[22px] font-extrabold leading-snug mb-3">
                        {service.title}
                      </h3>

                      <p className="text-[#4B5563] text-[13px] font-normal leading-[1.9] max-w-[320px] mb-6">
                        {service.description}
                      </p>

                      <span className="inline-flex items-center justify-center gap-1.5 text-[#2B3440] group-hover:text-[#035B81] text-[13px] font-bold transition-colors">
                        <span>بررسی و ادامه روند درخواست</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3.5 h-3.5 shrink-0 transition-transform group-hover:-translate-x-1"
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
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesGrid;
