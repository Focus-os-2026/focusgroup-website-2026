import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, Zap, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function ProjectSection({ 
  title, 
  category, 
  images, 
  description, 
  onImageClick, 
  delay 
}: { 
  title: string, 
  category: string, 
  images: string[],
  description?: string,
  onImageClick: (images: string[], index: number) => void,
  delay: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="py-16 border-b border-slate-200 last:border-b-0"
    >
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Text Info */}
        <div className="w-full lg:w-1/4 space-y-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            {category}
          </span>
          <h3 className="text-3xl font-extrabold text-slate-900 leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        {/* 6 Image Grid */}
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square overflow-hidden rounded-3xl bg-slate-100 shadow-sm border border-slate-200/50 group cursor-zoom-in relative"
                onClick={() => onImageClick(images, idx)}
              >
                <img 
                  src={img} 
                  alt={`${title} - ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold tracking-wider bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">View Photo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function EventOrganizerPage() {
  const [activeProjectImages, setActiveProjectImages] = useState<string[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openLightbox = (images: string[], index: number) => {
    setActiveProjectImages(images);
    setActiveImageIndex(index);
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev! + 1) % activeProjectImages.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeImageIndex !== null) {
      setActiveImageIndex((prev) => (prev! - 1 + activeProjectImages.length) % activeProjectImages.length);
    }
  };

  return (
    <div className="min-h-screen bg-[#F2F0EB] text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-900 hover:text-sky-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold">Back to Home</span>
          </Link>
          <div className="text-xl font-black tracking-tighter">
            FOCUSGROUP<span className="text-sky-600">STUDIO</span>
          </div>
          <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
            <Button className="bg-slate-900 text-white rounded-full px-6 hover:bg-slate-800 transition-colors">Contact Us</Button>
          </a>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-widest mb-6">
                <Zap className="w-3 h-3" /> Core Service
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Event Organizer
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                We manage large-scale events from concept to execution, covering concerts, festivals, corporate events, and conferences. We bring your vision to life with precision and creativity.
              </p>
            </motion.div>
          </div>

          {/* Project Sections List */}
          <div className="space-y-12 mb-20">
            <ProjectSection 
              title="มหกรรมนิยายนานาชาติ 2025"
              category="Book Expo & Festival"
              description="Large-scale book exhibition and interactive fan experience, featuring custom-themed stages, publisher booths, and immersive reader zones."
              images={[
                "/images/projects/novel-1.jpg",
                "/images/projects/novel-2.jpg",
                "/images/projects/novel-3.jpg",
                "/images/projects/novel-4.jpg",
                "/images/projects/novel-5.jpg",
                "/images/projects/novel-6.jpg"
              ]}
              onImageClick={openLightbox}
              delay={0.1}
            />

            <ProjectSection 
              title="Fenty Skin"
              category="Brand Launch & Booth Setup"
              description="Premium cosmetic display booth featuring clean minimalist aesthetics, interactive product trial zones, and elegant neon-lit photography backdrops."
              images={[
                "/images/projects/fenty-1.jpg",
                "/images/projects/fenty-2.jpg",
                "/images/projects/fenty-3.jpg",
                "/images/projects/fenty-4.jpg",
                "/images/projects/fenty-5.jpg",
                "/images/projects/fenty-6.jpg"
              ]}
              onImageClick={openLightbox}
              delay={0.2}
            />

            <ProjectSection 
              title="Hirono @ Siam Square"
              category="Pop-up Store & Exhibition"
              description="Art toys pop-up exhibition in Siam Square, featuring giant character installations, custom concrete-style architectural structures, and fan experiential galleries."
              images={[
                "/images/projects/hirono-1.jpg",
                "/images/projects/hirono-2.jpg",
                "/images/projects/hirono-3.jpg",
                "/images/projects/hirono-4.jpg",
                "/images/projects/hirono-5.jpg",
                "/images/projects/hirono-6.jpg"
              ]}
              onImageClick={openLightbox}
              delay={0.3}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500">© 2026 FOCUSGROUP STUDIO. All rights reserved.</p>
        </div>
      </footer>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-md"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 text-white hover:text-sky-400 p-2 transition-colors cursor-pointer"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button 
              className="absolute left-6 text-white hover:text-sky-400 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all cursor-pointer"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button 
              className="absolute right-6 text-white hover:text-sky-400 p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all cursor-pointer"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Lightbox Image */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-4xl max-h-[80vh] flex flex-col items-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeProjectImages[activeImageIndex]} 
                alt="Enlarged gallery view" 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Indicator */}
              <p className="text-center text-slate-400 text-sm mt-4 tracking-wider">
                {activeImageIndex + 1} / {activeProjectImages.length}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
