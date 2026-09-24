// A capacitor-voltage trace from an energy-harvesting device: it charges
// until it reaches the turn-on threshold, runs (and drains) until the
// turn-off threshold, then charges again. The hero text appears at each
// turn-on, the way an intermittent device executes in bursts.

const W = 1200;
const H = 160;
const V_ZERO = 150;
const V_ON = 36;
const V_OFF = 104;

export const BOOT_MS = 1700;

// Horizontal lengths of each charge and discharge phase.
const cycles = [
  { charge: 300, run: 34 },
  { charge: 200, run: 34 },
  { charge: 190, run: 34 },
  { charge: 180, run: 34 },
];

function chargeCurve(x0: number, y0: number, len: number, steps = 24) {
  const pts: string[] = [];
  const k = 3;
  const norm = 1 - Math.exp(-k);
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const y = y0 - (y0 - V_ON) * ((1 - Math.exp(-k * t)) / norm);
    pts.push(`${(x0 + t * len).toFixed(1)},${y.toFixed(1)}`);
  }
  return pts;
}

function build() {
  const pts: string[] = [`0,${V_ZERO}`];
  const turnOns: number[] = [];
  let x = 0;
  let y = V_ZERO;
  for (const c of cycles) {
    pts.push(...chargeCurve(x, y, c.charge));
    x += c.charge;
    turnOns.push(x);
    x += c.run;
    y = V_OFF;
    pts.push(`${x},${y}`);
  }
  // Charge partway up again to the right edge.
  const rest = W - x;
  const k = 3;
  const steps = 16;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const yy = y - (y - V_ON) * 0.7 * ((1 - Math.exp(-k * t)) / (1 - Math.exp(-k)));
    pts.push(`${(x + t * rest).toFixed(1)},${yy.toFixed(1)}`);
  }
  const line = `M${pts.join(' L')}`;
  const area = `${line} L${W},${H} L0,${H} Z`;
  // Path progress is roughly proportional to x, so time ≈ x / W.
  const bursts = turnOns.map((tx) => Math.round((tx / W) * BOOT_MS));
  // Where the trace ends, as a fraction of the height, for the live marker.
  const head = Number(pts[pts.length - 1].split(',')[1]) / H;
  return { line, area, bursts, head };
}

export const trace = build();

export function PowerTrace() {
  return (
    <figure className="trace" aria-hidden="true" style={{ margin: 0 }}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
        <line className="threshold" x1="0" x2={W} y1={V_ON} y2={V_ON} />
        <line className="threshold" x1="0" x2={W} y1={V_OFF} y2={V_OFF} />
        <g className="signal">
          <path className="area" d={trace.area} />
          <path className="line" d={trace.line} />
        </g>
      </svg>
      <span className="trace-head" style={{ top: `${trace.head * 100}%` }} />
    </figure>
  );
}

export function TraceLegend() {
  return (
    <p className="trace-legend wrap">
      <span>Capacitor voltage on a batteryless sensor: charge, run, checkpoint, repeat.</span>
      <span className="hide-sm">Upper line: turn-on. Lower line: turn-off.</span>
    </p>
  );
}
