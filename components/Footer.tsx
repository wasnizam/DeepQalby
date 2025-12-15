import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 px-6 border-t border-slate-200">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-900 font-semibold text-lg tracking-tight">
          DeepQalby
        </div>
        
        <div className="flex gap-8 text-sm text-slate-600">
          <Link to="/" className="hover:text-slate-900 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-slate-900 transition-colors">Products</Link>
          <Link to="/expertise" className="hover:text-slate-900 transition-colors">Expertise</Link>
          <Link to="/services" className="hover:text-slate-900 transition-colors">Services</Link>
          <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
        </div>

        <div className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} DeepQalby Studio.
        </div>
      </div>
    </footer>
  );
};