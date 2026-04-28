import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-16 bg-[#faf9f5] flex flex-col items-center justify-center gap-8 px-8 border-t border-stone-200/30 mt-auto">
      <Link href="/" className="font-logo text-3xl text-black mb-4 tracking-widest uppercase">LEVELSTONE</Link>
      <div className="flex gap-8 md:gap-16 flex-wrap justify-center">
        <Link className="text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-black transition-colors duration-400" href="/gallery">The Gallery</Link>
        <Link className="text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-black transition-colors duration-400" href="/artistry">Our Artistry</Link>
        <Link className="text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-black transition-colors duration-400" href="/testimonials">Testimonials</Link>
        <Link className="text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-black transition-colors duration-400" href="/inquiries">Inquiries</Link>
        <a className="text-xs tracking-[0.2em] uppercase text-stone-400 hover:text-black transition-colors duration-400" href="/inquiries#faq">FAQ</a>
      </div>
      <div className="text-[0.6rem] tracking-[0.3em] uppercase text-stone-400 mt-8 text-center">
        &copy; LEVEL STONE USA. CRAFTED FOR THE DISCERNING.
      </div>
      <div className="text-[0.55rem] tracking-[0.2em] uppercase text-stone-300 text-center">
        Patent-Pending Technology &middot; Premier Overlay LLC
      </div>
    </footer>
  );
}
