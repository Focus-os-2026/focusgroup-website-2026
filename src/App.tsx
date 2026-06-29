import { motion, AnimatePresence, useMotionValue, useTransform, animate, useInView } from "motion/react";
import { 
  Layout, 
  TrendingUp, 
  ShoppingCart, 
  Headphones, 
  ArrowRight, 
  Play,
  CheckCircle2,
  Menu,
  X,
  Calendar,
  Video,
  Radio,
  MonitorSmartphone,
  Target,
  Zap,
  Layers,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  MapPin
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import EventOrganizerPage from "./pages/EventOrganizer";

function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-sky-500/30">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-950/80 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <img src="/logo small_02.png" alt="FocusGroup Studio" className="h-10 md:h-12 object-contain" />
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 shadow-lg shadow-sky-500/20">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>

          <button 
            className="md:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4"
          >
            {["Home", "Services", "Portfolio", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-lg font-medium text-slate-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="bg-sky-500 w-full mt-2">Get Started</Button>
            </a>
          </motion.div>
        )}
      </nav>

      <main className="relative z-10">
        {/* Hero & Services with Background */}
        <div className="relative">
          {/* Background Image for this section */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <div className="absolute inset-0 bg-slate-950" />
            <div className="absolute inset-0 opacity-80">
              <img 
                src="/hero_03.jpg" 
                alt="Background" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Fade out at the bottom to transition to the rest of the page */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-600/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10">
            {/* Hero Section */}
            <section className="pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
              <div className="container mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block py-1 px-4 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold mb-6 tracking-wider uppercase">
                    Event Organizer • Media Production • Equipment Supply
                  </span>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                    FOCUSGROUP<br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 text-glow">STUDIO</span>
                  </h1>
                  <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
                    Creative Production & Event Experiences<br className="hidden md:block" />
                    That Connect Brands with People
                    <br /><br />
                    <span className="text-[17px] text-slate-300 block max-w-4xl mx-auto">
                      From concept to reality — we blend creativity with strategy<br />
                      to deliver impactful events that bring your brand to life.
                    </span>
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#portfolio">
                      <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8 h-14 text-lg shadow-xl shadow-sky-500/25">
                        View Works <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                    <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-white/10 hover:bg-white/5 text-[#001d5b]">
                        Start Project
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Spacer Section */}
            <div className="h-24 md:h-48" />

            {/* Features Section */}
            <section id="services" className="py-24 md:py-32 relative">
              <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <FeatureCard 
                    icon={<Calendar className="w-6 h-6" />}
                    title="Event Organizer"
                    subtitle="Full-Service Planning & Execution"
                    description={[
                      "We handle every stage from concept to on-site delivery, ensuring every event runs seamlessly and leaves a lasting impression."
                    ]}
                    delay={0.1}
                    href="#organizer"
                  />
                  <FeatureCard 
                    icon={<Layers className="w-6 h-6" />}
                    title="Event Supply"
                    subtitle="Equipment, Structure & On-Site Production"
                    description={[
                      "Professional staging, lighting, sound, and technical setups — managed end-to-end for flawless execution."
                    ]}
                    delay={0.2}
                    href="#supply"
                  />
                  <FeatureCard 
                    icon={<Video className="w-6 h-6" />}
                    title="Media Production"
                    subtitle="Video, Motion Graphic & Visual Design"
                    description={[
                      "High-quality content crafted to elevate your brand across every platform."
                    ]}
                    delay={0.3}
                    href="#media"
                  />
                  <FeatureCard 
                    icon={<Layout className="w-6 h-6" />}
                    title="Booth & Exhibition"
                    subtitle="Design, Production & Installation"
                    description={[
                      "Eye-catching booths built to showcase your brand with bold visuals and smart functionality."
                    ]}
                    delay={0.4}
                    href="#booth"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Stats Section */}
        <section className="py-20 bg-white border-y border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 bg-sky-500/5 blur-[100px] rounded-full" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              <StatItem value="160+" label="Events" />
              <StatItem value="60K+" label="Designs" />
              <StatItem value="200+" label="Videos" />
              <StatItem value="100+" label="Live Productions" />
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-24 bg-white overflow-hidden border-b border-slate-100">
          <div className="container mx-auto px-6 mb-16 text-center">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-[0.4em] mb-4">Our Partners</h2>
            <p className="text-3xl md:text-4xl font-bold text-slate-900">Trusted by Global Brands</p>
          </div>
          
          <div className="flex flex-col gap-8">
            <LogoRow 
              logos={[
                "/Clients_1.png", "/Clients_2.png", "/Clients_3.png", "/Clients_4.png", "/Clients_5.png",
                "/Clients_6.png", "/Clients_7.png", "/Clients_8.png", "/Clients_9.png", "/Clients_10.png"
              ]} 
              speed={40} 
            />
            <LogoRow 
              logos={[
                "/Clients_11.png", "/Clients_12.png", "/Clients_13.png", "/Clients_14.png", "/Clients_15.png",
                "/Clients_16.png", "/Clients_17.png", "/Clients_18.png", "/Clients_19.png", "/Clients_20.png"
              ]} 
              reverse 
              speed={45} 
            />
            <LogoRow 
              logos={[
                "/Clients_21.png", "/Clients_22.png", "/Clients_23.png", "/Clients_24.png", "/Clients_25.png",
                "/Clients_26.png", "/Clients_27.png", "/Clients_28.png", "/Clients_29.png", "/Clients_30.png"
              ]} 
              speed={42} 
            />
            <LogoRow 
              logos={[
                "/Clients_31.png", "/Clients_32.png", "/Clients_33.png", "/Clients_34.png", "/Clients_35.png",
                "/Clients_36.png", "/Clients_37.png", "/Clients_38.png", "/Clients_39.png"
              ]} 
              reverse 
              speed={48} 
            />
          </div>
        </section>

        {/* Works Section */}
        <section id="portfolio" className="py-24 md:py-32 relative bg-[#F2F0EB]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">Our Portfolio</h2>
              <p className="text-slate-600 max-w-[1000px] mx-auto text-[17px] font-normal">Showcasing our work across event production, media, and immersive brand experiences.</p>
            </div>
            <div className="space-y-32">
              <PortfolioItem 
                id="organizer"
                title="Event Organizer" 
                description="We manage large-scale events from concept to execution, covering concerts, festivals, corporate events, and conferences. We bring your vision to life with precision and creativity."
                images={[
                  "/images/projects/novel-1.jpg",
                  "/images/projects/novel-2.jpg",
                  "/images/projects/novel-3.jpg",
                  "/images/projects/fenty-1.jpg",
                  "/images/projects/fenty-2.jpg",
                  "/images/projects/fenty-3.jpg",
                  "/images/projects/hirono-1.jpg",
                  "/images/projects/hirono-2.jpg",
                  "/images/projects/hirono-3.jpg"
                ]} 
                delay={0.1} 
                primaryButtonText="View Projects"
                showSecondaryButton={false}
                link="/event-organizer"
              />
              <PortfolioItem 
                id="supply"
                title="Event Supply" 
                description="Professional event equipment and on-site production, including staging, lighting, sound, and technical systems. Our high-end inventory ensures your event looks and sounds world-class."
                images={[
                  "/Event Supply_1.jpg",
                  "/Event Supply_2.jpg",
                  "/Event Supply_3.jpeg",
                  "/Event Supply_4.jpeg",
                  "/Event Supply_5.jpeg",
                  "/Event Supply_6.jpg",
                  "/Event Supply_7.jpeg",
                  "/Event Supply_1.jpg"
                ]} 
                delay={0.2} 
                primaryButtonText="View Projects"
                showSecondaryButton={false}
                reverse
              />
              <PortfolioItem 
                id="media"
                title="Media Production" 
                description="Creative content production across video, motion graphics, and visual design to enhance brand communication. We tell stories that resonate and drive engagement."
                images={[]} 
                youtubeIds={["Pv4kKCrR6Ow", "LZq2QiWzx5I", "t3NDTv8eMEU", "yuiBObMOt7o"]}
                delay={0.3} 
                primaryButtonText="View Projects"
                showSecondaryButton={false}
              />
              <PortfolioItem 
                id="booth"
                title="Booth & Exhibition" 
                description="Design and build exhibition booths and display spaces that create strong brand presence and engagement. We turn floor space into immersive brand destinations."
                images={[
                  "/Booth_8.jpg",
                  "/Booth_1.jpeg",
                  "/Booth_4.jpeg",
                  "/Booth_2.png",
                  "/Booth_7.jpeg",
                  "/Booth_3.png",
                  "/Booth_5.jpeg",
                  "/Booth_6.jpeg"
                ]} 
                delay={0.4} 
                primaryButtonText="View Projects"
                showSecondaryButton={false}
                reverse
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 md:py-48 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero_03.jpg" 
              alt="Background" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-bold mb-8 text-white leading-[1.1] tracking-tight"
              >
                Let's Build Your Next Big Moment
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-slate-300 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
              >
                Trusted by hundreds of leading brands to deliver their most memorable experiences.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-12 h-16 text-xl shadow-2xl shadow-sky-500/40 group">
                    Get Quote <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 relative bg-slate-950 overflow-hidden">
          <div className="absolute top-0 right-0 w-[30%] h-[30%] bg-sky-600/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-blue-600/5 blur-[120px] rounded-full" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-sm font-bold text-sky-500 uppercase tracking-[0.4em] mb-4">Contact</h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8">Get in touch with us</h3>
                <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
                  Have a project in mind? We'd love to hear from you. Send us a message and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                      <Phone className="w-6 h-6 text-sky-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Call Us</p>
                      <p className="text-xl font-semibold text-slate-200">+66 86 744 4616</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                      <Mail className="w-6 h-6 text-sky-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Email Us</p>
                      <p className="text-xl font-semibold text-slate-200">angkana@focusgroupstudio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                      <MapPin className="w-6 h-6 text-sky-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Visit Us</p>
                      <p className="text-xl font-semibold text-slate-200">Bangkok, Thailand</p>
                    </div>
                  </div>

                  <div className="pt-8">
                    <div className="inline-block p-4 bg-white rounded-[2rem] shadow-xl shadow-sky-500/10 group hover:scale-105 transition-transform duration-500">
                      <div className="w-40 h-40 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-100">
                        <img 
                          src="/Qrcode_PYim.png" 
                          alt="QR Code" 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-center text-slate-900 font-bold text-xs mt-3 tracking-widest uppercase">Scan to Connect</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-[3rem] shadow-2xl relative"
              >
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-500/10 blur-2xl rounded-full" />
                
                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Name</label>
                      <input 
                        type="text" 
                        placeholder="Your Name"
                        className="w-full bg-slate-800/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all duration-300 placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email</label>
                      <input 
                        type="email" 
                        placeholder="Your Email"
                        className="w-full bg-slate-800/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all duration-300 placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                    <input 
                      type="text" 
                      placeholder="Project Subject"
                      className="w-full bg-slate-800/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all duration-300 placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Message</label>
                    <textarea 
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full bg-slate-800/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all duration-300 placeholder:text-slate-600 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-2xl h-16 text-lg font-bold shadow-xl shadow-sky-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <img src="/logo small_02.png" alt="FocusGroup Studio" className="h-10 object-contain" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Creative Production & Event Experience That Connect Brands to People.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Services</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li><a href="#portfolio" className="hover:text-sky-400 transition-colors">Event Organizer</a></li>
                <li><a href="#portfolio" className="hover:text-sky-400 transition-colors">Event Supply</a></li>
                <li><a href="#portfolio" className="hover:text-sky-400 transition-colors">Media Production</a></li>
                <li><a href="#portfolio" className="hover:text-sky-400 transition-colors">Booth & Exhibition</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-sm text-slate-400">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-sky-400" />
                  </div>
                  <span className="text-base">+66 86 744 4616</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-sky-400" />
                  </div>
                  <span className="text-base">angkana@focusgroupstudio.com</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-slate-500 text-xs gap-4">
            <p>© 2026 FOCUSGROUP STUDIO. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-300">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300">Terms of Service</a>
              <a href="#" className="hover:text-slate-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, subtitle, description, delay, href, active = false }: { 
  icon: React.ReactNode, 
  title: string, 
  subtitle: string,
  description: string[], 
  delay: number, 
  href?: string,
  active?: boolean 
}) {
  const CardContent = (
    <Card className="h-full p-10 transition-all duration-500 border-white/20 group hover:-translate-y-2 flex flex-col bg-slate-800/50 backdrop-blur-md hover:bg-sky-600 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-600/20 text-slate-200 hover:text-white cursor-pointer">
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 bg-sky-500/20 text-sky-400 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110`}>
        {React.cloneElement(icon as React.ReactElement, { className: "w-8 h-8" })}
      </div>
      <h3 className={`text-2xl md:text-3xl font-bold mb-3 text-slate-100 group-hover:text-white transition-colors duration-500`}>{title}</h3>
      <p className={`text-base md:text-lg font-semibold mb-6 text-sky-300 group-hover:text-sky-100 transition-colors duration-500`}>
        {subtitle}
      </p>
      <div className={`space-y-4 flex-grow text-slate-300 group-hover:text-sky-50 transition-colors duration-500`}>
        {description.map((line, idx) => (
          <p key={idx} className="text-sm md:text-base leading-relaxed">
            {line}
          </p>
        ))}
      </div>
      <div className="mt-10 flex items-center gap-1.5">
        <div className={`w-2 h-2 rounded-full bg-sky-500 group-hover:bg-white transition-colors duration-500`} />
        <div className={`w-2 h-2 rounded-full opacity-40 bg-sky-500 group-hover:bg-white transition-colors duration-500`} />
        <div className={`w-2 h-2 rounded-full opacity-20 bg-sky-500 group-hover:bg-white transition-colors duration-500`} />
      </div>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      {href ? (
        <a href={href} className="block h-full">
          {CardContent}
        </a>
      ) : (
        CardContent
      )}
    </motion.div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Parse numeric value and suffix
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
  const suffix = value.replace(/[0-9.]/g, '');
  
  const count = useMotionValue(numericValue * 0.7); // Start from 70%
  const rounded = useTransform(count, (latest) => Math.round(latest));

  React.useEffect(() => {
    if (isInView) {
      animate(count, numericValue, {
        duration: 2.5,
        ease: "easeOut",
      });
    }
  }, [isInView, count, numericValue]);

  return (
    <div className="group" ref={ref}>
      <div className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors duration-500 flex items-center justify-center">
        <motion.span>{rounded}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-slate-500 uppercase tracking-widest text-xs font-bold">
        {label}
      </div>
    </div>
  );
}

function PortfolioItem({ title, description, images, videos, youtubeIds, delay, reverse = false, primaryButtonText = "View Case Study", showSecondaryButton = true, link, id }: { 
  title: string, 
  description: string, 
  images: string[], 
  videos?: string[],
  youtubeIds?: string[],
  delay: number,
  reverse?: boolean,
  primaryButtonText?: string,
  showSecondaryButton?: boolean,
  link?: string,
  id?: string
}) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
    >
      {/* Content Side */}
      <div className="w-full lg:w-[30%] space-y-8">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-widest">
            <Zap className="w-3 h-3" /> CORE SERVICE
          </div>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            {title}
          </h3>
          <p className="text-[15px] text-slate-600 leading-relaxed max-w-xl">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-4">
          {link ? (
            <Link to={link}>
              <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-12">
                {primaryButtonText}
              </Button>
            </Link>
          ) : (
            <Button className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 h-12">
              {primaryButtonText}
            </Button>
          )}
          {showSecondaryButton && (
            <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-slate-200 text-slate-900 hover:bg-slate-50 rounded-full px-8 h-12">
                Get a Quote
              </Button>
            </a>
          )}
        </div>
      </div>

      {/* Grid/Video Side */}
      <div className="w-full lg:w-[70%]">
        <div className={`rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-300/50 bg-slate-100 ${youtubeIds && youtubeIds.length > 0 ? (youtubeIds.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-0' : 'aspect-video') : (images.length === 9 ? 'grid grid-cols-3 gap-0' : 'grid grid-cols-2 sm:grid-cols-4 gap-0')}`}>
          {youtubeIds && youtubeIds.length > 0 ? (
            youtubeIds.map((id, i) => (
              <div key={i} className="aspect-video">
                <iframe 
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0`}
                  title={`${title} ${i + 1}`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))
          ) : videos && videos.length > 0 ? (
            videos.slice(0, 4).map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: delay + (i * 0.1) }}
                className="aspect-video overflow-hidden group bg-slate-100"
              >
                <video 
                  src={video} 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))
          ) : (
            images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: delay + (i * 0.05) }}
                className="aspect-square overflow-hidden group"
              >
                <img 
                  src={img} 
                  alt={`${title} ${i + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </motion.div>
  );
}

function LogoRow({ logos, reverse = false, speed = 40 }: { logos: string[], reverse?: boolean, speed?: number }) {
  return (
    <div className="flex overflow-hidden py-2 select-none">
      <motion.div
        animate={{
          x: reverse ? [0, -1500] : [-1500, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex flex-none gap-16 items-center"
      >
        {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
          <div key={i} className="w-32 h-12 md:w-40 md:h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-40 hover:opacity-100">
            <img 
              src={logo} 
              alt="Client Logo" 
              className="max-w-full max-h-full object-contain" 
              referrerPolicy="no-referrer" 
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/event-organizer" element={<EventOrganizerPage />} />
      </Routes>
    </BrowserRouter>
  );
}
