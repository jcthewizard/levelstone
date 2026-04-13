'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = (path) => {
    const baseClass = "font-serif text-lg tracking-tight transition-colors duration-400 ";
    return pathname === path
      ? baseClass + "text-black border-b border-black pb-1"
      : baseClass + "text-stone-500 hover:text-black";
  };

  const getMobileLinkClass = (path) => {
    return pathname === path
      ? "font-serif text-3xl text-black"
      : "font-serif text-3xl text-stone-400 hover:text-black transition-colors";
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#faf9f5]/80 backdrop-blur-xl border-b border-stone-200/30 flex justify-between items-center px-6 md:px-12 py-6 max-w-full mx-auto">
        <Link href="/" className="font-logo text-2xl text-black tracking-widest uppercase">
          LEVELSTONE
        </Link>
        <div className="hidden md:flex gap-12 items-center">
          <Link className={getLinkClass("/")} href="/">Home</Link>
          <Link className={getLinkClass("/gallery")} href="/gallery">The Gallery</Link>
          <Link className={getLinkClass("/artistry")} href="/artistry">Our Artistry</Link>
          <Link className={getLinkClass("/testimonials")} href="/testimonials">Testimonials</Link>
          <Link className={getLinkClass("/inquiries")} href="/inquiries">Inquiries</Link>
        </div>
        <Link
          href="/inquiries"
          className="bg-primary text-on-primary px-8 py-3 text-xs tracking-[0.2em] uppercase font-label hover:opacity-90 transition-opacity duration-400 rounded-lg hidden md:block"
        >
          Consultations
        </Link>
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl text-black">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#faf9f5] flex flex-col items-center justify-center gap-8 transition-all duration-400 md:hidden ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <Link className={getMobileLinkClass("/")} href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link className={getMobileLinkClass("/gallery")} href="/gallery" onClick={() => setMenuOpen(false)}>The Gallery</Link>
        <Link className={getMobileLinkClass("/artistry")} href="/artistry" onClick={() => setMenuOpen(false)}>Our Artistry</Link>
        <Link className={getMobileLinkClass("/testimonials")} href="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
        <Link className={getMobileLinkClass("/inquiries")} href="/inquiries" onClick={() => setMenuOpen(false)}>Inquiries</Link>
        <Link
          href="/inquiries"
          className="bg-primary text-on-primary px-10 py-4 text-xs tracking-[0.2em] uppercase font-label rounded-lg mt-4"
          onClick={() => setMenuOpen(false)}
        >
          Consultations
        </Link>
      </div>
    </>
  );
}
