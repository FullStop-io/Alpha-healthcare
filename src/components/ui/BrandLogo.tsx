import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  variant?: 'light' | 'dark' | 'badge';
  className?: string;
  showTagline?: boolean;
  layout?: 'horizontal' | 'vertical' | 'badge' | 'image-only';
  src?: string;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  variant = 'light',
  className = '',
  showTagline = false,
  layout = 'horizontal',
  src = '/alpha-logo.png',
  alt = 'ALPHA HEALTHCARE SOLUTIONS',
}) => {
  const isBadge = variant === 'badge' || layout === 'badge';
  const isDark = variant === 'dark';

  const sizeClasses = {
    sm: {
      img: 'h-7 sm:h-8 w-auto object-contain',
      container: 'p-1',
      tagline: 'text-[9px]',
    },
    md: {
      img: 'h-9 sm:h-11 w-auto object-contain',
      container: 'px-2 py-1',
      tagline: 'text-[10px]',
    },
    lg: {
      img: 'h-13 sm:h-16 w-auto object-contain',
      container: 'px-3 py-2',
      tagline: 'text-xs',
    },
    xl: {
      img: 'h-18 sm:h-22 w-auto object-contain',
      container: 'px-4 py-3',
      tagline: 'text-sm',
    },
    '2xl': {
      img: 'h-24 sm:h-28 w-auto object-contain',
      container: 'px-6 py-4',
      tagline: 'text-base',
    },
  };

  const currentSize = sizeClasses[size] || sizeClasses.md;

  // Dark variant (e.g. Footer on dark navy background)
  if (isDark) {
    return (
      <div className={`inline-flex flex-col items-start gap-1 select-none ${className}`}>
        <div className={`bg-white rounded-2xl border border-slate-200/80 shadow-clinical-lg inline-flex items-center justify-center ${currentSize.container}`}>
          <img
            src={src}
            alt={alt}
            className={`${currentSize.img} transition-transform duration-200`}
            loading="eager"
          />
        </div>
        {showTagline && (
          <span className={`text-slate-400 font-semibold tracking-wider uppercase mt-1 ${currentSize.tagline}`}>
            Your Reliable Partner in Healthcare
          </span>
        )}
      </div>
    );
  }

  // Badge layout (Standalone card)
  if (isBadge) {
    return (
      <div className={`inline-flex flex-col items-center justify-center bg-white rounded-2xl border border-slate-200 shadow-clinical-lg p-3 select-none text-center ${className}`}>
        <img
          src={src}
          alt={alt}
          className={`${currentSize.img} transition-transform duration-200`}
          loading="eager"
        />
        {showTagline && (
          <span className={`text-slate-500 font-semibold tracking-wider uppercase mt-1.5 ${currentSize.tagline}`}>
            Your Reliable Partner in Healthcare
          </span>
        )}
      </div>
    );
  }

  // Default Standard Light / Navbar Layout
  return (
    <div className={`inline-flex flex-col items-start select-none ${className}`}>
      <div className="flex items-center">
        <img
          src={src}
          alt={alt}
          className={`${currentSize.img} transition-transform duration-200 hover:scale-102`}
          loading="eager"
        />
      </div>
      {showTagline && (
        <span className={`text-slate-500 font-semibold tracking-wider uppercase mt-0.5 ${currentSize.tagline}`}>
          Your Reliable Partner in Healthcare
        </span>
      )}
    </div>
  );
};
