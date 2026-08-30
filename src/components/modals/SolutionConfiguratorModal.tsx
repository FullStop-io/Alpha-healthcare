import React, { useState, useEffect } from 'react';
import { 
  X, 
  Calculator, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  ShieldCheck, 
  ArrowRight,
  Layers,
  PhoneCall
} from 'lucide-react';

interface SolutionConfiguratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: (details: string) => void;
}

export const SolutionConfiguratorModal: React.FC<SolutionConfiguratorModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  const [department, setDepartment] = useState<'icu' | 'ot' | 'trauma' | 'imaging'>('icu');
  const [capacity, setCapacity] = useState<number>(12); // beds or suites
  const [includeMGPS, setIncludeMGPS] = useState(true);
  const [includeCleanroomHVAC, setIncludeCleanroomHVAC] = useState(true);
  const [includeTelemetry, setIncludeTelemetry] = useState(true);
  const [includeAMC, setIncludeAMC] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Estimation algorithm
  const getDepartmentStats = () => {
    switch (department) {
      case 'icu':
        return {
          title: 'Turnkey Modular ICU / CCU Suite',
          unitName: 'Critical Care Beds',
          basePerUnit: 14500, // $14.5k per bed base equipment (bed, monitor, ventilator, syringe pump)
          hvacCost: capacity * 2200,
          mgpsCost: capacity * 1800,
          telemetryCost: 8500 + capacity * 650,
          amcCost: capacity * 1200,
          leadTimeWeeks: Math.ceil(capacity * 0.75 + 4),
          equipmentSummary: [
            `${capacity}x AlphaVent™ Pro 900 ICU Ventilators`,
            `${capacity}x AlphaVision™ 15 Modular Multi-Parameter Monitors`,
            `${capacity}x AlphaCare™ 5-Function Smart ICU Beds`,
            `${capacity * 2}x AlphaInfuse™ Syringe & Volumetric Pumps`,
            '1x Central Nursing Station 8-Screen Command Matrix',
          ],
        };
      case 'ot':
        return {
          title: 'Integrated Modular Operation Theatre (OT)',
          unitName: 'Surgical OT Suites',
          basePerUnit: 95000, // $95k base (table, dual lights, anesthesia machine, pendant)
          hvacCost: capacity * 28000, // Laminar airflow plenum ceiling
          mgpsCost: capacity * 12000,
          telemetryCost: capacity * 14000, // 4K video routing & tele-surgery
          amcCost: capacity * 4500,
          leadTimeWeeks: capacity * 2 + 6,
          equipmentSummary: [
            `${capacity}x AlphaOperat™ 7000 Carbon-Fiber Electro-Hydraulic Tables`,
            `${capacity}x AlphaLux™ Dual-Dome Shadowless LED Surgical Light Matrix`,
            `${capacity}x AlphaAegis™ Integrated Anesthesia Delivery Workstations`,
            `${capacity * 2}x Ceiling Motorized Surgeon & Anesthetist Pendants`,
            `${capacity}x Surgeon Master Touch Command Panels`,
          ],
        };
      case 'trauma':
        return {
          title: 'Rapid-Action Emergency & Trauma Wing',
          unitName: 'Resuscitation Bays',
          basePerUnit: 11500,
          hvacCost: capacity * 1500,
          mgpsCost: capacity * 1600,
          telemetryCost: 6500 + capacity * 500,
          amcCost: capacity * 950,
          leadTimeWeeks: Math.ceil(capacity * 0.5 + 3),
          equipmentSummary: [
            `${capacity}x AlphaOmni™ Hydraulic Trauma Stretchers with X-Ray Decks`,
            `${Math.ceil(capacity / 3)}x AlphaRescue™ Biphasic Defibrillators & Monitors`,
            `${Math.ceil(capacity / 4)}x Point-of-Care AlphaScan™ Ultrasound Units`,
            `${Math.ceil(capacity / 2)}x AlphaShield™ Code-Blue Crash Carts`,
            'Rapid Triage Resuscitation Utility Grid',
          ],
        };
      case 'imaging':
        return {
          title: 'Diagnostic & Digital Radiology Wing',
          unitName: 'Imaging Scan Suites',
          basePerUnit: 110000,
          hvacCost: capacity * 15000,
          mgpsCost: capacity * 4000,
          telemetryCost: 18000, // Enterprise PACS
          amcCost: capacity * 8000,
          leadTimeWeeks: capacity * 3 + 5,
          equipmentSummary: [
            `${capacity}x High-Frequency Ceiling Digital Radiography (DR) Systems`,
            `${capacity * 2}x AlphaScan™ Prime 4D Multi-Specialty Ultrasound Systems`,
            '1x Enterprise PACS Server & 5MP Diagnostic Review Stations',
            'Full Lead Radiation Shielding Panels & Viewing Windows',
          ],
        };
    }
  };

  const currentStats = getDepartmentStats();
  const baseCost = capacity * currentStats.basePerUnit;
  const hvac = includeCleanroomHVAC ? currentStats.hvacCost : 0;
  const mgps = includeMGPS ? currentStats.mgpsCost : 0;
  const telemetry = includeTelemetry ? currentStats.telemetryCost : 0;
  const amc = includeAMC ? currentStats.amcCost : 0;

  const totalEstimate = baseCost + hvac + mgps + telemetry + amc;

  const handleProceed = () => {
    const summary = `Turnkey Plan: ${currentStats.title} | ${capacity} ${currentStats.unitName} | Est: $${totalEstimate.toLocaleString()} | Lead Time: ~${currentStats.leadTimeWeeks} Weeks`;
    onClose();
    onBookConsultation(summary);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-brand-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-brand-navy-900 text-white px-6 py-4 flex items-center justify-between border-b border-brand-navy-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-300 border border-sky-400/30 flex items-center justify-center">
              <Calculator className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold tracking-wide uppercase text-sm">
                Turnkey Hospital Department Estimator
              </h3>
              <p className="text-[11px] text-slate-300">
                Configure Bed Capacity, Cleanroom HVAC, MGPS & Integrated Life Support Matrix
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-brand-navy-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Department Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              1. Select Hospital Department / Wing
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'icu', label: 'Modular ICU / CCU', icon: 'Activity' },
                { id: 'ot', label: 'Operation Theatre', icon: 'Crosshair' },
                { id: 'trauma', label: 'Emergency Trauma', icon: 'ShieldAlert' },
                { id: 'imaging', label: 'Radiology & PACS', icon: 'Cpu' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setDepartment(item.id as any);
                    if (item.id === 'ot' || item.id === 'imaging') {
                      setCapacity(4);
                    } else {
                      setCapacity(12);
                    }
                  }}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                    department === item.id
                      ? 'bg-brand-blue-50 border-brand-blue-600 text-brand-navy-900 shadow-sm ring-1 ring-brand-blue-600'
                      : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span className="text-xs font-bold block">{item.label}</span>
                  <span className="text-[10px] text-slate-500">Turnkey Package</span>
                </button>
              ))}
            </div>
          </div>

          {/* Capacity Slider */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800">
                2. Planned Capacity ({currentStats.unitName})
              </label>
              <span className="text-lg font-mono font-extrabold text-brand-blue-600 bg-white px-3 py-1 rounded-xl border border-slate-200 shadow-xs">
                {capacity} {currentStats.unitName}
              </span>
            </div>

            <input
              type="range"
              min={department === 'ot' || department === 'imaging' ? 1 : 4}
              max={department === 'ot' || department === 'imaging' ? 12 : 60}
              step={department === 'ot' || department === 'imaging' ? 1 : 2}
              value={capacity}
              onChange={(e) => setCapacity(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue-600"
            />

            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>Min: {department === 'ot' || department === 'imaging' ? '1 Suite' : '4 Beds'}</span>
              <span>Enterprise Scale: {department === 'ot' || department === 'imaging' ? '12 Suites' : '60 Beds'}</span>
            </div>
          </div>

          {/* Turnkey Add-on Engineering Modules */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              3. Architectural & Engineering Scope Inclusions
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <label className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={includeCleanroomHVAC}
                  onChange={(e) => setIncludeCleanroomHVAC(e.target.checked)}
                  className="rounded text-brand-blue-600 focus:ring-brand-blue-500 h-4 w-4"
                />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    Cleanroom HEPA HVAC & Air Plenum
                  </span>
                  <span className="text-[10px] text-slate-500">ISO Class 7/8 Laminar Flow Air Handling</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={includeMGPS}
                  onChange={(e) => setIncludeMGPS(e.target.checked)}
                  className="rounded text-brand-blue-600 focus:ring-brand-blue-500 h-4 w-4"
                />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    Medical Gas Pipeline System (MGPS)
                  </span>
                  <span className="text-[10px] text-slate-500">HTM-02-01 O2, N2O, Air, Suction Outlets</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={includeTelemetry}
                  onChange={(e) => setIncludeTelemetry(e.target.checked)}
                  className="rounded text-brand-blue-600 focus:ring-brand-blue-500 h-4 w-4"
                />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    Central Nursing Station Telemetry
                  </span>
                  <span className="text-[10px] text-slate-500">Real-time EHR/HL7 Network Hub</span>
                </div>
              </label>

              <label className="flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                <input
                  type="checkbox"
                  checked={includeAMC}
                  onChange={(e) => setIncludeAMC(e.target.checked)}
                  className="rounded text-brand-blue-600 focus:ring-brand-blue-500 h-4 w-4"
                />
                <div>
                  <span className="text-xs font-bold text-slate-800 block">
                    AlphaCare 360™ 1-Yr Full AMC
                  </span>
                  <span className="text-[10px] text-slate-500">99.8% Uptime Guarantee + 24/7 Spares</span>
                </div>
              </label>
            </div>
          </div>

          {/* Deliverables Breakdown List */}
          <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-4 space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-brand-navy-900 block">
              Core Equipment Package ({currentStats.title}):
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-700">
              {currentStats.equipmentSummary.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calculation Output Box */}
          <div className="bg-brand-navy-950 text-white rounded-2xl p-6 space-y-4 border border-brand-navy-800 shadow-xl">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-widest block">
                  Estimated Turnkey Investment Range
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight mt-1">
                  ${totalEstimate.toLocaleString()}
                  <span className="text-xs text-slate-400 font-sans font-normal ml-2">
                    (USD Estimated Base)
                  </span>
                </div>
              </div>

              <div className="text-left sm:text-right border-t sm:border-t-0 sm:border-l border-brand-navy-800 pt-3 sm:pt-0 sm:pl-6">
                <span className="text-[11px] text-slate-400 uppercase tracking-widest block">
                  Commissioning Lead Time:
                </span>
                <span className="text-lg font-bold text-sky-300 font-mono">
                  ~{currentStats.leadTimeWeeks} Weeks Ready
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Includes 3D BIM Architectural Blueprint & Full Medical Gas Validation</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={handleProceed}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-brand-navy-900 hover:bg-brand-blue-600 rounded-xl transition-all shadow-clinical cursor-pointer"
            >
              <span>Schedule Turnkey Site Inspection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
