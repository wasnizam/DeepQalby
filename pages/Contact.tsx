import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Mail, MapPin, MessageCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="bg-warm-50 border-b border-warm-100 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-navy-900 mb-6">Contact Us</h1>
          <p className="text-xl text-navy-600 max-w-2xl">
            Have a question, feedback, or a project in mind? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="py-24 px-6 bg-warm-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold text-navy-900 mb-6">Get in touch</h2>
            <p className="text-navy-600 leading-relaxed mb-10">
              Whether you're looking for support with one of our products or interested in partnering with us to build your own, our team is here to help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-warm-50 rounded-lg flex items-center justify-center text-navy-900 border border-warm-100 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                  <a href="mailto:deepqalby@gmail.com" className="text-navy-600 hover:text-navy-900 transition-colors">
                    deepqalby@gmail.com
                  </a>
                  <p className="text-sm text-navy-600/60 mt-1">For general inquiries and projects.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-warm-50 rounded-lg flex items-center justify-center text-navy-900 border border-warm-100 shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">Product Support</h3>
                  <p className="text-navy-600">
                    Using Tawaf Counter or iManzil Pro?
                  </p>
                  <p className="text-sm text-navy-600/60 mt-1">Use the form to submit bug reports or feature requests.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-warm-50 rounded-lg flex items-center justify-center text-navy-900 border border-warm-100 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-1">Location</h3>
                  <p className="text-navy-600">
                    Remote First
                  </p>
                  <p className="text-sm text-navy-600/60 mt-1">Based in Malaysia, serving clients globally.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>

        </div>
      </div>
    </div>
  );
};