"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { carVehicles, truckVehicles, VehicleItem } from "@/data/homeData";

const pointerConfigs = {
  cars: {
    x: -6, // negative = move left, positive = move right
    y: 4, // negative = move up, positive = move down
    scale: 1.0,
  },
  tractor: {
    x: -6, // negative = move left, positive = move right
    y: -4, // negative = move up, positive = move down
    scale: 1.0,
  },
};

export function VehicleCatalog() {
  const carsTrackRef = useRef<HTMLDivElement>(null);
  const trucksTrackRef = useRef<HTMLDivElement>(null);

  const scrollResetTimersRef = React.useRef<{
    cars?: ReturnType<typeof setTimeout>;
    trucks?: ReturnType<typeof setTimeout>;
  }>({});

  React.useEffect(() => {
    const timers = scrollResetTimersRef.current;
    return () => {
      if (timers.cars) clearTimeout(timers.cars);
      if (timers.trucks) clearTimeout(timers.trucks);
    };
  }, []);

  const handleScrollLeft = (
    rowKey: "cars" | "trucks",
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!ref.current) return;
    ref.current.scrollBy({ left: -260, behavior: "smooth" });

    if (scrollResetTimersRef.current[rowKey]) {
      clearTimeout(scrollResetTimersRef.current[rowKey]);
    }

    scrollResetTimersRef.current[rowKey] = setTimeout(() => {
      ref.current?.scrollTo({ left: 0, behavior: "smooth" });
    }, 5000);
  };

  const renderVehicleCard = (vehicle: VehicleItem) => (
    <div
      key={vehicle.id}
      className="w-[214px] sm:w-[220px] shrink-0 flex flex-col select-none group cursor-pointer overflow-visible"
    >
      {/* Layer A — Top Ice-Blue Info Header */}
      <div className="bg-[#DEF0FC] rounded-t-[18px] pt-3.5 pb-6 px-3.5 flex items-center justify-between gap-2">
        {/* Right Column: Title + Price Row */}
        <div className="flex-1 min-w-0 text-right">
          <h4 className="text-[#1E293B] text-[14.5px] font-extrabold text-right leading-snug truncate">
            {vehicle.name}
          </h4>

          {/* Price Row with Custom Typographic Cyan Toman SVG Icon */}
          <div className="mt-1.5 flex items-center justify-start gap-1.5">
            <span className="text-[#475569] text-[13.5px] font-bold tracking-tight tabular-nums">
              {vehicle.priceToman}
            </span>
            <svg
              width="22"
              height="10"
              viewBox="0 0 22 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[24px] h-[11px] shrink-0"
              aria-label="تومان"
            >
              <path d="M18.4046 3.44841H20.0415C20.2802 3.44841 20.4849 3.3642 20.6554 3.19578C20.8344 3.01894 20.9239 2.81262 20.9239 2.57683V0.227356H21.8703V2.58947C21.8703 2.94315 21.7807 3.27157 21.6017 3.57473C21.4227 3.87789 21.1797 4.11789 20.8728 4.29473C20.5659 4.47157 20.2333 4.55999 19.8753 4.55999H18.4046V3.44841ZM18.7498 0.227377H19.8752V1.35159H18.7498V0.227377ZM16.9467 0.227377H18.0721V1.35159H16.9467V0.227377Z" fill="#13A8E5"/>
              <path d="M16.1111 3.44843H18.5792L18.7071 3.57474V4.43369L18.5792 4.56001H16.1111V3.44843Z" fill="#13A8E5"/>
              <path d="M11.5818 6.7958L13.1291 6.2779C13.5298 6.15159 13.8282 5.94948 14.0243 5.67159C14.2289 5.40211 14.3312 5.0779 14.3312 4.69896V4.44632C14.1351 4.52211 13.8325 4.56001 13.4233 4.56001H12.5281C12.2126 4.56001 11.9228 4.48422 11.6585 4.33264C11.3942 4.17264 11.1853 3.96211 11.0319 3.70106C10.8869 3.44001 10.8145 3.1579 10.8145 2.85474C10.8145 2.71158 10.823 2.60632 10.84 2.53895L11.0446 1.41474C11.1128 1.01053 11.3089 0.673686 11.6329 0.404212C11.9569 0.134738 12.3277 0 12.7455 0H13.4616C13.7941 0 14.101 0.0842113 14.3824 0.252633C14.6637 0.412633 14.8854 0.63158 15.0474 0.909475C15.2094 1.17895 15.2904 1.47369 15.2904 1.79369V3.44843H16.2878L16.4157 3.57474V4.43369L16.2878 4.56001H15.2904C15.2733 5.89054 14.6296 6.76212 13.3593 7.17475L11.8503 7.68001L11.5818 6.7958ZM14.3312 3.44843V1.79369C14.3312 1.58316 14.2545 1.40632 14.101 1.26316C13.9561 1.11158 13.7771 1.03579 13.5639 1.03579H12.6432C12.4641 1.03579 12.3149 1.09053 12.1956 1.2C12.0762 1.30105 11.9995 1.44842 11.9654 1.64211L11.7736 2.66527C11.765 2.69053 11.7608 2.73264 11.7608 2.79158C11.7608 2.97685 11.8247 3.13264 11.9526 3.25895C12.089 3.38527 12.251 3.44843 12.4386 3.44843H14.3312Z" fill="#13A8E5"/>
              <path d="M16.1428 8.88837H16.552C16.7993 8.88837 17.0039 8.82521 17.1659 8.69889C17.3364 8.56416 17.4472 8.37468 17.4984 8.13047L17.7669 6.82942C17.8522 6.42521 18.0525 6.09257 18.368 5.83152C18.692 5.57047 19.0543 5.43994 19.455 5.43994H20.1711C20.4951 5.43994 20.7978 5.51994 21.0791 5.67994C21.3604 5.83994 21.5821 6.05889 21.7441 6.33679C21.9146 6.61468 21.9999 6.91363 21.9999 7.23363V8.79995C21.9999 9.16205 21.889 9.45258 21.6674 9.67153C21.4542 9.89047 21.1558 9.99995 20.7722 9.99995H19.2376C18.6323 9.99995 18.1932 9.72626 17.9204 9.1789C17.7755 9.45679 17.5751 9.66311 17.3193 9.79784C17.0721 9.93258 16.7993 9.99995 16.5009 9.99995H16.1428V8.88837ZM21.0535 8.88837V7.23363C21.0535 7.0231 20.9768 6.84626 20.8233 6.7031C20.6699 6.55152 20.4866 6.47573 20.2734 6.47573H19.4166C19.2376 6.47573 19.0756 6.53468 18.9307 6.65258C18.7857 6.77047 18.6962 6.91784 18.6621 7.09468L18.4703 8.09258C18.4618 8.11784 18.4575 8.15995 18.4575 8.21889C18.4575 8.40416 18.5214 8.56416 18.6493 8.69889C18.7772 8.82521 18.9349 8.88837 19.1225 8.88837H21.0535Z" fill="#13A8E5"/>
              <path d="M13.0916 8.88837H16.6254L16.7533 9.01468V9.87363L16.6254 9.99995H13.0916V8.88837Z" fill="#13A8E5"/>
              <path d="M10.7979 8.88837H13.266L13.3939 9.01468V9.87363L13.266 9.99995H10.7979V8.88837Z" fill="#13A8E5"/>
              <path d="M10.5204 9.99998C10.1538 9.99998 9.81701 9.91156 9.51009 9.73472C9.2117 9.55787 8.97298 9.32208 8.79394 9.02735C8.61491 8.72419 8.52539 8.39576 8.52539 8.04208V0.0492147H9.48451V8.01682C9.48451 8.26103 9.56551 8.46734 9.72749 8.63576C9.898 8.80419 10.1069 8.8884 10.3541 8.8884H10.9807L11.1086 9.01471V9.87366L10.9807 9.99998H10.5204Z" fill="#13A8E5"/>
              <path d="M2.60881 9.91902C2.13138 9.91902 1.69232 9.80112 1.29162 9.56533C0.899444 9.33796 0.583999 9.02638 0.345284 8.63059C0.115095 8.2348 0 7.80533 0 7.34217V1.25477H0.959122V7.20322C0.959122 7.64954 1.11684 8.02849 1.43229 8.34007C1.74773 8.65165 2.13138 8.80743 2.58324 8.80743H4.89792C5.27304 8.80743 5.57996 8.6727 5.81867 8.40322C6.06591 8.13375 6.18953 7.80954 6.18953 7.43059V1.05267H7.13587V7.65796C7.13587 8.07059 7.03356 8.44954 6.82895 8.7948C6.62434 9.14007 6.34726 9.41375 5.99771 9.61586C5.64816 9.81796 5.26878 9.91902 4.85955 9.91902H2.60881ZM3.01804 0H4.14341V1.12421H3.01804V0Z" fill="#13A8E5"/>
            </svg>
          </div>
        </div>

        {/* Left Column: Square Rounded Action Button */}
        <div className="w-[34px] h-[34px] shrink-0 rounded-[9px] border border-[#C5E2F6] bg-[#E8F5FE] group-hover:bg-white flex items-center justify-center text-[#475569] transition-colors shadow-2xs">
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M9.5 3.5L5 8l4.5 4.5"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Layer B — Overflowing Slanted Photo Card */}
      <div
        style={{
          clipPath: "url(#vehicle-photo-slant-mask)",
          width: "calc(100% + 10px)",
          marginRight: "-5px",
        }}
        className="relative z-10 -mt-4 h-[158px] overflow-hidden"
      >
        <img
          src={vehicle.imageUrl}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
        />

        {/* Unboxed White Brand Emblem */}
        <img
          src={vehicle.brandLogo}
          alt=""
          className="absolute top-3 right-3.5 z-20 w-7 h-7 object-contain brightness-0 invert drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)] pointer-events-none"
        />

        {/* Bottom Dark Gradient Scrim & Specs Row */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/85 via-black/45 to-transparent flex items-end justify-between px-3 pb-2.5 text-white/95 text-[10px] sm:text-[10.5px] font-medium whitespace-nowrap">
          {vehicle.specs?.map((spec, i) => (
            <span key={i}>{spec}</span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="prices" className="w-full py-10 bg-white">
      {/* Global SVG Clip-Path for Category Banner Cards & Slanted Photo Cards */}
      <svg width="0" height="0" className="pointer-events-none absolute opacity-0" aria-hidden="true">
        <defs>
          <clipPath id="price-banner-trapezoid-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.085 C 0,0.056 0.024,0.043 0.062,0.040 L 0.938,0.000 C 0.976,-0.003 1,0.015 1,0.045 L 1,0.915 C 1,0.944 0.976,0.957 0.938,0.960 L 0.062,1.000 C 0.024,1.003 0,0.985 0,0.955 Z" />
          </clipPath>
          <clipPath id="vehicle-photo-slant-mask" clipPathUnits="objectBoundingBox">
            <path d="M 0,0.165 C 0,0.115 0.025,0.088 0.065,0.084 L 0.935,0.000 C 0.975,-0.004 1,0.024 1,0.075 L 1,0.915 C 1,0.962 0.972,1 0.935,1 L 0.065,1 C 0.028,1 0,0.962 0,0.915 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Centered Rounded Light-Cyan Boxed Container */}
      <div className="max-w-[1380px] mx-auto rounded-[28px] bg-[#EDF6FC] pt-12 pb-14 pr-6 sm:pr-8 pl-0 relative overflow-hidden">
        {/* Full-Height Left-Edge Bright White Fade Overlay */}
        <div
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.88) 38%, rgba(255, 255, 255, 0) 100%)",
          }}
          className="pointer-events-none absolute inset-y-0 left-0 z-20 w-32 sm:w-40"
        />

        {/* Section Header */}
        <div className="text-right mb-8">
          <h2 className="text-[#035B81] text-[24px] lg:text-[28px] font-extrabold leading-9">
            قیمت روز
          </h2>
          <div className="w-5 h-[2.5px] bg-[#D4A017] rounded-full mt-2" />
          <p className="text-[#64748B] text-[13px] mt-2.5">
            خودروهای موجود به دلار و کشنده‌های وارداتی به یورو، هر دو با معادل تومانی
          </p>
        </div>

        {/* ==================== 1. CARS ROW ==================== */}
        <div className="mb-10 lg:mb-12 relative w-full">
          {/* Row Flex Container */}
          <div className="relative w-full flex items-center">
            {/* Pinned Category Banner Card in z-30 */}
            <div className="relative z-30 shrink-0">
              {/* Matching background block behind banner right side */}
              <div className="absolute inset-y-0 -right-20 w-24 bg-[#EDF6FC] z-0 pointer-events-none" />

            {/* Cars Feature Banner (Right) with Unclipped Protruding Cutout */}
            <div className="relative w-[175px] h-[250px] shrink-0 select-none overflow-visible">
              {/* Clipped Colored Card Background */}
              <div
                dir="rtl"
                style={{ clipPath: "url(#price-banner-trapezoid-mask)" }}
                className="absolute inset-0 pt-6 flex flex-col justify-start bg-gradient-to-b from-[#8594A6] to-[#77879A]"
              >
                {/* 1. Right-Aligned Persian Title & Subtitle */}
                <div className="w-full pr-4 pl-2 text-right">
                  <h3 className="text-white text-[16px] font-extrabold leading-snug">
                    قیمت روز خودرو
                  </h3>
                  <p className="text-white/90 text-[10.5px] font-medium mt-0.5">
                    موجود، مدل روز
                  </p>
                </div>

                {/* 2. Edge-to-Edge English Watermark + Left-Aligned Chevron Strip */}
                <div dir="ltr" className="w-full pl-2.5 pr-1 mt-2 flex flex-col items-start">
                  <span
                    dir="ltr"
                    style={{ fontWeight: 700 }}
                    className="block font-sans font-bold tracking-[-0.02em] leading-[0.95] select-none text-[48px] text-[#667587]"
                  >
                    CARS
                  </span>

                  <svg
                    viewBox="0 0 156 54"
                    style={{
                      transform: `translate(${pointerConfigs.cars.x}px, ${pointerConfigs.cars.y}px) scale(${pointerConfigs.cars.scale})`,
                      transformOrigin: "left center",
                    }}
                    className="w-[144px] h-[48px] mt-1.5 pointer-events-none select-none"
                    fill="none"
                    aria-hidden="true"
                  >
                    {[0, 25, 50, 75, 100, 125].map((x) => (
                      <polygon
                        key={x}
                        points={`${x + 17},0 ${x + 30},0 ${x + 13},27 ${x + 30},54 ${x + 17},54 ${x},27`}
                        fill="#667587"
                      />
                    ))}
                  </svg>
                </div>
              </div>

              {/* Layer B — Protruding 3D Vehicle Cutout */}
              <img
                src="/images/card-featured-car.png"
                alt="قیمت روز خودرو"
                style={{
                  width: "188px",
                  maxWidth: "none",
                  height: "auto",
                  right: "-24px",
                  bottom: "-35px",
                }}
                className="absolute z-20 object-contain object-bottom pointer-events-none "
              />
            </div>
          </div>

          {/* Relative Row Track Wrapper */}
          <div className="relative flex-1 min-w-0 overflow-hidden">
            {/* Horizontal Scrollable Vehicle Cards Track */}
            <div
              ref={carsTrackRef}
              className="w-full overflow-x-auto scroll-smooth no-scrollbar flex items-stretch gap-5 py-2 pl-0 pr-3"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {carVehicles.map(renderVehicleCard)}
            </div>

            {/* Left scroll arrow button positioned over the leftmost card */}
            <button
              type="button"
              onClick={() => handleScrollLeft("cars", carsTrackRef)}
              aria-label="مشاهده موارد بیشتر"
              className="absolute left-5 top-[58%] -translate-y-1/2 z-30 w-10 h-10 rounded-[12px] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.14)] flex items-center justify-center text-[#334155] hover:bg-slate-50 active:scale-95 transition"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                <path
                  d="M10 3.5L5.5 8L10 12.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Row Link below left */}
        <div className="relative z-30 mt-3.5 w-full flex justify-end pl-6">
          <a
            href="#cars-catalog"
            className="group relative inline-flex items-center gap-2 pb-1 text-[15px] lg:text-[16px] font-extrabold text-[#035B81] hover:text-[#024866] transition-colors duration-300"
          >
            <span>خودروها</span>
            <svg
              viewBox="0 0 16 16"
              className="w-4 h-4 transition-transform duration-300 ease-out group-hover:-translate-x-1"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3.5L5.5 8L10 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Smooth fading + expanding underline on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 inset-x-0 h-[2px] rounded-full bg-[#035B81] opacity-0 scale-x-0 origin-right transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-x-100"
            />
          </a>
        </div>
      </div>

      {/* ==================== 2. TRUCKS ROW ==================== */}
      <div className="relative w-full">
        {/* Row Flex Container */}
        <div className="relative w-full flex items-center">
          {/* Pinned Category Banner Card in z-30 */}
          <div className="relative z-30 shrink-0">
            {/* Matching background block behind banner right side */}
            <div className="absolute inset-y-0 -right-20 w-24 bg-[#EDF6FC] z-0 pointer-events-none" />

            {/* Trucks Feature Banner (Right) with Unclipped Protruding Cutout */}
            <div className="relative w-[175px] h-[250px] shrink-0 select-none overflow-visible">
              {/* Clipped Colored Card Background */}
              <div
                dir="rtl"
                style={{ clipPath: "url(#price-banner-trapezoid-mask)" }}
                className="absolute inset-0 pt-6 flex flex-col justify-start bg-gradient-to-b from-[#38C6F4] to-[#20B3EA]"
              >
                {/* 1. Right-Aligned Persian Title & Subtitle */}
                <div className="w-full pr-4 pl-2 text-right">
                  <h3 className="text-white text-[16px] font-extrabold leading-snug">
                    کشنده‌ها
                  </h3>
                  <p className="text-white/90 text-[10.5px] font-medium mt-0.5">
                    وارداتی، مدل روز
                  </p>
                </div>

                {/* 2. Edge-to-Edge English Watermark + Left-Aligned Chevron Strip */}
                <div dir="ltr" className="w-full pl-2.5 pr-1 mt-2 flex flex-col items-start">
                  <span
                    dir="ltr"
                    style={{ fontWeight: 700 }}
                    className="block font-sans font-bold tracking-[-0.02em] leading-[0.95] select-none text-[42px] text-[#0FA0DA]"
                  >
                    Tractor
                  </span>

                  <svg
                    viewBox="0 0 156 54"
                    style={{
                      transform: `translate(${pointerConfigs.tractor.x}px, ${pointerConfigs.tractor.y}px) scale(${pointerConfigs.tractor.scale})`,
                      transformOrigin: "left center",
                    }}
                    className="w-[144px] h-[48px] mt-1.5 pointer-events-none select-none"
                    fill="none"
                    aria-hidden="true"
                  >
                    {[0, 25, 50, 75, 100, 125].map((x) => (
                      <polygon
                        key={x}
                        points={`${x + 17},0 ${x + 30},0 ${x + 13},27 ${x + 30},54 ${x + 17},54 ${x},27`}
                        fill="#0FA0DA"
                      />
                    ))}
                  </svg>
                </div>
              </div>

              {/* Layer B — Protruding 3D Vehicle Cutout */}
              <img
                src="/images/card-featured-truck.png"
                alt="کشنده‌ها"
                style={{
                  width: "222px",
                  maxWidth: "none",
                  height: "auto",
                  right: "-28px",
                  bottom: "-24px",
                }}
                className="absolute z-20 object-contain object-bottom pointer-events-none "
              />
            </div>
          </div>

          {/* Relative Row Track Wrapper */}
          <div className="relative flex-1 min-w-0 overflow-hidden">
            {/* Horizontal Scrollable Vehicle Cards Track */}
            <div
              ref={trucksTrackRef}
              className="w-full overflow-x-auto scroll-smooth no-scrollbar flex items-stretch gap-5 py-2 pl-0 pr-3"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {truckVehicles.map(renderVehicleCard)}
            </div>

            {/* Left scroll arrow button positioned over the leftmost card */}
            <button
              type="button"
              onClick={() => handleScrollLeft("trucks", trucksTrackRef)}
              aria-label="مشاهده موارد بیشتر"
              className="absolute left-5 top-[58%] -translate-y-1/2 z-30 w-10 h-10 rounded-[12px] bg-white shadow-[0_6px_18px_rgba(15,23,42,0.14)] flex items-center justify-center text-[#334155] hover:bg-slate-50 active:scale-95 transition"
            >
              <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none">
                <path
                  d="M10 3.5L5.5 8L10 12.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Row Link below left */}
        <div className="relative z-30 mt-3.5 w-full flex justify-end pl-6">
          <a
            href="#trucks-catalog"
            className="group relative inline-flex items-center gap-2 pb-1 text-[15px] lg:text-[16px] font-extrabold text-[#035B81] hover:text-[#024866] transition-colors duration-300"
          >
            <span>کشنده‌ها</span>
            <svg
              viewBox="0 0 16 16"
              className="w-4 h-4 transition-transform duration-300 ease-out group-hover:-translate-x-1"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 3.5L5.5 8L10 12.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* Smooth fading + expanding underline on hover */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 inset-x-0 h-[2px] rounded-full bg-[#035B81] opacity-0 scale-x-0 origin-right transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-x-100"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
  );
}

export default VehicleCatalog;
