import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: 'About', href: '#about' },
    { label: 'How It Works', href: '#how' },
    { label: 'Join', href: '#signup' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#fbf4ee]/90 backdrop-blur-md border-b border-[#4a1024]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-full bg-[#4a1024] text-white flex items-center justify-center font-serif text-lg font-semibold shadow-soft">
            V
          </div>
          <span className="text-[#1a0d12] font-semibold text-[17px] tracking-tight">
            Vijay Ramawat
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[#1a0d12]/80 hover:text-[#4a1024] text-[15px] font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#signup"
            className="hidden sm:inline-flex bg-[#4a1024] hover:bg-[#3a0a1c] text-white px-5 py-2.5 rounded-full font-medium text-[14px] transition-all duration-200 hover:scale-[1.03] shadow-soft"
          >
            Join Now
          </a>
          <button
            className="md:hidden p-2 text-[#4a1024]"
            onClick={() => setOpen(!open)}
            aria-label="menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-[#fbf4ee] border-t border-[#4a1024]/10">
          <div className="px-6 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#1a0d12]/80 hover:text-[#4a1024] text-[15px] font-medium py-2"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#4a1024]/30 to-transparent" />
    </header>
  );
};

export default Header;
