"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { generateWhatsAppUrl, Product } from "@/lib/products";
import WhatsAppIcon from "@/lib/whatapp";

interface ProductCardProps {
  product: Product;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="group flex flex-row md:flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-orange-50/50"
    >
      <div className="relative w-[130px] sm:w-[160px] md:w-full aspect-square overflow-hidden shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 160px, 400px"
        />
      </div>

      <div className="p-4 md:p-6 flex flex-col justify-between flex-1 gap-2">
        <div className="space-y-1">
          <h3 className="font-headline text-base md:text-xl font-bold text-[#3D2B1F] leading-tight line-clamp-2">
            {product.name}
          </h3>
        </div>

        <div className="flex flex-col md:gap-4 mt-auto">
          <span className="text-primary font-black text-lg md:text-2xl mb-2 md:mb-0">
            {product.price}
          </span>

          <Link
            href={generateWhatsAppUrl(product.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary text-white py-2 md:py-3.5 w-[130px] md:w-full rounded-xl font-bold text-[10px] md:text-sm hover:brightness-110 transition-all shadow-md active:scale-95"
          >
            <WhatsAppIcon className="w-4 h-4 md:w-5 md:h-5" />
            <span className="inline">Pesan WhatsApp</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
