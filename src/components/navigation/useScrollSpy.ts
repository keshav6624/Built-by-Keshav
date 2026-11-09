'use client';

import { useEffect, useRef, useState } from 'react';
import type { ScrollSpyOptions } from './types';

const DEFAULT_ROOT_MARGIN = '-80px 0px -55% 0px';

export function useScrollSpy(sectionIds: string[], options: ScrollSpyOptions = {}) {
  const { rootMargin = DEFAULT_ROOT_MARGIN, threshold = [0, 0.25, 0.5, 0.75, 1] } = options;
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? '');
  const idsKey = sectionIds.join(',');
  const hashSyncRef = useRef(false);

  useEffect(() => {
    if (hashSyncRef.current) return;
    hashSyncRef.current = true;
    const hash = window.location.hash.replace('#', '');
    if (hash && sectionIds.includes(hash)) {
      requestAnimationFrame(() => setActiveId(hash));
    }
  }, [sectionIds]);

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const entriesMap = new Map<string, number>();
    let ticking = false;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entriesMap.set(entry.target.id, entry.intersectionRatio);
        }
        if (!ticking) {
          ticking = true;
          requestAnimationFrame(() => {
            let maxId = '';
            let maxRatio = 0;
            for (const [id, ratio] of entriesMap) {
              if (ratio > maxRatio) {
                maxRatio = ratio;
                maxId = id;
              }
            }
            if (maxId) setActiveId(maxId);
            ticking = false;
          });
        }
      },
      { rootMargin, threshold },
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [idsKey, rootMargin, threshold, sectionIds]);

  return activeId;
}