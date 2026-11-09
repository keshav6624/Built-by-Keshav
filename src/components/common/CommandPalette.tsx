'use client';

import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projects } from '@/data/projects';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: string;
  href: string;
}

const baseResults: SearchResult[] = [
  { id: 'home', title: 'Home', description: 'Back to the landing page', type: 'Page', href: '/' },
  { id: 'about', title: 'About', description: 'Who I am and how I build', type: 'Page', href: '/about' },
  { id: 'projects', title: 'All Projects', description: 'Browse the full portfolio', type: 'Page', href: '/projects' },
  { id: 'timeline', title: 'Timeline', description: 'My journey as a builder', type: 'Page', href: '/timeline' },
];

const allResults: SearchResult[] = [
  ...baseResults,
  ...projects.map((p) => ({
    id: `p-${p.id}`,
    title: p.title,
    description: p.shortDescription,
    type: 'Project',
    href: `/projects/${p.id}`,
  })),
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allResults.slice(0, 8);
    return allResults
      .filter((r) => r.title.toLowerCase().includes(q) || r.description.toLowerCase().includes(q))
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const go = (href: string) => {
    setIsOpen(false);
    setQuery('');
    router.push(href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filtered[activeIndex]) go(filtered[activeIndex].href);
    }
  };

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-white/10 bg-surface/70 px-4 py-2.5 text-[13px] text-text-secondary shadow-glow backdrop-blur-xl transition-colors hover:text-text"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open search"
      >
        <Search size={16} />
        <span className="hidden sm:inline">Quick search</span>
        <kbd className="ml-1 hidden rounded-md border border-white/15 px-1 text-[11px] text-text-muted sm:inline">⌘K</kbd>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              className="fixed left-1/2 top-1/2 z-50 w-[min(90vw,40rem)] -translate-x-1/2 -translate-y-1/2"
            >
              <div className="overflow-hidden rounded-card border border-border bg-surface/95 shadow-card backdrop-blur-xl">
                <div className="flex items-center gap-3 border-b border-border px-5 py-4">
                  <Search size={18} className="text-text-secondary" />
                  <input
                    autoFocus
                    value={query}
                    onChange={(e) => {
                      setActiveIndex(0);
                      setQuery(e.target.value);
                    }}
                    onKeyDown={onKeyDown}
                    placeholder="Search projects, pages..."
                    className="flex-1 bg-transparent text-text outline-none placeholder:text-text-muted"
                  />
                  <button onClick={() => setIsOpen(false)} className="text-text-muted hover:text-text" aria-label="Close">
                    <X size={18} />
                  </button>
                </div>
                <div className="max-h-96 overflow-y-auto p-1">
                  {filtered.length === 0 ? (
                    <p className="px-4 py-6 text-center text-small text-text-muted">No results for &quot;{query}&rquot;</p>
                  ) : (
                    filtered.map((result, i) => (
                      <Link
                        key={result.id}
                        href={result.href}
                        onClick={() => go(result.href)}
                        className={`flex items-start gap-3 rounded-input px-4 py-3 transition-colors ${
                          i === activeIndex ? 'bg-white/5' : 'hover:bg-white/5'
                        }`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-text text-small font-medium">{result.title}</p>
                          <p className="text-text-muted text-[13px] mt-1 truncate">{result.description}</p>
                        </div>
                        <span className="pill whitespace-nowrap !px-2 !py-1 !text-[11px]">{result.type}</span>
                      </Link>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
