import React from 'react';
import { MessageCircle, ArrowRight, Instagram, ExternalLink, BadgeCheck, Target, Users, GraduationCap, TrendingUp } from 'lucide-react';
import { igHighlights, instagramLink, coachPhoto, expertiseTags, openWhatsapp, whatsappLink } from '../mock';

const iconMap = { Target, Users, GraduationCap, TrendingUp };

const About = () => {
  return (
    <section id="about" className="relative py-14 sm:py-24 overflow-hidden">
      {/* Animated decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-gradient-to-tl from-[#f3d8b8]/55 to-transparent blur-3xl blob-1" />
        <div className="absolute top-10 -left-20 w-[340px] h-[340px] rounded-full bg-gradient-to-br from-[#f5d5b8]/40 to-transparent blur-3xl blob-2" />
        <div className="absolute top-20 left-12 w-1.5 h-1.5 rounded-full bg-[#d4a574]/50 float-dot" />
        <div className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-[#4a1024]/20 float-dot" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-32 left-1/2 w-2 h-2 rounded-full bg-[#d4a574]/40 float-dot" style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        {/* Left: Compact face-cropped photo with overlay expertise tags */}
        <div className="flex flex-col gap-5 sm:gap-7">
          <div className="relative card-3d group mx-auto w-full max-w-[340px] sm:max-w-[380px]">
            {/* glowing border ring */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#4a1024]/40 via-[#d4a574]/40 to-[#4a1024]/40 opacity-60 blur-md group-hover:opacity-90 transition-opacity duration-500" />

            {/* Photo container - face crop */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card bg-[#1a0d12]">
              <img
                src={coachPhoto}
                alt="Coach Vijay Ramawat"
                className="absolute w-[200%] left-1/2 -translate-x-1/2 breathe"
                style={{ top: '-65%' }}
              />

              {/* Verified badge */}
              <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full shadow-soft reveal" style={{ animationDelay: '0.2s' }}>
                <BadgeCheck size={13} className="text-emerald-600" />
                <span className="text-[10px] font-semibold text-[#1a0d12]/80 tracking-wide">Verified Coach</span>
              </div>

              {/* Bottom vignette */}
              <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 via-black/30 to-transparent pointer-events-none z-10" />

              {/* Name overlay */}
              <div className="absolute left-3 right-3 bottom-3 z-20 bg-white/95 backdrop-blur rounded-xl px-4 py-3 shadow-soft">
                <p className="text-[9px] tracking-[0.22em] uppercase font-semibold text-[#1a0d12]/50">
                  Skill Coach &amp; Mentor
                </p>
                <p className="text-[17px] font-bold text-[#1a0d12] mt-0.5">Vijay Ramawat</p>
              </div>
            </div>

            {/* Floating expertise tags around photo */}
            <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-6 z-30 reveal" style={{ animationDelay: '0.4s' }}>
              <ExpertiseTag tag={expertiseTags[0]} delay="0s" />
            </div>
            <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-6 z-30 reveal" style={{ animationDelay: '0.55s' }}>
              <ExpertiseTag tag={expertiseTags[1]} delay="0.8s" accent="from-fuchsia-500 to-rose-500" />
            </div>
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-6 z-30 reveal" style={{ animationDelay: '0.7s' }}>
              <ExpertiseTag tag={expertiseTags[2]} delay="1.6s" accent="from-sky-500 to-indigo-500" />
            </div>
            <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-6 z-30 reveal" style={{ animationDelay: '0.85s' }}>
              <ExpertiseTag tag={expertiseTags[3]} delay="2.4s" accent="from-emerald-500 to-teal-500" />
            </div>
          </div>

          {/* IG card */}
          <div className="rounded-2xl bg-white border border-[#4a1024]/10 shadow-card overflow-hidden lift">
            <div className="flex items-center justify-between px-4 sm:px-5 py-3 border-b border-[#4a1024]/10">
              <div className="flex items-center gap-2 text-[#1a0d12]/60 text-[12px] sm:text-[13px]">
                <Instagram size={14} />
                <span>instagram.com</span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-[0.18em] uppercase text-emerald-600 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 pulse-soft" />
                Live Profile
              </span>
            </div>
            <div className="p-4 sm:p-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="relative shrink-0">
                  <div
                    className="absolute -inset-1 rounded-full opacity-90"
                    style={{
                      background:
                        'conic-gradient(from 0deg, #f59e0b, #ec4899, #a855f7, #ec4899, #f59e0b)',
                    }}
                  />
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white p-[2.5px]">
                    <div
                      className="coach-avatar w-full h-full rounded-full"
                      style={{ backgroundImage: `url(${coachPhoto})` }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="font-semibold text-[#1a0d12] text-[14px] sm:text-[15px]">vijayadz_</p>
                    <BadgeCheck size={14} className="text-sky-500" />
                  </div>
                  <p className="text-[11px] sm:text-[13px] text-[#1a0d12]/60 truncate">Vijay Ramawat ads agency</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-[10.5px] sm:text-[12px] text-[#1a0d12]/70">
                    <span><b className="text-[#1a0d12]">39</b> posts</span>
                    <span><b className="text-[#1a0d12]">13.8K</b> followers</span>
                    <span><b className="text-[#1a0d12]">174</b> following</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-[12px] sm:text-[13px] text-[#1a0d12]/80 leading-relaxed">
                <p className="font-semibold">Entrepreneur</p>
                <p>🔥 Building <span className="text-[#4a1024] font-medium">@adify.ig</span></p>
                <p>🤝 I Help Businesses Get Quality Leads Using Meta Ads</p>
                <p>📍 Landing Pages + Ads Strategy 📈</p>
                <p className="mt-1 text-[#1a0d12]/60">Worked With Multiple Brands</p>
              </div>
              <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-3">
                {igHighlights.map((h) => (
                  <a
                    key={h.label}
                    href={instagramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 group/h"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#4a1024]/40 via-[#d4a574]/50 to-[#4a1024]/40 group-hover/h:scale-110 group-hover/h:rotate-3 transition-all duration-300">
                      <img src={h.img} alt={h.label} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-[#1a0d12]/60 truncate w-full text-center font-medium">{h.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-400 text-white font-semibold text-[13px] sm:text-[14px] hover:opacity-95 transition-all hover:scale-[1.01]"
            >
              <span className="flex items-center gap-2">
                <Instagram size={16} />
                Visit my Instagram
              </span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Right: heading + bio + stats + quote */}
        <div>
          <p className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase font-semibold text-[#1a0d12]/50 mb-3 sm:mb-5 flex items-center gap-2">
            <span className="w-6 h-px bg-[#4a1024]/40" /> Meet Your Coach
          </p>
          <h2 className="text-[28px] sm:text-[42px] lg:text-[50px] leading-[1.1] tracking-tight font-bold text-[#1a0d12]">
            Mentorship from someone who’s{' '}
            <span className="font-serif-italic text-[#4a1024] underline-serif">walked the path.</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-[14px] sm:text-[16px] text-[#1a0d12]/70 leading-relaxed max-w-lg">
            Personal roadmaps. Weekly action. Direct WhatsApp support — until you actually move forward.
          </p>

          {/* Bio - moved here from photo */}
          <div className="relative mt-6 rounded-2xl bg-[#2a0812] text-[#f5d895] p-5 sm:p-6 shadow-card border border-[#d4a574]/20 lift overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[#d4a574]/10 blur-3xl blob-3" />
            <div className="relative">
              <p className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#d4a574]/70 font-semibold mb-3">
                — Here’s What I Do
              </p>
              <p className="text-[12.5px] sm:text-[14px] leading-[1.7] text-[#f5d895]/90">
                Hi, I’m <em className="font-serif-italic text-[#fbd58c]">Vijay Ramawat</em>. I run a{' '}
                <span className="text-[#fbd58c] font-medium">Meta Ad Agency</span>, specializing in{' '}
                <span className="text-[#fbd58c] font-medium">Facebook</span> and{' '}
                <span className="text-[#fbd58c] font-medium">Meta Ads freelancing</span>. Over the past{' '}
                <span className="text-[#fbd58c] font-medium">2+ years</span>, I’ve helped students, working professionals, and homemakers develop digital skills so they can build their own freelance income.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-3 max-w-xl">
            {[
              { value: '1,000+', label: 'Students' },
              { value: '3+ yrs', label: 'Mentorship' },
              { value: '₹70L+', label: 'Self-earned' },
            ].map((s) => (
              <div key={s.label} className="lift rounded-xl bg-white border border-[#4a1024]/10 px-3 sm:px-4 py-3.5 sm:py-5 shadow-soft">
                <p className="text-[#4a1024] font-bold text-[16px] sm:text-[22px] tracking-tight">{s.value}</p>
                <p className="text-[10px] sm:text-[12px] text-[#1a0d12]/55 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-6 sm:mt-8 max-w-xl">
            <p className="font-serif-italic text-[15px] sm:text-[20px] lg:text-[22px] leading-[1.5] text-[#1a0d12]/85">
              “I focus on action over theory. Every student gets a personal roadmap — and direct WhatsApp support until they see real progress.”
            </p>
            <footer className="mt-2 sm:mt-3 text-[12px] sm:text-[14px] text-[#1a0d12]/55">— Vijay Ramawat</footer>
          </blockquote>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink}
              onClick={openWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center gap-2 bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-[12.5px] sm:text-[14px] shadow-soft transition-all hover:scale-[1.03]"
            >
              <MessageCircle size={15} />
              Message Me on WhatsApp
            </a>
            <a
              href="#signup"
              className="btn-shine inline-flex items-center justify-center gap-2 bg-[#4a1024] hover:bg-[#3a0a1c] text-white px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-semibold text-[12.5px] sm:text-[14px] shadow-soft transition-all hover:scale-[1.03]"
            >
              Reserve My Spot
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExpertiseTag = ({ tag, delay = '0s', accent = 'from-[#4a1024] to-[#7a1c3a]' }) => {
  const Icon = iconMap[tag.icon];
  return (
    <div
      className={`flex items-center gap-1.5 bg-gradient-to-br ${accent} text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full shadow-card backdrop-blur tag-float`}
      style={{ animationDelay: delay }}
    >
      <Icon size={12} strokeWidth={2.4} />
      <span className="text-[10px] sm:text-[11px] font-bold tracking-tight whitespace-nowrap">
        {tag.label}
      </span>
    </div>
  );
};

export default About;
