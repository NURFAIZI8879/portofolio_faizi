import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Magang - Tim HKT (Hukum, Kepegawaian, Tatalaksana)",
    company: "LLDIKTI Wilayah II (Lembaga Layanan Pendidikan Tinggi)",
    location: "Palembang, Sumatera Selatan",
    period: "Februari 2025 - Juli 2025",
    description: [
      "Terlibat dalam penggunaan sistem informasi dan pengelolaan data digital untuk mendukung operasional internal tim HKT.",
      "Mengoperasikan sistem dan aplikasi pendukung, pengelolaan dokumen digital, serta pemrosesan data pada berbagai kebutuhan layanan.",
      "Menggunakan akses sistem sesuai kewenangan dan memastikan kelengkapan data yang digunakan dalam proses operasional tim.",
    ],
  },
  {
    title: "Full-Stack Developer (Tim)",
    company: "Lomba Inovasi Kota Palembang (Kategori Masyarakat Tematik)",
    location: "Palembang, Sumatera Selatan",
    period: "2024",
    description: [
      "Berkontribusi aktif dalam tim sebagai Full-Stack Developer yang bertanggung jawab mengembangkan platform web inovasi.",
      "Mencakup perancangan antarmuka pengguna (front-end), pemrosesan logika serta basis data (back-end).",
      "Mengintegrasikan seluruh sistem secara kolaboratif bersama anggota tim untuk menyelesaikan produk yang optimal.",
      "Meraih Juara Harapan 1 dalam Lomba Inovasi Kota Palembang (diselenggarakan oleh Bappeda Litbang Pemerintah Kota Palembang).",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pengalaman <span className="gradient-text">Kerja</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Riwayat pengalaman kerja dan proyek yang telah dilakukan.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-700 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full border-4 border-[#0f172a] md:-translate-x-1/2 z-10" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card rounded-xl p-6 hover:border-indigo-500/50 transition-all">
                    <div className="flex items-center gap-2 text-indigo-400 text-sm mb-2">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-slate-300 font-medium mb-1">{exp.company}</p>
                    <div className="flex items-center gap-1 text-sm text-slate-400 mb-4">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((desc, j) => (
                        <li key={j} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-indigo-400 mt-1">•</span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}