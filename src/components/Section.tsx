import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
import { Reveal, easeOut } from './Reveal';

type Props = {
  id: string;
  title: string;
  // Wide sections put the title above the content instead of beside it.
  wide?: boolean;
  children: ReactNode;
};

export function Section({ id, title, wide, children }: Props) {
  const reduce = useReducedMotion();
  return (
    <section id={id} aria-labelledby={`${id}-title`}>
      <div className={wide ? 'wrap section wide' : 'wrap section'}>
        {/* The top rule draws across as the section arrives, marking where it starts. */}
        <motion.div
          className="section-rule"
          aria-hidden="true"
          initial={reduce ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.9, ease: easeOut }}
        />
        <h2 id={`${id}-title`} className="section-title">
          {title}
        </h2>
        <Reveal className="section-body">{children}</Reveal>
      </div>
    </section>
  );
}
