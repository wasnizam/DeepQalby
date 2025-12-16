import React from 'react';
import { Smartphone, Layout, Server, Rocket } from 'lucide-react';

const serviceList = [
  {
    title: "Mobile App Development",
    desc: "Native-quality experiences for iOS and Android using modern frameworks. Fast, fluid, and reliable.",
    icon: <Smartphone className="w-5 h-5" />
  },
  {
    title: "Web Apps & Dashboards",
    desc: "Responsive, powerful web tools that work beautifully on any device. Built for scale.",
    icon: <Layout className="w-5 h-5" />
  },
  {
    title: "SaaS Platforms",
    desc: "End-to-end architecture for subscription services. From authentication to recurring billing.",
    icon: <Server className="w-5 h-5" />
  },
  {
    title: "MVP Development",
    desc: "Turn your idea into a tangible product quickly. We help you validate without wasting resources.",
    icon: <Rocket className="w-5 h-5" />
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-warm-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-12 mb-16">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-navy-900 mb-6">
              Our Expertise.
            </h2>
            <p className="text-lg text-navy-600">
              We work on both FaithTech and non-FaithTech projects. Our process is adaptable, but our quality standard is fixed.
            </p>
          </div>
          <div className="hidden md:block">
            {/* Decorative element or empty space */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {serviceList.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-warm-100 hover:border-warm-200 transition-colors">
              <div className="w-10 h-10 bg-navy-900 text-white rounded-lg flex items-center justify-center mb-6 shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-navy-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};