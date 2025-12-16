import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const images = [
    { src: '/assets/1.png', alt: 'iManzil Pro - Protection and peace of mind through daily litanies' },
    { src: '/assets/2.png', alt: 'Ruqyah360 - Complete Ruqyah solution for spiritual healing' },
    { src: '/assets/3.png', alt: 'iMathurat Pro - Transform your daily Mathurat into a modern spiritual lifestyle' },
    { src: '/assets/4.png', alt: 'Tawaf Counter - The Ultimate Tawaf Companion for Pilgrims Worldwide' },
  ];

  // Auto-play with pause on hover (desktop only)
  useEffect(() => {
    // Only pause on desktop (has hover capability)
    const isDesktop = window.matchMedia('(hover: hover)').matches;
    
    if (!isPaused || !isDesktop) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 4000); // Change every 4 seconds
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused, images.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative pt-32 pb-8 md:pt-48 md:pb-12 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-navy-900 mb-6 leading-[1.1]">
          Purpose-driven <br className="hidden md:block" /> digital products.
        </h1>
        <p className="text-lg md:text-xl text-navy-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          DeepQalby is a product studio. We build our own FaithTech platforms and help founders ship exceptional mobile apps and SaaS.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link 
            to="/services" 
            className="w-full sm:w-auto px-8 py-3.5 bg-navy-900 text-white rounded-full font-medium hover:bg-navy-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
          >
            Build with DeepQalby
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link 
            to="/products" 
            className="w-full sm:w-auto px-8 py-3.5 bg-warm-white text-navy-900 border border-warm-100 rounded-full font-medium hover:bg-warm-50 transition-all flex items-center justify-center"
          >
            Explore Our Products
          </Link>
        </div>
      </div>

      {/* Apple-Style Fade Transition Gallery */}
      <div 
        className="relative max-w-6xl mx-auto px-4 sm:px-6 mb-8 group"
        onMouseEnter={() => {
          // Only pause on devices that support hover (desktop)
          if (window.matchMedia('(hover: hover)').matches) {
            setIsPaused(true);
          }
        }}
        onMouseLeave={() => {
          if (window.matchMedia('(hover: hover)').matches) {
            setIsPaused(false);
          }
        }}
      >
        <div className="relative min-h-[500px] sm:min-h-[600px] md:aspect-[4/3] md:min-h-0 md:max-h-[800px]">
          {/* Images with fade transition */}
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
                currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full max-w-full sm:max-w-4xl md:max-w-5xl max-h-[500px] sm:max-h-[600px] md:max-h-[800px] object-contain"
                style={{ background: 'transparent' }}
              />
            </div>
          ))}

          {/* Minimal Navigation Arrows - Visible on mobile, show on hover for desktop */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 md:bg-white/80 hover:bg-white text-navy-900 rounded-full p-2 md:p-2 shadow-lg md:shadow-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 z-20"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="md:w-6 md:h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 md:bg-white/80 hover:bg-white text-navy-900 rounded-full p-2 md:p-2 shadow-lg md:shadow-md transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 z-20"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="md:w-6 md:h-6" />
          </button>

          {/* Minimal Dot Indicators - Apple style */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? 'bg-navy-900 w-8 h-1.5'
                    : 'bg-navy-900/20 hover:bg-navy-900/40 w-1.5 h-1.5'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-900/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
};