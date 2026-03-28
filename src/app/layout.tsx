import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yayobite — Dari Petani ke Brownies Kamu",
  description:
    "Brownies artisan lokal dari bahan kakao Bali. Setiap gigitan kamu mendukung petani lokal dan alam kita.",
  keywords: ["brownies", "lokal", "petani", "kakao", "bali", "artisan"],
  openGraph: {
    title: "Yayobite — Dari Petani ke Brownies Kamu",
    description:
      "Brownies artisan lokal dari bahan kakao Bali. Setiap gigitan kamu mendukung petani lokal.",
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
      className={`${plusJakarta.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
