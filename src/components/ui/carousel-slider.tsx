import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  type PanInfo,
  type Variants,
} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { FavouriteIcon } from "@hugeicons/core-free-icons";

/* ---------------- Types ---------------- */

export interface Slide {
  id: number;
  img: string;
  title?: string;
  location?: string;
  description?: string;
}

type IconRenderer = (props?: any) => React.ReactNode;

interface CarouselSliderProps {
  slides?: Slide[];
  favouriteIcon?: IconRenderer;
}

/* ---------------- Defaults ---------------- */

const DEFAULT_SLIDES: Slide[] = [
  { 
    id: 1, 
    img: "/Projects/turnkey-project-1.jpg", 
    title: "Multi-Specialty Hospital Infrastructure", 
    location: "Turnkey Project • Kannur, Kerala",
    description: "Complete turnkey planning, surgical OT suites, diagnostic installation & regulatory compliance."
  },
  { 
    id: 2, 
    img: "/Projects/turnkey-project-2.jpg", 
    title: "CH Centre Hope Valley - Pain & Palliative Care", 
    location: "Turnkey Project • Kerala, India",
    description: "Comprehensive palliative care facility equipped with advanced medical monitoring & specialized patient care units."
  },
];

/* ---------------- Animation Variants ---------------- */

const variants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 220 : -220,
    filter: 'brightness(1.5)',
    scale: 0.8,
    opacity: 0,
    rotate: direction > 0 ? 25 : -25,
  }),
  center: {
    x: 0,
    filter: 'brightness(1)',
    scale: 1,
    opacity: 1,
    rotate: 0,
    zIndex: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -220 : 220,
    filter: 'brightness(1.5)',
    scale: 0.8,
    opacity: 0,
    rotate: direction > 0 ? -25 : 25,
    zIndex: 0,
  }),
};

/* ---------------- Component ---------------- */

export const CarouselSlider: React.FC<CarouselSliderProps> = ({
  slides = DEFAULT_SLIDES,
  favouriteIcon = (props) => (
    <HugeiconsIcon
      icon={FavouriteIcon}
      size={24}
      strokeWidth={1.5}
      {...props}
    />
  ),
}) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  // Instant In-Memory Preloader for all carousel slides
  React.useEffect(() => {
    slides.forEach((slide) => {
      if (slide.img) {
        const img = new Image();
        img.src = slide.img;
        img.onload = () => {
          setLoadedImages((prev) => ({ ...prev, [slide.img]: true }));
        };
      }
    });
  }, [slides]);

  const dragX = useMotionValue(0);
  const rotate = useTransform(dragX, [-200, 200], [-8, 8]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + slides.length) % slides.length);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x < -100) paginate(1);
    else if (info.offset.x > 100) paginate(-1);
  };

  const currentSlide = slides[index];
  const isCurrentImgLoaded = Boolean(loadedImages[currentSlide.img]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-5xl mx-auto font-sans">
      {/* Main Interactive Carousel Card */}
      <div className="relative w-full max-w-3xl sm:max-w-4xl h-[260px] xs:h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] aspect-[16/9] flex items-center justify-center">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", bounce: 0.15, duration: 0.5 },
              scale: { duration: 0.35 },
              opacity: { duration: 0.25 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            style={{ rotate, x: dragX }}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full bg-white rounded-2xl sm:rounded-3xl p-1.5 sm:p-3 shadow-2xl border border-slate-200/90 overflow-hidden cursor-grab active:cursor-grabbing group"
          >
            <div className="w-full h-full rounded-xl sm:rounded-3xl overflow-hidden bg-slate-900 relative">
              {/* Skeleton Placeholder while loading */}
              {!isCurrentImgLoaded && (
                <div className="absolute inset-0 bg-slate-800 animate-pulse flex items-center justify-center z-0">
                  <div className="w-10 h-10 border-2 border-sky-400/30 border-t-sky-400 rounded-full animate-spin" />
                </div>
              )}

              <img
                src={currentSlide.img}
                alt={currentSlide.title || "Turnkey Project"}
                loading="eager"
                decoding="async"
                onLoad={() => {
                  setLoadedImages((prev) => ({ ...prev, [currentSlide.img]: true }));
                }}
                className={`object-cover w-full h-full pointer-events-none group-hover:scale-105 transition-all duration-700 ${
                  isCurrentImgLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Gradient Scrim & Info Box */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-950/90 via-brand-navy-950/40 to-transparent flex flex-col justify-end p-4 sm:p-8 text-left z-10">
                <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-mono font-bold bg-brand-blue-600/90 text-white rounded-md sm:rounded-lg w-fit mb-1.5 sm:mb-2 border border-sky-300/30 backdrop-blur-xs shadow-xs">
                  {currentSlide.location || "Turnkey Project"}
                </span>

                <h3 className="text-base sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight drop-shadow-sm">
                  {currentSlide.title}
                </h3>

                {currentSlide.description && (
                  <p className="text-[11px] sm:text-sm text-slate-200 mt-1 sm:mt-2 max-w-2xl leading-snug sm:leading-relaxed opacity-95 line-clamp-2">
                    {currentSlide.description}
                  </p>
                )}
              </div>

              {/* Direct Left Overlay Navigation Arrow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(-1);
                }}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white/85 hover:bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg border border-white/50 backdrop-blur-md transition-all cursor-pointer active:scale-95 z-20"
                title="Previous Slide"
              >
                <span className="text-base sm:text-lg font-bold">‹</span>
              </button>

              {/* Direct Right Overlay Navigation Arrow */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  paginate(1);
                }}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-11 sm:h-11 bg-white/85 hover:bg-white text-slate-900 rounded-full flex items-center justify-center shadow-lg border border-white/50 backdrop-blur-md transition-all cursor-pointer active:scale-95 z-20"
                title="Next Slide"
              >
                <span className="text-base sm:text-lg font-bold">›</span>
              </button>

              {/* Favorite Badge Button */}
              <button
                type="button"
                title="Save Project"
                className="absolute top-4 right-4 w-10 h-10 bg-white/85 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-white/40 hover:bg-white transition-all cursor-pointer active:scale-95 z-20"
              >
                {favouriteIcon({
                  className: "text-brand-navy-900 hover:text-red-500 transition-colors",
                })}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Ambient Stacked Card Shadow Layers */}
        <div className="absolute -z-10 w-[96%] h-[96%] bg-white/70 rounded-3xl border border-slate-200 scale-95 opacity-60 shadow-md translate-y-3" />
        <div className="absolute -z-20 w-[92%] h-[92%] bg-white/40 rounded-3xl border border-slate-200 scale-90 opacity-40 shadow-sm translate-y-6" />
      </div>

      {/* Pagination Indicators & Next/Prev Controls */}
      <div className="flex items-center gap-6 mt-8">
        <button
          onClick={() => paginate(-1)}
          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-1.5"
        >
          <span>← Previous Project</span>
        </button>

        <div className="flex items-center gap-2.5">
          {slides.map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: i === index ? 1.3 : 1,
                opacity: i === index ? 1 : 0.4,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className={`h-3 rounded-full cursor-pointer transition-all ${
                i === index ? "w-9 bg-brand-blue-600 shadow-xs" : "w-3 bg-slate-300"
              }`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
            />
          ))}
        </div>

        <button
          onClick={() => paginate(1)}
          className="px-4 py-2 bg-brand-navy-900 hover:bg-brand-blue-600 text-white text-xs font-bold rounded-xl transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-1.5"
        >
          <span>Next Project →</span>
        </button>
      </div>
    </div>
  );
};

export default CarouselSlider;
