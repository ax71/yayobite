"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative px-6 sm:px-6 lg:px-8 py-12 md:py-24 max-w-[1400px] mx-auto">
      <div className="flex flex-col-reverse md:grid md:grid-cols-12 items-center gap-12 lg:gap-20">
        <div className="md:col-span-7 z-10 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-headline text-4xl sm:text-5xl lg:text-7xl leading-[1.1] text-[#3D2B1F] mb-6 md:mb-8 font-bold tracking-tight"
          >
            Dari Petani ke <br />
            <span className="italic text-primary font-serif">
              Brownies Kamu
            </span>
          </motion.h1>

          <motion.p className="text-lg md:text-xl text-gray-700 mb-8 md:mb-10 leading-relaxed max-w-xl mx-auto md:mx-0">
            Snack kamu hari ini bantu siapa? Kenalan yuk sama jejak manis di
            balik setiap gigitan brownies kamu.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-6">
            <Link
              href="#order"
              className="bg-primary text-white w-[220px] md:w-full lg:w-auto px-6 py-2.5 md:py-3.5 rounded-full font-bold text-sm md:text-lg hover:shadow-xl hover:-translate-y-1 transition-all text-center shadow-md active:scale-95"
            >
              Dukung Petani Lokal
            </Link>
            <Link
              href="#cerita"
              className="group flex items-center gap-2 text-primary font-bold py-2"
            >
              <span className="border-b-2 border-primary/30 group-hover:border-primary transition-all">
                Pelajari Cerita Kami
              </span>
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="md:col-span-5 relative flex justify-center md:justify-end w-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="relative w-full max-w-[280px] sm:max-w-[350px] lg:max-w-[420px] aspect-square">
            <div className="absolute inset-0 bg-primary/15 rounded-full blur-[60px] md:blur-[80px] -z-10 scale-125" />

            <div className="relative w-full h-full rounded-full overflow-hidden border-[8px] md:border-[14px] border-white shadow-2xl">
              <Image
                src="/hero-image.svg"
                alt="Brownies Cacao"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
