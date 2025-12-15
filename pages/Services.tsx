import React from 'react';
import { Services as ServicesList } from '../components/Services';
import { Process } from '../components/Process';
import { WhoFor } from '../components/WhoFor';
import { FinalCTA } from '../components/FinalCTA';

export const Services: React.FC = () => {
  return (
    <div className="pt-20">
       <div className="bg-slate-50 border-b border-slate-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-6">Studio Services</h1>
          <p className="text-xl text-slate-600 max-w-2xl">
            We partner with founders to build high-quality digital products from scratch.
          </p>
        </div>
      </div>
      <ServicesList />
      <WhoFor />
      <Process />
      <FinalCTA />
    </div>
  );
};