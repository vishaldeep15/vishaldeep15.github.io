import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const media = () => window.matchMedia('(prefers-color-scheme: dark)');

function current(): Theme {
  const set = document.documentElement.dataset.theme;
  if (set === 'light' || set === 'dark') return set;
  return media().matches ? 'dark' : 'light';
}

// Follows the OS setting until the visitor picks a theme; the choice is
// remembered. index.html applies a saved choice before first paint.
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(current);

  useEffect(() => {
    const mq = media();
    const onChange = () => setTheme(current());
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage blocked: the choice lasts for this visit only.
    }
    setTheme(next);
  };

  const next = theme === 'dark' ? 'light' : 'dark';
  return (
    <button className="theme-toggle" type="button" onClick={toggle} aria-label={`Switch to ${next} theme`}>
      {theme === 'dark' ? <SunIcon size={20} aria-hidden /> : <MoonIcon size={20} aria-hidden />}
    </button>
  );
}
