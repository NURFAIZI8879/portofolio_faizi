import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#0a0f1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-400">
            © {new Date().getFullYear()} Faizi. Built with React + Tailwind CSS.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/NURFAIZI8879" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:faiziasyi140406@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
        <div className="text-center mt-4 text-xs text-slate-500 flex items-center justify-center gap-1">
          Made with <Heart size={12} className="text-red-500" /> in Palembang
        </div>
      </div>
    </footer>
  );
}