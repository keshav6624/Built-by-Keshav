'use client';

import Image from 'next/image';
import { Reveal } from '@/components/common/Reveal';
import { siteConfig, profileLinks } from '@/data/site';

export default function Hero() {
  return (
    <section
      id="hero"
      className="hero-section relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-28 pt-32 md:px-12"
    >
      <div className="hero-ring" aria-hidden="true" />
      <div className="hero-ring hero-ring--dotted" aria-hidden="true" />

      <div className="hero-grid relative z-10 w-full max-w-[var(--container-max)]">
        {/* LEFT: introduction */}
        <div className="hero-left order-1 flex flex-col md:order-1">
          <Reveal delay={0.05} duration={0.8}>
            <p className="hero-greeting font-body">Hello,</p>
          </Reveal>
          <Reveal delay={0.18} duration={0.8} y={24}>
            <h2 className="hero-intro font-display">I&rsquo;m a</h2>
          </Reveal>
          <Reveal delay={0.32} duration={0.8} y={28}>
            <h1 className="hero-profession font-display">
              <span className="hero-profession-line">Developer</span>
              <span className="hero-profession-line">& Coder</span>
            </h1>
          </Reveal>
        </div>

        {/* CENTER: profile */}
        <div className="hero-center order-2 flex flex-col items-center md:order-2">
          <Reveal delay={0.4} duration={1} y={32}>
            <div className="hero-profile">
              <Image
                src="/profile.svg"
                alt="Illustration of Keshav Kumar"
                width={440}
                height={440}
                priority
                className="hero-profile-img"
              />
            </div>
          </Reveal>

          <Reveal delay={0.7} duration={0.9} y={18}>
            <a
              href={profileLinks.booking}
              className="btn btn-hero mt-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hire Me
            </a>
          </Reveal>
        </div>

        {/* RIGHT: name */}
        <div className="hero-right order-3 flex flex-col md:order-3">
          <Reveal delay={0.45} duration={0.9} y={24}>
            <div className="hero-name font-display">
              <span className="hero-name-line">Keshav</span>
              <span className="hero-name-line">Kumar</span>
              <span className="hero-name-underline" aria-hidden="true" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* bottom decorative grass */}
      <div className="hero-grass hero-grass--left" aria-hidden="true" />
      <div className="hero-grass hero-grass--right" aria-hidden="true" />
    </section>
  );
}
