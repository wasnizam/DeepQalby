import React from 'react';
import { Layers, Heart, Fingerprint, Code2 } from 'lucide-react';

export const WhyDeepQalby: React.FC = () => {
  const reasons = [
    {
      icon: <Layers className="w-6 h-6 text-emerald-muted" />,
      title: "Product-Led Studio",
      text: "We aren't just an agency. We are makers. We understand the anxiety of shipping because we do it for ourselves every day."
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-emerald-muted" />,
      title: "Ethical UX",
      text: "We design for human wellbeing, not addiction. We reject dark patterns in favor of clarity, calmness, and respect."
    },
    {
      icon: <Heart className="w-6 h-6 text-emerald-muted" />,
      title: "Calm Design",
      text: "Our aesthetic is intentional. We use whitespace and typography to create focus, removing clutter so the utility shines."
    },
    {
      icon: <Code2 className="w-6 h-6 text-emerald-muted" />,
      title: "Production Reality",
      text: "Theory is easy. Shipping is hard. We bring deep production experience to handle the messy reality of app stores and APIs."
    }
  ];

  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy-900">
            Why DeepQalby?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-6">
              <div className="shrink-0 w-12 h-12 bg-warm-50 rounded-full flex items-center justify-center border border-warm-100">
                {reason.icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold text-navy-900 mb-3">{reason.title}</h4>
                <p className="text-navy-600 leading-relaxed">
                  {reason.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};