import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home,
  User,
  Briefcase,
  Package,
  Phone,
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
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'products', label: 'Products', icon: Package },
    { id: 'contact', label: 'Contact Us', icon: Phone },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans px-3 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      {/* Main Floating Navbar Card */}
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-[28px] transition-all duration-300 relative ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_12px_40px_rgba(0,0,0,0.09)] py-1.5 sm:py-2 px-4 sm:px-6 lg:px-7'
            : 'bg-white/90 backdrop-blur-lg border border-slate-100/90 shadow-[0_10px_35px_rgba(0,0,0,0.06)] py-1.5 sm:py-2 px-4 sm:px-6 lg:px-7'
        }`}
      >
        <div className="relative z-10 flex items-center justify-between gap-2 sm:gap-6">
          {/* Brand Logo - Maximized Size within Slim Navbar */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center group cursor-pointer focus:outline-none flex-shrink-0 py-0.5"
          >
            <img
              src="/alpha-logo.png"
              alt="Alpha Healthcare Solutions"
              className="h-10 sm:h-12 md:h-13 lg:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
              loading="eager"
            />
          </a>

          {/* Desktop Center Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <div key={link.id} className="relative flex flex-col items-center">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`relative px-3.5 xl:px-4 py-2 text-xs sm:text-[13.5px] xl:text-[14px] font-semibold transition-all rounded-xl cursor-pointer flex items-center gap-2 select-none ${
                      isActive
                        ? 'text-[#0284c7] font-bold bg-[#f0f8ff]'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#0284c7]' : 'text-slate-600'}`} strokeWidth={isActive ? 2.2 : 1.8} />
                    <span>{link.label}</span>
                  </button>

                  {/* Active Bottom Blue Indicator Bar */}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 w-10 sm:w-12 h-1 bg-[#0284c7] rounded-full shadow-xs"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
          </nav>

          {/* Desktop Right CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#007cf0] to-[#0096ff] hover:from-[#0070df] hover:to-[#0088ee] text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-200 cursor-pointer active:scale-97"
            >
              <Phone className="w-4 h-4 fill-none stroke-current" strokeWidth={2.2} />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#007cf0] to-[#0096ff] text-white text-xs font-bold shadow-xs active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" strokeWidth={2.2} />
              <span className="hidden xs:inline">Contact</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl sm:rounded-3xl shadow-2xl animate-in slide-in-from-top duration-200 px-4 pt-3 pb-5 space-y-2 relative overflow-hidden max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-1.5 relative z-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`flex items-center justify-between w-full px-4 py-3 text-left text-sm font-semibold rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#f0f8ff] text-[#0284c7] font-bold border border-sky-100'
                      : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${isActive ? 'bg-sky-100/70 text-[#0284c7]' : 'bg-slate-100 text-slate-600'}`}>
                      <Icon className="w-4 h-4" strokeWidth={isActive ? 2.2 : 1.8} />
                    </div>
                    <span>{link.label}</span>
                  </div>
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


