import React from 'react';
import { Lightbulb, Layers, Calendar, Clock, Award, Users, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { OUR_APPROACH_ITEMS, ACADEMY_CONFIG } from '../data/academyData';

const iconMap = {
  Lightbulb: Lightbulb,
  Layers: Layers,
  Calendar: Calendar,
  Clock: Clock,
  Award: Award,
  Users: Users
};

export default function ApproachToJEE({ onEnquireClick }) {
  return (
    <section id="approach" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Decorative Top Line */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-royalBlue via-gold to-royalBlue" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softBg border border-slate-200 text-royalBlue font-bold text-xs uppercase tracking-widest mb-3">
            <ShieldCheck className="w-4 h-4 text-royalBlue" />
            <span>Academic Rigor & Integrity</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight tracking-tight">
            Our Approach to JEE Preparation
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Rather than relying on unverified claims or false guarantees, we build real competitive competence through six uncompromising pillars of scientific pedagogy.
          </p>
        </div>

        {/* 6 Pillars Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {OUR_APPROACH_ITEMS.map((item) => {
            const Icon = iconMap[item.icon] || Lightbulb;

            return (
              <div
                key={item.id}
                className="bg-softBg rounded-2xl border border-slate-200 p-7 shadow-card hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-royalBlue flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6 text-royalBlue" />
                    </div>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-gold px-2.5 py-1 rounded bg-gold/10">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-midnight mb-2">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-royalBlue mb-3">
                    {item.headline}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-royalBlue" />
                    Standard Practice
                  </span>
                  <span className="text-slate-400 font-mono">HLA Standard</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Assessment Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-midnight text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-xs uppercase tracking-widest text-gold font-bold">
              Transparent Readiness Evaluation
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Evaluate Concept Strength with a Diagnostic Assessment
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Meet our department heads at our {ACADEMY_CONFIG.campusLocationName} for an objective evaluation of your current physics, chemistry, and mathematics foundation.
            </p>
          </div>

          <button
            onClick={() => onEnquireClick()}
            className="px-7 py-4 rounded-xl bg-royalBlue text-white text-sm font-bold shadow-lg shadow-royalBlue/30 hover:bg-royalBlue-hover active:scale-95 transition-all whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span>Book Free Diagnostic Session</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
