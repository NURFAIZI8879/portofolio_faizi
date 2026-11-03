import { motion } from "framer-motion";
import { Code, Gamepad2, Database, Award, Briefcase, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Code, label: "Web Development", desc: "React, Next.js, PHP, Tailwind" },
  { icon: Gamepad2, label: "AR / Game Dev", desc: "Unity, Vuforia, C#" },
  { icon: Database, label: "Backend & DB", desc: "Firebase, MySQL, REST API" },
  { icon: Award, label: "Prestasi", desc: "Juara Harapan 1 Lomba Inovasi" },
];

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tentang <span className="gradient-text">Saya</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Developer yang passionate dalam membangun solusi digital yang bermakna.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-slate-300 leading-relaxed mb-4">
              Saya adalah lulusan D4 Teknologi Informatika Multimedia Digital dari
              Politeknik Negeri Sriwijaya dengan IPK 3.49. Memiliki pengalaman
              magang di LLDIKTI Wilayah II sebagai tim Hukum, Kepegawaian, dan
              Tatalaksana, di mana terlibat dalam pengelolaan sistem informasi dan
              data digital.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Memiliki pengalaman dalam pengembangan web dan aplikasi AR. Pernah
              berkontribusi sebagai developer dalam tim Lomba Inovasi Kota Palembang
              dan meraih Juara Harapan 1 (Kategori Masyarakat Tematik).
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Memiliki skill di bidang IT Support & Troubleshooting, Cyber Security,
              Network Security, dan pengelolaan data. Aktif mencari peluang kerja
              di bidang IT.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-full text-sm">
                📍 Palembang, Sumatera Selatan
              </span>
              <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-full text-sm">
                🎓 D4 Teknologi Informatika
              </span>
              <span className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-300 rounded-full text-sm">
                💼 Open to work
              </span>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((h, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-5 hover:border-indigo-500/50 transition-all glow-hover"
              >
                <h.icon className="text-indigo-400 mb-3" size={28} />
                <h3 className="font-semibold text-white mb-1">{h.label}</h3>
                <p className="text-sm text-slate-400">{h.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}