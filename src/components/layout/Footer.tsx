import React, { useState } from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Award,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuoteModal,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#091528] text-slate-300 relative overflow-hidden font-sans border-t border-slate-800/80">
      {/* Background Architectural Ambient Glow & Shapes */}
      <div className="absolute inset-0 medical-cross-pattern-dark opacity-50 pointer-events-none z-0" />
      <div className="absolute -top-40 left-1/4 w-[500px] h-[500px] bg-brand-blue-600/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -bottom-40 right-10 w-[450px] h-[450px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-12 relative z-10">
        {/* ------------------------------------------------------------- */}
        {/* FLOATING TOP ACTION CARD (PREMIUM SCULPTED ISLAND) */}
        {/* ------------------------------------------------------------- */}
        <div className="relative rounded-3xl p-6 sm:p-8 md:p-10 mb-16 overflow-hidden bg-gradient-to-r from-slate-900/90 via-[#0d223f]/90 to-slate-900/90 border border-sky-500/20 shadow-2xl backdrop-blur-xl">
          {/* Subtle Corner Shape Accent */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-sky-400/15 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2.5 max-w-2xl text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-[11px] font-mono font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                <span>24/7 Global Healthcare Logistics & Supply</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                Global Healthcare Trading & <span className="text-sky-400">Turnkey Advisory</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-xl">
                Supplying certified medical instruments, hospital diagnostic equipment, and turnkey surgical infrastructures worldwide with uncompromising precision.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-blue-600 to-sky-500 hover:from-brand-blue-500 hover:to-sky-400 text-white text-xs sm:text-sm font-bold shadow-lg shadow-sky-500/20 transition-all duration-300 hover:shadow-cyan-glow cursor-pointer active:scale-98"
              >
                <span>Request Equipment Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MAIN 4-COLUMN MINIMAL GRID */}
        {/* ------------------------------------------------------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800/80 text-left">
          
          {/* Column 1: Brand Logo, Trust Certifications & Newsletter (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-block p-2.5 rounded-2xl bg-white shadow-md">
                <BrandLogo className="h-10 w-auto" />
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                Alpha Healthcare Solutions is an international medical trading and hospital consultancy company. We supply high-grade medical technologies, diagnostic modalities, and surgical suites across worldwide healthcare networks.
              </p>
            </div>

            {/* Premium Pill Badges for Certifications */}
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-sky-300 text-[11px] font-medium shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>ISO 13485:2016</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-sky-300 text-[11px] font-medium shadow-2xs">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                <span>CE 0123 / FDA 510(k)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/80 text-sky-300 text-[11px] font-medium shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
                <span>NABL Calibrated</span>
              </div>
            </div>

            {/* Sleek Integrated Capsule Newsletter Form */}
            <div className="space-y-2 pt-1 max-w-md">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-300 block">
                Biomedical Innovations & Clinical Bulletin
              </span>
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  required
                  placeholder="Enter hospital email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-28 py-3 text-xs bg-slate-900/90 border border-slate-700/80 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400/50 transition-all shadow-inner"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-4 py-2 text-xs font-bold bg-brand-blue-600 hover:bg-brand-blue-500 text-white rounded-xl transition-all flex items-center gap-1 cursor-pointer shadow-xs"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-xs text-emerald-400 flex items-center gap-1 pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Thank you for subscribing to Alpha Medical Insights.
                </p>
              )}
            </div>
          </div>

          {/* Column 2: Equipment Pillars (2.5 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-sky-400 flex items-center gap-2">
              <span className="w-1.5 h-3.5 rounded-full bg-sky-400" />
              Equipment Pillars
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {[
                { label: 'Radiology & Color Doppler', id: 'products' },
                { label: 'Cardiology & ECG Machines', id: 'products' },
                { label: 'Respiratory & CPAP Systems', id: 'products' },
                { label: 'ICU & Surgical Suites', id: 'products' },
                { label: 'Laboratory Analyzers', id: 'products' },
                { label: 'OB/GYN & Fetal Care', id: 'products' },
                { label: '4K Laparoscopy Towers', id: 'products' },
                { label: 'Power Mobility Wheelchairs', id: 'products' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="group inline-flex items-center gap-1.5 hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-sky-400 flex items-center gap-2">
              <span className="w-1.5 h-3.5 rounded-full bg-sky-400" />
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {[
                { label: 'Home Overview', id: 'home' },
                { label: 'About Company', id: 'about' },
                { label: 'Turnkey Projects', id: 'projects' },
                { label: 'Clinical Catalog', id: 'products' },
                { label: 'Contact Desk', id: 'contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="group inline-flex items-center gap-1.5 hover:text-white transition-all duration-200 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Facility & Contacts (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-sky-400 flex items-center gap-2">
              <span className="w-1.5 h-3.5 rounded-full bg-sky-400" />
              Facility & Contacts
            </h4>
            <div className="space-y-3.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center flex-shrink-0 text-sky-400 mt-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="leading-relaxed text-slate-300">
                  Alpha Healthcare Solutions, Thana, Kannur - 670012, Kerala, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center flex-shrink-0 text-sky-400">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <a
                  href="tel:+919746920003"
                  className="font-mono text-white font-semibold hover:text-sky-300 transition-colors"
                >
                  +91 97469 20003
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center flex-shrink-0 text-sky-400 mt-0.5">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col space-y-1">
                  <a
                    href="mailto:info@alphahealthkare.com"
                    className="hover:text-white transition-colors truncate"
                    title="Company Email"
                  >
                    info@alphahealthkare.com
                  </a>
                  <a
                    href="mailto:alphahealthkare@gmail.com"
                    className="hover:text-white transition-colors truncate text-slate-400 hover:text-slate-200"
                    title="Email"
                  >
                    alphahealthkare@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM LEGAL & COPYRIGHT */}
        {/* ------------------------------------------------------------- */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© 2026 Alpha Healthcare Solutions. All rights reserved. Your Reliable Partner in Healthcare.</p>
          <div className="flex items-center gap-5 text-slate-400">
            <a href="#privacy" className="hover:text-sky-300 transition-colors">Privacy Policy</a>
            <span className="text-slate-700">•</span>
            <a href="#terms" className="hover:text-sky-300 transition-colors">Terms of Medical Supply</a>
            <span className="text-slate-700">•</span>
            <a href="#iso" className="hover:text-sky-300 transition-colors">Compliance & Audit Data</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
