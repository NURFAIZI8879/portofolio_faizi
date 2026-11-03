import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group glass-card rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all glow-hover"
    >
      {/* Thumbnail */}
      <div
        className="relative h-48 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)`,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-30">
            {project.category === "AR / Game" ? "🎮" : "🌐"}
          </div>
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          {project.featured && (
            <span className="px-2 py-1 bg-indigo-500/90 text-white text-xs rounded-full font-medium">
              Featured
            </span>
          )}
          <span className="px-2 py-1 bg-slate-900/80 text-slate-300 text-xs rounded-full">
            {project.category}
          </span>
        </div>
        <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 mb-3">{project.subtitle}</p>
        <p className="text-sm text-slate-300 mb-4 line-clamp-3">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs rounded-md border border-slate-700"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
            >
              <Github size={16} />
              Source
            </a>
          )}
          <Link
            to={`/project/${project.id}`}
            className="ml-auto flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-400 transition-colors"
          >
            Detail
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}