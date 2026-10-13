import React from 'react';
import { ArrowRight, CheckCircle2, Compass, BookOpen, Layers, Award, Download, Calendar, Users, Clock, BarChart3 } from 'lucide-react';
import { COURSES, ACADEMY_CONFIG } from '../data/academyData';

const courseIcons = {
  foundation: Compass,
  secondary: Layers,
  'higher-secondary': BookOpen,
  competitive: Award,
};

const cardTheme = {
  foundation: {
    topBar: 'bg-royalBlue',
    badgeBg: 'bg-royalBlue/10 text-royalBlue border border-royalBlue/20',
    iconBg: 'bg-royalBlue/10 text-royalBlue',
  },
  secondary: {
    topBar: 'bg-royalBlue',
    badgeBg: 'bg-royalBlue/10 text-royalBlue border border-royalBlue/20',
    iconBg: 'bg-royalBlue/10 text-royalBlue',
  },
  'higher-secondary': {
    topBar: 'bg-gold',
    badgeBg: 'bg-gold/10 text-gold border border-gold/30',
    iconBg: 'bg-gold/10 text-gold',
  },
  competitive: {
    topBar: 'bg-midnight',
    badgeBg: 'bg-midnight text-white',
    iconBg: 'bg-midnight text-gold',
  },
};

export default function Courses({ onSelectCourse, onOpenTimelineModal }) {
  return (
    <section id="courses" className="py-20 lg:py-28 bg-softBg border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-royalBlue uppercase tracking-widest bg-royalBlue/10 px-3.5 py-1.5 rounded-full border border-royalBlue/20 inline-block mb-3">
            Academic Curricula & Batches
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight tracking-tight">
            Comprehensive Programs for Every Stage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From early Olympiad foundations in Class 8 to rigorous multi-cycle JEE Advanced preparation, our structured curricula feature pre-committed day allocations and transparent batch schedules.
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
                className="bg-white rounded-3xl border border-slate-200 hover:border-slate-300 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
              >
                {/* Top colored accent line */}
                <div className={`h-2.5 w-full ${theme.topBar}`} />

                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  
                  {/* Batch Starting Pill Badge */}
                  <div className="mb-4 flex items-center justify-between gap-1 text-[11px] font-bold">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                      <Calendar className="w-3.5 h-3.5 text-royalBlue" />
                      <span>{course.batchBadge}</span>
                    </span>
                    <span className="text-slate-500 font-semibold text-[10px] flex items-center gap-1">
                      <Users className="w-3 h-3 text-gold" />
                      <span>Max 35 seats</span>
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
                  <h3 className="text-xl font-bold text-midnight group-hover:text-royalBlue transition-colors">
                    {course.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1 mb-3">
                    Target: {course.target}
                  </div>

                  {/* Concrete Class Schedule & Timing Box */}
                  <div className="my-2.5 p-3.5 rounded-xl bg-softBg border border-slate-200 text-[11px] text-slate-700 space-y-1.5">
                    <div className="font-extrabold text-midnight flex items-center justify-between">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-royalBlue" />
                        <span>Fixed Schedule:</span>
                      </span>
                      <span className="text-royalBlue font-bold text-[10px]">{totalChapters} Chapters ({totalDays} Days)</span>
                    </div>
                    <div className="font-medium text-slate-800">{course.batchSchedule?.regular}</div>
                    <div className="text-slate-600 font-medium">{course.batchSchedule?.weekend}</div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 flex-grow">
                    {course.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 pt-3 border-t border-slate-100 mb-6">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                      Curriculum Pillars:
                    </div>
                    {course.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-royalBlue flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Direct Action CTAs: Register, Timeline & Download PDF */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-100">
                    
                    <button
                      onClick={() => onSelectCourse(course.id)}
                      className="w-full py-3 px-4 rounded-xl bg-royalBlue text-white font-bold text-xs sm:text-sm shadow-md shadow-royalBlue/20 hover:bg-royalBlue-hover transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>Enquire for this Program</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenTimelineModal(course.id)}
                      className="w-full py-2.5 px-3 rounded-xl border border-slate-200 text-midnight hover:bg-slate-50 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <BarChart3 className="w-3.5 h-3.5 text-royalBlue" />
                      <span>Chapter Timeline & Schedule</span>
                    </button>

                    <button
                      onClick={() => onOpenTimelineModal(course.id)}
                      className="w-full py-1.5 px-2 rounded-lg text-slate-500 hover:text-midnight text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors cursor-pointer"
                    >
                      <Download className="w-3 h-3 text-slate-400" />
                      <span>Download Syllabus PDF</span>
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
            <span className="w-2.5 h-2.5 rounded-full bg-royalBlue flex-shrink-0" />
            <span>Need personalized syllabus assessment or early batch consultation? Visit our {ACADEMY_CONFIG.campusLocationName} or request a diagnostic evaluation.</span>
          </div>
          <button
            onClick={() => onSelectCourse('competitive')}
            className="text-xs sm:text-sm font-bold text-royalBlue hover:underline whitespace-nowrap flex items-center gap-1.5 cursor-pointer"
          >
            <span>Request Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
