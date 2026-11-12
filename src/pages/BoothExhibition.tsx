import { motion } from "motion/react";
import { Layout, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { ServiceNavbar, CompanyInfoBox, ServiceFooter } from "../components/CompanyInfoBox";

export default function BoothExhibitionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "รับออกแบบและผลิตบูธนิทรรศการ บูธแสดงสินค้า กรุงเทพฯ | Focusgroup Studio";
  }, []);

  const steps = [
    "รับบรีฟ พื้นที่ และกฎของผู้จัดงาน",
    "ส่งแบบ 3D และใบเสนอราคาตามรายละเอียดที่คุยกัน",
    "ผลิตโครงสร้างและงานพิมพ์",
    "ติดตั้งตามเวลาที่ผู้จัดงานกำหนด และมีทีมดูแลระหว่างงาน",
    "รื้อถอนหลังจบงาน"
  ];

  const boothGallery = [
    { src: "/Booth_8.jpg", alt: "บูธนายอินทร์ มหกรรมหนังสือระดับชาติ ครั้งที่ 31 ศูนย์ประชุมแห่งชาติสิริกิติ์ QSNCC 2569" },
    { src: "/Booth_1.jpeg", alt: "ออกแบบและผลิตบูธนิทรรศการ โครงสร้างไม้และไฟตกแต่ง โดย Focusgroup Studio" },
    { src: "/Booth_4.jpeg", alt: "บูธนิทรรศการ สกสว. โรงแรม Angsana Laguna Phuket 2569" },
    { src: "/Booth_2.png", alt: "แบบ 3D และการผลิตบูธแสดงสินค้าสำหรับงานนิทรรศการ" },
    { src: "/Booth_7.jpeg", alt: "ติดตั้งบูธแสดงสินค้าและพื้นที่จัดแสดงนวัตกรรมระดับประเทศ" },
    { src: "/Booth_3.png", alt: "การออกแบบโครงสร้างบูธนิทรรศการ Custom Booth กรุงเทพฯ" }
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
                <Layout className="w-3 h-3" /> Booth & Exhibition Design
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight text-slate-900">
                รับออกแบบ ผลิต และติดตั้งบูธนิทรรศการ
              </h1>
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed bg-white p-6 md:p-8 rounded-3xl border border-slate-200/80 shadow-sm">
                <strong>Focusgroup Studio</strong> รับออกแบบ ผลิต และติดตั้งบูธนิทรรศการและบูธแสดงสินค้า สำหรับงานที่ศูนย์ประชุมแห่งชาติสิริกิติ์ (QSNCC) ไบเทค อิมแพค ห้างสรรพสินค้า และโรงแรมต่างจังหวัด เราทำครบตั้งแต่แบบ 3D กราฟิก งานผลิต ติดตั้งหน้างาน ไปจนถึงรื้อถอนหลังจบงาน เจ้าของบูธไม่ต้องประสานกับผู้จัดงานเอง
              </p>
            </motion.div>
          </div>

          {/* ขั้นตอนทำงาน & ผลงานจริง */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">ขั้นตอนทำงาน</h2>
              <ol className="space-y-4">
                {steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="w-7 h-7 rounded-full bg-sky-500/10 text-sky-600 font-bold text-sm flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-slate-700 font-medium">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-slate-900">ผลงานจริง</h2>
                <div className="overflow-hidden rounded-2xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-sm md:text-base">
                    <thead>
                      <tr className="bg-slate-100 text-slate-700">
                        <th className="py-3.5 px-4 font-bold">งาน</th>
                        <th className="py-3.5 px-4 font-bold">สถานที่</th>
                        <th className="py-3.5 px-4 font-bold">ลูกค้า</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr>
                        <td className="py-4 px-4 font-semibold">
                          บูธนายอินทร์ มหกรรมหนังสือระดับชาติ ครั้งที่ 31 (23 ต.ค.–1 พ.ย. 2569)
                        </td>
                        <td className="py-4 px-4 text-slate-600">QSNCC</td>
                        <td className="py-4 px-4 text-slate-700">นายอินทร์ (อมรินทร์)</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-4 font-semibold">บูธ สกสว. (2569)</td>
                        <td className="py-4 px-4 text-slate-600">Angsana Laguna Phuket</td>
                        <td className="py-4 px-4 text-slate-700">
                          สำนักงานคณะกรรมการส่งเสริมวิทยาศาสตร์ วิจัยและนวัตกรรม (สกสว.)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <p className="text-sm text-slate-600">
                  ส่งขนาดพื้นที่และชื่องานมาให้เราช่วยประเมินเบื้องต้นได้ทาง LINE
                </p>
                <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6 shrink-0">
                    ทักมาคุยกันก่อนได้
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* ภาพผลงานบูธ */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-900">ตัวอย่างผลงานออกแบบและผลิตบูธนิทรรศการ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {boothGallery.map((item, idx) => (
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
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">คำถามที่พบบ่อยเกี่ยวกับการทำบูธนิทรรศการ</h2>
            </div>
            <div className="space-y-6">
              <div className="pb-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">บูธขนาดเล็กสุดที่รับทำ?</h3>
                <p className="text-slate-600 leading-relaxed">
                  รับทำตั้งแต่ขนาดมาตรฐาน 3×3 ม. ไปจนถึงบูธโครงสร้างพิเศษ (Custom Booth / Pavilion) ขนาดใหญ่
                </p>
              </div>
              <div className="pb-6 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">ใช้เวลาผลิตนานแค่ไหน?</h3>
                <p className="text-slate-600 leading-relaxed">
                  ปกติใช้เวลาผลิตประมาณ 2–4 สัปดาห์หลังอนุมัติแบบ 3D (ขึ้นอยู่กับขนาดและวัสดุของโครงสร้าง)
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">เก็บบูธไว้ใช้งานครั้งต่อไปได้ไหม?</h3>
                <p className="text-slate-600 leading-relaxed">
                  สามารถออกแบบเป็นโครงสร้างถอดประกอบ (Modular / Reusable Structure) เพื่อนำกลับมาใช้งานซ้ำในงานถัดไปได้ แจ้งทีมงานตั้งแต่ขั้นตอนรับบรีฟเพื่อให้เราออกแบบโครงสร้างที่รองรับการรื้อและประกอบซ้ำได้เลย
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
