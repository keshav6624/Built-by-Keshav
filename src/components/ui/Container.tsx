import React from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, ...props }, ref) => (
    <div
      className={cn('mx-auto w-full max-w-[1440px] px-6 md:px-12', className)}
      ref={ref}
      {...props}
    />
  )
);
Container.displayName = 'Container';

export { Container };
