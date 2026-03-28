"use client";

import { motion, type Variants } from "framer-motion";
import { MapPin, Quote } from "lucide-react";
import Image from "next/image";

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function FarmerStory() {
  return (
    <section className="py-24 md:py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          className="flex items-center gap-3 mb-16 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-px w-10 bg-amber-600/40" />
          <span className="text-xs font-semibold tracking-widest uppercase text-amber-700">
            Cerita Petani
          </span>
          <div className="h-px w-10 bg-amber-600/40" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Photo — Left */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-stone-900/20">
              <Image
                src="/pak-made.png"
                alt="Pak Made, petani kakao dari Bali"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 via-transparent to-transparent" />
            </div>

            {/* Floating location tag */}
            <div className="absolute -bottom-5 -right-4 md:-right-8 bg-white rounded-2xl px-4 py-3 shadow-xl flex items-center gap-2 border border-stone-100">
              <MapPin size={14} className="text-amber-600 flex-shrink-0" />
              <div>
                <p className="text-[10px] text-stone-500 leading-none">Kebun Kakao</p>
                <p className="text-xs font-semibold text-stone-800 mt-0.5">Tabanan, Bali 🌿</p>
              </div>
            </div>

            {/* Decorative blob */}
            <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-amber-200/40 blur-3xl -z-10" />
          </motion.div>

          {/* Story — Right */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ketemu{" "}
              <span className="text-amber-700 italic">Pak Made</span>,
              <br />
              si Bapak di balik
              <br />
              browniesmu.
            </h2>

            <div className="relative pl-5 border-l-2 border-amber-400 mb-8">
              <Quote size={20} className="text-amber-400 mb-2" />
              <p className="text-stone-600 text-base leading-relaxed">
                Sudah 20 tahun Pak Made merawat kebun kakaonya. Bukan cuma soal
                panen — setiap biji kakao dipilih dengan tangan, dijemur alami,
                dan dikirim langsung ke dapur kami.
              </p>
            </div>

            <p className="text-stone-500 text-sm leading-relaxed mb-10">
              Tanpa middleman. Tanpa bahan impor. Hanya kepercayaan antara petani
              dan kamu — diikat lewat setiap kotak brownies.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "20+", label: "Tahun berkebun" },
                { value: "100%", label: "Bahan lokal" },
                { value: "0", label: "Bahan impor" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl bg-amber-50 border border-amber-100"
                >
                  <p className="text-2xl font-bold text-amber-800">{stat.value}</p>
                  <p className="text-xs text-stone-500 mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
