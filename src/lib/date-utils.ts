export function parseTimelineDate(dateValue: string): Date {
  if (dateValue.toLowerCase() === 'ongoing') {
    return new Date('9999-12-31');
  }
  const parsed = new Date(dateValue);
  if (Number.isNaN(parsed.getTime())) {
    return new Date(`${dateValue} 1`);
  }
  return parsed;
}
