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

