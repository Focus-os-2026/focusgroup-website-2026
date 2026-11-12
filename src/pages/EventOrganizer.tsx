import { motion, AnimatePresence } from "motion/react";
import { Zap, ChevronLeft, ChevronRight, X, CheckCircle2, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { ServiceNavbar, CompanyInfoBox, ServiceFooter } from "../components/CompanyInfoBox";

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
      className="py-12 border-b border-slate-200 last:border-b-0"
    >
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        <div className="w-full lg:w-1/4 space-y-3">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-sky-600 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            {category}
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
            {title}
          </h3>
          {description && (
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}
        </div>
        
        <div className="w-full lg:w-3/4">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="aspect-square overflow-hidden rounded-3xl bg-slate-100 shadow-sm border border-slate-200/50 group cursor-zoom-in relative"
                onClick={() => onImageClick(images, idx)}
              >
                <img 
                  src={img} 
                  alt={`${title} ภาพผลงานที่ ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-xs font-semibold tracking-wider bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">ดูรูปขยาย</span>
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
    document.title = "รับจัดงานอีเวนต์ครบวงจร กรุงเทพฯ คอนเสิร์ต งานบริษัท งานสัมมนา | Focusgroup Studio";
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

  const scopeItems = [
    "คิดคอนเซ็ปต์และวางไทม์ไลน์",
    "ออกแบบเวที กราฟิก และภาพบนจอ LED",
    "จัดหาและคุมทีมเวที แสง สี เสียง ศิลปิน และโชว์",
    "เขียน Run of Show ซ้อมใหญ่ และ Show Caller คุมคิววันงาน",
    "ขายบัตรและทำการตลาดออนไลน์ (สำหรับคอนเสิร์ตและงานขายบัตร)",
    "สรุปผลงานหลังจบงาน"
  ];

  return (
    <div className="min-h-screen bg-[#F2F0EB] text-slate-900 font-sans">
      <ServiceNavbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Answer-first Hero Section */}
          <div className="max-w-4xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-widest mb-6">
                <Zap className="w-3 h-3" /> Event Organizer Service
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
                รับจัดงานอีเวนต์ครบวงจร ตั้งแต่คอนเซ็ปต์ถึงวันงาน
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                <strong>Focusgroup Studio</strong> รับจัดงานอีเวนต์ครบวงจรในกรุงเทพฯ และต่างจังหวัด ทั้งงานบริษัท งานเปิดตัวสินค้า งานสัมมนา งานกาลาดินเนอร์ และคอนเสิร์ต เราดูแลเองตั้งแต่คิดคอนเซ็ปต์ วางลำดับงาน (Run of Show) จัดการเวที แสง สี เสียง ไปจนถึงคุมหน้างานวันจริง ลูกค้าจึงคุยกับทีมเดียวตลอดทั้งงาน ไม่ต้องประสานหลายเจ้า
              </p>
            </motion.div>
          </div>

          {/* เราดูแลอะไรบ้าง & ผลงานจริง */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">เราดูแลอะไรบ้าง</h2>
              <ol className="space-y-4">
                {scopeItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-7 h-7 rounded-full bg-sky-500/10 text-sky-600 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-slate-900">ตัวอย่างผลงานจัดงานจริง</h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-sm md:text-base">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700">
                        <th className="py-3.5 px-4 font-bold">งาน</th>
                        <th className="py-3.5 px-4 font-bold">สถานที่</th>
                        <th className="py-3.5 px-4 font-bold">สิ่งที่เราทำ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="py-4 px-4 font-semibold">งาน EGLN (2569)</td>
                        <td className="py-4 px-4 text-slate-600">โรงแรม Fairmont</td>
                        <td className="py-4 px-4 text-slate-700">โชว์ Welcome Cocktail และ Award Dinner</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-semibold">WCA (จัดปีละ 2 ครั้ง)</td>
                        <td className="py-4 px-4 text-slate-600">InterContinental</td>
                        <td className="py-4 px-4 text-slate-700">ผู้จัดงานหลัก (Main Organizer)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-slate-600">
                  ยังไม่มีบรีฟครบก็ทักมาคุยไอเดียกันก่อนได้ เราช่วยสรุปขอบเขตงานให้
                </p>
                <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 shrink-0">
                    ทักมาคุยกันก่อนได้
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* แกลเลอรีผลงาน */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-slate-900">ภาพบรรยากาศผลงานเด่น</h2>
            <div className="space-y-8">
              <ProjectSection 
                title="มหกรรมนิยายนานาชาติ 2025 (Book Expo & Festival)"
                category="Book Expo & Festival"
                description="ออกแบบและบริหารจัดการพื้นที่งานมหกรรมหนังสือ เวทีกิจกรรม จุดถ่ายภาพแลนด์มาร์ก และโซนบูธสำนักพิมพ์"
                images={[
                  "/images/projects/novel-1.jpg",
                  "/images/projects/novel-2.jpg",
                  "/images/projects/novel-3.jpg"
                ]}
                onImageClick={openLightbox}
                delay={0.1}
              />

              <ProjectSection 
                title="Fenty Skin Brand Launch & Booth Setup"
                category="Brand Launch & Activation"
                description="งานเปิดตัวและพื้นที่แสดงสินค้าแบรนด์เครื่องสำอางระดับโลก ออกแบบโครงสร้างมินิมอล โซนทดลองสินค้า และจุดถ่ายภาพ"
                images={[
                  "/images/projects/fenty-1.jpg",
                  "/images/projects/fenty-2.jpg",
                  "/images/projects/fenty-3.jpg"
                ]}
                onImageClick={openLightbox}
                delay={0.2}
              />

              <ProjectSection 
                title="Hirono Pop-up Store & Exhibition @ Siam Square"
                category="Pop-up Store & Exhibition"
                description="นิทรรศการและป๊อปอัปสโตร์อาร์ตทอยใจกลางสยามสแควร์ พร้อมโครงสร้างสถาปัตยกรรมและแกลเลอรีจัดแสดง"
                images={[
                  "/images/projects/hirono-1.jpg",
                  "/images/projects/hirono-2.jpg",
                  "/images/projects/hirono-3.jpg"
                ]}
                onImageClick={openLightbox}
                delay={0.3}
              />
            </div>
          </div>

          {/* FAQ ประจำหน้า */}
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-7 h-7 text-sky-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">คำถามที่พบบ่อยเกี่ยวกับการจัดงานอีเวนต์</h2>
            </div>
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">ควรติดต่อล่วงหน้ากี่เดือน?</h3>
                <p className="text-slate-600 leading-relaxed">
                  งานบริษัททั่วไปควรติดต่ออย่างน้อย 4–8 สัปดาห์ ส่วนงานคอนเสิร์ตหรืองานสเกลใหญ่ควรติดต่อล่วงหน้า 3–6 เดือน (หากเป็นงานเร่งด่วนสามารถทักมาเช็กคิวทีมงานก่อนได้)
                </p>
              </div>
              <div className="pb-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">รับงานต่างจังหวัดไหม?</h3>
                <p className="text-slate-600 leading-relaxed">
                  รับทั่วประเทศ เช่น งานบูธและงานประชุมที่ภูเก็ต (Angsana Laguna Phuket) พัทยา เชียงใหม่ และจังหวัดอื่นๆ
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">คิดราคายังไง?</h3>
                <p className="text-slate-600 leading-relaxed">
                  คิดตามขอบเขตงานจริง ทั้งจำนวนแขก สถานที่ โชว์ และอุปกรณ์ ทักมาคุยไอเดียกันก่อนได้ทาง LINE ยังไม่ต้องมีบรีฟครบ เราจะช่วยสรุปขอบเขตงานให้ก่อนทำใบเสนอราคา
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CompanyInfoBox />
      <ServiceFooter />

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
                alt="ภาพขยายผลงานจัดงานอีเวนต์ Focusgroup Studio" 
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
