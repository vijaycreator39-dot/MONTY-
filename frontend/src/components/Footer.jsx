import React from 'react';
import { MessageCircle, Instagram } from 'lucide-react';
import { whatsappLink, instagramLink } from '../mock';

const Footer = () => {
  return (
    <>
      <footer className="bg-cream py-8 sm:py-10 border-t border-[#4a1024]/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#4a1024] text-white flex items-center justify-center font-serif text-[15px] sm:text-lg font-semibold">
              V
            </div>
            <div>
              <p className="font-semibold text-[14px] sm:text-[15px] text-[#1a0d12]">Vijay Ramawat</p>
              <p className="text-[9px] sm:text-[10px] tracking-[0.2em] uppercase text-[#1a0d12]/50 font-semibold">
                Skill Coach &amp; Mentor
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white border border-[#4a1024]/10 flex items-center justify-center text-[#4a1024] hover:bg-gradient-to-br hover:from-fuchsia-500 hover:via-rose-500 hover:to-amber-400 hover:text-white hover:scale-110 transition-all duration-300 shadow-soft"
            >
              <Instagram size={16} />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white border border-[#4a1024]/10 flex items-center justify-center text-emerald-600 hover:bg-emerald-500 hover:text-white hover:scale-110 transition-all duration-300 shadow-soft"
            >
              <MessageCircle size={16} />
            </a>
          </div>

          <p className="text-[12px] sm:text-[13px] text-[#1a0d12]/55 text-center">
            © 2026 Vijay Ramawat. Built with intent.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(16,185,129,0.6)] hover:scale-110 transition-transform glow-green"
        aria-label="WhatsApp"
        style={{ width: 56, height: 56 }}
      >
        <MessageCircle size={22} />
      </a>
    </>
  );
};

export default Footer;
