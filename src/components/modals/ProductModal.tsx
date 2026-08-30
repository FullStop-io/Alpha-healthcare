import React, { useEffect } from 'react';
import { ProductItem } from '../../types/healthcare';
import { 
  X, 
  ShieldCheck, 
  Check, 
  FileText,
  Layers,
  Sparkles
} from 'lucide-react';

interface ProductModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onRequestQuote: (product: ProductItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onRequestQuote,
}) => {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [product]);

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 md:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden my-0 sm:my-8 max-h-[92vh] sm:max-h-[88vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Clean Luxury Header */}
        <div className="px-4 sm:px-8 py-3.5 sm:py-5 border-b border-slate-100 flex items-center justify-between bg-white flex-shrink-0">
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="px-2.5 py-1 text-[11px] sm:text-xs font-mono font-bold bg-slate-100 text-slate-800 rounded-lg border border-slate-200 flex-shrink-0">
              {product.modelNumber}
            </span>
            <span className="text-xs text-slate-500 font-semibold truncate">
              {product.categoryName}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer flex-shrink-0 ml-2"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 md:p-8 overflow-y-auto space-y-6 sm:space-y-8 flex-1">
          {/* Main Product Presentation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Clean Studio Product Image Container */}
            <div className="rounded-2xl sm:rounded-3xl bg-[#f8fafc] border border-slate-200/80 p-4 sm:p-6 flex items-center justify-center h-60 sm:h-80 w-full overflow-hidden shadow-2xs">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Details & Overview */}
            <div className="space-y-3.5 sm:space-y-4 text-left">
              <div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-blue-600 mt-1">
                  {product.tagline}
                </p>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>



              {/* Primary Clinical Applications */}
              <div className="pt-1">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Clinical Applications
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {product.applications.map((app, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] sm:text-xs px-2.5 sm:px-3 py-1 bg-slate-100/80 text-slate-700 rounded-lg font-medium"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Key Features & Engineering Highlights */}
          <div className="bg-slate-50/80 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/80 text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
              Key Features & Capabilities
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 sm:gap-3.5">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          <div className="text-left">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
              Technical Specifications
            </h4>
            <div className="border border-slate-200/80 rounded-2xl overflow-hidden shadow-2xs">
              <table className="w-full text-left text-xs border-collapse table-fixed">
                <tbody>
                  {product.fullSpecs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}
                    >
                      <td className="py-2.5 sm:py-3 px-3 sm:px-4 font-semibold text-slate-900 border-b border-slate-100 w-2/5 sm:w-1/3 break-words">
                        {spec.label}
                      </td>
                      <td className="py-2.5 sm:py-3 px-3 sm:px-4 text-slate-700 font-mono border-b border-slate-100 w-3/5 sm:w-2/3 break-words text-[11px] sm:text-xs">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Clean Action Footer */}
        <div className="px-4 sm:px-8 py-3.5 sm:py-4 border-t border-slate-100 bg-slate-50/80 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 flex-shrink-0">
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Certified Institutional Supply & 24/7 AMC Support</span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all cursor-pointer text-center"
            >
              Close
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onRequestQuote(product);
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 text-xs font-bold text-white bg-brand-navy-900 hover:bg-brand-blue-600 active:scale-98 rounded-xl transition-all shadow-sm cursor-pointer"
            >
              <FileText className="w-4 h-4 flex-shrink-0" />
              <span>Request Quotation</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
