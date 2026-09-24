import type { CSSProperties } from 'react';
import { profile } from '../content/profile';
import { BOOT_MS, PowerTrace, TraceLegend, trace } from './PowerTrace';

// Each hero element appears at one of the trace's turn-on points.
const at = (i: number) => ({ '--at': `${trace.bursts[i]}ms` }) as CSSProperties;

export function Hero() {
  return (
    <header className="hero boot" style={{ '--boot': `${BOOT_MS}ms` } as CSSProperties}>
      <div className="wrap hero-grid">
        <h1 className="hero-name" aria-label={profile.name}>
          {profile.name.split(' ').map((word, i) => (
            <span className="mask" key={word} aria-hidden="true">
              <span className="burst rise" style={{ '--at': `${trace.bursts[0] + i * 90}ms` } as CSSProperties}>
                {word}
              </span>
            </span>
          ))}
        </h1>
        <p className="hero-role burst" style={at(1)}>
          {profile.role}.
          <br />
          <span className="quiet">{profile.background}.</span>
        </p>
        <div className="hero-aside">
          <p className="hero-summary burst" style={at(2)}>
            {profile.summary}
          </p>
          <div className="actions burst" style={at(3)}>
            <a className="button" href={profile.cv} download>
              Download CV
            </a>
            <a className="text-link" href={profile.links.linkedin}>
              LinkedIn
            </a>
            <a className="text-link" href={profile.links.github}>
              GitHub
            </a>
          </div>
        </div>
      </div>
      <PowerTrace />
      <TraceLegend />
    </header>
  );
}
