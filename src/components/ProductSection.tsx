"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Product, products } from "@/lib/products";
import { ProductCard } from "./ProductCard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function ProductSection() {
  const featuredProducts: Product[] = products.slice(0, 3);

  return (
    <section
      id="products"
      className="px-4 sm:px-6 lg:px-8 py-20 md:py-32 max-w-7xl mx-auto"
    >
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12 md:mb-16">
        <div className="space-y-2">
          <h2 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold text-[#3D2B1F] leading-[1.1]">
            Favorit Bulan Ini: <br className="hidden sm:block" />
            <span className="text-primary italic font-serif">
              Brownies Yayobite
            </span>
          </h2>
        </div>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {featuredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-center text-gray-400 text-xs mt-12 italic"
      >
        <Link
          href="/products"
          className="group flex items-center justify-center gap-2 text-primary font-bold shrink-0 self-start sm:self-auto text-sm md:text-base"
        >
          <span className="border-b-2 border-primary/20 group-hover:border-primary transition-colors">
            Lihat Semua Produk
          </span>
          <ArrowRight
            size={20}
            className="group-hover:translate-x-2 transition-transform"
          />
        </Link>
        <br />* Harga dapat berubah sesuai dengan topping tambahan.
      </motion.p>
    </section>
  );
}
