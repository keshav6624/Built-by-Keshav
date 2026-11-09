import { timelineEvents } from '@/data/timeline';
import { Container } from '@/components/ui/Container';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/common/Reveal';
import { parseTimelineDate } from '@/lib/date-utils';

function formatTimelineLabel(dateValue: string) {
  if (dateValue.toLowerCase() === 'ongoing') return 'ONGOING';
  return parseTimelineDate(dateValue)
    .toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
    .toUpperCase();
}

function formatYear(dateValue: string) {
  if (dateValue.toLowerCase() === 'ongoing') return 'Ongoing';
  return String(parseTimelineDate(dateValue).getFullYear());
}

export const metadata = {
  title: 'Timeline — Keshav',
  description: 'My journey and evolution as a builder, from first projects to major milestones.',
};

export default function TimelinePage() {
  const sortedEvents = [...timelineEvents].sort(
    (left, right) => parseTimelineDate(right.date).getTime() - parseTimelineDate(left.date).getTime(),
  );

  const groupedByYear = sortedEvents.reduce<Record<string, typeof sortedEvents>>((groups, event) => {
    const year = formatYear(event.date);
    (groups[year] ??= []).push(event);
    return groups;
  }, {});

  const years = Object.keys(groupedByYear).sort((left, right) => {
    if (left === 'Ongoing') return -1;
    if (right === 'Ongoing') return 1;
    return Number(right) - Number(left);
  });

  return (
    <main className="collection-detail-page px-6 pt-32 pb-32 md:px-12 md:pt-40">
      <Container className="max-w-[1100px]">
        <Reveal>
          <p className="eyebrow mb-6">Experience</p>
          <h1 className="hero-text font-display text-text">Timeline</h1>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-[140px_minmax(0,1fr)] lg:gap-16">
          {/* Year sidebar */}
          <Reveal className="lg:sticky lg:top-32 lg:self-start lg:block hidden">
            <div className="flex flex-col gap-4 pt-2">
              {years.map((year, index) => (
                <a
                  key={year}
                  href={`#year-${year}`}
                  className={`text-small transition-colors ${
                    index === 0 ? 'text-accent' : 'text-text-muted hover:text-text'
                  }`}
                >
                  {year}
                </a>
              ))}
            </div>
          </Reveal>

          {/* Mobile year slider */}
          <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
            {years.map((year, index) => (
              <a
                key={year}
                href={`#year-${year}`}
                className={`pill whitespace-nowrap ${index === 0 ? 'bg-accent/10 text-accent-light border-accent/40' : ''}`}
              >
                {year}
              </a>
            ))}
          </div>

          {/* Timeline */}
          <section className="relative pl-7">
            <div className="absolute left-[10px] top-1 bottom-0 w-px bg-border" />

            <div className="space-y-20">
              {years.map((year) => (
                <div key={year} id={`year-${year}`} className="scroll-mt-32">
                  <Reveal>
                    <div className="mb-10 flex items-center gap-3">
                      <p className="text-[13px] uppercase tracking-[0.22em] text-text-muted">{year}</p>
                      <div className="h-px flex-1 bg-border" />
                    </div>
                  </Reveal>

                  <div className="space-y-12">
                    {groupedByYear[year].map((event, i) => (
                      <Reveal key={event.id} delay={i * 0.05}>
                        <article className="relative">
                          <span className="absolute left-[-22px] top-[0.55rem] h-3 w-3 rounded-full border border-accent bg-background" />
                          <p className="text-[13px] uppercase tracking-[0.16em] text-text-muted">
                            {formatTimelineLabel(event.date)}
                          </p>
                          <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                            <h3 className="h3-text font-display text-text">{event.title}</h3>
                            <p className="max-w-[58ch] body-text text-text-secondary">
                              — {event.impact ?? event.description}
                            </p>
                            {event.impact && <ArrowUpRight className="ml-1 h-5 w-5 shrink-0 text-text-muted" />}
                          </div>
                          {event.impact && event.description && event.description !== event.impact && (
                            <p className="mt-3 max-w-[58ch] text-small text-text-secondary leading-relaxed">
                              {event.description}
                            </p>
                          )}
                        </article>
                      </Reveal>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
