export type Publication = {
  year: number;
  title: string;
  authors: string; // write your name exactly as in `profile.name` so it gets highlighted
  venue: string;
  href?: string;
};

// From the academic CV. Newest first.
export const publications: Publication[] = [
  {
    year: 2025,
    title: 'PAIL: Predictable and Adaptive Intermittent Lifecycling for Robust Coordination Between Batteryless Systems',
    authors: 'V. Narayanan, M. Gshash, Vishal Deep, M. Wymore, D. Qiao, N. M. Neihart, H. Duwe',
    venue: 'IEEE PerCom 2025',
  },
  {
    year: 2024,
    title: 'HANNA: Harvesting-Aware Neural Network Architecture Search for Batteryless Intermittent Devices',
    authors: 'R. Sahu, Vishal Deep, H. Duwe',
    venue: 'IEEE IPCCC 2024',
  },
  {
    year: 2024,
    title: 'Lure: A Simulator for Networks of Batteryless Intermittent Nodes',
    authors: 'M. Wymore, R. Sahu, T. Ruminski, Vishal Deep, M. Ambourn, G. Ling, V. Narayanan, W. Asiedu, D. Qiao, H. Duwe',
    venue: 'Performance Evaluation, vol. 166',
  },
  {
    year: 2023,
    title: 'No Battery, No Problem: Challenges and Opportunities in Batteryless Intermittent Networks',
    authors: 'S. Fu, V. Narayanan, M. L. Wymore, Vishal Deep, H. Duwe, D. Qiao',
    venue: 'Journal of Communications and Networks, vol. 25, no. 6',
  },
  {
    year: 2022,
    title: 'Toward a Shared Sense of Time for a Network of Batteryless, Intermittently-powered Nodes',
    authors: 'Vishal Deep, M. L. Wymore, D. Qiao, H. Duwe',
    venue: 'IEEE IPCCC 2022',
  },
  {
    year: 2021,
    title: 'Experimental Study of Lifecycle Management Protocols for Batteryless Intermittent Communication',
    authors: 'Vishal Deep, M. L. Wymore, A. A. Aurandt, V. Narayanan, S. Fu, H. Duwe, D. Qiao',
    venue: 'IEEE MASS 2021',
  },
  {
    year: 2020,
    title: 'HARC: A Heterogeneous Array of Redundant Persistent Clocks for Batteryless, Intermittently-powered Systems',
    authors: 'Vishal Deep, V. Narayanan, M. Wymore, D. Qiao, H. Duwe',
    venue: 'IEEE RTSS 2020',
  },
  {
    year: 2020,
    title: 'Lifecycle Management Protocols for Batteryless, Intermittent Sensor Nodes',
    authors: 'M. L. Wymore, Vishal Deep, V. Narayanan, H. Duwe, D. Qiao',
    venue: 'IEEE IPCCC 2020',
  },
  {
    year: 2019,
    title: 'Revisiting Time Remanence Clocks for Energy Harvesting Wireless Sensor Nodes',
    authors: 'Vishal Deep, A. Mishra, D. Qiao, H. Duwe',
    venue: 'ACM ENSsys 2019',
  },
  {
    year: 2017,
    title: 'Efficient IEEE 802.15.4 ZigBee Standard Hardware Design for IoT Applications',
    authors: 'Vishal Deep, T. Elarabi',
    venue: 'ICSigSys 2017',
  },
  {
    year: 2017,
    title: 'HEVC/H.265 vs. VP9 State-of-the-Art Video Coding Comparison for HD and UHD Applications',
    authors: 'Vishal Deep, T. Elarabi',
    venue: 'IEEE CCECE 2017',
  },
  {
    year: 2016,
    title: 'Orientation and Displacement Detection for Smartphone Device Based IMUs',
    authors: 'A. Suprem, Vishal Deep, T. Elarabi',
    venue: 'IEEE Access, vol. 5',
  },
  {
    year: 2016,
    title: 'Write Latency Reduction Techniques of State-of-the-Art Phase Change Memory',
    authors: 'Vishal Deep, T. Elarabi',
    venue: 'European Modelling Symposium 2016',
  },
  {
    year: 2016,
    title: 'Big Data Analytics Concepts and Management Techniques',
    authors: 'T. Elarabi, B. Sharma, K. Pahwa, Vishal Deep',
    venue: 'ICICT 2016',
  },
  {
    year: 2015,
    title: 'Design and Simulation of State-of-Art ZigBee Transmitter for IoT Wireless Devices',
    authors: 'T. Elarabi, Vishal Deep, C. K. Rai',
    venue: 'IEEE ISSPIT 2015',
  },
];
