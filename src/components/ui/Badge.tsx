import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-[999px] px-4 py-1.5 text-[13px] font-medium transition-all duration-fast ease-soft border',
  {
    variants: {
      variant: {
        primary:
          'bg-accent/10 text-accent-light border-accent/30 hover:bg-accent/15',
        secondary:
          'bg-white/5 text-text border-white/10 hover:border-white/20',
        outline:
          'border-white/12 text-text-secondary hover:border-accent/40 hover:text-text',
        glass:
          'bg-white/[0.04] text-text-secondary border-white/[0.08] backdrop-blur-xl',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <div className={cn(badgeVariants({ variant, className }))} ref={ref} {...props} />
  )
);
Badge.displayName = 'Badge';

export { Badge, badgeVariants };
