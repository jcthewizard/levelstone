import Link from 'next/link';

const testimonials = [
  {
    quote: "Levelstone completely transformed our living space. The seamless flow from room to room is exactly what we envisioned — it feels like walking on polished marble, but with a warmth that's entirely its own.",
    name: 'Sarah & Michael T.',
    project: 'Residential — Bellevue, WA',
  },
  {
    quote: "We had tried multiple flooring solutions for our restaurant before discovering Levelstone. The durability is unmatched, and our guests constantly compliment the floors. It elevated the entire atmosphere of the space.",
    name: 'David R.',
    project: 'Commercial — Seattle, WA',
  },
  {
    quote: "Sean and his team were incredibly professional from start to finish. They walked us through every color and sheen option, and the final result exceeded our expectations. Our Traditional Medium in Satin is stunning.",
    name: 'Jennifer L.',
    project: 'Residential — Kirkland, WA',
  },
  {
    quote: "As a general contractor, I've worked with many flooring subcontractors. Levelstone's prep process is the most thorough I've ever seen. The bond they achieve is remarkable — zero callbacks on any of our projects together.",
    name: 'Mark H.',
    project: 'Contractor Partner',
  },
  {
    quote: "We were worried about our old tile floors and the cost of demo. Levelstone installed right over the existing tile and saved us thousands. The Smoke finish in our entryway is a showstopper.",
    name: 'Amanda & Chris K.',
    project: 'Residential — Redmond, WA',
  },
  {
    quote: "The radiant heat option was a game-changer for us. Warm floors throughout the Pacific Northwest winter, with the most beautiful surface we've ever had in our home. Worth every penny.",
    name: 'Robert P.',
    project: 'Residential — Mercer Island, WA',
  },
];

export default function TestimonialsPage() {
  return (
    <div className="pt-32 pb-24">
      {/* Page Header */}
      <header className="px-6 md:px-12 mb-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <h1 className="font-serif text-7xl md:text-9xl font-light tracking-tighter text-primary leading-none mb-8">Testimonials</h1>
            <p className="font-body text-on-surface-variant text-lg max-w-xl leading-relaxed">
              Hear from homeowners, businesses, and builders who have experienced the Levelstone difference firsthand.
            </p>
          </div>
          <div className="md:col-span-4 flex items-end justify-end">
            <div className="flex flex-col items-end gap-2">
              <span className="font-label text-xs tracking-[0.3em] uppercase text-on-surface-variant">In Their Words</span>
              <span className="font-label text-xs tracking-[0.3em] uppercase text-secondary">Client Stories</span>
            </div>
          </div>
        </div>
      </header>

      {/* Testimonials Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-surface-container-low rounded-lg p-10 md:p-12 flex flex-col justify-between">
              <div>
                <span className="font-serif text-6xl text-secondary/30 leading-none select-none">&ldquo;</span>
                <p className="font-body text-on-surface leading-relaxed text-lg -mt-4 mb-8">
                  {t.quote}
                </p>
              </div>
              <div className="border-t border-outline-variant/20 pt-6">
                <p className="font-serif text-lg text-primary italic">{t.name}</p>
                <p className="font-label text-xs tracking-[0.2em] uppercase text-on-surface-variant mt-1">{t.project}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-48 bg-surface-container-low py-32 px-6 md:px-12 overflow-hidden mx-6 md:mx-12 rounded-lg">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="font-label text-xs tracking-[0.4em] uppercase text-secondary mb-12 block">Your Story Starts Here</span>
          <h2 className="font-serif text-6xl md:text-8xl text-primary mb-12 leading-tight">Ready to join <br /><span className="italic">the conversation?</span></h2>
          <Link href="/inquiries" className="bg-primary text-on-primary px-16 py-6 font-serif italic text-xl hover:bg-stone-800 transition-colors duration-400 rounded-lg inline-block">
            Begin Your Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
