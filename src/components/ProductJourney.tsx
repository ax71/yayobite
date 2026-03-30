"use client";

import { motion } from "framer-motion";
import { Sprout, RefreshCcw, QrCode } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Bahan Lokal Premium",
    description:
      "Menggunakan cokelat pilihan dari Jembrana dan sentuhan garam Pantai Amed untuk cita rasa Bali yang autentik.",
    rotate: "group-hover:rotate-6",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: RefreshCcw,
    title: "Inovasi Ampas Kopi",
    description:
      "Mengolah kembali ampas kopi dari kafe lokal Bali sebagai bahan inovatif yang mendukung keberlanjutan lingkungan.",
    rotate: "group-hover:-rotate-6",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: QrCode,
    title: "Transparansi Digital",
    description:
      "Setiap kemasan memiliki QR Code untuk mengakses kisah petani dan jejak sumber bahan baku yang kamu konsumsi.",
    rotate: "group-hover:rotate-6",
    color: "bg-orange-50 text-orange-600",
  },
];

export default function ProductJourney() {
  return (
    <section id="thejourney" className="px-6 py-16 md:py-28 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">
          Proses Inovatif
        </span>
        <h2 className="font-headline text-4xl md:text-6xl mb-6 font-bold text-[#3D2B1F]">
          Jejak Manis Kebaikan
        </h2>
        <div className="h-1.5 w-32 bg-primary mx-auto rounded-full" />
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          Dari pemberdayaan petani Jembrana hingga pemanfaatan limbah kopi, kami
          menghadirkan brownies yang peduli pada bumi.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white group flex flex-col items-center text-center p-10 rounded-[2.5rem] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-orange-100/50"
            >
              <div
                className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mb-8`}
              >
                <Icon size={44} strokeWidth={1.5} />
              </div>

              <h3 className="font-bold text-2xl mb-4 text-[#3D2B1F]">
                {step.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
