import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Download, Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface App {
  id: string;
  name: string;
  description: string;
  category: string;
  icon: string;
  appStoreUrl: string;
  rating?: number;
  featured?: boolean;
  comingSoon?: boolean;
}

const apps: App[] = [
  {
    id: '1',
    name: 'iManzil Pro',
    description: 'Protection and peace of mind through daily litanies. Your spiritual shield.',
    category: 'FaithTech',
    icon: '/assets/1.png',
    appStoreUrl: '#',
    rating: 4.9,
    featured: false,
    comingSoon: true
  },
  {
    id: '2',
    name: 'Ruqyah360',
    description: 'Complete Ruqyah solution for spiritual healing and protection. Comprehensive Islamic healing practices.',
    category: 'FaithTech',
    icon: '/assets/2.png',
    appStoreUrl: '#',
    rating: 4.8,
    featured: false,
    comingSoon: true
  },
  {
    id: '3',
    name: 'iMathurat Pro',
    description: 'Transform your daily Mathurat into a modern spiritual lifestyle. Track your growth, listen hands-free with CarPlay, manage your mental well-being & access 13+ languages. Modern, Complete, Lifestyle-Oriented Mathurat App.',
    category: 'Lifestyle',
    icon: '/assets/3.png',
    appStoreUrl: 'https://apps.apple.com/ng/app/imathurat-pro/id6755324401',
    rating: 4.7,
    featured: true
  },
  {
    id: '4',
    name: 'Tawaf Counter',
    description: 'The Ultimate Tawaf Companion for Pilgrims Worldwide. Complete Tawaf experience with counter, Sai, planner, tracker, prayer times, geofencing, weather, and complete duas. Available in 9 languages.',
    category: 'Productivity',
    icon: '/assets/4.png',
    appStoreUrl: 'https://apps.apple.com/ng/app/tawaf-counter/id6447226579',
    rating: 4.8,
    featured: true
  },
  {
    id: '5',
    name: 'Luma',
    description: 'Mental clarity and reflection for the modern professional. Find your focus.',
    category: 'Utility',
    icon: '', // No image yet
    appStoreUrl: '#',
    rating: 4.6,
    featured: false,
    comingSoon: true
  },
  {
    id: '6',
    name: 'Islamic Jar',
    description: 'Making charitable giving a seamless daily habit. Give with intention.',
    category: 'FaithTech',
    icon: '', // No image yet
    appStoreUrl: '#',
    rating: 4.8,
    featured: false,
    comingSoon: true
  },
];

