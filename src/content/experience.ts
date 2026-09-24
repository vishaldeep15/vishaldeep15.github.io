export type Role = {
  start: string;
  end: string;
  title: string;
  org: string;
  place?: string;
  points: string[];
};

// Newest first.
export const experience: Role[] = [
  {
    start: 'Jan 2025',
    end: 'Present',
    title: 'Embedded Software Engineer',
    org: 'Lennox International, Product Development & Research',
    place: 'Dallas, TX',
    points: [
      'Led the twin EBM Direct+ blower and Modbus auto-addressing features for commercial HVAC units, from design documents through unit testing and system integration, to meet DoE efficiency requirements.',
      'Built the Refrigerant Charge Assistant algorithm for the next-generation S40 smart thermostat, automating 80% of the refrigerant charging process.',
      'Contributed energy-optimized firmware to Lennox’s entry in the DoE Cold Climate Heat Pump Technology Challenge (Round 1 winner).',
      'Wrote unit tests in GoogleTest and integration tests with a custom test application, cutting the defect rate by 20%.',
      'Evaluated and brought agentic AI development tools into the team’s firmware build and test pipeline.',
    ],
  },
  {
    start: 'Aug 2018',
    end: 'Aug 2024',
    title: 'Research Assistant',
    org: 'Iowa State University',
    place: 'Ames, IA',
    points: [
      'Designed HARC, a persistent clock for batteryless MSP430 nodes that keeps time within 10% across power failures (IEEE RTSS 2020).',
      'Led development of LEASST, the first multi-node time synchronization protocol for batteryless networks, reducing synchronization error 9× on a 50-node network.',
      'Integrated an MSP430 with a CC1352R SensorTag (ARM Cortex-M4F), raising communication throughput by 30%.',
      'Built a Raspberry Pi and UART data-logging setup that cut data collection and analysis time by 60%.',
      'Mentored undergraduate senior design teams; half of their projects were selected for industry conference presentations.',
    ],
  },
  {
    start: 'Feb 2017',
    end: 'Aug 2017',
    title: 'Embedded Systems Programmer',
    org: 'DPS Telecom',
    place: 'Fresno, CA',
    points: [
      'Wrote remote-monitoring firmware in C/C++ for PIC32 microcontrollers, reducing device downtime by 15%.',
      'Found and fixed 80+ firmware bugs in six months with oscilloscopes and logic analyzers, cutting device malfunctions by 40%.',
      'Prototyped an Arduino and stepper-motor antenna rotator that cut EMI test time by 40%.',
    ],
  },
  {
    start: 'Jan 2015',
    end: 'Dec 2016',
    title: 'Research and Teaching Assistant',
    org: 'California State University, Fresno',
    place: 'Fresno, CA',
    points: [
      'Developed a GPS/IMU sensor-fusion algorithm that estimates a phone’s route where GPS drops out (IEEE Access, 39 citations).',
      'Ran the Computer Architecture lab and supported students on Verilog assignments.',
    ],
  },
];

export type Degree = { year: string; degree: string; school: string; note?: string };

export const education: Degree[] = [
  {
    year: '2024',
    degree: 'Ph.D., Computer Engineering',
    school: 'Iowa State University',
    note: 'Dissertation: Establishing Time in Batteryless Intermittently-powered Sensor Nodes',
  },
  {
    year: '2016',
    degree: 'M.S., Computer Engineering',
    school: 'California State University, Fresno',
    note: 'Thesis: Realization of State-of-the-Art Intra-Prediction in HEVC',
  },
  { year: '2013', degree: 'M.Tech., Microelectronics and VLSI Design', school: 'Kurukshetra University' },
  { year: '2011', degree: 'B.Tech., Computer Engineering', school: 'Kurukshetra University' },
];
