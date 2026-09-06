import React from 'react';

interface HeroSectionProps {
  onOpenQuoteModal: () => void;
  onOpenConfiguratorModal?: () => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="home" className="relative h-[82vh] sm:h-[86vh] lg:h-[88vh] min-h-[520px] flex items-end pb-12 sm:pb-16 overflow-hidden bg-slate-950 font-sans">
      {/* Full-width Responsive Background Building Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <picture className="w-full h-full block">
          <source media="(min-width: 768px)" srcSet="/Facility/alpha-facility-desktop.jpg" />
          <img
            src="/Facility/alpha-facility-mobile.jpg"
            alt="Alpha Healthcare Solutions Headquarters - Thana, Kannur"
            className="w-full h-full object-cover object-center filter brightness-[0.92] transition-all duration-700"
          />
        </picture>
        {/* Dark Overlay Gradient for maximum contrast matching reference design */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/45 to-slate-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-transparent" />
      </div>

      {/* Main Lower-Left Content Block */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="max-w-3xl space-y-4 text-left">
          {/* Main Statement Overlay Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14] drop-shadow-md">
            Global Healthcare Trading &amp; <span className="text-brand-blue-500">Consultancy</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-200 font-medium max-w-2xl leading-relaxed drop-shadow-xs">
            Connecting trusted medical technology, expertise, and innovation with healthcare providers worldwide. <span className="text-brand-blue-400 font-semibold">Quality. Precision. Integrity.</span> — Advancing Healthcare, Empowering Better Care, Building a Healthier World.
          </p>
        </div>
      </div>
    </section>
  );
};
