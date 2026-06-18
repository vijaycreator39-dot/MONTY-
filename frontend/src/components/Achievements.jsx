import React, { useRef, useState } from 'react';
import { Trophy, Sparkles, Play, Pause, Volume2, VolumeX } from 'lucide-react';
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
          <h2 className="text-[26px] sm:text-[40px] lg:text-[50px] leading-[1.1] tracking-tight font-bold text-[#1a0d12]">
            Milestones earned{' '}
            <span className="font-serif-italic text-[#4a1024] underline-serif">from skills.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-[13px] sm:text-[16px] text-[#1a0d12]/65 max-w-xl mx-auto">
            Real outcomes — not promises. These are some of the milestones earned through consistent freelancing and the Meta Ads agency.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-7 max-w-md sm:max-w-lg mx-auto">
          {achievements.map((a, i) => (
            <AchievementCard key={a.title} a={a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const AchievementCard = ({ a, index }) => {
  const cardRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const onMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const ry = (x - 0.5) * 8;
    const rx = -(y - 0.5) * 8;
    el.style.setProperty('--rx', `${rx}deg`);
    el.style.setProperty('--ry', `${ry}deg`);
    el.style.setProperty('--mx', `${x * 100}%`);
    el.style.setProperty('--my', `${y * 100}%`);
  };
  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty('--rx', `0deg`);
    el.style.setProperty('--ry', `0deg`);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  const toggleMute = () => {
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
      className="tilt-3d group relative rounded-2xl overflow-hidden bg-white border border-[#4a1024]/10 shadow-card reveal"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      {/* Outer glow */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#4a1024]/25 via-[#d4a574]/30 to-[#4a1024]/25 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />

      {/* Media area - NO CROP, contain inside dark frame */}
      <div className="relative aspect-[4/5] sm:aspect-square bg-gradient-to-br from-[#1a0d12] via-[#2a0812] to-[#3a0e1c] overflow-hidden tilt-layer" style={{ '--depth': '0px' }}>
        {/* Cursor glow */}
        <div className="absolute inset-0 cursor-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10" />

        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(212,165,116,0.25) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(74,16,36,0.4) 0%, transparent 50%)'
        }} />

        {a.type === 'video' ? (
          <>
            <video
              ref={videoRef}
              src={a.media}
              poster={a.poster}
              className="absolute inset-0 w-full h-full object-contain"
              autoPlay
              muted={muted}
              loop
              playsInline
              preload="metadata"
            />
            {/* Video controls */}
            <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={togglePlay}
                aria-label={playing ? 'pause' : 'play'}
                className="w-9 h-9 rounded-full bg-white/90 backdrop-blur text-[#4a1024] flex items-center justify-center shadow-card hover:scale-110 transition-transform"
              >
                {playing ? <Pause size={15} fill="currentColor" /> : <Play size={15} fill="currentColor" className="ml-0.5" />}
              </button>
              <button
                onClick={toggleMute}
                aria-label={muted ? 'unmute' : 'mute'}
                className="w-9 h-9 rounded-full bg-white/90 backdrop-blur text-[#4a1024] flex items-center justify-center shadow-card hover:scale-110 transition-transform"
              >
                {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>
              <div className="flex-1" />
              <span className="text-[10px] tracking-wider uppercase text-white/80 bg-black/40 backdrop-blur px-2 py-1 rounded-full font-semibold">
                Live Footage
              </span>
            </div>
          </>
        ) : (
          <img
            src={a.media}
            alt={a.title}
            className="absolute inset-0 w-full h-full object-contain p-4 group-hover:scale-[1.04] transition-transform duration-700"
          />
        )}

        <div className={`absolute inset-0 bg-gradient-to-tr ${a.accent} mix-blend-overlay pointer-events-none`} />

        {/* Top floating badge */}
        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 bg-white/95 backdrop-blur px-2.5 py-1 rounded-full shadow-soft tilt-layer" style={{ '--depth': '40px' }}>
          <Sparkles size={11} className="text-amber-500" />
          <span className="text-[9.5px] sm:text-[10px] font-bold tracking-wide text-[#1a0d12]/80">
            Milestone {String(index + 1).padStart(2, '0')}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-20 bg-emerald-500 text-white text-[9.5px] sm:text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full font-bold shadow-soft tilt-layer" style={{ '--depth': '30px' }}>
          {a.badge}
        </div>
      </div>

      {/* Content area */}
      <div className="p-5 sm:p-6 tilt-layer" style={{ '--depth': '20px' }}>
        <p className="text-[9.5px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold text-[#4a1024]/70 mb-1.5">
          {a.detail}
        </p>
        <h3 className="text-[20px] sm:text-[24px] font-bold text-[#1a0d12] tracking-tight">
          {a.title}
        </h3>
        <p className="mt-2 text-[12.5px] sm:text-[14px] text-[#1a0d12]/65 leading-relaxed">
          {a.subtitle}
        </p>

        {/* Animated bottom progress line */}
        <div className="mt-4 h-0.5 bg-[#4a1024]/10 rounded-full overflow-hidden">
          <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-amber-400 via-rose-400 to-[#4a1024] transition-all duration-1000 ease-out" />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
