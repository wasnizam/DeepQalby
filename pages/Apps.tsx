import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Download, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
  route?: string;
  compatibility?: string;
  bgColor?: string;
}

const apps: App[] = [
  {
    id: '1',
    name: 'iManzil Pro',
    description: 'Protection and peace of mind through daily litanies. Your spiritual shield.',
    category: 'FaithTech',
    icon: '/assets/1.png',
    appStoreUrl: 'https://apps.apple.com/app/imanzil-pro/idYOUR_APP_ID',
    rating: 4.9,
    featured: true,
    comingSoon: false,
    route: '/imanzilpro',
    compatibility: 'iPhone, iPad',
    bgColor: 'from-emerald-50 to-emerald-100'
  },
  {
    id: '2',
    name: 'Ruqyah360',
    description: 'Complete Ruqyah solution for spiritual healing and protection. Comprehensive Islamic healing practices.',
    category: 'FaithTech',
    icon: '/assets/2.png',
    appStoreUrl: 'https://apps.apple.com/ng/app/ruqyah360/id6756375302',
    rating: 4.8,
    featured: true,
    comingSoon: false,
    route: '/ruqyah360',
    compatibility: 'iPhone, iPad',
    bgColor: 'from-blue-50 to-blue-100'
  },
  {
    id: '3',
    name: 'iMathurat Pro',
    description: 'Transform your daily Mathurat into a modern spiritual lifestyle. Track your growth, listen hands-free with CarPlay, manage your mental well-being & access 13+ languages.',
    category: 'Lifestyle',
    icon: '/assets/3.png',
    appStoreUrl: 'https://apps.apple.com/ng/app/imathurat-pro/id6755324401',
    rating: 4.7,
    featured: true,
    comingSoon: false,
    route: '/imathuratpro',
    compatibility: 'iPhone, iPad',
    bgColor: 'from-purple-50 to-purple-100'
  },
  {
    id: '4',
    name: 'Tawaf Counter',
    description: 'The Ultimate Tawaf Companion for Pilgrims Worldwide. Complete Tawaf experience with counter, Sai, planner, tracker, prayer times, geofencing, weather, and complete duas.',
    category: 'Productivity',
    icon: '/assets/4.png',
    appStoreUrl: 'https://apps.apple.com/ng/app/tawaf-counter/id6447226579',
    rating: 4.8,
    featured: true,
    comingSoon: false,
    route: '/tawafcounter',
    compatibility: 'iPhone, iPad',
    bgColor: 'from-amber-50 to-amber-100'
  },
  {
    id: '5',
    name: 'Luma',
    description: 'Mental clarity and reflection for the modern professional. Find your focus.',
    category: 'Utility',
    icon: '',
    appStoreUrl: '#',
    rating: 4.6,
    featured: false,
    comingSoon: true,
    compatibility: 'iPhone, iPad',
    bgColor: 'from-gray-50 to-gray-100'
  },
  {
    id: '6',
    name: 'Islamic Jar',
    description: 'Making charitable giving a seamless daily habit. Give with intention.',
    category: 'FaithTech',
    icon: '',
    appStoreUrl: '#',
    rating: 4.8,
    featured: false,
    comingSoon: true,
    compatibility: 'iPhone, iPad',
    bgColor: 'from-green-50 to-green-100'
  },
];

