import Link from 'next/link';

const categories = [
  {
    id: 'marble',
    title: 'Marble',
    subtitle: 'Natural Stone Finishes',
    materials: [
      { name: 'Grey Marble', image: '/levelstone/images/Polished concrete tile with swirling veins.png' },
      { name: 'Black Marble', image: '/levelstone/images/Polished black marble with striking veins.png' },
      { name: 'Grey Ghost', image: '/levelstone/images/grey-ghost.png' },
    ],
  },
  {
    id: 'traditional',
    title: 'Traditional',
    subtitle: 'Classic Concrete Tones',
    materials: [
      { name: 'Traditional Dark', image: '/levelstone/images/Polished concrete tile with swirling veins (1).png' },
      { name: 'Traditional Medium', image: '/levelstone/images/Polished concrete tile with organic veining.png' },
      { name: 'Traditional Lite', image: '/levelstone/images/traditional-lite.png' },
    ],
  },
  {
    id: 'specialty',
    title: 'Specialty Finishes',
    subtitle: 'Signature Collections',
    materials: [
      { name: 'Smoke', variants: ['Matte', 'Gloss'], image: '/levelstone/images/Elegant gray-veined marble tile close-up.png' },
      { name: '50 Shades of Grey', image: '/levelstone/images/shades-of-grey.png' },
      { name: 'Storm', variants: ['Matte', 'Gloss'], image: '/levelstone/images/storm.png' },
      { name: 'Glacier', variants: ['Satin'], image: '/levelstone/images/glacier.png' },
      { name: 'Forest', variants: ['Satin'], image: '/levelstone/images/forest.png' },
      { name: 'Sand Dune', variants: ['Satin', 'Gloss', 'Grey'], image: '/levelstone/images/sand-dune.png' },
    ],
  },
];

export default function GalleryPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <header className="px-12 mb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <h1 className="font-serif text-7xl md:text-9xl font-light tracking-tighter text-primary leading-none mb-8">Materials</h1>
            <p className="font-body text-on-surface-variant text-lg max-w-xl leading-relaxed">
              Every surface tells a story. Explore our curated palette of marbles, concrete tones, and specialty finishes — each selected for depth, character, and enduring beauty.
            </p>
          </div>
          <div className="md:col-span-4 flex items-end justify-end">
            <div className="flex flex-col items-end gap-2">
              <span className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant">Curated Selection</span>
              <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary">Our Palette</span>
            </div>
          </div>
        </div>
      </header>

      {/* Material Categories */}
      {categories.map((category) => (
        <section key={category.id} className="px-12 max-w-[1600px] mx-auto mb-24">
          <div className="mb-12">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary block mb-2">{category.subtitle}</span>
            <h2 className="font-serif text-4xl italic text-primary">{category.title}</h2>
            <div className="h-[1px] w-16 bg-primary/20 mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {category.materials.map((material) => (
              <div key={material.name} className="group cursor-pointer">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 relative bg-surface-container">
                  {material.image ? (
                    <img
                      src={material.image}
                      alt={material.name}
                      className="w-full h-full object-cover scale-110 transition-transform duration-700 group-hover:scale-[1.15]"
                    />
                  ) : (
                    <div
                      className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundColor: material.color }}
                    />
                  )}
                  <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/5" />
                </div>
                <h3 className="font-serif text-xl text-primary mb-1">{material.name}</h3>
                {material.variants && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {material.variants.map((v) => (
                      <span
                        key={v}
                        className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant bg-surface-container px-3 py-1 rounded-lg"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

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
