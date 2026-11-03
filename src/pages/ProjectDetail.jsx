import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { projects } from "../data/projects.js";
import { ExternalLink, Github, ArrowLeft, Code2 } from "lucide-react";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Proyek tidak ditemukan</h1>
          <Link to="/" className="text-indigo-400 hover:underline">
            Kembali ke Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={18} />
          Kembali
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div
            className="h-64 rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${project.color}44, ${project.color}11)`,
            }}
          >
            <div className="text-8xl opacity-20">
              {project.category === "AR / Game" ? "🎮" : "🌐"}
            </div>
            <div className="absolute top-4 right-4 flex gap-2">
              {project.featured && (
                <span className="px-3 py-1 bg-indigo-500/90 text-white text-sm rounded-full font-medium">
                  Featured
                </span>
              )}
              <span className="px-3 py-1 bg-slate-900/80 text-slate-300 text-sm rounded-full">
                {project.category}
              </span>
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{project.title}</h1>
          <p className="text-lg text-slate-400 mb-6">{project.subtitle}</p>

          <p className="text-slate-300 leading-relaxed mb-8">{project.description}</p>

          {/* Tech stack */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Code2 size={20} className="text-indigo-400" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 bg-slate-800 text-slate-200 text-sm rounded-lg border border-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-all border border-slate-700"
              >
                <Github size={18} />
                Source Code
              </a>
            )}
          </div>

          {!project.liveUrl && (
            <p className="mt-6 text-sm text-slate-500 italic">
              * Proyek ini tidak memiliki live demo (aplikasi desktop/AR). Lihat source code di GitHub.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}