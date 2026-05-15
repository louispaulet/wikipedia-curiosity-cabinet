import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { pickRabbitHole, similarityScore, scoreAverage } from '../lib/atlas.js';

const nodeRadius = (article) => 18 + scoreAverage(article.scores) / 7;

export const GraphExplorer = ({ atlas, initialFocusedId }) => {
  const [focusedId, setFocusedId] = useState(initialFocusedId ?? atlas.articles[0]?.id);

  useEffect(() => {
    if (initialFocusedId && atlas.articleById.has(initialFocusedId)) {
      setFocusedId(initialFocusedId);
    }
  }, [atlas, initialFocusedId]);

  const focusedArticle = atlas.articleById.get(focusedId) ?? atlas.articles[0];

  const graph = useMemo(() => {
    if (!focusedArticle) {
      return { nodes: [], edges: [] };
    }

    const relatedIds = atlas.relatedById.get(focusedArticle.id) ?? [];
    const neighbors = relatedIds
      .map((id) => atlas.articleById.get(id))
      .filter(Boolean)
      .slice(0, 10);

    const nodes = [
      focusedArticle,
      ...neighbors,
      ...atlas.articles
        .filter((article) => article.id !== focusedArticle.id && !relatedIds.includes(article.id))
        .sort((left, right) => similarityScore(focusedArticle, right) - similarityScore(focusedArticle, left))
        .slice(0, 6),
    ];

    const center = { x: 50, y: 48 };
    const ringRadius = 28;

    const positioned = nodes.map((article, index) => {
      if (index === 0) return { article, x: center.x, y: center.y, focus: true };
      const angle = (index / (nodes.length - 1)) * Math.PI * 2;
      const distance = ringRadius + (index % 3) * 6;
      return {
        article,
        x: center.x + Math.cos(angle) * distance,
        y: center.y + Math.sin(angle) * distance,
      };
    });

    const byId = new Map(positioned.map((item) => [item.article.id, item]));
    const edges = relatedIds
      .slice(0, 8)
      .map((id) => ({
        source: byId.get(focusedArticle.id),
        target: byId.get(id),
      }))
      .filter((edge) => edge.source && edge.target);

    return { nodes: positioned, edges };
  }, [atlas, focusedArticle]);

  const nextRabbitHole = () => {
    const next = pickRabbitHole(focusedArticle, atlas);
    if (next) setFocusedId(next.id);
  };

  return (
    <section className="paper-panel p-5 sm:p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="archive-label">Relationship map</p>
          <h2 className="mt-2 font-article text-3xl text-ink-800">Browse the atlas by neighborhood</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-600">
            The graph is built from shared tags, collection overlap, and score similarity. Click a node
            or let the route button jump to a nearby page that still belongs.
          </p>
        </div>
        <button
          type="button"
          onClick={nextRabbitHole}
          className="border border-sepia-500 bg-sepia-500 px-4 py-2 text-sm font-semibold text-paper-50 transition hover:bg-sepia-700"
        >
          Trace another link
        </button>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1.6fr_0.9fr]">
        <div className="border border-stone-300 bg-paper-100 p-3">
          <svg viewBox="0 0 100 100" className="h-[28rem] w-full">
            <defs>
              <linearGradient id="graphEdge" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(141,106,54,0.35)" />
                <stop offset="100%" stopColor="rgba(49,95,125,0.72)" />
              </linearGradient>
            </defs>
            {graph.edges.map((edge, index) => (
              <line
                key={`${edge.source.article.id}-${edge.target.article.id}-${index}`}
                x1={edge.source.x}
                y1={edge.source.y}
                x2={edge.target.x}
                y2={edge.target.y}
                stroke="url(#graphEdge)"
                strokeOpacity="0.7"
                strokeWidth="0.3"
              />
            ))}
            {graph.nodes.map((node) => (
              <g
                key={node.article.id}
                onClick={() => setFocusedId(node.article.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setFocusedId(node.article.id);
                  }
                }}
                className="cursor-pointer"
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={node.focus ? nodeRadius(node.article) / 1.2 : nodeRadius(node.article) / 1.8}
                  fill={node.focus ? 'rgba(200,167,107,0.92)' : 'rgba(255,253,246,0.9)'}
                  stroke={node.focus ? 'rgba(96,71,31,0.85)' : 'rgba(49,95,125,0.7)'}
                  strokeWidth="0.5"
                />
                <text
                  x={node.x}
                  y={node.y + (node.focus ? -5.5 : -4)}
                  textAnchor="middle"
                  fontSize="1.9"
                  fill="#24303a"
                  opacity={node.focus ? 1 : 0.75}
                >
                  {node.article.title.slice(0, 16)}
                </text>
              </g>
            ))}
          </svg>
        </div>

        <aside className="grid gap-4">
          <div className="border border-stone-300 bg-paper-50 p-5">
            <p className="archive-label">Focused record</p>
            <h3 className="mt-2 font-article text-2xl text-atlas-link">{focusedArticle.title}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-600">{focusedArticle.hook}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {focusedArticle.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="catalog-pill"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link
              to={`/article/${focusedArticle.id}`}
              className="mt-5 inline-flex border border-stone-400 bg-paper-50 px-4 py-2 text-sm font-semibold text-ink-800 hover:border-atlas-blue hover:text-atlas-blue"
            >
              Open record
            </Link>
          </div>

          <div className="border border-stone-300 bg-paper-100 p-5">
            <p className="archive-label">Nearby records</p>
            <div className="mt-4 grid gap-2">
              {(atlas.relatedById.get(focusedArticle.id) ?? []).slice(0, 6).map((id) => {
                const article = atlas.articleById.get(id);
                if (!article) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setFocusedId(id)}
                    className="border border-stone-300 bg-paper-50 px-4 py-3 text-left text-sm text-ink-800 transition hover:border-atlas-blue"
                  >
                    <div className="font-semibold text-atlas-link">{article.title}</div>
                    <div className="mt-1 max-h-10 overflow-hidden text-xs leading-5 text-ink-600">
                      {article.hook}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
