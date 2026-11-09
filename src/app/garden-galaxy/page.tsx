import Link from 'next/link';

export const metadata = {
  title: 'Garden Galaxy — Keshav',
  description: 'A map of Keshav\'s projects, notes, and experiments.',
};

const destinations = [
  { label: 'Writing', href: '/#writing-heading', description: 'Notes and ideas in progress.' },
  { label: 'Projects', href: '/projects', description: 'Builds, experiments, and technical write-ups.' },
  { label: 'Timeline', href: '/timeline', description: 'Milestones from the journey so far.' },
  { label: 'About', href: '/about', description: 'A little more about how I work.' },
];

export default function GardenGalaxyPage() {
  return (
    <main className="experiment-page">
      <p className="garden-kicker">Experiment 02</p>
      <h1>Garden Galaxy</h1>
      <p>A small map of the places that make up this garden. Pick a planet and keep exploring.</p>
      <div className="galaxy-links">
        {destinations.map((destination) => (
          <Link href={destination.href} key={destination.label}>
            <strong>{destination.label}</strong>
            <span>{destination.description}</span>
            <em>↗</em>
          </Link>
        ))}
      </div>
      <Link className="text-link" href="/">← Back to Keshav&apos;s Garden</Link>
    </main>
  );
}
