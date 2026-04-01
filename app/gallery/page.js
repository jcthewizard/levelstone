'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const categories = [
  {
    id: 'marble',
    title: 'Marble',
    subtitle: 'Natural Stone Finishes',
    materials: [
      {
        name: 'Grey Marble',
        image: '/levelstone/images/Polished concrete tile with swirling veins.png',
        gallery: [
          '/levelstone/images/gallery/grey-marble-1.jpeg',
          '/levelstone/images/gallery/grey-marble-2.jpeg',
          '/levelstone/images/gallery/grey-marble-3.jpeg',
        ],
      },
      {
        name: 'Black Marble',
        image: '/levelstone/images/Polished black marble with striking veins.png',
        gallery: [
          '/levelstone/images/gallery/black-marble-1.jpeg',
          '/levelstone/images/gallery/black-marble-2.jpeg',
          '/levelstone/images/gallery/black-marble-3.jpeg',
        ],
      },
      {
        name: 'Grey Ghost',
        image: '/levelstone/images/grey-ghost.png',
        gallery: [
          '/levelstone/images/gallery/grey-ghost-1.jpeg',
        ],
      },
    ],
  },
  {
    id: 'traditional',
    title: 'Traditional',
    subtitle: 'Classic Concrete Tones',
    materials: [
      {
        name: 'Traditional Dark',
        image: '/levelstone/images/Polished concrete tile with swirling veins (1).png',
        gallery: [
          '/levelstone/images/gallery/traditional-dark-matte-1.jpeg',
          '/levelstone/images/gallery/traditional-dark-matte-2.jpg',
          '/levelstone/images/gallery/traditional-dark-satin-1.jpeg',
        ],
      },
      {
        name: 'Traditional Medium',
        image: '/levelstone/images/Polished concrete tile with organic veining.png',
        gallery: [
          '/levelstone/images/gallery/traditional-medium-1.jpg',
          '/levelstone/images/gallery/traditional-medium-2.jpeg',
          '/levelstone/images/gallery/traditional-medium-3.jpeg',
          '/levelstone/images/gallery/traditional-medium-gloss-1.jpg',
        ],
      },
      {
        name: 'Traditional Lite',
        image: '/levelstone/images/traditional-lite.png',
        gallery: [
          '/levelstone/images/gallery/traditional-lite-matte-1.jpeg',
          '/levelstone/images/gallery/traditional-lite-matte-2.jpeg',
          '/levelstone/images/gallery/traditional-lite-satin-1.jpg',
          '/levelstone/images/gallery/traditional-lite-satin-2.jpg',
          '/levelstone/images/gallery/traditional-lite-satin-3.jpg',
          '/levelstone/images/gallery/traditional-lite-gloss-1.jpg',
        ],
      },
    ],
  },
  {
    id: 'specialty',
    title: 'Specialty Finishes',
    subtitle: 'Signature Collections',
    materials: [
      {
        name: 'Smoke',
        variants: ['Matte', 'Gloss'],
        image: '/levelstone/images/Elegant gray-veined marble tile close-up.png',
        gallery: [
          '/levelstone/images/gallery/smoke-1.jpeg',
          '/levelstone/images/gallery/smoke-2.jpeg',
          '/levelstone/images/gallery/smoke-3.jpeg',
          '/levelstone/images/gallery/smoke-4.jpeg',
          '/levelstone/images/gallery/smoke-gloss-1.jpg',
          '/levelstone/images/gallery/smoke-gloss-2.jpg',
        ],
      },
      {
        name: '50 Shades of Grey',
        image: '/levelstone/images/shades-of-grey.png',
        gallery: [
          '/levelstone/images/gallery/50-shades-1.jpeg',
        ],
      },
      {
        name: 'Storm',
        variants: ['Matte', 'Gloss'],
        image: '/levelstone/images/storm.png',
        gallery: [
          '/levelstone/images/gallery/storm-matte-1.jpg',
          '/levelstone/images/gallery/storm-gloss-1.jpg',
        ],
      },
      {
        name: 'Glacier',
        variants: ['Satin'],
        image: '/levelstone/images/glacier.png',
        gallery: [
          '/levelstone/images/gallery/glacier-satin-1.jpg',
        ],
      },
      {
        name: 'Forest',
        variants: ['Satin'],
        image: '/levelstone/images/forest.png',
        gallery: [
          '/levelstone/images/gallery/forest-satin-1.jpeg',
          '/levelstone/images/gallery/forest-satin-2.jpeg',
        ],
      },
      {
        name: 'Sand Dune',
        variants: ['Satin', 'Gloss', 'Grey'],
        image: '/levelstone/images/sand-dune.png',
        gallery: [
          '/levelstone/images/gallery/sand-dune-satin-1.jpeg',
          '/levelstone/images/gallery/sand-dune-gloss-1.jpg',
          '/levelstone/images/gallery/sand-dune-grey-1.jpeg',
        ],
      },
    ],
  },
];

