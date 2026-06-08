import React from 'react';
import { MessageCircle, ArrowRight, Instagram, ExternalLink } from 'lucide-react';
import { igHighlights, whatsappLink, instagramLink, coachPhoto } from '../mock';

const About = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Animated decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-gradient-to-tl from-[#f3d8b8]/55 to-transparent blur-3xl blob-1" />
        <div className="absolute top-10 -left-20 w-[360px] h-[360px] rounded-full bg-gradient-to-br from-[#f5d5b8]/40 to-transparent blur-3xl blob-2" />
        <div className="absolute top-20 left-12 w-1.5 h-1.5 rounded-full bg-[#d4a574]/50 float-dot" />
        <div className="absolute top-1/3 right-20 w-2 h-2 rounded-full bg-[#4a1024]/20 float-dot" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-32 left-1/2 w-2 h-2 rounded-full bg-[#d4a574]/40 float-dot" style={{ animationDelay: '0.8s' }} />
        <div className="absolute top-1/4 left-1/3 w-1 h-1 rounded-full bg-[#4a1024]/30 float-dot" style={{ animationDelay: '2.2s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
        {/* Left: Photo + IG card */}
        <div className="flex flex-col gap-6 sm:gap-8">
          {/* Photo card */}
          <div className="relative card-3d">
            <div className="relative rounded-2xl overflow-hidden shadow-card bg-gradient-to-br from-[#f3d8b8] to-[#e6c39c]">
              <div
                className="coach-photo w-full h-[440px] sm:h-[520px]"
                style={{ backgroundImage: `url(${coachPhoto})` }}
                role="img"
                aria-label="Coach Vijay Ramawat"
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-4 right-4 bottom-4 bg-white/95 backdrop-blur rounded-xl px-4 sm:px-5 py-3 sm:py-4 shadow-soft">
                <p className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-semibold text-[#1a0d12]/50">
                  Skill Coach &amp; Mentor
                </p>
                <p className="text-[18px] sm:text-[20px] font-bold text-[#1a0d12] mt-1">Vijay Ramawat</p>
              </div>
            </div>
          </div>

          {/* What I do card */}
          <div className="relative rounded-2xl bg-[#2a0812] text-[#f5d895] p-6 sm:p-7 shadow-card border border-[#d4a574]/20 lift">
            <p className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase text-[#d4a574]/70 font-semibold mb-3">
              — Here’s What I Do
            </p>
            <p className="text-[13.5px] sm:text-[15px] leading-[1.75] text-[#f5d895]/90">
              Hi, I’m <em className="font-serif-italic text-[#fbd58c]">Vijay Ramawat</em>. I run a{' '}
              <span className="px-2 py-0.5 rounded-md bg-[#d4a574]/15 text-[#fbd58c]">Meta Ad Agency,</span>{' '}
              specializing in <span className="px-2 py-0.5 rounded-md bg-[#d4a574]/15 text-[#fbd58c]">Facebook</span>{' '}
              and <span className="px-2 py-0.5 rounded-md bg-[#d4a574]/15 text-[#fbd58c]">Meta Ads freelancing.</span>{' '}
              Over the past <span className="px-2 py-0.5 rounded-md bg-[#d4a574]/15 text-[#fbd58c]">2 years,</span> I’ve helped{' '}
              <em className="font-serif-italic">students, working professionals,</em> and{' '}
              <em className="font-serif-italic">homemakers</em> develop digital skills so they can build their own freelance income and grow in their careers.
            </p>
            <div className="mt-5 pt-4 border-t border-[#d4a574]/20">
              <p className="text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#d4a574]/70 font-semibold">
                — Vijay Ramawat
              </p>
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
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] shrink-0">
                  <div className="w-full h-full rounded-full bg-white p-[2px]">
                    <div
                      className="w-full h-full rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${coachPhoto})`, backgroundSize: '180%', backgroundPosition: '50% 32%' }}
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#1a0d12] text-[15px]">vijayadz_</p>
                  <p className="text-[12px] sm:text-[13px] text-[#1a0d12]/60 truncate">Vijay Ramawat ads agency</p>
                  <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1 text-[11px] sm:text-[12px] text-[#1a0d12]/70">
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
                  <div key={h.label} className="flex flex-col items-center gap-1.5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-[2px] bg-gradient-to-tr from-[#4a1024]/30 to-[#d4a574]/40 hover:scale-110 transition-transform duration-300">
                      <img src={h.img} alt={h.label} className="w-full h-full rounded-full object-cover" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] text-[#1a0d12]/60 truncate w-full text-center">{h.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-fuchsia-500 via-rose-500 to-amber-400 text-white font-medium text-[13px] sm:text-[14px] hover:opacity-95 transition-all hover:scale-[1.01]"
            >
              <span className="flex items-center gap-2">
                <Instagram size={16} />
                Visit my Instagram
              </span>
              <ExternalLink size={16} />
            </a>
          </div>
        </div>

        {/* Right: heading + stats + quote */}
        <div className="lg:pt-10">
          <p className="text-[10px] sm:text-[11px] tracking-[0.24em] uppercase font-semibold text-[#1a0d12]/50 mb-4 sm:mb-5 flex items-center gap-2">
            <span className="w-6 h-px bg-[#4a1024]/40" /> Meet Your Coach
          </p>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[54px] leading-[1.08] tracking-tight font-bold text-[#1a0d12]">
            Mentorship from someone who’s{' '}
            <span className="font-serif-italic text-[#4a1024] underline-serif">walked the path.</span>
          </h2>
          <p className="mt-5 sm:mt-6 text-[15px] sm:text-[17px] text-[#1a0d12]/70 leading-relaxed max-w-lg">
            Personal roadmaps. Weekly action. Direct WhatsApp support — until you actually move forward.
          </p>

          {/* Stats */}
          <div className="mt-7 sm:mt-9 grid grid-cols-3 gap-2 sm:gap-3 max-w-xl">
            {[
              { value: '1,000+', label: 'Students' },
              { value: '3+ yrs', label: 'Mentorship' },
              { value: '₹70L+', label: 'Self-earned' },
            ].map((s) => (
              <div key={s.label} className="lift rounded-xl bg-white border border-[#4a1024]/10 px-3 sm:px-4 py-4 sm:py-5 shadow-soft">
                <p className="text-[#4a1024] font-bold text-[18px] sm:text-[22px] tracking-tight">{s.value}</p>
                <p className="text-[11px] sm:text-[12px] text-[#1a0d12]/55 mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-7 sm:mt-9 max-w-xl">
            <p className="font-serif-italic text-[18px] sm:text-[22px] lg:text-[24px] leading-[1.45] text-[#1a0d12]/85">
              “I focus on action over theory. Every student gets a personal roadmap — and direct WhatsApp support until they see real progress.”
            </p>
            <footer className="mt-3 text-[13px] sm:text-[14px] text-[#1a0d12]/55">— Vijay Ramawat</footer>
          </blockquote>

          {/* CTA */}
          <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine inline-flex items-center justify-center gap-2 bg-gradient-to-b from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-6 py-3.5 rounded-full font-semibold text-[13px] sm:text-[14px] shadow-soft transition-all hover:scale-[1.03]"
            >
              <MessageCircle size={16} />
              Message Me on WhatsApp
            </a>
            <a
              href="#signup"
              className="btn-shine inline-flex items-center justify-center gap-2 bg-[#4a1024] hover:bg-[#3a0a1c] text-white px-6 py-3.5 rounded-full font-semibold text-[13px] sm:text-[14px] shadow-soft transition-all hover:scale-[1.03]"
            >
              Reserve My Spot
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
