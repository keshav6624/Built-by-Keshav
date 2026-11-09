import Link from 'next/link';
import { projects } from '@/data/projects';
import { timelineEvents } from '@/data/timeline';
import { aboutContent } from '@/data/about';
import { profileLinks, siteConfig } from '@/data/site';
import { Mail } from 'lucide-react';

export const metadata = {
  title: `${siteConfig.name}'s Garden`,
  description: aboutContent.bio,
};

const socialLinks = [
  { label: 'GitHub', href: profileLinks.github, icon: 'github' },
  { label: 'LinkedIn', href: profileLinks.linkedin, icon: 'linkedin' },
  { label: 'Email', href: profileLinks.email, icon: Mail },
];

const writing = [
  { title: 'What I am learning about machine learning systems', description: 'Notes from building models, metrics, and reliable data products.', date: 'Latest note' },
  { title: 'Building in public, one useful system at a time', description: 'Thoughts on turning experiments into tools people can use.', date: 'Recent' },
  { title: 'The long way around a hard technical problem', description: 'A practical record of questions, dead ends, and better approaches.', date: 'Archive' },
];

const featuredProjects = projects.slice(0, 3);
const updates = [...timelineEvents].reverse().slice(0, 4);
const library = [
  { status: 'Exploring', title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann' },
  { status: 'Read', title: 'The Pragmatic Programmer', author: 'David Thomas & Andrew Hunt' },
  { status: 'Read', title: 'Deep Work', author: 'Cal Newport' },
  { status: 'Reading', title: 'The Beginning of Infinity', author: 'David Deutsch' },
];

export default function Home() {
  return (
    <div className="garden-page">
      <section className="garden-intro">
        <p className="garden-kicker">A personal archive of things I build and learn.</p>
        <h1>{siteConfig.name}</h1>
        <p className="garden-bio">
          I build software, study machine learning, and turn messy problems into useful systems.
          Currently exploring data, AI, and thoughtful product engineering.
        </p>
        <nav className="social-links" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.label === 'Email' ? undefined : '_blank'} rel={link.label === 'Email' ? undefined : 'noopener noreferrer'} aria-label={link.label} title={link.label}>
              {typeof link.icon === 'string' ? <BrandIcon name={link.icon as 'github' | 'linkedin'} /> : <link.icon size={22} strokeWidth={1.7} aria-hidden="true" />}
            </a>
          ))}
        </nav>
      </section>

      <section className="garden-section" aria-labelledby="writing-heading">
        <div className="garden-section-heading">
          <div>
            <h2 id="writing-heading">Selected writing <span>({writing.length})</span></h2>
            <p>Notes on building, learning, and figuring things out.</p>
          </div>
          <a href={`mailto:${siteConfig.email}?subject=Writing%20from%20Keshav`}>Get in touch →</a>
        </div>
        <div className="garden-list">
          {writing.map((entry) => (
            <article className="garden-list-item writing-item" key={entry.title}>
              <div>
                <p className="item-meta">{entry.date}</p>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </div>
              <span className="item-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="garden-section" aria-labelledby="projects-heading">
        <div className="garden-section-heading">
          <div>
            <h2 id="projects-heading">Projects <span>({projects.length})</span></h2>
            <p>Experiments, products, and systems I have shipped.</p>
          </div>
          <Link href="/projects">All projects →</Link>
        </div>
        <div className="garden-list">
          {featuredProjects.map((project) => (
            <Link className="garden-list-item project-item" href={`/projects/${project.id}`} key={project.id}>
              <div>
                <p className="item-meta">{project.date}</p>
                <h3>{project.title}</h3>
                <p>{project.shortDescription}</p>
                <ul className="tag-list" aria-label="Technologies">
                  {project.stack.slice(0, 3).map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
              </div>
              <span className="item-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="garden-section" aria-labelledby="updates-heading">
        <div className="garden-section-heading">
          <div>
            <h2 id="updates-heading">Updates</h2>
            <p>Small notes from the journey.</p>
          </div>
          <Link href="/timeline">Full timeline →</Link>
        </div>
        <div className="updates-list">
          {updates.map((event) => (
            <article className="update-item" key={event.id}>
              <time>{event.date}</time>
              <div>
                <h3>{event.title}</h3>
                <p>{event.impact ?? event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="garden-section" aria-labelledby="library-heading">
        <div className="garden-section-heading">
          <div>
            <h2 id="library-heading">Library</h2>
            <p>Ideas currently shaping how I think.</p>
          </div>
          <Link href="/about">About me →</Link>
        </div>
        <div className="library-list">
          {library.map((book) => (
            <div className="library-item" key={book.title}>
              <p className="item-meta"><span aria-hidden="true">{book.status === 'Read' ? '✓' : '◐'}</span> {book.status}</p>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="garden-about">
        <p className="garden-kicker">A little more</p>
        <p>{aboutContent.bio} {aboutContent.philosophy}</p>
        <a className="text-link" href={profileLinks.email}>Say hello →</a>
      </section>
    </div>
  );
}

function BrandIcon({ name }: { name: 'github' | 'linkedin' }) {
  if (name === 'linkedin') {
    return (
      <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05A4.2 4.2 0 0 1 16.66 9C20.1 9 21 11.27 21 14.2V21h-4v-6.03c0-1.44-.03-3.29-2.01-3.29-2.01 0-2.32 1.57-2.32 3.19V21H9V9Z" />
      </svg>
    );
  }

  return (
    <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.64-5.48 5.94.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}
