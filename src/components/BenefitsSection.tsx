"use client";

import { motion, useInView } from "framer-motion";
import { Check, ShoppingCart, Camera } from "lucide-react";
import { useRef, useState, useEffect } from "react";

interface CounterProps {
  target: number;
  suffix: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const benefits = [
  {
    title: "Low Glycemic Index",
    description:
      "Pakai Gula Aren lokal, energi stabil tanpa sugar crash seharian.",
  },
  {
    title: "Local Ingredients Only",
    description: "Mendukung ekonomi sirkular desa-desa di seluruh Indonesia.",
  },
];

const stats = [
  { value: 10, suffix: "+", label: "Petani Terlibat" },
  { value: 100, suffix: "+", label: "Produk Terjual" },
  { value: 0, suffix: "", label: "Bahan Impor" },
];

export default function BenefitsSection() {
  return (
    <section id="impact" className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="font-headline text-5xl md:text-6xl mb-10 font-bold leading-tight text-on-surface">
              Enak? Iya. <br />
              Lebih sehat? Juga iya.
            </h2>
            <ul className="space-y-8">
              {benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="flex gap-6 items-start group"
                >
                  <div className="mt-1 bg-primary/10 p-2 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <div>
                    <span className="font-extrabold text-xl block mb-2 text-on-surface">
                      {benefit.title}
                    </span>
                    <p className="text-secondary text-lg leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-8 border-t border-outline-variant/40 pt-10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="block text-4xl md:text-5xl font-headline font-bold text-primary mb-1">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={1800 + index * 200}
                  />
                </span>
                <span className="text-xs uppercase font-extrabold tracking-widest text-secondary">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative bg-tertiary-fixed rounded-[3rem] p-10 md:p-16 overflow-hidden flex flex-col justify-center items-center text-center shadow-elevated"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          id="order"
        >
          <div className="absolute top-0 right-0 opacity-5 scale-150 rotate-12 -translate-y-1/4 translate-x-1/4">
            <span className="text-[300px] leading-none">❤️</span>
          </div>

          <div className="relative z-10">
            <h3 className="font-headline text-5xl md:text-6xl text-tertiary mb-8 font-bold leading-tight">
              Support local <br />
              terus ya 💛
            </h3>
            <p className="font-body text-xl text-tertiary/80 mb-12 max-w-sm mx-auto font-medium">
              Setiap pesananmu adalah dukungan nyata untuk keberlanjutan petani
              kakao mandiri.
            </p>
            <div className="flex flex-col w-full gap-5">
              <a
                href="https://wa.me/628153888886?text=Halo!%20Saya%20mau%20order%20Yayobite%20brownies%20dong%20kak!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 hover:translate-y-[-4px] transition-all shadow-lg cta-glow"
              >
                <ShoppingCart size={20} />
                Order Now via WhatsApp
              </a>
              <a
                href="https://instagram.com/yayobites"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/60 backdrop-blur-sm text-primary py-5 rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 hover:bg-white hover:translate-y-[-2px] transition-all border border-primary/10"
              >
                <Camera size={20} />
                Follow us @Yayobites
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
