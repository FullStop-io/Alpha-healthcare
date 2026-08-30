import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { SpotlightCard } from '../ui/SpotlightCard';
import { 
  Globe2, 
  ShieldCheck, 
  Award, 
  Building2, 
  CheckCircle2, 
  FileCheck2, 
  Microscope,
  Stethoscope,
  ArrowRight,
  TrendingUp
} from 'lucide-react';

interface AboutSectionProps {
  onOpenQuoteModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  onOpenQuoteModal,
}) => {
  const [activeTab, setActiveTab] = useState<'trading' | 'consultancy' | 'quality'>('trading');

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header & Main Core Identity Statement */}
        <div className="max-w-4xl space-y-4 text-left">
          <Badge variant="primary" size="md">
            <Globe2 className="w-3.5 h-3.5" />
            About Us
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy-950 tracking-tight leading-[1.15]">
            About <span className="text-brand-blue-600">Alpha Healthcare</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            Alpha Healthcare Solutions is a global medical trading and consultancy company. We specialize in supplying high-quality medical instruments, surgical supplies, and diagnostic equipment to hospitals, clinics, and healthcare providers worldwide.
          </p>
        </div>

        {/* 4 Core Pillars Grid based on Official Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <SpotlightCard className="p-7 space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-brand-navy-900 text-sky-400 flex items-center justify-center shadow-clinical">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy-900">
              Global Import & Export
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Specialized international distribution of hospital-grade medical instruments, diagnostic systems, and surgical equipment across worldwide healthcare networks.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-7 space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-brand-blue-600 text-white flex items-center justify-center shadow-cyan-glow">
              <Microscope className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy-900">
              Cutting-Edge Portfolio
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              State-of-the-art medical, laboratory, diagnostic, critical care, radiology & imaging equipment from trusted global manufacturers.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-7 space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-700 text-white flex items-center justify-center shadow-md">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy-900">
              Hospital Turnkey Consultancy
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Complete guidance on regulatory compliance, product registrations, market access strategies, and technical department planning.
            </p>
          </SpotlightCard>

          <SpotlightCard className="p-7 space-y-3.5">
            <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-brand-navy-900">
              Trusted Partnerships
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Long-term customer relationships built on transparency, quality assurance, timely delivery, and professional lifecycle support.
            </p>
          </SpotlightCard>
        </div>

        {/* Detailed Core Principles Tabs */}
        <div className="bg-white/85 backdrop-blur-md rounded-3xl border border-sky-200/60 shadow-clinical-lg overflow-hidden">
          {/* Tab Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-b border-sky-200/50 bg-slate-100/70 divide-y md:divide-y-0 md:divide-x divide-sky-200/50">
            <button
              type="button"
              onClick={() => setActiveTab('trading')}
              className={`flex items-center justify-center gap-2.5 px-4 sm:px-6 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                activeTab === 'trading'
                  ? 'bg-white text-brand-navy-900 border-l-4 md:border-l-0 md:border-b-2 border-brand-blue-600 shadow-xs font-extrabold'
                  : 'text-slate-600 hover:text-brand-navy-900 hover:bg-white/40'
              }`}
            >
              <Stethoscope className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
              <span>Medical Equipment & Trading</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('consultancy')}
              className={`flex items-center justify-center gap-2.5 px-4 sm:px-6 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                activeTab === 'consultancy'
                  ? 'bg-white text-brand-navy-900 border-l-4 md:border-l-0 md:border-b-2 border-brand-blue-600 shadow-xs font-extrabold'
                  : 'text-slate-600 hover:text-brand-navy-900 hover:bg-white/40'
              }`}
            >
              <FileCheck2 className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
              <span>Turnkey Hospital Consultancy</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('quality')}
              className={`flex items-center justify-center gap-2.5 px-4 sm:px-6 py-3.5 sm:py-4 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center ${
                activeTab === 'quality'
                  ? 'bg-white text-brand-navy-900 border-l-4 md:border-l-0 md:border-b-2 border-brand-blue-600 shadow-xs font-extrabold'
                  : 'text-slate-600 hover:text-brand-navy-900 hover:bg-white/40'
              }`}
            >
              <Award className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
              <span>Quality, Compliance & Support</span>
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-5 sm:p-8 lg:p-10">
            {activeTab === 'trading' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-600">
                    Import, Export & Global Distribution
                  </span>
                  <h3 className="text-2xl font-bold text-brand-navy-900">
                    Delivering Quality Products from Leading Manufacturers
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Guided by a passion for excellence, we work closely with leading trusted manufacturers to deliver quality products that meet the highest standards of safety, performance, and reliability.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Our diverse portfolio includes state-of-the-art medical, laboratory, diagnostic, critical care, radiology & imaging equipment to support healthcare professionals in delivering better patient outcomes.
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800">Critical Care</span>
                    <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800">Radiology & Imaging</span>
                    <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800">Laboratory Equipment</span>
                    <span className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800">Surgical Supplies</span>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-clinical border border-slate-200 h-56 sm:h-72 w-full relative">
                    <img
                      src="/alpha-building.jpg"
                      alt="Alpha Healthcare Solutions Operations Headquarters"
                      className="w-full h-full object-cover"
                    />
                    
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'consultancy' && (
              <div className="max-w-4xl mx-auto space-y-4 text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-600">
                  Regulatory & Market Access Strategies
                </span>
                <h3 className="text-2xl font-bold text-brand-navy-900">
                  Hospital Turnkey Consultancy & International Compliance
                </h3>
                <p className="text-sm text-slate-700 leading-relaxed">
                  In addition to equipment trading, we provide hospital turnkey consultancy services, helping partners navigate complex regulatory requirements, product registrations, and market access strategies.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Our technical expert team ensures that clients can expand their operations globally while maintaining full compliance with national and international health authorities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  <div className="flex items-center gap-3 text-xs text-slate-800 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Product Registrations & Approvals</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-800 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Turnkey Equipment Specification</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-800 font-semibold bg-slate-50 p-3 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Global Distribution Strategy</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'quality' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4 text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue-600">
                    Long-Term Customer Satisfaction
                  </span>
                  <h3 className="text-2xl font-bold text-brand-navy-900">
                    Connecting Technology, Precision, and Care to Create a Healthier World
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Alpha Healthcare Solutions is dedicated to delivering reliable & trusted partners to our valuable customers for their utmost satisfaction. We believe in long-term partnerships built on trust, transparency, and mutual growth.
                  </p>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Every project we undertake reflects our unwavering focus on quality, timely delivery, and professional support. With a strong commitment to innovation and healthcare advancement, Alpha Healthcare Solutions continues to be a trusted name in the medical supply and consultancy industry.
                  </p>
                </div>

                <div className="lg:col-span-5">
                  <div className="p-6 bg-brand-blue-50/80 rounded-2xl border border-brand-blue-200 text-left space-y-3">
                    <span className="text-xs font-mono font-bold text-brand-blue-600 uppercase">Core Quality Commitment</span>
                    <h4 className="text-lg font-bold text-brand-navy-950">Trust, Transparency & Mutual Growth</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Connecting state-of-the-art medical technology with rigorous technical support to empower healthcare professionals worldwide.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
