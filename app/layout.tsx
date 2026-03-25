import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spark Motivation - 당신의 심장을 뛰게 만드는 강력한 동기부여 문구",
  description: "당신의 하루를 바꿀 강력한 동기부여 문구를 확인하세요",
  verification: {
    google: 'KuK3EOzv_4fwOHW7fCMhoeWyBbfhU5k0QyWEzLoWQlw'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
      <Analytics />
    </html>
  );
}
