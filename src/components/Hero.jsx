import React from 'react';
import { ArrowRight, BookOpen, CheckCircle2, Sparkles, Compass, ShieldCheck, Award, Star, Flame } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

export default function Hero({ onExploreCourses, onEnquireClick }) {
  return (
    <section id="home" className="relative overflow-hidden pt-6 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-cream-subtle via-white to-cream/30">
      
      {/* Decorative gradient ambient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-24 left-10 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-80 h-80 bg-orange-100/50 rounded-full blur-3xl" />
        <div className="absolute top-32 left-1/3 w-64 h-64 bg-teal-100/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Call-to-actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-subtle border border-orange/30 text-orange font-bold text-xs uppercase tracking-wider shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-orange animate-ping" />
              <span>ADMISSIONS OPEN • HALDIA CAMPUS {ACADEMY_CONFIG.academicYear}</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight leading-[1.12]">
              Your Ambition. <br className="hidden sm:inline" />
              Our Guidance. <br />
              <span className="bg-gradient-to-r from-electric via-blue-600 to-indigo-600 bg-clip-text text-transparent underline decoration-orange decoration-wavy decoration-2">
                Your Success.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Personalised coaching, expert guidance and a learning environment designed to help students achieve their academic goals in Haldia.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-electric text-white font-bold text-base shadow-md shadow-electric/25 hover:bg-electric-hover hover:shadow-glow-blue active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Explore Our Courses</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onEnquireClick()}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-orange text-white font-bold text-base shadow-md shadow-orange/25 hover:bg-orange-hover hover:shadow-glow-orange active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>Enquire for Admission</span>
              </button>
            </div>

            {/* Trust statement */}
            <div className="pt-4 border-t border-slate-200/70 inline-flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-semibold text-slate-600">
              <div className="flex items-center gap-1.5 text-navy">
                <CheckCircle2 className="w-4 h-4 text-teal" />
                <span>Learn Better</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-navy">
                <ShieldCheck className="w-4 h-4 text-electric" />
                <span>Grow Confidently</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5 text-navy">
                <Sparkles className="w-4 h-4 text-orange" />
                <span>Achieve More</span>
              </div>
            </div>

            {/* Quick rating snippet */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-500">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="font-semibold text-slate-700">4.9 / 5 Rating</span>
              <span className="text-slate-300">|</span>
              <span>Based on 350+ Student & Parent Reviews</span>
            </div>

          </div>

          {/* Right Column: High Quality Educational Visual & Floating Statistic Cards */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Backing decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-electric/20 via-teal/15 to-orange/20 rounded-3xl filter blur-xl transform scale-95" />

              {/* Central Card with Stylized Educational Classroom Graphic */}
              <div className="relative bg-white rounded-3xl p-6 sm:p-7 shadow-card border border-slate-100 overflow-hidden">
                
                {/* Header ribbon inside illustration */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full">
                    Haldia Central Campus Classroom
                  </span>
                </div>

                {/* Modern Educational SVG Scene */}
                <div className="my-4 p-4 rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-light text-white relative overflow-hidden shadow-inner">
                  {/* Subtle chalkboard grid */}
                  <div className="absolute inset-0 opacity-10 bg-dot-pattern-light" />
                  
                  {/* Subject Badges */}
                  <div className="flex justify-between items-center text-xs font-mono text-teal">
                    <span>∫ f(x)dx • ΔE = hν • PV=nRT</span>
                    <span className="bg-electric/30 text-white font-bold px-2 py-0.5 rounded text-[10px]">
                      Live Batch 2026
                    </span>
                  </div>

                  {/* Visual Illustration: Classroom Mentorship */}
                  <svg className="w-full h-44 sm:h-52 my-2" viewBox="0 0 400 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="20" y="20" width="360" height="120" rx="10" fill="#0B132B" stroke="#2563EB" strokeWidth="1.5" strokeDasharray="3 3"/>
                    <path d="M 40 50 Q 80 25 120 50 T 200 50" stroke="#14B8A6" strokeWidth="2" fill="none"/>
                    <text x="40" y="80" fill="#94A3B8" fontSize="12" fontFamily="monospace">Newton's Laws • Calculus • Organic Synthesis</text>
                    <text x="40" y="105" fill="#FF7A30" fontSize="13" fontWeight="bold">Step 1: Concept Intuition → Level 3 Mastery</text>
                    
                    {/* Teacher / Mentor */}
                    <circle cx="280" cy="65" r="16" fill="#FF7A30"/>
                    <path d="M 260 115 C 260 90, 300 90, 300 115 Z" fill="#FF7A30"/>
                    <line x1="280" y1="85" x2="245" y2="70" stroke="#FF7A30" strokeWidth="3" strokeLinecap="round"/>

                    {/* Classroom Desks and Engaged Students */}
                    <rect x="40" y="170" width="140" height="40" rx="6" fill="#1E293B" stroke="#334155"/>
                    <circle cx="80" cy="155" r="14" fill="#2563EB"/>
                    <circle cx="140" cy="155" r="14" fill="#14B8A6"/>
                    <path d="M 68 185 C 68 175, 92 175, 92 185 Z" fill="#2563EB"/>
                    <path d="M 128 185 C 128 175, 152 175, 152 185 Z" fill="#14B8A6"/>

                    <rect x="220" y="170" width="140" height="40" rx="6" fill="#1E293B" stroke="#334155"/>
                    <circle cx="260" cy="155" r="14" fill="#F59E0B"/>
                    <circle cx="320" cy="155" r="14" fill="#3B82F6"/>
                    <path d="M 248 185 C 248 175, 272 175, 272 185 Z" fill="#F59E0B"/>
                    <path d="M 308 185 C 308 175, 332 175, 332 185 Z" fill="#3B82F6"/>

                    <circle cx="200" cy="70" r="12" fill="#F59E0B" fillOpacity="0.2"/>
                    <circle cx="200" cy="70" r="6" fill="#F59E0B"/>
                  </svg>

                  <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-slate-700/50">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                      1-on-1 Faculty Doubt Desks
                    </span>
                    <span className="font-semibold text-orange-light">Bokaro CBT Testing Lab</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 text-xs text-slate-600 font-semibold">
                  <span>Admissions Open for All Classes</span>
                  <span className="text-electric font-bold">Foundation • Secondary • JEE/NEET</span>
                </div>
              </div>

              {/* Floating Stat Card 1: Top Left */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-card-hover border border-slate-100 flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-orange-subtle text-orange flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-navy">Ex-IITian Mentorship</div>
                  <div className="text-[11px] text-slate-500">First-principles teaching</div>
                </div>
              </div>

              {/* Floating Stat Card 2: Bottom Right */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-card-hover border border-slate-100 flex items-center gap-3 z-10">
                <div className="w-10 h-10 rounded-xl bg-teal-subtle text-teal flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-navy">Daily Doubt Hours</div>
                  <div className="text-[11px] text-slate-500">10:00 AM – 7:30 PM</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
