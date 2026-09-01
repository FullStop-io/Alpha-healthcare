import React from 'react';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {

  return (
    <section id="about" className="py-20 bg-[#ebf2f8] relative overflow-hidden font-sans border-t border-sky-100">
      {/* Premium Hospital Ambient Medical Background */}
      <div className="absolute inset-0 medical-cross-pattern opacity-60 pointer-events-none z-0" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 overflow-hidden">
        <img
          src="/alpha-facility.jpg"
          alt=""
          className="w-full h-full object-cover filter blur-[1px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy-950 tracking-tight leading-[1.15]">
            About <span className="text-brand-blue-600">Alpha Healthcare Solutions</span>
          </h2>
        </div>

        {/* Two-Column Layout: Paragraphs + Building Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column — 5 Verbatim Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-[17px] text-slate-700 leading-[1.85] font-normal">
              Alpha healthcare solutions is global healthcare trading and consultancy company committed to advancing medical standards through innovation, precision, and integrity. We specialize in the import, export, and distribution of high quality medical instruments, surgical supplies, and diagnostic equipment, serving hospitals, clinics, and distributors around the world.
            </p>

            <p className="text-base sm:text-[17px] text-slate-700 leading-[1.85] font-normal">
              Guided by a passion for excellence, we work closely with leading trusted manufacturers to deliver quality products that meet the highest standards of safety, performance, and reliability. Our diverse portfolio includes advance state of art cutting-edge medical, laboratory, diagnostic, critical care, radiology &amp; imaging equipment to support healthcare professionals in delivering better patient outcomes.
            </p>

            <p className="text-base sm:text-[17px] text-slate-700 leading-[1.85] font-normal">
              In addition to equipment trading, we provide hospital turnkey consultancy services, helping partners navigate complex regulatory requirements, product registrations, and market access strategies. Our technical expert team ensures that clients can expand their operations globally while maintaining full compliance with national and international health authorities.
            </p>

            <p className="text-base sm:text-[17px] text-slate-700 leading-[1.85] font-normal">
              Alpha healthcare solutions dedicated to delivering reliable &amp; trusted partners to our valuable customer for their utmost satisfaction. We believe in long-term partnerships built on trust, transparency, and mutual growth. Every project we undertake reflects our unwavering focus on quality, timely delivery, and professional support.
            </p>

            <p className="text-base sm:text-[17px] text-slate-700 leading-[1.85] font-normal">
              With a strong commitment to innovation and healthcare advancement, Alpha Healthcare solutions continues to be a trusted name in the medical supply and consultancy industry — connecting technology, precision, and care to create a healthier world.
            </p>
          </div>

          {/* Right Column — Sticky Building Photo */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl overflow-hidden shadow-clinical-lg border border-slate-200/80 relative group h-[420px] sm:h-[500px] lg:h-[580px]">
              <picture className="w-full h-full block">
                <source media="(min-width: 640px)" srcSet="/alpha-facility-desktop.jpg" />
                <img
                  src="/alpha-facility-mobile.jpg"
                  alt="Alpha Healthcare Solutions Headquarters — Delta Tower, Thana, Kannur"
                  className="w-full h-full object-cover object-[center_30%] sm:object-center group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                />
              </picture>
              {/* Caption Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent px-5 py-5 text-left">
                <p className="text-sm font-bold text-white tracking-wide leading-snug">
                  Alpha Healthcare Solutions Headquarters
                </p>
                <p className="text-xs text-sky-300 font-medium mt-1">
                  Delta Tower, 2nd Floor, Thana, Kannur – Kerala, India
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

