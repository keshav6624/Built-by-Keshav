'use client';

import Link from 'next/link';
import { profileLinks } from '@/data/site';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer
      className={`garden-footer${pathname === '/' ? ' garden-footer-home' : ''}`}
      style={{ width: 'min(calc(100% - 40px), 754px)' }}
    >
      <div>
        <p className="garden-logo">Keshav&apos;s Garden</p>
        <p className="footer-note">An evolving archive of everything I build, learn, and discover.</p>
      </div>
      <nav aria-label="Site">
        <Link href="/projects">Projects</Link>
        <Link href="/timeline">Timeline</Link>
        <Link href="/about">About</Link>
        <a href={profileLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
    </footer>
  );
}
