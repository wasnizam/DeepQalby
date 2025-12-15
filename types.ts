import React from 'react';

export interface Product {
  id: string;
  name: string;
  description: string;
  category: 'FaithTech' | 'Utility';
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}