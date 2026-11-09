import Link from 'next/link';
import { aboutContent, aboutLinks } from '@/data/about';
import { Reveal } from '@/components/common/Reveal';
import { profileLinks } from '@/data/site';

export const metadata = {
  title: 'About — Keshav',
  description: 'Storytelling over scrolling. A short note on who I am and how I build.',
};

export default function AboutPage() {
  return (
    <main className="collection-detail-page px-6 pt-40 pb-32 md:px-12 md:pt-48 md:pb-40">
      <div className="section max-w-[720px]">
        <Reveal>
          <p className="eyebrow mb-6">About</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="hero-text font-display text-text leading-[1.02]">
            I design products
            <br />
            that feel <span className="text-accent">alive</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 space-y-6 text-text-secondary body-text leading-relaxed">
            <p>{aboutContent.bio}</p>
            <p>{aboutContent.philosophy}</p>
            <p>{aboutContent.currentlyWorking}</p>
            <p>{aboutContent.whyThisSite}</p>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 border-t border-border pt-10">
            <p className="eyebrow mb-4">Elsewhere</p>
            <div className="flex flex-wrap gap-3">
              <a href={profileLinks.github} target="_blank" rel="noopener noreferrer" className="pill">GitHub</a>
              <a href={aboutLinks.linkedin} target="_blank" rel="noopener noreferrer" className="pill">LinkedIn</a>
              <a href={profileLinks.email} className="pill">Email</a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="mt-16">
            <Link href="/" className="btn btn-secondary">← Back home</Link>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
