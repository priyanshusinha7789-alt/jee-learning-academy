import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, Clock, Calendar, Sparkles, BookOpen, Printer, ArrowRight, Layers, UserCheck, ShieldCheck, Filter } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { COURSES, ACADEMY_CONFIG } from '../data/academyData';

export default function SyllabusModal({ courseId, isOpen, onClose, onEnquireClick }) {
  const [activeSubjectFilter, setActiveSubjectFilter] = useState('All');
  const [activeViewTab, setActiveViewTab] = useState('timeline'); // 'timeline' | 'schedule' | 'modules'
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  if (!isOpen || !courseId) return null;

  const course = COURSES.find(c => c.id === courseId) || COURSES[0];
  const roadmap = course.chapterRoadmap || [];

  // Filter roadmap by subject if desired
  const subjects = ['All', ...new Set(roadmap.map(item => item.subject))];
  const filteredRoadmap = activeSubjectFilter === 'All' 
    ? roadmap 
    : roadmap.filter(item => item.subject === activeSubjectFilter);

  // Total statistics for this course
  const totalDays = roadmap.reduce((acc, curr) => acc + (curr.days || 0), 0);
  const totalHours = roadmap.reduce((acc, curr) => acc + (curr.hours || 0), 0);
  const totalChapters = roadmap.length;

  const handleGeneratePDF = () => {
    try {
      setIsGeneratingPdf(true);
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      // Palette
      const navy = [20, 33, 61];     // #14213D
      const electric = [37, 99, 235]; // #2563EB
      const orange = [255, 122, 48];  // #FF7A30
      const teal = [20, 184, 166];    // #14B8A6
      const slate = [100, 116, 139];

      // Page 1 Header Banner
      doc.setFillColor(...navy);
      doc.rect(0, 0, 210, 36, 'F');

      // Top Orange Accent Stripe
      doc.setFillColor(...orange);
      doc.rect(0, 0, 210, 3, 'F');

      // Institute Title
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(18);
      doc.setTextColor(255, 255, 255);
      doc.text('HALDIA LEARNING ACADEMY - HALDIA CAMPUS', 14, 15);

      // Campus Subtitle
      doc.setFontSize(9.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(203, 213, 225);
      doc.text('CITY CENTRE COMPLEX, SECTOR 1, HALDIA, WEST BENGAL - 721657', 14, 22);
      doc.text(`Official Academic Roadmap, Chapter Timeline & Batch Schedule (${ACADEMY_CONFIG.academicYear})`, 14, 28);

      // Helpline on right
      doc.setFontSize(8.5);
      doc.text(`Helpline: ${ACADEMY_CONFIG.contact.displayPhone}`, 196, 17, { align: 'right' });
      doc.text(`Email: ${ACADEMY_CONFIG.contact.email}`, 196, 23, { align: 'right' });
      doc.text(`Portal: haldialearningacademy.com`, 196, 29, { align: 'right' });

      // Course Title Section
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(15);
      doc.setTextColor(...navy);
      doc.text(course.title.toUpperCase(), 14, 46);

      doc.setFontSize(9.5);
      doc.setTextColor(...electric);
      doc.text(`TARGET: ${course.target.toUpperCase()} | STATUS: ${course.batchBadge.toUpperCase()}`, 14, 52);

      // Summary Metric Badges in PDF
      doc.setFillColor(241, 245, 249);
      doc.roundedRect(14, 55, 182, 12, 2, 2, 'F');
      doc.setFontSize(8.5);
      doc.setTextColor(...navy);
      doc.setFont('helvetica', 'bold');
      doc.text(`Curriculum Scope: ${totalChapters} Master Chapters`, 18, 62);
      doc.text(`Allocated Duration: ${totalDays} Working Days (${totalHours} Lecture Hours)`, 82, 62);
      doc.setTextColor(...orange);
      doc.text(`Batch Size: Max 35 Students`, 160, 62);

      // Batch Timings Table
      autoTable(doc, {
        startY: 70,
        head: [['CONCRETE BATCH TIMINGS & SCHEDULE', 'FREQUENCY & FACULTY ALLOCATION']],
        body: [
          ['Regular Evening Batch', course.batchSchedule?.regular || 'Monday to Saturday: 4:30 PM - 7:30 PM'],
          ['Weekend Ranker Batch', course.batchSchedule?.weekend || 'Saturday & Sunday: 9:00 AM - 2:00 PM'],
          ['Weekly CBT & Mock Testing', course.batchSchedule?.cbtSlot || 'Sundays: 9:00 AM - 12:00 PM (Simulated CBT Lab)'],
          ['Daily Doubt Resolution Clinic', course.batchSchedule?.doubtSlot || 'Daily 10:00 AM - 8:00 PM (1-on-1 Cabin Presence)']
        ],
        theme: 'grid',
        headStyles: {
          fillColor: electric,
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          fontSize: 8.5
        },
        styles: {
          fontSize: 8,
          cellPadding: 2.5,
          textColor: navy
        },
        columnStyles: {
          0: { cellWidth: 65, fontStyle: 'bold' },
          1: { cellWidth: 117 }
        }
      });

      // Chapter-by-Chapter Timeline Table
      const timelineRows = roadmap.map((item, idx) => [
        idx + 1,
        item.subject,
        item.chapter,
        `${item.days} Days\n(${item.hours} Hrs)`,
        item.milestone,
        item.faculty
      ]);

      autoTable(doc, {
        startY: doc.lastAutoTable.finalY + 6,
        head: [['#', 'SUBJECT', 'CHAPTER / TOPIC NAME', 'DURATION', 'ASSESSMENT MILESTONE / DPP FREQUENCY', 'ASSIGNED FACULTY LEAD']],
        body: timelineRows,
        theme: 'striped',
        headStyles: {
          fillColor: navy,
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          fontSize: 8
        },
        styles: {
          fontSize: 7.5,
          cellPadding: 2.5,
          textColor: [30, 41, 59]
        },
        columnStyles: {
          0: { cellWidth: 8, fontStyle: 'bold', halign: 'center' },
          1: { cellWidth: 22, fontStyle: 'bold', textColor: electric },
          2: { cellWidth: 48, fontStyle: 'bold' },
          3: { cellWidth: 20, halign: 'center', fontStyle: 'bold' },
          4: { cellWidth: 44 },
          5: { cellWidth: 40, textColor: [71, 85, 105] }
        },
        didDrawPage: function (data) {
          // Footer on each page
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7);
          doc.setTextColor(...slate);
          doc.text(`Haldia Learning Academy - Haldia Campus | City Centre Complex, Sector 1 | Call: ${ACADEMY_CONFIG.contact.displayPhone}`, 14, 290);
          doc.text(`Page ${doc.internal.getNumberOfPages()}`, 196, 290, { align: 'right' });
        }
      });

      // Weekly assessment and revision milestones summary
      let finalY = doc.lastAutoTable.finalY + 6;
      if (finalY > 240) {
        doc.addPage();
        finalY = 20;
      }

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.setTextColor(...navy);
      doc.text('WEEKLY ASSESSMENT & REVISION MILESTONES', 14, finalY);

      autoTable(doc, {
        startY: finalY + 3,
        head: [['MILESTONE PHASE', 'FREQUENCY & EXECUTION DETAILS', 'PEDAGOGICAL OUTCOME']],
        body: [
          ['Daily Practice Problems (DPP)', '15 handpicked multi-level problems per lecture with same-day submission', 'Concept reinforcement & immediate gap detection'],
          ['Weekly CBT & OMR Tests', 'Every Sunday computer-lab timed assessment matching latest NTA pattern', 'Speed optimization, accuracy traps & negative marking control'],
          ['Monthly Grand Revision', 'Chapter cluster consolidation tests & faculty 1-on-1 performance review', 'Zero backlogs & long-term retention before board/entrance exams']
        ],
        theme: 'grid',
        headStyles: { fillColor: teal, textColor: [255, 255, 255], fontSize: 8 },
        styles: { fontSize: 7.5, cellPadding: 2.5 }
      });

      // Save PDF to user device
      doc.save(`JLA_Bokaro_${course.title.replace(/[^a-zA-Z0-9]/g, '_')}_Full_Schedule.pdf`);
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('Unable to generate PDF. You can view the full schedule directly in the interactive window.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy/80 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6 animate-fadeIn">
      
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[94vh] flex flex-col overflow-hidden border border-slate-100 my-2"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Header Banner */}
        <div className="p-5 sm:p-6 bg-navy text-white relative flex-shrink-0">
          <div className="h-1.5 w-full bg-gradient-to-r from-orange via-electric to-teal absolute top-0 left-0 right-0" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-3 py-1 rounded-full bg-orange text-white text-[11px] font-bold uppercase tracking-wider">
              {course.pillTag}
            </span>
            <span className="px-3 py-1 rounded-full bg-white/10 text-slate-200 text-[11px] font-bold">
              Haldia Central Campus
            </span>
            <span className="px-3 py-1 rounded-full bg-teal/20 text-teal text-[11px] font-bold">
              {totalChapters} Chapters • {totalDays} Days ({totalHours} Hrs)
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Batch Schedule & Chapter Timeline
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {course.title} • Target: {course.target} • {course.batchBadge}
          </p>

          {/* Sub Navigation Tabs */}
          <div className="flex items-center gap-2 mt-5 border-b border-slate-700/80">
            <button
              onClick={() => setActiveViewTab('timeline')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeViewTab === 'timeline'
                  ? 'border-orange text-orange'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Chapter Timeline ({roadmap.length})</span>
            </button>

            <button
              onClick={() => setActiveViewTab('schedule')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeViewTab === 'schedule'
                  ? 'border-orange text-orange'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Batch Timings</span>
            </button>

            <button
              onClick={() => setActiveViewTab('modules')}
              className={`pb-2.5 px-3 text-xs sm:text-sm font-bold border-b-2 transition-all flex items-center gap-1.5 ${
                activeViewTab === 'modules'
                  ? 'border-orange text-orange'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Curriculum Modules</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-slate-800 text-sm">
          
          {/* TAB 1: INTERACTIVE CHAPTER TIMELINE */}
          {activeViewTab === 'timeline' && (
            <div className="space-y-4">
              
              {/* Subject Filter Bar & Summary */}
              <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                    <Filter className="w-3.5 h-3.5" />
                    <span>Filter:</span>
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {subjects.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => setActiveSubjectFilter(sub)}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          activeSubjectFilter === sub
                            ? 'bg-navy text-white shadow-xs'
                            : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-300'
                        }`}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-xs font-semibold text-slate-500">
                  Showing <strong className="text-navy">{filteredRoadmap.length}</strong> chapters ({filteredRoadmap.reduce((a, c) => a + c.days, 0)} Days / {filteredRoadmap.reduce((a, c) => a + c.hours, 0)} Hrs)
                </div>
              </div>

              {/* Interactive Roadmap Table / Cards */}
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-100/90 text-slate-700 uppercase text-[11px] font-extrabold border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4 w-12 text-center">#</th>
                      <th className="py-3 px-4">Subject & Chapter Name</th>
                      <th className="py-3 px-4 whitespace-nowrap">Duration</th>
                      <th className="py-3 px-4">Milestone / Assessment</th>
                      <th className="py-3 px-4">Faculty Lead</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {filteredRoadmap.map((item, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                        <td className="py-3.5 px-4 text-center font-bold text-slate-400">
                          {idx + 1}
                        </td>
                        <td className="py-3.5 px-4 font-bold text-navy">
                          <div className="flex items-center gap-2">
                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-extrabold tracking-wider ${
                              item.subject === 'Physics' ? 'bg-blue-100 text-blue-800' :
                              item.subject === 'Chemistry' ? 'bg-teal-100 text-teal-800' :
                              item.subject === 'Mathematics' ? 'bg-orange-100 text-orange-800' :
                              'bg-purple-100 text-purple-800'
                            }`}>
                              {item.subject}
                            </span>
                            <span className="text-sm">{item.chapter}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span className="font-extrabold text-electric">{item.days} Days</span>
                          <span className="text-slate-400 text-xs block">({item.hours} Hours)</span>
                        </td>
                        <td className="py-3.5 px-4 text-xs text-slate-600">
                          <span className="inline-flex items-center gap-1.5 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal flex-shrink-0" />
                            <span>{item.milestone}</span>
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-xs font-semibold text-slate-700 whitespace-nowrap">
                          <span className="flex items-center gap-1 text-slate-600">
                            <UserCheck className="w-3.5 h-3.5 text-orange flex-shrink-0" />
                            <span>{item.faculty}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          )}

          {/* TAB 2: CONCRETE BATCH TIMINGS & CLASS DAYS */}
          {activeViewTab === 'schedule' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-electric">
                    <Calendar className="w-4 h-4" />
                    <span>Bokaro Campus Confirmed Class Days & Timings</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-electric text-white text-[11px] font-bold">
                    Fixed Schedule
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
                  <div className="p-4 rounded-xl bg-white border border-blue-100 shadow-xs space-y-1.5">
                    <span className="text-slate-400 font-bold uppercase text-[11px] block">Regular Batch (Mon - Sat)</span>
                    <span className="font-extrabold text-navy text-base block">{course.batchSchedule?.regular}</span>
                    <p className="text-slate-500 text-xs pt-1">
                      Covers core theory derivations, daily practice sets, and live classroom problem sessions.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-blue-100 shadow-xs space-y-1.5">
                    <span className="text-slate-400 font-bold uppercase text-[11px] block">Weekend Ranker Batch</span>
                    <span className="font-extrabold text-navy text-base block">{course.batchSchedule?.weekend}</span>
                    <p className="text-slate-500 text-xs pt-1">
                      Designed for school-attending aspirants needing intense weekend multi-concept drills.
                    </p>
                  </div>
                </div>

                {/* Additional testing & doubt cabins */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                    <div className="font-bold text-navy flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-teal" />
                      <span>Sunday Testing Slot</span>
                    </div>
                    <div className="text-slate-700 font-medium">{course.batchSchedule?.cbtSlot}</div>
                    <div className="text-slate-400 text-[11px]">Computer-lab simulated mock testing matching NTA pattern.</div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                    <div className="font-bold text-navy flex items-center gap-1.5">
                      <UserCheck className="w-4 h-4 text-orange" />
                      <span>1-on-1 Faculty Doubt Cabin</span>
                    </div>
                    <div className="text-slate-700 font-medium">{course.batchSchedule?.doubtSlot}</div>
                    <div className="text-slate-400 text-[11px]">Permanent faculty presence in Sector 4 campus academic cabins.</div>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: CURRICULUM MODULES */}
          {activeViewTab === 'modules' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-cream-subtle border border-amber-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong>Course Philosophy:</strong> {course.description}
              </div>

              <div className="space-y-3">
                {(course.curriculumSections || []).map((sec, idx) => (
                  <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-colors">
                    <div className="font-bold text-navy text-sm mb-2 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-electric-subtle text-electric text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      <span>{sec.title}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {sec.topics.map((t, i) => (
                        <span key={i} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Campus Confirmation */}
          <div className="p-3.5 rounded-xl bg-slate-100/90 border border-slate-200 text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2">
            <span>Official Haldia Campus: {ACADEMY_CONFIG.contact.address.full}</span>
            <span className="font-bold text-navy">All Days & Hours Guaranteed</span>
          </div>

        </div>

        {/* Footer Action Bar */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleGeneratePDF}
              disabled={isGeneratingPdf}
              className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-electric text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-electric/20 hover:bg-electric-hover active:scale-95 transition-all disabled:opacity-50"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingPdf ? 'Generating PDF...' : 'Download Full Schedule & Syllabus PDF'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-3 rounded-xl border border-slate-300 text-slate-600 hover:text-navy hover:bg-white transition-colors"
              title="Print Schedule"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onEnquireClick(course.id);
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange text-white font-bold text-xs sm:text-sm shadow-md shadow-orange/20 hover:bg-orange-hover active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>Register for This Batch</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
}
