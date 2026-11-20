'use client';

import { useRouter } from 'next/navigation';

interface ProjectSortSelectProps {
  activeSort: 'latest' | 'oldest';
  activeTag: string;
}

export function ProjectSortSelect({ activeSort, activeTag }: ProjectSortSelectProps) {
  const router = useRouter();

  function handleSortChange(value: string) {
    const params = new URLSearchParams();

    if (activeTag !== 'all') params.set('tag', activeTag);
    if (value === 'oldest') params.set('sort', 'oldest');

    const query = params.toString();
    router.push(query ? `/projects?${query}` : '/projects');
  }

  return (
    <label className="project-sort">
      <span>Sort by</span>
      <span className="project-sort-control">
        <select
          aria-label="Sort projects by date"
          value={activeSort}
          onChange={(event) => handleSortChange(event.target.value)}
        >
          <option value="latest">Latest to oldest</option>
          <option value="oldest">Oldest to latest</option>
        </select>
        <span aria-hidden="true" className="project-sort-chevron">⌄</span>
      </span>
    </label>
  );
}
