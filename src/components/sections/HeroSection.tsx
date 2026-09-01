import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onOpenConfiguratorModal?: () => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section id="home" className="relative h-[82vh] sm:h-[86vh] lg:h-[88vh] min-h-[520px] flex items-end pb-12 sm:pb-16 overflow-hidden bg-slate-950 font-sans">
      {/* Full-width Responsive Background Building Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture className="w-full h-full block">
          <source media="(min-width: 768px)" srcSet="/alpha-facility-desktop.jpg" />
          <img
            src="/alpha-facility-mobile.jpg"
            alt="Alpha Healthcare Solutions Headquarters - Thana, Kannur"
            className="w-full h-full object-cover object-center filter brightness-[0.92] transition-all duration-700"
          />
        </picture>
        {/* Dark Overlay Gradient for maximum contrast matching reference design */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
      </div>

      {/* Main Lower-Left Content Block */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex items-end justify-between gap-6">
        <div className="max-w-3xl space-y-4 text-left">
          {/* Main Statement Overlay Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14] drop-shadow-md">
            Global Healthcare Trading &amp; <span className="text-brand-blue-500">Consultancy</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium max-w-2xl leading-relaxed drop-shadow-xs">
            Alpha healthcare solutions is global healthcare trading and consultancy company committed to advancing medical standards through innovation, precision, and integrity.
          </p>

          {/* Pill CTA Button */}
          <div className="pt-2">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-3 px-5 py-2.5 bg-black/45 hover:bg-black/70 backdrop-blur-md border border-white/40 hover:border-white text-white text-sm font-semibold rounded-full shadow-lg transition-all cursor-pointer group"
            >
              <span>Get Quotation</span>
              <div className="w-7 h-7 rounded-full bg-white text-slate-950 flex items-center justify-center group-hover:translate-x-0.5 transition-transform flex-shrink-0">
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Right Carousel Pagination Dots matching screenshot */}
        <div className="hidden sm:flex items-center gap-2 pb-2">
          <span className="w-2.5 h-2.5 rounded-full bg-white shadow-xs" />
          <span className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors cursor-pointer" />
          <span className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors cursor-pointer" />
          <span className="w-2 h-2 rounded-full bg-white/50 hover:bg-white/80 transition-colors cursor-pointer" />
        </div>
      </div>
    </section>
  );
};

