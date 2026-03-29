"use client";

import { motion } from "framer-motion";
import { Sprout, Settings, Cookie } from "lucide-react";

const steps = [
  {
    icon: Sprout,
    title: "Petani Panen",
    description:
      "Kakao terbaik dipetik manual saat matang sempurna untuk kualitas premium.",
    rotate: "group-hover:rotate-6",
  },
  {
    icon: Settings,
    title: "Diolah Alami",
    description:
      "Fermentasi alami dilakukan untuk menghasilkan rasa cokelat yang bold dan kaya.",
    rotate: "group-hover:-rotate-6",
  },
  {
    icon: Cookie,
    title: "Produksi Higienis",
    description:
      "Dipanggang fresh tiap hari dengan gula aren asli tanpa pemanis buatan.",
    rotate: "group-hover:rotate-6",
  },
];

export default function ProductJourney() {
  return (
    <section id="thejourney" className="px-6 py-12 md:py-24 max-w-7xl mx-auto">
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="font-headline text-5xl md:text-6xl mb-6 font-bold text-on-surface">
          The Journey of Goodness
        </h2>
        <div className="h-1.5 w-32 bg-primary mx-auto rounded-full" />
        <p className="mt-6 text-secondary text-lg max-w-2xl mx-auto">
          Kami mengawasi setiap proses untuk memastikan kualitas terbaik sampai
          ke tanganmu.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-20 max-w-5xl mx-auto">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white/100 group flex flex-col items-center text-center p-8 rounded-3xl hover:bg-white hover:shadow-soft transition-all duration-300"
            >
              <div
                className={`w-24 h-24 rounded-2xl bg-primary/5 flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform ${step.rotate}`}
              >
                <Icon size={48} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-2xl mb-4 text-on-surface">
                {step.title}
              </h3>
              <p className="text-secondary leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
