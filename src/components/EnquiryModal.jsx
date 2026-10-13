import React, { useState, useEffect } from 'react';
import { X, Send, MessageSquare, AlertCircle, Sparkles, CheckCircle2, ShieldCheck, MapPin, Phone, User, BookOpen, Clock, Calendar, Download } from 'lucide-react';
import { ACADEMY_CONFIG, COURSES } from '../data/academyData';

export default function EnquiryModal({ isOpen, onClose, preselectedCourseId, onSuccessLead, onOpenSyllabusModal }) {
  const [formData, setFormData] = useState({
    studentName: '',
    whatsappNumber: '',
    currentClass: 'Class 11 Science',
    preferredCourse: 'competitive',
    city: 'Haldia',
    preferredBatchTime: 'Regular Evening Batch: 4:30 PM - 7:30 PM'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');
  const [lastSubmittedLead, setLastSubmittedLead] = useState(null);

  // Sync preselected course if passed
  useEffect(() => {
    if (preselectedCourseId) {
      setFormData(prev => ({
        ...prev,
        preferredCourse: preselectedCourseId
      }));
    }
  }, [preselectedCourseId]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentSelectedCourseObj = COURSES.find(c => c.id === formData.preferredCourse) || COURSES[0];

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) {
      errs.studentName = 'Student name is required.';
    } else if (formData.studentName.trim().length < 2) {
      errs.studentName = 'Name must be at least 2 characters.';
    }

    const cleanMobile = formData.whatsappNumber.replace(/[\s-]/g, '');
    if (!cleanMobile) {
      errs.whatsappNumber = 'WhatsApp number is required.';
    } else if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      errs.whatsappNumber = 'Enter a valid 10-digit mobile number (starts with 6-9).';
    }

    if (!formData.currentClass) {
      errs.currentClass = 'Please select current class.';
    }

    if (!formData.preferredCourse) {
      errs.preferredCourse = 'Please select preferred course / batch.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Helper to build the automated, rich WhatsApp schedule dispatch text
  const buildWhatsAppDispatchUrl = (data = formData, courseObj = currentSelectedCourseObj) => {
    const courseRoadmap = courseObj.chapterRoadmap || [];
    // Take first 5 key chapters as high-impact summary
    const roadmapSnippet = courseRoadmap.slice(0, 5).map(c => `• ${c.chapter} (${c.days} Days / ${c.hours}h)`).join('%0A');

    const text = 
      `*HALDIA LEARNING ACADEMY • HALDIA CENTRAL CAMPUS*%0A` +
      `━━━━━━━━━━━━━━━━━━━━━━━━%0A` +
      `Hello ${encodeURIComponent(data.studentName)}!%0A` +
      `Here is your official requested batch schedule & chapter roadmap:%0A%0A` +
      `*Course:* ${encodeURIComponent(courseObj.title)} (${encodeURIComponent(courseObj.target)})%0A` +
      `*Current Class:* ${encodeURIComponent(data.currentClass)}%0A` +
      `*Campus:* City Centre Complex, Sector 1, Haldia%0A` +
      `*Upcoming Commencement:* ${encodeURIComponent(courseObj.batchBadge)}%0A%0A` +
      `*BATCH TIMINGS & DAYS:*%0A` +
      `• ${encodeURIComponent(courseObj.batchSchedule?.regular || 'Mon-Sat 4:30 PM - 7:30 PM')}%0A` +
      `• ${encodeURIComponent(courseObj.batchSchedule?.weekend || 'Sat-Sun 9:00 AM - 2:00 PM')}%0A` +
      `• CBT Testing: ${encodeURIComponent(courseObj.batchSchedule?.cbtSlot || 'Sundays 9:00 AM - 12:00 PM')}%0A%0A` +
      `*FACULTY ALLOCATION:*%0A` +
      `• Physics: Dr. Rajesh Verma (B.Tech & Ph.D., IIT Kharagpur)%0A` +
      `• Chemistry: Neha Agarwal (M.Sc. Gold Medalist)%0A` +
      `• Mathematics: Prof. Amitava Sen (M.Stat, ISI Kolkata)%0A%0A` +
      `*CHAPTER DURATION ROADMAP SAMPLE:*%0A` +
      `${roadmapSnippet}%0A` +
      `• ...and ${courseRoadmap.length - 5} more chapters scheduled systematically.%0A%0A` +
      `*SYLLABUS & SCHEDULE PDF:*%0A` +
      `Full PDF document with daily DPP frequencies has been generated. Call our Haldia desk at +91 98321 45670 to confirm seat allocation.`;

    return `https://wa.me/${ACADEMY_CONFIG.contact.whatsappNumber}?text=${text}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const targetCourse = COURSES.find(c => c.id === formData.preferredCourse) || COURSES[0];

    const newLead = {
      id: 'lead_' + Date.now(),
      studentName: formData.studentName.trim(),
      whatsappNumber: formData.whatsappNumber.trim(),
      parentMobile: formData.whatsappNumber.trim(),
      currentClass: formData.currentClass,
      preferredCourseId: formData.preferredCourse,
      targetExam: targetCourse.title,
      courseInterest: targetCourse.title,
      city: formData.city.trim() || 'Haldia',
      batchTiming: formData.preferredBatchTime,
      source: 'Interactive Admission Modal',
      submittedAt: new Date().toISOString(),
      displayDate: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    };

    // 1. Save locally into localStorage under 'jee_leads_data'
    try {
      const existingLeads = JSON.parse(localStorage.getItem('jee_leads_data') || '[]');
      const updatedLeads = [newLead, ...existingLeads];
      localStorage.setItem('jee_leads_data', JSON.stringify(updatedLeads));
    } catch (err) {
      console.error('Failed to save in localStorage', err);
    }

    // 2. Prepare dynamic WhatsApp redirect URL
    const waUrl = buildWhatsAppDispatchUrl(formData, targetCourse);
    setGeneratedWhatsAppUrl(waUrl);
    setLastSubmittedLead(newLead);

    setIsSubmitting(false);
    setIsSuccess(true);

    if (onSuccessLead) {
      onSuccessLead(newLead);
    }
  };

  const handleFillSample = () => {
    setFormData({
      studentName: 'Aman Kumar Verma',
      whatsappNumber: '9832145678',
      currentClass: 'Class 11 Science',
      preferredCourse: 'competitive',
      city: 'Haldia',
      preferredBatchTime: 'Regular Evening Batch: 4:30 PM - 7:30 PM'
    });
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 my-4"
        role="dialog"
        aria-modal="true"
      >
        {/* Top Decorative Header Accent */}
        <div className="h-2.5 w-full bg-gradient-to-r from-orange via-electric to-teal" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-navy hover:bg-slate-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          
          {isSuccess ? (
            /* Automated WhatsApp Dispatch & Confirmation View */
            <div className="text-center py-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-2xl bg-teal-subtle text-teal flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-[11px] font-extrabold uppercase tracking-wider">
                  Registration Confirmed • Lead Saved
                </span>
                <h3 className="text-2xl font-extrabold text-navy mt-2">
                  Faculty Schedule Ready!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto">
                  Hi <strong className="text-navy">{lastSubmittedLead?.studentName}</strong>, your batch roadmap for <strong className="text-electric">{currentSelectedCourseObj.title}</strong> has been structured with chapter durations and assigned Ex-IITian faculty.
                </p>
              </div>

              {/* Concrete Details Box */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 text-slate-700">
                <div className="font-bold text-navy text-sm border-b pb-1.5 flex justify-between items-center">
                  <span>Batch Allocation Summary</span>
                  <span className="text-teal font-bold">{currentSelectedCourseObj.batchBadge}</span>
                </div>
                <div><strong>Class Schedule:</strong> {currentSelectedCourseObj.batchSchedule?.regular}</div>
                <div><strong>Weekend Option:</strong> {currentSelectedCourseObj.batchSchedule?.weekend}</div>
                <div><strong>Lead Registered To:</strong> +91 {lastSubmittedLead?.whatsappNumber}</div>
                <div><strong>Campus:</strong> Sector 1, Haldia Central Campus</div>
              </div>

              {/* Prominent One-Click WhatsApp Dispatch Button */}
              <div className="pt-2 space-y-3">
                <a
                  href={generatedWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-teal text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-lg shadow-teal/30 hover:bg-teal-hover active:scale-95 transition-all animate-bounce-subtle"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send My Faculty Schedule on WhatsApp</span>
                </a>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      if (onOpenSyllabusModal) onOpenSyllabusModal(formData.preferredCourse);
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl border border-electric text-electric font-bold text-xs hover:bg-blue-50 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Schedule PDF</span>
                  </button>

                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              
              {/* Modal Title & Value Proposition */}
              <div className="mb-5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-subtle border border-orange/20 text-orange font-bold text-[11px] uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3" />
                  <span>Haldia Campus • Academic Session {ACADEMY_CONFIG.academicYear}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-navy tracking-tight">
                  Enquire & Receive Faculty Schedule
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Fill in your details below to get the complete chapter duration timeline and confirmed class schedule sent to your device.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate className="space-y-3.5">
                
                {/* Student Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Student Full Name <span className="text-orange">*</span>
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Aman Kumar"
                    className={`w-full px-4 py-2.5 rounded-xl border ${
                      errors.studentName ? 'border-red-500 focus:ring-red-100' : 'border-slate-300 focus:border-electric focus:ring-blue-100'
                    } text-sm focus:outline-none focus:ring-4 transition-all`}
                  />
                  {errors.studentName && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.studentName}</span>
                    </p>
                  )}
                </div>

                {/* WhatsApp Number & Current Class */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      WhatsApp Number <span className="text-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      name="whatsappNumber"
                      maxLength="10"
                      value={formData.whatsappNumber}
                      onChange={handleChange}
                      placeholder="10-digit number"
                      className={`w-full px-4 py-2.5 rounded-xl border ${
                        errors.whatsappNumber ? 'border-red-500 focus:ring-red-100' : 'border-slate-300 focus:border-electric focus:ring-blue-100'
                      } text-sm focus:outline-none focus:ring-4 transition-all`}
                    />
                    {errors.whatsappNumber && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.whatsappNumber}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Current Class <span className="text-orange">*</span>
                    </label>
                    <select
                      name="currentClass"
                      value={formData.currentClass}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-electric focus:ring-4 focus:ring-blue-100 text-sm focus:outline-none transition-all"
                    >
                      <option value="Class 6">Class 6 (Junior)</option>
                      <option value="Class 7">Class 7 (Junior)</option>
                      <option value="Class 8">Class 8 (Junior)</option>
                      <option value="Class 9">Class 9 (Pre-Foundation)</option>
                      <option value="Class 10">Class 10 (Board Target)</option>
                      <option value="Class 11 Science">Class 11 Science (PCM / PCB)</option>
                      <option value="Class 12 Science">Class 12 Science (PCM / PCB)</option>
                      <option value="Dropper / 12th Pass">Dropper / 12th Passout</option>
                    </select>
                  </div>
                </div>

                {/* Select Preferred Batch / Course Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Select Preferred Batch / Course <span className="text-orange">*</span>
                  </label>
                  <select
                    name="preferredCourse"
                    value={formData.preferredCourse}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-electric focus:ring-4 focus:ring-blue-100 text-sm focus:outline-none transition-all"
                  >
                    {COURSES.map(c => (
                      <option key={c.id} value={c.id}>
                        {c.title} — {c.target} ({c.batchBadge})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Preferred Batch Timing (Transparent Choice) */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Select Class Timing Preference
                  </label>
                  <select
                    name="preferredBatchTime"
                    value={formData.preferredBatchTime}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:border-electric focus:ring-4 focus:ring-blue-100 text-xs sm:text-sm focus:outline-none transition-all"
                  >
                    <option value="Regular Evening Batch: 4:30 PM - 7:30 PM">Regular Evening Batch (4:30 PM – 7:30 PM)</option>
                    <option value="Weekend Ranker Batch: 9:00 AM - 2:00 PM">Weekend Ranker Batch (Sat-Sun 9:00 AM – 2:00 PM)</option>
                    <option value="Morning Foundation: 8:30 AM - 1:00 PM">Morning Foundation Slot (8:30 AM – 1:00 PM)</option>
                  </select>
                </div>

                {/* City */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your City / Town
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="e.g. Haldia / Tamluk / Mecheda"
                    className="w-full px-4 py-2 rounded-xl border border-slate-300 focus:border-electric focus:ring-4 focus:ring-blue-100 text-sm focus:outline-none transition-all"
                  />
                </div>

                {/* Quick Sample Button */}
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={handleFillSample}
                    className="text-[11px] text-electric hover:underline font-semibold"
                  >
                    ⚡ Auto-fill sample data
                  </button>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-orange text-white font-bold text-sm shadow-md shadow-orange/25 hover:bg-orange-hover hover:shadow-glow-orange active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <span>Submit & Get Chapter Schedule on WhatsApp</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>

                <div className="pt-2 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-teal" />
                  <span>Your number is strictly used to send syllabus & batch schedules.</span>
                </div>

              </form>
            </div>
          )}

        </div>

      </div>

    </div>
  );
}
