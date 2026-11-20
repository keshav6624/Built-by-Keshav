import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import { buildPaginationHref, paginate } from '@/lib/page-helpers';
import { ProjectSortSelect } from '@/components/projects/ProjectSortSelect';

export const metadata = {
  title: 'Projects — Keshav',
  description: 'Experiments, builds, and technical notes from Keshav.',
};

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ tag?: string; page?: string; sort?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const activeTag = resolvedSearchParams.tag?.toLowerCase() ?? 'all';
  const activeSort = resolvedSearchParams.sort === 'oldest' ? 'oldest' : 'latest';
  const requestedPage = Number.parseInt(resolvedSearchParams.page ?? '1', 10);
  const tags = Array.from(new Set(projects.flatMap((project) => project.tags.map((tag) => tag.toLowerCase())))).slice(0, 10);
  const filteredProjects = activeTag === 'all'
    ? projects
    : projects.filter((project) => project.tags.some((tag) => tag.toLowerCase() === activeTag));
  const sortedProjects = [...filteredProjects].sort((first, second) => {
    const firstDate = Date.parse(`1 ${first.date}`);
    const secondDate = Date.parse(`1 ${second.date}`);
    return activeSort === 'latest' ? secondDate - firstDate : firstDate - secondDate;
  });
  const preservedQuery = {
    ...(activeTag === 'all' ? {} : { tag: activeTag }),
    ...(activeSort === 'latest' ? {} : { sort: activeSort }),
  };
  const { items, currentPage, totalPages, hasNextPage, hasPrevPage } = paginate(sortedProjects, requestedPage, 6);

  return (
    <main className="project-archive">
      <header className="project-archive-header">
        <h1>Projects <span>({projects.length})</span></h1>
        <p>Projects, experiments, and the notes I kept while building them.</p>
      </header>

      <nav className="project-filters" aria-label="Filter projects">
        <Link className={activeTag === 'all' ? 'is-active' : ''} href={{ pathname: '/projects', query: activeSort === 'latest' ? {} : { sort: activeSort } }}>all</Link>
        {tags.map((tag) => (
          <Link className={activeTag === tag ? 'is-active' : ''} href={{ pathname: '/projects', query: { tag, ...(activeSort === 'latest' ? {} : { sort: activeSort }) } }} key={tag}>
            {tag}
          </Link>
        ))}
      </nav>

      <ProjectSortSelect activeSort={activeSort} activeTag={activeTag} />

      <div className="project-archive-list">
        {items.map((project) => (
          <Link className="archive-project-card" href={`/projects/${project.id}`} key={project.id}>
            <div className="archive-project-art">
              <Image
                src={project.image}
                alt={`${project.title} project cover`}
                fill
                sizes="(max-width: 768px) 100vw, 754px"
              />
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
          {hasPrevPage ? <Link href={buildPaginationHref('/projects', currentPage - 1, preservedQuery)}>← Previous</Link> : <span />}
          <span>{currentPage} / {totalPages}</span>
          {hasNextPage ? <Link href={buildPaginationHref('/projects', currentPage + 1, preservedQuery)}>Next →</Link> : <span />}
        </nav>
      )}
    </main>
  );
}
