import React from 'react';
import { Hero } from '../components/Hero';
import { FinalCTA } from '../components/FinalCTA';
import { ProductEcosystem } from '../components/ProductEcosystem';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <ProductEcosystem />
      <FinalCTA />
    </>
  );
};