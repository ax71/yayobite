"use client";

import { motion } from "framer-motion";
import { TrendingDown, Leaf, Flame } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    emoji: "🍃",
    title: "Lebih Rendah Gula",
    description:
      "Pake gula aren lokal dari Bali. Lebih sehat, lebih nendang rasanya — bukan gula putih biasa.",
    badge: "Low Sugar",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
    badgeBg: "bg-green-100 text-green-800",
    highlight: "–40% gula",
  },
  {
    icon: Leaf,
    emoji: "🌿",
    title: "Bahan Lokal 100%",
    description:
      "Dari kakao Tabanan sampai telur ayam kampung. Semua dari Bali. Zero bahan impor.",
    badge: "Local Only",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
    badgeBg: "bg-amber-100 text-amber-800",
    highlight: "0 impor",
  },
  {
    icon: Flame,
    emoji: "🔥",
    title: "Fresh Setiap Hari",
    description:
      "Tidak ada freezer. Tidak ada pengawet. Dipanggang pagi, sampai ke kamu sore. Segitu segar-nya.",
    badge: "Always Fresh",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-700",
    badgeBg: "bg-rose-100 text-rose-800",
    highlight: "Tiap hari",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-stone-50 to-amber-50/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px w-10 bg-amber-600/40" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-700">
              Keunggulan
            </span>
            <div className="h-px w-10 bg-amber-600/40" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Enak? Iya.{" "}
            <span className="text-amber-700 italic">Lebih sehat?</span>
            <br />
            Juga iya. 🤌
          </h2>
          <p className="mt-4 text-stone-500 max-w-sm mx-auto text-sm">
            Brownies yang nggak cuma enak di lidah, tapi juga bikin hati tenang.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative bg-white rounded-3xl p-7 border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/60 transition-all duration-300 cursor-default"
              >
                {/* Emoji as big background decoration */}
                <div className="absolute top-6 right-6 text-5xl opacity-10 group-hover:opacity-20 transition-opacity duration-300 select-none">
                  {benefit.emoji}
                </div>

                <div className="flex items-start gap-4 mb-5">
                  <div className={`p-3 rounded-2xl ${benefit.iconBg} flex-shrink-0`}>
                    <Icon size={22} className={benefit.iconColor} />
                  </div>
                  <span
                    className={`mt-1 text-xs font-semibold px-3 py-1 rounded-full ${benefit.badgeBg}`}
                  >
                    {benefit.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-stone-800 mb-2">{benefit.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed mb-5">
                  {benefit.description}
                </p>

                <div className="pt-4 border-t border-stone-100">
                  <span className="text-2xl font-bold text-stone-800">{benefit.highlight}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
