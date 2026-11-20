import { Container } from '@/components/ui/Container';
import { projects } from '@/data/projects';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';
import { Reveal } from '@/components/common/Reveal';
import { BackLink } from '@/components/shared/BackLink';
import Image from 'next/image';
import { parseProjectContent } from '@/lib/project-content';

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
  const contentSections = project.content ? parseProjectContent(project.content) : [];

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

        {/* Project cover */}
        <Reveal delay={0.2} className="mt-14">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card bg-surface-2">
            <Image
              src={project.image}
              alt={`${project.title} project cover`}
              fill
              sizes="(max-width: 1000px) 100vw, 1000px"
              className="object-cover"
              priority
            />
          </div>
        </Reveal>

        {/* Notes */}
        {contentSections.length > 0 && (
          <Reveal delay={0.2} className="mt-14 border-t border-border pt-10 max-w-[720px]">
            <h2 className="h2-text font-display text-text mb-8">Project Notes</h2>
            <div className="space-y-9">
              {contentSections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h3 className="font-display text-2xl text-text">{section.heading}</h3>
                  {section.paragraphs.map((paragraph) => (
                    <p className="body-text text-text-secondary leading-relaxed" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets.length > 0 && (
                    <ul className="space-y-3 pl-5 text-text-secondary">
                      {section.bullets.map((bullet) => (
                        <li className="list-disc leading-relaxed" key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </Reveal>
        )}

        {/* Evaluation focus and outcome */}
        <Reveal delay={0.2} className="mt-14 grid gap-6 sm:grid-cols-2 max-w-[640px]">
          <div className="card-glass">
            <p className="eyebrow mb-2">Evaluation focus</p>
            <p className="text-small text-text-secondary leading-relaxed">{project.metric}</p>
          </div>
          <div className="card-glass">
            <p className="eyebrow mb-2">What it changes</p>
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
