import React from 'react';
import { 
  ArrowRight, 
  Activity, 
  Layers,
  MessageSquare
} from 'lucide-react';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onOpenConfiguratorModal?: () => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const handleGetInTouchClick = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[92vh] flex items-center pt-32 pb-16 overflow-hidden bg-slate-900 sm:bg-slate-100">
      {/* Background Responsive Building Image (Portrait on Mobile, Widescreen on PC) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture className="w-full h-full block">
          <source media="(min-width: 768px)" srcSet="/alpha-facility-desktop.jpg" />
          <img
            src="/alpha-facility-mobile.jpg"
            alt="Alpha Healthcare Solutions Headquarters - Thana, Kannur"
            className="w-full h-full object-cover object-[center_15%] sm:object-[center_20%] md:object-[70%_center] lg:object-[75%_center] opacity-90 sm:opacity-95 md:opacity-100 transition-all duration-700"
          />
        </picture>
        {/* Directional gradient overlay: gives strong readability to left-aligned text while leaving building facade crisp and unobstructed */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/20 sm:from-slate-50/95 sm:via-slate-50/75 sm:to-transparent lg:from-slate-50/95 lg:via-slate-50/60 lg:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 via-transparent to-slate-100/40 sm:hidden" />
      </div>

      {/* Background Subtle Medical Grid */}
      <div className="absolute inset-0 ecg-grid opacity-20 pointer-events-none z-0" />

      {/* Floating subtle ambient lighting circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center min-h-[70vh] py-12">
        {/* Left Aligned Main Content Block */}
        <div className="max-w-3xl space-y-6 text-left my-auto">
          {/* Main Headline & Statement */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy-950 tracking-tight leading-[1.15] sm:leading-[1.12]">
              Global Healthcare Trading & <br className="hidden sm:inline" />
              <span className="text-brand-blue-600 sm:ml-0 ml-1">Consultancy</span>
            </h1>

            <p className="text-sm sm:text-base font-semibold text-brand-navy-900/95 tracking-wide">
              Committed to advancing medical standards through innovation, precision, and integrity.
            </p>
            
            <p className="text-sm sm:text-lg text-slate-700 font-medium max-w-2xl leading-relaxed">
              We specialize in the import, export, and distribution of high quality medical instruments, surgical supplies, and diagnostic equipment, serving hospitals, clinics, and distributors around the world.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-2 w-full sm:w-auto">
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-brand-navy-900 hover:bg-brand-blue-600 text-white text-xs sm:text-sm font-bold rounded-2xl shadow-clinical hover:shadow-cyan-glow transition-all cursor-pointer active:scale-98"
            >
              <span>Request Equipment Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleGetInTouchClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold rounded-2xl border border-slate-300 hover:border-brand-blue-400 shadow-sm transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-brand-blue-600" />
              <span>Get in Touch</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
