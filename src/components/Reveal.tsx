import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

export const easeOut = [0.23, 1, 0.32, 1] as const;

// Fades a block up the first time it scrolls into view. Used once per
// section so each one announces itself as the reader reaches it.
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: easeOut }}
    >
      {children}
    </motion.div>
  );
}
