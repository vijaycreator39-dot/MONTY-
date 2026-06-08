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
    <section id="how" className="relative py-24 bg-cream">
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#4a1024]/10" />
        <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#4a1024]/10" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-[11px] tracking-[0.24em] uppercase font-semibold text-[#1a0d12]/50 mb-4">
            How It Works
          </p>
          <h2 className="text-[40px] sm:text-[52px] lg:text-[58px] leading-[1.05] tracking-tight font-bold text-[#1a0d12]">
            From signup to first income —
            <br />
            <span className="font-serif-italic text-[#4a1024]">in 3 simple steps</span>
          </h2>
        </div>

        <div className="relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-[68px] left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-[#4a1024]/25 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {steps.map((s, i) => {
              const Icon = iconMap[s.icon];
              return (
                <div
                  key={s.num}
                  className="relative bg-white rounded-2xl p-7 border border-[#4a1024]/10 shadow-card hover:shadow-[0_20px_50px_-15px_rgba(74,16,36,0.25)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="absolute -top-5 left-7 bg-[#4a1024] text-white text-[13px] font-bold tracking-wider px-4 py-1.5 rounded-md shadow-soft">
                    {s.num}
                  </div>
                  <div className="mt-6 mb-5 w-12 h-12 rounded-xl bg-[#f7e6d4] flex items-center justify-center">
                    <Icon size={22} className="text-[#4a1024]" strokeWidth={2} />
                  </div>
                  <h3 className="text-[20px] font-bold text-[#1a0d12] mb-2">{s.title}</h3>
                  <p className="text-[14px] text-[#1a0d12]/65 leading-relaxed">{s.desc}</p>
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
