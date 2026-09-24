export type Project = {
  title: string;
  context: string;
  summary: string;
  stack: string[];
  // Which explanatory diagram to draw (see components/Diagrams.tsx).
  diagram: 'harc' | 'sync' | 'lifecycle' | 'gps';
  link?: { label: string; href: string };
};

// The first project is featured full width, the second gets a wide row,
// and the last two sit side by side.
export const projects: Project[] = [
  {
    title: 'HARC: clocks that survive power failures',
    context: 'PhD research, IEEE RTSS 2020',
    summary:
      'A batteryless sensor loses power constantly, and its clock resets each time. HARC combines several low-power timekeepers of different ranges and precisions so a node can tell how long it was off, keeping time within 10% across outages.',
    stack: ['MSP430', 'Embedded C', 'Energy harvesting', 'Persistent timekeeping'],
    diagram: 'harc',
  },
  {
    title: 'Time synchronization for batteryless networks',
    context: 'PhD research, IEEE IPCCC 2022',
    summary:
      'The first protocol that lets a whole network of intermittently-powered nodes agree on the time. Across a 50-node network it reduced synchronization error 9×.',
    stack: ['Wireless sensor networks', 'Python simulation', 'Protocol design'],
    diagram: 'sync',
  },
  {
    title: 'Lifecycle management for intermittent radios',
    context: 'PhD research, IEEE MASS 2021',
    summary:
      'A design framework for getting two batteryless nodes to be awake at the same time so they can talk at all. An experimental study compared protocols on real hardware; the work has 22+ independent citations.',
    stack: ['CC1352R', 'ARM Cortex-M4F', 'MSP430', 'Low-power radio'],
    diagram: 'lifecycle',
  },
  {
    title: 'Navigation where GPS drops out',
    context: 'Master’s research, IEEE Access',
    summary:
      'A sensor-fusion algorithm that estimates a smartphone’s route indoors and in tunnels from its built-in accelerometer and gyroscope. Cited 39 times.',
    stack: ['IMU sensor fusion', 'MATLAB', 'Android sensors'],
    diagram: 'gps',
  },
];
