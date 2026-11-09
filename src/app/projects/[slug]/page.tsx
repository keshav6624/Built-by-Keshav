import { Container } from '@/components/ui/Container';
import { projects } from '@/data/projects';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/common/Reveal';
import { BackLink } from '@/components/shared/BackLink';

async function getProject(slug: string) {
  return projects.find((p) => p.id === slug);
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) {
    return { title: 'Project Not Found — Keshav', description: 'This project does not exist.' };
  }
  return { title: `${project.title} — Keshav`, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) notFound();

  return (
    <main className="collection-detail-page px-6 pt-32 pb-32 md:px-12 md:pt-40">
      <Container className="max-w-[1000px]">
        <Reveal>
          <BackLink href="/projects" label="Projects" />
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <p className="eyebrow mb-4">{formatDate(project.date)}</p>
          <h1 className="hero-text font-display text-text leading-[1.04]">{project.title}</h1>
          <p className="mt-6 max-w-[640px] body-text text-text-secondary leading-relaxed">
            {project.description}
          </p>
        </Reveal>

        {/* Tech stack pills */}
        <Reveal delay={0.2} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span key={tech} className="pill">{tech}</span>
            ))}
          </div>
        </Reveal>

        {/* Image placeholder */}
        <Reveal delay={0.2} className="mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card bg-surface-2">
            <div
              className="absolute inset-0 flex items-center justify-center font-display text-[120px] text-text/8"
              aria-hidden="true"
            >
              {project.title.split(' ').slice(0, 2).map((w) => w[0]).join('')}
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at 30% 20%, rgba(104,215,255,0.2), transparent 60%)',
              }}
            />
          </div>
        </Reveal>

        {/* Notes */}
        {project.content && (
          <Reveal delay={0.2} className="mt-14 border-t border-border pt-10 max-w-[640px]">
            <h2 className="h2-text font-display text-text mb-6">Project Notes</h2>
            <p className="whitespace-pre-wrap body-text text-text-secondary leading-relaxed">
              {project.content}
            </p>
          </Reveal>
        )}

        {/* Metrics and impact */}
        <Reveal delay={0.2} className="mt-14 grid gap-6 sm:grid-cols-2 max-w-[640px]">
          <div className="card-glass">
            <p className="eyebrow mb-2">Metric</p>
            <p className="text-small text-text-secondary leading-relaxed">{project.metric}</p>
          </div>
          <div className="card-glass">
            <p className="eyebrow mb-2">Impact</p>
            <p className="text-small text-text-secondary leading-relaxed">{project.businessImpact}</p>
          </div>
        </Reveal>

        {/* Links */}
        {(project.link || project.github) && (
          <Reveal delay={0.2} className="mt-14 flex flex-wrap gap-4">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Project →
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                View on GitHub
              </a>
            )}
          </Reveal>
        )}
      </Container>
    </main>
  );
}
