import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  previousHref: string | null;
  nextHref: string | null;
}

interface CollectionPageShellProps {
  title: string;
  description?: string;
  contentClassName?: string;
  pagination?: PaginationProps;
  children: React.ReactNode;
}

export function CollectionPageShell({
  title,
  description,
  contentClassName = '',
  pagination,
  children,
}: CollectionPageShellProps) {
  return (
    <section className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="section">
        <header className="mb-20 max-w-2xl">
          <p className="eyebrow mb-4">Collection</p>
          <h1 className="hero-text font-display text-text">{title}</h1>
          {description && (
            <p className="mt-6 text-text-secondary body-text leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </header>

        <div className={contentClassName}>{children}</div>

        {pagination && pagination.totalPages > 1 && (
          <footer className="mt-32 flex items-center justify-between border-t border-border pt-12">
            {pagination.previousHref ? (
              <Link
                href={pagination.previousHref}
                className="pill text-small"
              >
                ← Previous
              </Link>
            ) : (
              <span className="pill opacity-30 cursor-not-allowed text-small">← Previous</span>
            )}
            <span className="text-text-muted text-small font-body">
              {pagination.currentPage} / {pagination.totalPages}
            </span>
            {pagination.nextHref ? (
              <Link
                href={pagination.nextHref}
                className="pill text-small"
              >
                Next →
              </Link>
            ) : (
              <span className="pill opacity-30 cursor-not-allowed text-small">Next →</span>
            )}
          </footer>
        )}
      </div>
    </section>
  );
}
