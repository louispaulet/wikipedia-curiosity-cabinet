# Strange Wikipedia Atlas

Curated weird Wikipedia pages, editorial collections, and semantic rabbit holes.

## What it is

This is a static React + Tailwind app that turns unusual Wikipedia pages into a browsable atlas:

- themed editorial collections
- article cards with short hooks and summaries
- a semantic graph explorer
- rabbit-hole and themed trail generation

The site is built from static JSON generated at build time and is designed to deploy to GitHub Pages.

## Local workflow

Use the Makefile for the common tasks:

- `make up` starts the local dev server on `http://127.0.0.1:5173`
- `make kill` stops the local dev server started by `make up`
- `make test` runs the production build as the project smoke test
- `make build` generates the atlas JSON and builds the production bundle
- `make deploy` builds and publishes `dist/` to the `gh-pages` branch

## Deployment

The site is configured for GitHub Pages with the custom domain:

- `wunderwiki.thefrenchartist.dev`

The domain is stored in [`public/CNAME`](./public/CNAME), so it is copied into the build output and published with the site.

## Notes

- The build script precomputes related pages into `public/data/atlas.json`.
- There is no backend or authentication layer in the MVP.
- The app is intentionally static so it can live well on GitHub Pages.
