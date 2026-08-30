import React, { useState, useEffect } from 'react';
import { ProductItem } from '../../types/healthcare';
import { 
  X, 
  CheckCircle2, 
  Send,
  Building2,
  ShieldCheck
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProduct?: ProductItem | null;
  customDetails?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  selectedProduct,
  customDetails = '',
}) => {
  const [name, setName] = useState('');
  const [hospital, setHospital] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState(
    selectedProduct ? selectedProduct.categoryName : 'Respiratory Systems'
  );
  const [quantity, setQuantity] = useState('1 to 5 Units');
  const [notes, setNotes] = useState(customDetails);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden my-0 sm:my-8 max-h-[94vh] sm:max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Luxury Header */}
        <div className="px-5 sm:px-8 py-4 sm:py-5 border-b border-slate-100 flex items-center justify-between bg-white flex-shrink-0">
          <div>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
              Request Equipment Quotation
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Direct institutional pricing & technical dispatch estimate
            </p>
          </div>

          <button
            type="button"
            onClick={handleClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer flex-shrink-0 ml-2"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <div className="p-5 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border border-emerald-200 shadow-sm">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <h4 className="text-lg font-bold text-slate-900">
                  Quotation Request Dispatched
                </h4>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Our clinical biomedical consultant will prepare the institutional quote and contact you at <strong>{phone}</strong> within 4 hours.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 bg-brand-navy-900 text-white text-xs font-bold rounded-xl hover:bg-brand-blue-600 transition-all cursor-pointer shadow-sm"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {/* Product Reference Card if invoked for a specific product */}
              {selectedProduct && (
                <div className="p-3 bg-sky-50/80 rounded-2xl border border-sky-200/70 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white p-1 border border-sky-100 flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold text-brand-blue-600 bg-white px-2 py-0.5 rounded border border-sky-200/60">
                        {selectedProduct.modelNumber}
                      </span>
                      <span className="text-[11px] text-slate-500 font-semibold truncate">
                        {selectedProduct.categoryName}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-slate-900 truncate mt-0.5">
                      {selectedProduct.name}
                    </h4>
                  </div>
                </div>
              )}

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Arthur Vance"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-base sm:text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-500/10 font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Hospital / Institution *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Metro General Hospital"
                    value={hospital}
                    onChange={(e) => setHospital(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-base sm:text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-500/10 font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="arthur@hospital.org"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-base sm:text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-500/10 font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 97469 20003"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-base sm:text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-500/10 font-mono font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Department / Specialty Scope
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-base sm:text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-brand-blue-600 font-medium text-slate-900 shadow-2xs cursor-pointer"
                  >
                    <option value="Turnkey Hospital Infrastructure & Planning">Turnkey Hospital Infrastructure & Planning</option>
                    <option value="Radiology & Imaging">Radiology & Imaging</option>
                    <option value="Cardiology & Vascular">Cardiology & Vascular</option>
                    <option value="Respiratory Systems">Respiratory Systems</option>
                    <option value="ICU & OT Equipment">ICU & OT Equipment</option>
                    <option value="Laboratory Diagnostics">Laboratory Diagnostics</option>
                    <option value="Gynecology & Obstetrics">Gynecology & Obstetrics</option>
                    <option value="Endoscopy & Laparoscopy">Endoscopy & Laparoscopy</option>
                    <option value="ENT Equipment">ENT Equipment</option>
                    <option value="Refurbished Equipment">Refurbished Equipment</option>
                    <option value="Physiotherapy & Rehab">Physiotherapy & Rehab</option>
                    <option value="Neonatal & Pediatric">Neonatal & Pediatric</option>
                    <option value="Dental Equipments">Dental Equipments</option>
                    <option value="Dermatology & Aesthetics">Dermatology & Aesthetics</option>
                    <option value="Emergency & Trauma">Emergency & Trauma</option>
                    <option value="Ophthalmic Equipment">Ophthalmic Equipment</option>
                    <option value="Rehabilitation & Homecare">Rehabilitation & Homecare</option>
                    <option value="Hospital Furniture & Ward">Hospital Furniture & Ward</option>
                    <option value="OEM Spares & Maintenance (AMC/CMC)">OEM Spares & Maintenance (AMC/CMC)</option>
                    <option value="General Equipment Inquiry">General Equipment Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Estimated Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-base sm:text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-brand-blue-600 font-medium text-slate-900 shadow-2xs cursor-pointer"
                  >
                    <option value="1 to 5 Units">1 to 5 Units (Evaluation / Upgrade)</option>
                    <option value="6 to 20 Units">6 to 20 Units (Department Expansion)</option>
                    <option value="20+ Units">20+ Units (Hospital Procurement)</option>
                    <option value="Complete Turnkey Setup">Complete Turnkey Department Setup</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Additional Notes or Specific Requirements
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention delivery deadlines, specific accessories, or AMC options..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2 text-base sm:text-xs bg-white border border-slate-300 rounded-xl focus:outline-none focus:border-brand-blue-600 focus:ring-2 focus:ring-brand-blue-500/10 font-medium text-slate-900 placeholder:text-slate-400 shadow-2xs resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer py-2 px-3"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-brand-navy-900 hover:bg-brand-blue-600 text-white text-xs font-bold rounded-xl shadow-clinical transition-all cursor-pointer active:scale-98"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Quotation Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
