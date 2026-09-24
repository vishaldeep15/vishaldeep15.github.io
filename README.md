# vishaldeep15.github.io

Personal portfolio site. React, Vite and TypeScript, deployed to GitHub Pages.

## Editing content

All text lives in `src/content/`. You shouldn't need to touch components to update the site.

| File | What it holds |
|---|---|
| `profile.ts` | Name, headline, summary, links, About text |
| `experience.ts` | Jobs (newest first) and education |
| `projects.ts` | Selected work. The first entry is shown as featured |
| `publications.ts` | Papers, grouped by year automatically |
| `skills.ts` | The specifications table |

Files served as-is go in `public/`: `cv.pdf`, `images/headshot.jpg`, `images/projects/*`, `og-image.png` (1200×630, used for link previews).

## Running locally

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
```

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to https://vishaldeep15.github.io.
One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
