// Everything about you that appears in the hero, About and footer.

export const profile = {
  name: 'Vishal Deep',
  role: 'Embedded software engineer at Lennox International',
  background: 'PhD in batteryless computing from Iowa State',
  summary:
    'I write firmware for commercial HVAC units and smart thermostats, and research how batteryless sensors keep time.',
  location: 'Dallas, TX',
  links: {
    linkedin: 'https://www.linkedin.com/in/vishaldeep15',
    github: 'https://github.com/vishaldeep15',
    scholar: 'https://scholar.google.com/citations?user=6FT4rHUAAAAJ&hl=en',
    webOfScience: 'https://www.webofscience.com/wos/author/record/GWN-0879-2022',
  },
  // The "Download CV" button. Keep contact details (email, phone) out of this PDF.
  cv: '/cv/Vishal_Deep_Resume.pdf',
  headshot: '/images/headshot.jpg',
  about: [
    'I work on the Product Development & Research team at Lennox, writing embedded C/C++ for commercial rooftop units and the S40 smart thermostat. Most of my week goes to turning control algorithms into firmware that is tested, documented and easy to integrate.',
    'My PhD at Iowa State, advised by Dr. Henry Duwe, was about sensor nodes that run only on harvested energy and lose power many times a second. I designed clocks that survive those power failures and protocols that let networks of these nodes agree on the time. That work taught me to treat every microamp, every byte of non-volatile memory and every reboot as part of the design.',
    'Before the PhD, I wrote firmware for remote-monitoring equipment at DPS Telecom and did a master’s at Fresno State.',
  ],
};
