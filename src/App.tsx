import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ProductsSection } from './components/sections/ProductsSection';
import { ContactSection } from './components/sections/ContactSection';
import { DepartmentDetailPage } from './components/pages/DepartmentDetailPage';
import { ProductModal } from './components/modals/ProductModal';
import { SolutionConfiguratorModal } from './components/modals/SolutionConfiguratorModal';
import { QuoteModal } from './components/modals/QuoteModal';
import { FloatingActionsWidget } from './components/ui/FloatingActionsWidget';
import { CATEGORIES, PRODUCTS_DATA } from './data/productsData';
import { ProductItem } from './types/healthcare';

export const App: React.FC = () => {
  // Navigation State
  const [activeSection, setActiveSection] = useState<string>('home');
  const [activeDepartmentId, setActiveDepartmentId] = useState<string | null>(null);

  // Modal States
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isConfiguratorModalOpen, setIsConfiguratorModalOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<ProductItem | null>(null);
  const [customQuoteDetails, setCustomQuoteDetails] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleNavigate = (sectionId: string) => {
    setActiveDepartmentId(null);
    setActiveSection(sectionId);
    if (window.location.hash !== `#${sectionId}`) {
      window.history.pushState({ section: sectionId, departmentId: null }, '', `#${sectionId}`);
    }
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleOpenDepartmentPage = (departmentId: string) => {
    setActiveDepartmentId(departmentId);
    window.history.pushState({ departmentId, section: 'products' }, '', `#department-${departmentId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackFromDepartment = () => {
    setActiveDepartmentId(null);
    window.history.pushState({ section: 'products', departmentId: null }, '', '#products');
    setTimeout(() => {
      const element = document.getElementById('products');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 50);
  };

  const handleNavigateHomeFromBreadcrumb = () => {
    setActiveDepartmentId(null);
    setActiveSection('home');
    window.history.pushState({ section: 'home', departmentId: null }, '', '#home');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  };

  // Sync state from URL on initial load and handle browser Back / Forward buttons
  useEffect(() => {
    const syncStateFromUrl = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#department-')) {
        const deptId = hash.replace('#department-', '');
        setActiveDepartmentId(deptId);
      } else {
        setActiveDepartmentId(null);
        const sectionId = hash.replace('#', '');
        if (sectionId && ['home', 'about', 'projects', 'products', 'contact'].includes(sectionId)) {
          setActiveSection(sectionId);
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      }
    };

    // Initial sync
    syncStateFromUrl();

    // Listen for browser Back (<-) and Forward (->) button clicks
    window.addEventListener('popstate', syncStateFromUrl);
    return () => window.removeEventListener('popstate', syncStateFromUrl);
  }, []);

  useEffect(() => {
    if (activeDepartmentId) return;

    const sectionIds = ['home', 'about', 'projects', 'products', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeDepartmentId]);

  const handleOpenProductModal = (product: ProductItem) => {
    setSelectedProductForModal(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProductForModal(null);
  };

  const handleRequestQuoteFromProduct = (product: ProductItem, quantity: number = 1) => {
    setSelectedProductForQuote(product);
    setCustomQuoteDetails(`Inquiry regarding model: ${product.name} (${product.modelNumber}) - Order Quantity: ${quantity} unit(s)`);
    setIsQuoteModalOpen(true);
  };

  const handleOpenGeneralQuoteModal = () => {
    setSelectedProductForQuote(null);
    setCustomQuoteDetails('');
    setIsQuoteModalOpen(true);
  };

  const handleBookTurnkeyConsultation = (details: string) => {
    setSelectedProductForQuote(null);
    setCustomQuoteDetails(details);
    setIsQuoteModalOpen(true);
  };

  const handleRequestEquipmentInquiry = (departmentName: string, equipmentItemName: string) => {
    setSelectedProductForQuote(null);
    setCustomQuoteDetails(`Quotation & Technical Specification Request for ${equipmentItemName} (${departmentName} Department)`);
    setIsQuoteModalOpen(true);
  };

  const handleRequestGeneralDepartmentQuote = (departmentName: string, equipmentList: string[]) => {
    setSelectedProductForQuote(null);
    setCustomQuoteDetails(`Comprehensive Inquiry for ${departmentName} Equipment Setup (Offering Scope: ${equipmentList.slice(0, 5).join(', ')}...)`);
    setIsQuoteModalOpen(true);
  };

  // Find active department object if department page is open
  const activeDepartment = activeDepartmentId
    ? CATEGORIES.find((cat) => cat.id === activeDepartmentId)
    : null;

  const departmentProducts = activeDepartmentId
    ? PRODUCTS_DATA.filter(
        (p) =>
          p.category === activeDepartmentId ||
          (p.relatedDepartments && p.relatedDepartments.includes(activeDepartmentId))
      )
    : [];

  return (
    <div className="min-h-screen bg-[#ebf2f8] text-slate-900 flex flex-col selection:bg-brand-blue-500 selection:text-white font-sans antialiased relative">
      {/* Ambient Low-Opacity Landing Page Background Watermark */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.04]">
        <img
          src="/alpha-building.jpg"
          alt=""
          className="w-full h-full object-cover object-center filter blur-[1px]"
        />
      </div>

      {/* Sticky Fixed Header */}
      <Navbar
        activeSection={activeDepartmentId ? 'products' : activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 pt-0">
        {activeDepartment ? (
          /* Dedicated Department Equipment Page (In Same Tab) */
          <DepartmentDetailPage
            department={activeDepartment}
            products={departmentProducts}
            onBack={handleBackFromDepartment}
            onNavigateHome={handleNavigateHomeFromBreadcrumb}
            onSelectProduct={handleOpenProductModal}
            onRequestQuote={handleRequestQuoteFromProduct}
            onRequestEquipmentInquiry={handleRequestEquipmentInquiry}
            onRequestGeneralDepartmentQuote={handleRequestGeneralDepartmentQuote}
          />
        ) : (
          /* Main Landing Page View */
          <>
            <HeroSection
              onOpenQuoteModal={handleOpenGeneralQuoteModal}
              onOpenConfiguratorModal={() => setIsConfiguratorModalOpen(true)}
              onSelectCategory={(catId) => {
                handleOpenDepartmentPage(catId);
              }}
            />

            <AboutSection
              onOpenQuoteModal={handleOpenGeneralQuoteModal}
            />

            <ProjectsSection
              onOpenQuoteModal={handleOpenGeneralQuoteModal}
            />

            <ProductsSection
              onOpenDepartmentPage={handleOpenDepartmentPage}
            />

            <ContactSection />
          </>
        )}

        {/* Global Footer */}
        <Footer
          onOpenQuoteModal={handleOpenGeneralQuoteModal}
        />
      </main>

      {/* Universal Floating Action Buttons */}
      <FloatingActionsWidget
        onOpenHelpModal={() => handleNavigate('contact')}
      />

      {/* Modals */}
      <ProductModal
        product={selectedProductForModal}
        onClose={handleCloseProductModal}
        onRequestQuote={handleRequestQuoteFromProduct}
      />

      <SolutionConfiguratorModal
        isOpen={isConfiguratorModalOpen}
        onClose={() => setIsConfiguratorModalOpen(false)}
        onBookConsultation={handleBookTurnkeyConsultation}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        selectedProduct={selectedProductForQuote}
        customDetails={customQuoteDetails}
      />
    </div>
  );
};

export default App;
