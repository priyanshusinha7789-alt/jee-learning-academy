import React from 'react';
import { Award, TrendingUp, Sparkles, Clock, CheckCircle } from 'lucide-react';
import { IMPACT_METRICS } from '../data/academyData';

const iconMap = {
  Award: Award,
  TrendingUp: TrendingUp,
  Sparkles: Sparkles,
  Clock: Clock
};

const metricColors = [
  { text: 'text-electric', bg: 'bg-blue-50', border: 'border-blue-100', icon: 'text-electric' },
  { text: 'text-teal', bg: 'bg-teal-50', border: 'border-teal-100', icon: 'text-teal' },
  { text: 'text-orange', bg: 'bg-orange-50', border: 'border-orange-100', icon: 'text-orange' },
  { text: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100', icon: 'text-purple-600' }
];

export default function ImpactCounterStrip() {
  return (
    <section className="relative z-20 py-8 bg-white border-y border-slate-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container with modern grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {IMPACT_METRICS.map((metric, idx) => {
            const Icon = iconMap[metric.icon] || Award;
            const color = metricColors[idx % metricColors.length];

            return (
              <div 
                key={metric.id} 
                className={`flex flex-col items-center text-center p-3 sm:px-6 ${idx > 0 ? 'pt-6 sm:pt-3' : ''} group`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-xl ${color.bg} ${color.icon} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${color.text} font-heading`}>
                    {metric.value}
                  </span>
                </div>

                <div className="text-sm sm:text-base font-bold text-navy mt-1">
                  {metric.label}
                </div>

                <p className="text-xs text-slate-500 mt-1 max-w-[210px] leading-relaxed">
                  {metric.subtext}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
