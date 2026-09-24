import { useMotionValueEvent, useScroll } from 'motion/react';
import { useEffect, useRef, useState, type CSSProperties } from 'react';
import { education } from '../content/experience';
import { Section } from './Section';

function useMedia(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, [query]);
  return matches;
}

// Degrees drawn as a staircase, oldest at the bottom. Scrolling through the
// section climbs it: each step lights up in turn and the one you are on is
// tinted.
export function Education() {
  const steps = [...education].reverse();
  const list = useRef<HTMLOListElement>(null);
  // Side by side, the climb runs left to right; stacked, it runs top to bottom.
  const sideBySide = useMedia('(min-width: 56rem)');
  const [active, setActive] = useState(-1);
  const { scrollYProgress } = useScroll({ target: list, offset: ['start 80%', 'end 45%'] });

  const update = (p: number) => setActive(p <= 0 ? -1 : Math.min(steps.length - 1, Math.floor(p * steps.length)));
  useMotionValueEvent(scrollYProgress, 'change', update);
  useEffect(() => update(scrollYProgress.get()), [scrollYProgress]);

  return (
    <Section id="education" title="Education" wide>
      <ol className="stairs" ref={list} style={{ '--n': steps.length } as CSSProperties}>
        {steps.map((d, i) => {
          const rank = sideBySide ? i : steps.length - 1 - i;
          const state = rank < active ? 'climbed' : rank === active ? 'current' : undefined;
          return (
            <li key={d.degree} className="step" data-state={state} style={{ '--i': i } as CSSProperties}>
              <span className="year tabular">{d.year}</span>
              <p className="degree">{d.degree}</p>
              <p className="org">{d.school}</p>
              {d.note && <p className="note">{d.note}</p>}
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
