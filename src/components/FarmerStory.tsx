"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronUp, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function FarmerStory() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section
      id="ourstory"
      className="px-6 py-20 md:py-28 bg-[#F9F5F2] rounded-[2.5rem] md:rounded-[4rem] mx-4 my-16 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            className="lg:col-span-7 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <h2 className="font-headline text-3xl md:text-5xl text-[#3D2B1F] leading-[1.2] font-bold text-center md:text-left tracking-tight">
                Kenalin Pak Made, <br />
                <span className="text-primary italic font-serif">
                  Pahlawan di Balik Browniesmu.
                </span>
              </h2>
            </div>

            <div className="space-y-5">
              <p className="font-body text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left max-w-2xl mx-auto md:mx-0">
                Brownies kamu nggak muncul tiba-tiba. Dari perkebunan asri di
                Bali, Pak Made merawat setiap pohon kakao dengan cinta untuk
                memastikan kualitas terbaik di setiap gigitan.
              </p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden text-center md:text-left"
                  >
                    <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed pt-4 border-t border-primary/10">
                      Melalui kerjasama langsung (direct trade), Yayobite
                      memastikan Pak Made menerima harga 30% lebih tinggi.
                      Pendapatan ini ia gunakan untuk membiayai pendidikan
                      tinggi anak-anaknya.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-center md:justify-start pt-2">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="group flex items-center gap-2 text-primary font-bold text-base md:text-lg hover:gap-4 transition-all"
                >
                  <span>
                    {isExpanded ? "Tutup Cerita" : "Baca Cerita Lengkap"}
                  </span>
                  {isExpanded ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="hidden lg:block bg-white/60 backdrop-blur-sm p-7 rounded-2xl border-l-4 border-primary shadow-sm relative overflow-hidden">
              <Quote
                className="absolute right-4 top-4 text-primary/5"
                size={60}
              />
              <p className="italic font-headline text-xl text-[#3D2B1F] leading-snug relative z-10">
                &quot;Setiap panen yang kalian nikmati adalah sekolah untuk
                anak-anak kami.&quot;
              </p>
              <p className="mt-3 font-bold text-primary text-sm tracking-widest uppercase">
                — Pak Made, Petani Kakao Jembrana
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 w-full flex flex-col items-center lg:items-end gap-10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full max-w-[260px] sm:max-w-[300px] lg:max-w-[380px] aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-[6px] md:border-[10px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/pak-made.png"
                alt="Pak Made Petani Kakao Bali"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            <div className="block lg:hidden w-full max-w-[320px] bg-white/60 backdrop-blur-sm p-6 rounded-2xl border-l-4 border-primary shadow-sm relative overflow-hidden">
              <Quote
                className="absolute right-4 top-4 text-primary/5"
                size={50}
              />
              <p className="italic font-headline text-lg text-[#3D2B1F] leading-snug relative z-10 text-center">
                &quot;Setiap panen yang kalian nikmati adalah sekolah untuk
                anak-anak kami.&quot;
              </p>
              <p className="mt-3 font-bold text-primary text-xs tracking-widest uppercase text-center">
                — Pak Made, Petani Kakao Jembrana
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
