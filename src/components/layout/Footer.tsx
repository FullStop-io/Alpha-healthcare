import React from 'react';
import { BrandLogo } from '../ui/BrandLogo';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenQuoteModal,
}) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 relative overflow-hidden font-sans border-t border-slate-800/80">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-brand-blue-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ------------------------------------------------------------- */}
        {/* TOP CTA BAR — Clean, Executive Banner */}
        {/* ------------------------------------------------------------- */}
        <div className="py-10 sm:py-12 border-b border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to Upgrade Your Hospital Infrastructure?
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We supply certified medical instruments, hospital diagnostic equipment, and turnkey surgical solutions worldwide.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-500 text-white text-sm font-semibold shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-98"
          >
            <span>Request Equipment Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MAIN FOOTER GRID */}
        {/* ------------------------------------------------------------- */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 border-b border-slate-800/80 text-left">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block p-2.5 rounded-xl bg-white/95 shadow-xs">
              <BrandLogo size="lg" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Alpha Healthcare Solutions is a global healthcare trading and hospital consultancy company dedicated to delivering high-grade medical technologies, diagnostic modalities, and turnkey healthcare projects.
            </p>
            <span className="text-[11px] text-slate-400 font-medium tracking-wide block">
              Global Medical Technology & Consultancy
            </span>
          </div>

          {/* Column 2: Equipment & Modalities (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Medical Modalities
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { label: 'Radiology & Color Doppler', id: 'products' },
                { label: 'Cardiology & ECG Machines', id: 'products' },
                { label: 'Respiratory & CPAP Systems', id: 'products' },
                { label: 'ICU & Surgical Suites', id: 'products' },
                { label: 'Laboratory Analyzers', id: 'products' },
                { label: 'OB/GYN & Fetal Care', id: 'products' },
                { label: '4K Laparoscopy Towers', id: 'products' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Turnkey Projects', id: 'projects' },
                { label: 'Products', id: 'products' },
                { label: 'Contact', id: 'contact' },
              ].map((item, idx) => (
                <li key={idx}>
                  <button
                    type="button"
                    onClick={() => scrollTo(item.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-300">
                  Alpha Healthcare Solutions<br />
                  Delta Tower, 2nd Floor, Thana<br />
                  Kannur – 670012, Kerala, India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <PhoneCall className="w-4 h-4 text-brand-blue-400 shrink-0" />
                <a
                  href="tel:+919746920003"
                  className="text-slate-200 font-medium hover:text-white transition-colors"
                >
                  +91 97469 20003
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue-400 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-0.5">
                  <a
                    href="mailto:info@alphahealthkare.com"
                    className="text-slate-300 hover:text-white transition-colors"
                  >
                    info@alphahealthkare.com
                  </a>
                  <a
                    href="mailto:alphahealthkare@gmail.com"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-xs"
                  >
                    alphahealthkare@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* BOTTOM LEGAL BAR */}
        {/* ------------------------------------------------------------- */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Alpha Healthcare Solutions. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Quality</span>
            <span>•</span>
            <span>Precision</span>
            <span>•</span>
            <span>Integrity</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
