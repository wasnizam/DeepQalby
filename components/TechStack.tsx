import React from 'react';
import { Cpu, Globe, Database, Smartphone, Cloud, Layers } from 'lucide-react';

export const TechStack: React.FC = () => {
  const techs = [
    { name: 'React Native', icon: <Smartphone size={18} /> },
    { name: 'TypeScript', icon: <Cpu size={18} /> },
    { name: 'Node.js', icon: <Globe size={18} /> },
    { name: 'PostgreSQL', icon: <Database size={18} /> },
    { name: 'AWS Cloud', icon: <Cloud size={18} /> },
    { name: 'Next.js', icon: <Layers size={18} /> },
  ];

  return (
    <section className="py-12 bg-warm-white border-b border-warm-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-sm font-semibold text-navy-600/60 uppercase tracking-widest mb-8">
          Powered by Modern Tech
        </p>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {techs.map((tech) => (
            <div 
              key={tech.name} 
              className="flex items-center gap-2 px-5 py-2.5 bg-warm-50 rounded-full border border-warm-100 text-navy-800 font-medium text-sm hover:border-navy-900/20 transition-colors cursor-default"
            >
              <span className="text-emerald-muted">{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};