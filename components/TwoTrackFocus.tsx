import React from 'react';

export const TwoTrackFocus: React.FC = () => {
  return (
    <section id="expertise" className="py-24 px-6 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 relative">
          
          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -ml-px"></div>

          {/* Track 1 */}
          <div className="flex flex-col justify-center">
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium w-fit mb-6">
              Track 01
            </span>
            <h3 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">FaithTech Products</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We understand the nuances of building for faith-based communities. Privacy, respect, and accuracy are not optional features—they are the foundation. We build tools that honor the user's intention.
            </p>
          </div>

          {/* Track 2 */}
          <div className="flex flex-col justify-center">
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium w-fit mb-6">
              Track 02
            </span>
            <h3 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">General Digital Products</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our engineering standards are universal. Whether it's a fintech dashboard, an educational platform, or a lifestyle app, we apply the same rigor, clean code, and user-centric design principles.
            </p>
          </div>

        </div>
        
        <div className="mt-16 text-center">
          <p className="text-slate-500 font-medium text-sm">Same engineering quality. Same product discipline.</p>
        </div>
      </div>
    </section>
  );
};