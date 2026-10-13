import React from 'react';
import { BookOpen, Award, Sparkles, GraduationCap, CheckCircle } from 'lucide-react';
import { FACULTY_MEMBERS } from '../data/academyData';

export default function Faculty({ onEnquireClick }) {
  return (
    <section id="faculty" className="py-20 lg:py-28 bg-softBg border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-royalBlue uppercase tracking-widest bg-royalBlue/10 px-3.5 py-1.5 rounded-full border border-royalBlue/20 inline-block mb-3">
            Academic Mentorship
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight tracking-tight">
            Learn from Dedicated Senior Educators
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Full-time Ex-IITian and subject specialists committed to foundational clarity, continuous encouragement, and high-rank pedagogy at Haldia Central Campus.
          </p>
        </div>

        {/* 3 Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FACULTY_MEMBERS.map((faculty) => (
            <div
              key={faculty.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Photo & Background Composition */}
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight/90 via-midnight/30 to-transparent" />
                  
                  {/* Floating role pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-midnight/90 backdrop-blur-md text-gold text-xs font-bold border border-gold/20 shadow-sm">
                      {faculty.role.split('&')[0]}
                    </span>
                  </div>

                  {/* Name on image base */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      {faculty.name}
                    </h3>
                    <div className="text-xs text-gold font-medium mt-0.5">
                      {faculty.credentials}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Bio */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {faculty.bio}
                  </p>

                  {/* Subject Focus Areas */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      Key Teaching Modules:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {faculty.subjects.map((sub, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-softBg text-slate-700 text-xs font-medium border border-slate-200"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 text-xs font-semibold flex items-center justify-between">
                <span className="text-midnight font-bold flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-royalBlue" />
                  <span>Daily Doubt Cabin Presence</span>
                </span>
                <button
                  onClick={() => onEnquireClick()}
                  className="text-royalBlue font-bold hover:underline cursor-pointer"
                >
                  Book 1:1 Session
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
