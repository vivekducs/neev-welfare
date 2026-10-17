import Link from "next/link";
import { Home, ArrowLeft, Search, Compass, Heart } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-28 pb-20 px-4">
      <div className="max-w-xl w-full text-center space-y-8">
        {/* Large 404 Visual */}
        <div className="relative inline-block">
          <span className="text-8xl sm:text-9xl font-black font-heading text-slate-100 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00873e] text-xs font-black uppercase tracking-wider shadow-sm">
              <Compass className="w-4 h-4 animate-spin" />
              <span>PAGE NOT FOUND</span>
            </span>
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-3xl font-black text-[#001c37] font-heading tracking-tight">
            Looks like you took an uncharted path
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            The page you are looking for may have been moved, renamed, or does not exist. Let us help you get back to empowering rural communities.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <Link
            href="/"
            className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00873e] hover:bg-emerald-50/20 text-xs font-bold text-[#001c37] transition-all"
          >
            Home
          </Link>
          <Link
            href="/programs/"
            className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00873e] hover:bg-emerald-50/20 text-xs font-bold text-[#001c37] transition-all"
          >
            Our Programs
          </Link>
          <Link
            href="/about/"
            className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00873e] hover:bg-emerald-50/20 text-xs font-bold text-[#001c37] transition-all"
          >
            About Us
          </Link>
          <Link
            href="/donate/"
            className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-[#00873e] hover:bg-emerald-50/20 text-xs font-bold text-[#001c37] transition-all"
          >
            Donate (80G)
          </Link>
        </div>

        {/* Action Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#001c37] hover:bg-[#0a2540] text-white text-xs font-bold shadow-lg transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/contact/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#001c37] text-xs font-bold transition-all"
          >
            <span>Contact Helpdesk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
