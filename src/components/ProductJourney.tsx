"use client";

import { motion } from "framer-motion";
import { Sprout, FlaskConical, ChefHat, Package, Smile } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    number: "01",
    title: "Petani Panen",
    description: "Pak Made & 10+ petani lokal memanen buah kakao pilihan langsung dari kebun.",
    tag: "Tabanan, Bali",
    color: "from-green-50 to-emerald-100",
    iconBg: "bg-green-100",
    iconColor: "text-green-700",
  },
  {
    icon: FlaskConical,
    number: "02",
    title: "Pengolahan Bahan",
    description: "Biji kakao difermentasi & dijemur secara alami. Tidak ada kimia tambahan.",
    tag: "Proses alami 7 hari",
    color: "from-amber-50 to-yellow-100",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    icon: ChefHat,
    number: "03",
    title: "Tim Kami Masak",
    description: "Dapur kecil kami mengolah kakao jadi adonan brownies fresh setiap hari.",
    tag: "Homemade & fresh",
    color: "from-orange-50 to-red-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
  },
  {
    icon: Package,
    number: "04",
    title: "Jadi Brownies",
    description: "Dipotong, dikemas rapi, dan siap jalan. Eco-packaging yang bisa didaur ulang.",
    tag: "Eco-friendly pack",
    color: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-700",
  },
  {
    icon: Smile,
    number: "05",
    title: "Sampai ke Kamu",
    description: "Dari tangan petani — langsung ke tangan kamu. Segar. Jujur. Bermakna.",
    tag: "Sampai hari ini! 🎉",
    color: "from-purple-50 to-violet-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-700",
  },
];

export default function ProductJourney() {
  return (
    <section id="journey" className="py-24 md:py-32 bg-white overflow-hidden">
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
              Journey Produk
            </span>
            <div className="h-px w-10 bg-amber-600/40" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-stone-800 leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            5 langkah dari{" "}
            <span className="text-amber-700 italic">kebun</span>
            <br />
            ke tanganmu.
          </h2>
          <p className="mt-4 text-stone-500 max-w-sm mx-auto text-sm">
            Transparansi bukan cuma kata-kata. Ini perjalanan nyata brownies kamu.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-stone-200 via-amber-300 to-stone-200" />

          <div className="flex flex-col gap-6 md:gap-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}
                  >
                    <div
                      className={`inline-flex flex-col ${isEven ? "md:items-end" : "md:items-start"} items-start gap-3 p-6 rounded-3xl bg-gradient-to-br ${step.color} border border-white/80 shadow-sm max-w-md`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl ${step.iconBg}`}>
                          <Icon size={20} className={step.iconColor} />
                        </div>
                        <span className="text-xs font-bold tracking-widest text-stone-400">
                          STEP {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-stone-800">{step.title}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{step.description}</p>
                      <span className="inline-block text-xs font-medium px-3 py-1 rounded-full bg-white/60 text-stone-600">
                        {step.tag}
                      </span>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-amber-400 items-center justify-center shadow-md shadow-amber-400/30 border-4 border-white">
                    <span className="text-xs font-bold text-white">{step.number}</span>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
