import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, GraduationCap, ChevronDown } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

export default function InteractiveLanding({ onEnter }) {
  const [isDismissing, setIsDismissing] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Reveal text elements smoothly on mount
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleTriggerEnter = () => {
    if (isDismissing) return;
    setIsDismissing(true);

    // Trigger onEnter callback after the forward zoom transition finishes
    setTimeout(() => {
      onEnter();
    }, 750);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      handleTriggerEnter();
    }
  };

  return (
    <div
      role="region"
      aria-label="Welcome screen for Haldia Learning Academy"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={handleTriggerEnter}
      className={`fixed inset-0 z-50 flex flex-col justify-between items-center text-white select-none cursor-pointer overflow-hidden transition-all duration-700 ease-out ${
        isDismissing 
          ? 'opacity-0 scale-110 pointer-events-none filter blur-sm' 
          : 'opacity-100 scale-100'
      }`}
      style={{
        background: 'radial-gradient(ellipse 95% 70% at 50% 20%, #172A4A 0%, #101C35 60%, #080E1C 100%)'
      }}
    >
      {/* Background Animated Geometric Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Ambient Radial Lights */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-royalBlue/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 right-10 w-[500px] h-[500px] bg-gold/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Top Bar with Brand Badge */}
      <header className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-8 sm:pt-12 flex justify-between items-center">
        <div 
          className={`flex items-center gap-3 transition-all duration-700 delay-100 ${
            isReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <div className="w-12 h-12 rounded-2xl bg-midnight border border-white/20 flex items-center justify-center text-gold shadow-lg shadow-midnight/50">
            <GraduationCap className="w-7 h-7 text-gold" />
          </div>
          <div>
            <div className="text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none">
              HALDIA <span className="text-gold">LEARNING</span>
            </div>
            <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 uppercase mt-0.5">
              ACADEMY • HALDIA CENTRAL CAMPUS
            </div>
          </div>
        </div>

        {/* Admissions Session Indicator */}
        <div 
          className={`hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold tracking-wider text-slate-200 transition-all duration-700 delay-150 ${
            isReady ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span>SESSION {ACADEMY_CONFIG.academicYear}</span>
        </div>
      </header>

      {/* Center Cinematic Stage */}
      <main className="relative z-10 max-w-4xl mx-auto px-6 text-center my-auto py-12 flex flex-col items-center">
        {/* Subtle pill badge */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 backdrop-blur-md text-xs sm:text-sm font-semibold text-slate-200 tracking-wider uppercase mb-6 transition-all duration-700 delay-200 ${
            isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <Sparkles className="w-4 h-4 text-gold" />
          <span>PREMIER JEE & ADVANCED ACADEMIC COACHING</span>
        </div>

        {/* Grand Headline */}
        <h1 
          className={`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-[1.05] transition-all duration-700 delay-300 ${
            isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          YOUR JOURNEY TO JEE <br />
          <span className="bg-gradient-to-r from-white via-slate-100 to-gold bg-clip-text text-transparent">
            STARTS HERE.
          </span>
        </h1>

        {/* Supporting Copy */}
        <p 
          className={`mt-6 sm:mt-8 text-base sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-light leading-relaxed transition-all duration-700 delay-400 ${
            isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          Learn with purpose. Build strong concepts. <br className="hidden sm:inline" />
          Prepare for what comes next.
        </p>

        {/* Accessible Direct Enter Button */}
        <div 
          className={`mt-10 sm:mt-12 transition-all duration-700 delay-500 ${
            isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleTriggerEnter();
            }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-royalBlue text-white font-extrabold text-sm sm:text-base tracking-wide shadow-2xl shadow-royalBlue/40 hover:bg-royalBlue-hover hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Enter website"
          >
            <span>ENTER WEBSITE</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </main>

      {/* Footer Interactive Tap Prompt */}
      <footer 
        className={`relative z-10 w-full max-w-md mx-auto px-6 pb-8 sm:pb-12 text-center flex flex-col items-center gap-2 transition-all duration-700 delay-600 ${
          isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-400 uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-ping" />
          <span>TAP ANYWHERE TO ENTER</span>
        </div>
        
        {/* Animated bounce chevron */}
        <div className="animate-bounce mt-1">
          <ChevronDown className="w-5 h-5 text-gold/80" />
        </div>
        
        <p className="text-[11px] text-slate-500 font-medium">
          Haldia Central Campus • City Centre Complex, Sector 1, Haldia
        </p>
      </footer>
    </div>
  );
}
