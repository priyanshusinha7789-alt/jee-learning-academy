import React from 'react';
import { CheckCircle2, Target, HelpCircle, TrendingUp, Sparkles, Brain, Clock } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/academyData';

const iconColors = [
  'text-teal bg-teal-subtle border-teal/20',
  'text-electric bg-electric-subtle border-electric/20',
  'text-orange bg-orange-subtle border-orange/20',
  'text-purple-600 bg-purple-50 border-purple-200',
  'text-emerald-600 bg-emerald-50 border-emerald-200',
];

export default function WhyChooseUs({ onEnquireClick }) {
  return (
    <section id="why-us" className="py-20 bg-white relative overflow-hidden">
      
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and 5 Key Items */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold text-orange uppercase tracking-widest bg-orange-subtle px-3 py-1 rounded-full border border-orange/20 inline-block mb-3">
                Our Teaching Philosophy
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                More Than Classes. <br />
                <span className="text-electric">A Better Way to Learn.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600">
                True academic confidence isn't built on stress or memory tricks. It comes from disciplined concepts, consistent revision, and an encouraging mentor by your side.
              </p>
            </div>

            {/* Concise Feature List with Colourful Icons and Generous Spacing */}
            <div className="space-y-6">
              {WHY_CHOOSE_ITEMS.map((item, index) => {
                const colorClass = iconColors[index % iconColors.length];
                return (
                  <div key={index} className="flex items-start gap-4 p-3.5 rounded-xl hover:bg-slate-50/80 transition-colors">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center border flex-shrink-0 mt-0.5 ${colorClass}`}>
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-navy leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onEnquireClick()}
                className="px-6 py-3 rounded-xl bg-navy text-white text-sm font-bold shadow-md hover:bg-navy-light transition-colors inline-flex items-center gap-2"
              >
                <span>Experience Our Classroom Methodology</span>
                <Sparkles className="w-4 h-4 text-orange" />
              </button>
            </div>
          </div>

          {/* Right Column: Educational Visual / 4-Stage Learning Cycle Diagram */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Backing decorative element */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-electric/10 via-teal/10 to-orange/10 rounded-3xl blur-lg" />

              <div className="relative bg-gradient-to-b from-navy to-navy-dark text-white rounded-3xl p-7 sm:p-8 shadow-xl border border-slate-700/50">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-700/60">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-teal font-mono">Pedagogy Framework</div>
                    <h3 className="text-xl font-extrabold text-white mt-0.5">The JLA Mastery Cycle</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange">
                    <Brain className="w-5 h-5" />
                  </div>
                </div>

                {/* 4 Interactive-Style Stage Cards */}
                <div className="my-6 space-y-4">
                  
                  {/* Step 1 */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-electric/20 text-electric-light flex items-center justify-center font-bold text-sm">
                      01
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Understand Core Principles</div>
                      <div className="text-xs text-slate-300">Visual derivations and intuitive physical analogies.</div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-teal/20 text-teal flex items-center justify-center font-bold text-sm">
                      02
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Targeted Practice Worksheets</div>
                      <div className="text-xs text-slate-300">Level 1 (Fundamental) to Level 3 (Analytical) problems.</div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-orange/20 text-orange flex items-center justify-center font-bold text-sm">
                      03
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Same-Day Doubt Clarification</div>
                      <div className="text-xs text-slate-300">Dedicated desk hours for personalized problem solving.</div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-300 flex items-center justify-center font-bold text-sm">
                      04
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Diagnostic Periodic Testing</div>
                      <div className="text-xs text-slate-300">Constructive feedback highlights revision targets.</div>
                    </div>
                  </div>

                </div>

                {/* Bottom reassurance badge */}
                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-teal" />
                    <span>Balanced Pace (No Overburden)</span>
                  </span>
                  <span className="text-orange font-semibold">Classes 6 to 12</span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
