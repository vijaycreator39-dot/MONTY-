import React from 'react';
import { MessageCircle, ArrowRight, Flame, Sparkles } from 'lucide-react';
import { slotData, avatars, partners, whatsappLink } from '../mock';

const Hero = () => {
  const percent = (slotData.filled / slotData.total) * 100;

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative bg dots */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-10 w-2 h-2 rounded-full bg-[#d4a574]/40 float-dot" />
        <div className="absolute top-60 right-24 w-1.5 h-1.5 rounded-full bg-[#4a1024]/30 float-dot" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-32 w-2.5 h-2.5 rounded-full bg-[#d4a574]/40 float-dot" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-12 w-1.5 h-1.5 rounded-full bg-[#4a1024]/20 float-dot" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#f7e6d4]/60 to-transparent blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#f5e1d4]/40 to-transparent blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur border border-[#4a1024]/10 shadow-soft mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-soft" />
          <span className="text-[12px] tracking-[0.18em] uppercase font-semibold text-[#1a0d12]/80">
            Empowering 1000+ Students Since 2022
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-[44px] sm:text-[58px] lg:text-[72px] leading-[1.05] tracking-tight font-bold text-[#1a0d12]">
          Build Your Own{' '}
          <span className="font-serif-italic text-[#4a1024]">Income.</span>
          <br />
          Become{' '}
          <span className="font-serif-italic text-[#4a1024] underline-serif">
            Truly Independent.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-7 text-[17px] lg:text-[19px] text-[#1a0d12]/70 max-w-2xl mx-auto leading-relaxed">
          A guided 1-on-1 mentorship for students, job-holders, housewives —{' '}
          <span className="text-[#1a0d12] font-semibold">anyone</span> ready to earn from
          home, without prior experience.
        </p>

        {/* CTA buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-7 py-4 rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.03] shadow-[0_10px_30px_-8px_rgba(16,185,129,0.5)]"
          >
            <MessageCircle size={18} />
            Message Me on WhatsApp
            <Sparkles size={16} className="opacity-80 group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 bg-white hover:bg-white/90 border border-[#4a1024]/15 text-[#1a0d12] px-7 py-4 rounded-full font-semibold text-[15px] transition-all duration-200 hover:scale-[1.02] shadow-soft"
          >
            See How It Works
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Slots tracker */}
        <div className="mt-14 max-w-xl mx-auto bg-white rounded-2xl border border-[#4a1024]/10 p-5 shadow-card text-left">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-soft" />
              <span className="text-[14px] font-semibold text-[#1a0d12]">Today’s mentorship slots</span>
            </div>
            <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-[#1a0d12]/50">
              Updated just now
            </span>
          </div>
          <div className="h-2 rounded-full bg-[#f1e3d4] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-[#4a1024] text-[22px] font-bold">{slotData.filled}</span>
              <span className="text-[13px] text-[#1a0d12]/60">/ {slotData.total} slots filled</span>
            </div>
            <span className="text-[13px] font-medium text-[#1a0d12]/70">
              {slotData.remaining} spots remaining
            </span>
          </div>
          <div className="mt-3 pt-3 border-t border-[#4a1024]/10 flex items-center gap-2">
            <Flame size={14} className="text-amber-500" />
            <span className="text-[13px] text-[#1a0d12]/80">
              <span className="font-semibold">{slotData.recentJoins[0].name} from {slotData.recentJoins[0].city}</span>{' '}
              <span className="text-[#1a0d12]/50">joined {slotData.recentJoins[0].timeAgo}</span>
            </span>
          </div>
        </div>

        {/* Avatars + rating */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex -space-x-3">
            {avatars.map((a, i) => (
              <img
                key={i}
                src={a}
                alt="student"
                className="w-10 h-10 rounded-full border-2 border-[#fbf4ee] object-cover"
              />
            ))}
          </div>
          <div className="text-[13px] text-[#1a0d12]/70">
            <span className="font-semibold text-[#1a0d12]">1000+ students</span> already earning from home
          </div>
          <div className="hidden sm:block w-px h-6 bg-[#4a1024]/15" />
          <div className="flex items-center gap-1.5 text-[13px]">
            <span className="text-amber-500">★★★★★</span>
            <span className="text-[#1a0d12]/70">4.9 / 5 average rating</span>
          </div>
        </div>

        {/* Partners */}
        <div className="mt-14">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#1a0d12]/45 font-semibold mb-5">
            As featured by community partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((p) => (
              <span key={p} className="text-[#1a0d12]/55 text-[14px] font-semibold tracking-tight">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
