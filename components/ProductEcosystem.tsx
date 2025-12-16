import React from 'react';
import { Product } from '../types';
import { Smartphone, BookOpen, Activity, Coins } from 'lucide-react';

const products: Product[] = [
  { id: '1', name: 'Tawaf Counter', description: 'Focus on your worship without distraction.', category: 'FaithTech' },
  { id: '2', name: 'iManzil Pro', description: 'Protection and peace of mind through daily litanies.', category: 'FaithTech' },
  { id: '3', name: 'iMathurat Pro', description: 'Morning and evening remembrance, simplified.', category: 'FaithTech' },
  { id: '4', name: 'Luma', description: 'Mental clarity and reflection for the modern professional.', category: 'Utility' },
  { id: '5', name: 'Islamic Jar', description: 'Making charitable giving a seamless daily habit.', category: 'FaithTech' },
];

const ProductIcon = ({ name }: { name: string }) => {
  const iconClass = "w-6 h-6 text-emerald-muted";
  switch (name) {
    case 'Tawaf Counter': return <Activity className={iconClass} />;
    case 'iManzil Pro': return <ShieldIcon className={iconClass} />;
    case 'iMathurat Pro': return <BookOpen className={iconClass} />;
    case 'Luma': return <Smartphone className={iconClass} />;
    case 'Islamic Jar': return <Coins className={iconClass} />;
    default: return <Smartphone className={iconClass} />;
  }
};

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

export const ProductEcosystem: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy-900 mb-4">
            Built by us.
          </h2>
          <p className="text-lg text-navy-600 max-w-xl">
            We don't just write code for clients. We design, build, and scale our own products. This experience ensures your project is built to last.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-2xl p-8 border border-warm-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
            >
              <div className="w-12 h-12 bg-emerald-light/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
                <ProductIcon name={product.name} />
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-2">{product.name}</h3>
              <p className="text-navy-600 leading-relaxed">{product.description}</p>
              <div className="mt-auto pt-6">
                 <span className="text-xs font-medium text-emerald-muted uppercase tracking-wider">{product.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};