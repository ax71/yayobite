"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2 md:py-3"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <div className="flex justify-between items-center w-full px-5 md:px-10 lg:px-12 mx-auto">
        <Link
          href="/"
          className="text-xl md:text-3xl font-headline italic font-bold text-primary tracking-tighter shrink-0"
        >
          Yayobite
        </Link>

        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {["Products", "Our Story", "The Journey", "Impact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-[#3D2B1F] font-bold hover:text-primary transition-colors text-xs uppercase tracking-widest"
            >
              {item}
            </Link>
          ))}
          <Link
            href="https://wa.me/628153888886"
            target="_blank"
            className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all text-sm shadow-md"
          >
            Order Now
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            className="text-primary p-2 bg-primary/5 rounded-full"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden -z-10"
            />

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-[100%] left-4 right-4 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden md:hidden"
            >
              <div className="flex flex-col p-4 gap-1">
                {[
                  { name: "Product", href: "/products" },
                  { name: "Our Story", href: "#cerita" },
                  { name: "The Journey", href: "#journey" },
                  { name: "Impact", href: "#impact" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={closeMenu}
                    className="flex justify-between items-center px-5 py-4 text-[#3D2B1F] font-bold text-sm uppercase tracking-wider active:bg-gray-50 rounded-2xl transition-colors"
                  >
                    {link.name}
                    <ArrowRight size={16} className="text-primary/40" />
                  </a>
                ))}

                <div className="mt-2 p-2">
                  <a
                    href="https://wa.me/628153888886"
                    onClick={closeMenu}
                    className="flex items-center justify-center bg-primary text-white py-4 rounded-[1.25rem] font-bold text-base shadow-lg active:scale-[0.98] transition-all"
                  >
                    Order Now via WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
