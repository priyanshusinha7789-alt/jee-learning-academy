import React from 'react';
import { Compass, BookOpen, CheckCircle, ShieldCheck, Award, Target } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softBg border border-slate-200 text-royalBlue font-bold text-xs uppercase tracking-widest mb-4">
            <Compass className="w-3.5 h-3.5 text-royalBlue" />
            <span>Academic Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight tracking-tight leading-tight">
            Preparation Grounded in <br className="hidden sm:inline" />
            <span className="text-royalBlue">First Principles & Daily Discipline.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            At {ACADEMY_CONFIG.name}, we reject the culture of blind memorization and intimidating short-cuts. Competitive examinations like JEE Main and Advanced evaluate fundamental problem-solving intuition, mathematical maturity, and composure under pressure. Our entire curriculum is structured around deep derivations, guided practice, and continuous error diagnosis.
          </p>
        </div>

        {/* Editorial 2-Column Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Educational Framework Text */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed text-base">
            <div className="border-l-2 border-royalBlue pl-6 space-y-2">
              <h3 className="text-xl font-bold text-midnight">
                Why Conceptual Clarity Outperforms Rote Learning
              </h3>
              <p className="text-slate-600">
                In higher-level mathematics and physics, questions rarely mimic standard textbook formats. When candidates understand how formulas originate through physical principles and geometric reasoning, novel problems transform into approachable, step-by-step deductions.
              </p>
            </div>

            <div className="border-l-2 border-gold pl-6 space-y-2">
              <h3 className="text-xl font-bold text-midnight">
                Scaffolded Problem Taxonomy
              </h3>
              <p className="text-slate-600">
                Students progress across three calibrated stages: Level 1 reinforces NCERT fundamentals and board syllabus parity; Level 2 introduces single-concept standard competitive scenarios; Level 3 synthesizes multi-chapter variables into comprehensive analytical challenges.
              </p>
            </div>

            <div className="border-l-2 border-royalBlue pl-6 space-y-2">
              <h3 className="text-xl font-bold text-midnight">
                Permanent On-Campus Mentorship
              </h3>
              <p className="text-slate-600">
                Learning does not end when the lecture bell rings. Our educators are stationed in dedicated academic cabins at our {ACADEMY_CONFIG.campusLocationName} throughout the week, ensuring every student has immediate access to 1-on-1 doubt clarification.
              </p>
            </div>
          </div>

          {/* Right Column: Verified Academic Commitments Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-softBg border border-slate-200 p-7 sm:p-8 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-midnight text-gold flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-extrabold text-midnight text-lg">Our Academic Pledges</h4>
                  <p className="text-xs text-slate-500">Standards enforced at {ACADEMY_CONFIG.campusCity}</p>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-royalBlue/10 text-royalBlue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-royalBlue" />
                  </div>
                  <div>
                    <strong className="text-midnight text-sm block">Strict 35-Student Batch Limit</strong>
                    <span className="text-xs text-slate-600">Small batches guarantee individual question interaction and regular error review.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-royalBlue/10 text-royalBlue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-royalBlue" />
                  </div>
                  <div>
                    <strong className="text-midnight text-sm block">Pre-Published Chapter Roadmaps</strong>
                    <span className="text-xs text-slate-600">Committed calendar days and lecture hours ensure thorough coverage with zero rush.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-royalBlue/10 text-royalBlue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-royalBlue" />
                  </div>
                  <div>
                    <strong className="text-midnight text-sm block">Triple Revision Cycle Protocol</strong>
                    <span className="text-xs text-slate-600">Syllabus completes with months in reserve for systematic revision and CBT mock exams.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-5 h-5 rounded-full bg-royalBlue/10 text-royalBlue flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3.5 h-3.5 text-royalBlue" />
                  </div>
                  <div>
                    <strong className="text-midnight text-sm block">Authentic Progress Tracking</strong>
                    <span className="text-xs text-slate-600">Transparent feedback shared directly with parents through objective test diagnostics.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                <span>Campus: {ACADEMY_CONFIG.contact.address.line1}</span>
                <span className="font-semibold text-royalBlue">Haldia, WB</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
