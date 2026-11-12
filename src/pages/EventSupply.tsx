import { motion } from "motion/react";
import { Layers, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { ServiceNavbar, CompanyInfoBox, ServiceFooter } from "../components/CompanyInfoBox";

export default function EventSupplyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "เช่าเวที แสง สี เสียง จอ LED พร้อมทีมติดตั้ง กรุงเทพฯ | Focusgroup Studio";
  }, []);

  const supplyGallery = [
    { src: "/Event Supply_1.jpg", alt: "ติดตั้งโครงสร้างเวที แสง สี เสียง และจอ LED สำหรับงานอีเวนต์และคอนเสิร์ต กรุงเทพฯ" },
    { src: "/Event Supply_2.jpg", alt: "ระบบไฟแสงสี Moving Head และจอ LED ขนาดใหญ่บนเวที โดย Focusgroup Studio" },
    { src: "/Event Supply_3.jpeg", alt: "ทีมช่างควบคุมระบบภาพ เสียง และแสงสีหน้างานอีเวนต์" },
    { src: "/Event Supply_4.jpeg", alt: "โครงสร้างเวทีและจอ LED ความละเอียดสูงในงานสัมมนาและเปิดตัวสินค้า" },
    { src: "/Event Supply_5.jpeg", alt: "ระบบเครื่องเสียง Line Array และไฟเวทีสำหรับงานเลี้ยงบริษัทและกาลาดินเนอร์" },
    { src: "/Event Supply_6.jpg", alt: "ติดตั้งฉากเวที โครงทรัส และจอ LED ครบวงจร" }
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
                <Layers className="w-3 h-3" /> Event Supply & Equipment Rental
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
                เช่าเวที แสง สี เสียง และจอ LED พร้อมทีมคุมหน้างาน
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                <strong>Focusgroup Studio</strong> ให้เช่าและติดตั้งอุปกรณ์งานอีเวนต์ครบชุดในกรุงเทพฯ และต่างจังหวัด ได้แก่ เวที โครงสร้าง ระบบเสียง ระบบแสง และจอ LED พร้อมทีมช่างและทีมคุมหน้างานตลอดงาน เหมาะกับงานบริษัท งานสัมมนา งานเปิดตัวสินค้า และคอนเสิร์ต เช่าเฉพาะอุปกรณ์ หรือเช่าคู่กับบริการจัดงานก็ได้
              </p>
            </motion.div>
          </div>

          {/* ตารางอุปกรณ์ที่ให้เช่า */}
          <div className="max-w-5xl mb-20 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900">อุปกรณ์ที่ให้เช่าพร้อมทีมติดตั้ง</h2>
                <p className="text-slate-600 text-sm mt-1">จัดชุดอุปกรณ์ให้เหมาะกับขนาดพื้นที่และจำนวนผู้ร่วมงาน</p>
              </div>
              <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6">
                  ส่งผังงานเพื่อประเมินชุดอุปกรณ์
                </Button>
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-left border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-slate-100 text-slate-700">
                    <th className="py-4 px-6 font-bold w-1/3 md:w-1/4">หมวดอุปกรณ์</th>
                    <th className="py-4 px-6 font-bold">รายละเอียดและสเปก</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/60">เวทีและโครงสร้าง</td>
                    <td className="py-4 px-6 text-slate-700">
                      เวทีสำเร็จรูปและเวทีคัสตอม (ขนาดตั้งแต่ 4×6 ม. ถึง 12×8 ม. หรือตามพื้นที่จริง), โครงทรัสอะลูมิเนียม (Truss), โครงสร้างฉาก Backdrop และโพเดียม
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/60">จอ LED</td>
                    <td className="py-4 px-6 text-slate-700">
                      จอ LED Indoor และ Outdoor ความละเอียดสูง (Pixel Pitch P2.5 – P3.9) ต่อขนาดได้ตามพื้นที่เวที พร้อมระบบ Video Processor / Switching และช่างคุมภาพตลอดงาน
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/60">ระบบเสียง (Sound)</td>
                    <td className="py-4 px-6 text-slate-700">
                      ชุดลำโพง Line Array และ Point Source, ลำโพงมอนิเตอร์เวที, ไมโครโฟนไร้สาย Digital, Digital Mixer พร้อม Sound Engineer รองรับตั้งแต่งานสัมมนา 50 คน ถึงคอนเสิร์ตหลายพันคน
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-bold text-slate-900 bg-slate-50/60">ระบบแสง (Lighting)</td>
                    <td className="py-4 px-6 text-slate-700">
                      ไฟ Moving Head (Beam / Spot / Wash), ไฟ Par LED, ไฟเคลียร์หน้าเวที (Warm White / Fresnel), ไฟ Follow Light, เครื่องทำควัน (Hazer) และไฟบรรยากาศ พร้อม Lighting Designer คุมบอร์ดไฟ
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* ภาพผลงาน */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900">ตัวอย่างงานติดตั้งเวที แสง สี เสียง และจอ LED</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supplyGallery.map((item, idx) => (
                <div key={idx} className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-200 border border-slate-200/80 shadow-sm group">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* FAQ ประจำหน้า */}
          <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <HelpCircle className="w-7 h-7 text-sky-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">คำถามที่พบบ่อยเกี่ยวกับการเช่าอุปกรณ์</h2>
            </div>
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">เช่าเฉพาะจอ LED ได้ไหม?</h3>
                <p className="text-slate-600 leading-relaxed">
                  ได้ มีทีมติดตั้งและคนคุมภาพบนจอให้ด้วยตลอดงาน
                </p>
              </div>
              <div className="pb-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">ต้องจองล่วงหน้ากี่วัน?</h3>
                <p className="text-slate-600 leading-relaxed">
                  แนะนำให้จองล่วงหน้าอย่างน้อย 7–14 วัน ช่วงปลายปี (ตุลาคม–ธันวาคม) ควรจองเร็วกว่านั้นเพื่อล็อกคิวอุปกรณ์และทีมช่าง
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">คิดราคายังไง?</h3>
                <p className="text-slate-600 leading-relaxed">
                  คิดตามชุดอุปกรณ์ จำนวนวัน และระยะทาง ทักมาคุยทาง LINE พร้อมแบบผังงานถ้ามี เราช่วยจัดชุดอุปกรณ์ให้พอดีกับงาน
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
