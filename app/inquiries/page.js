'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function InquiriesPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-24 flex flex-col md:flex-row items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight text-primary">
            Begin the <br />
            <span className="italic">Dialogue.</span>
          </h1>
        </div>
        <div className="max-w-xs pb-4">
          <p className="text-on-surface-variant font-body text-sm leading-relaxed">
            We invite you to share the vision of your upcoming architectural or interior project. Every masterpiece begins with an inquiry.
          </p>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
        {/* Left Column: Form */}
        <section className="lg:col-span-7">
          {submitted ? (
            <div className="p-12 bg-surface-container-low rounded-lg border-l-4 border-secondary text-center h-full flex flex-col justify-center">
              <span className="material-symbols-outlined text-5xl text-secondary mb-4">check_circle</span>
              <h3 className="font-serif text-3xl mb-2">Inquiry Received</h3>
              <p className="font-body text-on-surface-variant">Our concierge will be in touch shortly to discuss your vision.</p>
            </div>
          ) : (
            <form className="space-y-12" onSubmit={handleSubmit}>
              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">Full Name</label>
                <input required className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:outline-none focus:border-primary px-0 font-serif text-2xl placeholder:text-stone-300 transition-all duration-400" placeholder="Julian Vane" type="text" />
              </div>
              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">Project Type</label>
                <div className="flex flex-wrap gap-4 mt-2">
                  <button className="px-6 py-3 bg-primary text-on-primary font-label text-[10px] uppercase tracking-widest rounded-lg" type="button">Residential</button>
                  <button className="px-6 py-3 bg-surface-container-highest text-on-surface font-label text-[10px] uppercase tracking-widest hover:bg-stone-200 transition-colors rounded-lg" type="button">Commercial</button>
                  <button className="px-6 py-3 bg-surface-container-highest text-on-surface font-label text-[10px] uppercase tracking-widest hover:bg-stone-200 transition-colors rounded-lg" type="button">Custom</button>
                </div>
              </div>
              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">Your Vision</label>
                <textarea required className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:outline-none focus:border-primary px-0 font-serif text-2xl placeholder:text-stone-300 transition-all duration-400" placeholder="Describe the atmosphere and materials..." rows={4}></textarea>
              </div>
              <div className="pt-8">
                <button className="w-full md:w-auto px-16 py-6 bg-primary text-on-primary font-label text-xs uppercase tracking-[0.3em] hover:opacity-90 transition-all duration-400 flex items-center justify-center gap-4 rounded-lg" type="submit">
                  Submit Inquiry
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
              </div>
            </form>
          )}
        </section>

        {/* Right Column: Details & Map */}
        <aside className="lg:col-span-5 space-y-24">
          {/* Contact Blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">The Office</h3>
              <div className="font-body text-sm space-y-1 text-on-surface">
                <p>11245 SE 6th Street</p>
                <p>Suite 280</p>
                <p>Bellevue, WA 98004</p>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-label text-[10px] uppercase tracking-[0.3em] text-secondary">Contact</h3>
              <div className="font-body text-sm space-y-1 text-on-surface">
                <p>Sean Hansen</p>
                <p className="pt-2 underline underline-offset-4 decoration-stone-200">+1 (425) 516-5542</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative group overflow-hidden bg-surface-container aspect-[4/3] rounded-lg">
            <img
              className="w-full h-full object-cover grayscale opacity-60 contrast-125"
              src="/images/IMG_7468.jpg"
              alt="Atelier location"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-primary flex items-center justify-center rounded-full">
                <div className="w-12 h-12 bg-primary/20 animate-ping rounded-full absolute"></div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
