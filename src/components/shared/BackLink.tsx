import Link from 'next/link';

interface BackLinkProps {
  href: string;
  label: string;
}

export function BackLink({ href, label }: BackLinkProps) {
  return (
    <Link
      href={href}
      className="text-small text-text-secondary hover:text-accent transition-colors"
    >
      ← Back to {label}
    </Link>
  );
}
