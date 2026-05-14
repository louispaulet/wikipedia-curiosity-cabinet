# AGENTS.md instructions for /Users/louispaulet/Projects/wikipedia-curiosity-cabinet

<INSTRUCTIONS>
Please always commit and push completed work for this repository.

Project context:
- This is a static React + Vite app for curated weird Wikipedia pages, collections, and graph-based rabbit holes.
- `src/App.jsx` contains the routed UI: home, collection, article, and graph pages.
- `src/lib/atlas.js` builds related-page links, rabbit-hole selection, trail generation, and shared scoring/similarity helpers.
- `scripts/build-data.mjs` generates `public/data/atlas.json` from the seed data at build time.
- `src/data/seeds.js` is the source of truth for article and collection content.
- `src/styles.css` defines the global dark theme and background treatment.
- `src/main.jsx` wires React, the router, and the global stylesheet.
- `public/data/atlas.json` is generated output and should generally not be edited by hand.
- Keep the app fully static and GitHub Pages friendly; avoid adding backend dependencies unless absolutely necessary.
- Prefer updates that preserve the editorial/curatorial tone of the site.
</INSTRUCTIONS>
