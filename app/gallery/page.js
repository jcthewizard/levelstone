import Link from 'next/link';

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Exhibition Header */}
      <header className="px-12 mb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <h1 className="font-serif text-7xl md:text-9xl font-light tracking-tighter text-primary leading-none mb-8">The Gallery</h1>
            <p className="font-body text-on-surface-variant text-lg max-w-xl leading-relaxed">
              A curated selection of architectural milestones. From monolithic slabs to intricate inlays, explore the dialogue between raw earth and human precision.
            </p>
          </div>
          <div className="md:col-span-4 flex items-end justify-end">
            <div className="flex flex-col items-end gap-2">
              <span className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant">Volume IV</span>
              <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary">2024 Collection</span>
            </div>
          </div>
        </div>
      </header>

      {/* Digital Exhibition Grid */}
      <section className="px-12 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24">
          {/* Project 01 */}
          <div className="md:col-span-12 group cursor-crosshair">
            <div className="aspect-[21/9] overflow-hidden bg-surface-container mb-8 relative rounded-lg">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Modern architectural home with expansive grey stone flooring"
                src="/images/IMG_0257.JPG"
              />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex justify-between items-start">
              <div>
                <span className="font-label text-xs tracking-[0.2em] uppercase text-stone-400 mb-2 block">Project 01</span>
                <h2 className="font-serif text-4xl italic text-primary">The Monolith Atrium</h2>
              </div>
              <p className="font-body text-sm text-on-surface-variant max-w-xs text-right">
                Honed Italian Basalt, seamless transition from interior to terrace.
              </p>
            </div>
          </div>

          {/* Project 02 */}
          <div className="md:col-span-5 md:mt-24 group cursor-crosshair">
            <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-8 rounded-lg">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Close up of stone tile"
                src="/images/IMG_0289.jpeg"
              />
            </div>
            <span className="font-label text-xs tracking-[0.2em] uppercase text-stone-400 mb-2 block">Project 02</span>
            <h2 className="font-serif text-3xl text-primary">Geometric Rift</h2>
            <p className="font-body text-sm text-on-surface-variant mt-4">
              Custom cut Calacatta Borghini with oxidized brass inlay.
            </p>
          </div>

          {/* Project 03 */}
          <div className="md:col-span-7 group cursor-crosshair">
            <div className="aspect-square overflow-hidden bg-surface-container mb-8 rounded-lg">
              <img
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                alt="Bathroom floors"
                src="/images/IMG_0997.jpeg"
              />
            </div>
            <div className="pl-12">
              <span className="font-label text-xs tracking-[0.2em] uppercase text-stone-400 mb-2 block">Project 03</span>
              <h2 className="font-serif text-3xl text-primary">Ethereal Light Bath</h2>
              <p className="font-body text-sm text-on-surface-variant mt-4 max-w-sm">
                Statuary Marble, hand-selected for vein continuity across vertical planes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-48 bg-surface-container-low py-32 px-12 overflow-hidden mx-6 md:mx-12 rounded-lg">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary mb-12 block">Curate Your Space</span>
          <h2 className="font-serif text-6xl md:text-8xl text-primary mb-12 leading-tight">Begin your <br /><span className="italic">material journey.</span></h2>
          <Link href="/inquiries" className="bg-primary text-on-primary px-16 py-6 font-serif italic text-xl hover:bg-stone-800 transition-colors duration-400 rounded-lg inline-block">
            Inquire About Commissions
          </Link>
        </div>
      </section>
    </div>
  );
}
