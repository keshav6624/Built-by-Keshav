import Link from 'next/link';
import { projects } from '@/data/projects';
import { buildPaginationHref, paginate } from '@/lib/page-helpers';

export const metadata = {
  title: 'Projects — Keshav',
  description: 'Experiments, builds, and technical notes from Keshav.',
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string; page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const activeTag = resolvedSearchParams.tag?.toLowerCase() ?? 'all';
  const requestedPage = Number.parseInt(resolvedSearchParams.page ?? '1', 10);
  const tags = Array.from(new Set(projects.flatMap((project) => project.tags.map((tag) => tag.toLowerCase())))).slice(0, 10);
  const filteredProjects = activeTag === 'all'
    ? projects
    : projects.filter((project) => project.tags.some((tag) => tag.toLowerCase() === activeTag));
  const { items, currentPage, totalPages, hasNextPage, hasPrevPage } = paginate(filteredProjects, requestedPage, 6);

  return (
    <main className="project-archive">
      <header className="project-archive-header">
        <h1>Projects <span>({projects.length})</span></h1>
        <p>Logs of experiments and builds - Written by using AI heavily.</p>
      </header>

      <nav className="project-filters" aria-label="Filter projects">
        <Link className={activeTag === 'all' ? 'is-active' : ''} href="/projects">all</Link>
        {tags.map((tag) => (
          <Link className={activeTag === tag ? 'is-active' : ''} href={{ pathname: '/projects', query: { tag } }} key={tag}>
            {tag}
          </Link>
        ))}
      </nav>

      <div className="project-archive-list">
        {items.map((project) => (
          <Link className="archive-project-card" href={`/projects/${project.id}`} key={project.id}>
            <div className="archive-project-art" aria-hidden="true">
              <span>{project.title.split(' ').slice(0, 2).map((word) => word[0]).join('')}</span>
            </div>
            <div className="archive-project-copy">
              <p className="archive-project-date">{project.date}</p>
              <h2>{project.title}</h2>
              <p className="archive-project-description">{project.shortDescription}</p>
              <ul className="archive-project-tags" aria-label="Technologies">
                {project.stack.slice(0, 3).map((technology) => <li key={technology}>{technology}</li>)}
              </ul>
            </div>
          </Link>
        ))}
      </div>

      {items.length === 0 && <p className="archive-empty">No projects found for this segment.</p>}

      {totalPages > 1 && (
        <nav className="archive-pagination" aria-label="Project pagination">
          {hasPrevPage ? <Link href={buildPaginationHref('/projects', currentPage - 1, activeTag === 'all' ? {} : { tag: activeTag })}>← Previous</Link> : <span />}
          <span>{currentPage} / {totalPages}</span>
          {hasNextPage ? <Link href={buildPaginationHref('/projects', currentPage + 1, activeTag === 'all' ? {} : { tag: activeTag })}>Next →</Link> : <span />}
        </nav>
      )}
    </main>
  );
}
