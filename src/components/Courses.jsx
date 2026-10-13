import React from 'react';
import { ArrowRight, CheckCircle2, Compass, BookOpen, Layers, Award, Download, Calendar, Flame, Clock, BarChart3 } from 'lucide-react';
import { COURSES } from '../data/academyData';

const courseIcons = {
  foundation: Compass,
  secondary: Layers,
  'higher-secondary': BookOpen,
  competitive: Award,
};

const cardTheme = {
  foundation: {
    accentBorder: 'border-teal/40',
    topBar: 'bg-teal',
    badgeBg: 'bg-teal-subtle text-teal border border-teal/20',
    iconBg: 'bg-teal-subtle text-teal',
  },
  secondary: {
    accentBorder: 'border-electric/40',
    topBar: 'bg-electric',
    badgeBg: 'bg-electric-subtle text-electric border border-electric/20',
    iconBg: 'bg-electric-subtle text-electric',
  },
  'higher-secondary': {
    accentBorder: 'border-orange/40',
    topBar: 'bg-orange',
    badgeBg: 'bg-orange-subtle text-orange border border-orange/20',
    iconBg: 'bg-orange-subtle text-orange',
  },
  competitive: {
    accentBorder: 'border-indigo-400/40',
    topBar: 'bg-indigo-600',
    badgeBg: 'bg-indigo-50 text-indigo-700 border border-indigo-200',
    iconBg: 'bg-indigo-50 text-indigo-700',
  },
};

export default function Courses({ onSelectCourse, onOpenTimelineModal }) {
  return (
    <section id="courses" className="py-20 bg-cream-subtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-electric uppercase tracking-widest bg-electric-subtle px-3 py-1 rounded-full border border-electric/20 inline-block mb-3">
            Haldia Campus Academic Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight">
            Find the Right Course for Your Goals
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Structured classroom curricula taught by Ex-IITians and subject leaders at Haldia Central Campus with clear chapter-by-chapter day allocations and guaranteed test frequencies.
          </p>
        </div>

        {/* 4 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {COURSES.map((course) => {
            const Icon = courseIcons[course.id] || Compass;
            const theme = cardTheme[course.id] || cardTheme.foundation;
            const totalDays = (course.chapterRoadmap || []).reduce((a, c) => a + c.days, 0);
            const totalChapters = (course.chapterRoadmap || []).length;

            return (
              <div
                key={course.id}
                className="bg-white rounded-2xl border border-slate-200/90 hover:border-slate-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                {/* Top colored accent line */}
                <div className={`h-2 w-full ${theme.topBar}`} />

                <div className="p-6 flex-1 flex flex-col">
                  
                  {/* Batch Starting Soon Pill Badge */}
                  <div className="mb-3 flex items-center justify-between gap-1 text-[11px] font-bold">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
                      <Calendar className="w-3 h-3 text-orange" />
                      <span>{course.batchBadge}</span>
                    </span>
                    <span className="text-red-500 font-semibold text-[10px] flex items-center gap-0.5">
                      <Flame className="w-3 h-3" />
                      {course.seatsLeft}
                    </span>
                  </div>

                  {/* Category Pill and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${theme.badgeBg}`}>
                      {course.pillTag}
                    </span>
                    <div className={`w-10 h-10 rounded-xl ${theme.iconBg} flex items-center justify-center group-hover:scale-105 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Course Title & Target Students */}
                  <h3 className="text-xl font-bold text-navy group-hover:text-electric transition-colors">
                    {course.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1 mb-2">
                    Target: {course.target}
                  </div>

                  {/* Concrete Class Schedule & Timing Box */}
                  <div className="my-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 text-[11px] text-slate-700 space-y-1.5">
                    <div className="font-extrabold text-navy flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-electric" />
                        <span>Fixed Batch Timings:</span>
                      </span>
                      <span className="text-teal font-bold text-[10px]">{totalChapters} Chapters ({totalDays} Days)</span>
                    </div>
                    <div className="font-medium text-slate-800">{course.batchSchedule?.regular}</div>
                    <div className="text-slate-600 font-medium">{course.batchSchedule?.weekend}</div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                    {course.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 mb-5">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Core Framework:
                    </div>
                    {course.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Action CTAs: Register, Timeline & Download PDF */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    
                    <button
                      onClick={() => onSelectCourse(course.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-orange text-white font-bold text-sm shadow-md shadow-orange/20 hover:bg-orange-hover hover:shadow-glow-orange transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>Register for Batch</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenTimelineModal(course.id)}
                      className="w-full py-2 px-3 rounded-xl border border-electric/40 text-electric hover:bg-blue-50 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <BarChart3 className="w-3.5 h-3.5" />
                      <span>Batch Schedule & Chapter Timeline</span>
                    </button>

                    <button
                      onClick={() => onOpenTimelineModal(course.id)}
                      className="w-full py-1.5 px-2 rounded-lg text-slate-500 hover:text-navy text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors"
                    >
                      <Download className="w-3 h-3 text-slate-400" />
                      <span>Download Full Schedule & Syllabus PDF</span>
                    </button>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Guidance Note with Direct Action */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-slate-700">
            <span className="w-3 h-3 rounded-full bg-teal flex-shrink-0 animate-pulse" />
            <span>Need personalized syllabus assessment or early batch seat reservation? Visit our Haldia Central Campus or book a diagnostic test.</span>
          </div>
          <button
            onClick={() => onSelectCourse('competitive')}
            className="text-xs sm:text-sm font-bold text-electric hover:underline whitespace-nowrap flex items-center gap-1.5"
          >
            <span>Request Diagnostic Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
