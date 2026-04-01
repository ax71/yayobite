"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-28 pb-16 max-w-7xl mx-auto w-full">
      <div className="grid flex-col md:grid-cols-12 items-center gap-12 lg:gap-20 w-full">
        <div className="md:col-span-7 text-center md:text-left">
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

          <motion.div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-6 md:gap-8">
            <Link
              href="#order"
              className="bg-primary text-white w-[220px] lg:w-auto px-6 py-3.5 md:px-8 rounded-full font-bold text-sm md:text-lg hover:shadow-[0_15px_30px_-10px_rgba(234,88,12,0.4)] hover:-translate-y-1 transition-all text-center shadow-md active:scale-95"
            >
              Dukung Petani Lokal
            </Link>

            <Link
              href="#cerita"
              className="group flex items-center gap-2 text-primary font-bold py-2 md:py-3.5"
            >
              <span className="border-b-2 border-primary/30 group-hover:border-primary transition-all text-sm md:text-lg">
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
          className="md:col-span-5 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="relative w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[420px] aspect-square">
            <div className="absolute inset-0 bg-primary/15 rounded-full blur-[70px] -z-10 scale-125" />

            <div className="relative w-full h-full rounded-full overflow-hidden border-[10px] md:border-[14px] border-white shadow-2xl">
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
