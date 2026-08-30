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
    <section id="home" className="relative min-h-[92vh] flex items-center pt-32 pb-16 overflow-hidden bg-slate-100">
      {/* Background Building Image with Higher Opacity */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/alpha-facility.jpg"
          alt="Alpha Healthcare Solutions Building"
          className="w-full h-full object-cover object-center opacity-55 scale-105"
        />
        {/* Soft natural ambient overlays for enhanced text contrast without white blocks */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-50/90 via-slate-50/70 to-slate-50/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/30 via-transparent to-slate-100/90" />
      </div>

      {/* Background Subtle Medical Grid */}
      <div className="absolute inset-0 ecg-grid opacity-40 pointer-events-none z-0" />

      {/* Floating subtle ambient lighting circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center min-h-[70vh] py-12">
        {/* Left Aligned Main Content Block (No Card Container) */}
        <div className="max-w-3xl space-y-6 text-left my-auto">
          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy-950 tracking-tight leading-[1.15] sm:leading-[1.12]">
              Global Healthcare Trading & <br className="hidden sm:inline" />
              <span className="text-brand-blue-600 sm:ml-0 ml-1">Hospital Consultancy</span>
            </h1>
            
            <p className="text-sm sm:text-lg text-slate-700 font-medium max-w-2xl leading-relaxed">
              Specializing in international import, export, and distribution of certified medical instruments, diagnostic equipment, and hospital infrastructure solutions.
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