function GalleryModal({ material, onClose, onImageClick, activeIndex }) {
  const viewing = activeIndex !== null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {!viewing ? (
        /* Thumbnail grid */
        <div
          className="relative z-10 bg-surface rounded-2xl shadow-2xl max-w-4xl w-[calc(100%-3rem)] max-h-[85vh] overflow-y-auto animate-in"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 z-10 bg-surface/95 backdrop-blur-sm px-8 pt-8 pb-4 border-b border-outline-variant/20">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-2xl text-primary italic">{material.name}</h3>
                <p className="font-body text-sm text-on-surface-variant mt-1">
                  {material.gallery.length} project {material.gallery.length === 1 ? 'photo' : 'photos'}
                </p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors"
              >
                <span className="material-symbols-outlined text-on-surface-variant">close</span>
              </button>
            </div>
          </div>
          <div className="p-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {material.gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => onImageClick(i)}
                className="aspect-[4/3] rounded-lg overflow-hidden relative group bg-surface-container"
              >
                <img
                  src={src}
                  alt={`${material.name} example ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Full image view */
        <div className="relative z-10 w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
          >
            <span className="material-symbols-outlined text-white text-2xl">close</span>
          </button>

          {material.gallery.length > 1 && (
            <>
              <button
                onClick={() => onImageClick((activeIndex - 1 + material.gallery.length) % material.gallery.length)}
                className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <span className="material-symbols-outlined text-white text-2xl">chevron_left</span>
              </button>
              <button
                onClick={() => onImageClick((activeIndex + 1) % material.gallery.length)}
                className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors z-10"
              >
                <span className="material-symbols-outlined text-white text-2xl">chevron_right</span>
              </button>
            </>
          )}

          <div className="max-w-5xl max-h-[85vh] px-16">
            <img
              src={material.gallery[activeIndex]}
              alt={`${material.name} example ${activeIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          <button
            onClick={() => onImageClick(null)}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 hover:bg-white/20 text-white/80 font-label text-xs tracking-widest px-5 py-2.5 rounded-full transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-sm">grid_view</span>
            {activeIndex + 1} / {material.gallery.length}
          </button>
        </div>
      )}
    </div>
  );
}

export default function GalleryPage() {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const handleMaterialClick = (material) => {
    if (!material.gallery?.length) return;
    setSelectedMaterial(material);
    setActiveImageIndex(null);
  };

  const closeModal = () => {
    setSelectedMaterial(null);
    setActiveImageIndex(null);
  };

  useEffect(() => {
    if (!selectedMaterial) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        if (activeImageIndex !== null) setActiveImageIndex(null);
        else closeModal();
      }
      if (activeImageIndex !== null && selectedMaterial) {
        const len = selectedMaterial.gallery.length;
        if (e.key === 'ArrowLeft') setActiveImageIndex((activeImageIndex - 1 + len) % len);
        if (e.key === 'ArrowRight') setActiveImageIndex((activeImageIndex + 1) % len);
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [selectedMaterial, activeImageIndex]);

  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <header className="px-6 md:px-12 mb-24 max-w-7xl mx-auto">
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
        <section key={category.id} className="px-6 md:px-12 max-w-[1600px] mx-auto mb-24">
          <div className="mb-12">
            <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary block mb-2">{category.subtitle}</span>
            <h2 className="font-serif text-4xl italic text-primary">{category.title}</h2>
            <div className="h-[1px] w-16 bg-primary/20 mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {category.materials.map((material) => {
              const hasGallery = material.gallery?.length > 0;

              return (
                <div
                  key={material.name}
                  onClick={() => handleMaterialClick(material)}
                  className={`group ${hasGallery ? 'cursor-pointer' : ''}`}
                >
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
                    {hasGallery && (
                      <div className="absolute bottom-3 right-3 bg-black/50 text-white/90 rounded-full px-3 py-1 flex items-center gap-1.5 text-xs font-label backdrop-blur-sm">
                        <span className="material-symbols-outlined text-sm">photo_library</span>
                        {material.gallery.length}
                      </div>
                    )}
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
              );
            })}
          </div>

        </section>
      ))}

      {/* CTA Section */}
      <section className="mt-48 bg-surface-container-low py-32 px-6 md:px-12 overflow-hidden mx-6 md:mx-12 rounded-lg">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary mb-12 block">Curate Your Space</span>
          <h2 className="font-serif text-6xl md:text-8xl text-primary mb-12 leading-tight">Begin your <br /><span className="italic">material journey.</span></h2>
          <Link href="/inquiries" className="bg-primary text-on-primary px-16 py-6 font-serif italic text-xl hover:bg-stone-800 transition-colors duration-400 rounded-lg inline-block">
            Inquire About Commissions
          </Link>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedMaterial && (
        <GalleryModal
          material={selectedMaterial}
          onClose={closeModal}
          onImageClick={setActiveImageIndex}
          activeIndex={activeImageIndex}
        />
      )}
    </div>
  );
}
