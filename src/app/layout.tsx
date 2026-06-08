import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import DiamondLoading from "@/components/DiamondLoading";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diamond Digital | Thiết Kế Web & Chuyển Đổi Số Cho Doanh Nghiệp",
  description: "Diamond Digital chuyên thiết kế website, phát triển ứng dụng di động và giải pháp chuyển đổi số cao cấp. Đối tác công nghệ tin cậy cho doanh nghiệp Việt.",
  keywords: ["thiết kế web", "phát triển ứng dụng", "chuyển đổi số", "agency công nghệ", "mobile app", "UI/UX design", "digital marketing"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-diamond-navy text-white font-sans antialiased">
        <DiamondLoading />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
