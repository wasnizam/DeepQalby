import React from 'react';
import { ProductEcosystem } from '../components/ProductEcosystem';
import { FinalCTA } from '../components/FinalCTA';

export const Products: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-slate-50 border-b border-slate-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Our Products</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            Real products, shipped and scaling. This is our playground for innovation and quality.
          </p>
        </div>
      </div>
      <ProductEcosystem />
      <FinalCTA />
    </div>
  );
};