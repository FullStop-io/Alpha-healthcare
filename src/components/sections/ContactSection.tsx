import React, { useState } from 'react';
import { Badge } from '../ui/Badge';
import { 
  Mail, 
  PhoneCall, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  MessageSquare,
  ShieldCheck,
  MapPin
} from 'lucide-react';

interface ContactSectionProps {
  onOpenEmergencyModal?: () => void;
}

interface FormData {
  fullName: string;
  email: string;
  service: string;
  message: string;
}

const serviceOptions = [
  { value: 'turnkey', label: 'Turnkey Hospital Expansion & Consultancy' },
  { value: 'icu-ot', label: 'Critical Care, ICU & Modular OT Equipment' },
  { value: 'radiology', label: 'Radiology & Diagnostic Imaging (Ultrasound / X-Ray / DR / CR)' },
  { value: 'cardiology', label: 'Cardiology & Vascular Diagnostics (ECG / Defibrillators)' },
  { value: 'respiratory', label: 'Respiratory & Oxygen Systems (CPAP / Suction / Concentrators)' },
  { value: 'laboratory', label: 'Laboratory Diagnostics & Clinical Analyzers' },
  { value: 'gynecology', label: 'Gynecology, Obstetrics & Fetal Care' },
  { value: 'endoscopy', label: 'Endoscopy & 4K Laparoscopy Towers' },
  { value: 'ent', label: 'ENT Examination & Treatment Workstations' },
  { value: 'neonatal', label: 'Neonatal & Pediatric Care (NICU Incubators / Warmers)' },
  { value: 'emergency', label: 'Emergency & Trauma Resuscitation' },
  { value: 'ophthalmic', label: 'Ophthalmic Diagnostic Equipment' },
  { value: 'dental', label: 'Dental Equipments & Treatment Suites' },
  { value: 'dermatology', label: 'Dermatology & Aesthetic Lasers' },
  { value: 'physiotherapy', label: 'Physiotherapy & Rehabilitation' },
  { value: 'rehab-homecare', label: 'Rehabilitation, Power Mobility & Homecare' },
  { value: 'furniture-disposables', label: 'Hospital Furniture, Beds & Crash Carts' },
  { value: 'refurbished', label: 'OEM-Certified Refurbished Equipment' },
  { value: 'spares', label: 'OEM Spares & Biomedical Maintenance (AMC/CMC)' },
  { value: 'general', label: 'General Medical Equipment Inquiry' },
];

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [form, setForm] = useState<FormData>({
    fullName: '',
    email: '',
    service: 'turnkey',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#ebf2f8] relative overflow-hidden font-sans border-t border-sky-200/50">
      {/* Premium Hospital Ambient Medical Background */}
      <div className="absolute inset-0 medical-cross-pattern opacity-60 pointer-events-none z-0" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 overflow-hidden">
        <img
          src="/alpha-facility.jpg"
          alt=""
          className="w-full h-full object-cover filter blur-[1px]"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 text-left">
          {/* Left Column: Headline & Contact Cards */}
          <div className="flex flex-col gap-6">
            <Badge variant="primary" size="md" className="w-fit">
              <MessageSquare className="w-3.5 h-3.5" />
              Contact Us
            </Badge>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-navy-950 tracking-tight leading-tight">
              Get in Touch{' '}
              <span className="text-brand-blue-600 block">With Alpha Healthcare</span>
            </h2>

            <p className="text-slate-600 max-w-md text-base leading-relaxed">
              We partner with hospital founders, clinical directors, and healthcare procurement teams to supply certified medical equipment and turnkey solutions.
            </p>

            <div className="h-1 w-16 bg-brand-blue-500/40 rounded-full my-1" />

            {/* Email, Phone & Address Cards */}
            <div className="space-y-3 pt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* Company Email */}
                <a
                  href="mailto:info@alphahealthkare.com"
                  className="bg-white/85 backdrop-blur-md border border-sky-200/60 flex items-center gap-3.5 rounded-2xl p-3 shadow-xs hover:border-brand-blue-400 transition-colors cursor-pointer group"
                >
                  <div className="bg-sky-50 border border-sky-200 flex size-11 shrink-0 items-center justify-center rounded-xl text-brand-blue-600 shadow-xs group-hover:bg-brand-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase">
                      Company Email
                    </p>
                    <p className="text-brand-navy-950 text-xs sm:text-sm font-bold truncate">
                      info@alphahealthkare.com
                    </p>
                  </div>
                </a>

                {/* Direct Email */}
                <a
                  href="mailto:alphahealthkare@gmail.com"
                  className="bg-white/85 backdrop-blur-md border border-sky-200/60 flex items-center gap-3.5 rounded-2xl p-3 shadow-xs hover:border-brand-blue-400 transition-colors cursor-pointer group"
                >
                  <div className="bg-sky-50 border border-sky-200 flex size-11 shrink-0 items-center justify-center rounded-xl text-brand-blue-600 shadow-xs group-hover:bg-brand-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase">
                      Email
                    </p>
                    <p className="text-brand-navy-950 text-xs sm:text-sm font-bold truncate">
                      alphahealthkare@gmail.com
                    </p>
                  </div>
                </a>
              </div>

              {/* Phone Contact */}
              <a
                href="tel:+919746920003"
                className="bg-white/85 backdrop-blur-md border border-sky-200/60 flex items-center gap-3.5 rounded-2xl p-3 shadow-xs hover:border-brand-blue-400 transition-colors cursor-pointer group"
              >
                <div className="bg-sky-50 border border-sky-200 flex size-11 shrink-0 items-center justify-center rounded-xl text-brand-blue-600 shadow-xs group-hover:bg-brand-blue-600 group-hover:text-white transition-colors">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase">
                    Phone Contact
                  </p>
                  <p className="text-brand-navy-950 text-sm font-bold truncate font-mono">
                    +91 97469 20003
                  </p>
                </div>
              </a>

              {/* Office Location Address Card */}
              <div className="bg-white/85 backdrop-blur-md border border-sky-200/60 flex items-start gap-3.5 rounded-2xl p-3.5 shadow-xs">
                <div className="bg-sky-50 border border-sky-200 flex size-11 shrink-0 items-center justify-center rounded-xl text-brand-blue-600 shadow-xs mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-slate-500 text-xs font-semibold tracking-wider uppercase">
                    Company Address
                  </p>
                  <p className="text-brand-navy-950 text-xs sm:text-sm font-semibold leading-relaxed mt-0.5">
                    Alpha Healthcare Solutions, Thana, Kannur - 670012, Kerala, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Solution Card Form */}
          <div className="bg-white/90 backdrop-blur-md border border-sky-200/70 rounded-3xl p-6 sm:p-8 shadow-clinical-lg relative z-10">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto ring-8 ring-emerald-50">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy-950">
                  Request Sent Successfully!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{form.fullName}</strong>. Our senior medical equipment specialist will reach out to <strong>{form.email}</strong> within 4 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setForm({ fullName: '', email: '', service: 'icu', message: '' });
                  }}
                  className="mt-4 px-5 py-2.5 bg-brand-navy-900 text-white text-xs font-bold rounded-xl hover:bg-brand-blue-600 transition-colors cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-brand-navy-950">
                    Medical Solution Request Form
                  </span>
                  <span className="text-[11px] font-mono text-emerald-600 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> ISO 13485
                  </span>
                </div>

                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="fullName" className="text-brand-navy-950 text-xs font-bold uppercase tracking-wider">
                    Full Name *
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    placeholder="e.g. Dr. Alex Rivera"
                    value={form.fullName}
                    onChange={(e) => handleChange('fullName', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue-500 font-medium shadow-xs"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-brand-navy-950 text-xs font-bold uppercase tracking-wider">
                    Work Email *
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@hospital.com"
                    value={form.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue-500 font-medium shadow-xs"
                  />
                </div>

                {/* Service Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-brand-navy-950 text-xs font-bold uppercase tracking-wider">
                    Area of Interest *
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => handleChange('service', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-900 focus:outline-none focus:border-brand-blue-500 font-medium shadow-xs cursor-pointer"
                  >
                    {serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-brand-navy-950 text-xs font-bold uppercase tracking-wider">
                    Project Requirements / Notes
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Describe equipment quantity, bed count, or facility timeline..."
                    value={form.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-brand-blue-500 font-medium shadow-xs"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-brand-navy-900 hover:bg-brand-blue-600 text-white font-bold text-xs rounded-xl py-3.5 px-6 shadow-clinical hover:shadow-cyan-glow transition-all flex items-center justify-center gap-2 cursor-pointer mt-1 active:scale-98"
                >
                  <span>Send My Request</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

