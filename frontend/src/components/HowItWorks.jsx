import React from 'react';
import { FileText, MessageCircle, TrendingUp } from 'lucide-react';
import { steps } from '../mock';

const iconMap = {
  FileText: FileText,
  MessageCircle: MessageCircle,
  TrendingUp: TrendingUp,
};

const HowItWorks = () => {
  return (
    <section id="how" className="relative py-16 sm:py-24 bg-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#4a1024]/10 blob-2" />
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#4a1024]/10" />
        <div className="absolute -right-32 top-20 w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-[#f3d8b8]/40 to-transparent blur-3xl blob-3" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.24em] uppercase font-semibold text-[#1a0d12]/50 mb-3 sm:mb-4">
            How It Works
          </p>
          <h2 className="text-[28px] sm:text-[42px] lg:text-[54px] leading-[1.1] tracking-tight font-bold text-[#1a0d12]">
            From signup to first income —
            <br />
            <span className="font-serif-italic text-[#4a1024]">in 3 simple steps</span>
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[68px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#4a1024]/25 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative">
            {steps.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.num}
                  className="card-3d relative bg-white rounded-2xl p-6 sm:p-7 border border-[#4a1024]/10 shadow-card"
                >
                  <div className="absolute -top-5 left-6 sm:left-7 bg-[#4a1024] text-white text-[12px] sm:text-[13px] font-bold tracking-wider px-3 sm:px-4 py-1.5 rounded-md shadow-soft">
                    {s.num}
                  </div>
                  <div className="mt-5 sm:mt-6 mb-4 sm:mb-5 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#f7e6d4] flex items-center justify-center transition-transform duration-300 group-hover:rotate-6">
                    <Icon size={20} className="text-[#4a1024]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[17px] sm:text-[20px] font-bold text-[#1a0d12] mb-2">{s.title}</h3>
                  <p className="text-[13px] sm:text-[14px] text-[#1a0d12]/65 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
