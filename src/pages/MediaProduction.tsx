import { motion } from "motion/react";
import { Video, HelpCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { ServiceNavbar, CompanyInfoBox, ServiceFooter } from "../components/CompanyInfoBox";

export default function MediaProductionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "รับผลิตวิดีโอองค์กร มอชันกราฟิก ไลฟ์สดงานอีเวนต์ กรุงเทพฯ | Focusgroup Studio";
  }, []);

  const servicesList = [
    "วิดีโอแนะนำองค์กร วิดีโอโฆษณา และคลิปสั้นสำหรับโซเชียล",
    "มอชันกราฟิกและภาพเปิดงานบนจอ LED",
    "ไลฟ์สดงานสัมมนา งานแถลงข่าว และคอนเสิร์ต ลง Facebook YouTube หรือ Zoom",
    "ถ่ายทำวิดีโอสรุปงาน (Highlight) หลังจบงาน"
  ];

  const videoWorks = [
    { id: "Pv4kKCrR6Ow", title: "ผลงานผลิตวิดีโอและงานอีเวนต์ โปรเจกต์ที่ 1 — Focusgroup Studio" },
    { id: "LZq2QiWzx5I", title: "ผลงานผลิตวิดีโอ มอชันกราฟิก และไลฟ์สด โปรเจกต์ที่ 2 — Focusgroup Studio" },
    { id: "t3NDTv8eMEU", title: "ผลงานถ่ายทำวิดีโอไฮไลต์งานอีเวนต์และแบรนด์ชั้นนำ โปรเจกต์ที่ 3 — Focusgroup Studio" },
    { id: "yuiBObMOt7o", title: "ผลงานโปรดักชันสื่อผสมและภาพบนจอ LED โปรเจกต์ที่ 4 — Focusgroup Studio" }
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
                <Video className="w-3 h-3" /> Media Production & Live Streaming
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
                รับผลิตวิดีโอและไลฟ์สดงานอีเวนต์
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                <strong>Focusgroup Studio</strong> รับผลิตวิดีโอองค์กร วิดีโอโฆษณา มอชันกราฟิก ภาพบนจอ LED สำหรับเวที และ Live Streaming งานอีเวนต์แบบหลายกล้อง ผลิตวิดีโอมาแล้ว 140+ ชิ้น และไลฟ์สด 70+ ครั้ง ทีมเดียวกับที่จัดงาน จึงทำภาพบนจอ เสียง และไลฟ์ให้เข้ากันได้ตั้งแต่แรก
              </p>
            </motion.div>
          </div>

          {/* งานที่รับ */}
          <div className="max-w-4xl mb-20 bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-slate-900">งานที่รับผลิตและดูแล</h2>
              <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6">
                  ทักมาคุยกันก่อนได้
                </Button>
              </a>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {servicesList.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" />
                  <span className="text-slate-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ตัวอย่างผลงานจริง */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">ตัวอย่างผลงานวิดีโอและโปรดักชันจริง</h2>
            <p className="text-slate-600 mb-8">
              ได้รับความไว้วางใจจากแบรนด์ชั้นนำ เช่น Herbalife, Garnier, Suntory และองค์กรภาครัฐและเอกชน
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videoWorks.map((vid, idx) => (
                <div key={idx} className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${vid.id}?rel=0&modestbranding=1`}
                      title={vid.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ ประจำหน้า */}
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-7 h-7 text-sky-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">คำถามที่พบบ่อยเกี่ยวกับงานวิดีโอและไลฟ์สด</h2>
            </div>
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">ไลฟ์สดใช้กี่กล้อง?</h3>
                <p className="text-slate-600 leading-relaxed">
                  รองรับตั้งแต่ 2 ถึง 6+ กล้อง ตามขนาดและรูปแบบของงาน พร้อมระบบ Switching สลับภาพ ขึ้นกราฟิกชื่อวิทยากร และดึงภาพสไลด์ขึ้นจอพร้อมกัน
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">ใช้เวลาตัดต่อกี่วัน?</h3>
                <p className="text-slate-600 leading-relaxed">
                  วิดีโอสรุปงาน (Highlight) ปกติใช้เวลาตัดต่อดรัฟต์แรกประมาณ 3–7 วันหลังจบงาน (หรือสามารถสั่งทำแบบตัดต่อด่วน Same-day Edit สำหรับเปิดท้ายงานได้)
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <CompanyInfoBox />
      <ServiceFooter />
    </div>
  );
}
