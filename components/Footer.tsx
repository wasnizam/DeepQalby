import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-warm-50 py-12 px-6 border-t border-warm-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/assets/DeeoQalby.png" 
            alt="DeepQalby Logo" 
            className="h-8 w-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all" 
          />
          <span className="text-navy-900 font-semibold text-lg tracking-tight">
            DeepQalby
          </span>
        </Link>
        
        <div className="flex gap-8 text-sm text-navy-600 flex-wrap justify-center">
          <Link to="/" className="hover:text-navy-900 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-navy-900 transition-colors">Products</Link>
          <Link to="/store" className="hover:text-navy-900 transition-colors">Store</Link>
          <Link to="/expertise" className="hover:text-navy-900 transition-colors">Expertise</Link>
          <Link to="/services" className="hover:text-navy-900 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-navy-900 transition-colors">Contact</Link>
          <Link to="/privacy" className="hover:text-navy-900 transition-colors">Privacy Policy</Link>
        </div>

        <div className="text-sm text-navy-600/60">
          &copy; {new Date().getFullYear()} DeepQalby Studio.
        </div>
      </div>
    </footer>
  );
};