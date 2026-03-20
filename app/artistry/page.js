import Link from 'next/link';

export default function ArtistryPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Hero Header */}
      <header className="px-6 md:px-12 mb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="text-xs tracking-[0.3em] uppercase text-secondary mb-6 block font-label">The Portfolio</span>
            <h1 className="text-6xl md:text-8xl font-serif font-light leading-tight">Our <span className="italic">Artistry</span></h1>
          </div>
          <div className="md:col-span-4 pb-2">
            <p className="text-on-surface-variant font-body text-lg leading-relaxed border-l border-outline-variant/30 pl-8">
              Beyond the surface. We treat architectural concrete as a canvas, merging industrial strength with the delicate hand of a master craftsman.
            </p>
          </div>
        </div>
      </header>

      {/* Services Exhibition */}
      <section className="space-y-48 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Specialty 01 */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-7 order-2 md:order-1">
            <div className="aspect-[4/5] bg-surface-container-low relative overflow-hidden group rounded-lg">
              <img
                alt="Pristine white high-gloss epoxy flooring"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                src="/images/IMG_1007.jpeg"
              />
              <div className="absolute bottom-0 right-0 p-8 text-white/40 font-serif text-9xl select-none">01</div>
            </div>
          </div>
          <div className="md:col-span-5 order-1 md:order-2 md:pt-24">
            <h2 className="text-4xl font-serif mb-8 italic">Epoxy Coatings</h2>
            <div className="space-y-8">
              <p className="font-body text-on-surface-variant leading-loose text-lg">
                A seamless fusion of durability and crystalline clarity. Our epoxy systems are formulated to create depth, mirroring the aesthetic of natural obsidian or fluid marble.
              </p>
            </div>
          </div>
        </article>

        {/* Specialty 02 */}
        <article className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
          <div className="md:col-span-5 md:pt-24">
            <h2 className="text-4xl font-serif mb-8 italic">Concrete Overlays</h2>
            <div className="space-y-8">
              <p className="font-body text-on-surface-variant leading-loose text-lg">
                Breathing new life into existing foundations. Our micro-topping overlays provide a refined, minimalist finish that captures the raw essence of Brutalist design without the structural burden.
              </p>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="aspect-[4/5] bg-surface-container-low relative overflow-hidden group rounded-lg">
              <img
                alt="Smooth grey hand-troweled concrete wall texture"
                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                src="/images/IMG_1144.jpg"
              />
              <div className="absolute bottom-0 left-0 p-8 text-black/20 font-serif text-9xl select-none">02</div>
            </div>
          </div>
        </article>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-container py-32 text-center text-on-primary-container mt-24 mx-6 md:mx-12 rounded-lg">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-4xl md:text-5xl font-serif mb-12 text-on-primary">Ready to elevate your environment?</h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/inquiries" className="bg-on-primary text-primary px-12 py-4 text-xs tracking-[0.2em] uppercase hover:bg-secondary hover:text-white transition-all duration-400 rounded-lg font-label">
              Begin Your Inquiry
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
