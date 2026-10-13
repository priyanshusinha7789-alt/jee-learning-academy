import React from 'react';
import { Users, Calendar, Clock, TrendingUp } from 'lucide-react';
import { IMPACT_METRICS } from '../data/academyData';

const iconMap = {
  Users: Users,
  Calendar: Calendar,
  Clock: Clock,
  TrendingUp: TrendingUp
};

export default function ImpactCounterStrip() {
  return (
    <section className="relative z-20 py-8 bg-softBg border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Grid with Clean Academic Architecture */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {IMPACT_METRICS.map((metric, idx) => {
            const Icon = iconMap[metric.icon] || Clock;

            return (
              <div 
                key={metric.id} 
                className={`flex flex-col items-center text-center p-3 sm:px-6 ${idx > 0 ? 'pt-6 sm:pt-3' : ''} group`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-royalBlue/10 text-royalBlue flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                    <Icon className="w-5 h-5 text-royalBlue" />
                  </div>
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-midnight font-heading">
                    {metric.value}
                  </span>
                </div>

                <div className="text-sm sm:text-base font-bold text-midnight mt-1">
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
