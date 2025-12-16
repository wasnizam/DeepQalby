import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hexagon } from 'lucide-react';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-warm-50 py-12 px-6 border-t border-warm-100">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <Link to="/" className="flex items-center gap-3 group">
          {!logoError ? (
            <img 
              src="https://raw.githubusercontent.com/wasnizam/DeepQalby/main/assets/DeeoQalby.png" 
              alt="DeepQalby Logo" 
              onError={() => setLogoError(true)}
              className="w-6 h-6 transition-all group-hover:opacity-80" 
            />
          ) : (
            <Hexagon className="w-6 h-6 text-navy-600 transition-all group-hover:text-navy-900" strokeWidth={1.5} />
          )}
          <span className="text-navy-900 font-semibold text-lg tracking-tight">
            DeepQalby
          </span>
        </Link>
        
        <div className="flex gap-8 text-sm text-navy-600 flex-wrap justify-center">
          <Link to="/" className="hover:text-navy-900 transition-colors">Home</Link>
          <Link to="/products" className="hover:text-navy-900 transition-colors">Products</Link>
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