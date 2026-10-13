import React, { useState, useEffect } from 'react';
import { GraduationCap, Menu, X, Phone, MessageSquare, ArrowRight, Trophy } from 'lucide-react';
import { ACADEMY_CONFIG } from '../data/academyData';

export default function Navbar({ onEnquireClick }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Courses', href: '#courses' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Our Approach', href: '#approach' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5' 
        : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100'
    }`}>
      {/* Top micro-bar for quick announcements */}
      <div className="hidden lg:block bg-midnight text-white text-xs py-1.5 px-4 mb-2 -mt-3.5">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span>Admissions Open for Academic Year {ACADEMY_CONFIG.academicYear} • Haldia Central Campus</span>
          </div>
          <div className="flex items-center gap-6 text-slate-300">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3 h-3 text-gold" />
              <span>{ACADEMY_CONFIG.contact.displayPhone}</span>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Daily Doubt Hours: 10:00 AM – 7:30 PM</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Academy Logo */}
          <a 
            href="#home" 
            onClick={(e) => handleLinkClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-royalBlue rounded-lg cursor-pointer"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-midnight to-deepBlue flex items-center justify-center text-white shadow-md shadow-midnight/20 group-hover:scale-105 transition-transform duration-200 border border-slate-700/30">
              <GraduationCap className="w-6 h-6 text-gold" />
            </div>
            <div>
              <div className="font-extrabold text-lg sm:text-xl tracking-tight text-midnight leading-none">
                HALDIA <span className="text-royalBlue">LEARNING</span>
              </div>
              <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-500 uppercase mt-0.5">
                ACADEMY • HALDIA
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2 rounded-lg text-sm font-bold text-slate-700 hover:text-royalBlue hover:bg-softBg transition-colors duration-150 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Button & WhatsApp shortcut */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${ACADEMY_CONFIG.contact.whatsappNumber}?text=Hello%20Haldia%20Learning%20Academy%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20for%20the%20Haldia%20campus.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-royalBlue hover:bg-softBg transition-colors duration-150 border border-slate-200"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={() => onEnquireClick()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-royalBlue text-white text-sm font-bold shadow-md shadow-royalBlue/25 hover:bg-royalBlue-hover active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onEnquireClick()}
              className="px-3.5 py-1.5 rounded-xl bg-royalBlue text-white text-xs font-bold shadow-sm cursor-pointer"
            >
              Enquire
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-royalBlue cursor-pointer"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-200/80 pb-4 space-y-1 animate-fadeIn bg-white/95 rounded-2xl p-2 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-4 py-2.5 rounded-xl text-base font-semibold text-slate-700 hover:text-electric hover:bg-slate-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 px-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnquireClick();
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-orange text-white font-bold text-center shadow-md shadow-orange/20"
              >
                <span>Enquire Now for {ACADEMY_CONFIG.academicYear}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
