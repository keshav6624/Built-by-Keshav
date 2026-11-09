'use client';

import { useScroll, useTransform, motion, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

interface ScrollPerspectiveProps {
  children: ReactNode;
  className?: string;
}

export function ScrollPerspective({ children, className }: ScrollPerspectiveProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, -3, -3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [1, 0.97, 0.97, 1]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={className} style={{ perspective: '1200px' }}>
      <motion.div style={{ rotateX, scale }}>{children}</motion.div>
    </div>
  );
}

interface ParallaxDepthProps {
  children: ReactNode;
  depth?: number;
  className?: string;
}

export function ParallaxDepth({
  children,
  depth = 0.15,
  className,
}: ParallaxDepthProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'] as const,
  });

  const y = useTransform(scrollYProgress, [0, 1], [depth * 80, depth * -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} className={className} style={{ y, opacity }}>
      {children}
    </motion.div>
  );
}
