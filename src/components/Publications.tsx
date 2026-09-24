import { useState } from 'react';
import { profile } from '../content/profile';
import { publications, type Publication } from '../content/publications';
import { Section } from './Section';

// How many of the newest papers show before "Show all".
const SHOWN = 6;

function Authors({ text }: { text: string }) {
  const parts = text.split(profile.name);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && <strong>{profile.name}</strong>}
        </span>
      ))}
    </>
  );
}

function ByYear({ items }: { items: Publication[] }) {
  const years = [...new Set(items.map((p) => p.year))].sort((a, b) => b - a);
  return (
    <>
      {years.map((year) => (
        <div className="pub-year" key={year}>
          <h3 className="tabular">{year}</h3>
          <ul className="pubs">
            {items
              .filter((p) => p.year === year)
              .map((p) => (
                <li key={p.title}>
                  <p className="pub-title">{p.href ? <a href={p.href}>{p.title}</a> : p.title}</p>
                  <p className="pub-meta">
                    <Authors text={p.authors} />. <em>{p.venue}</em>
                  </p>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export function Publications() {
  const [open, setOpen] = useState(false);
  const recent = publications.slice(0, SHOWN);
  const older = publications.slice(SHOWN);
  return (
    <Section id="publications" title="Publications">
      <p className="intro">
        {publications.length} peer-reviewed papers in IEEE and ACM venues, most of them on batteryless and
        intermittently-powered systems.
      </p>
      <ByYear items={recent} />
      {older.length > 0 && (
        <>
          <div className="collapsible" id="older-pubs" data-open={open}>
            <div>
              <ByYear items={older} />
            </div>
          </div>
          <button
            type="button"
            className="button secondary"
            aria-expanded={open}
            aria-controls="older-pubs"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Show fewer' : `Show all ${publications.length}`}
          </button>
        </>
      )}
      <p className="more">
        <a className="text-link" href={profile.links.scholar}>
          Citations on Google Scholar
        </a>
      </p>
    </Section>
  );
}
