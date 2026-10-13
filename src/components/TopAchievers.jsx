import React, { useState } from 'react';
import { Award, Trophy, Sparkles, Star, CheckCircle, ChevronRight, GraduationCap } from 'lucide-react';
import { TOP_ACHIEVERS } from '../data/academyData';

const TABS = ['All', 'JEE Advanced', 'JEE Main', 'NEET / Olympiad'];

export default function TopAchievers({ onEnquireClick }) {
  const [activeTab, setActiveTab] = useState('All');

  const filteredAchievers = activeTab === 'All' 
    ? TOP_ACHIEVERS 
    : TOP_ACHIEVERS.filter(a => a.category === activeTab);

  return (
    <section id="achievers" className="py-20 bg-gradient-to-b from-white via-cream-subtle/50 to-white relative overflow-hidden">
      
      {/* Decorative top accent */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-orange via-electric to-teal" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-subtle border border-orange/20 text-orange font-bold text-xs uppercase tracking-wider mb-3">
            <Trophy className="w-4 h-4 text-orange" />
            <span>Proven Hall of Fame • Recent Batches</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Top Achievers & Results Gallery
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Real stories of dedication. From Haldia classrooms to India's premier engineering and medical institutions.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeTab === tab
                    ? 'bg-navy text-white shadow-md shadow-navy/20 scale-105'
                    : 'bg-white text-slate-600 hover:text-navy hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Achievers Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredAchievers.map((achiever) => (
            <div
              key={achiever.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Image and Rank Banner */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={achiever.image}
                    alt={achiever.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" />

                  {/* Prominent Rank Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-orange text-white text-xs sm:text-sm font-extrabold shadow-md shadow-orange/30">
                      <Star className="w-3.5 h-3.5 fill-white" />
                      <span>{achiever.rank}</span>
                    </span>
                  </div>

                  {/* Exam Tag */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-lg bg-navy/80 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                      {achiever.exam}
                    </span>
                  </div>

                  {/* Student Name & College on overlay */}
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl font-extrabold tracking-tight">
                      {achiever.name}
                    </h3>
                    <div className="text-xs text-orange-light font-semibold flex items-center gap-1 mt-0.5">
                      <GraduationCap className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">{achiever.college}</span>
                    </div>
                  </div>
                </div>

                {/* Card Content & Score Breakdown */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                    <span className="text-slate-500 font-semibold">Official Exam Score:</span>
                    <span className="font-extrabold text-navy text-sm">{achiever.score}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                    "{achiever.quote}"
                  </p>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-3.5 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-teal font-bold flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>HLA Classroom Program</span>
                </span>
                <button
                  onClick={() => onEnquireClick(achiever.category.includes('NEET') ? 'competitive' : 'competitive')}
                  className="text-electric font-bold hover:underline flex items-center gap-0.5"
                >
                  <span>Aim for Top Ranks</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-navy via-navy to-navy-light text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs uppercase tracking-wider text-orange font-bold">Your Success Journey Begins Today</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Be on Our 2026–27 Hall of Fame
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              Take the first step with our Free Diagnostic Assessment and direct syllabus consultation at Haldia Central Campus.
            </p>
          </div>

          <button
            onClick={() => onEnquireClick()}
            className="px-6 py-3.5 rounded-xl bg-orange text-white text-sm font-bold shadow-lg shadow-orange/30 hover:bg-orange-hover hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
          >
            Register for Free Diagnostic Test
          </button>
        </div>

      </div>
    </section>
  );
}
