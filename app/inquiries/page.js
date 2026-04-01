'use client';

import { useState } from 'react';

export default function InquiriesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [projectType, setProjectType] = useState('Residential');
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="pt-32 pb-24 px-8 md:px-24 max-w-7xl mx-auto">
      {/* Hero Section */}
      <header className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
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
                  {['Residential', 'Commercial', 'Custom'].map((type) => (
                    <button
                      key={type}
                      className={`px-6 py-3 font-label text-[10px] uppercase tracking-widest rounded-lg transition-colors ${projectType === type ? 'bg-primary text-on-primary' : 'bg-surface-container-highest text-on-surface hover:bg-stone-200'}`}
                      type="button"
                      onClick={() => setProjectType(type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">Your Vision</label>
                <textarea required className="w-full bg-transparent border-0 border-b border-outline-variant/30 py-4 focus:ring-0 focus:outline-none focus:border-primary px-0 font-serif text-2xl placeholder:text-stone-300 transition-all duration-400" placeholder="Describe the atmosphere and materials..." rows={4}></textarea>
              </div>
              <div className="group">
                <label className="block font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-4">Photos <span className="text-stone-400">(Optional)</span></label>
                <label className="flex items-center gap-3 cursor-pointer w-fit px-6 py-3 bg-surface-container-highest text-on-surface font-label text-[10px] uppercase tracking-widest rounded-lg hover:bg-stone-200 transition-colors">
                  <span className="material-symbols-outlined text-sm">add_photo_alternate</span>
                  <span>Upload Images</span>
                  <input type="file" accept="image/*" multiple className="hidden" onChange={handleFileChange} />
                </label>
                {files.length > 0 && (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {files.map((file, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-lg">
                        <span className="font-body text-xs text-on-surface-variant truncate max-w-[150px]">{file.name}</span>
                        <button type="button" onClick={() => removeFile(i)} className="text-stone-400 hover:text-black transition-colors">
                          <span className="material-symbols-outlined text-sm">close</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
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

          {/* Location Card */}
          <a
            href="https://www.google.com/maps/search/11245+SE+6th+St+Suite+280+Bellevue+WA+98004"
            target="_blank"
            rel="noopener noreferrer"
            className="block aspect-[4/3] rounded-lg relative overflow-hidden group"
          >
            <img
              src="/levelstone/image.png"
              alt="Map of Bellevue, WA office location"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-label text-[10px] uppercase tracking-[0.3em] text-white/60 mb-1">Visit Us</p>
                  <p className="font-serif text-lg italic text-white">Bellevue, WA</p>
                </div>
                <span className="material-symbols-outlined text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all duration-400">arrow_forward</span>
              </div>
            </div>
          </a>
        </aside>
      </div>

      {/* FAQ Section */}
      <section id="faq" className="mt-48 max-w-3xl mx-auto">
        <div className="mb-16">
          <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary block mb-2">Common Questions</span>
          <h2 className="font-serif text-4xl italic text-primary">FAQ</h2>
          <div className="h-[1px] w-16 bg-primary/20 mt-4"></div>
        </div>

        <div className="space-y-12">
          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">How many days does it take to install Levelstone?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Our process is 3 days start to finish. Some circumstances depending on temperature and size and floor conditions we can even do a 2 day overlay. If the substrate needs pre-leveling or is in need of extra prep work to remove glue etc, these can be looked at case by case to determine extra prep timeline.
            </p>
          </div>

          <div className="border-b border-outline-variant/20 pb-12">
            <h3 className="font-serif text-xl text-primary mb-4">Does the Levelstone overlay have perfect flawless mottling?</h3>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Levelstone is a natural, organic look and flow.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
