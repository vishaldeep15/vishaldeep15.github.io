export type Item = { year: string; text: string };

// Newest first.
export const awards: Item[] = [
  { year: '2023', text: 'Selected presenter, ACM SIGBED Student Research Competition, ESWEEK, Hamburg' },
  { year: '2022', text: 'Runner-up, Best PhD Forum Presentation, ACM SenSys, Boston' },
  { year: '2016', text: 'Graduate Dean’s Medal, California State University, Fresno' },
  { year: '2016', text: 'Outstanding Graduate Student, Lyles College of Engineering' },
];

export const service: Item[] = [
  { year: '2025-26', text: 'Reviewer, IEEE Internet of Things Journal, ACM Transactions on Embedded Computing Systems, IEEE Transactions on Consumer Electronics, IEEE Access' },
  { year: '2024-25', text: 'Technical Program Committee, ACM ENSsys (co-located with SenSys)' },
  { year: '2023-24', text: 'Reviewer, IEEE INFOCOM, ACM MobiCom and ACM SenSys' },
];
