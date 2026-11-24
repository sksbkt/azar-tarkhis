"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { headerData } from "@/data/homeData";
import { Menu, X, User, ChevronDown } from "lucide-react";

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 w-full bg-transparent pointer-events-none pt-3 pb-2 transition-all">
      <div
        className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto"
        style={{
          filter:
            "drop-shadow(0px 6px 12px rgba(15, 23, 42, 0.06)) drop-shadow(0px 14px 28px rgba(15, 23, 42, 0.11))",
        }}
      >
        {/* Floating Navbar Container with Unified Trapezoid SVG Background */}
        <div
          dir="rtl"
          className="relative flex items-center justify-between h-16 px-6 sm:px-8"
        >
          {/* Exact Figma Unified Trapezoid Background */}
          <svg
            viewBox="14 5 1277 64"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
            aria-hidden="true"
          >
            {/* Left wing: rounded inward-bevel geometry */}
            <path
              d="M32.3112 69L32.3112 5L27.0042 5C19.4135 5 13.7298 11.9592 15.2461 19.397L23.9691 62.187C24.7774 66.1518 28.2647 69 32.3112 69Z"
              fill="white"
            />
            {/* Center fill: overlapping by 0.5px to prevent subpixel seams */}
            <rect x="32" y="5" width="1241" height="64" fill="white" />
            {/* Right wing: rounded inward-bevel geometry */}
            <path
              d="M1272.31 5L1272.31 69L1277.62 69C1285.21 69 1290.89 62.0408 1289.38 54.603L1280.65 11.813C1279.84 7.84816 1276.36 5 1272.31 5Z"
              fill="white"
            />
          </svg>

          {/* Right side (RTL start): SOLUS CUSTOMS logo + 'خانه' link with house icon */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
              <div className="relative w-[93px] h-6">
                <Image
                  src={headerData.brand.logoUrl}
                  alt={headerData.brand.name}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            <Link
              href="/"
              className="hidden lg:inline-flex items-center gap-1.5 px-2 py-1 text-sm font-medium text-text-dark hover:text-primary-blue transition-colors"
            >
              <div className="relative w-4 h-4 flex-shrink-0">
                <Image
                  src="/icons/icon-home.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span>خانه</span>
            </Link>
          </div>

          {/* Left side (RTL end): 'تماس با ما' with phone icon + bordered pill button 'ورود | ثبتنام' */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* 'تماس با ما' Text link with phone icon in primary blue */}
            <Link
              href="#contact"
              className="hidden lg:inline-flex items-center gap-1.5 text-sm font-medium text-primary-blue hover:text-primary-blue/80 transition-colors"
            >
              <div className="relative w-4 h-4 flex-shrink-0">
                <Image
                  src="/icons/icon-call-outgoing.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
              <span>تماس با ما</span>
            </Link>

            {/* Auth Button: bordered pill button (121px × 32px, rounded-[6px], border-border-gray, text-text-body) */}
            {isLoggedIn ? (
              <button
                type="button"
                onClick={() => setIsLoggedIn(false)}
                title="کلیک برای تغییر به حالت مهمان"
                className="hidden lg:flex items-center gap-2 px-3 h-8 bg-surface-ice border border-accent-blue/30 rounded-tag text-text-dark shadow-2xs cursor-pointer group hover:bg-surface-sky transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-primary-blue text-surface-white flex items-center justify-center text-[10px] font-semibold">
                  <User className="w-3 h-3" />
                </div>
                <span className="text-xs font-bold leading-tight text-primary-blue">
                  {headerData.actions.userProfile.name}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-primary-blue/70 transition-transform group-hover:translate-y-0.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setIsLoggedIn(true)}
                title="ورود یا ثبت نام"
                className="hidden lg:inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-[8px] border border-border-gray hover:bg-[#E5E8EC] text-[#334155] transition-colors duration-200 cursor-pointer text-xs sm:text-sm font-medium shadow-2xs"
              >
                <div className="relative w-4 h-4 flex-shrink-0">
                  <Image
                    src={headerData.actions.login.icon}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span>ورود | ثبت نام</span>
              </button>
            )}

            {/* Mobile/Tablet Menu Button (< lg) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-text-dark hover:bg-surface-gray rounded-button-sm transition-colors cursor-pointer"
              aria-label="منوی موبایل"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer (< lg) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 bg-surface-white rounded-card-lg shadow-dropdown border border-border-gray/40 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-2">
              {/* Navigation Items */}
              {headerData.navigation.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs py-2 px-3 rounded-button-sm text-text-dark hover:bg-surface-alt transition-colors"
                >
                  {item.label}
                </Link>
              ))}

              {/* Divider */}
              <div className="my-1 border-t border-border-gray/30" />

              {/* تماس با ما */}
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 text-xs py-2 px-3 rounded-button-sm text-primary-blue hover:bg-surface-ice transition-colors font-medium"
              >
                <div className="relative w-4 h-4 flex-shrink-0">
                  <Image
                    src="/icons/icon-call-outgoing.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span>تماس با ما</span>
              </Link>

              {/* ورود | ثبت نام Button */}
              {isLoggedIn ? (
                <button
                  type="button"
                  onClick={() => {
                    setIsLoggedIn(false);
                    setMobileMenuOpen(false);
                  }}
                  title="کلیک برای تغییر به حالت مهمان"
                  className="flex items-center justify-between w-full mt-1 px-3 py-2 bg-surface-ice border border-accent-blue/30 rounded-button-sm text-text-dark shadow-2xs cursor-pointer group hover:bg-surface-sky transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary-blue text-surface-white flex items-center justify-center text-[10px] font-semibold">
                      <User className="w-3 h-3" />
                    </div>
                    <span className="text-xs font-bold leading-tight text-primary-blue">
                      {headerData.actions.userProfile.name}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-primary-blue/70" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsLoggedIn(true);
                    setMobileMenuOpen(false);
                  }}
                  title="ورود یا ثبت نام"
                  className="inline-flex items-center justify-center gap-2 w-full mt-1 px-3.5 py-2.5 rounded-[8px] border border-border-gray hover:bg-[#E5E8EC] text-[#334155] transition-colors duration-200 cursor-pointer text-xs font-medium shadow-2xs"
                >
                  <div className="relative w-4 h-4 flex-shrink-0">
                    <Image
                      src={headerData.actions.login.icon}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span>ورود | ثبت نام</span>
                </button>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
