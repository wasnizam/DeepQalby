import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
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

      {/* Hero Images Gallery */}
      <div className="relative max-w-7xl mx-auto px-6 mb-0">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
          <div className="group flex items-center justify-center">
            <img 
              src="/assets/1.png" 
              alt="DeepQalby Product Showcase 1" 
              className="w-full h-auto max-h-[600px] md:max-h-[700px] object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ background: 'transparent' }}
            />
          </div>
          <div className="group flex items-center justify-center">
            <img 
              src="/assets/2.png" 
              alt="DeepQalby Product Showcase 2" 
              className="w-full h-auto max-h-[600px] md:max-h-[700px] object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ background: 'transparent' }}
            />
          </div>
          <div className="group flex items-center justify-center">
            <img 
              src="/assets/3.png" 
              alt="DeepQalby Product Showcase 3" 
              className="w-full h-auto max-h-[600px] md:max-h-[700px] object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ background: 'transparent' }}
            />
          </div>
          <div className="group flex items-center justify-center">
            <img 
              src="/assets/4.png" 
              alt="DeepQalby Product Showcase 4" 
              className="w-full h-auto max-h-[600px] md:max-h-[700px] object-contain transition-transform duration-300 group-hover:scale-105"
              style={{ background: 'transparent' }}
            />
          </div>
        </div>
      </div>

      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-900/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
};