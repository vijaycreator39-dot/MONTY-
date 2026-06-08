import React, { useRef, useState } from 'react';
import { Play, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../mock';

const StudentResults = () => {
  const scrollRef = useRef(null);
  const [playing, setPlaying] = useState(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('[data-card]');
    const cardWidth = card ? card.offsetWidth + 24 : 360;
    scrollRef.current.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  // duplicate for marquee effect
  const items = [...testimonials, ...testimonials];

  return (
    <section className="relative py-24 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <p className="text-[11px] tracking-[0.24em] uppercase font-semibold text-[#1a0d12]/50 mb-4">
          Student Results
        </p>
        <h2 className="text-[40px] sm:text-[52px] lg:text-[58px] leading-[1.05] tracking-tight font-bold text-[#1a0d12]">
          My <span className="font-serif-italic text-[#4a1024] underline-serif">Student Results.</span>
        </h2>
        <p className="mt-5 text-[16px] text-[#1a0d12]/65 max-w-2xl mx-auto">
          Sun lijiye seedhe students aur team se — kya seekha, kitna kamaya, kaise zindagi badli.
        </p>
        <div className="mt-4 flex items-center justify-center gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} fill="currentColor" />
          ))}
        </div>
      </div>

      <div className="relative">
        {/* nav buttons */}
        <button
          onClick={() => scroll(-1)}
          aria-label="prev"
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#4a1024]/15 shadow-card items-center justify-center hover:bg-[#4a1024] hover:text-white text-[#4a1024] transition-all"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="next"
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white border border-[#4a1024]/15 shadow-card items-center justify-center hover:bg-[#4a1024] hover:text-white text-[#4a1024] transition-all"
        >
          <ChevronRight size={20} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-snap-x px-6 pb-6"
        >
          {items.map((t, idx) => (
            <div
              key={idx}
              data-card
              className="snap-start flex-shrink-0 w-[300px] sm:w-[340px] bg-white rounded-3xl border border-[#4a1024]/10 shadow-card overflow-hidden hover:-translate-y-1 transition-all duration-300"
            >
              {/* media area */}
              <div className="relative h-[400px] bg-gradient-to-br from-[#2a0812] to-[#4a1024] overflow-hidden">
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
                        className="w-full h-full object-cover opacity-90"
                      />
                      <button
                        onClick={() => setPlaying(idx)}
                        className="absolute inset-0 flex items-center justify-center group"
                        aria-label="play"
                      >
                        <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-card group-hover:scale-110 transition-transform">
                          <Play size={24} className="text-[#4a1024] ml-1" fill="currentColor" />
                        </span>
                      </button>
                      <span className="absolute top-3 left-3 bg-black/70 backdrop-blur text-white text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full">
                        Tap to play
                      </span>
                      {t.badge && (
                        <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full font-semibold">
                          {t.badge}
                        </span>
                      )}
                    </>
                  )
                ) : (
                  <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                )}
              </div>

              {/* content */}
              <div className="p-5">
                <div className="flex items-center gap-1 text-amber-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </div>
                <p className="text-[14px] text-[#1a0d12]/80 leading-relaxed line-clamp-3">
                  {t.text}
                </p>
                <div className="mt-4 pt-4 border-t border-[#4a1024]/10 flex items-center justify-between">
                  <span className="font-semibold text-[#1a0d12] text-[15px]">{t.name}</span>
                  <span className="text-[9px] tracking-[0.18em] uppercase text-[#1a0d12]/50 font-semibold">
                    {t.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center mt-6 text-[13px] text-[#1a0d12]/50">
        Tap a video to play · use the arrows or swipe to navigate manually
      </p>
    </section>
  );
};

export default StudentResults;
