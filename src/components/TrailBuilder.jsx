import { useMemo, useState } from 'react';
import { buildTrail, pickTheme } from '../lib/atlas.js';
import { ArticleCard } from './ArticleCard.jsx';

export const TrailBuilder = ({ atlas }) => {
  const [startThemeId, setStartThemeId] = useState('weird-science');
  const [endThemeId, setEndThemeId] = useState('political-scandal');
  const [trailLength, setTrailLength] = useState(7);

  const trail = useMemo(
    () => buildTrail(atlas, pickTheme(startThemeId), pickTheme(endThemeId), trailLength),
    [atlas, startThemeId, endThemeId, trailLength],
  );

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-glow sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Path generation</p>
          <h2 className="mt-2 font-display text-3xl text-white">Build a 7-stop trail</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Pick a start mood and a destination mood. The atlas will thread a route through
            strange-but-related pages and keep the journey coherent.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <select
            value={startThemeId}
            onChange={(event) => setStartThemeId(event.target.value)}
            className="rounded-full border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none"
          >
            {atlas.themes.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.label}
              </option>
            ))}
          </select>
          <select
            value={endThemeId}
            onChange={(event) => setEndThemeId(event.target.value)}
            className="rounded-full border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none"
          >
            {atlas.themes.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.label}
              </option>
            ))}
          </select>
          <select
            value={trailLength}
            onChange={(event) => setTrailLength(Number(event.target.value))}
            className="rounded-full border border-white/10 bg-slate-950 px-4 py-3 text-sm text-slate-100 outline-none"
          >
            {[5, 6, 7, 8].map((value) => (
              <option key={value} value={value}>
                {value} stops
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {trail.map((article) => (
            <ArticleCard key={article.id} article={article} compact relatedCount={article.relatedIds.length} />
          ))}
        </div>
      </div>
    </section>
  );
};
