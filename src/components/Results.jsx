import React from 'react';
import { TrendingUp, Clock, Compass, Target, Quote, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { RESULTS_MILESTONES } from '../data/academyData';

const milestoneIcons = {
  improvement: TrendingUp,
  practice: Clock,
  confidence: Compass,
  milestones: Target,
};

const accentStyles = {
  electric: {
    border: 'border-blue-500/30',
    glow: 'from-blue-500/20 to-transparent',
    iconColor: 'text-blue-400 bg-blue-500/20',
    badge: 'bg-blue-500/20 text-blue-300'
  },
  teal: {
    border: 'border-teal-500/30',
    glow: 'from-teal-500/20 to-transparent',
    iconColor: 'text-teal bg-teal/20',
    badge: 'bg-teal/20 text-teal'
  },
  orange: {
    border: 'border-orange/30',
    glow: 'from-orange/20 to-transparent',
    iconColor: 'text-orange bg-orange/20',
    badge: 'bg-orange/20 text-orange-light'
  },
  navy: {
    border: 'border-purple-500/30',
    glow: 'from-purple-500/20 to-transparent',
    iconColor: 'text-purple-400 bg-purple-500/20',
    badge: 'bg-purple-500/20 text-purple-300'
  }
};

export default function Results() {
  return (
    <section id="results" className="py-20 bg-navy text-white relative overflow-hidden">
      
      {/* Decorative ambient gradient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-orange uppercase tracking-widest bg-orange/15 px-3 py-1 rounded-full border border-orange/30 inline-block mb-3">
            Core Educational Values
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Every Step Forward Matters.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            We measure achievement not merely through rank banners, but through daily concept mastery, overcoming subject fear, and sustained academic discipline.
          </p>
        </div>

        {/* 4 Cards: Academic Improvement, Consistent Practice, Student Confidence, Learning Milestones */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULTS_MILESTONES.map((item) => {
            const Icon = milestoneIcons[item.id] || TrendingUp;
            const style = accentStyles[item.accent] || accentStyles.electric;

            return (
              <div
                key={item.id}
                className={`rounded-2xl p-6 bg-navy-light/90 border ${style.border} backdrop-blur-sm relative overflow-hidden flex flex-col justify-between group hover:scale-[1.02] transition-transform duration-200 shadow-lg`}
              >
                {/* Subtle top glow */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${style.glow}`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${style.iconColor}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${style.badge}`}>
                      {item.badge}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {item.headline}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60">
                  <div className="text-sm font-bold text-teal">{item.statLabel}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{item.statSubtext}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Parent & Student Perspectives */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-orange" />
              <span>Voices of Trust & Transformation</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Feedback from students and parents enrolled in our Haldia classroom batches.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 relative">
              <Quote className="w-8 h-8 text-slate-600 mb-3" />
              <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-4">
                "The way Physics concepts are broken down into simple intuitive analogies made a huge difference in my school exams and JEE percentile. Doubt clearing is unmatched."
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-700/60 text-xs">
                <div>
                  <div className="font-bold text-white">Rahul K. Sen</div>
                  <div className="text-slate-400">Class 12 Higher Secondary Science Batch</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-teal/20 text-teal text-[11px] font-bold">
                  Verified Student
                </span>
              </div>
            </div>

            <div className="rounded-2xl p-6 bg-slate-800/60 border border-slate-700 relative">
              <Quote className="w-8 h-8 text-slate-600 mb-3" />
              <p className="text-sm sm:text-base text-slate-200 italic leading-relaxed mb-4">
                "The mentors are genuinely patient during doubt sessions. The transparent feedback helped us understand where our child needed encouragement without causing exam stress."
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-700/60 text-xs">
                <div>
                  <div className="font-bold text-white">Dr. Amitava Mukherjee</div>
                  <div className="text-slate-400">Parent of Class 10 Foundation Student</div>
                </div>
                <span className="px-2.5 py-1 rounded bg-orange/20 text-orange-light text-[11px] font-bold">
                  Verified Parent
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
