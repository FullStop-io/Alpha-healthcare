import React from 'react';
import { CarouselSlider, Slide } from '../ui/carousel-slider';
import { Badge } from '../ui/Badge';
import { Building2, ArrowRight } from 'lucide-react';

const TURNKEY_PROJECT_SLIDES: Slide[] = [
  {
    id: 1,
    img: '/Projects/turnkey-project-1.jpg',
    title: 'Modern Multi-Specialty Hospital Infrastructure',
    location: 'Turnkey Project • Kannur, Kerala',
    description: 'Complete architectural planning, OT suite engineering, ICU ventilator deployment & international health authority compliance.'
  },
  {
    id: 2,
    img: '/Projects/turnkey-project-2.jpg',
    title: 'CH Centre Hope Valley - Pain & Palliative Care',
    location: 'Turnkey Project • Kerala, India',
    description: 'Comprehensive palliative healthcare facility designed and equipped with specialized patient care units and medical telemetry.'
  }
];

interface ProjectsSectionProps {
  onOpenQuoteModal?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenQuoteModal,
}) => {
  return (
    <section id="projects" className="py-24 bg-[#e8eef5] relative overflow-hidden font-sans border-t border-sky-200/50">
      {/* Premium Hospital Ambient Medical Background */}
      <div className="absolute inset-0 medical-cross-pattern opacity-60 pointer-events-none z-0" />
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-brand-blue-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 -left-32 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 overflow-hidden">
        <img
          src="/Facility/alpha-facility.jpg"
          alt=""
          className="w-full h-full object-cover filter blur-[1px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <Badge variant="primary" size="md" className="mx-auto">
            <Building2 className="w-3.5 h-3.5" />
            Projects
          </Badge>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy-950 tracking-tight">
            Turnkey <span className="text-brand-blue-600">Projects</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Explore our featured turnkey hospital infrastructures, specialty surgical centers, and palliative care facilities completed with end-to-end planning and certified medical equipment.
          </p>
        </div>

        {/* Interactive Carousel Slider Component */}
        <div className="py-4">
          <CarouselSlider slides={TURNKEY_PROJECT_SLIDES} />
        </div>

        {/* Project Consultation CTA */}
        {onOpenQuoteModal && (
          <div className="mt-12 text-center">
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-brand-navy-900 hover:bg-brand-blue-600 text-white text-xs font-bold rounded-2xl shadow-clinical hover:shadow-cyan-glow transition-all cursor-pointer active:scale-98"
            >
              <span>Plan Your Turnkey Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
