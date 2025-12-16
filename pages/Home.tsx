import React from 'react';
import { Hero } from '../components/Hero';
import { FinalCTA } from '../components/FinalCTA';
import { ProductEcosystem } from '../components/ProductEcosystem';
import { WhyDeepQalby } from '../components/WhyDeepQalby';
import { TechStack } from '../components/TechStack';
import { ImpactStats } from '../components/ImpactStats';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TechStack />
      <WhyDeepQalby />
      <ProductEcosystem />
      <ImpactStats />
      <FinalCTA />
    </>
  );
};