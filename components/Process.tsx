import React from 'react';

export const Process: React.FC = () => {
  const steps = [
    { num: '01', title: 'Discovery', desc: 'We align on your vision, user needs, and technical constraints. No fluff, just clarity.' },
    { num: '02', title: 'Build', desc: 'Iterative development with regular updates. You see the product come to life week by week.' },
    { num: '03', title: 'Launch', desc: 'We handle the deployment, app store submission, and post-launch stability checks.' }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-16">
          From idea to launch.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {idx !== steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-12 right-0 h-px bg-slate-100 -z-10"></div>
              )}
              <div className="w-12 h-12 rounded-full bg-slate-900 text-white text-lg font-medium flex items-center justify-center mb-6 ring-8 ring-white">
                {step.num}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};