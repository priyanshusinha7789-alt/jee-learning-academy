import React, { useState, useEffect } from 'react';
import { Send, MessageSquare, CheckCircle2, AlertCircle, Sparkles, Clock, Phone, User, BookOpen, ShieldCheck } from 'lucide-react';
import { ACADEMY_CONFIG, COURSES } from '../data/academyData';

export default function EnquirySection({ selectedCourseId, onResetCourseSelection, onSuccessLead }) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    phoneNumber: '',
    currentClass: '',
    courseInterest: '',
    preferredTime: 'Morning (10 AM - 1 PM)',
    city: 'Haldia',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submissionData, setSubmissionData] = useState(null);

  // Sync selected course from outside
  useEffect(() => {
    if (selectedCourseId) {
      const match = COURSES.find(c => c.id === selectedCourseId);
      if (match) {
        setFormData(prev => ({ ...prev, courseInterest: match.title }));
      }
    }
  }, [selectedCourseId]);

  const validate = () => {
    const errs = {};
    if (!formData.studentName.trim()) {
      errs.studentName = 'Student full name is required.';
    } else if (formData.studentName.trim().length < 2) {
      errs.studentName = 'Please enter at least 2 characters.';
    }

    const phoneClean = formData.phoneNumber.replace(/[\s-]/g, '');
    if (!phoneClean) {
      errs.phoneNumber = 'Phone number is required.';
    } else if (!/^[6-9]\d{9}$/.test(phoneClean)) {
      errs.phoneNumber = 'Please enter a valid 10-digit mobile number (starting with 6, 7, 8, or 9).';
    }

    if (!formData.currentClass) {
      errs.currentClass = 'Please select the student\'s current class.';
    }

    if (!formData.courseInterest) {
      errs.courseInterest = 'Please select a course / track.';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newLead = {
      id: 'lead_' + Date.now(),
      studentName: formData.studentName.trim(),
      parentName: formData.parentName.trim(),
      parentMobile: formData.phoneNumber.trim(),
      phoneNumber: formData.phoneNumber.trim(),
      currentClass: formData.currentClass,
      courseInterest: formData.courseInterest,
      targetExam: formData.courseInterest,
      city: formData.city.trim() || 'Bokaro Steel City',
      preferredTime: formData.preferredTime,
      message: formData.message.trim(),
      source: 'On-Page Enquiry Form',
      submittedAt: new Date().toISOString(),
      displayDate: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short'
      })
    };

    // Save to localStorage under 'jee_leads_data'
    try {
      const existingLeads = JSON.parse(localStorage.getItem('jee_leads_data') || '[]');
      const updatedLeads = [newLead, ...existingLeads];
      localStorage.setItem('jee_leads_data', JSON.stringify(updatedLeads));
    } catch (err) {
      console.error('Failed to save in localStorage', err);
    }

    setSubmissionData(newLead);
    setIsSubmitted(true);
    if (onSuccessLead) {
      onSuccessLead(newLead);
    }
  };

  const generateWhatsAppUrl = (data = formData) => {
    const text = `Hello Haldia Learning Academy!%0A%0A*Admission Enquiry Form (Haldia Campus)*%0A*Student Name:* ${encodeURIComponent(data.studentName || 'Not specified')}%0A*Parent Name:* ${encodeURIComponent(data.parentName || 'N/A')}%0A*Phone:* ${encodeURIComponent(data.phoneNumber || 'N/A')}%0A*Current Class:* ${encodeURIComponent(data.currentClass || 'N/A')}%0A*Course:* ${encodeURIComponent(data.courseInterest || 'General Enquiry')}%0A*City:* ${encodeURIComponent(data.city || 'Haldia')}%0A*Preferred Contact Time:* ${encodeURIComponent(data.preferredTime || 'Anytime')}%0A${data.message ? `*Notes:* ${encodeURIComponent(data.message)}%0A` : ''}%0APlease provide seat availability and fee details.`;
    return `https://wa.me/${ACADEMY_CONFIG.contact.whatsappNumber}?text=${text}`;
  };

  const handleFillSample = () => {
    setFormData({
      studentName: 'Arjun Sen',
      parentName: 'Debabrata Sen',
      phoneNumber: '9830112233',
      currentClass: 'Class 10',
      courseInterest: 'Secondary Preparation',
      preferredTime: 'Evening (5 PM - 8 PM)',
      city: 'Haldia',
      message: 'Looking for board guidance along with early Olympiad/foundation preparation.'
    });
    setErrors({});
  };

  const handleResetForm = () => {
    setFormData({
      studentName: '',
      parentName: '',
      phoneNumber: '',
      currentClass: '',
      courseInterest: '',
      preferredTime: 'Morning (10 AM - 1 PM)',
      city: 'Bokaro Steel City',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setSubmissionData(null);
    if (onResetCourseSelection) onResetCourseSelection();
  };

  return (
    <section id="enquiry" className="py-20 relative bg-cream-subtle overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Box with Orange-to-Blue Accent Gradient border */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-orange via-electric to-teal shadow-2xl">
          <div className="bg-white rounded-[22px] p-6 sm:p-10 lg:p-14">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              
              {/* Left Column */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-subtle border border-orange/20 text-orange font-bold text-xs uppercase tracking-wider mb-4">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Bokaro Campus Admissions {ACADEMY_CONFIG.academicYear}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight leading-tight">
                    Ready to Take the <br />
                    <span className="bg-gradient-to-r from-orange to-electric bg-clip-text text-transparent">
                      Next Step?
                    </span>
                  </h2>

                  <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                    Tell us what you want to achieve. Our academic team at Haldia Central Campus will confirm batch availability, syllabus schedule, and test series access.
                  </p>
                </div>

                {/* Instant WhatsApp Option Box */}
                <div className="p-5 rounded-2xl bg-teal-subtle/80 border border-teal/20 space-y-3">
                  <div className="flex items-center gap-2 text-teal font-extrabold text-sm">
                    <MessageSquare className="w-5 h-5" />
                    <span>Direct WhatsApp Desk</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Skip waiting for callbacks. Connect directly with the Haldia admissions desk on WhatsApp:
                  </p>
                  <a
                    href={generateWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-teal text-white font-bold text-xs sm:text-sm shadow-sm hover:bg-teal-hover transition-colors"
                  >
                    <span>Open WhatsApp Chat Directly</span>
                  </a>
                  <p className="text-[11px] text-slate-400 text-center font-medium">
                    Central Admission Desk: {ACADEMY_CONFIG.contact.displayPhone}
                  </p>
                </div>

                {/* Privacy Assurance */}
                <div className="text-xs text-slate-500 space-y-1.5 pt-2 border-t border-slate-100">
                  <div className="font-semibold text-navy flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-teal" />
                    <span>Student Privacy Guarantee:</span>
                  </div>
                  <p className="leading-normal">
                    Your contact information will only be used by Haldia Learning Academy for course registration and batch schedule communication.
                  </p>
                </div>

              </div>

              {/* Right Column: Admission Enquiry Form */}
              <div className="lg:col-span-7 bg-slate-50/70 p-6 sm:p-8 rounded-2xl border border-slate-200/80">
                
                {isSubmitted ? (
                  /* Success Notification State */
                  <div className="space-y-6 text-center py-6 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-teal-subtle text-teal flex items-center justify-center mx-auto shadow-inner">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-extrabold text-navy">
                        Enquiry Successfully Submitted!
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                        Thank you, <span className="font-bold text-navy">{submissionData?.studentName}</span>! Your details for <span className="font-bold text-electric">{submissionData?.courseInterest}</span> have been registered for Haldia Central Campus.
                      </p>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-slate-200 text-left text-xs space-y-2 text-slate-700 max-w-md mx-auto shadow-sm">
                      <div className="font-bold text-navy text-sm border-b pb-1.5 flex justify-between">
                        <span>Submitted Overview</span>
                        <span className="text-teal font-normal text-xs">Logged & Saved</span>
                      </div>
                      <div><strong>Student:</strong> {submissionData?.studentName}</div>
                      <div><strong>Phone:</strong> {submissionData?.phoneNumber}</div>
                      <div><strong>Current Class:</strong> {submissionData?.currentClass}</div>
                      <div><strong>Course:</strong> {submissionData?.courseInterest}</div>
                      <div><strong>City:</strong> {submissionData?.city || 'Haldia'}</div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        href={generateWhatsAppUrl(submissionData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-teal text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm hover:bg-teal-hover transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Confirm via WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={handleResetForm}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-sm transition-colors"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Enquiry Form */
                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                      <h3 className="text-lg font-bold text-navy flex items-center gap-2">
                        <span>Course Admission Enquiry Form</span>
                      </h3>
                      <button
                        type="button"
                        onClick={handleFillSample}
                        className="text-xs text-electric font-semibold hover:underline"
                        title="Auto-fill sample details"
                      >
                        ⚡ Fill Sample Data
                      </button>
                    </div>

                    {/* Student Name */}
                    <div>
                      <label htmlFor="studentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Student Full Name <span className="text-orange">*</span>
                      </label>
                      <input
                        type="text"
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border ${errors.studentName ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-electric focus:ring-blue-100'} text-sm focus:outline-none focus:ring-4 transition-all`}
                      />
                      {errors.studentName && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.studentName}</span>
                        </p>
                      )}
                    </div>

                    {/* Parent Name (Optional) & Phone Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="parentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Parent / Guardian Name <span className="text-slate-400 font-normal">(Optional)</span>
                        </label>
                        <input
                          type="text"
                          id="parentName"
                          name="parentName"
                          value={formData.parentName}
                          onChange={handleChange}
                          placeholder="e.g. S. K. Sharma"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-electric focus:ring-4 focus:ring-blue-100 text-sm focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="phoneNumber" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Contact Phone Number <span className="text-orange">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phoneNumber"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          maxLength="10"
                          placeholder="10-digit mobile number"
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border ${errors.phoneNumber ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-electric focus:ring-blue-100'} text-sm focus:outline-none focus:ring-4 transition-all`}
                        />
                        {errors.phoneNumber && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.phoneNumber}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Current Class & Course of Interest */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="currentClass" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Current Class <span className="text-orange">*</span>
                        </label>
                        <select
                          id="currentClass"
                          name="currentClass"
                          value={formData.currentClass}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border ${errors.currentClass ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-electric focus:ring-blue-100'} text-sm focus:outline-none focus:ring-4 transition-all`}
                        >
                          <option value="">-- Select Class --</option>
                          <option value="Class 6">Class 6</option>
                          <option value="Class 7">Class 7</option>
                          <option value="Class 8">Class 8</option>
                          <option value="Class 9">Class 9</option>
                          <option value="Class 10">Class 10</option>
                          <option value="Class 11 Science">Class 11 Science</option>
                          <option value="Class 12 Science">Class 12 Science</option>
                          <option value="Passout / Dropper">Passout / Dropper</option>
                        </select>
                        {errors.currentClass && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.currentClass}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="courseInterest" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Course of Interest <span className="text-orange">*</span>
                        </label>
                        <select
                          id="courseInterest"
                          name="courseInterest"
                          value={formData.courseInterest}
                          onChange={handleChange}
                          className={`w-full px-4 py-2.5 rounded-xl bg-white border ${errors.courseInterest ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:border-electric focus:ring-blue-100'} text-sm focus:outline-none focus:ring-4 transition-all`}
                        >
                          <option value="">-- Select Pathway --</option>
                          {COURSES.map(c => (
                            <option key={c.id} value={c.title}>
                              {c.title} ({c.target})
                            </option>
                          ))}
                        </select>
                        {errors.courseInterest && (
                          <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.courseInterest}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* City & Preferred Contact Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          City / Town
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="e.g. Haldia / Tamluk / Mecheda"
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-electric focus:ring-4 focus:ring-blue-100 text-sm focus:outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label htmlFor="preferredTime" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Preferred Contact Window
                        </label>
                        <select
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-electric focus:ring-4 focus:ring-blue-100 text-sm focus:outline-none transition-all"
                        >
                          <option value="Morning (10 AM - 1 PM)">Morning (10 AM – 1 PM)</option>
                          <option value="Afternoon (1 PM - 5 PM)">Afternoon (1 PM – 5 PM)</option>
                          <option value="Evening (5 PM - 8 PM)">Evening (5 PM – 8 PM)</option>
                          <option value="Weekend Anytime">Weekend Anytime</option>
                        </select>
                      </div>
                    </div>

                    {/* Notes / Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Questions or Academic Goal <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="2"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Share any specific doubts, subjects of focus, or previous school curriculum..."
                        className="w-full px-4 py-2 rounded-xl bg-white border border-slate-300 focus:border-electric focus:ring-4 focus:ring-blue-100 text-sm focus:outline-none transition-all resize-none"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                      <button
                        type="submit"
                        className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-orange text-white font-bold text-sm shadow-md shadow-orange/25 hover:bg-orange-hover hover:shadow-glow-orange active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
                      >
                        <span>Submit Admission Enquiry</span>
                        <Send className="w-4 h-4" />
                      </button>

                      <a
                        href={generateWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-teal text-white font-bold text-sm hover:bg-teal-hover transition-colors flex items-center justify-center gap-2 shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Send on WhatsApp</span>
                      </a>
                    </div>

                  </form>
                )}

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
