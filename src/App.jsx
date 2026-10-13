import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactCounterStrip from './components/ImpactCounterStrip';
import AboutSection from './components/AboutSection';
import Courses from './components/Courses';
import WhyChooseUs from './components/WhyChooseUs';
import LearningMethodology from './components/LearningMethodology';
import Faculty from './components/Faculty';
import ApproachToJEE from './components/ApproachToJEE';
import EnquirySection from './components/EnquirySection';
import ContactFooter from './components/ContactFooter';
import EnquiryModal from './components/EnquiryModal';
import SyllabusModal from './components/SyllabusModal';
import AdminLeadsModal from './components/AdminLeadsModal';
import Toast from './components/Toast';
import { ACADEMY_CONFIG } from './data/academyData';

function App() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);
  
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState(null);

  const [isAdminLeadsOpen, setIsAdminLeadsOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Keyboard shortcut listener for Ctrl + Shift + A (Admin Leads Modal)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsAdminLeadsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openEnquiryModal = (courseId = null) => {
    setSelectedCourseForModal(courseId);
    setIsEnquiryModalOpen(true);
  };

  const openSyllabusModal = (courseId) => {
    setSelectedCourseForSyllabus(courseId);
    setIsSyllabusModalOpen(true);
  };

  const handleLeadSuccess = (lead) => {
    setToastMessage(`Saved lead for "${lead.studentName}" into browser local database.`);
    setIsToastVisible(true);
  };

  const scrollToCourses = () => {
    const coursesElem = document.getElementById('courses');
    if (coursesElem) {
      const navOffset = 70;
      const elementPosition = coursesElem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased font-sans">
      
      {/* Toast Notification */}
      <Toast 
        message={toastMessage} 
        isVisible={isToastVisible} 
        onClose={() => setIsToastVisible(false)} 
      />

      {/* Sticky Navigation Bar */}
      <Navbar onEnquireClick={() => openEnquiryModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Section: Hero */}
        <Hero 
          onExploreCourses={scrollToCourses}
          onEnquireClick={() => openEnquiryModal()}
        />

        {/* Section: Animated Impact Counter Strip */}
        <ImpactCounterStrip />

        {/* Section B: About Us & Academic Philosophy */}
        <AboutSection />

        {/* Section C: Courses with Interactive Timeline & Batch Badges */}
        <Courses 
          onSelectCourse={(courseId) => openEnquiryModal(courseId)} 
          onOpenTimelineModal={(courseId) => openSyllabusModal(courseId)}
        />

        {/* Section D: Why Choose Us (Pedagogy & 4-Stage Cycle) */}
        <WhyChooseUs 
          onEnquireClick={() => openEnquiryModal()} 
        />

        {/* Section E: 5-Stage Systematic Learning Methodology */}
        <LearningMethodology 
          onEnquireClick={() => openEnquiryModal()}
        />

        {/* Section F: Faculty with Verified Senior Educator Credentials */}
        <Faculty 
          onEnquireClick={() => openEnquiryModal()} 
        />

        {/* Section G: Our Approach to JEE Preparation (6 Pillars & Diagnostic Session) */}
        <ApproachToJEE 
          onEnquireClick={() => openEnquiryModal()}
        />

        {/* Section: Comprehensive On-Page Admission Enquiry */}
        <EnquirySection 
          selectedCourseId={selectedCourseForModal}
          onResetCourseSelection={() => setSelectedCourseForModal(null)}
          onSuccessLead={handleLeadSuccess}
        />

      </main>

      {/* Section: Contact, FAQs & Footer with Admin Link */}
      <ContactFooter 
        onEnquireClick={() => openEnquiryModal()}
        onOpenAdminLeads={() => setIsAdminLeadsOpen(true)}
      />

      {/* Interactive Popup Enquiry Modal with Smart WhatsApp Schedule Dispatch */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        preselectedCourseId={selectedCourseForModal}
        onSuccessLead={handleLeadSuccess}
        onOpenSyllabusModal={(courseId) => openSyllabusModal(courseId)}
      />

      {/* Interactive Batch Roadmap, Chapter Timeline & Auto PDF Download Modal */}
      <SyllabusModal
        isOpen={isSyllabusModalOpen}
        onClose={() => setIsSyllabusModalOpen(false)}
        courseId={selectedCourseForSyllabus}
        onEnquireClick={(courseId) => openEnquiryModal(courseId)}
      />

      {/* Local Admin Leads Dashboard Modal */}
      <AdminLeadsModal
        isOpen={isAdminLeadsOpen}
        onClose={() => setIsAdminLeadsOpen(false)}
      />

    </div>
  );
}

export default App;
