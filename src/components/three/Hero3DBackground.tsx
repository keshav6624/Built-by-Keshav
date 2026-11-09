'use client';

import dynamic from 'next/dynamic';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => null,
});

export default function Hero3DBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-[1] overflow-hidden" aria-hidden="true">
      <div className="h-full w-full opacity-90">
        <HeroScene />
      </div>
    </div>
  );
}
