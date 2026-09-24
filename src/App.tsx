import { MotionConfig } from 'motion/react';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Projects } from './components/Projects';
import { Publications } from './components/Publications';
import { Recognition } from './components/Recognition';
import { Specs } from './components/Specs';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Nav />
      <Hero />
      <main id="main">
        <Experience />
        <Education />
        <Projects />
        <Specs />
        <Publications />
        <Recognition />
        <About />
      </main>
      <Footer />
    </MotionConfig>
  );
}
