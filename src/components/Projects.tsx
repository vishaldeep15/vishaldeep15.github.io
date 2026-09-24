import { projects, type Project } from '../content/projects';
import { diagrams } from './Diagrams';
import { Section } from './Section';

function ProjectItem({ p, className }: { p: Project; className: string }) {
  const Diagram = diagrams[p.diagram];
  return (
    <article className={`project ${className}`}>
      <figure className="project-figure">
        <Diagram />
      </figure>
      <div className="project-text">
        <h3>{p.title}</h3>
        <p className="context">{p.context}</p>
        <p className="summary">{p.summary}</p>
        <ul className="stack" aria-label="Technologies">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        {p.link && (
          <a className="text-link" href={p.link.href}>
            {p.link.label}
          </a>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const [featured, wide, ...pair] = projects;
  return (
    <Section id="projects" title="Selected work" wide>
      <div className="projects">
        {featured && <ProjectItem p={featured} className="featured" />}
        {wide && <ProjectItem p={wide} className="split" />}
        {pair.length > 0 && (
          <div className="pair">
            {pair.map((p) => (
              <ProjectItem key={p.title} p={p} className="stacked" />
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
