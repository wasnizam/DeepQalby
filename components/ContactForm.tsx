import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'support',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'support', message: '' });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="bg-white p-8 rounded-2xl border border-warm-100 shadow-sm text-center h-full flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-emerald-muted/10 text-emerald-muted rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-semibold text-navy-900 mb-2">Message Sent!</h3>
        <p className="text-navy-600 mb-8 max-w-xs mx-auto">
          JazakAllah Khair for reaching out. We've received your message and will get back to you shortly.
        </p>
        <button 
          onClick={() => setStatus('idle')}
          className="text-navy-900 font-medium hover:text-navy-700 underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl border border-warm-100 shadow-sm">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-navy-900">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-warm-50 border border-warm-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all text-navy-900 placeholder:text-navy-600/40"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-navy-900">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-warm-50 border border-warm-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all text-navy-900 placeholder:text-navy-600/40"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-navy-900">Topic</label>
          <div className="relative">
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-warm-50 border border-warm-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all text-navy-900 appearance-none"
            >
              <option value="support">Product Support</option>
              <option value="feedback">Feedback & Suggestions</option>
              <option value="inquiry">Project Inquiry</option>
              <option value="other">Other</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-navy-600">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-navy-900">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-warm-50 border border-warm-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900/20 focus:border-navy-900 transition-all text-navy-900 placeholder:text-navy-600/40 resize-none"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-3.5 bg-navy-900 text-white rounded-lg font-medium hover:bg-navy-800 transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={18} />
            </>
          )}
        </button>
      </div>
    </form>
  );
};