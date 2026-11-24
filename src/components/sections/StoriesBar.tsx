"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { storyItems } from "@/data/homeData";
import { Container } from "@/components/ui/Container";

export function StoriesBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full pt-2 pb-8">
      {/* Exact Vector ClipPath from Figma node 1:2416 */}
      <svg width="0" height="0" className="pointer-events-none absolute" aria-hidden="true">
        <defs>
          <clipPath id="story-card-mask" clipPathUnits="objectBoundingBox">
            <path d="M0 0.06897C0 0.02817 0.03831 -0.00371 0.08246 0.00035L0.93246 0.07851C0.9708 0.08203 1 0.1117 1 0.14713V0.92805C1 0.96886 0.96169 1.00074 0.91754 0.99668L0.06754 0.91852C0.0292 0.91499 0 0.88532 0 0.84989V0.06897Z" />
          </clipPath>
        </defs>
      </svg>

      <Container>
        {/* Exact Stories-container from Figma node 1:3557: layout=row, justifyContent: center, gap: 12px */}
        <div
          ref={scrollRef}
          className="flex items-center justify-start xl:justify-center gap-3 overflow-x-auto no-scrollbar scroll-smooth py-1 px-1"
        >
          {storyItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center flex-shrink-0 cursor-pointer w-20 transition-transform hover:-translate-y-0.5"
            >
              {/* Native Vector Mask Geometry with SVG ClipPath and Drop Shadow on unclipped parent */}
              <div className="relative w-20 h-[88px] transition-all duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.06)] group-hover:drop-shadow-[0_0_8px_var(--color-accent-blue-subtle)]">
                {/* Clipped image container */}
                <div
                  className="relative w-full h-full overflow-hidden bg-surface-gray"
                  style={{ clipPath: "url(#story-card-mask)" }}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="80px"
                  />
                  {/* Subtle vignette gradient from Figma */}
                  <div className="absolute inset-0 bg-vignette opacity-25 group-hover:opacity-10 transition-opacity pointer-events-none" />
                </div>

                {/* SVG Outline Border matching the exact vector clipPath geometry */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none text-border-gray/40 group-hover:text-accent-blue transition-colors"
                  viewBox="0 0 80 88"
                  fill="none"
                >
                  <path
                    d="M 0 6.07 C 0 2.48 3.06 -0.33 6.60 0.03 L 74.60 6.91 C 77.66 7.22 80 9.83 80 12.95 V 81.67 C 80 85.26 76.94 88.07 73.40 87.71 L 5.40 80.83 C 2.34 80.52 0 77.91 0 74.79 Z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Exact Persian Typography: 12px Regular line-height 20px, text-align: center */}
              <span className="mt-1 text-xs font-normal text-text-dark text-center truncate max-w-[80px] group-hover:text-primary-blue transition-colors">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default StoriesBar;
