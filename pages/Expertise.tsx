import React from 'react';
import { TwoTrackFocus } from '../components/TwoTrackFocus';
import { WhyDeepQalby } from '../components/WhyDeepQalby';
import { FinalCTA } from '../components/FinalCTA';

export const Expertise: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-warm-white pt-16 px-6">
         <div className="max-w-6xl mx-auto mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-navy-900 mb-6">Our Expertise</h1>
            <p className="text-xl text-navy-600 max-w-2xl">
              DeepQalby operates at the intersection of serious technology and ethical design.
            </p>
         </div>
      </div>
      <TwoTrackFocus />
      <WhyDeepQalby />
      <FinalCTA />
    </div>
  );
};