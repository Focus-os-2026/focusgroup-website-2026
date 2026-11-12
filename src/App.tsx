import { motion, AnimatePresence } from "motion/react";
import { 
  Layout, 
  ArrowRight, 
  Menu,
  X,
  Calendar,
  Video,
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
import EventSupplyPage from "./pages/EventSupply";
import BoothExhibitionPage from "./pages/BoothExhibition";
import MediaProductionPage from "./pages/MediaProduction";
import FaqPage from "./pages/Faq";
import { CompanyInfoBox } from "./components/CompanyInfoBox";

const novelImages = [
  "/images/projects/novel-1.jpg",
  "/images/projects/novel-2.jpg",
  "/images/projects/novel-3.jpg",
  "/images/projects/novel-4.jpg",
  "/images/projects/novel-5.jpg",
  "/images/projects/novel-6.jpg"
];

const fentyImages = [
  "/images/projects/fenty-1.jpg",
  "/images/projects/fenty-2.jpg",
  "/images/projects/fenty-3.jpg",
  "/images/projects/fenty-4.jpg",
  "/images/projects/fenty-5.jpg",
  "/images/projects/fenty-6.jpg"
];

const hironoImages = [
  "/images/projects/hirono-1.jpg",
  "/images/projects/hirono-2.jpg",
  "/images/projects/hirono-3.jpg",
  "/images/projects/hirono-4.jpg",
  "/images/projects/hirono-5.jpg",
  "/images/projects/hirono-6.jpg"
];

function HomePage() {
  const [activeProjectImages, setActiveProjectImages] = useState<string[]>([]);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "รับจัดงานอีเวนต์ บูธนิทรรศการ และผลิตสื่อครบวงจร กรุงเทพฯ | Focusgroup Studio";
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

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "หน้าแรก", to: "/" },
    { label: "รับจัดงานอีเวนต์", to: "/event-organizer" },
    { label: "เช่าเวที แสง สี เสียง", to: "/event-supply" },
    { label: "ทำบูธนิทรรศการ", to: "/booth-exhibition" },
    { label: "ผลิตวิดีโอ & ไลฟ์สด", to: "/media-production" },
    { label: "FAQ", to: "/faq" },
  ];

  const notableClients = [
    "Herbalife",
    "Garnier",
    "Suntory",
    "สกสว. (TSRI)",
    "นายอินทร์ (อมรินทร์)",
    "Fenty Skin",
    "POP MART / Hirono",
    "WCA",
    "EGLN"
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 font-sans selection:bg-sky-500/30">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-slate-950/90 backdrop-blur-lg border-b border-white/10 py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <img src="/logo small_02.png" alt="Focusgroup Studio บริษัท โฟกัสกรุ๊ป สตูดิโอ จำกัด" className="h-10 md:h-12 object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((item) => (
              <Link 
                key={item.to} 
                to={item.to} 
                className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 transition-all group-hover:w-full" />
              </Link>
            ))}
            <a 
              href="#contact" 
              className="text-sm font-medium text-slate-300 hover:text-sky-400 transition-colors"
            >
              ติดต่อเรา
            </a>
          </div>

          <div className="hidden md:block">
            <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 shadow-lg shadow-sky-500/20">
                ทักมาคุยกันก่อนได้ <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </div>

          <button 
            className="lg:hidden text-slate-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="เปิดเมนูนำทาง"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-b border-white/10 p-6 flex flex-col gap-4"
          >
            {navLinks.map((item) => (
              <Link 
                key={item.to} 
                to={item.to} 
                className="text-base font-medium text-slate-200 hover:text-sky-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a 
              href="#contact" 
              className="text-base font-medium text-slate-200 hover:text-sky-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              ติดต่อเรา
            </a>
            <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer" className="w-full">
              <Button className="bg-sky-500 w-full mt-2">ทักมาคุยกันก่อนได้</Button>
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
                alt="บรรยากาศการจัดงานอีเวนต์ เวที แสง สี เสียง โดย Focusgroup Studio" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/50 to-slate-950" />
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-600/10 blur-[120px] rounded-full" />
          </div>

          <div className="relative z-10">
            {/* Hero Section (Answer-first) */}
            <section className="pt-32 pb-16 md:pt-44 md:pb-24 overflow-hidden">
              <div className="container mx-auto px-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block py-1.5 px-4 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs md:text-sm font-semibold mb-6 tracking-wider uppercase">
                    FOCUSGROUP STUDIO · บริษัท โฟกัสกรุ๊ป สตูดิโอ จำกัด
                  </span>
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.2] max-w-5xl mx-auto">
                    รับจัดงานอีเวนต์ บูธนิทรรศการ และผลิตสื่อครบวงจร กรุงเทพฯ{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500 block mt-2">
                      Focusgroup Studio
                    </span>
                  </h1>

                  {/* Answer-first Opening Paragraph */}
                  <div className="max-w-4xl mx-auto mb-10 bg-slate-900/75 backdrop-blur-md border border-white/15 rounded-3xl p-6 md:p-8 text-left md:text-center shadow-2xl">
                    <p className="text-slate-100 text-base md:text-lg leading-relaxed">
                      <strong>Focusgroup Studio (บริษัท โฟกัสกรุ๊ป สตูดิโอ จำกัด)</strong> เป็นบริษัทรับจัดงานอีเวนต์และโปรดักชันเฮาส์ในกรุงเทพฯ ก่อตั้งปี 2557 (2014) ดูแลงานครบตั้งแต่คิดคอนเซ็ปต์จนถึงหน้างาน ใน 4 บริการ คือ{" "}
                      <Link to="/event-organizer" className="text-sky-400 underline underline-offset-4 hover:text-sky-300 font-semibold">รับจัดงานอีเวนต์</Link>{" "}
                      <Link to="/event-supply" className="text-sky-400 underline underline-offset-4 hover:text-sky-300 font-semibold">ให้เช่าเวที แสง สี เสียง จอ LED</Link>{" "}
                      <Link to="/booth-exhibition" className="text-sky-400 underline underline-offset-4 hover:text-sky-300 font-semibold">ออกแบบและผลิตบูธนิทรรศการ</Link> และ{" "}
                      <Link to="/media-production" className="text-sky-400 underline underline-offset-4 hover:text-sky-300 font-semibold">ผลิตวิดีโอพร้อม Live Streaming</Link>{" "}
                      ลูกค้าหลักคือแบรนด์สินค้าอุปโภคบริโภค (FMCG) ค้าปลีก และหน่วยงานรัฐ เช่น Herbalife, Garnier, Suntory และ สกสว. ตั้งอยู่ที่ซอยพัฒนาการ 50 เขตสวนหลวง รับงานทั่วประเทศ
                    </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8 h-14 text-lg shadow-xl shadow-sky-500/25 font-bold">
                        ทักมาคุยกันก่อนได้ <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </a>
                    <a href="#portfolio">
                      <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-white/20 bg-white/90 hover:bg-white text-slate-950 font-semibold">
                        ดูผลงานของเรา
                      </Button>
                    </a>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Features Section (4 Core Services linked to dedicated URLs) */}
            <section id="services" className="py-16 md:py-24 relative">
              <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                  <h2 className="text-2xl md:text-4xl font-bold text-white mb-3">4 บริการหลักครบวงจรในทีมเดียว</h2>
                  <p className="text-slate-400 text-sm md:text-base">คลิกที่แต่ละบริการเพื่อดูขอบเขตงาน ผลงานจริง และคำถามที่พบบ่อย</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <FeatureCard 
                    icon={<Calendar className="w-6 h-6" />}
                    title="รับจัดงานอีเวนต์ครบวงจร"
                    subtitle="Event Organizer"
                    description={[
                      "รับจัดงานบริษัท เปิดตัวสินค้า สัมมนา กาลาดินเนอร์ และคอนเสิร์ต ดูแลตั้งแต่คอนเซ็ปต์ Run of Show จนถึงคุมคิววันงาน"
                    ]}
                    delay={0.1}
                    to="/event-organizer"
                  />
                  <FeatureCard 
                    icon={<Layers className="w-6 h-6" />}
                    title="ให้เช่าเวที แสง สี เสียง จอ LED"
                    subtitle="Event Supply"
                    description={[
                      "ให้เช่าและติดตั้งเวที โครงสร้างทรัส ระบบเสียง ระบบแสง และจอ LED พร้อมทีมช่างและทีมคุมหน้างานตลอดงาน"
                    ]}
                    delay={0.2}
                    to="/event-supply"
                  />
                  <FeatureCard 
                    icon={<Layout className="w-6 h-6" />}
                    title="ออกแบบและผลิตบูธนิทรรศการ"
                    subtitle="Booth & Exhibition"
                    description={[
                      "ทำครบตั้งแต่แบบ 3D กราฟิก ผลิตโครงสร้าง ติดตั้งหน้างานที่ QSNCC ไบเทค อิมแพค ห้าง และโรงแรม ไปจนถึงรื้อถอน"
                    ]}
                    delay={0.3}
                    to="/booth-exhibition"
                  />
                  <FeatureCard 
                    icon={<Video className="w-6 h-6" />}
                    title="ผลิตวิดีโอ มอชันกราฟิก & ไลฟ์สด"
                    subtitle="Media Production"
                    description={[
                      "ผลิตวิดีโอองค์กร โฆษณา ภาพเปิดงานบนจอ LED และ Live Streaming หลายกล้อง ทีมเดียวกับที่จัดงาน"
                    ]}
                    delay={0.4}
                    to="/media-production"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Stats Section (Real Text for AI & Search Engines) */}
        <section className="py-16 md:py-20 bg-white border-y border-slate-100 relative overflow-hidden text-slate-900">
          <div className="absolute inset-0 bg-sky-500/5 blur-[100px] rounded-full" />
          <div className="container mx-auto px-6 relative z-10">
            <p className="sr-only">
              จัดงานมาแล้ว 112+ งาน · ผลิตวิดีโอ 140+ ชิ้น · ไลฟ์สด 70+ ครั้ง · ประสบการณ์ 12 ปี
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
              <StatItem value="112+" label="จัดงานมาแล้ว (งาน)" />
              <StatItem value="140+" label="ผลิตวิดีโอ (ชิ้น)" />
              <StatItem value="70+" label="ไลฟ์สด (ครั้ง)" />
              <StatItem value="12 ปี" label="ประสบการณ์ (ตั้งแต่ปี 2557)" />
            </div>
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-24 bg-white overflow-hidden border-b border-slate-100">
          <div className="container mx-auto px-6 mb-12 text-center">
            <h2 className="text-sm font-bold text-sky-600 uppercase tracking-[0.4em] mb-3">Our Clients & Partners</h2>
            <p className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">ลูกค้าที่ไว้วางใจ Focusgroup Studio</p>
            {/* Visible Client Names as Real Text for AI */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
              {notableClients.map((brand) => (
                <span
                  key={brand}
                  className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs md:text-sm font-semibold"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <LogoRow 
              logos={[
                { src: "/Clients_1.png", name: "Herbalife และลูกค้าแบรนด์ชั้นนำ 1" },
                { src: "/Clients_2.png", name: "Garnier และลูกค้าแบรนด์ชั้นนำ 2" },
                { src: "/Clients_3.png", name: "Suntory และลูกค้าแบรนด์ชั้นนำ 3" },
                { src: "/Clients_4.png", name: "สกสว. (TSRI) และหน่วยงานภาครัฐ 4" },
                { src: "/Clients_5.png", name: "นายอินทร์ อมรินทร์ 5" },
                { src: "/Clients_6.png", name: "Fenty Skin 6" },
                { src: "/Clients_7.png", name: "Hirono POP MART 7" },
                { src: "/Clients_8.png", name: "WCA 8" },
                { src: "/Clients_9.png", name: "EGLN 9" },
                { src: "/Clients_10.png", name: "แบรนด์พันธมิตร Focusgroup Studio 10" }
              ]} 
              speed={40} 
            />
            <LogoRow 
              logos={[
                { src: "/Clients_11.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 11" },
                { src: "/Clients_12.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 12" },
                { src: "/Clients_13.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 13" },
                { src: "/Clients_14.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 14" },
                { src: "/Clients_15.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 15" },
                { src: "/Clients_16.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 16" },
                { src: "/Clients_17.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 17" },
                { src: "/Clients_18.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 18" },
                { src: "/Clients_19.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 19" },
                { src: "/Clients_20.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 20" }
              ]} 
              reverse 
              speed={45} 
            />
            <LogoRow 
              logos={[
                { src: "/Clients_21.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 21" },
                { src: "/Clients_22.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 22" },
                { src: "/Clients_23.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 23" },
                { src: "/Clients_24.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 24" },
                { src: "/Clients_25.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 25" },
                { src: "/Clients_26.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 26" },
                { src: "/Clients_27.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 27" },
                { src: "/Clients_28.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 28" },
                { src: "/Clients_29.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 29" },
                { src: "/Clients_30.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 30" }
              ]} 
              speed={42} 
            />
            <LogoRow 
              logos={[
                { src: "/Clients_31.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 31" },
                { src: "/Clients_32.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 32" },
                { src: "/Clients_33.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 33" },
                { src: "/Clients_34.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 34" },
                { src: "/Clients_35.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 35" },
                { src: "/Clients_36.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 36" },
                { src: "/Clients_37.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 37" },
                { src: "/Clients_38.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 38" },
                { src: "/Clients_39.png", name: "ลูกค้าองค์กรของ Focusgroup Studio 39" }
              ]} 
              reverse 
              speed={48} 
            />
          </div>
        </section>

        {/* Works Section */}
        <section id="portfolio" className="pt-24 pb-12 relative bg-[#F2F0EB]">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">ผลงานของเรา (Our Portfolio)</h2>
              <p className="text-slate-600 max-w-[1000px] mx-auto text-[17px] font-normal">
                ตัวอย่างผลงานจริงทั้งการจัดงานอีเวนต์ ให้เช่าเวที แสง สี เสียง จอ LED ออกแบบผลิตบูธนิทรรศการ และผลิตวิดีโอพร้อม Live Streaming
              </p>
            </div>
          </div>
        </section>

        {/* Event Organizer Section (Full-Width Dark Background) */}
        <section className="py-24 bg-slate-950 border-y border-slate-900/60 text-white relative">
          <div className="container mx-auto px-6 space-y-16">
            <PortfolioItem 
              id="organizer"
              title="รับจัดงานอีเวนต์ครบวงจร (Event Organizer)" 
              description="Focusgroup Studio รับจัดงานอีเวนต์ครบวงจรในกรุงเทพฯ และต่างจังหวัด ทั้งงานบริษัท งานเปิดตัวสินค้า งานสัมมนา งานกาลาดินเนอร์ และคอนเสิร์ต เช่น งาน EGLN (2569) ที่โรงแรม Fairmont และงานประชุม WCA ที่ InterContinental"
              images={[
                { src: "/Event Organizer_1-1.jpeg", alt: "งานจัดอีเวนต์และกาล่าดินเนอร์ EGLN โรงแรม Fairmont กรุงเทพฯ 2569" },
                { src: "/Event Organizer_7-1.jpeg", alt: "งานประชุมสัมมนาองค์กรระดับนานาชาติ WCA โรงแรม InterContinental กรุงเทพฯ" },
                { src: "/Event Organizer_6-1.jpeg", alt: "การแสดงโชว์บนเวทีและระบบแสงสีเสียงในงานเลี้ยงบริษัท กรุงเทพฯ" },
                { src: "/Event Organizer_5-1.jpeg", alt: "บรรยากาศงานเปิดตัวสินค้าและอีเวนต์องค์กรโดย Focusgroup Studio" },
                { src: "/Event Organizer_3-1.jpeg", alt: "ทีมรันคิวและควบคุมหน้างานอีเวนต์คอนเสิร์ตและเฟสติวัล" },
                { src: "/Event Organizer_4-1.jpeg", alt: "การจัดงานประชุมและงานเลี้ยงรับรอง Welcome Cocktail & Award Dinner" },
                { src: "/Event Organizer_2-1.jpeg", alt: "ออกแบบเวทีและจอ LED สำหรับงานสัมมนาและเปิดตัวแบรนด์" },
                { src: "/Event Organizer_8-1.jpeg", alt: "งานอีเวนต์และกิจกรรมแบรนด์ครบวงจรในกรุงเทพฯ" }
              ]} 
              delay={0.1} 
              primaryButtonText="ดูรายละเอียดบริการจัดงานอีเวนต์"
              showSecondaryButton={true}
              link="/event-organizer"
              darkTheme
            />
            
            {/* Inner Projects List */}
            <div className="flex flex-col gap-4 pt-12 border-t border-slate-800/50">
              {/* Novel Expo */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex flex-col lg:flex-row gap-8 items-start"
              >
                <div className="w-full lg:w-[20%] space-y-3 shrink-0">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                    BOOK EXPO & FESTIVAL
                  </span>
                  <h4 className="text-xl md:text-2xl font-extrabold text-white leading-tight">มหกรรมนิยาย<br />นานาชาติ 2025</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    งานมหกรรมหนังสือและนิยายนานาชาติ ออกแบบเวทีกิจกรรม จุดถ่ายภาพแลนด์มาร์ก และโซนบูธสำนักพิมพ์
                  </p>
                </div>
                <div className="w-full lg:w-[80%]">
                  <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-md grid grid-cols-4 gap-0 bg-slate-900">
                    {["/images/projects/novel-1.jpg", "/images/projects/novel-2.jpg", "/images/projects/novel-3.jpg", "/images/projects/novel-4.jpg"].map((img, i) => (
                      <div key={i} className="aspect-[16/10] overflow-hidden group cursor-pointer relative" onClick={() => openLightbox(novelImages, i)}>
                        <img src={img} alt={`งานมหกรรมนิยายนานาชาติ 2025 กรุงเทพฯ ภาพที่ ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-xs font-semibold tracking-wider bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">ดูรูปขยาย</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <hr className="border-t border-slate-800/50" />

              {/* Fenty Skin */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col lg:flex-row gap-8 items-start"
              >
                <div className="w-full lg:w-[20%] space-y-3 shrink-0">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                    BRAND LAUNCH & BOOTH SETUP
                  </span>
                  <h4 className="text-xl md:text-2xl font-extrabold text-white leading-tight">Fenty Skin</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    งานเปิดตัวและบูธแสดงสินค้า Fenty Skin โครงสร้างมินิมอล โซนทดลองผลิตภัณฑ์ และจุดถ่ายภาพ
                  </p>
                </div>
                <div className="w-full lg:w-[80%]">
                  <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-md grid grid-cols-4 gap-0 bg-slate-900">
                    {["/images/projects/fenty-1.jpg", "/images/projects/fenty-2.jpg", "/images/projects/fenty-3.jpg", "/images/projects/fenty-4.jpg"].map((img, i) => (
                      <div key={i} className="aspect-[16/10] overflow-hidden group cursor-pointer relative" onClick={() => openLightbox(fentyImages, i)}>
                        <img src={img} alt={`งานเปิดตัวและบูธ Fenty Skin กรุงเทพฯ ภาพที่ ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-xs font-semibold tracking-wider bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">ดูรูปขยาย</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <hr className="border-t border-slate-800/50" />

              {/* Hirono */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col lg:flex-row gap-8 items-start"
              >
                <div className="w-full lg:w-[20%] space-y-3 shrink-0">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
                    POP-UP STORE & EXHIBITION
                  </span>
                  <h4 className="text-xl md:text-2xl font-extrabold text-white leading-tight">Hirono @ Siam Square</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    นิทรรศการและป๊อปอัปสโตร์ Hirono ใจกลางสยามสแควร์ พร้อมงานโครงสร้างและแกลเลอรีจัดแสดง
                  </p>
                </div>
                <div className="w-full lg:w-[80%]">
                  <div className="rounded-2xl overflow-hidden border border-slate-800/80 shadow-md grid grid-cols-4 gap-0 bg-slate-900">
                    {["/images/projects/hirono-1.jpg", "/images/projects/hirono-2.jpg", "/images/projects/hirono-3.jpg", "/images/projects/hirono-4.jpg"].map((img, i) => (
                      <div key={i} className="aspect-[16/10] overflow-hidden group cursor-pointer relative" onClick={() => openLightbox(hironoImages, i)}>
                        <img src={img} alt={`งานป๊อปอัปสโตร์และนิทรรศการ Hirono สยามสแควร์ กรุงเทพฯ ภาพที่ ${i + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-xs font-semibold tracking-wider bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">ดูรูปขยาย</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Other Portfolio Items Section */}
        <section className="py-24 md:py-32 relative bg-[#F2F0EB]">
          <div className="container mx-auto px-6">
            <div className="space-y-16 md:space-y-24">
              <PortfolioItem 
                id="supply"
                title="ให้เช่าเวที แสง สี เสียง จอ LED (Event Supply)" 
                description="Focusgroup Studio ให้เช่าและติดตั้งอุปกรณ์งานอีเวนต์ครบชุดในกรุงเทพฯ และต่างจังหวัด ได้แก่ เวที โครงสร้าง ระบบเสียง ระบบแสง และจอ LED พร้อมทีมช่างและทีมคุมหน้างานตลอดงาน เช่าเฉพาะอุปกรณ์ หรือเช่าคู่กับบริการจัดงานก็ได้"
                images={[
                  { src: "/Event Supply_1.jpg", alt: "ให้เช่าและติดตั้งเวที แสง สี เสียง จอ LED งานอีเวนต์ กรุงเทพฯ 1" },
                  { src: "/Event Supply_2.jpg", alt: "ระบบไฟแสงสี Moving Head และจอ LED บนเวทีคอนเสิร์ต 2" },
                  { src: "/Event Supply_3.jpeg", alt: "ทีมช่างควบคุมระบบเสียงและภาพหน้างานอีเวนต์ 3" },
                  { src: "/Event Supply_4.jpeg", alt: "ติดตั้งจอ LED และเวทีงานสัมมนาโรงแรม 4" },
                  { src: "/Event Supply_5.jpeg", alt: "ระบบแสงสีเสียงงานกาลาดินเนอร์และงานเลี้ยงบริษัท 5" },
                  { src: "/Event Supply_6.jpg", alt: "โครงสร้างทรัส เวที และระบบไฟงานเปิดตัวสินค้า 6" },
                  { src: "/Event Supply_7.jpeg", alt: "อุปกรณ์ระบบภาพและเสียงครบวงจรโดย Focusgroup Studio 7" },
                  { src: "/Event Supply_1.jpg", alt: "ทีมงานติดตั้งเวที แสง สี เสียง จอ LED มืออาชีพ 8" }
                ]} 
                delay={0.2} 
                primaryButtonText="ดูรายละเอียดเช่าเวที แสง สี เสียง"
                showSecondaryButton={true}
                link="/event-supply"
                reverse
              />
              <hr className="border-t border-slate-300/60" />
              <PortfolioItem 
                id="media"
                title="ผลิตวิดีโอ มอชันกราฟิก และ Live Streaming" 
                description="Focusgroup Studio รับผลิตวิดีโอองค์กร วิดีโอโฆษณา มอชันกราฟิก ภาพบนจอ LED สำหรับเวที และ Live Streaming งานอีเวนต์แบบหลายกล้อง ผลิตวิดีโอมาแล้ว 140+ ชิ้น และไลฟ์สด 70+ ครั้ง ทีมเดียวกับที่จัดงาน"
                images={[]} 
                youtubeIds={["Pv4kKCrR6Ow", "LZq2QiWzx5I", "t3NDTv8eMEU", "yuiBObMOt7o"]}
                delay={0.3} 
                primaryButtonText="ดูรายละเอียดงานวิดีโอ & ไลฟ์สด"
                showSecondaryButton={true}
                link="/media-production"
              />
              <hr className="border-t border-slate-300/60" />
              <PortfolioItem 
                id="booth"
                title="ออกแบบและผลิตบูธนิทรรศการ (Booth & Exhibition)" 
                description="Focusgroup Studio รับออกแบบ ผลิต และติดตั้งบูธนิทรรศการและบูธแสดงสินค้า สำหรับงานที่ศูนย์ประชุมแห่งชาติสิริกิติ์ (QSNCC) ไบเทค อิมแพค ห้างสรรพสินค้า และโรงแรมต่างจังหวัด เช่น บูธนายอินทร์ ที่ QSNCC (2569) และบูธ สกสว. ที่ Angsana Laguna Phuket (2569)"
                images={[
                  { src: "/Booth_8.jpg", alt: "บูธนายอินทร์ มหกรรมหนังสือระดับชาติ ครั้งที่ 31 QSNCC 2569" },
                  { src: "/Booth_1.jpeg", alt: "ออกแบบและผลิตบูธแสดงสินค้าโครงสร้างพิเศษ กรุงเทพฯ" },
                  { src: "/Booth_4.jpeg", alt: "บูธนิทรรศการ สกสว. โรงแรม Angsana Laguna Phuket 2569" },
                  { src: "/Booth_2.png", alt: "แบบ 3D บูธนิทรรศการและพื้นที่จัดแสดงสินค้า" },
                  { src: "/Booth_7.jpeg", alt: "ติดตั้งบูธนิทรรศการที่ศูนย์ประชุมแห่งชาติสิริกิติ์และไบเทค" },
                  { src: "/Booth_3.png", alt: "ออกแบบกราฟิกและโครงสร้างบูธนิทรรศการครบวงจร" },
                  { src: "/Booth_5.jpeg", alt: "งานผลิตและติดตั้งบูธแสดงสินค้าสำหรับแบรนด์ชั้นนำ" },
                  { src: "/Booth_6.jpeg", alt: "ทีมติดตั้งและรื้อถอนบูธนิทรรศการ Focusgroup Studio" }
                ]} 
                delay={0.4} 
                primaryButtonText="ดูรายละเอียดทำบูธนิทรรศการ"
                showSecondaryButton={true}
                link="/booth-exhibition"
                reverse
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-28 md:py-36 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/hero_03.jpg" 
              alt="ติดต่อ Focusgroup Studio เพื่อปรึกษาการจัดงานอีเวนต์และทำบูธ" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm" />
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold mb-6 text-white leading-[1.2] tracking-tight"
              >
                มีโปรเจกต์ในใจ ทักมาคุยกันก่อนได้
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-slate-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-normal leading-relaxed"
              >
                ยังไม่ต้องมีบรีฟครบ เราช่วยสรุปขอบเขตงานและจัดชุดอุปกรณ์ให้เหมาะกับงานของคุณก่อนทำใบเสนอราคา
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
              >
                <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-10 h-14 text-lg shadow-2xl shadow-sky-500/40 group font-bold">
                    ทักมาคุยกันก่อนได้ทาง LINE <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Link to="/faq">
                  <Button variant="outline" size="lg" className="rounded-full px-8 h-14 text-lg border-white/20 bg-white/10 hover:bg-white/20 text-white">
                    อ่านคำถามที่พบบ่อย (FAQ)
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Company Information Table (Matches Google Business Profile & FB) */}
        <CompanyInfoBox dark />

        {/* Contact Section */}
        <section id="contact" className="py-24 md:py-32 relative bg-slate-950 overflow-hidden border-t border-white/5">
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
                <h2 className="text-sm font-bold text-sky-500 uppercase tracking-[0.4em] mb-4">Contact Us</h2>
                <h3 className="text-3xl md:text-5xl font-bold mb-6">ติดต่อ Focusgroup Studio</h3>
                <p className="text-slate-400 text-base md:text-lg mb-10 max-w-lg leading-relaxed">
                  บริษัท โฟกัสกรุ๊ป สตูดิโอ จำกัด พร้อมดูแลงานอีเวนต์ เช่าอุปกรณ์ บูธนิทรรศการ และผลิตสื่อครบวงจร ทักมาคุยไอเดียกันก่อนได้ทาง LINE หรือโทรศัพท์
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                      <Phone className="w-6 h-6 text-sky-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">โทรศัพท์</p>
                      <a href="tel:+66867444616" className="text-xl font-semibold text-slate-200 hover:text-sky-400 transition-colors">
                        086-744-4616
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                      <Mail className="w-6 h-6 text-sky-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">อีเมล</p>
                      <a href="mailto:angkana@focusgroupstudio.com" className="text-xl font-semibold text-slate-200 hover:text-sky-400 transition-colors">
                        angkana@focusgroupstudio.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                      <MapPin className="w-6 h-6 text-sky-400 group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">ที่อยู่บริษัท</p>
                      <p className="text-lg font-semibold text-slate-200">
                        311 ซอยพัฒนาการ 50 แขวงพัฒนาการ เขตสวนหลวง กรุงเทพฯ 10250
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="inline-block p-4 bg-white rounded-[2rem] shadow-xl shadow-sky-500/10 group hover:scale-105 transition-transform duration-500">
                      <div className="w-40 h-40 bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-100">
                        <img 
                          src="/Qrcode_PYim.png" 
                          alt="LINE QR Code ติดต่อ Focusgroup Studio (lin.ee/PEIHMBM)" 
                          className="w-full h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <p className="text-center text-slate-900 font-bold text-xs mt-3 tracking-widest uppercase">LINE: lin.ee/PEIHMBM</p>
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
                
                <form className="space-y-6 relative z-10" onSubmit={(e) => { e.preventDefault(); window.open("https://lin.ee/PEIHMBM", "_blank"); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">ชื่อผู้ติดต่อ</label>
                      <input 
                        type="text" 
                        placeholder="ชื่อของคุณ / บริษัท"
                        className="w-full bg-slate-800/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all duration-300 placeholder:text-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">เบอร์โทร / อีเมล</label>
                      <input 
                        type="text" 
                        placeholder="เบอร์โทรศัพท์หรืออีเมล"
                        className="w-full bg-slate-800/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all duration-300 placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">บริการที่สนใจ</label>
                    <input 
                      type="text" 
                      placeholder="เช่น จัดงานอีเวนต์ / เช่าจอ LED / ทำบูธนิทรรศการ / ไลฟ์สด"
                      className="w-full bg-slate-800/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all duration-300 placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">รายละเอียดเบื้องต้น</label>
                    <textarea 
                      rows={4}
                      placeholder="วันงานโดยประมาณ สถานที่ จำนวนแขก หรือไอเดียคร่าวๆ..."
                      className="w-full bg-slate-800/40 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-sky-500/50 transition-all duration-300 placeholder:text-slate-600 resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-sky-500 hover:bg-sky-600 text-white rounded-2xl h-16 text-lg font-bold shadow-xl shadow-sky-500/20 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]">
                    ทักมาคุยกันก่อนได้ทาง LINE
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
                <img src="/logo small_02.png" alt="Focusgroup Studio บริษัท โฟกัสกรุ๊ป สตูดิโอ จำกัด" className="h-10 object-contain" />
              </div>
              <p className="text-slate-300 font-semibold text-sm mb-2">
                Focusgroup Studio (บริษัท โฟกัสกรุ๊ป สตูดิโอ จำกัด)
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                311 ซอยพัฒนาการ 50 แขวงพัฒนาการ เขตสวนหลวง กรุงเทพฯ 10250
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">บริการของเรา (Services)</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li><Link to="/event-organizer" className="hover:text-sky-400 transition-colors">รับจัดงานอีเวนต์ครบวงจร (Event Organizer)</Link></li>
                <li><Link to="/event-supply" className="hover:text-sky-400 transition-colors">ให้เช่าเวที แสง สี เสียง จอ LED (Event Supply)</Link></li>
                <li><Link to="/booth-exhibition" className="hover:text-sky-400 transition-colors">ออกแบบและผลิตบูธนิทรรศการ (Booth & Exhibition)</Link></li>
                <li><Link to="/media-production" className="hover:text-sky-400 transition-colors">ผลิตวิดีโอ มอชันกราฟิก และ Live Streaming</Link></li>
                <li><Link to="/faq" className="hover:text-sky-400 transition-colors">คำถามที่พบบ่อย (FAQ)</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6">ช่องทางติดต่อ (Contact)</h4>
              <ul className="space-y-3 text-sm text-slate-400">
                <li>โทร: <a href="tel:+66867444616" className="text-slate-200 hover:text-sky-400">086-744-4616</a></li>
                <li>อีเมล: <a href="mailto:angkana@focusgroupstudio.com" className="text-slate-200 hover:text-sky-400">angkana@focusgroupstudio.com</a></li>
                <li>LINE: <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">lin.ee/PEIHMBM</a></li>
                <li>Facebook: <a href="https://www.facebook.com/FocusGroupth" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">facebook.com/FocusGroupth</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-slate-500 text-xs gap-4">
            <p>© 2026 Focusgroup Studio (บริษัท โฟกัสกรุ๊ป สตูดิโอ จำกัด). All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/faq" className="hover:text-slate-300">คำถามที่พบบ่อย (FAQ)</Link>
              <a href="https://www.facebook.com/FocusGroupth" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">Facebook</a>
              <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300">LINE Official</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-md cursor-zoom-out"
            onClick={closeLightbox}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-sky-400 p-2 transition-colors cursor-pointer"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

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
                alt="ภาพขยายผลงาน Focusgroup Studio" 
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              
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

function FeatureCard({ icon, title, subtitle, description, delay, to }: { 
  icon: React.ReactNode, 
  title: string, 
  subtitle: string,
  description: string[], 
  delay: number, 
  to: string
}) {
  const CardContent = (
    <Card className="h-full p-8 md:p-10 transition-all duration-500 border-white/20 group hover:-translate-y-2 flex flex-col bg-slate-800/60 backdrop-blur-md hover:bg-sky-600 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-600/20 text-slate-200 hover:text-white cursor-pointer">
      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 bg-sky-500/20 text-sky-400 group-hover:bg-white/20 group-hover:text-white group-hover:scale-110">
        {React.cloneElement(icon as React.ReactElement, { className: "w-7 h-7" })}
      </div>
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-slate-100 group-hover:text-white transition-colors duration-500">{title}</h3>
      <p className="text-sm font-semibold mb-4 text-sky-300 group-hover:text-sky-100 transition-colors duration-500">
        {subtitle}
      </p>
      <div className="space-y-3 flex-grow text-slate-300 group-hover:text-sky-50 transition-colors duration-500">
        {description.map((line, idx) => (
          <p key={idx} className="text-sm leading-relaxed">
            {line}
          </p>
        ))}
      </div>
      <div className="mt-8 flex items-center gap-2 text-xs font-bold text-sky-400 group-hover:text-white">
        <span>ดูรายละเอียดบริการ</span>
        <ArrowRight className="w-4 h-4" />
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
      <Link to={to} className="block h-full">
        {CardContent}
      </Link>
    </motion.div>
  );
}

function StatItem({ value, label }: { value: string, label: string }) {
  return (
    <div className="group">
      <div className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors duration-500 flex items-center justify-center">
        <span>{value}</span>
      </div>
      <div className="text-slate-600 uppercase tracking-wider text-xs md:text-sm font-bold">
        {label}
      </div>
    </div>
  );
}

function PortfolioItem({ title, description, images, videos, youtubeIds, delay, reverse = false, primaryButtonText = "ดูรายละเอียด", showSecondaryButton = true, link, id, badge, darkTheme }: { 
  title: string, 
  description: string, 
  images: { src: string; alt: string }[], 
  videos?: string[],
  youtubeIds?: string[],
  delay: number,
  reverse?: boolean,
  primaryButtonText?: string,
  showSecondaryButton?: boolean,
  link?: string,
  id?: string,
  badge?: string,
  darkTheme?: boolean
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
      <div className="w-full lg:w-[32%] space-y-8">
        <div className="space-y-4">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${darkTheme ? 'bg-sky-500/10 border-sky-500/20 text-sky-400' : 'bg-sky-500/10 border-sky-500/20 text-sky-600'} text-xs font-bold uppercase tracking-widest`}>
            <Zap className="w-3 h-3" /> {badge || "CORE SERVICE"}
          </div>
          <h3 className={`text-3xl md:text-4xl font-bold leading-tight ${darkTheme ? 'text-white' : 'text-slate-900'}`}>
            {title}
          </h3>
          <p className={`text-[15px] leading-relaxed max-w-xl ${darkTheme ? 'text-slate-300' : 'text-slate-700'}`}>
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 pt-2">
          {link ? (
            <Link to={link}>
              <Button className={`${darkTheme ? 'bg-white hover:bg-slate-100 text-slate-950' : 'bg-slate-900 hover:bg-slate-800 text-white'} rounded-full px-7 h-12 font-semibold`}>
                {primaryButtonText}
              </Button>
            </Link>
          ) : (
            <Button className={`${darkTheme ? 'bg-white hover:bg-slate-100 text-slate-950' : 'bg-slate-900 hover:bg-slate-800 text-white'} rounded-full px-7 h-12 font-semibold`}>
              {primaryButtonText}
            </Button>
          )}
          {showSecondaryButton && (
            <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className={`${darkTheme ? 'border-slate-700 text-white hover:bg-white/10' : 'border-slate-300 text-slate-900 hover:bg-white'} rounded-full px-7 h-12 font-semibold`}>
                ทักมาคุยกันก่อนได้
              </Button>
            </a>
          )}
        </div>
      </div>

      {/* Grid/Video Side */}
      <div className="w-full lg:w-[68%]">
        <div className={`shadow-2xl shadow-slate-300/50 ${youtubeIds && youtubeIds.length > 0 ? ('rounded-[2.5rem] overflow-hidden bg-slate-100 ' + (youtubeIds.length > 1 ? 'grid grid-cols-1 md:grid-cols-2 gap-0' : 'aspect-video')) : (images.length === 3 ? 'grid grid-cols-3 gap-4 md:gap-6' : (images.length === 9 ? 'rounded-[2.5rem] overflow-hidden bg-slate-100 grid grid-cols-3 gap-0' : 'rounded-[2.5rem] overflow-hidden bg-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-0'))}`}>
          {youtubeIds && youtubeIds.length > 0 ? (
            youtubeIds.map((id, i) => (
              <div key={i} className="aspect-video">
                <iframe 
                  src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&modestbranding=1&rel=0`}
                  title={`${title} วิดีโอผลงานที่ ${i + 1}`}
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
                className={`aspect-square overflow-hidden group ${images.length === 3 ? 'rounded-3xl border border-slate-200/50 shadow-md' : ''}`}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
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

function LogoRow({ logos, reverse = false, speed = 40 }: { logos: { src: string; name: string }[], reverse?: boolean, speed?: number }) {
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
          <div key={i} className="w-32 h-12 md:w-40 md:h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100">
            <img 
              src={logo.src} 
              alt={`โลโก้ลูกค้า ${logo.name}`} 
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
        <Route path="/event-supply" element={<EventSupplyPage />} />
        <Route path="/booth-exhibition" element={<BoothExhibitionPage />} />
        <Route path="/media-production" element={<MediaProductionPage />} />
        <Route path="/faq" element={<FaqPage />} />
      </Routes>
    </BrowserRouter>
  );
}
