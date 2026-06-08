import React, { useRef, useState } from 'react';
import { Play, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../mock';

const StudentResults = () => {
  const scrollRef = useRef(null);
  const [playing, setPlaying] = useState(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('[data-card]');
    const cardWidth = card ? card.offsetWidth + 24 : 320;
    scrollRef.current.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  const items = [...testimonials, ...testimonials];

  return (
    <section className="relative py-16 sm:py-24 bg-cream overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[#f3d8b8]/30 to-transparent blur-3xl blob-2" />
        <div className="absolute left-0 bottom-0 w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#f5d5b8]/30 to-transparent blur-3xl blob-3" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 text-center mb-10 sm:mb-12">
        <p className="text-[10px] sm:text-[11px] tracking-[0.22em] sm:tracking-[0.24em] uppercase font-semibold text-[#1a0d12]/50 mb-3 sm:mb-4">
          Student Results
        </p>
        <h2 className="text-[28px] sm:text-[42px] lg:text-[54px] leading-[1.1] tracking-tight font-bold text-[#1a0d12]">
          My <span className="font-serif-italic text-[#4a1024] underline-serif">Student Results.</span>
        </h2>
        <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] text-[#1a0d12]/65 max-w-2xl mx-auto">
          Sun lijiye seedhe students aur team se — kya seekha, kitna kamaya, kaise zindagi badli.
        </p>
        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={15} fill="currentColor" />
          ))}
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          aria-label="prev"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#4a1024]/15 shadow-card items-center justify-center hover:bg-[#4a1024] hover:text-white text-[#4a1024] hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="next"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#4a1024]/15 shadow-card items-center justify-center hover:bg-[#4a1024] hover:text-white text-[#4a1024] hover:scale-110 transition-all duration-300"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar scroll-snap-x px-5 sm:px-6 pb-6"
        >
          {items.map((t, idx) => (
            <div
              key={idx}
              data-card
              className="card-3d snap-start flex-shrink-0 w-[260px] sm:w-[320px] bg-white rounded-3xl border border-[#4a1024]/10 shadow-card overflow-hidden"
            >
              <div className="relative h-[340px] sm:h-[400px] bg-gradient-to-br from-[#2a0812] to-[#4a1024] overflow-hidden">
                {t.type === 'video' ? (
                  playing === idx ? (
                    <iframe
                      src={t.videoUrl + '?autoplay=1'}
                      className="w-full h-full"
                      title={t.name}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    />
                  ) : (
                    <>
                      <img
                        src={t.poster}
                        alt={t.name}
                        className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                      />
                      <button
                        onClick={() => setPlaying(idx)}
                        className="absolute inset-0 flex items-center justify-center group"
                        aria-label="play"
                      >
                        <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/95 flex items-center justify-center shadow-card group-hover:scale-110 transition-transform">
                          <Play size={22} className="text-[#4a1024] ml-1" fill="currentColor" />
                        </span>
                      </button>
                      <span className="absolute top-3 left-3 bg-black/70 backdrop-blur text-white text-[9px] sm:text-[10px] tracking-wider uppercase px-2 sm:px-2.5 py-1 rounded-full">
                        Tap to play
                      </span>
                      {t.badge && (
                        <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[9px] sm:text-[10px] tracking-wider uppercase px-2 sm:px-2.5 py-1 rounded-full font-semibold">
                          {t.badge}
                        </span>
                      )}
                    </>
                  )
                ) : (
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                )}
              </div>

              <div className="p-4 sm:p-5">
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[12.5px] sm:text-[14px] text-[#1a0d12]/80 leading-relaxed line-clamp-3">
                  {t.text}
                </p>
                <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-[#4a1024]/10 flex items-center justify-between">
                  <span className="font-semibold text-[#1a0d12] text-[14px] sm:text-[15px]">{t.name}</span>
                  <span className="text-[8px] sm:text-[9px] tracking-[0.16em] sm:tracking-[0.18em] uppercase text-[#1a0d12]/50 font-semibold">
                    {t.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center mt-5 sm:mt-6 text-[12px] sm:text-[13px] text-[#1a0d12]/50 px-5">
        Tap a video to play · use the arrows or swipe to navigate manually
      </p>
    </section>
  );
};

export default StudentResults;
