"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // Tambah X untuk icon tutup
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="flex justify-between items-center w-full px-6 md:px-10 lg:px-12 mx-auto transition-all">
        <Link
          href="#"
          className="text-2xl md:text-3xl font-headline italic font-bold text-primary tracking-tighter shrink-0"
        >
          Yayobite
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <Link
            href="#cerita"
            className="text-[#3D2B1F] font-bold hover:text-primary transition-colors text-xs uppercase tracking-widest"
          >
            Our Story
          </Link>
          <Link
            href="#journey"
            className="text-[#3D2B1F] font-bold hover:text-primary transition-colors text-xs uppercase tracking-widest"
          >
            The Journey
          </Link>
          <Link
            href="#impact"
            className="text-[#3D2B1F] font-bold hover:text-primary transition-colors text-xs uppercase tracking-widest"
          >
            Impact
          </Link>

          <Link
            href="https://wa.me/628153888886?text=Halo!%20Saya%20mau%20order%20Yayobite%20brownies%20dong%20kak!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 py-3 rounded-full font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all active:scale-95 text-sm shadow-md"
          >
            Order Now
          </Link>
        </div>

        <div className="md:hidden">
          <button
            className="text-primary p-2 hover:bg-primary/5 rounded-lg transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl border-t border-gray-100 flex flex-col p-8 gap-6 md:hidden"
          >
            <a
              href="#cerita"
              onClick={() => setMobileOpen(false)}
              className="text-[#3D2B1F] font-bold text-lg border-b border-gray-50 pb-2"
            >
              Our Story
            </a>
            <a
              href="#journey"
              onClick={() => setMobileOpen(false)}
              className="text-[#3D2B1F] font-bold text-lg border-b border-gray-50 pb-2"
            >
              The Journey
            </a>
            <a
              href="#impact"
              onClick={() => setMobileOpen(false)}
              className="text-[#3D2B1F] font-bold text-lg border-b border-gray-50 pb-2"
            >
              Impact
            </a>
            <a
              href="#order"
              onClick={() => setMobileOpen(false)}
              className="bg-primary text-white px-6 py-4 rounded-full font-bold text-center text-lg shadow-lg"
            >
              Order Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
