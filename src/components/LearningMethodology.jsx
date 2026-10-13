import React, { useState } from 'react';
import { Lightbulb, Compass, Layers, Search, Sparkles, CheckCircle2, ChevronRight, ArrowRight } from 'lucide-react';
import { METHODOLOGY_STEPS } from '../data/academyData';

const iconMap = {
  Lightbulb: Lightbulb,
  Compass: Compass,
  Layers: Layers,
  Search: Search,
  Sparkles: Sparkles
};

export default function LearningMethodology({ onEnquireClick }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="methodology" className="py-20 lg:py-28 bg-softBg border-b border-slate-200 relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-royalBlue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-royalBlue uppercase tracking-widest bg-royalBlue/10 px-3.5 py-1.5 rounded-full border border-royalBlue/20 inline-block mb-4">
            Educational Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight tracking-tight">
            5-Stage Systematic Learning Methodology
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Success in competitive exams is not born from luck or late-night cramming. It is the predictable outcome of an engineered, step-by-step cognitive workflow executed consistently.
          </p>
        </div>

        {/* Step Selector Pills for Desktop & Mobile */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {METHODOLOGY_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeStep === idx
                  ? 'bg-midnight text-white shadow-md shadow-midnight/20 scale-105 border-b-2 border-gold'
                  : 'bg-white text-slate-600 hover:text-midnight hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span className={`font-mono text-xs ${activeStep === idx ? 'text-gold' : 'text-slate-400'}`}>
                {step.step}
              </span>
              <span>{step.title}</span>
            </button>
          ))}
        </div>

        {/* Active Step Feature Showcase */}
        {(() => {
          const current = METHODOLOGY_STEPS[activeStep];
          const Icon = iconMap[current.icon] || Lightbulb;

          return (
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-card max-w-5xl mx-auto transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Side: Step Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono text-royalBlue">
                      {current.step}
                    </span>
                    <div className="h-6 w-px bg-slate-200" />
                    <span className="text-xs font-bold uppercase tracking-wider text-gold px-2.5 py-1 rounded bg-gold/10">
                      {current.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-midnight">
                    {current.title}
                  </h3>

                  <p className="text-base text-slate-600 leading-relaxed font-normal">
                    {current.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="pt-2 space-y-2.5">
                    {current.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-royalBlue flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Next Step / Action */}
                  <div className="pt-4 flex items-center gap-4">
                    {activeStep < METHODOLOGY_STEPS.length - 1 ? (
                      <button
                        onClick={() => setActiveStep(prev => prev + 1)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-royalBlue hover:text-royalBlue-hover transition-colors cursor-pointer"
                      >
                        <span>Next: Step {METHODOLOGY_STEPS[activeStep + 1].step} — {METHODOLOGY_STEPS[activeStep + 1].title}</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        onClick={onEnquireClick}
                        className="inline-flex items-center gap-2 text-sm font-bold text-gold hover:text-gold-hover transition-colors cursor-pointer"
                      >
                        <span>Experience This Methodology in a Demo Session</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Side: Visual Graphic Box */}
                <div className="lg:col-span-5 bg-gradient-to-br from-midnight via-deepBlue to-midnight text-white p-7 rounded-2xl border border-slate-700/60 shadow-xl space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Cognitive Objective</span>
                    <h4 className="text-lg font-bold text-white mt-1">{current.subtitle}</h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    By strictly adhering to {current.title}, students avoid cognitive fatigue, pinpoint their conceptual vulnerabilities immediately, and enter mock exams with absolute clarity.
                  </p>
                  <div className="pt-3 border-t border-white/10 text-xs text-slate-400 flex items-center justify-between">
                    <span>Haldia Central Campus Standard</span>
                    <span className="font-mono text-gold font-bold">Step {current.step} / 05</span>
                  </div>
                </div>

              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
}
