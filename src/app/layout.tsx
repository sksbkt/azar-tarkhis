import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const peyda = localFont({
  src: [
    {
      path: "../fonts/Peyda-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/peyda-extralight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/peyda-light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Peyda-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Peyda-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Peyda-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Peyda-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Peyda-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Peyda-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-peyda",
  display: "swap",
});

export const metadata: Metadata = {
  title: "بازرگانی اصولی شجاعی | ترخیص، واردات و ترانزیت کالا",
  description: "خدمات جامع ترخیص کالا، تأمین ارز، واردات خودرو و کشنده، انبارداری و حمل بین‌الملل",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={`${peyda.variable} h-full`}>
      <body className={`${peyda.className} min-h-full flex flex-col bg-surface-white text-text-body font-sans antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
