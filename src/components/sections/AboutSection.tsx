import React from 'react';
import { MapPin } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section id="about" className="py-20 bg-[#ebf2f8] relative overflow-hidden font-sans border-t border-sky-100">
      {/* Ambient Medical Background */}
      <div className="absolute inset-0 medical-cross-pattern opacity-60 pointer-events-none z-0" />
      <div className="absolute -top-32 right-0 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-0 -left-32 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy-950 tracking-tight leading-[1.15]">
            About <span className="text-brand-blue-600">Alpha Healthcare Solutions</span>
          </h2>
        </div>

        {/* Two-Column Layout: Paragraphs + About Us Image & Visit Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* Left Column — Overview Paragraphs + Vision & Mission */}
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

            {/* Vision & Mission Cards Grid — Clean Minimal Design */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              {/* Our Vision Card */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:border-slate-300 transition-all duration-200">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <img
                    src="/Brand/vision-gear.png"
                    alt="Our Vision"
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0 drop-shadow-sm"
                  />
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Our Vision</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  Committed to provide the highest level of Operational Excellence, with value - added Services to offer Complete Healthcare Solution for Long term Healthy Business Relations.
                </p>
              </div>

              {/* Our Mission Card */}
              <div className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs hover:border-slate-300 transition-all duration-200">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <img
                    src="/Brand/mission-gear.png"
                    alt="Our Mission"
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0 drop-shadow-sm"
                  />
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Our Mission</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  To deliver the best possible Customer service, Excellent Quality &amp; the most Advanced Equipment&apos;.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column — Sticky Image & Visit Us */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">

            {/* About Us Signage Image */}
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 h-[420px] sm:h-[480px]">
              <img
                src="/Facility/about-us-signage.jpg"
                alt="Alpha Healthcare Solutions Signage"
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Visit Us Address Card — Clean Minimal Design */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-sky-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-tight">Visit Us</h3>
                  <p className="text-xs text-slate-400 font-medium">Headquarters &amp; Executive Office</p>
                </div>
              </div>

              <div className="space-y-1 text-sm text-slate-300 leading-relaxed font-normal border-t border-slate-800 pt-3.5">
                <p className="font-semibold text-white text-base">Alpha Healthcare Solutions</p>
                <p>Delta Tower, 2nd Floor, Thana</p>
                <p>Kannur – 670012, Kerala, India</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
