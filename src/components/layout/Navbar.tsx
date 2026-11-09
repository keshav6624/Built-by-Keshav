'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const indexLinks = [
  { number: '01', label: 'Writing', description: 'Essays, notes, and things I learn the hard way.', href: '#writing-heading' },
  { number: '02', label: 'Projects', description: 'Experiments and builds, with write-ups.', href: '/projects' },
  { number: '03', label: 'Timeline', description: 'Moments and milestones, year by year.', href: '/timeline' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="garden-header">
      <nav
        className="garden-header-inner"
        aria-label="Primary navigation"
      >
        <Link href="/" className="garden-logo">Keshav</Link>
        <button className={`index-button${isOpen ? ' is-open' : ''}`} type="button" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="index-menu" aria-label={isOpen ? 'Close index' : 'Open index'}>
          <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>{isOpen ? '' : ' index'}
        </button>
      </nav>
      {isOpen && (
        <div className="index-menu" id="index-menu">
          <div className="index-menu-inner">
            {indexLinks.map((link) => (
              link.href.startsWith('/') ? (
                <Link className="index-entry" href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
                  <span className="index-number">{link.number}</span>
                  <span><strong>{link.label}</strong><small>{link.description}</small></span>
                </Link>
              ) : (
                <a className="index-entry" href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
                  <span className="index-number">{link.number}</span>
                  <span><strong>{link.label}</strong><small>{link.description}</small></span>
                </a>
              )
            ))}
            <a className="index-entry" href="/about" onClick={() => setIsOpen(false)}>
              <span className="index-number">05</span>
              <span><strong>About</strong><small>A little more about me and how I work.</small></span>
            </a>
            <a className="index-entry" href="/resume.pdf" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
              <span className="index-number">06</span>
              <span><strong>Resume</strong><small>A story, not a traditional resume.</small></span>
            </a>
            <div className="index-columns">
              <div><b>ELSEWHERE</b><a href="https://github.com/keshav6624">GitHub</a><a href="https://www.linkedin.com/in/keshav-kumar06">LinkedIn</a><a href="mailto:keshavkumarrai0604@gmail.com">Email</a></div>
              <div><b>EXPERIMENTS</b><Link href="/talk-to-my-ai" onClick={() => setIsOpen(false)}>Talk to my AI</Link><Link href="/garden-galaxy" onClick={() => setIsOpen(false)}>Garden Galaxy</Link></div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
