import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { useRef } from 'react';
import { experience } from '../content/experience';
import { Section } from './Section';

export function Experience() {
  const list = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // The rail fills as the reader moves through the roles.
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 75%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  return (
    <Section id="experience" title="Experience">
      <div className="timeline-wrap" ref={list}>
        <motion.span
          className="rail-fill"
          aria-hidden="true"
          style={reduce ? undefined : { scaleY: fill }}
        />
        <ol className="timeline" reversed>
          {experience.map((r) => (
            <li key={`${r.org}-${r.start}`} className={r.end === 'Present' ? 'current' : undefined}>
              <span className="marker" aria-hidden="true" />
              <time className="tabular">
                {r.start} - {r.end}
              </time>
              <div>
                <h3>{r.title}</h3>
                <p className="org">
                  {r.org}
                  {r.place ? `, ${r.place}` : ''}
                </p>
                <ul className="points">
                  {r.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
