import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, Star, MessageSquare, Volume2, VolumeX } from 'lucide-react';
import { testimonials } from '../mock';

const StudentResults = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector('[data-card]');
    const cardWidth = card ? card.offsetWidth + 20 : 280;
    scrollRef.current.scrollBy({ left: dir * cardWidth, behavior: 'smooth' });
  };

  return (
    <section id="results" className="relative py-14 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-1/3 w-[360px] h-[360px] rounded-full bg-gradient-to-bl from-[#f3d8b8]/30 to-transparent blur-3xl blob-2" />
        <div className="absolute left-0 bottom-0 w-[280px] h-[280px] rounded-full bg-gradient-to-tr from-[#f5d5b8]/30 to-transparent blur-3xl blob-3" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-[#4a1024]/10 shadow-soft mb-4">
          <MessageSquare size={13} className="text-[#4a1024]" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#1a0d12]/70">
            Student Feedback
          </span>
        </div>
        <h2 className="text-[26px] sm:text-[38px] lg:text-[46px] leading-[1.12] tracking-tight font-bold text-[#1a0d12]">
          Real voices.{' '}
          <span className="font-serif-italic text-[#4a1024] underline-serif">Real growth.</span>
        </h2>
        <p className="mt-3 sm:mt-4 text-[13px] sm:text-[15px] text-[#1a0d12]/65 max-w-xl mx-auto">
          Seedhe students aur team se — kya seekha, kitna kamaya, kaise zindagi badli.
        </p>
        <div className="mt-3 flex items-center justify-center gap-1 text-amber-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} fill="currentColor" />
          ))}
        </div>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll(-1)}
          aria-label="prev"
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#4a1024]/15 shadow-card items-center justify-center hover:bg-[#4a1024] hover:text-white text-[#4a1024] hover:scale-110 transition-all duration-300"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scroll(1)}
          aria-label="next"
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#4a1024]/15 shadow-card items-center justify-center hover:bg-[#4a1024] hover:text-white text-[#4a1024] hover:scale-110 transition-all duration-300"
        >
          <ChevronRight size={18} />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-snap-x px-4 sm:px-12 pb-6"
        >
          {testimonials.map((t, idx) => (
            <FeedbackCard key={t.id} t={t} idx={idx} />
          ))}
        </div>
      </div>

      <p className="text-center mt-4 sm:mt-5 text-[11px] sm:text-[12px] text-[#1a0d12]/45 px-5">
        Swipe or use arrows to navigate
      </p>
    </section>
  );
};

const FeedbackCard = ({ t, idx }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  // Scroll-triggered reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.18 }
    );
    if (cardRef.current) obs.observe(cardRef.current);
    return () => obs.disconnect();
  }, []);

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty('--rx', `${-(y - 0.5) * 8}deg`);
    el.style.setProperty('--ry', `${(x - 0.5) * 8}deg`);
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
  };

  const togglePlay = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };
  const toggleMute = (e) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      data-card
      className={`tilt-3d snap-start flex-shrink-0 w-[240px] sm:w-[280px] bg-white rounded-2xl border border-[#4a1024]/10 shadow-card overflow-hidden transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${idx * 0.1}s` }}
    >
      {/* glow ring on hover */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#4a1024]/20 via-[#d4a574]/25 to-[#4a1024]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

      {/* Media area — letterbox, no crop */}
      <div className="relative aspect-[4/5] bg-gradient-to-br from-[#1a0d12] via-[#2a0812] to-[#3a0e1c] overflow-hidden tilt-layer" style={{ '--depth': '0px' }}>
        <div className="absolute inset-0 cursor-glow opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

        {t.type === 'video' ? (
          <>
            <video
              ref={videoRef}
              src={t.media}
              poster={t.poster}
              className="absolute inset-0 w-full h-full object-contain"
              autoPlay
              muted={muted}
              loop
              playsInline
              preload="metadata"
            />
            {/* Custom video controls */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 z-20 flex items-center gap-1.5 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={togglePlay}
                aria-label={playing ? 'pause' : 'play'}
                className="w-8 h-8 rounded-full bg-white/95 backdrop-blur text-[#4a1024] flex items-center justify-center shadow-soft hover:scale-110 transition-transform"
              >
                {playing ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" className="ml-0.5" />}
              </button>
              <button
                onClick={toggleMute}
                aria-label={muted ? 'unmute' : 'mute'}
                className="w-8 h-8 rounded-full bg-white/95 backdrop-blur text-[#4a1024] flex items-center justify-center shadow-soft hover:scale-110 transition-transform"
              >
                {muted ? <VolumeX size={13} /> : <Volume2 size={13} />}
              </button>
            </div>
          </>
        ) : (
          <img
            src={t.media}
            alt={t.name}
            className="absolute inset-0 w-full h-full object-contain hover:scale-[1.03] transition-transform duration-700"
          />
        )}

        {/* Top badges */}
        <div className="absolute top-2.5 left-2.5 z-20 bg-black/65 backdrop-blur text-white text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full font-semibold tilt-layer" style={{ '--depth': '30px' }}>
          {t.label}
        </div>
        {t.badge && (
          <div className="absolute top-2.5 right-2.5 z-20 bg-emerald-500 text-white text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full font-bold shadow-soft tilt-layer" style={{ '--depth': '30px' }}>
            {t.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3.5 sm:p-4 tilt-layer" style={{ '--depth': '15px' }}>
        <div className="flex items-center gap-1 text-amber-500 mb-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} fill="currentColor" />
          ))}
        </div>
        <p className="text-[11.5px] sm:text-[12.5px] text-[#1a0d12]/80 leading-[1.55] line-clamp-3">
          {t.text}
        </p>
        <div className="mt-3 pt-3 border-t border-[#4a1024]/10 flex items-center justify-between">
          <span className="font-bold text-[#1a0d12] text-[13px] sm:text-[14px]">{t.name}</span>
          <span className="w-7 h-7 rounded-full bg-gradient-to-br from-[#4a1024] to-[#7a1c3a] text-white flex items-center justify-center text-[10px] font-bold shadow-soft">
            {t.name.charAt(0)}
          </span>
        </div>

        {/* Animated bottom line on hover */}
        <div className="mt-3 h-0.5 bg-[#4a1024]/10 rounded-full overflow-hidden">
          <div className="h-full w-0 hover:w-full bg-gradient-to-r from-amber-400 via-rose-400 to-[#4a1024] transition-all duration-1000 ease-out" />
        </div>
      </div>
    </div>
  );
};

export default StudentResults;
