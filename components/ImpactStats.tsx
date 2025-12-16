import React from 'react';

export const ImpactStats: React.FC = () => {
  const stats = [
    { value: '5+', label: 'Products Shipped' },
    { value: '2', label: 'Unique Platforms' },
    { value: '100%', label: 'Bootstrapped' },
    { value: 'Global', label: 'User Reach' },
  ];

  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-navy-800/50">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-semibold mb-2 text-warm-white">{stat.value}</span>
              <span className="text-sm md:text-base text-navy-600/80 font-medium tracking-wide text-slate-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};