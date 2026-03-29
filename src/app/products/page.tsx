"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import WhatsAppIcon from "@/lib/whatapp";

const CATEGORIES = [
  { key: "all", label: "Semua" },
  { key: "best-seller", label: "Best Seller" },
  { key: "signature", label: "Signature" },
  { key: "seasonal", label: "Seasonal" },
] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-sm py-3">
        <div className="flex justify-between items-center w-full px-6 md:px-10 lg:px-12 mx-auto">
          <Link
            href="/"
            className="group flex items-center gap-2 text-primary font-bold"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="text-2xl md:text-3xl font-headline italic tracking-tighter">
              Yayobite
            </span>
          </Link>
          <Link
            href="https://wa.me/628153888886?text=Halo!%20Saya%20mau%20order%20Yayobite%20brownies%20dong%20kak!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-5 py-2.5 rounded-full font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 text-sm shadow-md"
          >
            Order Now
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-16 md:pt-32 md:pb-24">
        <section className="px-6 max-w-7xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-on-surface leading-tight mb-4">
              Semua{" "}
              <span className="text-primary italic font-serif">Brownies</span>
            </h1>
            <p className="text-secondary text-lg md:text-xl max-w-2xl leading-relaxed">
              Dari bahan lokal pilihan, dibuat dengan cinta. Pilih favoritmu dan
              pesan langsung via WhatsApp.
            </p>
          </motion.div>
        </section>

        <section className="px-6 max-w-7xl mx-auto mb-10">
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full w-fit text-sm font-bold transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-primary text-white shadow-md"
                    : "bg-surface-container-high text-on-surface hover:bg-surface-container-highest"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>
        </section>

        <section className="px-6 max-w-7xl mx-auto">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            {filtered.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-secondary text-lg">
                Belum ada produk di kategori ini.
              </p>
            </div>
          )}
        </section>

        <motion.section
          className="px-6 max-w-4xl mx-auto mt-24 md:mt-32 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] -z-10 rounded-full" />

          <div className="relative overflow-hidden bg-[#3D2B1F] rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-20 shadow-2xl border border-white/10">
            <div className="absolute top-0 right-0 opacity-10 scale-150 rotate-12 -translate-y-1/4 translate-x-1/4 pointer-events-none select-none">
              <span className="text-[200px] md:text-[300px] leading-none text-white">
                🍪
              </span>
            </div>

            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block text-primary font-bold uppercase tracking-[0.3em] text-xs mb-6"
              >
                Butuh Bantuan?
              </motion.span>

              <h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-6 leading-[1.2]">
                Bingung Mau Pilih <br className="hidden md:block" />
                Varian yang Mana?
              </h2>

              <p className="text-white/70 text-base md:text-xl mb-10 max-w-lg mx-auto leading-relaxed">
                Jangan sungkan! Chat tim Yayobite sekarang, dan kami akan
                pilihkan
                <span className="text-white font-bold">
                  {" "}
                  brownies yang paling pas{" "}
                </span>{" "}
                untuk mood kamu hari ini.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://wa.me/628153888886?text=Halo%20Yayobite!%20Boleh%20minta%20rekomendasi%20brownies%20dong?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 bg-primary text-white px-5 py-2.5 md:px-10 md:py-5 rounded-full font-bold text-base md:text-lg"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Tanya Rekomendasi
                </Link>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}
