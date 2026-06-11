import React from 'react';
import { Trophy, Sparkles } from 'lucide-react';
import { achievements } from '../mock';

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-16 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 right-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-bl from-[#f3d8b8]/45 to-transparent blur-3xl blob-1" />
        <div className="absolute bottom-0 left-0 w-[320px] h-[320px] rounded-full bg-gradient-to-tr from-[#f5d5b8]/35 to-transparent blur-3xl blob-3" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-[#4a1024]/10 shadow-soft mb-4 sm:mb-5">
            <Trophy size={14} className="text-amber-500" />
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#1a0d12]/70">
              Achievements
            </span>
          </div>
          <h2 className="text-[28px] sm:text-[42px] lg:text-[50px] leading-[1.1] tracking-tight font-bold text-[#1a0d12]">
            Milestones earned{' '}
            <span className="font-serif-italic text-[#4a1024] underline-serif">from skills.</span>
          </h2>
          <p className="mt-4 text-[14px] sm:text-[16px] text-[#1a0d12]/65 max-w-xl mx-auto">
            Real outcomes — not promises. These are some of the milestones earned through consistent freelancing and the Meta Ads agency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7 max-w-4xl mx-auto">
          {achievements.map((a, i) => (
            <div
              key={a.title}
              className="card-3d group relative rounded-2xl overflow-hidden bg-white border border-[#4a1024]/10 shadow-card"
            >
              <div className="relative h-[220px] sm:h-[260px] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-tr ${a.accent} mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full shadow-soft">
                  <Sparkles size={12} className="text-amber-500" />
                  <span className="text-[10px] font-bold tracking-wide text-[#1a0d12]/80">
                    Milestone {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#4a1024]/70 mb-1.5">
                  {a.detail}
                </p>
                <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1a0d12] tracking-tight">
                  {a.title}
                </h3>
                <p className="mt-1.5 text-[13px] sm:text-[14px] text-[#1a0d12]/65 leading-relaxed">
                  {a.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
