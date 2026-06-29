import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, CheckCircle2, Calendar, Users, MapPin, Zap, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ProjectGalleryBox({ title, images, delay }: { title: string, images: string[], delay: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000 + Math.random() * 2000); // Randomize slightly for visual variety
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-3xl aspect-square bg-slate-200 shadow-lg cursor-pointer"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
      
      {/* Title */}
      <div className="absolute bottom-0 left-0 p-6 z-10">
        <h4 className="text-white font-bold text-lg md:text-xl leading-tight group-hover:text-sky-400 transition-colors">
          {title}
        </h4>
        <div className="w-8 h-1 bg-sky-500 mt-2 rounded-full group-hover:w-16 transition-all duration-300" />
      </div>

      {/* Navigation Indicators */}
      <div className="absolute top-4 right-4 flex gap-1 z-10">
        {images.map((_, i) => (
          <div 
            key={i} 
            className={`h-1 rounded-full transition-all duration-300 ${
              i === currentIndex ? "w-4 bg-white" : "w-1 bg-white/40"
            }`} 
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function EventOrganizerPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <Button className="bg-slate-900 text-white rounded-full px-6">Contact Us</Button>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="max-w-4xl mb-20">
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
              <p className="text-2xl text-slate-600 leading-relaxed">
                We manage large-scale events from concept to execution, covering concerts, festivals, corporate events, and conferences. We bring your vision to life with precision and creativity.
              </p>
            </motion.div>
          </div>

          {/* Project Showcase - 8 Boxes */}
          <div className="mb-32">
            <div className="flex items-end justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
                <p className="text-slate-600 max-w-xl">A glimpse into some of our most successful event productions and creative executions.</p>
              </div>
              <div className="hidden md:flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full border-slate-300"><ChevronLeft className="w-4 h-4" /></Button>
                <Button variant="outline" size="icon" className="rounded-full border-slate-300"><ChevronRight className="w-4 h-4" /></Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <ProjectGalleryBox 
                title="มหกรรมนิยายนานาชาติ 2025" 
                images={[
                  "/Event Organizer_1.jpeg",
                  "/Event Organizer_2.jpeg",
                  "/Event Organizer_3.jpeg",
                  "/Event Organizer_4.jpeg",
                  "/Event Organizer_5.jpeg",
                  "/Event Organizer_6.jpeg"
                ]} 
                delay={0.1} 
              />
              <ProjectGalleryBox 
                title="Fenty Skin" 
                images={[
                  "/fenty-1.jpg",
                  "/Event Organizer_1.jpeg",
                  "/Event Organizer_2.jpeg",
                  "/Event Organizer_3.jpeg",
                  "/Event Organizer_4.jpeg",
                  "/Event Organizer_5.jpeg"
                ]} 
                delay={0.2} 
              />
              <ProjectGalleryBox 
                title="Hirono @ Siam Square" 
                images={[
                  "/hirono-1.jpg",
                  "/hirono-2.jpg",
                  "/hirono-3.jpg",
                  "/hirono-4.jpg",
                  "/Event Organizer_7.jpeg",
                  "/Event Organizer_8.jpeg"
                ]} 
                delay={0.3} 
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-500">© 2026 FOCUSGROUP STUDIO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
