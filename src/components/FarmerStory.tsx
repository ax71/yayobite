"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FarmerStory() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="cerita"
      className="px-6 py-24 md:py-32 bg-[#F9F5F2] rounded-[3rem] mx-4 my-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            className="lg:col-span-6 space-y-8"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h2 className="font-headline text-4xl md:text-6xl text-[#3D2B1F] leading-[1.1] font-bold text-center md:text-left">
                Kenalin, Pak Made. Pahlawan di Balik Cokelatmu.
              </h2>
            </div>

            <div className="space-y-6">
              <p className="font-body text-lg md:text-xl text-gray-700 leading-relaxed text-center md:text-left">
                Yes, brownies kamu nggak muncul tiba-tiba. Dari perkebunan asri
                di Bali, Pak Made merawat setiap pohon kakao dengan cinta.
              </p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-base md:text-lg text-gray-600 leading-relaxed pt-4 border-t border-primary/10">
                      Melalui kerjasama langsung ini, Yayobite memastikan Pak
                      Made menerima harga 30% lebih tinggi yang ia gunakan untuk
                      membiayai pendidikan tinggi anak-anaknya.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="group flex items-center gap-3 text-primary font-bold text-lg"
                >
                  <span>{isExpanded ? "Tutup Cerita" : "Cerita Lengkap"}</span>
                  {isExpanded ? (
                    <ChevronUp size={22} />
                  ) : (
                    <ArrowRight size={22} />
                  )}
                </button>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border-l-8 border-primary shadow-lg">
              <p className="italic font-headline text-xl md:text-2xl text-[#3D2B1F]">
                &quot;Setiap panen yang kalian nikmati adalah sekolah untuk
                anak-anak kami.&quot;
              </p>
              <p className="mt-4 font-bold text-primary">
                — Pak Made, Petani Kakao
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl border-4 md:border-8 border-white">
              <Image
                src="/pak-made.png"
                alt="Indonesian cocoa farmer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
