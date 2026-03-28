"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowUpRight } from "lucide-react";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function CTASection() {
  return (
    <>
      {/* CTA Section */}
      <section id="order" className="py-24 md:py-32 bg-gradient-to-b from-amber-50 to-white relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase text-amber-700 border border-amber-300 rounded-full bg-amber-50">
              🍫 Mau nyoba?
            </span>

            <h2
              className="text-4xl md:text-6xl font-bold text-stone-800 leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Support petani lokal.
              <br />
              <span className="text-amber-700 italic">Mulai dari satu kotak.</span>
            </h2>

            <p className="text-stone-500 text-base mb-10 max-w-md mx-auto leading-relaxed">
              Setiap order bikin dampak nyata buat Pak Made dan teman-temannya.
              Serius. Bukan greenwashing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Order Button */}
              <motion.a
                href="https://wa.me/6281234567890?text=Halo!%20Saya%20mau%20order%20Yayobite%20brownies%20dong%20🍫"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-stone-900 hover:bg-amber-700 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-stone-900/20 justify-center"
                whileTap={{ scale: 0.97 }}
              >
                <ShoppingBag size={18} />
                Order via WhatsApp
                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </motion.a>

              {/* Instagram Button */}
              <motion.a
                href="https://instagram.com/yayobite"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-amber-50 text-stone-800 font-semibold text-sm tracking-wide border border-stone-200 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-amber-300 justify-center"
                whileTap={{ scale: 0.97 }}
              >
                <span className="text-pink-500"><InstagramIcon size={18} /></span>
                Ikutin @yayobite
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p
              className="text-white font-bold text-xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Yayobite
            </p>
            <p className="text-stone-500 text-xs mt-1">Brownies lokal. Dampak nyata.</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://instagram.com/yayobite"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
              aria-label="Instagram Yayobite"
            >
              <InstagramIcon size={20} />
            </a>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors duration-200"
              aria-label="WhatsApp Order"
            >
              <ShoppingBag size={20} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-stone-600 text-xs text-center md:text-right">
            © 2025 Yayobite · Dibuat dengan ❤️ di Bali
          </p>
        </div>
      </footer>
    </>
  );
}
