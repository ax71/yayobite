"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products, generateWhatsAppUrl, type Product } from "@/lib/products";

const CATEGORIES = [
  { key: "all", label: "Semua" },
  { key: "best-seller", label: "Best Seller" },
  { key: "signature", label: "Signature" },
  { key: "seasonal", label: "Seasonal" },
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div
      variants={cardVariants}
      layout
      className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-soft hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm ${
              product.category === "best-seller"
                ? "bg-primary/90 text-white"
                : product.category === "signature"
                  ? "bg-on-surface/80 text-white"
                  : "bg-tertiary/90 text-white"
            }`}
          >
            {product.category === "best-seller"
              ? "Best Seller"
              : product.category === "signature"
                ? "Signature"
                : "Seasonal"}
          </span>
        </div>
      </div>

      <div className="p-5 md:p-6 flex flex-col gap-4">
        <div>
          <h3 className="font-headline text-xl font-bold text-on-surface mb-1">
            {product.name}
          </h3>
        </div>

        <span className="text-primary font-extrabold text-2xl">
          {product.price}
        </span>

        <a
          href={generateWhatsAppUrl(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 bg-primary text-on-primary py-3.5 rounded-xl font-bold text-sm hover:shadow-lg hover:brightness-110 transition-all cta-glow"
        >
          <WhatsAppIcon className="w-5 h-5" />
          Pesan via WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

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
            className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 text-sm shadow-md"
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
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
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
            variants={containerVariants}
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

        {/* Bottom CTA */}
        <motion.section
          className="px-6 max-w-3xl mx-auto mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-primary-fixed rounded-3xl p-10 md:p-14">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-on-primary-fixed mb-4">
              Bingung Mau Pilih yang Mana?
            </h2>
            <p className="text-on-primary-fixed-variant text-lg mb-8 max-w-md mx-auto">
              Chat langsung aja! Kita bantu rekomendasiin brownies yang paling
              pas buat kamu.
            </p>
            <a
              href="https://wa.me/628153888886?text=Halo%20Yayobite!%20Boleh%20minta%20rekomendasi%20brownies%20dong?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:-translate-y-1 transition-all cta-glow"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Chat Yayobite
            </a>
          </div>
        </motion.section>
      </main>
    </>
  );
}
