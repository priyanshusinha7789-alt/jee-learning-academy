import React, { useState } from 'react';
import { 
  GraduationCap, Phone, Mail, MapPin, Clock, MessageSquare, 
  ExternalLink, ChevronDown, ChevronUp, ArrowUp, Send, Heart, ShieldCheck, Database 
} from 'lucide-react';
import { ACADEMY_CONFIG, FAQS, COURSES } from '../data/academyData';

export default function ContactFooter({ onEnquireClick, onOpenAdminLeads }) {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-navy text-slate-200 pt-20 pb-12 border-t border-slate-800 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact and FAQ Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-20 border-b border-slate-800">
          
          {/* Left Column: Direct Contact Details & Haldia Location Card */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold text-teal uppercase tracking-widest bg-teal/10 px-3.5 py-1.5 rounded-full border border-teal/20 inline-block mb-4">
                Campus & Admissions
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Visit or Reach Out to Us
              </h3>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Have questions regarding batches, curriculum, or guidance sessions? Our admissions desk is happy to assist students and parents at our Haldia Central campus.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 pt-1">
              
              {/* Phone */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-navy-light/70 border border-slate-700/60 hover:border-electric/50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-electric/20 text-electric-light flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Helpline & Admissions</div>
                  <a href={`tel:${ACADEMY_CONFIG.contact.rawPhone}`} className="text-base font-bold text-white hover:text-electric transition-colors block mt-0.5">
                    {ACADEMY_CONFIG.contact.displayPhone}
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Campus Admissions Desk open till 8:00 PM</p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-navy-light/70 border border-slate-700/60 hover:border-teal/50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-teal/20 text-teal flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp Admissions Desk</div>
                  <a 
                    href={`https://wa.me/${ACADEMY_CONFIG.contact.whatsappNumber}?text=Hello%20Haldia%20Learning%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20for%20Haldia%20campus.`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-teal transition-colors flex items-center gap-1.5 mt-0.5"
                  >
                    <span>+{ACADEMY_CONFIG.contact.whatsappNumber} (Instant Chat)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-teal" />
                  </a>
                  <p className="text-xs text-slate-400 mt-0.5">Direct line to Haldia Admissions Office</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-navy-light/70 border border-slate-700/60 hover:border-orange/50 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-orange/20 text-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Email</div>
                  <a href={`mailto:${ACADEMY_CONFIG.contact.email}`} className="text-base font-bold text-white hover:text-orange-light transition-colors break-all block mt-0.5">
                    {ACADEMY_CONFIG.contact.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-navy-light/70 border border-slate-700/60">
                <div className="w-11 h-11 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Bokaro Campus Address</div>
                  <p className="text-sm font-medium text-slate-200 mt-1 leading-relaxed">
                    {ACADEMY_CONFIG.contact.address.full}
                  </p>
                  <p className="text-xs text-slate-400 mt-0.5">{ACADEMY_CONFIG.contact.address.landmark}</p>
                  <a
                    href={ACADEMY_CONFIG.contact.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-electric-light hover:underline mt-2 font-bold"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-navy-light/70 border border-slate-700/60">
                <div className="w-11 h-11 rounded-xl bg-slate-700 text-slate-300 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Academic & Doubt Hours</div>
                  <p className="text-sm font-medium text-slate-200 mt-1">
                    {ACADEMY_CONFIG.contact.openingHours}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Frequently Asked Questions */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold text-electric-light uppercase tracking-widest bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20 inline-block mb-4">
                Help & Clarifications
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Frequently Asked Questions
              </h3>
              <p className="mt-3 text-base text-slate-300 leading-relaxed">
                Important details on enrollment, batch sizes, study materials, and faculty doubt cabin policies in Haldia.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-700/80 bg-navy-light/60 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-navy-light/90 transition-colors"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {faq.q}
                    </span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-5 h-5 text-orange flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-6 pt-2 text-sm sm:text-base text-slate-300 leading-loose border-t border-slate-700/50 bg-navy/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quick Registration Callout */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-navy-light to-slate-800 border border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
              <div>
                <div className="text-base font-bold text-white">Have a specific syllabus question or batch query?</div>
                <div className="text-xs text-slate-400 mt-1">Our academic coordinators are available at Haldia Central Campus.</div>
              </div>
              <button
                onClick={() => onEnquireClick()}
                className="px-5 py-2.5 rounded-xl bg-orange text-white text-xs sm:text-sm font-bold hover:bg-orange-hover transition-colors whitespace-nowrap shadow-sm"
              >
                Register for Batch
              </button>
            </div>
          </div>

        </div>

        {/* Footer Navigation & Brand Row */}
        <div className="pt-14 pb-10 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-slate-800 text-sm">
          
          {/* Col 1: Brand & Logo */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-navy-light border border-slate-700 flex items-center justify-center text-orange shadow-sm">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="font-extrabold text-lg tracking-tight text-white">
                  HALDIA <span className="text-electric-light">LEARNING</span>
                </div>
                <div className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                  ACADEMY • HALDIA
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Premier coaching institute in Haldia, West Bengal empowering students with conceptual clarity, patient Ex-IITian mentorship, and proven competitive rank methodologies.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 leading-relaxed">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Course Tracks & Batches</a></li>
              <li><a href="#achievers" className="hover:text-white transition-colors">Top Achievers Gallery</a></li>
              <li><a href="#faculty" className="hover:text-white transition-colors">Ex-IITian Educators</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Pedagogy & 4-Stage Cycle</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Results & Milestones</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Campus Location & Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Programs */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Programs
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 leading-relaxed">
              {COURSES.map(c => (
                <li key={c.id}>
                  <a href="#courses" className="hover:text-white transition-colors">
                    {c.title} ({c.target})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Admissions & Accreditation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Haldia Admissions
            </h4>
            <div className="p-4 rounded-2xl bg-navy-light/70 border border-slate-700/60 text-xs text-slate-300 space-y-2 leading-relaxed">
              <div className="font-bold text-white">Academic Session {ACADEMY_CONFIG.academicYear}</div>
              <p className="text-slate-400">
                Direct walk-in registration available Monday to Saturday at our Haldia Central Campus.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onEnquireClick()}
                  className="w-full py-2 px-3 rounded-lg bg-electric text-white text-xs font-bold hover:bg-electric-hover transition-colors"
                >
                  Register for Upcoming Batch
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Admin Leads Link & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} HALDIA LEARNING ACADEMY. All rights reserved. Haldia, West Bengal.
          </div>

          <div className="flex items-center gap-6">
            {/* Discreet Admin Leads Link */}
            <button
              onClick={onOpenAdminLeads}
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
              title="View student enquiry leads saved in this browser (Shortcut: Ctrl + Shift + A)"
            >
              <Database className="w-3.5 h-3.5 text-teal" />
              <span>Admin Leads Portal</span>
            </button>

            <span className="text-slate-700">•</span>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}
