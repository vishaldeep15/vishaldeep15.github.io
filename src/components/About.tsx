import { useState } from 'react';
import { profile } from '../content/profile';
import { Section } from './Section';

export function About() {
  const [missing, setMissing] = useState(false);
  const initials = profile.name
    .split(' ')
    .map((w) => w[0])
    .join('');
  return (
    <Section id="about" title="About">
      <div className="about">
        {missing ? (
          <div className="portrait portrait-fallback" aria-hidden="true">
            {initials}
          </div>
        ) : (
          <img
            className="portrait"
            src={profile.headshot}
            alt={`Portrait of ${profile.name}`}
            width={192}
            height={240}
            onError={() => setMissing(true)}
          />
        )}
        <div className="about-text">
          {profile.about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </Section>
  );
}
