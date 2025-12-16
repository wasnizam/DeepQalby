import React from 'react';
import { Check } from 'lucide-react';

export const WhoFor: React.FC = () => {
  const clients = [
    "FaithTech founders seeking a partner who understands the domain.",
    "Non-religious founders building serious, purpose-driven products.",
    "Startups needing a technical partner to move from Idea to App Store.",
    "Educational institutions digitizing their curriculum."
  ];

  return (
    <section className="py-24 px-6 bg-warm-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-navy-900 mb-12 text-center">
          Who we work with.
        </h2>
        
        <div className="space-y-6">
          {clients.map((client, idx) => (
            <div key={idx} className="flex items-start gap-4 p-6 rounded-2xl bg-warm-50 border border-warm-100/50">
              <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-emerald-muted text-white flex items-center justify-center">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="text-lg text-navy-800">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};