import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-8rem)] flex items-center justify-center overflow-hidden mb-24 rounded-lg mx-6 md:mx-12">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury polished concrete flooring"
            className="w-full h-full object-cover"
            src="/levelstone/images/image.png"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="font-body text-lg md:text-xl text-white/90 tracking-wide font-light max-w-2xl mx-auto">
            Transforming raw architectural elements into seamless, high-performance masterpieces for the discerning eye.
          </p>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce">
          <span className="material-symbols-outlined text-3xl">expand_more</span>
        </div>
      </section>

      {/* The Philosophy Section */}
      <section className="bg-surface py-32 px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-24 items-start">
          <div className="md:col-span-5">
            <span className="font-label text-xs uppercase tracking-[0.4em] text-secondary mb-6 block">The Philosophy</span>
            <h2 className="font-serif text-5xl md:text-6xl font-normal leading-tight mb-12">
              Beyond the <br />Surface.
            </h2>
          </div>
          <div className="md:col-span-7 flex flex-col gap-8">
            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              At Level Stone, we view every floor as a silent canvas. Our artistry lies in the intersection of chemistry and craftsmanship—curating textures that invite touch and finishes that capture light.
            </p>
            <p className="font-body text-lg text-on-surface-variant/80 leading-relaxed">
              Our process is obsessive. We don&apos;t just pour surfaces; we engineer environments. From the initial aggregate selection to the final diamond-honed polish, every gesture is deliberate, ensuring your space feels grounded yet ethereal.
            </p>
            <div className="mt-8">
              <Link href="/artistry" className="inline-flex items-center gap-4 group text-primary">
                <span className="font-label text-sm uppercase tracking-widest border-b border-black pb-1">Discover Our Artistry</span>
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform duration-400">east</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works (Gallery) */}
      <section className="bg-surface-container-low py-32 overflow-hidden rounded-lg mx-6 md:mx-12 mb-24">
        <div className="px-12 lg:px-24 mb-16">
          <h2 className="font-serif text-4xl italic mb-4">Selected Works</h2>
          <div className="h-[1px] w-24 bg-primary/20"></div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 px-12 lg:px-24">
          {/* Large Gallery Card */}
          <div className="flex-1 group">
            <div className="aspect-[4/5] relative bg-surface-container-highest rounded-lg overflow-hidden">
              <img
                alt="Modern Living Room with Polished Floor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/levelstone/images/IMG_1001.jpeg"
              />
              <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/60 to-transparent w-full text-white">
                <p className="font-label text-xs uppercase tracking-widest opacity-80 mb-2">Residential</p>
                <h3 className="font-serif text-2xl italic">The Obsidian Atrium</h3>
              </div>
            </div>
          </div>
          {/* Secondary Gallery Column */}
          <div className="flex-1 flex flex-col gap-8 md:mt-24">
            <div className="aspect-[16/9] relative overflow-hidden bg-surface-container-highest group rounded-lg">
              <img
                alt="Architectural Concrete"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/levelstone/images/IMG_1146.jpg"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full text-white">
                <p className="font-label text-xs uppercase tracking-widest opacity-80 mb-1">Commercial</p>
                <h3 className="font-serif text-xl italic">The Solstice Gallery</h3>
              </div>
            </div>
            <div className="aspect-[4/3] relative overflow-hidden bg-surface-container-highest group rounded-lg">
              <img
                alt="Executive Office Floor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="/levelstone/images/IMG_0198.jpeg"
              />
              <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/60 to-transparent w-full text-white">
                <p className="font-label text-xs uppercase tracking-widest opacity-80 mb-1">Office</p>
                <h3 className="font-serif text-xl italic">Prism Corporate Suite</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="material-symbols-outlined text-secondary text-5xl mb-8">architecture</span>
          <h2 className="font-serif text-5xl md:text-7xl font-light mb-12">Begin Your Journey.</h2>
          <p className="font-body text-xl text-on-surface-variant mb-16 max-w-xl mx-auto leading-relaxed">
            Collaborate with our master artisans to define the foundation of your vision. Private consultations available globally.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/inquiries" className="bg-primary text-on-primary px-12 py-5 font-label text-sm uppercase tracking-[0.2em] hover:opacity-80 transition-opacity rounded-lg">
              Request Consultation
            </Link>
            <Link href="/gallery" className="border border-outline-variant/30 text-on-surface px-12 py-5 font-label text-sm uppercase tracking-[0.2em] hover:bg-surface-container transition-colors rounded-lg">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
