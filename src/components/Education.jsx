import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "Diploma IV (D4) Teknologi Informatika Multimedia Digital",
    school: "Politeknik Negeri Sriwijaya",
    location: "Palembang, Sumatera Selatan",
    period: "2022 - 2026",
    gpa: "3.49",
    description: "Program studi D4 yang fokus pada pengembangan aplikasi multimedia, web, dan teknologi digital.",
  },
  {
    degree: "SMA - MIPA",
    school: "SMAN 1 Banding Agung",
    location: "Kab. Ogan Komering Ulu Selatan, Sumatera Selatan",
    period: "2019 - 2022",
    gpa: "88",
    description: "Jurusan Matematika dan Ilmu Pengetahuan Alam (MIPA).",
  },
];

const training = [
  {
    title: "Teknologi Informasi dan Komunikasi",
    provider: "Studi Independen Bersetifikat (Vinix7)",
    period: "Agustus 2025 - Desember 2025",
    description: "Program studi independen bersetifikat di bidang teknologi informasi dan komunikasi.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pendidikan & <span className="gradient-text">Pelatihan</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Riwayat pendidikan dan pelatihan yang telah diikuti.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-indigo-500/50 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-indigo-400" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-white mb-1">{edu.degree}</h3>
                  <p className="text-indigo-400 font-medium text-sm mb-2">{edu.school}</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                    <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded text-xs">
                      IPK/Nilai: {edu.gpa}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Training */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Award className="text-indigo-400" size={22} />
            Pelatihan & Sertifikasi
          </h3>
          <div className="space-y-4">
            {training.map((t, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 hover:border-indigo-500/50 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="font-semibold text-white">{t.title}</h4>
                  <span className="text-sm text-slate-400 flex items-center gap-1">
                    <Calendar size={14} />
                    {t.period}
                  </span>
                </div>
                <p className="text-sm text-indigo-400 mb-1">{t.provider}</p>
                <p className="text-sm text-slate-300">{t.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}