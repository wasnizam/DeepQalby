import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) => `text-sm font-medium transition-colors ${
    isActive(path) ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
  }`;

  const mobileLinkClass = (path: string) => `text-base font-medium transition-colors ${
    isActive(path) ? 'text-slate-900' : 'text-slate-600'
  }`;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-lg font-semibold tracking-tight text-slate-900">
          DeepQalby
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/products" className={linkClass('/products')}>Products</Link>
          <Link to="/expertise" className={linkClass('/expertise')}>Expertise</Link>
          <Link to="/services" className={linkClass('/services')}>Services</Link>
          <a href="mailto:hello@deepqalby.com" className="text-sm font-medium px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all">
            Start a Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col space-y-4 shadow-lg h-screen">
           <Link to="/products" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass('/products')}>Products</Link>
          <Link to="/expertise" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass('/expertise')}>Expertise</Link>
          <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className={mobileLinkClass('/services')}>Services</Link>
          <a href="mailto:hello@deepqalby.com" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-slate-900 pt-2">Start a Project</a>
        </div>
      )}
    </nav>
  );
};