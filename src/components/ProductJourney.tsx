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
    <section
      id="thejourney"
      className="px-5 md:px-6 py-16 md:py-28 max-w-7xl mx-auto"
    >
      <motion.div
        className="text-center mb-12 md:mb-16"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-headline text-3xl md:text-6xl mb-5 md:mb-6 font-bold text-[#3D2B1F] leading-tight">
          Jejak Manis Kebaikan
        </h2>
        <div className="h-1.5 w-24 md:w-32 bg-primary mx-auto rounded-full" />
        <p className="mt-5 md:mt-6 text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Dari pemberdayaan petani Jembrana hingga pemanfaatan limbah kopi, kami
          menghadirkan brownies yang peduli pada bumi.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group flex flex-row md:flex-col items-start md:items-center text-left md:text-center p-5 md:p-10 rounded-3xl md:rounded-[2.5rem] hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500 border border-orange-100/50 gap-4 md:gap-0"
            >
              <div
                className={`shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl ${step.color} flex items-center justify-center md:mb-8 transition-transform duration-500 ${step.rotate}`}
              >
                <Icon className="w-8 h-8 md:w-11 md:h-11" strokeWidth={1.5} />
              </div>

              <div>
                <h3 className="font-bold text-lg md:text-2xl mb-1.5 md:mb-4 text-[#3D2B1F]">
                  {step.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
