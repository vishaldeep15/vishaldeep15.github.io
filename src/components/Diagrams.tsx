import { motion, useReducedMotion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';
import { easeOut } from './Reveal';

// Explanatory diagrams for each project. Each one plays once, the first
// time it scrolls into view, in the order you would explain it aloud.

const draw = (delay: number, duration = 0.9): Variants => ({
  hidden: { pathLength: 0, opacity: 0 },
  shown: {
    pathLength: 1,
    opacity: 1,
    transition: { pathLength: { delay, duration, ease: easeOut }, opacity: { delay, duration: 0.01 } },
  },
});

const fade = (delay: number): Variants => ({
  hidden: { opacity: 0 },
  shown: { opacity: 1, transition: { delay, duration: 0.4 } },
});

const grow = (delay: number): Variants => ({
  hidden: { scaleX: 0 },
  shown: { scaleX: 1, transition: { delay, duration: 0.5, ease: easeOut } },
});

const fromLeft = { originX: 0, transformBox: 'fill-box' } as const;

function Diagram({ w, h, label, children }: { w: number; h: number; label: string; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.svg
      className="diagram"
      viewBox={`0 0 ${w} ${h}`}
      role="img"
      aria-label={label}
      initial={reduce ? false : 'hidden'}
      whileInView="shown"
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.svg>
  );
}

/* HARC ------------------------------------------------------------------ */

// Remanence decay: starts high when power fails and falls to nothing after `range`.
function decay(x0: number, top: number, base: number, range: number, stopAt: number) {
  const pts: string[] = [];
  const k = 3;
  const end = Math.min(range, stopAt - x0);
  for (let i = 0; i <= 24; i++) {
    const dx = (end * i) / 24;
    const t = dx / range;
    const v = (Math.exp(-k * t) - Math.exp(-k)) / (1 - Math.exp(-k));
    pts.push(`${(x0 + dx).toFixed(1)},${(base - (base - top) * v).toFixed(1)}`);
  }
  if (range < stopAt - x0) pts.push(`${stopAt},${base}`);
  return `M${pts.join(' L')}`;
}

export function HarcDiagram() {
  const x0 = 180;
  const x1 = 940;
  const on = [
    [x0, 340],
    [610, 710],
    [890, x1],
  ];
  const outages = [
    { from: 340, to: 610, used: 2, note: 'Off-time read from the coarse clock' },
    { from: 710, to: 890, used: 1, note: 'Read from the medium clock' },
  ];
  const clocks = [
    { name: 'Fine, short range', y: 120, range: 90 },
    { name: 'Medium range', y: 180, range: 210 },
    { name: 'Coarse, long range', y: 240, range: 400 },
  ];
  return (
    <Diagram
      w={960}
      h={320}
      label="HARC: while power is off, three clocks of different range decay. The finest clock that has not run out tells how long the node was off."
    >
      <text className="dg-label" x="0" y="50">
        Power
      </text>
      {on.map(([a, b], i) => (
        <motion.rect
          key={a}
          className="dg-solid"
          x={a}
          y={38}
          width={b - a}
          height={18}
          variants={grow(i * 0.12)}
          style={fromLeft}
        />
      ))}
      {clocks.map((c) => (
        <g key={c.name}>
          <text className="dg-label" x="0" y={c.y + 4}>
            {c.name}
          </text>
          <line className="dg-rule" x1={x0} x2={x1} y1={c.y + 16} y2={c.y + 16} />
        </g>
      ))}
      {outages.map((o, oi) => (
        <g key={o.from}>
          {clocks.map((c, ci) => (
            <motion.path
              key={c.name}
              className={ci === o.used ? 'dg-signal' : 'dg-muted'}
              d={decay(o.from, c.y - 18, c.y + 16, c.range, o.to)}
              variants={draw(0.5 + oi * 0.8 + ci * 0.1)}
            />
          ))}
          <motion.circle
            className="dg-dot"
            cx={o.to}
            cy={
              clocks[o.used].y +
              16 -
              34 *
                ((Math.exp((-3 * (o.to - o.from)) / clocks[o.used].range) - Math.exp(-3)) / (1 - Math.exp(-3)))
            }
            r={5}
            variants={fade(1.3 + oi * 0.8)}
          />
          <motion.g variants={fade(1.4 + oi * 0.8)}>
            <path className="dg-ink" d={`M${o.from},284 v8 H${o.to} v-8`} />
            <text className="dg-label" x={o.from} y={312}>
              {o.note}
            </text>
          </motion.g>
        </g>
      ))}
    </Diagram>
  );
}

/* Time synchronization -------------------------------------------------- */

export function SyncDiagram() {
  const ticks = [130, 210, 290, 370, 450, 530];
  const drift = [-28, 20, -12, 32, -22];
  return (
    <Diagram
      w={560}
      h={320}
      label="Five nodes start with clocks that disagree; the protocol brings their ticks into line on a shared time."
    >
      {ticks.map((x, i) => (
        <motion.line
          key={x}
          className="dg-guide"
          x1={x}
          x2={x}
          y1={20}
          y2={272}
          variants={fade(1.1 + i * 0.05)}
        />
      ))}
      {drift.map((d, n) => {
        const y = 50 + n * 50;
        return (
          <g key={n}>
            <text className="dg-label" x="0" y={y + 5}>
              Node {n + 1}
            </text>
            <line className="dg-rule" x1={90} x2={560} y1={y} y2={y} />
            <motion.g
              variants={{
                hidden: { x: d },
                shown: { x: 0, transition: { delay: 0.3 + n * 0.08, duration: 0.9, ease: easeOut } },
              }}
            >
              {ticks.map((x) => (
                <line key={x} className="dg-tick" x1={x} x2={x} y1={y - 10} y2={y + 10} />
              ))}
            </motion.g>
          </g>
        );
      })}
      <motion.text className="dg-label dg-label-signal" x={130} y={304} variants={fade(1.4)}>
        Shared time
      </motion.text>
    </Diagram>
  );
}

/* Lifecycle management -------------------------------------------------- */

export function LifecycleDiagram() {
  const lanes = [
    { name: 'Node A', y: 70, awake: [[90, 170], [230, 330], [400, 470], [505, 550]] },
    { name: 'Node B', y: 170, awake: [[140, 210], [300, 360], [380, 440], [520, 556]] },
  ];
  const both = [[140, 170], [300, 330], [400, 440], [520, 550]];
  return (
    <Diagram
      w={560}
      h={290}
      label="Two batteryless nodes wake and sleep on their own schedules. They can only exchange messages in the shaded windows where both are awake."
    >
      {both.map(([a, b], i) => (
        <motion.rect
          key={a}
          className="dg-wash"
          x={a}
          y={44}
          width={b - a}
          height={178}
          variants={fade(1 + i * 0.12)}
        />
      ))}
      {lanes.map((l, li) => (
        <g key={l.name}>
          <text className="dg-label" x="0" y={l.y + 22}>
            {l.name}
          </text>
          <line className="dg-rule" x1={90} x2={560} y1={l.y + 36} y2={l.y + 36} />
          {l.awake.map(([a, b], i) => (
            <motion.rect
              key={a}
              className="dg-solid"
              x={a}
              y={l.y}
              width={b - a}
              height={36}
              variants={grow(0.2 + li * 0.25 + i * 0.1)}
              style={fromLeft}
            />
          ))}
        </g>
      ))}
      <motion.text className="dg-label" x={90} y={262} variants={fade(1.5)}>
        Shaded: both awake, so they can talk
      </motion.text>
    </Diagram>
  );
}

/* Navigation without GPS ------------------------------------------------ */

export function GpsDiagram() {
  return (
    <Diagram
      w={560}
      h={290}
      label="A route enters a tunnel where GPS is lost. Inside, the position is estimated from the phone's accelerometer and gyroscope until GPS returns."
    >
      <rect className="dg-fill" x={210} y={20} width={170} height={230} />
      <text className="dg-label" x={222} y={44}>
        Tunnel, no GPS
      </text>
      <motion.path className="dg-ink dg-thick" d="M20,240 C80,236 140,214 210,176" variants={draw(0.1, 0.6)} />
      <motion.path
        className="dg-signal dg-thick"
        d="M210,176 C260,150 300,178 340,140 S370,112 380,108"
        variants={draw(0.7, 0.9)}
      />
      <motion.path className="dg-ink dg-thick" d="M380,108 C440,86 490,70 540,40" variants={draw(1.6, 0.6)} />
      {[
        [210, 176],
        [380, 108],
      ].map(([cx, cy], i) => (
        <motion.circle key={cx} className="dg-dot" cx={cx} cy={cy} r={5} variants={fade(0.7 + i * 0.9)} />
      ))}
      <text className="dg-label" x={20} y={272}>
        GPS
      </text>
      <motion.text className="dg-label dg-label-signal" x={222} y={228} variants={fade(1.2)}>
        IMU estimate
      </motion.text>
      <text className="dg-label" x={500} y={80}>
        GPS
      </text>
    </Diagram>
  );
}

export const diagrams = {
  harc: HarcDiagram,
  sync: SyncDiagram,
  lifecycle: LifecycleDiagram,
  gps: GpsDiagram,
};