const AppCard: React.FC<{ app: App }> = ({ app }) => {
  return (
    <div className={`flex flex-col flex-shrink-0 w-[340px] md:w-[400px] rounded-[28px] overflow-hidden shadow-xl border border-navy-200/20 bg-gradient-to-br ${app.bgColor || 'from-warm-50 to-warm-100'}`}>
      {/* Top Section - Icon, Name, Description, Buttons */}
      <div className="p-6 md:p-8 flex-shrink-0">
        {/* Icon and Name */}
        <div className="flex items-start gap-3 mb-4">
          {app.icon && (
            <div className="w-14 h-14 rounded-2xl bg-white/90 flex items-center justify-center shadow-md flex-shrink-0">
              <img src={app.icon} alt={app.name} className="w-12 h-12 object-contain" />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-2">{app.name}</h3>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-sm md:text-base text-navy-700 mb-6 leading-relaxed">
          {app.description}
        </p>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-4 mb-6">
          {!app.comingSoon ? (
            <>
              <a
                href={app.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy-900 text-white rounded-full text-sm font-medium hover:bg-navy-800 transition-all shadow-sm"
              >
                Get
              </a>
              {app.route && (
                <Link
                  to={app.route}
                  className="text-sm font-medium text-navy-700 hover:text-navy-900 underline underline-offset-4"
                >
                  Learn more
                </Link>
              )}
            </>
          ) : (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-navy-600 text-white rounded-full text-sm font-medium cursor-not-allowed opacity-75">
              Coming Soon
            </div>
          )}
        </div>
        
        {/* Compatibility */}
        {app.compatibility && (
          <div className="text-xs text-navy-600 pt-4 border-t border-navy-200/40">
            <div className="font-medium mb-1">Compatibility</div>
            <div>{app.compatibility}</div>
          </div>
        )}
      </div>
      
      {/* Large App Preview - Aligned at bottom */}
      {app.icon && (
        <div className="relative flex-1 min-h-[420px] md:min-h-[520px] bg-gradient-to-br from-white/30 via-white/10 to-transparent flex items-end justify-center overflow-hidden mt-auto">
          <img
            src={app.icon}
            alt={`${app.name} app preview`}
            className="w-full max-h-full object-contain object-bottom p-6 md:p-10"
            style={{ background: 'transparent' }}
          />
        </div>
      )}
    </div>
  );
};

const AppGallery: React.FC<{ title: string; subtitle: string; apps: App[]; className?: string }> = ({ 
  title, 
  subtitle, 
  apps,
  className = ''
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      window.addEventListener('resize', checkScrollability);
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        window.removeEventListener('resize', checkScrollability);
      };
    }
  }, [apps]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  if (apps.length === 0) return null;

  return (
    <section className={`py-16 md:py-24 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-navy-900 mb-2">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-navy-600 mb-12">
          {subtitle}
        </p>
        
        <div 
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {apps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>

          {/* Navigation Arrows - Show on hover for desktop */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className={`absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-navy-900 rounded-full p-3 shadow-xl transition-all z-20 hover:scale-110 ${
                isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className={`absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-navy-900 rounded-full p-3 shadow-xl transition-all z-20 hover:scale-110 ${
                isHovered ? 'opacity-100' : 'opacity-0 md:opacity-0'
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export const Apps: React.FC = () => {
  const featuredApps = apps.filter(app => app.featured);
  const faithTechApps = apps.filter(app => app.category === 'FaithTech');
  const lifestyleApps = apps.filter(app => app.category === 'Lifestyle');
  const productivityApps = apps.filter(app => app.category === 'Productivity');
  const utilityApps = apps.filter(app => app.category === 'Utility');
  const comingSoonApps = apps.filter(app => app.comingSoon);

  return (
    <div className="pt-20 min-h-screen bg-warm-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-navy-900 mb-6">
            Apps by DeepQalby
          </h1>
          <p className="text-xl md:text-2xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Connect, create, and get things done with powerful and intuitive apps designed to be accessible, private, and secure.
          </p>
        </div>
      </section>

      {/* The Latest - Featured Apps */}
      {featuredApps.length > 0 && (
        <section className="py-12 md:py-20 px-6 bg-gradient-to-b from-warm-white to-warm-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-semibold text-navy-900 mb-12">
              The latest. New and notable updates.
            </h2>
            <div className="relative group">
              <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth">
                {featuredApps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FaithTech Section */}
      {faithTechApps.length > 0 && (
        <AppGallery
          title="FaithTech."
          subtitle="Apps to strengthen your spiritual journey."
          apps={faithTechApps}
        />
      )}

      {/* Lifestyle Section */}
      {lifestyleApps.length > 0 && (
        <AppGallery
          title="Lifestyle."
          subtitle="Transform your daily spiritual practice."
          apps={lifestyleApps}
          className="bg-warm-50"
        />
      )}

      {/* Productivity Section */}
      {productivityApps.length > 0 && (
        <AppGallery
          title="Productivity."
          subtitle="All you need to make your worship a work of art."
          apps={productivityApps}
        />
      )}

      {/* Utility Section */}
      {utilityApps.length > 0 && (
        <AppGallery
          title="Utility."
          subtitle="Tools for modern professionals."
          apps={utilityApps}
          className="bg-warm-50"
        />
      )}

      {/* Coming Soon Section */}
      {comingSoonApps.length > 0 && (
        <AppGallery
          title="Coming Soon."
          subtitle="Exciting apps in development."
          apps={comingSoonApps}
        />
      )}

      {/* Footer CTA */}
      <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-warm-white to-warm-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6">
            Apps you love. From a place you can trust.
          </h2>
          <p className="text-lg text-navy-600 mb-8 max-w-2xl mx-auto">
            Every app is designed with privacy, security, and accessibility in mind.
          </p>
          <Link
            to="/store"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 text-white rounded-full font-medium hover:bg-navy-800 transition-all shadow-sm hover:shadow-md"
          >
            View All Apps
            <ChevronRight size={18} />
          </Link>
        </div>
      </section>

      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