export const Store: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  const featuredApps = apps.filter(app => app.featured);
  const otherApps = apps.filter(app => !app.featured);
  const appsWithImages = apps.filter(app => app.icon); // Only apps with images for slider

  // Auto-play slider
  useEffect(() => {
    const isDesktop = window.matchMedia('(hover: hover)').matches;
    
    if (!isPaused || !isDesktop) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % appsWithImages.length);
      }, 4000);
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
  }, [isPaused, appsWithImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + appsWithImages.length) % appsWithImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % appsWithImages.length);
  };

  return (
    <div className="pt-20 min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-navy-900 mb-6">
            Our Apps
          </h1>
          <p className="text-xl md:text-2xl text-navy-600 max-w-2xl mx-auto leading-relaxed">
            Purpose-driven digital products designed with intention and care.
          </p>
        </div>
      </section>

      {/* Apple-Style Promotional Slider */}
      <section 
        className="py-12 md:py-20 px-6 bg-gradient-to-b from-warm-white to-warm-50"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="max-w-7xl mx-auto">
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-900/5 to-warm-50 min-h-[420px] md:min-h-[640px]">
              {/* Slider Images */}
              {appsWithImages.map((app, index) => (
                <div
                  key={app.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                  }`}
                >
                  <div className="flex flex-col md:flex-row items-center justify-center p-8 md:p-16 gap-10 md:gap-16">
                    {/* App Image */}
                    <div className="flex-1 flex items-center justify-center max-w-2xl w-full">
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-full h-auto max-h-[360px] sm:max-h-[420px] md:max-h-[560px] object-contain transition-transform duration-700"
                        style={{ background: 'transparent' }}
                      />
                    </div>
                    
                    {/* App Info */}
                    <div className="flex-1 text-center md:text-left max-w-xl mt-6 md:mt-0">
                      <div className="mb-4">
                        <span className="text-xs font-medium text-emerald-muted uppercase tracking-wider">
                          {app.category}
                        </span>
                        {app.comingSoon && (
                          <span className="ml-3 text-xs font-medium text-navy-600 bg-warm-100 px-3 py-1 rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <h2 className="text-4xl md:text-6xl font-semibold text-navy-900 mb-4 tracking-tight">
                        {app.name}
                      </h2>
                      <p className="text-lg md:text-xl text-navy-600 mb-8 leading-relaxed">
                        {app.description}
                      </p>
                      {app.rating && (
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-8">
                          <Star size={20} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-lg font-medium text-navy-600">{app.rating}</span>
                        </div>
                      )}
                      {app.comingSoon ? (
                        <div className="inline-flex items-center gap-2 px-8 py-4 bg-navy-600 text-white rounded-full font-medium cursor-not-allowed opacity-75">
                          <span>Coming Soon</span>
                        </div>
                      ) : (
                        <a
                          href={app.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-full font-medium hover:bg-navy-800 transition-all shadow-lg hover:shadow-xl group/link"
                        >
                          <Download size={20} />
                          <span>Download on App Store</span>
                          <ExternalLink size={18} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-navy-900 rounded-full p-2 md:p-3 shadow-lg transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 z-20"
                aria-label="Previous app"
              >
                <ChevronLeft size={24} className="md:w-6 md:h-6" />
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-navy-900 rounded-full p-2 md:p-3 shadow-lg transition-all opacity-100 md:opacity-0 md:group-hover:opacity-100 hover:scale-110 z-20"
                aria-label="Next app"
              >
                <ChevronRight size={24} className="md:w-6 md:h-6" />
              </button>

              {/* Dot Indicators - desktop (overlay) */}
              <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 gap-2 z-20">
                {appsWithImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? 'bg-navy-900 w-10 h-2'
                        : 'bg-navy-900/20 hover:bg-navy-900/40 w-2 h-2'
                    }`}
                    aria-label={`Go to ${appsWithImages[index].name}`}
                  />
                ))}
              </div>
            </div>

            {/* Dot Indicators - mobile (below slider) */}
            <div className="flex md:hidden justify-center mt-4 gap-2">
              {appsWithImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? 'bg-navy-900 w-8 h-2'
                      : 'bg-navy-900/20 hover:bg-navy-900/40 w-2 h-2'
                  }`}
                  aria-label={`Go to ${appsWithImages[index].name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      {featuredApps.length > 0 && (
        <section className="py-12 md:py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-8 md:mb-12 text-center">
              Featured
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {featuredApps.map((app) => (
                <div
                  key={app.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-warm-100"
                >
                  {app.icon && (
                    <div className="relative aspect-[16/10] bg-gradient-to-br from-warm-50 to-warm-white overflow-hidden">
                      <img
                        src={app.icon}
                        alt={app.name}
                        className="w-full h-full object-contain p-8 md:p-12 transition-transform duration-700 group-hover:scale-105"
                        style={{ background: 'transparent' }}
                      />
                    </div>
                  )}
                  <div className="p-6 md:p-8">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-emerald-muted uppercase tracking-wider">
                          {app.category}
                        </span>
                        {app.comingSoon && (
                          <span className="text-xs font-medium text-navy-600 bg-warm-100 px-2 py-1 rounded-full">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      {app.rating && (
                        <div className="flex items-center gap-1">
                          <Star size={14} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-sm font-medium text-navy-600">{app.rating}</span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-3">
                      {app.name}
                    </h3>
                    <p className="text-navy-600 mb-6 leading-relaxed">
                      {app.description}
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                      {app.comingSoon ? (
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-navy-600 text-white rounded-full font-medium cursor-not-allowed opacity-75">
                          <span>Coming Soon</span>
                        </div>
                      ) : (
                        <a
                          href={app.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-full font-medium hover:bg-navy-800 transition-all shadow-sm hover:shadow-md group/link"
                        >
                          <Download size={18} />
                          <span>Download on App Store</span>
                          <ExternalLink size={16} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                        </a>
                      )}

                      {(app.name === 'iMathurat Pro' || app.name === 'iManzil Pro' || app.name === 'Tawaf Counter') && (
                        <Link
                          to={
                            app.name === 'iMathurat Pro'
                              ? '/imathuratpro'
                              : app.name === 'iManzil Pro'
                              ? '/imanzilpro'
                              : '/tawafcounter'
                          }
                          className="text-sm font-medium text-navy-700 hover:text-navy-900 underline underline-offset-4"
                        >
                          More
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Apps Section */}
      <section className="py-12 md:py-16 px-6 bg-warm-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-8 md:mb-12 text-center">
            All Apps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {otherApps.map((app) => (
              <div
                key={app.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-warm-100"
              >
                {app.icon ? (
                  <div className="relative aspect-square bg-gradient-to-br from-warm-50 to-warm-white overflow-hidden">
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-full h-full object-contain p-6 md:p-8 transition-transform duration-500 group-hover:scale-105"
                      style={{ background: 'transparent' }}
                    />
                  </div>
                ) : (
                  <div className="relative aspect-square bg-gradient-to-br from-warm-50 to-warm-100 overflow-hidden flex items-center justify-center">
                    <span className="text-navy-400 text-sm font-medium">Image Coming Soon</span>
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-emerald-muted uppercase tracking-wider">
                        {app.category}
                      </span>
                      {app.comingSoon && (
                        <span className="text-xs font-medium text-navy-600 bg-warm-100 px-2 py-0.5 rounded-full">
                          Coming Soon
                        </span>
                      )}
                    </div>
                    {app.rating && (
                      <div className="flex items-center gap-1">
                        <Star size={12} className="text-yellow-400 fill-yellow-400" />
                        <span className="text-xs font-medium text-navy-600">{app.rating}</span>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">
                    {app.name}
                  </h3>
                  <p className="text-sm text-navy-600 mb-4 leading-relaxed line-clamp-2">
                    {app.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {app.comingSoon ? (
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy-600 text-white rounded-full text-sm font-medium cursor-not-allowed opacity-75 w-full justify-center">
                        <span>Coming Soon</span>
                      </div>
                    ) : (
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900 text-white rounded-full text-sm font-medium hover:bg-navy-800 transition-all w-full justify-center group/link"
                      >
                        <Download size={16} />
                        <span>Get</span>
                        <ExternalLink size={14} className="opacity-70 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    )}

                    {(app.name === 'iMathurat Pro' || app.name === 'iManzil Pro' || app.name === 'Tawaf Counter' || app.name === 'Ruqyah360') && (
                      <div className="flex justify-center">
                        <Link
                          to={
                            app.name === 'iMathurat Pro'
                              ? '/imathuratpro'
                              : app.name === 'iManzil Pro'
                              ? '/imanzilpro'
                              : app.name === 'Tawaf Counter'
                              ? '/tawafcounter'
                              : '/ruqyah360'
                          }
                          className="text-xs font-medium text-navy-700 hover:text-navy-900 underline underline-offset-4"
                        >
                          More
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6">
            Building something new?
          </h2>
          <p className="text-lg text-navy-600 mb-8 max-w-2xl mx-auto">
            We help founders ship exceptional mobile apps and SaaS. Let's build together.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-full font-medium hover:bg-navy-800 transition-all shadow-sm hover:shadow-md"
          >
            Start a Project
            <ExternalLink size={18} />
          </a>
        </div>
      </section>
    </div>
  );
};

