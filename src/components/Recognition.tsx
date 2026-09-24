import { awards, service } from '../content/recognition';
import { Section } from './Section';

function Dated({ title, items }: { title: string; items: { year: string; text: string }[] }) {
  return (
    <div>
      <h3>{title}</h3>
      <ul className="dated">
        {items.map((i) => (
          <li key={i.text}>
            <span className="tabular when">{i.year}</span>
            <p>{i.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Recognition() {
  return (
    <Section id="recognition" title="Recognition">
      <div className="recognition">
        <Dated title="Awards" items={awards} />
        <Dated title="Peer review and committees" items={service} />
      </div>
    </Section>
  );
}
