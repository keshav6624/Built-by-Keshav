'use client';

export default function AmbientBackground() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 -z-20 bg-background" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="ambient-orb ambient-orb-primary" />
        <div className="ambient-orb ambient-orb-secondary" />
        <div className="ambient-orb ambient-orb-tertiary" />
        <div className="ambient-grid" />
        <div className="ambient-vignette" />
      </div>
    </>
  );
}
