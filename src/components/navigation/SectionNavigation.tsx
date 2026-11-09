'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useScrollSpy } from './useScrollSpy';
import { NavigationItem } from './NavigationItem';
import type { Section } from './types';

interface SectionNavigationProps {
  sections: Section[];
}

export function SectionNavigation({ sections }: SectionNavigationProps) {
  const sectionIds = useMemo(() => sections.map((s) => s.id), [sections]);
  const activeId = useScrollSpy(sectionIds);
  const [visible, setVisible] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  const handleSelect = useCallback(() => {}, []);

  const mobileScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mobileScrollRef.current || !activeId) return;
    const activeEl = mobileScrollRef.current.querySelector(`[data-section-id="${activeId}"]`) as HTMLElement | null;
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [activeId]);

  if (sections.length === 0) return null;

  return (
    <>
      {/* Sentinel for visibility detection */}
      <div ref={sentinelRef} className="pointer-events-none h-px w-px" />

      {/* Desktop: fixed right-side rail */}
      <nav
        ref={navRef}
        aria-label="Section navigation"
        className={`fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden flex-col items-end gap-0.5 lg:flex transition-opacity duration-500 ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <AnimatePresence>
          {visible &&
            sections.map((section, i) => (
              <motion.div
                key={section.id}
                initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: 14 }}
                transition={{ duration: 0.25, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <NavigationItem
                  section={section}
                  isActive={activeId === section.id}
                  onSelect={handleSelect}
                />
              </motion.div>
            ))}
        </AnimatePresence>
      </nav>

      {/* Mobile: fixed horizontal scrollable tabs */}
      <div
        className={`fixed top-20 left-0 right-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl transition-opacity duration-500 lg:hidden ${
          visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav aria-label="Section navigation">
          <div ref={mobileScrollRef} className="flex gap-2 overflow-x-auto px-6 py-3 scrollbar-none">
            {sections.map((section) => {
              const isActive = activeId === section.id;
              return (
                <a
                  key={section.id}
                  data-section-id={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById(section.id);
                    if (el) {
                      const top = el.getBoundingClientRect().top + window.scrollY - 80;
                      window.scrollTo({ top, behavior: 'smooth' });
                    }
                    window.history.replaceState(null, '', `#${section.id}`);
                  }}
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'border-accent/40 bg-accent/10 text-accent'
                      : 'border-border bg-transparent text-text-muted hover:text-text-secondary hover:border-strong'
                  }`}
                >
                  {section.title}
                </a>
              );
            })}
          </div>
        </nav>
      </div>
    </>
  );
}