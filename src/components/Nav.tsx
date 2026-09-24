import { profile } from '../content/profile';
import { ThemeToggle } from './ThemeToggle';

export function Nav() {
  return (
    <nav className="nav" aria-label="Main">
      <div className="wrap">
        <a className="nav-name" href="#top">
          {profile.name}
        </a>
        <ul>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li className="hide-sm">
            <a href="#publications">Publications</a>
          </li>
          <li>
            <a href={profile.cv}>CV</a>
          </li>
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
