"use client";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-outline-variant/30 py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-12">
        <div className="space-y-4">
          <span className="text-3xl font-headline italic font-bold text-primary">
            Yayobite
          </span>
          <p className="text-secondary mt-5 max-w-md mx-auto">
            Menghadirkan Brownies Indonesia langsung ke meja makanmu dengan cara
            yang bertanggung jawab.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          <a
            href="https://instagram.com/yayobites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-bold hover:text-primary transition-all text-sm uppercase tracking-widest"
          >
            Instagram
          </a>
          <a
            href="https://wa.me/628153888886"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-bold hover:text-primary transition-all text-sm uppercase tracking-widest"
          >
            WhatsApp
          </a>
        </div>

        <div className="w-full border-t border-outline-variant/20 pt-10 flex flex-col md:flex-row justify-center items-center">
          <p className="text-secondary/60 text-sm font-medium">
            © 2026 Yayobite. Dari Petani ke Brownies Kamu.
          </p>
        </div>
      </div>
    </footer>
  );
}
