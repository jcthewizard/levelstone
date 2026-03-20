'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const getLinkClass = (path) => {
    const baseClass = "font-serif text-lg tracking-tight transition-colors duration-400 ";
    return pathname === path
      ? baseClass + "text-black border-b border-black pb-1"
      : baseClass + "text-stone-500 hover:text-black";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf9f5]/80 backdrop-blur-xl border-b border-stone-200/30 flex justify-between items-center px-6 md:px-12 py-6 max-w-full mx-auto">
      <Link href="/" className="font-logo text-2xl text-black tracking-widest uppercase">
        LEVEL STONE
      </Link>
      <div className="hidden md:flex gap-12 items-center">
        <Link className={getLinkClass("/")} href="/">Home</Link>
        <Link className={getLinkClass("/gallery")} href="/gallery">The Gallery</Link>
        <Link className={getLinkClass("/artistry")} href="/artistry">Our Artistry</Link>
        <Link className={getLinkClass("/inquiries")} href="/inquiries">Inquiries</Link>
      </div>
      <Link
        href="/inquiries"
        className="bg-primary text-on-primary px-8 py-3 text-xs tracking-[0.2em] uppercase font-label hover:opacity-90 transition-opacity duration-400 rounded-lg"
      >
        Consultations
      </Link>
    </nav>
  );
}
