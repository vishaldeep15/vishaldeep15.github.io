import { profile } from '../content/profile';

export function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="wrap">
        <h2 className="footer-title">Get in touch</h2>
        <p className="lead">
          Open to conversations about embedded systems roles, low-power firmware and research collaborations.
        </p>
        <a className="contact-link" href={profile.links.linkedin}>
          Message me on LinkedIn
        </a>
        <div className="footer-base">
          <ul className="footer-links">
            <li>
              <a href={profile.links.github}>GitHub</a>
            </li>
            <li>
              <a href={profile.links.scholar}>Google Scholar</a>
            </li>
            <li>
              <a href={profile.cv} download>
                Résumé (PDF)
              </a>
            </li>
          </ul>
          <p className="colophon">
            © {new Date().getFullYear()} {profile.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
