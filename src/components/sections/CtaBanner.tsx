"use client";

import React, { useState } from "react";

interface CtaBannerProps {
  onOpenConsultation?: () => void;
  ctaImage?: string;
}

export function CtaBanner({
  onOpenConsultation,
  ctaImage = "/images/cta-banner-graphic.png",
}: CtaBannerProps) {
  const [modalOpen, setModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleConsultationClick = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      setModalOpen(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && phone) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setModalOpen(false);
        setFullName("");
        setPhone("");
      }, 2500);
    }
  };

  return (
    <section id="consultation" className="w-full bg-white relative">
      <div className="max-w-[1380px] mx-auto px-6 sm:px-8 my-14">
        <div className="relative h-[206px] w-full select-none overflow-visible">
          {/* 1. Deep-Teal Background Parallelogram (strictly parallel -3.5deg vertical edges + clean 14px radius) */}
          <div
            style={{ transform: "skewX(-3.5deg)" }}
            className="absolute inset-0 z-10 rounded-[14px] bg-[#045D89] overflow-hidden"
          >
            {/* Counter-skewed RTL content so typography and button remain 100% upright */}
            <div
              dir="rtl"
              style={{ transform: "skewX(3.5deg)" }}
              className="h-full w-full flex flex-col justify-center items-start text-right pr-8 sm:pr-12 md:pl-[43%]"
            >
              <h2 className="text-white text-[23px] lg:text-[26px] font-bold leading-snug tracking-tight">
                تجارت شما، با یک شریک مطمئن
              </h2>
              <p className="text-white/75 text-[12px] lg:text-[13px] font-normal mt-2 leading-relaxed">
                از مشاوره تا اجرا، در کنار شما هستیم. نام و شماره همراه را بگذارید؛ کارشناس همان خدمت با شما تماس میگیرد.
              </p>
              <button
                type="button"
                onClick={handleConsultationClick}
                className="mt-5 inline-flex items-center justify-center gap-3.5 min-w-[134px] rounded-[10px] bg-white hover:bg-slate-50 text-[#334155] text-[14.5px] font-medium px-7 py-3 shadow-[0_4px_14px_rgba(0,0,0,0.08)] transition-all active:scale-95 cursor-pointer"
              >
                <span>مشاوره</span>
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 text-[#334155]" fill="none" aria-hidden="true">
                  <path
                    d="M10 3.5L5.5 8L10 12.5"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Protruding Left Handshake Image Parallelogram (extends past left edge + zero top white strip) */}
          <div
            style={{ transform: "skewX(-4.5deg)" }}
            className="hidden md:block absolute -left-[14px] -top-[21px] z-20 w-[43%] h-[248px] rounded-[14px] overflow-hidden shadow-[0_14px_30px_rgba(4,93,137,0.18)]"
          >
            <img
              src={ctaImage}
              alt="تجارت شما، با یک شریک مطمئن"
              style={{
                position: "absolute",
                top: "-28px",
                left: "-4%",
                width: "108%",
                maxWidth: "none",
                height: "calc(100% + 44px)",
                filter: "hue-rotate(18deg) saturate(1.35) brightness(1.02)",
              }}
              className="object-cover object-center pointer-events-none select-none"
            />
            <div
              aria-hidden="true"
              style={{
                background:
                  "linear-gradient(90deg, rgba(56, 189, 248, 0.12) 0%, rgba(2, 132, 199, 0.24) 100%)",
                mixBlendMode: "color",
              }}
              className="pointer-events-none absolute inset-0"
            />
          </div>
        </div>
      </div>

      {/* Consultation Modal Form */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-2xl border border-slate-200 relative text-right">
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="absolute top-4 left-4 text-slate-400 hover:text-slate-600 text-lg cursor-pointer"
            >
              ✕
            </button>

            <h3 className="text-base font-bold text-[#045D89] mb-2">
              درخواست مشاوره تخصصی
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              نام و شماره همراه خود را وارد کنید تا کارشناسان ما با شما تماس بگیرند.
            </p>

            {submitted ? (
              <div className="text-center py-6 bg-emerald-50 rounded-xl text-emerald-600">
                <div className="text-2xl mb-1">✓</div>
                <p className="text-xs font-bold">درخواست شما با موفقیت ثبت شد.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <label htmlFor="modal-name" className="text-xs font-medium text-slate-700">
                    نام و نام خانوادگی
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="نام خود را وارد کنید"
                    className="px-3.5 py-2 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#045D89]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="modal-phone" className="text-xs font-medium text-slate-700">
                    شماره تماس
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="۰۹۱۲XXXXXXX"
                    className="px-3.5 py-2 text-xs text-slate-800 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-[#045D89] text-right"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full py-2.5 text-xs font-semibold text-white bg-[#045D89] hover:bg-[#034d72] rounded-lg shadow-sm transition-colors cursor-pointer"
                >
                  ثبت و ارسال درخواست
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export const ConsultationCta = CtaBanner;
export default CtaBanner;
