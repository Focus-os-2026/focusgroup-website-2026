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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              <ProjectGalleryBox 
                title="The Laughing Cow" 
                images={[
                  "/Event Organizer_1.jpeg",
                  "/Event Organizer_2.jpeg"
                ]} 
                delay={0.1} 
              />
              <ProjectGalleryBox 
                title="Tech Innovation Summit" 
                images={[
                  "/Event Organizer_3.jpeg",
                  "/Event Organizer_4.jpeg"
                ]} 
                delay={0.2} 
              />
              <ProjectGalleryBox 
                title="Luxury Brand Launch" 
                images={[
                  "/Event Organizer_5.jpeg",
                  "/Event Organizer_6.jpeg"
                ]} 
                delay={0.3} 
              />
              <ProjectGalleryBox 
                title="Global Esports Arena" 
                images={[
                  "/Event Organizer_7.jpeg",
                  "/Event Organizer_8.jpeg"
                ]} 
                delay={0.4} 
              />
              <ProjectGalleryBox 
                title="Corporate Gala Dinner" 
                images={[
                  "/Event Organizer_1.jpeg",
                  "/Event Organizer_3.jpeg"
                ]} 
                delay={0.1} 
              />
              <ProjectGalleryBox 
                title="Automotive Expo" 
                images={[
                  "/Event Organizer_2.jpeg",
                  "/Event Organizer_4.jpeg"
                ]} 
                delay={0.2} 
              />
              <ProjectGalleryBox 
                title="Art & Culture Fair" 
                images={[
                  "/Event Organizer_5.jpeg",
                  "/Event Organizer_7.jpeg"
                ]} 
                delay={0.3} 
              />
              <ProjectGalleryBox 
                title="Wellness Retreat" 
                images={[
                  "/Event Organizer_6.jpeg",
                  "/Event Organizer_8.jpeg"
                ]} 
                delay={0.4} 
              />
            </div>
          </div>

          {/* Services Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-32">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-3xl font-bold mb-6">Our Approach</h2>
                <p className="text-lg text-slate-600 mb-8">
                  At Focusgroup Studio, we believe that every event is a unique story waiting to be told. Our systematic approach ensures that every detail, from the initial concept to the final applause, is handled with meticulous care.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { title: "Concept Development", desc: "Creating unique themes and experiences that resonate." },
                    { title: "Technical Planning", desc: "Detailed audio-visual and structural engineering." },
                    { title: "On-site Management", desc: "Seamless execution with professional crew." },
                    { title: "Post-event Analysis", desc: "Comprehensive reporting and feedback loop." }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                      <CheckCircle2 className="w-6 h-6 text-sky-600 mb-4" />
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-6">Expertise</h2>
                <div className="space-y-4">
                  {[
                    "Music Festivals & Concerts",
                    "Corporate Conferences & Seminars",
                    "Product Launches & Brand Activations",
                    "Gala Dinners & Award Ceremonies",
                    "Exhibition & Trade Show Management"
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 bg-white/50 rounded-xl border border-slate-200">
                      <div className="w-2 h-2 rounded-full bg-sky-600" />
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="space-y-8">
              <div className="p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Project Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Calendar className="w-6 h-6 text-sky-400 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-sm">Timeline</p>
                      <p className="font-medium">4-6 Months Planning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-sky-400 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-sm">Capacity</p>
                      <p className="font-medium">Up to 10,000+ Attendees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-sky-400 shrink-0" />
                    <div>
                      <p className="text-slate-400 text-sm">Location</p>
                      <p className="font-medium">Global Coverage</p>
                    </div>
                  </div>
                </div>
                <Button className="w-full mt-10 bg-sky-500 hover:bg-sky-600 text-white rounded-full h-14 text-lg">
                  Start Your Event
                </Button>
              </div>
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
