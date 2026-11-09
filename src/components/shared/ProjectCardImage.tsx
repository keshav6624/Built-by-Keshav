interface ProjectCardImageProps {
  initials: string;
  textSize?: string;
  badge?: React.ReactNode;
}

export function ProjectCardImage({
  initials,
  textSize = 'text-[88px]',
  badge,
}: ProjectCardImageProps) {
  return (
    <div className="relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-surface-2">
      <div
        className={`absolute inset-0 flex items-center justify-center font-display ${textSize} text-text/8 transition-transform duration-slow ease-soft group-hover:scale-105`}
        aria-hidden="true"
      >
        {initials}
      </div>
      <div
        className="absolute inset-0 opacity-40 transition-opacity duration-slow group-hover:opacity-70"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(104,215,255,0.18), transparent 60%)',
        }}
      />
      {badge && (
        <div className="absolute left-4 top-4">{badge}</div>
      )}
    </div>
  );
}
