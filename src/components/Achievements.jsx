import { motion } from "framer-motion";
import { Trophy, Award, Star, Medal } from "lucide-react";

const achievements = [
  {
    title: "Juara Harapan 1",
    event: "Lomba Inovasi Kota Palembang",
    category: "Kategori Masyarakat Tematik",
    organizer: "Bappeda Litbang Pemerintah Kota Palembang",
    year: "2024",
    description:
      "Berkontribusi aktif dalam tim sebagai Full-Stack Developer yang bertanggung jawab mengembangkan platform web inovasi (KENTEN - Kompetisi Inovasi Kota Palembang), mencakup perancangan antarmuka pengguna (front-end), pemrosesan logika serta basis data (back-end), hingga mengintegrasikan seluruh sistem secara kolaboratif.",
    icon: Trophy,
    color: "#f59e0b",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 sm:py-28 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Pencapaian & <span className="gradient-text">Penghargaan</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Prestasi yang telah diraih selama perjalanan akademik dan profesional.
          </p>
        </motion.div>

        <div className="space-y-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 sm:p-8 hover:border-amber-500/50 transition-all"
            >
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${ach.color}20` }}
                >
                  <ach.icon size={32} style={{ color: ach.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{ach.title}</h3>
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 text-xs rounded-full">
                      {ach.year}
                    </span>
                  </div>
                  <p className="text-indigo-400 font-medium mb-1">{ach.event}</p>
                  <p className="text-sm text-slate-400 mb-1">{ach.category}</p>
                  <p className="text-sm text-slate-500 mb-4">{ach.organizer}</p>
                  <p className="text-slate-300 leading-relaxed text-sm">{ach.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}