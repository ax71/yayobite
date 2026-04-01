"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import {
  ShoppingBag,
  Scale,
  Utensils,
  Flame,
  LayoutGrid,
  SearchCheck,
  Gift,
} from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Bahan Pilihan",
    description:
      "Menggunakan bahan segar dari petani lokal Bali, dipilih dengan teliti untuk menghadirkan rasa autentik dan berkualitas.",
    Icon: ShoppingBag,
  },
  {
    id: 2,
    title: "Persiapan & Penimbangan",
    description:
      "Setiap bahan ditakar dengan presisi untuk menjaga konsistensi rasa di setiap batch.",
    Icon: Scale,
  },
  {
    id: 3,
    title: "Mixing Adonan",
    description:
      "Adonan diolah dengan teknik khusus hingga menghasilkan tekstur lembut dan menyatu sempurna.",
    Icon: Utensils,
  },
  {
    id: 4,
    title: "Pemanggangan",
    description:
      "Dipanggang pada suhu optimal untuk menciptakan lapisan luar yang lembut dengan bagian dalam yang fudgy.",
    Icon: Flame,
  },
  {
    id: 5,
    title: "Pendinginan & Pemotongan",
    description:
      "Didinginkan secara alami sebelum dipotong dengan presisi menjadi ukuran bite-sized yang sempurna.",
    Icon: LayoutGrid,
  },
  {
    id: 6,
    title: "Quality Control",
    description:
      "Setiap potongan melewati pengecekan ketat untuk memastikan kualitas rasa, tekstur, dan tampilan.",
    Icon: SearchCheck,
  },
  {
    id: 7,
    title: "Packaging",
    description:
      "Dikemas secara higienis dalam kemasan eksklusif Yayobites, siap dinikmati atau dibagikan.",
    Icon: Gift,
  },
];
export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mengontrol animasi garis tengah berdasarkan scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <section className="py-16 md:py-24 bg-[#F9F5F2]" id="proses">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          className="text-center md:text-left mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-[#3D2B1F]">
            Proses Pembuatan{" "}
            <span className="text-primary italic font-serif">Brownies</span>
          </h2>
        </motion.div>

        <div ref={containerRef} className="relative w-full">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-orange-200/40 rounded-full" />

          <motion.div
            className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-primary rounded-full origin-top"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="space-y-0">
            {processSteps.map((step, index) => {
              const isLast = index === processSteps.length - 1;

              return (
                <div
                  key={step.id}
                  className={`relative pl-16 md:pl-24 ${isLast ? "pb-0" : "pb-8 md:pb-10"}`}
                >
                  <motion.div
                    className="absolute left-6 md:left-8 -translate-x-1/2 top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#F9F5F2] border-[3px] md:border-4 border-primary flex items-center justify-center z-10 text-primary shadow-sm"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <step.Icon size={18} className="md:w-5 md:h-5" />
                  </motion.div>

                  <motion.div
                    className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-orange-50/50 hover:shadow-md transition-shadow duration-300 group"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6">
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-primary/40 font-black text-lg">
                            0{step.id}
                          </span>
                          <h3 className="font-bold text-lg md:text-xl text-[#3D2B1F]">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
