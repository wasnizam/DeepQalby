import React from 'react';
import { Mail } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-slate-900 text-white text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">
          Ready to build something meaningful?
        </h2>
        <p className="text-lg md:text-xl text-slate-400 mb-12">
          Let’s discuss your project. No sales pressure, just a conversation about what you need.
        </p>
        <a 
          href="mailto:hello@deepqalby.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-colors"
        >
          <Mail size={20} />
          Start a Conversation
        </a>
      </div>
    </section>
  );
};