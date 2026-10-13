import React, { useState } from 'react';
import { Camera, Eye, Filter, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { CLASSROOM_GALLERY_IMAGES } from '../data/studyResourcesData';
import { ACADEMY_CONFIG } from '../data/academyData';

const CATEGORIES = ['All', 'Classroom Learning', 'Doubt Resolution', 'CBT Examination Lab', 'Teaching Methodology', 'Self Study & Library'];

export default function ClassroomGallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = activeCategory === 'All'
    ? CLASSROOM_GALLERY_IMAGES
    : CLASSROOM_GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-softBg border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-royalBlue font-bold text-xs uppercase tracking-widest mb-3">
            <Camera className="w-3.5 h-3.5 text-royalBlue" />
            <span>Section 5: Learning Environment</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-midnight tracking-tight">
            Classroom & Academic Infrastructure
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Take a look inside our focused learning environments at Haldia Central Campus: air-conditioned lecture halls, personal faculty doubt cabins, and an NTA-simulated CBT computer terminal lab.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-midnight text-white shadow-md shadow-midnight/20 scale-105'
                    : 'bg-white text-slate-600 hover:text-midnight hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6 Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                
                {/* Badge on Image */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-midnight/90 backdrop-blur-md text-gold text-xs font-bold border border-gold/20 shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Quick Expand Icon */}
                <div className="absolute bottom-4 right-4 w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Caption Content */}
              <div className="p-6">
                <span className="text-[11px] font-bold text-royalBlue uppercase tracking-wider block mb-1.5">
                  {item.category}
                </span>
                <h3 className="text-lg font-bold text-midnight group-hover:text-royalBlue transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="px-6 py-3 bg-softBg border-t border-slate-100 text-[11px] font-semibold text-slate-500 flex items-center justify-between">
                <span>Haldia Central Campus</span>
                <span className="text-royalBlue font-bold">Inspect Environment</span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox Viewer */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-midnight/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
            onClick={() => setSelectedImage(null)}
          >
            <div 
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-slate-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-80 sm:h-96">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-midnight/80 text-white flex items-center justify-center hover:bg-midnight transition-colors cursor-pointer"
                  aria-label="Close image lightbox"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 sm:p-8 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-royalBlue">
                    {selectedImage.category} • Haldia Central Campus
                  </span>
                  <span className="px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-bold border border-gold/20">
                    {selectedImage.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-midnight">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed pt-1">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
