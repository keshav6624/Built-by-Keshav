import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'elevated';
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'card-glass',
      hover: 'card-glass cursor-pointer',
      elevated:
        'card-glass border-white/14 bg-white/[0.06] shadow-card',
    };

    return <div className={cn(variants[variant], className)} ref={ref} {...props} />;
  }
);
Card.displayName = 'Card';

export { Card };
