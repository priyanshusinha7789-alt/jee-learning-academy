import React from 'react';
import { CheckCircle2, Target, HelpCircle, TrendingUp, Sparkles, Brain, Clock, ShieldCheck } from 'lucide-react';
import { WHY_CHOOSE_ITEMS, ACADEMY_CONFIG } from '../data/academyData';

export default function WhyChooseUs({ onEnquireClick }) {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and 5 Key Items */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-xs font-bold text-royalBlue uppercase tracking-widest bg-royalBlue/10 px-3.5 py-1.5 rounded-full border border-royalBlue/20 inline-block mb-3">
                Authentic Educational Advantages
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight tracking-tight leading-tight">
                Structured Learning. <br />
                <span className="text-royalBlue">Disciplined Academic Growth.</span>
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                Competitive confidence is never the product of memorization tricks or superficial shortcuts. It comes from disciplined concept derivation, persistent problem solving, and a dedicated mentor by your side.
              </p>
            </div>

            {/* Concise Feature List with Clean Icons and Generous Spacing */}
            <div className="space-y-5">
              {WHY_CHOOSE_ITEMS.map((item, index) => {
                return (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-softBg border border-slate-100 hover:border-slate-200 transition-colors">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-royalBlue/10 text-royalBlue border border-royalBlue/20 flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5 text-royalBlue" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-midnight leading-snug">
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
                className="px-7 py-3.5 rounded-xl bg-midnight text-white text-sm font-bold shadow-md hover:bg-midnight-light transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Experience Our Classroom Methodology</span>
                <Sparkles className="w-4 h-4 text-gold" />
              </button>
            </div>
          </div>

          {/* Right Column: Educational Visual / HLA Mastery Cycle Diagram */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              <div className="relative bg-gradient-to-b from-midnight via-deepBlue to-midnight text-white rounded-3xl p-7 sm:p-8 shadow-xl border border-white/10">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-gold font-mono">Pedagogy Framework</div>
                    <h3 className="text-xl font-extrabold text-white mt-0.5">The HLA Mastery Cycle</h3>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-gold">
                    <Brain className="w-5 h-5" />
                  </div>
                </div>

                {/* 4 Interactive-Style Stage Cards */}
                <div className="my-6 space-y-3.5">
                  
                  {/* Step 1 */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-royalBlue/30 text-white font-mono flex items-center justify-center font-bold text-sm">
                      01
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">First Principles Lecture</div>
                      <div className="text-xs text-slate-300">Detailed visual derivations and conceptual models</div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-royalBlue/30 text-white font-mono flex items-center justify-center font-bold text-sm">
                      02
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">Daily Problem Sets (DPP)</div>
                      <div className="text-xs text-slate-300">15–20 graded homework problems with monitored feedback</div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-gold/20 text-gold font-mono flex items-center justify-center font-bold text-sm">
                      03
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">1-on-1 Faculty Doubt Desk</div>
                      <div className="text-xs text-slate-300">Permanent daily cabins open until 7:30 PM</div>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-royalBlue/30 text-white font-mono flex items-center justify-center font-bold text-sm">
                      04
                    </div>
                    <div>
                      <div className="font-bold text-sm text-white">CBT Mock & Error Register</div>
                      <div className="text-xs text-slate-300">Bi-weekly computer testing with granular analytics</div>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-gold" />
                    <span>Zero Backlog Commitment</span>
                  </span>
                  <span className="font-semibold text-slate-400">Haldia Campus</span>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
