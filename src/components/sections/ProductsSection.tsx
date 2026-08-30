import React, { useState, useMemo } from 'react';
import { CATEGORIES } from '../../data/productsData';
import { DepartmentCategory } from '../../types/healthcare';
import { Badge } from '../ui/Badge';
import { DepartmentMedicalEmblem } from '../ui/DepartmentMedicalEmblem';
import { 
  Search, 
  Layers, 
  Building2, 
  ArrowRight,
  X
} from 'lucide-react';

interface ProductsSectionProps {
  onOpenDepartmentPage: (departmentId: string) => void;
}

// Smart relevance scoring algorithm for inner search logic
function getDepartmentSearchScore(cat: DepartmentCategory, query: string): number {
  const q = query.trim().toLowerCase();
  if (!q) return 0;

  const name = cat.name.toLowerCase();
  const shortName = (cat.shortName || '').toLowerCase();
  const id = cat.id.toLowerCase();
  const equipment = (cat.equipmentList || []).map((e) => e.toLowerCase());

  // 1. Exact ID or shortName match (e.g. 'ent', 'icu', 'ot')
  if (id === q || shortName === q) return 1000;

  // 2. Exact full department name match
  if (name === q) return 900;

  // 3. Name or shortName starts with query (e.g. "ent", "cardio", "rad")
  if (shortName.startsWith(q)) return 800;
  if (name.startsWith(q)) return 750;

  // 4. Any distinct word in the department name starts with the query (e.g. "vascular" in "Cardiology & Vascular")
  const nameWords = name.split(/[\s&/,-]+/);
  if (nameWords.some((w) => w === q)) return 720;
  if (nameWords.some((w) => w.startsWith(q))) return 700;

  // 5. ShortName or ID contains the query as substring
  if (shortName.includes(q) || id.includes(q)) return 600;

  // 6. Full department name contains query as substring
  if (name.includes(q)) return 500;

  // 7. Equipment items in this department start with query or match keyword
  for (const item of equipment) {
    if (item === q) return 450;
    if (item.startsWith(q)) return 400;
    const itemWords = item.split(/[\s&/,-]+/);
    if (itemWords.some((w) => w === q)) return 380;
    if (itemWords.some((w) => w.startsWith(q))) return 350;
    if (item.includes(q)) return 250;
  }

  // 8. Description word matching (only when query has 3+ letters to avoid accidental single-letter false positives)
  if (q.length >= 3) {
    const descWords = cat.description.toLowerCase().split(/[\s&/,-]+/);
    if (descWords.some((w) => w.startsWith(q))) return 100;
  }

  return 0;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  onOpenDepartmentPage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  // 17 Clinical departments from the Index
  const clinicalDepartments = useMemo(() => {
    return CATEGORIES.filter((cat) => cat.id !== 'all');
  }, []);

  // Filter and sort departments dynamically using inner relevance scoring
  const filteredDepartments = useMemo(() => {
    if (!searchQuery.trim()) return clinicalDepartments;

    const scored = clinicalDepartments
      .map((cat) => ({
        cat,
        score: getDepartmentSearchScore(cat, searchQuery),
      }))
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score || a.cat.name.localeCompare(b.cat.name));

    return scored.map((item) => item.cat);
  }, [clinicalDepartments, searchQuery]);

  return (
    <section id="products" className="py-24 bg-[#edf3f8] relative overflow-hidden font-sans border-t border-sky-200/50">
      {/* Hospital Ambient Background */}
      <div className="absolute inset-0 medical-cross-pattern opacity-60 pointer-events-none z-0" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 overflow-hidden">
        <img
          src="/alpha-facility.jpg"
          alt=""
          className="w-full h-full object-cover filter blur-[1px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <Badge variant="primary" size="md" className="mb-3">
              <Layers className="w-3.5 h-3.5" />
              Clinical Department Directory
            </Badge>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy-950 tracking-tight">
              Departmental <span className="text-brand-blue-600">Equipment Index</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
              Explore specialized medical technologies across 17 clinical departments. Click any department below to view its complete equipment catalog and specifications.
            </p>
          </div>

          {/* Clean Real-time Search Input */}
          <div className="w-full md:w-80">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search departments or equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 bg-white/95 backdrop-blur-xs border border-sky-200/80 rounded-2xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-500/10 focus:bg-white transition-all shadow-xs"
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
        </div>

        {/* ------------------------------------------------------------- */}
        {/* 17 DEPARTMENT CARDS WITH WATERMARK EMBLEM IN BACKGROUND */}
        {/* ------------------------------------------------------------- */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-2 border-b border-sky-200/50">
            <div className="inline-flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-xl bg-sky-100/90 text-brand-blue-600 flex items-center justify-center border border-sky-200/70 shadow-2xs flex-shrink-0">
                <Building2 className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-brand-navy-950">
                Clinical Departments & Specialties
              </span>
            </div>

            <div className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-sky-200/80 shadow-2xs self-start sm:self-auto">
              <span className="text-[11px] font-medium text-slate-500">
                Showing <strong className="text-brand-navy-950 font-bold">{filteredDepartments.length}</strong> of <strong className="text-brand-navy-950 font-bold">{clinicalDepartments.length}</strong> Departments
              </span>
            </div>
          </div>

          {/* Clean Grid of Branded Department Tiles */}
          {filteredDepartments.length === 0 ? (
            <div className="bg-white/85 backdrop-blur-md border border-sky-200/60 rounded-3xl p-12 text-center max-w-md mx-auto space-y-3 shadow-xs">
              <h4 className="text-base font-bold text-brand-navy-900">No matching departments found</h4>
              <p className="text-xs text-slate-500">
                Try searching for a different equipment name (e.g., "Ultrasound", "Ventilator", "Monitor", "ECG").
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-2 px-4 py-2 bg-brand-navy-900 text-white text-xs font-bold rounded-xl cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {filteredDepartments.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => onOpenDepartmentPage(cat.id)}
                  className="group relative rounded-3xl bg-white/90 backdrop-blur-md hover:bg-white border border-sky-200/70 hover:border-brand-blue-500 shadow-sm hover:shadow-clinical-lg transition-all duration-300 overflow-hidden text-left cursor-pointer flex flex-col justify-between hover:-translate-y-1.5 min-h-[290px]"
                >
                  <div>
                    {/* Real High-Resolution Clinical Equipment Photography Showcase */}
                    <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100 border-b border-sky-100">
                      <img
                        src={cat.image || '/Departments/radiology.jpg'}
                        alt={cat.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Card Body */}
                    <div className="p-4 sm:p-5 space-y-1.5">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-brand-blue-600 transition-colors leading-snug">
                        {cat.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="p-4 sm:p-5 pt-0 mt-2 border-t border-sky-100/80 flex items-center justify-end">
                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100/90 group-hover:bg-brand-navy-900 text-slate-700 group-hover:text-white transition-all duration-300 font-bold text-xs shadow-2xs">
                      <span>Explore</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
