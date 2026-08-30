import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, HelpCircle, MessageCircle, X, ChevronUp } from 'lucide-react';

interface FloatingActionsWidgetProps {
  onOpenHelpModal?: () => void;
}

export const FloatingActionsWidget: React.FC<FloatingActionsWidgetProps> = ({
  onOpenHelpModal,
}) => {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  const actionButtons = [
    {
      id: 'whatsapp',
      label: 'Chat on WhatsApp',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      ),
      bgClass: 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/30',
      badge: 'Online',
      badgeColor: 'bg-emerald-400',
      onClick: () => {
        window.open('https://wa.me/919746920003', '_blank');
      },
    },
    {
      id: 'call',
      label: 'Direct Phone Call',
      icon: <PhoneCall className="w-5 h-5 animate-bounce-subtle" />,
      bgClass: 'bg-brand-blue-600 hover:bg-brand-blue-500 text-white shadow-blue-500/30',
      badge: '24/7',
      badgeColor: 'bg-sky-400',
      onClick: () => {
        window.location.href = 'tel:+919746920003';
      },
    },
    {
      id: 'help',
      label: 'Help & Support Desk',
      icon: <HelpCircle className="w-5 h-5" />,
      bgClass: 'bg-brand-navy-950 hover:bg-slate-900 text-sky-300 border border-brand-navy-700 shadow-brand-navy-950/40',
      badge: 'Help',
      badgeColor: 'bg-cyan-400',
      onClick: () => {
        if (onOpenHelpModal) onOpenHelpModal();
        else {
          const contactEl = document.getElementById('contact');
          if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
        }
      },
    },
  ];

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3 font-sans pointer-events-auto select-none">
      {actionButtons.map((btn, idx) => (
        <div
          key={btn.id}
          className="relative flex items-center group"
          onMouseEnter={() => setHoveredButton(btn.id)}
          onMouseLeave={() => setHoveredButton(null)}
        >
          {/* Animated Tooltip Label */}
          <AnimatePresence>
            {hoveredButton === btn.id && (
              <motion.div
                initial={{ opacity: 0, x: 10, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-xl bg-brand-navy-950 text-white text-xs font-bold shadow-xl border border-brand-navy-800 pointer-events-none"
              >
                <span>{btn.label}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Action Button */}
          <motion.button
            onClick={btn.onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: 'spring', stiffness: 260, damping: 20 }}
            className={`relative flex items-center justify-center w-12 h-12 rounded-2xl shadow-lg transition-all duration-300 cursor-pointer active:scale-95 ${btn.bgClass}`}
            aria-label={btn.label}
          >
            {btn.icon}
          </motion.button>
        </div>
      ))}
    </div>
  );
};

export default FloatingActionsWidget;
