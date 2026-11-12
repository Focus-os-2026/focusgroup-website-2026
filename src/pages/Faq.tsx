import { motion } from "motion/react";
import { HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ServiceNavbar, CompanyInfoBox, ServiceFooter } from "../components/CompanyInfoBox";

export default function FaqPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "คำถามที่พบบ่อย (FAQ) รับจัดงานอีเวนต์ เช่าอุปกรณ์ บูธนิทรรศการ | Focusgroup Studio";
  }, []);

  const faqs = [
    {
      q: "บริษัทรับจัดอีเวนต์ในกรุงเทพที่ทำครบทั้งจัดงานและมีอุปกรณ์เองมีไหม?",
      a: "Focusgroup Studio รับทั้งจัดงาน ให้เช่าเวที แสง สี เสียง จอ LED ทำบูธ และไลฟ์สด ในทีมเดียว ตั้งอยู่พัฒนาการ 50 เขตสวนหลวง"
    },
    {
      q: "ทำไมบนเว็บไม่มีราคา?",
      a: "เพราะแต่ละงานต่างกันมาก ทั้งสถานที่ จำนวนแขก โชว์ และอุปกรณ์ เราจึงทำใบเสนอราคาแยกรายการให้ทุกงาน ไม่ใช้แพ็กเกจตายตัว ทักมาคุยไอเดียกันก่อนได้ทาง LINE ยังไม่ต้องมีบรีฟครบ เราจะช่วยสรุปขอบเขตงานให้ก่อนทำใบเสนอราคา"
    },
    {
      q: "ทำงานกับหน่วยงานรัฐและยื่น e-bidding ได้ไหม?",
      a: "ได้ เราเป็นนิติบุคคลจดทะเบียน (บริษัท โฟกัสกรุ๊ป สตูดิโอ จำกัด) ออกใบกำกับภาษีได้ และเคยทำงานให้ สกสว."
    },
    {
      q: "ใช้เวลาเตรียมงานนานแค่ไหน?",
      a: "งานบริษัททั่วไป 4–8 สัปดาห์ บูธนิทรรศการ 2–4 สัปดาห์ คอนเสิร์ต 3–6 เดือน"
    },
    {
      q: "รับงานนอกกรุงเทพไหม?",
      a: "รับทั่วประเทศ เช่น งานบูธที่ Angsana Laguna Phuket"
    },
    {
      q: "ขอใบเสนอราคายังไง?",
      a: "ทัก LINE lin.ee/PEIHMBM หรือโทร 086-744-4616 พร้อมวันงาน จำนวนแขก และสถานที่"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a
      }
    }))
  };

  return (
    <div className="min-h-screen bg-[#F2F0EB] text-slate-900 font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceNavbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-widest mb-6">
                <HelpCircle className="w-3 h-3" /> Frequently Asked Questions
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
                คำถามที่พบบ่อย (FAQ)
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                รวมคำตอบเกี่ยวกับบริการรับจัดงานอีเวนต์ เช่าเวที แสง สี เสียง จอ LED ออกแบบผลิตบูธนิทรรศการ และผลิตวิดีโอพร้อม Live Streaming โดย Focusgroup Studio
              </p>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto space-y-6 mb-16">
            {faqs.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm"
              >
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                  {item.q}
                </h2>
                <p className="text-slate-700 text-base md:text-lg leading-relaxed">
                  {item.a}
                </p>
              </motion.div>
            ))}
          </div>

          {/* ลิงก์ไปยังบริการทั้ง 4 หน้า */}
          <div className="max-w-4xl mx-auto bg-slate-950 text-white p-8 md:p-12 rounded-3xl">
            <h2 className="text-2xl font-bold mb-6">ดูรายละเอียดทั้ง 4 บริการของเรา</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Link to="/event-organizer" className="p-4 rounded-2xl bg-white/5 hover:bg-sky-500/20 border border-white/10 transition-colors">
                <p className="font-bold text-sky-400">1. รับจัดงานอีเวนต์ครบวงจร</p>
                <p className="text-xs text-slate-300 mt-1">งานบริษัท งานสัมมนา เปิดตัวสินค้า กาลาดินเนอร์ คอนเสิร์ต</p>
              </Link>
              <Link to="/event-supply" className="p-4 rounded-2xl bg-white/5 hover:bg-sky-500/20 border border-white/10 transition-colors">
                <p className="font-bold text-sky-400">2. ให้เช่าเวที แสง สี เสียง จอ LED</p>
                <p className="text-xs text-slate-300 mt-1">อุปกรณ์ครบชุดพร้อมทีมช่างติดตั้งและคุมหน้างาน</p>
              </Link>
              <Link to="/booth-exhibition" className="p-4 rounded-2xl bg-white/5 hover:bg-sky-500/20 border border-white/10 transition-colors">
                <p className="font-bold text-sky-400">3. ออกแบบและผลิตบูธนิทรรศการ</p>
                <p className="text-xs text-slate-300 mt-1">QSNCC ไบเทค อิมแพค ห้างสรรพสินค้า และโรงแรมทั่วประเทศ</p>
              </Link>
              <Link to="/media-production" className="p-4 rounded-2xl bg-white/5 hover:bg-sky-500/20 border border-white/10 transition-colors">
                <p className="font-bold text-sky-400">4. ผลิตวิดีโอ มอชันกราฟิก และ Live Streaming</p>
                <p className="text-xs text-slate-300 mt-1">วิดีโอองค์กร ภาพเปิดงานจอ LED และไลฟ์สดหลายกล้อง</p>
              </Link>
            </div>
            <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-8 h-12 text-base font-bold">
                ทักมาคุยกันก่อนได้ทาง LINE
              </Button>
            </a>
          </div>
        </div>
      </main>

      <CompanyInfoBox />
      <ServiceFooter />
    </div>
  );
}
