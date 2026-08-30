import React, { useEffect, useState, useMemo } from 'react';
import { DepartmentCategory, ProductItem } from '../../types/healthcare';
import { SpotlightCard } from '../ui/SpotlightCard';
import { DepartmentMedicalEmblem } from '../ui/DepartmentMedicalEmblem';
import { 
  ArrowLeft, 
  Eye, 
  FileText,
  PackageOpen,
  Search,
  X
} from 'lucide-react';

interface DepartmentDetailPageProps {
  department: DepartmentCategory;
  products: ProductItem[];
  onBack: () => void;
  onNavigateHome?: () => void;
  onSelectProduct: (product: ProductItem) => void;
  onRequestQuote: (product: ProductItem, quantity?: number) => void;
  onRequestEquipmentInquiry: (departmentName: string, equipmentItemName: string) => void;
  onRequestGeneralDepartmentQuote: (departmentName: string, equipmentList: string[]) => void;
}

export const DepartmentDetailPage: React.FC<DepartmentDetailPageProps> = ({
  department,
  products,
  onBack,
  onNavigateHome,
  onSelectProduct,
  onRequestQuote,
  onRequestGeneralDepartmentQuote,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setSearchQuery('');
  }, [department.id]);

  // Real-time in-department product search & relevance filtering
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const q = searchQuery.toLowerCase().trim();
    return products
      .map((product) => {
        let score = 0;
        const name = product.name.toLowerCase();
        const model = (product.modelNumber || '').toLowerCase();
        const tagline = (product.tagline || '').toLowerCase();
        const desc = (product.description || '').toLowerCase();
        const apps = (product.applications || []).map((a) => a.toLowerCase());
        const features = (product.features || []).map((f) => f.toLowerCase());
        const specs = (product.fullSpecs || []).map((s) => `${s.label} ${s.value}`.toLowerCase());

        if (name === q || model === q) score += 1000;
        else if (name.startsWith(q) || model.startsWith(q)) score += 700;
        else if (name.split(/\s+/).some((w) => w.startsWith(q))) score += 500;
        else if (name.includes(q)) score += 350;
        else if (model.includes(q)) score += 350;

        if (tagline.includes(q)) score += 150;
        if (apps.some((a) => a.includes(q))) score += 120;
        if (features.some((f) => f.includes(q))) score += 90;
        if (specs.some((s) => s.includes(q))) score += 80;
        if (desc.includes(q)) score += 50;

        return { product, score };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.product.name.localeCompare(b.product.name))
      .map((item) => item.product);
  }, [products, searchQuery]);

  return (
    <div className="min-h-screen bg-[#edf3f8] text-slate-900 font-sans antialiased pt-28 pb-20 relative">
      {/* Ambient Medical Grid Pattern */}
      <div className="absolute inset-0 medical-cross-pattern opacity-60 pointer-events-none z-0" />
      <div className="absolute top-20 -left-32 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Breadcrumb & Back Navigation */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/90 backdrop-blur-xs hover:bg-white text-slate-800 text-xs sm:text-sm font-bold rounded-2xl border border-sky-200/70 shadow-sm transition-all cursor-pointer group hover:border-brand-blue-400"
          >
            <ArrowLeft className="w-4 h-4 text-brand-blue-600 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Departments</span>
          </button>

          <nav aria-label="Breadcrumb" className="hidden sm:flex items-center gap-2 text-xs font-mono">
            <button
              type="button"
              onClick={onNavigateHome || onBack}
              className="text-slate-500 hover:text-brand-blue-600 hover:underline cursor-pointer transition-colors font-medium"
            >
              Home
            </button>
            <span className="text-slate-400">/</span>
            <button
              type="button"
              onClick={onBack}
              className="text-slate-500 hover:text-brand-blue-600 hover:underline cursor-pointer transition-colors font-medium"
            >
              Departments
            </button>
            <span className="text-slate-400">/</span>
            <span className="text-brand-blue-600 font-bold">{department.name}</span>
          </nav>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* COMPACT LUXURY DEPARTMENT HEADER + SEARCH BAR */}
        {/* ------------------------------------------------------------- */}
        <div className="bg-white/85 backdrop-blur-md border border-sky-200/60 rounded-2xl sm:rounded-3xl p-4 sm:p-5 mb-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-sky-50/90 text-brand-blue-600 border border-sky-200/80 flex items-center justify-center flex-shrink-0 shadow-2xs">
                <DepartmentMedicalEmblem
                  departmentId={department.id}
                  variant="icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue-600"
                />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-2.5">
                  <h1 className="text-lg sm:text-2xl font-extrabold text-slate-900 tracking-tight truncate">
                    {department.name}
                  </h1>
                  <span className="text-[11px] font-mono font-bold text-brand-blue-600 bg-sky-50 px-2 py-0.5 rounded-md border border-sky-200/60 flex-shrink-0">
                    {filteredProducts.length}{searchQuery && ` of ${products.length}`} Products
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                  {department.description}
                </p>
              </div>
            </div>

            {/* In-Department Search Input */}
            {products.length > 0 && (
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="relative">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder={`Search ${department.shortName || department.name} equipment...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-9 py-2.5 bg-white border border-sky-200/80 rounded-2xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/10 transition-all shadow-xs"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs cursor-pointer"
                      title="Clear search"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PRODUCTS GRID (NAME, SMALL DESCRIPTION, VIEW SPECS, GET QUOTE) */}
        {/* ------------------------------------------------------------- */}
        <div className="mb-14">
          {products.length === 0 ? (
            <div className="bg-white/85 backdrop-blur-md border border-sky-200/60 rounded-3xl p-12 text-center max-w-md mx-auto space-y-4 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 text-brand-blue-600 mx-auto flex items-center justify-center border border-sky-200/60">
                <PackageOpen className="w-7 h-7" />
              </div>
              <div>
                <h4 className="text-base font-bold text-brand-navy-950">
                  No Products Currently Listed
                </h4>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  We are updating catalog specifications for <strong>{department.name}</strong>. Contact our biomedical specialists for custom supply availability and quotations.
                </p>
              </div>
              <button
                type="button"
                onClick={() => onRequestGeneralDepartmentQuote(department.name, department.equipmentList)}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-navy-900 hover:bg-brand-blue-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-sky-300" />
                <span>Request {department.name} Quotation</span>
              </button>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="bg-white/85 backdrop-blur-md border border-sky-200/60 rounded-3xl p-12 text-center max-w-md mx-auto space-y-3 shadow-xs">
              <h4 className="text-base font-bold text-brand-navy-900">No matching equipment found</h4>
              <p className="text-xs text-slate-500">
                No products matching "<strong>{searchQuery}</strong>" in {department.name}.
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-2 px-4 py-2 bg-brand-navy-900 hover:bg-brand-blue-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <SpotlightCard
                  key={product.id}
                  className="flex flex-col justify-between h-full border border-sky-200/70 rounded-3xl bg-white/90 backdrop-blur-md hover:border-brand-blue-400 transition-all duration-300 group shadow-sm hover:shadow-clinical-lg"
                >
                  <div>
                    {/* Pure Clean Image Showcase */}
                    <div className="relative h-56 sm:h-60 w-full rounded-2xl overflow-hidden bg-white p-4 flex items-center justify-center border-b border-sky-100/80">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="eager"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Card Body: Name and Small Description */}
                    <div className="p-5 sm:p-6 space-y-2 text-left">
                      <h3 className="text-base sm:text-lg font-bold text-brand-navy-950 group-hover:text-brand-blue-600 transition-colors leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                        {product.tagline || product.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Action Buttons: View Specs and Get Quote */}
                  <div className="p-4 sm:p-5 pt-0 border-t border-sky-100/80 flex flex-row items-center gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="flex-1 min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 px-2.5 sm:px-3 bg-slate-100/95 hover:bg-slate-200 active:bg-slate-300 text-slate-800 text-xs font-bold rounded-xl transition-all cursor-pointer truncate shadow-2xs"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                      <span className="truncate">View Specs</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => onRequestQuote(product, 1)}
                      className="flex-1 min-w-0 inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2.5 px-2.5 sm:px-3 bg-brand-navy-900 hover:bg-brand-blue-600 active:scale-98 text-white text-xs font-bold rounded-xl transition-all shadow-xs cursor-pointer truncate"
                    >
                      <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="truncate">Get Quote</span>
                    </button>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetailPage;
