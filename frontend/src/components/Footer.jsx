import React from 'react';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../mock';

const Footer = () => {
  return (
    <>
      <footer className="bg-cream py-10 border-t border-[#4a1024]/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#4a1024] text-white flex items-center justify-center font-serif text-lg font-semibold">
              V
            </div>
            <div>
              <p className="font-semibold text-[#1a0d12]">Vijay Ramawat</p>
              <p className="text-[10px] tracking-[0.22em] uppercase text-[#1a0d12]/50 font-semibold">
                Skill Coach &amp; Mentor
              </p>
            </div>
          </div>
          <p className="text-[13px] text-[#1a0d12]/55">
            © 2026 Vijay Ramawat. Built with intent.
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-[0_15px_40px_-10px_rgba(16,185,129,0.6)] hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </>
  );
};

export default Footer;
