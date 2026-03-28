"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface CounterProps {
  target: number;
  suffix: string;
  prefix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix, prefix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Petani Lokal",
    sublabel: "Terlibat langsung",
    emoji: "🧑‍🌾",
  },
  {
    value: 100,
    suffix: "+",
    label: "Produk Terjual",
    sublabel: "Dan terus bertambah",
    emoji: "📦",
  },
  {
    value: 0,
    suffix: "",
    label: "Bahan Impor",
    sublabel: "Murni lokal Bali",
    emoji: "🌴",
  },
];

export default function ImpactCounter() {
  return (
    <section className="py-24 md:py-32 bg-stone-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-amber-900/40 via-stone-900 to-stone-900" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-amber-600/40 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px w-10 bg-amber-500/40" />
            <span className="text-xs font-semibold tracking-widest uppercase text-amber-400">
              Real Impact
            </span>
            <div className="h-px w-10 bg-amber-500/40" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Bukan cuma kata-kata.
            <br />
            <span className="text-amber-400 italic">Ini angkanya.</span>
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-px bg-amber-900/20 rounded-3xl overflow-hidden border border-amber-900/30">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-stone-900 p-10 text-center flex flex-col items-center gap-2 relative group hover:bg-stone-800/80 transition-colors duration-300"
            >
              <div className="text-4xl mb-2">{stat.emoji}</div>
              <p className="text-6xl md:text-7xl font-bold text-white tabular-nums">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={1800 + index * 200}
                />
              </p>
              <p className="text-amber-400 font-semibold text-lg mt-1">{stat.label}</p>
              <p className="text-stone-500 text-sm">{stat.sublabel}</p>
            </motion.div>
          ))}
        </div>

        {/* footnote */}
        <motion.p
          className="text-center text-stone-600 text-xs mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Data per Maret 2025 · Terus diperbarui
        </motion.p>
      </div>
    </section>
  );
}
