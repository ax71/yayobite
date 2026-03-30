"use client";

import { motion, useInView } from "framer-motion";
import { ShoppingCart, Camera, QrCode, Leaf, MapPin } from "lucide-react";
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
    title: "Triple Local Identity",
    icon: MapPin,
    description:
      "Perpaduan Cokelat Local Jembrana, Kopi Bali, dan Garam Pantai Amed dalam satu gigitan 'Brownies Coklat Premium'.",
  },
  {
    title: "Upcycled Coffee Inovation",
    icon: Leaf,
    description:
      "Memanfaatkan ampas kopi kafe lokal untuk mengurangi limbah pangan dan menambah tekstur unik.",
  },
  {
    title: "QR-Code Transparency",
    icon: QrCode,
    description:
      "Scan kemasan untuk akses langsung kisah petani dan transparansi asal bahan baku cokelatmu.",
  },
];

const stats = [
  { value: 100, suffix: "%", label: "Bahan Lokal Bali" },
  { value: 100, suffix: "+", label: "Produk Terjual" },
  { value: 0, suffix: "", label: "Pemanis Buatan" },
];

export default function BenefitsSection() {
  return (
    <section id="impact" className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="font-headline text-4xl md:text-6xl mb-10 font-bold leading-tight text-[#3D2B1F]">
              Inovasi Pangan <br />
              <span className="text-primary italic font-serif text-3xl md:text-5xl">
                berbasis kearifan lokal.
              </span>
            </h2>

            <ul className="space-y-8">
              {benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="flex gap-6 items-start group"
                >
                  <div className="mt-1 bg-primary/10 p-3 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-sm">
                    <benefit.icon size={24} strokeWidth={2} />
                  </div>
                  <div>
                    <span className="font-extrabold text-xl block mb-2 text-[#3D2B1F]">
                      {benefit.title}
                    </span>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8 border-t border-orange-100 pt-10">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center md:text-left">
                <span className="block text-3xl md:text-5xl font-headline font-bold text-primary mb-1">
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    duration={1800 + index * 200}
                  />
                </span>
                <span className="text-[10px] md:text-xs uppercase font-extrabold tracking-widest text-gray-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative bg-[#3D2B1F] rounded-[3rem] p-10 md:p-16 overflow-hidden flex flex-col justify-center items-center text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          id="order"
        >
          <div className="absolute top-0 right-0 opacity-10 scale-150 rotate-12 -translate-y-1/4 translate-x-1/4 pointer-events-none">
            <span className="text-[250px] leading-none text-white">🍪</span>
          </div>

          <div className="relative z-10">
            <h3 className="font-headline text-4xl md:text-6xl text-white mb-8 font-bold leading-tight">
              Support local <br />
              Bali products 💛
            </h3>
            <p className="font-body text-lg md:text-xl text-white/80 mb-12 max-w-sm mx-auto">
              Bantu Petani lokal Bali dan ekosistem kopi lokal Bali dengan
              setiap box brownies yang kamu beli.
            </p>

            <div className="flex flex-col items-center w-full gap-4 md:gap-5 mx-auto">
              <a
                href="https://wa.me/628153888886?text=Halo%20Yayobite!%20Saya%20tertarik%20pesan%20Coklat%20Bumi%20brownies%20bahan%20lokal%20Bali."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white w-[220px] sm:w-[280px] md:w-full md:max-w-xs py-3.5 rounded-2xl font-bold text-sm md:text-lg flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_10px_30px_-10px_rgba(234,88,12,0.5)]"
              >
                <ShoppingCart size={20} className="shrink-0" />
                <span className="whitespace-nowrap">Order via WhatsApp</span>
              </a>

              <a
                href="https://instagram.com/yayobites"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-md text-white w-[200px] sm:w-[260px] md:w-full md:max-w-xs py-3 rounded-2xl font-bold text-xs md:text-lg flex items-center justify-center gap-3 hover:bg-white/20 hover:scale-105 active:scale-95 transition-all border border-white/20"
              >
                <Camera size={18} className="shrink-0" />
                <span className="whitespace-nowrap">Explore @Yayobites</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
