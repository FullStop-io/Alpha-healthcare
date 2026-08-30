import React from 'react';
import {
  Scan,
  HeartPulse,
  Wind,
  Crosshair,
  FlaskConical,
  Heart,
  Video,
  Volume2,
  RefreshCw,
  Activity,
  Baby,
  Smile,
  Sparkles,
  ShieldAlert,
  Eye,
  Accessibility,
  BedDouble,
  LayoutGrid
} from 'lucide-react';

interface DepartmentMedicalEmblemProps {
  departmentId: string;
  className?: string;
  variant?: 'watermark' | 'icon';
}

export const DepartmentMedicalEmblem: React.FC<DepartmentMedicalEmblemProps> = ({
  departmentId,
  className = '',
  variant = 'watermark',
}) => {
  // If rendering the foreground icon badge, use clean, authoritative Lucide vector icons
  if (variant === 'icon') {
    const iconClass = className || 'w-6 h-6 text-brand-blue-600';
    switch (departmentId) {
      case 'radiology':
        return <Scan className={iconClass} strokeWidth={2.2} />;
      case 'cardiology':
        return <HeartPulse className={iconClass} strokeWidth={2.2} />;
      case 'respiratory':
        return <Wind className={iconClass} strokeWidth={2.2} />;
      case 'icu-ot':
        return <Crosshair className={iconClass} strokeWidth={2.2} />;
      case 'laboratory':
        return <FlaskConical className={iconClass} strokeWidth={2.2} />;
      case 'gynecology':
        return <Heart className={iconClass} strokeWidth={2.2} />;
      case 'endoscopy':
        return <Video className={iconClass} strokeWidth={2.2} />;
      case 'ent':
        return <Volume2 className={iconClass} strokeWidth={2.2} />;
      case 'refurbished':
        return <RefreshCw className={iconClass} strokeWidth={2.2} />;
      case 'physiotherapy':
        return <Activity className={iconClass} strokeWidth={2.2} />;
      case 'neonatal':
        return <Baby className={iconClass} strokeWidth={2.2} />;
      case 'dental':
        return <Smile className={iconClass} strokeWidth={2.2} />;
      case 'dermatology':
        return <Sparkles className={iconClass} strokeWidth={2.2} />;
      case 'emergency':
        return <ShieldAlert className={iconClass} strokeWidth={2.2} />;
      case 'ophthalmic':
        return <Eye className={iconClass} strokeWidth={2.2} />;
      case 'rehab-homecare':
        return <Accessibility className={iconClass} strokeWidth={2.2} />;
      case 'furniture-disposables':
        return <BedDouble className={iconClass} strokeWidth={2.2} />;
      default:
        return <LayoutGrid className={iconClass} strokeWidth={2.2} />;
    }
  }

  // Pure geometric, high-tech clinical watermarks (No creepy drawings, 100% clean vector telemetry)
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {(() => {
        switch (departmentId) {
          /* 1. RADIOLOGY: Concentric Gantry Diagnostic Rings */
          case 'radiology':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="6 4" />
                <circle cx="50" cy="50" r="30" />
                <circle cx="50" cy="50" r="16" strokeDasharray="3 3" />
                <line x1="50" y1="6" x2="50" y2="94" strokeDasharray="4 4" strokeWidth="1.5" />
                <line x1="6" y1="50" x2="94" y2="50" strokeDasharray="4 4" strokeWidth="1.5" />
              </g>
            );

          /* 2. CARDIOLOGY: Cardio Telemetry Pulse Grid */
          case 'cardiology':
            return (
              <g stroke="currentColor" strokeWidth="3" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="8 6" strokeWidth="2" />
                <path
                  d="M10 50 H30 L36 34 L44 68 L52 22 L60 74 L66 42 L70 54 L76 50 H90"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="50" cy="50" r="28" strokeWidth="1.5" strokeDasharray="4 4" />
              </g>
            );

          /* 3. RESPIRATORY: Laminar Flow Telemetry Arcs */
          case 'respiratory':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <path d="M20 34 Q50 20 80 34" strokeLinecap="round" />
                <path d="M14 50 Q50 36 86 50" strokeWidth="3.5" strokeLinecap="round" />
                <path d="M20 66 Q50 52 80 66" strokeLinecap="round" />
                <circle cx="50" cy="50" r="42" strokeDasharray="6 4" strokeWidth="2" />
              </g>
            );

          /* 4. ICU & OT: Surgical Precision Reticle */
          case 'icu-ot':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="40" strokeDasharray="8 4" />
                <circle cx="50" cy="50" r="26" />
                <circle cx="50" cy="50" r="10" strokeWidth="3" />
                <line x1="50" y1="8" x2="50" y2="92" strokeWidth="2" />
                <line x1="8" y1="50" x2="92" y2="50" strokeWidth="2" />
              </g>
            );

          /* 5. LABORATORY: Molecular Hexagonal Lattice */
          case 'laboratory':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <polygon points="50,14 80,31 80,67 50,84 20,67 20,31" />
                <polygon points="50,26 70,38 70,62 50,74 30,62 30,38" strokeDasharray="4 3" strokeWidth="2" />
                <circle cx="50" cy="50" r="8" />
              </g>
            );

          /* 6. GYNECOLOGY: Concentric Harmonic Rings */
          case 'gynecology':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="6 6" strokeWidth="2" />
                <circle cx="44" cy="46" r="24" strokeWidth="3" />
                <circle cx="56" cy="54" r="18" strokeWidth="2.5" strokeDasharray="4 3" />
              </g>
            );

          /* 7. ENDOSCOPY: 4K Optical Aperture Rings */
          case 'endoscopy':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="42" />
                <circle cx="50" cy="50" r="30" strokeDasharray="6 4" />
                <circle cx="50" cy="50" r="18" strokeWidth="3.5" />
                <circle cx="50" cy="50" r="6" />
              </g>
            );

          /* 8. ENT: Acoustic Frequency Concentric Rings */
          case 'ent':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="6 4" />
                <path d="M30 50 A20 20 0 0 1 70 50" strokeWidth="3" strokeLinecap="round" />
                <path d="M20 50 A30 30 0 0 1 80 50" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M10 50 A40 40 0 0 1 90 50" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
              </g>
            );

          /* 9. REFURBISHED: Certified Quality Renewal Loop */
          case 'refurbished':
            return (
              <g stroke="currentColor" strokeWidth="3" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="8 6" strokeWidth="2" />
                <path d="M28 34 A26 26 0 0 1 74 38" strokeLinecap="round" />
                <polygon points="70,30 80,38 68,44" fill="currentColor" />
                <path d="M72 66 A26 26 0 0 1 26 62" strokeLinecap="round" />
                <polygon points="30,70 20,62 32,56" fill="currentColor" />
                <circle cx="50" cy="50" r="10" strokeWidth="2" />
              </g>
            );

          /* 10. PHYSIOTHERAPY: Kinetic Sinusoidal Wave */
          case 'physiotherapy':
            return (
              <g stroke="currentColor" strokeWidth="3" opacity="0.9">
                <path d="M10 50 Q30 24 50 50 T90 50" strokeLinecap="round" />
                <path d="M10 64 Q30 38 50 64 T90 64" strokeLinecap="round" strokeDasharray="5 3" />
                <circle cx="50" cy="50" r="42" strokeDasharray="8 4" strokeWidth="2" />
              </g>
            );

          /* 11. NEONATAL: Thermal Protective Halo */
          case 'neonatal':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="6 4" strokeWidth="2" />
                <path d="M22 60 C22 36 34 22 50 22 C66 22 78 36 78 60" strokeWidth="3.5" strokeLinecap="round" />
                <circle cx="50" cy="46" r="12" />
              </g>
            );

          /* 12. DENTAL: Precision Clinical Diamond Lattice */
          case 'dental':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="6 4" strokeWidth="2" />
                <polygon points="50,18 78,50 50,82 22,50" strokeWidth="3" />
                <polygon points="50,30 68,50 50,70 32,50" strokeDasharray="4 3" />
              </g>
            );

          /* 13. DERMATOLOGY: Phototherapy Light Matrix */
          case 'dermatology':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="6 4" strokeWidth="2" />
                <circle cx="50" cy="50" r="22" strokeWidth="3" />
                <circle cx="50" cy="50" r="8" fill="currentColor" />
                <line x1="50" y1="12" x2="50" y2="24" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="76" x2="50" y2="88" strokeWidth="3" strokeLinecap="round" />
                <line x1="12" y1="50" x2="24" y2="50" strokeWidth="3" strokeLinecap="round" />
                <line x1="76" y1="50" x2="88" y2="50" strokeWidth="3" strokeLinecap="round" />
              </g>
            );

          /* 14. EMERGENCY: Clinical Cross & Telemetry Ring */
          case 'emergency':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="6 4" strokeWidth="2" />
                <rect x="42" y="20" width="16" height="60" rx="4" strokeWidth="3" />
                <rect x="20" y="42" width="60" height="16" rx="4" strokeWidth="3" />
                <circle cx="50" cy="50" r="6" fill="currentColor" />
              </g>
            );

          /* 15. OPHTHALMIC: Optical Slit-Lamp Lens Rings */
          case 'ophthalmic':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <path d="M12 50 C28 24 72 24 88 50 C72 76 28 76 12 50 Z" strokeWidth="3" />
                <circle cx="50" cy="50" r="18" strokeDasharray="4 3" />
                <circle cx="50" cy="50" r="8" fill="currentColor" />
              </g>
            );

          /* 16. REHAB-HOMECARE: Supportive Mobility Circle */
          case 'rehab-homecare':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="6 4" strokeWidth="2" />
                <circle cx="50" cy="50" r="28" strokeWidth="3" />
                <line x1="26" y1="50" x2="74" y2="50" strokeWidth="3" strokeLinecap="round" />
                <line x1="50" y1="26" x2="50" y2="74" strokeWidth="3" strokeLinecap="round" />
              </g>
            );

          /* 17. FURNITURE-DISPOSABLES: Architectural Modular Deck */
          case 'furniture-disposables':
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="42" strokeDasharray="6 4" strokeWidth="2" />
                <rect x="22" y="32" width="56" height="36" rx="6" strokeWidth="3" />
                <line x1="22" y1="50" x2="78" y2="50" strokeWidth="2" strokeDasharray="4 3" />
              </g>
            );

          default:
            return (
              <g stroke="currentColor" strokeWidth="2.5" opacity="0.9">
                <circle cx="50" cy="50" r="40" strokeDasharray="6 4" />
                <rect x="36" y="36" width="28" height="28" rx="6" strokeWidth="3" />
              </g>
            );
        }
      })()}
    </svg>
  );
};

export default DepartmentMedicalEmblem;
