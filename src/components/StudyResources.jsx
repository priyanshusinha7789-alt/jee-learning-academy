import React, { useState } from 'react';
import { BookOpen, Download, FileText, CheckCircle2, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { STUDY_RESOURCES, ACADEMIC_NOTICES } from '../data/studyResourcesData';
import { ACADEMY_CONFIG } from '../data/academyData';

export default function StudyResources({ onEnquireClick }) {
  const [downloadingId, setDownloadingId] = useState(null);

  // Generate genuine downloadable study resource PDF
  const handleDownloadResource = (resource) => {
    try {
      setDownloadingId(resource.id);
      const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
      });

      const midnight = [16, 28, 53];
      const royalBlue = [40, 85, 166];
      const gold = [217, 173, 85];
      const slate = [100, 116, 139];

      // Header Banner
      doc.setFillColor(...midnight);
      doc.rect(0, 0, 210, 36, 'F');

      // Top Gold Accent Stripe
      doc.setFillColor(...gold);
      doc.rect(0, 0, 210, 3, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(255, 255, 255);
      doc.text('HALDIA LEARNING ACADEMY', 14, 15);

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(203, 213, 225);
      doc.text('OFFICIAL ACADEMIC STUDY RESOURCE & CURRICULUM MATERIAL', 14, 22);
      doc.text(`Campus: ${ACADEMY_CONFIG.campusLocationName} | City Centre Complex, Sector 1, Haldia`, 14, 28);

      doc.text(`Helpline: ${ACADEMY_CONFIG.contact.displayPhone}`, 196, 15, { align: 'right' });
      doc.text(`Email: ${ACADEMY_CONFIG.contact.email}`, 196, 21, { align: 'right' });

      // Document Title Box
      doc.setFillColor(245, 247, 251);
      doc.roundedRect(14, 44, 182, 18, 2, 2, 'F');

      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...midnight);
      doc.text(resource.title.toUpperCase(), 18, 52);

      doc.setFontSize(8.5);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(...royalBlue);
      doc.text(`CATEGORY: ${resource.category} | RELEVANT FOR: ${resource.course} | FORMAT: ${resource.fileType}`, 18, 58);

      // Description & Pedagogical Purpose
      doc.setFontSize(9.5);
      doc.setTextColor(30, 41, 59);
      doc.text('RESOURCE OVERVIEW & INSTRUCTIONS:', 14, 72);

      doc.setFontSize(8.5);
      doc.setTextColor(71, 85, 105);
      doc.text(resource.description, 14, 78, { maxWidth: 182 });

      // Topics Table
      autoTable(doc, {
        startY: 90,
        head: [['#', 'CORE SYLLABUS TOPIC / MODULE', 'RECOMMENDED PRACTICE PROTOCOL', 'FACULTY DESK SUPPORT']],
        body: resource.topics.map((t, i) => [
          i + 1,
          t,
          'Solve after completing Class Lecture Notes & DPP Set 1',
          'Daily Doubt Cabin 10:00 AM – 7:30 PM'
        ]),
        theme: 'striped',
        headStyles: {
          fillColor: midnight,
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          fontSize: 8
        },
        styles: {
          fontSize: 8,
          cellPadding: 3,
          textColor: [30, 41, 59]
        },
        columnStyles: {
          0: { cellWidth: 10, halign: 'center', fontStyle: 'bold' },
          1: { cellWidth: 60, fontStyle: 'bold', textColor: royalBlue },
          2: { cellWidth: 65 },
          3: { cellWidth: 47 }
        }
      });

      // Verification Footnote
      doc.setFontSize(7.5);
      doc.setTextColor(...slate);
      doc.text(`Official Academic Material • Haldia Learning Academy • Call ${ACADEMY_CONFIG.contact.displayPhone} for batch admissions`, 14, 285);
      doc.text(`Page 1 of 1`, 196, 285, { align: 'right' });

      doc.save(resource.filename);
    } catch (err) {
      console.error('Error generating resource PDF:', err);
      alert('Unable to generate PDF at this moment.');
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <section id="resources" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softBg border border-slate-200 text-royalBlue font-bold text-xs uppercase tracking-widest mb-3">
            <BookOpen className="w-3.5 h-3.5 text-royalBlue" />
            <span>Section 9: Academic Downloads</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight tracking-tight">
            Study Materials & Resources
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Essential formula compendiums, derivation manuals, and CBT test series schedules prepared by our Ex-IITian faculty for focused revision.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16">
          {STUDY_RESOURCES.map((res) => (
            <div
              key={res.id}
              className="bg-softBg rounded-3xl border border-slate-200 p-7 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-royalBlue uppercase tracking-wider px-3 py-1 rounded-full bg-royalBlue/10 border border-royalBlue/20">
                    {res.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 font-mono">
                    {res.fileType} • {res.fileSize}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-midnight group-hover:text-royalBlue transition-colors">
                  {res.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {res.description}
                </p>

                {/* Key Topics List */}
                <div className="mt-4 pt-3 border-t border-slate-200 flex flex-wrap gap-1.5">
                  {res.topics.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">
                  Relevant for: <strong>{res.course}</strong>
                </span>

                <button
                  onClick={() => handleDownloadResource(res)}
                  disabled={downloadingId === res.id}
                  className="px-4 py-2.5 rounded-xl bg-royalBlue text-white font-bold text-xs flex items-center gap-1.5 hover:bg-royalBlue-hover active:scale-95 transition-all shadow-sm cursor-pointer disabled:opacity-50"
                  aria-label={`Download ${res.title}`}
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{downloadingId === res.id ? 'Preparing PDF...' : 'Download PDF'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section 10: Official Academic Notice Board */}
        <div id="notices" className="mt-20 pt-16 border-t border-slate-200">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold text-gold uppercase tracking-widest bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/30 inline-block mb-3">
              Section 10: Official Notices
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-midnight">
              Academic Notices & Announcements
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Verified campus schedules, test registration windows, and parent-teacher meeting notices.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {ACADEMIC_NOTICES.map((notice) => (
              <div
                key={notice.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs hover:border-royalBlue/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-royalBlue bg-softBg px-2.5 py-0.5 rounded border border-slate-200">
                      {notice.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {notice.date}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-midnight">
                    {notice.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                    {notice.description}
                  </p>
                </div>

                <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 flex-shrink-0">
                  <button
                    onClick={onEnquireClick}
                    className="text-xs font-bold text-royalBlue hover:underline flex items-center gap-1 cursor-pointer whitespace-nowrap"
                  >
                    <span>Enquire at Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-[11px] text-slate-400 font-medium">Haldia Central Campus</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
