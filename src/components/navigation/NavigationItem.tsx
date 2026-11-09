'use client';

import { useCallback } from 'react';
import type { Section } from './types';

interface NavigationItemProps {
  section: Section;
  isActive: boolean;
  onSelect: (id: string) => void;
}

const HEADER_OFFSET = 80;

export function NavigationItem({ section, isActive, onSelect }: NavigationItemProps) {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      const el = document.getElementById(section.id);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      window.history.replaceState(null, '', `#${section.id}`);
      onSelect(section.id);
      el?.focus({ preventScroll: true });
    },
    [section.id, onSelect],
  );

  return (
    <a
      href={`#${section.id}`}
      onClick={handleClick}
      aria-current={isActive ? 'true' : undefined}
      className={`
        group relative flex items-center justify-end gap-3 py-1 transition-all duration-200
        ${isActive ? 'text-accent' : 'text-text-muted hover:text-text-secondary'}
      `}
    >
      <span
        className={`
          whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] transition-all duration-200
          ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-80'}
        `}
      >
        {section.title}
      </span>
      <span
        className={`
          h-px transition-all duration-300 ease-soft
          ${isActive ? 'w-8 bg-accent' : 'w-4 bg-white/20 group-hover:w-6 group-hover:bg-white/40'}
        `}
      />
    </a>
  );
}