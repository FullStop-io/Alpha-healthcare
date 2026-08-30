import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'vital' | 'success' | 'dark' | 'outline';
  size?: 'sm' | 'md';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-brand-blue-50 text-brand-blue-700 border-brand-blue-200/80',
    vital: 'bg-red-50 text-red-700 border-red-200/80',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    dark: 'bg-brand-navy-900 text-sky-300 border-brand-navy-700',
    outline: 'bg-white/80 text-slate-700 border-slate-200 backdrop-blur-sm',
  };

  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 tracking-wide',
    md: 'text-xs px-3 py-1 tracking-wider',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold rounded-full border shadow-2xs uppercase ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
