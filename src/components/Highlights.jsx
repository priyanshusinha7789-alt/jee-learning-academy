import React from 'react';
import { GraduationCap, Users, Lightbulb, ClipboardCheck, Sparkles } from 'lucide-react';
import { HIGHLIGHT_CARDS } from '../data/academyData';

const iconMap = {
  GraduationCap: GraduationCap,
  Users: Users,
  Lightbulb: Lightbulb,
  ClipboardCheck: ClipboardCheck,
};

const colorStyles = {
  electric: {
    bg: 'bg-blue-50/70',
    border: 'border-blue-100',
    iconBg: 'bg-electric text-white',
    badge: 'bg-blue-100 text-electric',
    highlightBorder: 'hover:border-electric/50'
  },
  orange: {
    bg: 'bg-orange-50/70',
    border: 'border-orange-100',
    iconBg: 'bg-orange text-white',
    badge: 'bg-orange-100 text-orange-700',
    highlightBorder: 'hover:border-orange/50'
  },
  teal: {
    bg: 'bg-teal-50/70',
    border: 'border-teal-100',
    iconBg: 'bg-teal text-white',
    badge: 'bg-teal-100 text-teal-800',
    highlightBorder: 'hover:border-teal/50'
  },
  navy: {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    iconBg: 'bg-navy text-white',
    badge: 'bg-slate-200 text-navy',
    highlightBorder: 'hover:border-navy/50'
  },
};

export default function Highlights() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {HIGHLIGHT_CARDS.map((item) => {
          const IconComponent = iconMap[item.icon] || GraduationCap;
          const style = colorStyles[item.accent] || colorStyles.electric;

          return (
            <div
              key={item.id}
              className={`rounded-2xl p-6 bg-white border ${style.border} ${style.highlightBorder} shadow-card hover:shadow-card-hover transition-all duration-200 transform hover:-translate-y-1 flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${style.iconBg} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${style.badge}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-navy mb-2 tracking-tight">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-slate-600 transition-colors">
                <span>Verified Curriculum Standard</span>
                <Sparkles className="w-3.5 h-3.5 text-orange" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
