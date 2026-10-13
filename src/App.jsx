import React, { useState, useEffect } from 'react';
import InteractiveLanding from './components/InteractiveLanding';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactCounterStrip from './components/ImpactCounterStrip';
import AboutSection from './components/AboutSection';
import Courses from './components/Courses';
import ClassTimetable from './components/ClassTimetable';
import WhyChooseUs from './components/WhyChooseUs';
import LearningMethodology from './components/LearningMethodology';
import Faculty from './components/Faculty';
import ClassroomGallery from './components/ClassroomGallery';
import ApproachToJEE from './components/ApproachToJEE';
import StudyResources from './components/StudyResources';
import EnquirySection from './components/EnquirySection';
import ContactFooter from './components/ContactFooter';
import EnquiryModal from './components/EnquiryModal';
import SyllabusModal from './components/SyllabusModal';
import AdminLeadsModal from './components/AdminLeadsModal';
import Toast from './components/Toast';
import { ACADEMY_CONFIG } from './data/academyData';

function App() {
  // Check if visitor has already dismissed landing in this session
  const [hasEnteredSite, setHasEnteredSite] = useState(() => {
    try {
      return sessionStorage.getItem('hla_has_entered') === 'true';
    } catch (e) {
      return false;
    }
  });

  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);
  
  const [isSyllabusModalOpen, setIsSyllabusModalOpen] = useState(false);
  const [selectedCourseForSyllabus, setSelectedCourseForSyllabus] = useState(null);

  const [isAdminLeadsOpen, setIsAdminLeadsOpen] = useState(false);

  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleEnterSite = () => {
    try {
      sessionStorage.setItem('hla_has_entered', 'true');
    } catch (e) {}
    setHasEnteredSite(true);
  };

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

      {/* PHASE 3: Dedicated Full-Screen Interactive Landing Experience */}
      {!hasEnteredSite && (
        <InteractiveLanding onEnter={handleEnterSite} />
      )}

      {/* PHASE 4: Complete Coaching Website */}
      {/* Sticky Navigation Bar */}
      <Navbar onEnquireClick={() => openEnquiryModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Section 1: Main Hero */}
        <Hero 
          onExploreCourses={scrollToCourses}
          onEnquireClick={() => openEnquiryModal()}
        />

        {/* Impact Counter Strip */}
        <ImpactCounterStrip />

        {/* Section 2: About the Institute */}
        <AboutSection />

        {/* Section 3: Courses and Programs */}
        <Courses 
          onSelectCourse={(courseId) => openEnquiryModal(courseId)} 
          onOpenTimelineModal={(courseId) => openSyllabusModal(courseId)}
        />

        {/* Section 8: Downloadable Class Timetable with Live PDF Generator */}
        <ClassTimetable 
          onEnquireClick={() => openEnquiryModal()}
        />

        {/* Section 4: Faculty and Teachers */}
        <Faculty 
          onEnquireClick={() => openEnquiryModal()} 
        />

        {/* Section 5: Student Gallery and Classroom Photography */}
        <ClassroomGallery />

        {/* Section 7: Teaching Experience and 5-Stage Learning Methodology */}
        <WhyChooseUs 
          onEnquireClick={() => openEnquiryModal()} 
        />

        <LearningMethodology 
          onEnquireClick={() => openEnquiryModal()}
        />

        {/* Section 6: Results and Achievements / Commitment to JEE Preparation */}
        <ApproachToJEE 
          onEnquireClick={() => openEnquiryModal()}
        />

        {/* Section 9 & 10: Study Materials, Resources & Official Notice Board */}
        <StudyResources 
          onEnquireClick={() => openEnquiryModal()}
        />

        {/* Section 12: Admission Enquiry Form */}
        <EnquirySection 
          selectedCourseId={selectedCourseForModal}
          onResetCourseSelection={() => setSelectedCourseForModal(null)}
          onSuccessLead={handleLeadSuccess}
        />

      </main>

      {/* Section 13, 14 & 15: FAQ Accordion, Contact & Location, and Footer */}
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
