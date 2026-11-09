'use client';

import { useRef, type ReactNode, type MouseEvent } from 'react';
import { motion, useMotionValue, useTransform, useReducedMotion } from 'framer-motion';

interface TiltCard3DProps {
  children: ReactNode;
  className?: string;
  tiltDegree?: number;
  perspective?: number;
  scaleOnHover?: number;
  onClick?: () => void;
  as?: 'div' | 'a';
  href?: string;
}

export function TiltCard3D({
  children,
  className,
  tiltDegree = 6,
  perspective = 1000,
  scaleOnHover = 1.02,
  onClick,
}: TiltCard3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-0.5, 0.5], [tiltDegree, -tiltDegree]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-tiltDegree, tiltDegree]);

  function handleMouse(e: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  if (reduceMotion) {
    return (
      <div className={className} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{ perspective }}
      whileHover={{ scale: scaleOnHover }}
      transition={{ type: 'spring', stiffness: 180, damping: 18, mass: 0.8 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 120, damping: 14, mass: 0.6 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
