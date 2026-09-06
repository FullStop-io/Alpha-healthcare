import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'projects', label: 'Projects' },
    { id: 'products', label: 'Products' },
    { id: 'contact', label: 'Contact Us' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white border-b border-slate-200/80 font-sans shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-3.5 sm:py-4 flex items-center justify-between gap-6">
        {/* Brand Logo - Aligned on the Left */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="flex flex-col items-start group cursor-pointer focus:outline-none flex-shrink-0"
        >
          <img
            src="/Brand/alpha-logo.png"
            alt="Alpha Healthcare Solutions"
            className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            loading="eager"
          />
          <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-brand-blue-600 uppercase mt-0.5 font-sans">
            Reliable Partner in Healthcare
          </span>
        </a>

        {/* Text-Only Desktop Navigation Links Aligned on the Right */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-[15px] font-medium transition-colors cursor-pointer select-none py-1 border-b-2 ${
                  isActive
                    ? 'text-brand-blue-600 font-bold border-brand-blue-600'
                    : 'text-slate-800 hover:text-brand-blue-600 border-transparent'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:text-brand-blue-600 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-6 py-4 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-1 gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 text-left text-sm font-semibold rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#f0f8ff] text-[#0284c7] font-bold'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-[#0284c7]' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;




