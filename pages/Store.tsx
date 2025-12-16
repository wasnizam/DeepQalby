import React from 'react';
import { ExternalLink, Download, Star } from 'lucide-react';

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
    name: 'Tawaf Counter',
    description: 'The Ultimate Tawaf Companion for Pilgrims Worldwide. Complete Tawaf experience with counter, Sai, planner, tracker, prayer times, geofencing, weather, and complete duas. Available in 9 languages.',
    category: 'Productivity',
    icon: '/assets/1.png',
    appStoreUrl: 'https://apps.apple.com/ng/app/tawaf-counter/id6447226579',
    rating: 4.8,
    featured: true
  },
  {
    id: '2',
    name: 'iManzil Pro',
    description: 'Protection and peace of mind through daily litanies. Your spiritual shield.',
    category: 'FaithTech',
    icon: '/assets/2.png',
    appStoreUrl: '#',
    rating: 4.9,
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
    name: 'Luma',
    description: 'Mental clarity and reflection for the modern professional. Find your focus.',
    category: 'Utility',
    icon: '/assets/4.png',
    appStoreUrl: '#',
    rating: 4.6,
    featured: false,
    comingSoon: true
  },
  {
    id: '5',
    name: 'Islamic Jar',
    description: 'Making charitable giving a seamless daily habit. Give with intention.',
    category: 'FaithTech',
    icon: '/assets/1.png',
    appStoreUrl: '#',
    rating: 4.8,
    featured: false,
    comingSoon: true
  },
];

export const Store: React.FC = () => {
  const featuredApps = apps.filter(app => app.featured);
  const otherApps = apps.filter(app => !app.featured);

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
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-warm-50 to-warm-white overflow-hidden">
                    <img
                      src={app.icon}
                      alt={app.name}
                      className="w-full h-full object-contain p-8 md:p-12 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: 'transparent' }}
                    />
                  </div>
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
                <div className="relative aspect-square bg-gradient-to-br from-warm-50 to-warm-white overflow-hidden">
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-full h-full object-contain p-6 md:p-8 transition-transform duration-500 group-hover:scale-105"
                    style={{ background: 'transparent' }}
                  />
                </div>
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

