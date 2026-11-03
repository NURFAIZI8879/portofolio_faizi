import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/#about", label: "About" },
    { to: "/#experience", label: "Experience" },
    { to: "/#education", label: "Education" },
    { to: "/#skills", label: "Skills" },
    { to: "/#achievements", label: "Achievements" },
    { to: "/#projects", label: "Projects" },
    { to: "/#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0f172a]/80 backdrop-blur-lg border-b border-slate-700/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-sm pulse-glow">
              F
            </div>
            <span className="font-semibold text-lg tracking-tight group-hover:text-indigo-400 transition-colors">
              Portfolio
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.to}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://github.com/NURFAIZI8879"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-lg border-b border-slate-700/50">
          <div className="px-4 py-3 space-y-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.to}
                className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all"
              >
                {l.label}
              </a>
            ))}
            <div className="flex gap-4 pt-2 px-3">
              <a href="https://github.com/NURFAIZI8879" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="mailto:faiziasyi140406@gmail.com" className="text-slate-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}