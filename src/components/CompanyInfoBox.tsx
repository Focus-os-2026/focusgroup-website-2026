import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, MessageCircle, Facebook, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServiceNavbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-white/10 text-white">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-slate-200 hover:text-sky-400 transition-colors">
          <ArrowLeft className="w-5 h-5" />
          <span className="font-bold text-sm md:text-base">กลับหน้าแรก</span>
        </Link>
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link to="/event-organizer" className="hover:text-sky-400 transition-colors">จัดงานอีเวนต์</Link>
          <Link to="/event-supply" className="hover:text-sky-400 transition-colors">เช่าเวที แสง สี เสียง</Link>
          <Link to="/booth-exhibition" className="hover:text-sky-400 transition-colors">ทำบูธนิทรรศการ</Link>
          <Link to="/media-production" className="hover:text-sky-400 transition-colors">ผลิตวิดีโอ & ไลฟ์สด</Link>
          <Link to="/faq" className="hover:text-sky-400 transition-colors">คำถามที่พบบ่อย (FAQ)</Link>
        </div>
        <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
          <Button className="bg-sky-500 text-white rounded-full px-5 hover:bg-sky-600 transition-colors text-sm font-semibold">
            ทักมาคุยกันก่อนได้
          </Button>
        </a>
      </div>
    </nav>
  );
}

export function CompanyInfoBox({ dark = false }: { dark?: boolean }) {
  return (
    <section className={`py-16 ${dark ? "bg-slate-950 text-slate-100 border-t border-white/10" : "bg-white text-slate-900 border-t border-slate-200"}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-500 block mb-1">
                Company Information
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">
                ข้อมูลบริษัท — Focusgroup Studio
              </h2>
            </div>
            <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white rounded-full px-6">
                ทักมาคุยกันก่อนได้ทาง LINE
              </Button>
            </a>
          </div>

          <div className={`rounded-3xl overflow-hidden border ${dark ? "border-white/10 bg-slate-900/60" : "border-slate-200 bg-slate-50/70"}`}>
            <table className="w-full text-left border-collapse text-sm md:text-base">
              <tbody className={`divide-y ${dark ? "divide-white/10" : "divide-slate-200"}`}>
                <tr>
                  <th className={`py-4 px-6 font-semibold w-1/3 md:w-1/4 ${dark ? "text-slate-400 bg-white/5" : "text-slate-600 bg-slate-100/70"}`}>
                    ชื่อแบรนด์
                  </th>
                  <td className="py-4 px-6 font-bold">Focusgroup Studio</td>
                </tr>
                <tr>
                  <th className={`py-4 px-6 font-semibold ${dark ? "text-slate-400 bg-white/5" : "text-slate-600 bg-slate-100/70"}`}>
                    ชื่อนิติบุคคล
                  </th>
                  <td className="py-4 px-6 font-medium">บริษัท โฟกัสกรุ๊ป สตูดิโอ จำกัด</td>
                </tr>
                <tr>
                  <th className={`py-4 px-6 font-semibold ${dark ? "text-slate-400 bg-white/5" : "text-slate-600 bg-slate-100/70"}`}>
                    ที่อยู่
                  </th>
                  <td className="py-4 px-6">311 ซอยพัฒนาการ 50 แขวงพัฒนาการ เขตสวนหลวง กรุงเทพฯ 10250</td>
                </tr>
                <tr>
                  <th className={`py-4 px-6 font-semibold ${dark ? "text-slate-400 bg-white/5" : "text-slate-600 bg-slate-100/70"}`}>
                    โทร
                  </th>
                  <td className="py-4 px-6">
                    <a href="tel:+66867444616" className="text-sky-500 hover:underline font-semibold">
                      086-744-4616
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className={`py-4 px-6 font-semibold ${dark ? "text-slate-400 bg-white/5" : "text-slate-600 bg-slate-100/70"}`}>
                    อีเมล
                  </th>
                  <td className="py-4 px-6">
                    <a href="mailto:angkana@focusgroupstudio.com" className="text-sky-500 hover:underline">
                      angkana@focusgroupstudio.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className={`py-4 px-6 font-semibold ${dark ? "text-slate-400 bg-white/5" : "text-slate-600 bg-slate-100/70"}`}>
                    LINE
                  </th>
                  <td className="py-4 px-6">
                    <a href="https://lin.ee/PEIHMBM" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline font-semibold">
                      lin.ee/PEIHMBM
                    </a>
                  </td>
                </tr>
                <tr>
                  <th className={`py-4 px-6 font-semibold ${dark ? "text-slate-400 bg-white/5" : "text-slate-600 bg-slate-100/70"}`}>
                    Facebook
                  </th>
                  <td className="py-4 px-6">
                    <a href="https://www.facebook.com/FocusGroupth" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline font-semibold">
                      facebook.com/FocusGroupth
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceFooter() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-white/10 text-sm">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-bold text-white">Focusgroup Studio (บริษัท โฟกัสกรุ๊ป สตูดิโอ จำกัด)</p>
          <p className="text-xs text-slate-500 mt-1">311 ซอยพัฒนาการ 50 แขวงพัฒนาการ เขตสวนหลวง กรุงเทพฯ 10250 · โทร 086-744-4616</p>
        </div>
        <div className="flex flex-wrap gap-6 text-xs">
          <Link to="/" className="hover:text-sky-400 transition-colors">หน้าแรก</Link>
          <Link to="/event-organizer" className="hover:text-sky-400 transition-colors">รับจัดงานอีเวนต์</Link>
          <Link to="/event-supply" className="hover:text-sky-400 transition-colors">เช่าเวที แสง สี เสียง</Link>
          <Link to="/booth-exhibition" className="hover:text-sky-400 transition-colors">ทำบูธนิทรรศการ</Link>
          <Link to="/media-production" className="hover:text-sky-400 transition-colors">ผลิตวิดีโอ & ไลฟ์สด</Link>
          <Link to="/faq" className="hover:text-sky-400 transition-colors">FAQ</Link>
        </div>
      </div>
    </footer>
  );
}
