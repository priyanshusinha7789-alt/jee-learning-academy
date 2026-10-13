import React, { useState } from 'react';
import { Calendar, Clock, Download, Filter, UserCheck, MapPin, Printer, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { TIMETABLE_ENTRIES, TIMETABLE_BATCHES, TIMETABLE_METADATA } from '../data/timetableData';
import { ACADEMY_CONFIG } from '../data/academyData';

const DAYS = ['All Days', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function ClassTimetable({ onEnquireClick }) {
  const [selectedBatch, setSelectedBatch] = useState('all');
  const [selectedDay, setSelectedDay] = useState('All Days');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Filter entries
  const filteredEntries = TIMETABLE_ENTRIES.filter((entry) => {
    const matchBatch = selectedBatch === 'all' || entry.batchId === selectedBatch;
    const matchDay = selectedDay === 'All Days' || entry.day === selectedDay;
    return matchBatch && matchDay;
  });

  // Client-Side PDF Generation
  const handleDownloadPDF = () => {
    try {
      setIsGeneratingPdf(true);
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      // Palette constants: Midnight Navy, Royal Blue, Gold, and Slate
      const midnight = [16, 28, 53];
      const royalBlue = [40, 85, 166];
      const gold = [217, 173, 85];
      const slate = [100, 116, 139];

      // Header Banner
      doc.setFillColor(...midnight);
      doc.rect(0, 0, 297, 32, 'F');

      // Top Gold Accent Stripe
      doc.setFillColor(...gold);
      doc.rect(0, 0, 297, 2.5, 'F');

      // Institute Name
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(16);
      doc.setTextColor(255, 255, 255);
      doc.text('HALDIA LEARNING ACADEMY - HALDIA CENTRAL CAMPUS', 14, 13);

      // Subtitle & Campus Details
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.setTextColor(203, 213, 225);
      doc.text('OFFICIAL BATCH TIMETABLE & LECTURE SCHEDULE (ACADEMIC SESSION 2026-27)', 14, 20);
      doc.text(`Campus: ${TIMETABLE_METADATA.campus}`, 14, 26);

      // Right Contact Box in Header
      doc.text(`Helpline: ${TIMETABLE_METADATA.contact}`, 283, 14, { align: 'right' });
      doc.text(`Email: ${TIMETABLE_METADATA.email}`, 283, 20, { align: 'right' });
      doc.text(`Status: Verified Schedule | Single Source of Truth`, 283, 26, { align: 'right' });

      // Filter summary banner
      const batchLabel = TIMETABLE_BATCHES.find(b => b.id === selectedBatch)?.label || 'All Batches';
      doc.setFillColor(245, 247, 251);
      doc.roundedRect(14, 36, 269, 9, 2, 2, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.setTextColor(...midnight);
      doc.text(`SCHEDULE SCOPE: ${batchLabel.toUpperCase()}  |  DAY FILTER: ${selectedDay.toUpperCase()}`, 18, 42);
      doc.setTextColor(...royalBlue);
      doc.text(`Total Scheduled Sessions: ${filteredEntries.length} Classes`, 279, 42, { align: 'right' });

      // Table Generation
      const tableData = filteredEntries.map((item, idx) => [
        idx + 1,
        item.day,
        `${item.startTime} - ${item.endTime}`,
        item.batchName,
        item.subject,
        item.topic,
        item.teacher,
        item.room,
        item.notes
      ]);

      autoTable(doc, {
        startY: 48,
        head: [['#', 'DAY', 'TIME SLOT', 'BATCH', 'SUBJECT', 'LECTURE TOPIC / SYLLABUS UNIT', 'ASSIGNED FACULTY', 'ROOM / HALL', 'MANDATORY NOTES']],
        body: tableData,
        theme: 'striped',
        headStyles: {
          fillColor: midnight,
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          fontSize: 7.5,
          halign: 'center'
        },
        styles: {
          fontSize: 7,
          cellPadding: 2,
          textColor: [30, 41, 59]
        },
        columnStyles: {
          0: { cellWidth: 8, halign: 'center', fontStyle: 'bold' },
          1: { cellWidth: 18, fontStyle: 'bold', textColor: royalBlue },
          2: { cellWidth: 28, fontStyle: 'bold' },
          3: { cellWidth: 32 },
          4: { cellWidth: 20, fontStyle: 'bold' },
          5: { cellWidth: 62 },
          6: { cellWidth: 38 },
          7: { cellWidth: 30 },
          8: { cellWidth: 33, textColor: [100, 116, 139] }
        },
        didDrawPage: (data) => {
          // Page Footer
          doc.setFontSize(7);
          doc.setTextColor(...slate);
          doc.text(`Haldia Learning Academy • City Centre Complex, Sector 1, Haldia, WB | Call: ${TIMETABLE_METADATA.contact}`, 14, 202);
          doc.text(`Page ${doc.internal.getNumberOfPages()}`, 283, 202, { align: 'right' });
        }
      });

      // Save PDF with clear semantic naming
      doc.save(`jee-class-timetable.pdf`);
    } catch (err) {
      console.error('Error generating Timetable PDF:', err);
      alert('Unable to generate PDF. You can view or print the timetable directly on this page.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <section id="timetable" className="py-20 lg:py-28 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-softBg border border-slate-200 text-royalBlue font-bold text-xs uppercase tracking-widest mb-3">
              <Calendar className="w-3.5 h-3.5 text-royalBlue" />
              <span>Section 8: Academic Schedule</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight tracking-tight">
              Class Timetable & Schedule
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Transparent, day-by-day class hours, faculty allocations, and CBT mock exam slots at Haldia Central Campus.
            </p>
          </div>

          {/* Action Button: Download Timetable PDF */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPdf}
              className="px-6 py-3.5 rounded-xl bg-royalBlue text-white font-bold text-sm shadow-md shadow-royalBlue/25 hover:bg-royalBlue-hover active:scale-95 transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              aria-label="Download Class Timetable as PDF"
            >
              <Download className="w-4 h-4" />
              <span>{isGeneratingPdf ? 'Generating PDF...' : 'DOWNLOAD TIMETABLE PDF'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="p-3.5 rounded-xl border border-slate-300 text-slate-600 hover:text-midnight hover:bg-slate-50 transition-colors cursor-pointer"
              title="Print Schedule"
            >
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-softBg rounded-2xl border border-slate-200 p-4 sm:p-5 mb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Batch Selector Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>Batch:</span>
            </span>
            {TIMETABLE_BATCHES.map((batch) => (
              <button
                key={batch.id}
                onClick={() => setSelectedBatch(batch.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedBatch === batch.id
                    ? 'bg-midnight text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {batch.label}
              </button>
            ))}
          </div>

          {/* Day Selector Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">
              Day:
            </span>
            {DAYS.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedDay === day
                    ? 'bg-royalBlue text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Timetable Table */}
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-card bg-white">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-midnight text-white uppercase text-[11px] font-extrabold border-b border-slate-200">
              <tr>
                <th className="py-3.5 px-4 w-12 text-center">#</th>
                <th className="py-3.5 px-4 whitespace-nowrap">Day & Time</th>
                <th className="py-3.5 px-4 whitespace-nowrap">Batch</th>
                <th className="py-3.5 px-4">Subject</th>
                <th className="py-3.5 px-4">Topic / Syllabus Unit</th>
                <th className="py-3.5 px-4 whitespace-nowrap">Faculty Lead</th>
                <th className="py-3.5 px-4 whitespace-nowrap">Room / Mode</th>
                <th className="py-3.5 px-4">Notes</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredEntries.length === 0 ? (
                <tr>
                  <td colSpan="8" className="py-12 text-center text-slate-500">
                    No classes scheduled for the selected filter combination.
                  </td>
                </tr>
              ) : (
                filteredEntries.map((entry, idx) => (
                  <tr key={entry.id} className="hover:bg-softBg transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-400">
                      {idx + 1}
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="font-extrabold text-midnight block">{entry.day}</span>
                      <span className="text-royalBlue text-xs font-semibold flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        <span>{entry.startTime} – {entry.endTime}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="px-2.5 py-1 rounded-md bg-softBg text-midnight font-bold text-xs border border-slate-200">
                        {entry.batchName}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-midnight whitespace-nowrap">
                      {entry.subject}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 font-medium">
                      {entry.topic}
                    </td>
                    <td className="py-3.5 px-4 text-slate-700 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-semibold text-xs">
                        <UserCheck className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                        <span>{entry.teacher}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-slate-600 whitespace-nowrap">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-royalBlue" />
                        <span>{entry.room}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-xs text-slate-500 italic">
                      {entry.notes}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Timetable Metadata & Verification Status */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-royalBlue" />
            <span><strong>Verified Schedule:</strong> {TIMETABLE_METADATA.lastUpdated}</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Room Locations: City Centre Complex, Sector 1, Haldia</span>
            <button
              onClick={onEnquireClick}
              className="text-royalBlue font-bold hover:underline cursor-pointer"
            >
              Request Custom Batch Timing
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
