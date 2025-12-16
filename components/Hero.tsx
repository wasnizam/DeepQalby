import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12 px-6">
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

      {/* Hero Image */}
      <div className="relative max-w-5xl mx-auto px-6">
        {/* Glow effect behind the image */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-emerald-muted/20 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        
        <img 
          src="https://raw.githubusercontent.com/wasnizam/DeepQalby/main/assets/1.png" 
          alt="DeepQalby Dashboard Preview" 
          className="w-full h-auto object-contain mx-auto drop-shadow-2xl"
          style={{ maxHeight: '600px' }}
        />
      </div>

      {/* Background Decorative Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-900/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
    </section>
  );
};