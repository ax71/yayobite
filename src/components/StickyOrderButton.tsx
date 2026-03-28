"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

export default function StickyOrderButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="https://wa.me/6281234567890?text=Halo!%20Saya%20mau%20order%20Yayobite%20brownies%20dong%20🍫"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-full bg-stone-900 hover:bg-amber-700 text-white font-semibold text-sm shadow-2xl shadow-stone-900/40 transition-all duration-300 hover:scale-105 active:scale-95"
            aria-label="Order sekarang via WhatsApp"
          >
            <ShoppingBag size={18} />
            <span>Order Sekarang</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
