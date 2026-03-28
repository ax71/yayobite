import type { Metadata } from "next";
import { EB_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const ebGaramond = EB_Garamond({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yayobite — Brownies sehat untuk kamu",
  description:
    "Brownies artisan lokal dari bahan kakao Bali. Setiap gigitan kamu mendukung petani lokal dan alam kita.",
  keywords: [
    "brownies",
    "lokal",
    "petani",
    "kakao",
    "bali",
    "artisan",
    "yayobite",
  ],
  openGraph: {
    title: "Yayobite — Brownies sehat untuk kamu",
    description:
      "Brownies lokal dari bahan kakao Bali. Setiap gigitan kamu mendukung petani lokal.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${manrope.variable} ${ebGaramond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf5ee] text-[#3a302a]">
        {children}
      </body>
    </html>
  );
}
