import React, { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, GraduationCap, CheckCircle2, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

export default function Hero({ onExploreCourses, onEnquireClick }) {
  const [animatedIn, setAnimatedIn] = useState(false);

  useEffect(() => {
    // Staggered reveal sequence on load
    const timer = setTimeout(() => {
      setAnimatedIn(true);
    }, 80);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] lg:min-h-[96vh] flex flex-col justify-between overflow-hidden bg-midnight text-white pt-10 pb-12 lg:pt-16 lg:pb-16"
      style={{
        background: 'radial-gradient(ellipse 90% 60% at 50% 10%, #172A4A 0%, #101C35 75%, #0A1224 100%)'
      }}
    >
      {/* Background Academic Grid & Subtle Coordinate Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-royalBlue/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Step 1 & 2: Institute Badge & Academic Session */}
            <div 
              className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-700 ${
                animatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-3'
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-semibold tracking-wider text-slate-200 uppercase">
                {ACADEMY_CONFIG.name} • ADMISSIONS {ACADEMY_CONFIG.academicYear}
              </span>
            </div>

            {/* Step 3: Large Editorial Headline */}
            <h1 
              className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white transition-all duration-700 delay-150 ${
                animatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              YOUR IIT-JEE <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-gold bg-clip-text text-transparent">
                JOURNEY STARTS HERE.
              </span>
            </h1>

            {/* Step 4: Supporting Copy */}
            <p 
              className={`text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed transition-all duration-700 delay-300 ${
                animatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Build strong concepts. Develop problem-solving skills. Prepare with purpose. Personalised coaching and disciplined mentorship designed for rigorous academic excellence.
            </p>

            {/* Step 5: Primary & Secondary CTAs */}
            <div 
              className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 transition-all duration-700 delay-500 ${
                animatedIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <button
                onClick={onExploreCourses}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-royalBlue text-white font-bold text-sm sm:text-base shadow-lg shadow-royalBlue/30 hover:bg-royalBlue-hover hover:shadow-glow-blue active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>EXPLORE OUR PROGRAMS</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onEnquireClick()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 border border-white/20 text-white font-bold text-sm sm:text-base hover:bg-white/15 hover:border-gold/60 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>ENQUIRE FOR ADMISSION</span>
              </button>
            </div>

            {/* Authentic Academic Commitments */}
            <div 
              className={`pt-5 border-t border-white/10 inline-flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs sm:text-sm font-medium text-slate-300 transition-all duration-700 delay-700 ${
                animatedIn ? 'opacity-100 translate-y-0' : 'opacity-0'
              }`}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Concept-First Derivations</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Daily Practice Problems</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0" />
                <span>Individual Doubt Cabins</span>
              </div>
            </div>

          </div>

          {/* Right Column: Academic Vector / Mathematical Scene */}
          <div 
            className={`lg:col-span-5 relative flex justify-center transition-all duration-1000 delay-500 ${
              animatedIn ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative w-full max-w-md bg-gradient-to-br from-deepBlue via-midnight to-deepBlue/90 rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-500" />
                </div>
                <span className="text-[11px] font-mono tracking-widest text-gold uppercase px-2.5 py-0.5 rounded bg-gold/10 border border-gold/20">
                  {ACADEMY_CONFIG.campusLocationName}
                </span>
              </div>

              {/* Mathematical / Physics Conceptual Representation */}
              <div className="my-5 p-4 rounded-2xl bg-midnight/90 border border-white/5 relative overflow-hidden">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400 mb-2">
                  <span>∫ f(x)dx • ∇ × E = -∂B/∂t</span>
                  <span className="text-gold font-bold">First Principles</span>
                </div>

                {/* Vector Geometry Canvas */}
                <svg className="w-full h-44 my-2" viewBox="0 0 360 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Coordinate Axes */}
                  <line x1="30" y1="150" x2="330" y2="150" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3"/>
                  <line x1="50" y1="20" x2="50" y2="160" stroke="#334155" strokeWidth="1.5" strokeDasharray="3 3"/>
                  
                  {/* Harmonic Wave Function */}
                  <path 
                    d="M 50 100 Q 110 30 170 100 T 290 100" 
                    stroke="#D9AD55" 
                    strokeWidth="2.5" 
                    fill="none"
                  />
                  
                  {/* Vector Tangent */}
                  <line x1="170" y1="100" x2="230" y2="35" stroke="#2855A6" strokeWidth="2.5" strokeLinecap="round"/>
                  <polygon points="230,35 220,40 226,49" fill="#2855A6"/>
                  
                  {/* Integral Shaded Area */}
                  <path 
                    d="M 110 65 Q 140 85 170 100 L 170 150 L 110 150 Z" 
                    fill="#D9AD55" 
                    fillOpacity="0.12"
                  />

                  {/* Mathematical Annotations */}
                  <text x="60" y="45" fill="#94A3B8" fontSize="11" fontFamily="monospace">v(t) = dx/dt</text>
                  <text x="180" y="30" fill="#93C5FD" fontSize="11" fontFamily="monospace">F_net = m·a</text>
                  <text x="180" y="140" fill="#E2E8F0" fontSize="11" fontFamily="monospace">Δx = ∫ v dt</text>
                  <circle cx="170" cy="100" r="4" fill="#D9AD55" />
                </svg>

                <div className="flex items-center justify-between text-xs text-slate-300 pt-2 border-t border-white/5">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    Conceptual Derivation
                  </span>
                  <span className="font-mono text-slate-400">Step 01 → Mastery</span>
                </div>
              </div>

              {/* Institute Core Highlights */}
              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-lg font-bold text-white">35 Max</div>
                  <div className="text-[11px] text-slate-400">Students / Batch</div>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-lg font-bold text-gold">10 AM – 7:30 PM</div>
                  <div className="text-[11px] text-slate-400">Daily Doubt Cabins</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Step 7: Subtle Scroll Indicator */}
      <div 
        className={`max-w-7xl mx-auto px-4 w-full pt-8 flex items-center justify-center transition-all duration-700 delay-1000 ${
          animatedIn ? 'opacity-80' : 'opacity-0'
        }`}
      >
        <button 
          onClick={onExploreCourses}
          className="flex flex-col items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll to explore academic courses"
        >
          <span className="tracking-wider uppercase text-[10px]">Scroll to explore</span>
          <ArrowDown className="w-4 h-4 text-gold group-hover:translate-y-1 transition-transform animate-bounce" />
        </button>
      </div>

    </section>
  );
}
