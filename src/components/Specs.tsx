import { skills } from '../content/skills';
import { Section } from './Section';

export function Specs() {
  return (
    <Section id="skills" title="Specifications">
      <dl className="specs">
        {skills.map((s) => (
          <div key={s.label}>
            <dt>{s.label}</dt>
            <dd>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
