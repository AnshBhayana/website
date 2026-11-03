# Ansh Bhayana — Portfolio

Portfolio and services site for Ansh Bhayana (content strategist, creator and creative producer), built with React + Vite.

## Run locally

```bash
npm install
npm run dev       # http://localhost:5173
```

`npm run build` creates the production site in `dist/`, and `npm run preview` serves that build locally.

## Where to edit

| What                                         | File                          |
| -------------------------------------------- | ----------------------------- |
| Text, stats, links, prices, email            | `src/content.js`              |
| Colours, fonts, spacing, layout              | `src/index.css` (colours are the variables at the top) |
| Page structure of a section                  | `src/components/*.jsx`        |
| Images                                       | `public/assets/`              |
| Browser tab title and SEO description        | `index.html`                  |

To swap an image, replace the file in `public/assets/` (or add a new file and update its path in `src/content.js`).

## Deploy on Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, click **Add New → Project** and import the repository.
3. Vercel detects **Vite** automatically (build command `npm run build`, output directory `dist`). Click **Deploy**.

Every push to the main branch redeploys the site. You can also deploy from the terminal with `npx vercel` (preview) or `npx vercel --prod`.
# Ansh-Bhayana-portfolio
# website
