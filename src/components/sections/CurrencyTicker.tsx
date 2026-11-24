"use client";

import React from "react";
import { currencyTickerItems } from "@/data/homeData";

export function CurrencyTicker() {
  const duplicatedCurrencies = [
    ...currencyTickerItems,
    ...currencyTickerItems,
    ...currencyTickerItems,
  ];

  return (
    <section
      id="exchange"
      style={{ clipPath: "polygon(0 20%, 100% 0%, 100% 100%, 0 80%)" }}
      className="group w-full h-[88px] bg-[#084B70] relative select-none overflow-hidden flex items-center"
    >
      {/* Left viewport edge soft fade mask so items emerge smoothly */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#084B70] to-transparent z-20"
      />

      {/* Continuous Marquee Ticker Track */}
      <div className="relative w-full overflow-hidden h-full flex items-center z-10">
        <div className="flex items-center animate-marquee hover:[animation-play-state:paused] group-hover:[animation-play-state:paused] whitespace-nowrap">
          {duplicatedCurrencies.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="inline-flex items-center gap-2 whitespace-nowrap select-none font-sans"
            >
              {/* 1. Currency Name (Right) */}
              <span className="text-white text-[15px] font-normal font-sans">
                {item.name}
              </span>

              {/* 2. Exchange Rate Number (Middle) */}
              <span className="text-[#F5B027] text-[15.5px] font-semibold tabular-nums tracking-tight font-sans">
                {item.rate}
              </span>

              {/* 3. Custom Toman SVG Icon (Left of Number) */}
              <svg
                width="22"
                height="10"
                viewBox="0 0 22 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[25px] h-[11.5px] shrink-0"
                aria-label="تومان"
              >
                <path
                  d="M18.4046 3.44841H20.0415C20.2802 3.44841 20.4849 3.3642 20.6554 3.19578C20.8344 3.01894 20.9239 2.81262 20.9239 2.57683V0.227356H21.8703V2.58947C21.8703 2.94315 21.7807 3.27157 21.6017 3.57473C21.4227 3.87789 21.1797 4.11789 20.8728 4.29473C20.5659 4.47157 20.2333 4.55999 19.8753 4.55999H18.4046V3.44841ZM18.7498 0.227377H19.8752V1.35159H18.7498V0.227377ZM16.9467 0.227377H18.0721V1.35159H16.9467V0.227377Z"
                  fill="#DFF3FF"
                />
                <path
                  d="M16.1111 3.44843H18.5792L18.7071 3.57474V4.43369L18.5792 4.56001H16.1111V3.44843Z"
                  fill="#DFF3FF"
                />
                <path
                  d="M11.5818 6.7958L13.1291 6.2779C13.5298 6.15159 13.8282 5.94948 14.0243 5.67159C14.2289 5.40211 14.3312 5.0779 14.3312 4.69896V4.44632C14.1351 4.52211 13.8325 4.56001 13.4233 4.56001H12.5281C12.2126 4.56001 11.9228 4.48422 11.6585 4.33264C11.3942 4.17264 11.1853 3.96211 11.0319 3.70106C10.8869 3.44001 10.8145 3.1579 10.8145 2.85474C10.8145 2.71158 10.823 2.60632 10.84 2.53895L11.0446 1.41474C11.1128 1.01053 11.3089 0.673686 11.6329 0.404212C11.9569 0.134738 12.3277 0 12.7455 0H13.4616C13.7941 0 14.101 0.0842113 14.3824 0.252633C14.6637 0.412633 14.8854 0.63158 15.0474 0.909475C15.2094 1.17895 15.2904 1.47369 15.2904 1.79369V3.44843H16.2878L16.4157 3.57474V4.43369L16.2878 4.56001H15.2904C15.2733 5.89054 14.6296 6.76212 13.3593 7.17475L11.8503 7.68001L11.5818 6.7958ZM14.3312 3.44843V1.79369C14.3312 1.58316 14.2545 1.40632 14.101 1.26316C13.9561 1.11158 13.7771 1.03579 13.5639 1.03579H12.6432C12.4641 1.03579 12.3149 1.09053 12.1956 1.2C12.0762 1.30105 11.9995 1.44842 11.9654 1.64211L11.7736 2.66527C11.765 2.69053 11.7608 2.73264 11.7608 2.79158C11.7608 2.97685 11.8247 3.13264 11.9526 3.25895C12.089 3.38527 12.251 3.44843 12.4386 3.44843H14.3312Z"
                  fill="#DFF3FF"
                />
                <path
                  d="M16.1428 8.88837H16.552C16.7993 8.88837 17.0039 8.82521 17.1659 8.69889C17.3364 8.56416 17.4472 8.37468 17.4984 8.13047L17.7669 6.82942C17.8522 6.42521 18.0525 6.09257 18.368 5.83152C18.692 5.57047 19.0543 5.43994 19.455 5.43994H20.1711C20.4951 5.43994 20.7978 5.51994 21.0791 5.67994C21.3604 5.83994 21.5821 6.05889 21.7441 6.33679C21.9146 6.61468 21.9999 6.91363 21.9999 7.23363V8.79995C21.9999 9.16205 21.889 9.45258 21.6674 9.67153C21.4542 9.89047 21.1558 9.99995 20.7722 9.99995H19.2376C18.6323 9.99995 18.1932 9.72626 17.9204 9.1789C17.7755 9.45679 17.5751 9.66311 17.3193 9.79784C17.0721 9.93258 16.7993 9.99995 16.5009 9.99995H16.1428V8.88837ZM21.0535 8.88837V7.23363C21.0535 7.0231 20.9768 6.84626 20.8233 6.7031C20.6699 6.55152 20.4866 6.47573 20.2734 6.47573H19.4166C19.2376 6.47573 19.0756 6.53468 18.9307 6.65258C18.7857 6.77047 18.6962 6.91784 18.6621 7.09468L18.4703 8.09258C18.4618 8.11784 18.4575 8.15995 18.4575 8.21889C18.4575 8.40416 18.5214 8.56416 18.6493 8.69889C18.7772 8.82521 18.9349 8.88837 19.1225 8.88837H21.0535Z"
                  fill="#DFF3FF"
                />
                <path
                  d="M13.0916 8.88837H16.6254L16.7533 9.01468V9.87363L16.6254 9.99995H13.0916V8.88837Z"
                  fill="#DFF3FF"
                />
                <path
                  d="M10.7979 8.88837H13.266L13.3939 9.01468V9.87363L13.266 9.99995H10.7979V8.88837Z"
                  fill="#DFF3FF"
                />
                <path
                  d="M10.5204 9.99998C10.1538 9.99998 9.81701 9.91156 9.51009 9.73472C9.2117 9.55787 8.97298 9.32208 8.79394 9.02735C8.61491 8.72419 8.52539 8.39576 8.52539 8.04208V0.0492147H9.48451V8.01682C9.48451 8.26103 9.56551 8.46734 9.72749 8.63576C9.898 8.80419 10.1069 8.8884 10.3541 8.8884H10.9807L11.1086 9.01471V9.87366L10.9807 9.99998H10.5204Z"
                  fill="#DFF3FF"
                />
                <path
                  d="M2.60881 9.91902C2.13138 9.91902 1.69232 9.80112 1.29162 9.56533C0.899444 9.33796 0.583999 9.02638 0.345284 8.63059C0.115095 8.2348 0 7.80533 0 7.34217V1.25477H0.959122V7.20322C0.959122 7.64954 1.11684 8.02849 1.43229 8.34007C1.74773 8.65165 2.13138 8.80743 2.58324 8.80743H4.89792C5.27304 8.80743 5.57996 8.6727 5.81867 8.40322C6.06591 8.13375 6.18953 7.80954 6.18953 7.43059V1.05267H7.13587V7.65796C7.13587 8.07059 7.03356 8.44954 6.82895 8.7948C6.62434 9.14007 6.34726 9.41375 5.99771 9.61586C5.64816 9.81796 5.26878 9.91902 4.85955 9.91902H2.60881ZM3.01804 0H4.14341V1.12421H3.01804V0Z"
                  fill="#DFF3FF"
                />
              </svg>

              {/* 4. Tall Thin Diagonal Slash Divider */}
              <svg
                width="14"
                height="34"
                viewBox="0 0 14 34"
                fill="none"
                aria-hidden="true"
                className="mx-6 shrink-0"
              >
                <line
                  x1="12"
                  y1="1"
                  x2="2"
                  y2="33"
                  stroke="rgba(255, 255, 255, 0.22)"
                  strokeWidth="1"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Pinned Right Button Container */}
      <div className="pointer-events-none absolute inset-0 z-30">
        <div className="max-w-[1380px] mx-auto h-full px-4 sm:px-6 md:px-8 flex items-center justify-start">
          <div className="pointer-events-auto relative flex items-center bg-[#084B70] py-2 pl-3 pr-4 md:py-3 md:pl-4 md:pr-6">
            {/* Smooth fade-out gradient on the left side of the button */}
            <div
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, rgba(8, 75, 112, 0) 0%, rgba(8, 75, 112, 0.85) 55%, #084B70 100%)",
              }}
              className="pointer-events-none absolute inset-y-0 -left-8 md:-left-12 w-8 md:w-12"
            />
            {/* Solid blocker to the right of the button so text never peeks out behind it */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 left-full w-screen bg-[#084B70]"
            />
            <a
              href="#currency-rates"
              className="inline-flex items-center justify-center px-3.5 py-2 text-[12px] gap-2 rounded-[8px] md:px-6 md:py-3 md:text-[14px] md:gap-3.5 md:rounded-[10px] bg-[#F0A818] hover:bg-[#E29B0D] text-[#4A3306] font-sans font-medium shadow-[0_4px_14px_rgba(0,0,0,0.18)] transition-colors whitespace-nowrap"
            >
              <span>نرخ ارز امروز</span>
              <svg viewBox="0 0 16 16" className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#4A3306]" fill="none" aria-hidden="true">
                <path
                  d="M10 3.5L5.5 8L10 12.5"
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
    </section>
  );
}

export default CurrencyTicker;
