import type { ProjectMeta } from './content-types';

export function paginate<T>(items: T[], currentPage: number, pageSize: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, currentPage), totalPages);
  const start = (safePage - 1) * pageSize;
  const end = start + pageSize;
  const pageItems = items.slice(start, end);

  return {
    items: pageItems,
    currentPage: safePage,
    totalPages,
    hasNextPage: safePage < totalPages,
    hasPrevPage: safePage > 1,
  };
}

export function buildPaginationHref(
  base: string,
  page: number,
  extra: Record<string, string> = {},
) {
  const params = new URLSearchParams({ ...extra, page: String(page) });
  return `${base}?${params.toString()}`;
}

export function groupBy<T>(items: T[], keyFn: (item: T) => string) {
  return items.reduce<Record<string, T[]>>((groups, item) => {
    const key = keyFn(item);
    (groups[key] ??= []).push(item);
    return groups;
  }, {});
}

export function formatMonthYear(dateValue: string | Date) {
  const d = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export function formatMonthDay(dateValue: string | Date) {
  const d = typeof dateValue === 'string' ? new Date(dateValue) : dateValue;
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function sortProjectMetasByDate(metas: ProjectMeta[]) {
  return [...metas].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
