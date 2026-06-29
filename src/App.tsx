/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, 
  Calendar, 
  Video, 
  Monitor, 
  Layers, 
  CheckCircle2, 
  Briefcase, 
  Lightbulb, 
  Settings, 
  Play,
  Maximize,
  Mail,
  Phone,
  MapPin,
  Send
} from "lucide-react";

const FocusFrame = ({ children, className = "" }: { children: ReactNode, className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-brand-purple z-10"></div>
    <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-brand-purple z-10"></div>
    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-brand-purple z-10"></div>
    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-brand-purple z-10"></div>
    {children}
  </div>
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-white/90 backdrop-blur-sm border-b border-brand-gray/10">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex flex-col">
        <div className="text-2xl font-extrabold tracking-tight text-brand-charcoal leading-none">
          FOCUSGROUP<span className="text-brand-purple">.</span>
        </div>
        <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gray mt-1">
          From Concept to Experience
        </div>
      </div>
      <div className="hidden md:flex items-center gap-10 text-[13px] font-semibold uppercase tracking-widest text-brand-charcoal/70">
        <a href="#about" className="hover:text-brand-purple transition-colors">About</a>
        <a href="#services" className="hover:text-brand-purple transition-colors">Services</a>
        <a href="#portfolio" className="hover:text-brand-purple transition-colors">Portfolio</a>
        <a href="#contact" className="hover:text-brand-purple transition-colors">Contact</a>
      </div>
      <button className="bg-brand-charcoal text-brand-white px-7 py-2.5 rounded-lg text-[13px] font-bold uppercase tracking-widest hover:bg-brand-purple transition-colors">
        Contact Us
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-brand-charcoal">
    {/* Background Image with Overlay */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=2070" 
        alt="Live Event Lighting" 
        className="w-full h-full object-cover opacity-40 grayscale-[0.3]"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/60 via-transparent to-brand-charcoal"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-purple/20 backdrop-blur-md border border-brand-purple/30 rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-brand-purple animate-pulse"></div>
            <span className="text-brand-white text-[11px] font-bold uppercase tracking-[0.2em]">Creative Event & Experience Studio</span>
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-brand-white mb-8">
            We design <br />
            <span className="text-brand-purple italic">experiences,</span> <br />
            not just events.
          </h1>
          
          <p className="text-xl text-brand-gray max-w-2xl mb-12 leading-relaxed font-medium">
            FocusGroup Studio ไม่ใช่แค่บริษัทรับจัดงานหรือทำงานดีไซน์ แต่เป็นทีมที่ช่วย <span className="text-brand-white">“เปลี่ยนไอเดียให้กลายเป็นประสบการณ์จริง”</span>
          </p>
          
          <div className="flex flex-wrap gap-6">
            <a href="#portfolio" className="bg-brand-purple text-brand-white px-10 py-5 rounded-lg font-bold uppercase tracking-widest flex items-center gap-3 group hover:shadow-2xl hover:shadow-brand-purple/40 transition-all transform hover:-translate-y-1">
              View Our Work <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="bg-transparent border-2 border-brand-white text-brand-white px-10 py-5 rounded-lg font-bold uppercase tracking-widest hover:bg-brand-white hover:text-brand-charcoal transition-all transform hover:-translate-y-1">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
    
    {/* Scroll Indicator */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
    >
      <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gray/60">Scroll</div>
      <div className="w-[1px] h-12 bg-gradient-to-b from-brand-purple to-transparent"></div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-brand-white px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <FocusFrame>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1000" 
                alt="Creative Studio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </FocusFrame>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-brand-purple text-[11px] font-bold uppercase tracking-[0.3em] mb-6">Our Philosophy</div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-brand-charcoal leading-tight mb-8">
            Structured <br /> Creativity.
          </h2>
          <p className="text-xl text-brand-gray leading-relaxed mb-10 font-medium">
            เราเชื่อในการผสมผสานระหว่าง <span className="text-brand-charcoal">ความคิดสร้างสรรค์ที่ไร้ขีดจำกัด</span> เข้ากับ <span className="text-brand-charcoal">ระบบการทำงานที่เป็นมืออาชีพ</span> เพื่อสร้างประสบการณ์ที่จับต้องได้จริงและมีเอกลักษณ์เฉพาะตัวสำหรับทุกแบรนด์
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-extrabold text-brand-charcoal mb-1">10+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gray">ปีแห่งประสบการณ์</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-brand-charcoal mb-1">500+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gray">โปรเจกต์ที่สำเร็จ</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "Event & Experience",
      desc: "การบริหารจัดการอีเวนต์แบบครบวงจร ทั้งงานคอนเสิร์ต งานเปิดตัวสินค้า และนิทรรศการ",
      icon: Briefcase,
      items: ["ผู้จัดงานอีเวนต์", "เทศกาลดนตรี", "งานองค์กร", "นิทรรศการ"]
    },
    {
      title: "Creative & Design",
      desc: "การออกแบบอัตลักษณ์แบรนด์ กราฟิก และโมชันกราฟิกที่สร้างความโดดเด่น",
      icon: Layers,
      items: ["คีย์วิชวล", "การสร้างแบรนด์", "งานกราฟิก", "โมชันกราฟิก"]
    },
    {
      title: "Media Production",
      desc: "การสร้างสรรค์วิดีโอ แอนิเมชัน และคอนเทนต์มัลติมีเดียระดับพรีเมียม",
      icon: Video,
      items: ["การผลิตวิดีโอ", "แอนิเมชัน", "การสร้างคอนเทนต์"]
    },
    {
      title: "Digital & Platform",
      desc: "โซลูชันดิจิทัลสำหรับการถ่ายทอดสด ระบบลงทะเบียน และเว็บแอปพลิเคชัน",
      icon: Monitor,
      items: ["ไลฟ์สตรีมมิ่ง", "ระบบลงทะเบียน", "เว็บ/แอปพลิเคชัน"]
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-brand-lavender/30 border-y border-brand-gray/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center mb-6">
            <Maximize className="w-6 h-6 text-brand-purple" />
          </div>
          <h2 className="text-4xl font-extrabold text-brand-charcoal tracking-tight mb-4 uppercase">Our Services</h2>
          <p className="text-brand-gray max-w-lg font-medium">Comprehensive solutions for every stage of your experience.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 rounded-2xl bg-brand-white border border-brand-gray/10 hover:shadow-2xl hover:shadow-brand-charcoal/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-10 bg-brand-lavender text-brand-purple group-hover:bg-brand-purple group-hover:text-brand-white transition-colors duration-500">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-brand-charcoal mb-6">{service.title}</h3>
              <ul className="space-y-3">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-brand-gray font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-purple/40"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  
  const categories = ["All", "อีเวนต์ / เทศกาล", "งานองค์กร", "กราฟิก / วิชวลดีไซน์", "ออกแบบอีเวนต์ / แบรนด์", "บูธ / นิทรรศการ", "วิดีโอ / มีเดียโปรดักชัน", "กิจกรรม / อื่นๆ"];
  
  const projects = [
    // 1. EVENT / FESTIVAL
    { 
      title: "Siam Songkran", 
      category: "อีเวนต์ / เทศกาล", 
      desc: "การผลิตเทศกาลขนาดใหญ่ ครอบคลุมการออกแบบเวที แสง สี วิชวลเอฟเฟกต์ และการดำเนินงานหน้างานแบบครบวงจร",
      img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "LeoFest Pattaya", 
      category: "อีเวนต์ / เทศกาล", 
      desc: "การผลิตคอนเสิร์ตและเทศกาลเต็มรูปแบบ พร้อมการติดตั้งเวที ระบบแสง และการออกแบบประสบการณ์สำหรับผู้ชม",
      img: "https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Monster Music Fest", 
      category: "อีเวนต์ / เทศกาล", 
      desc: "การผลิตเทศกาลดนตรีแบบครบวงจร รวมถึงการตั้งค่าทางเทคนิค การควบคุมเวที และการจัดการประสบการณ์ฝูงชน",
      img: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "ช้าง พุ่งใต้ เฟส 2", 
      category: "อีเวนต์ / เทศกาล", 
      desc: "คอนเสิร์ตสร้างสรรค์แบรนด์ที่ผสมผสานการผลิตความบันเทิงเข้ากับประสบการณ์แคมเปญแบบบูรณาการ",
      img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Extravaganza", 
      category: "อีเวนต์ / เทศกาล", 
      desc: "การผลิตงานองค์กรระดับนานาชาติ พร้อมการนำเสนอบนเวที การแสดงสด และการออกแบบการมีส่วนร่วมของผู้ชม",
      img: "https://images.unsplash.com/photo-1540575861501-7c91211c889d?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Spectacular", 
      category: "อีเวนต์ / เทศกาล", 
      desc: "การผลิตงานที่สร้างผลกระทบสูง โดดเด่นด้วยการออกแบบเวที แสงสีเสียง และประสบการณ์การนำเสนอที่สมจริง",
      img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800" 
    },
    
    // 2. CORPORATE
    { 
      title: "SINO Conferences", 
      category: "งานองค์กร", 
      desc: "การผลิตงานประชุมองค์กร รวมถึงการติดตั้งเวที ระบบนำเสนอ และการดำเนินงานอีเวนต์อย่างมืออาชีพ",
      img: "https://images.unsplash.com/photo-1505373630572-2d1330ba58ba?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "SCG Press Conference", 
      category: "งานองค์กร", 
      desc: "การผลิตงานแถลงข่าวพร้อมการตั้งค่าสื่อ การออกแบบเวที และสภาพแวดล้อมการนำเสนอที่เน้นแบรนด์",
      img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800" 
    },
    
    // 3. GRAPHIC / EVENT VISUAL
    { 
      title: "พ.ร.บ.ทรมานฯ", 
      category: "กราฟิก / วิชวลดีไซน์", 
      desc: "การพัฒนาคีย์วิชวลและการออกแบบการสื่อสารในงานอีเวนต์เต็มรูปแบบสำหรับแคมเปญของรัฐบาล",
      img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "กรมคุ้มครองสิทธิฯ", 
      category: "กราฟิก / วิชวลดีไซน์", 
      desc: "การออกแบบวิชวลเชิงกลยุทธ์สำหรับแคมเปญสร้างความตระหนักรู้แก่สาธารณะ รวมถึงวัสดุสื่อสารในงาน",
      img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Green & Clean Hospital", 
      category: "กราฟิก / วิชวลดีไซน์", 
      desc: "อัตลักษณ์วิชวลและการออกแบบแคมเปญเพื่อสื่อสารมาตรฐานการดูแลสุขภาพและความตระหนักด้านสิ่งแวดล้อม",
      img: "https://images.unsplash.com/photo-1516542077369-6de03c15d746?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "วันอนามัยสิ่งแวดล้อมไทย", 
      category: "กราฟิก / วิชวลดีไซน์", 
      desc: "การออกแบบระบบวิชวลในงาน รวมถึงการสร้างแบรนด์ ป้ายสัญลักษณ์ และวัสดุสื่อสาร",
      img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800" 
    },
    
    // 4. EVENT DESIGN / BRAND
    { 
      title: "Premium Market 2568", 
      category: "ออกแบบอีเวนต์ / แบรนด์", 
      desc: "การออกแบบวิชวลในงานและระบบการสร้างแบรนด์สำหรับประสบการณ์ตลาดนัด",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Leadership Herbalife", 
      category: "ออกแบบอีเวนต์ / แบรนด์", 
      desc: "การออกแบบงานผู้นำองค์กร รวมถึงวิชวลบนเวที การสร้างแบรนด์ และสื่อนำเสนอ",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Spectacular Poster", 
      category: "ออกแบบอีเวนต์ / แบรนด์", 
      desc: "การออกแบบโปสเตอร์สร้างสรรค์สำหรับแคมเปญงานขนาดใหญ่พร้อมการเล่าเรื่องด้วยภาพที่ทรงพลัง",
      img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800" 
    },
    
    // 5. BOOTH / EXHIBITION
    { 
      title: "TSRI IP Fair", 
      category: "บูธ / นิทรรศการ", 
      desc: "การออกแบบและผลิตนิทรรศการแสดงนวัตกรรมและโครงการทรัพย์สินทางปัญญา",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "TSRI Techsauce", 
      category: "บูธ / นิทรรศการ", 
      desc: "การผลิตนิทรรศการเทคโนโลยีพร้อมบูธแบบโต้ตอบและการออกแบบประสบการณ์แบรนด์",
      img: "https://images.unsplash.com/photo-1582192730841-2a682d7375f9?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "มหกรรมนิยายนานาชาติ", 
      category: "บูธ / นิทรรศการ", 
      desc: "การผลิตนิทรรศการสำหรับงานระดับนานาชาติ รวมถึงการวางผังและการวางแผนประสบการณ์ผู้เข้าชม",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=800" 
    },
    
    // 6. VIDEO / MEDIA
    { 
      title: "พ.ร.บ.ทรมานฯ Opening", 
      category: "วิดีโอ / มีเดียโปรดักชัน", 
      desc: "การผลิตวิดีโอเปิดตัวพร้อมการเล่าเรื่องและการนำเสนอแบบภาพยนตร์สำหรับงานพิธีการ",
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Huawei CSR", 
      category: "วิดีโอ / มีเดียโปรดักชัน", 
      desc: "การผลิตวิดีโอ CSR ที่เน้นคุณค่าของแบรนด์และผลกระทบต่อสังคม",
      img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "VARON Serum Animation", 
      category: "วิดีโอ / มีเดียโปรดักชัน", 
      desc: "การผลิตวิดีโอแอนิเมชันผลิตภัณฑ์ เน้นคุณสมบัติและอัตลักษณ์ของแบรนด์",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" 
    },
    
    // 7. OTHER
    { 
      title: "Run for Life 1–3", 
      category: "กิจกรรม / อื่นๆ", 
      desc: "การผลิตงานวิ่ง รวมถึงการตั้งค่าเส้นทาง การจัดการกิจกรรม และประสบการณ์ของผู้เข้าร่วม",
      img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "25 Years Lucky Draw", 
      category: "กิจกรรม / อื่นๆ", 
      desc: "การผลิตงานฉลององค์กรพร้อมการออกแบบกิจกรรมและการมีส่วนร่วมของผู้ชม",
      img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" 
    },
  ];

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-32 px-6 bg-brand-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div>
            <div className="text-brand-purple text-[11px] font-bold uppercase tracking-[0.3em] mb-4">Our Work</div>
            <h2 className="text-5xl font-extrabold text-brand-charcoal tracking-tight">Highlight Projects</h2>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-full text-[12px] font-bold uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? "bg-brand-purple text-brand-white shadow-lg shadow-brand-purple/20" 
                    : "bg-brand-lavender text-brand-charcoal hover:bg-brand-gray/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div 
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 relative shadow-xl shadow-brand-charcoal/5">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-brand-charcoal/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <div className="w-10 h-10 rounded-full bg-brand-white flex items-center justify-center mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <ArrowRight className="w-5 h-5 text-brand-charcoal" />
                    </div>
                  </div>
                </div>
                <div className="px-2">
                  <h3 className={`text-xl font-extrabold mb-1 group-hover:text-brand-purple transition-colors ${project.title.match(/[ก-ฮ]/) ? 'font-body' : 'font-heading'}`}>
                    {project.title}
                  </h3>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gray">
                    {project.category}
                  </p>
                  <p className="mt-3 text-sm text-brand-gray leading-relaxed line-clamp-2 font-body">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    { title: "บริการแบบครบวงจร", desc: "ดูแลตั้งแต่เริ่มต้นวางแผนจนถึงวันจบงานอย่างมืออาชีพ" },
    { title: "ความคิดสร้างสรรค์ + โปรดักชัน", desc: "ทีมสร้างสรรค์และทีมผลิตทำงานร่วมกันเป็นหนึ่งเดียว" },
    { title: "ประสบการณ์การทำงานจริง", desc: "ประสบการณ์ตรงในการจัดการโปรดักชันขนาดใหญ่" },
    { title: "การบูรณาการออฟไลน์และออนไลน์", desc: "เชื่อมต่อประสบการณ์จริงและโลกดิจิทัลอย่างไร้รอยต่อ" }
  ];

  return (
    <section className="py-32 px-6 bg-brand-charcoal text-brand-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-l from-brand-purple to-transparent"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <div className="text-brand-purple text-[11px] font-bold uppercase tracking-[0.3em] mb-6">Our Promise</div>
            <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-10 leading-[1.1]">
              From Concept <br />
              to <span className="text-brand-purple italic">Experience.</span>
            </h2>
            <p className="text-xl text-brand-gray leading-relaxed mb-12 font-medium">
              เราออกแบบประสบการณ์งานอีเวนต์และภาพลักษณ์แบรนด์อย่างเป็นระบบและมีเอกลักษณ์ เพื่อเปลี่ยนทุกวิสัยทัศน์ให้กลายเป็นความจริงที่น่าจดจำ
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {reasons.map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-purple/20 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">{reason.title}</h4>
                  <p className="text-sm text-brand-gray leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Clients = () => (
  <section className="py-32 px-6 bg-brand-white border-b border-brand-gray/5">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <p className="text-[11px] font-bold uppercase tracking-[0.4em] text-brand-gray mb-4">Trusted by Industry Leaders</p>
        <div className="w-12 h-[1px] bg-brand-purple mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 items-center justify-items-center opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        {['HERBALIFE', 'MBK CENTER', 'AMARIN', 'GARNIER', 'CENTRAL PLAZA', 'MCDONALD’S', 'PTT', 'SCG', 'SONY', 'BANGKOK UNIVERSITY'].map((brand) => (
          <span key={brand} className="text-xl font-extrabold tracking-tighter text-brand-charcoal text-center">{brand}</span>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-brand-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-24">
          <div>
            <div className="text-brand-purple text-[11px] font-bold uppercase tracking-[0.3em] mb-6">Get In Touch</div>
            <h2 className="text-4xl lg:text-6xl font-extrabold text-brand-charcoal tracking-tight mb-10 leading-tight">
              Let’s create something <br />
              <span className="text-brand-purple">unforgettable</span> <br />
              together.
            </h2>
            
            <div className="space-y-10 mt-16">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-lavender flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-1">ติดต่อทางอีเมล</div>
                  <div className="text-lg font-bold text-brand-charcoal">hello@focusgroup.studio</div>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-lavender flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-1">ติดต่อทางโทรศัพท์</div>
                  <div className="text-lg font-bold text-brand-charcoal">+66 (0) 2 123 4567</div>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-xl bg-brand-lavender flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-brand-purple" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-gray mb-1">สถานที่ตั้ง</div>
                  <div className="text-lg font-bold text-brand-charcoal">กรุงเทพมหานคร, ประเทศไทย</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-brand-lavender/30 p-12 rounded-3xl border border-brand-gray/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-brand-gray ml-1">ชื่อ-นามสกุล</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-brand-white border border-brand-gray/10 rounded-xl px-6 py-4 text-brand-charcoal focus:outline-none focus:border-brand-purple transition-colors"
                    placeholder="กรอกชื่อของคุณ"
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-brand-gray ml-1">อีเมลติดต่อ</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-brand-white border border-brand-gray/10 rounded-xl px-6 py-4 text-brand-charcoal focus:outline-none focus:border-brand-purple transition-colors"
                    placeholder="example@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-bold uppercase tracking-widest text-brand-gray ml-1">ข้อความของคุณ</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-brand-white border border-brand-gray/10 rounded-xl px-6 py-4 text-brand-charcoal focus:outline-none focus:border-brand-purple transition-colors resize-none"
                  placeholder="บอกเราเกี่ยวกับโปรเจกต์ของคุณ..."
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                ></textarea>
              </div>
              
              <button 
                type="submit"
                disabled={submitted}
                className={`w-full py-5 rounded-xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all ${
                  submitted 
                    ? "bg-emerald-500 text-white" 
                    : "bg-brand-purple text-brand-white hover:bg-brand-charcoal shadow-xl shadow-brand-purple/20"
                }`}
              >
                {submitted ? (
                  <>ส่งข้อความสำเร็จ! <CheckCircle2 className="w-5 h-5" /></>
                ) : (
                  <>ส่งข้อความ <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-16 px-6 bg-brand-white border-t border-brand-gray/10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
      <div className="flex flex-col items-center md:items-start">
        <div className="text-2xl font-extrabold tracking-tight text-brand-charcoal leading-none">
          FOCUSGROUP<span className="text-brand-purple">.</span>
        </div>
        <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-brand-gray mt-1">
          From Concept to Experience
        </div>
      </div>
      <div className="text-[13px] text-brand-gray font-medium">
        © 2026 FocusGroup Studio. All rights reserved.
      </div>
      <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-brand-charcoal/60">
        <a href="#" className="hover:text-brand-purple transition-colors">Instagram</a>
        <a href="#" className="hover:text-brand-purple transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-brand-purple transition-colors">Vimeo</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white text-brand-charcoal font-body selection:bg-brand-purple selection:text-brand-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}
