import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/component/Navbar";
import { pixelToast, PixelToastContainer } from '@/component/Toast'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "min-link",
  description: "customize your project website url with personalised custom url",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <PixelToastContainer/>
      </body>
    </html>
  );
}
