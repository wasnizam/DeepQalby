import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
          Purpose-driven <br className="hidden md:block" /> digital products.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          DeepQalby is a product studio. We build our own FaithTech platforms and help founders ship exceptional mobile apps and SaaS.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/services" 
            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
          >
            Build with DeepQalby
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <Link 
            to="/products" 
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all flex items-center justify-center"
          >
            Explore Our Products
          </Link>
        </div>
      </div>
    </section>
  );
};