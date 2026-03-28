"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { products, generateWhatsAppUrl } from "@/lib/products";

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
      staggerChildren: 0.15,
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

const featuredProducts = products.slice(0, 4);

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <motion.div
      variants={cardVariants}
      className="group bg-surface-container-lowest rounded-2xl overflow-hidden shadow-soft hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
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

export { WhatsAppIcon, ProductCard, containerVariants, cardVariants };

export default function ProductSection() {
  return (
    <section id="products" className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14">
        <h2 className="font-headline text-4xl md:text-5xl font-bold text-on-surface leading-tight">
          Favorit Bulan Ini: <br className="hidden sm:block" />
          <span className="text-primary italic font-serif">
            Brownies Yayobite
          </span>
        </h2>
        <Link
          href="/products"
          className="group flex items-center gap-1.5 text-primary font-bold shrink-0 self-start sm:self-auto"
        >
          <span className="border-b-2 border-primary/30 group-hover:border-primary transition-colors">
            Lihat Semua
          </span>
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </Link>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {featuredProducts.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </motion.div>
    </section>
  );
}
