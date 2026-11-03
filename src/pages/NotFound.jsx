import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-slate-400 mb-8">Halaman tidak ditemukan</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all"
        >
          <Home size={18} />
          Kembali ke Home
        </Link>
      </div>
    </div>
  );
}