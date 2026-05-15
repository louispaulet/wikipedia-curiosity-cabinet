import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { pickRabbitHole, similarityScore } from '../lib/atlas.js';

const center = { x: 50, y: 50 };
const nextRingRadius = 29;
const previewRingRadius = 45;
const previewsPerNextHop = 3;
const tierStyles = {
  current: {
    radius: 11.5,
    fill: 'rgba(200,167,107,0.95)',
    stroke: 'rgba(96,71,31,0.88)',
    strokeWidth: 0.75,
    fontSize: 2.35,
    opacity: 1,
    labelLength: 23,
  },
  next: {
    radius: 6.9,
    fill: 'rgba(255,253,246,0.95)',
    stroke: 'rgba(49,95,125,0.78)',
    strokeWidth: 0.5,
    fontSize: 1.85,
    opacity: 0.86,
    labelLength: 17,
  },
  preview: {
    radius: 2.6,
    fill: 'rgba(246,239,221,0.9)',
    stroke: 'rgba(141,106,54,0.55)',
    strokeWidth: 0.28,
    fontSize: 1.08,
    opacity: 0.56,
    labelLength: 11,
  },
};

const truncateLabel = (value, maxLength) =>
  value.length > maxLength ? `${value.slice(0, maxLength - 3)}...` : value;

const polarPoint = (angle, radius) => ({
  x: center.x + Math.cos(angle) * radius,
  y: center.y + Math.sin(angle) * radius,
});

export const GraphExplorer = ({ atlas, initialFocusedId }) => {
  const [focusedId, setFocusedId] = useState(initialFocusedId ?? atlas.articles[0]?.id);
  const sectionRef = useRef(null);

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
    const nextArticles = relatedIds
      .map((id) => atlas.articleById.get(id))
      .filter(Boolean)
      .slice(0, 8);

    const blockedPreviewIds = new Set([focusedArticle.id, ...nextArticles.map((article) => article.id)]);
    const previewArticles = [];
    nextArticles.forEach((parent) => {
      const parentRelatedIds = atlas.relatedById.get(parent.id) ?? [];
      let parentPreviewCount = 0;
      const parentPreviewIds = new Set();

      const addParentPreview = (candidate) => {
        if (!candidate || blockedPreviewIds.has(candidate.id)) return;
        if (parentPreviewIds.has(candidate.id)) return;

        previewArticles.push({
          article: candidate,
          parentId: parent.id,
          parentPreviewIndex: parentPreviewCount,
        });
        parentPreviewIds.add(candidate.id);
        parentPreviewCount += 1;
      };

      for (const candidateId of parentRelatedIds) {
        addParentPreview(atlas.articleById.get(candidateId));

        if (parentPreviewCount === previewsPerNextHop) break;
      }

      if (parentPreviewCount < previewsPerNextHop) {
        const fallbackCandidates = atlas.articles
          .filter((candidate) => !blockedPreviewIds.has(candidate.id) && !parentPreviewIds.has(candidate.id))
          .sort((left, right) => similarityScore(parent, right) - similarityScore(parent, left));

        for (const candidate of fallbackCandidates) {
          addParentPreview(candidate);

          if (parentPreviewCount === previewsPerNextHop) break;
        }
      }
    });

    const currentNode = {
      nodeId: focusedArticle.id,
      article: focusedArticle,
      x: center.x,
      y: center.y,
      tier: 'current',
    };
    const nextNodes = nextArticles.map((article, index) => {
      const angle = -Math.PI / 2 + (index / nextArticles.length) * Math.PI * 2;
      const point = polarPoint(angle, nextRingRadius);
      return {
        nodeId: article.id,
        article,
        ...point,
        angle,
        tier: 'next',
      };
    });

    const nextNodeById = new Map(nextNodes.map((node) => [node.article.id, node]));
    const previewNodes = previewArticles
      .map(({ article, parentId, parentPreviewIndex }) => {
        const parent = nextNodeById.get(parentId);
        if (!parent) return null;

        const fanOffset = (parentPreviewIndex - (previewsPerNextHop - 1) / 2) * 0.115;
        const point = polarPoint(
          parent.angle + fanOffset,
          previewRingRadius + (parentPreviewIndex % 2) * 2.4,
        );

        return {
          nodeId: `${parentId}-${article.id}`,
          article,
          parentId,
          ...point,
          tier: 'preview',
        };
      })
      .filter(Boolean);

    const nodes = [currentNode, ...nextNodes, ...previewNodes];
    const nextNodeByArticleId = new Map(nextNodes.map((node) => [node.article.id, node]));
    const nextEdges = nextNodes.map((node) => ({
      source: currentNode,
      target: node,
      tier: 'next',
    }));
    const previewEdges = previewNodes
      .map((node) => ({
        source: nextNodeByArticleId.get(node.parentId),
        target: node,
        tier: 'preview',
      }))
      .filter((edge) => edge.source && edge.target);

    return { nodes, edges: [...previewEdges, ...nextEdges] };
  }, [atlas, focusedArticle]);

  const focusArticle = (id) => {
    setFocusedId(id);
    window.requestAnimationFrame(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const nextRabbitHole = () => {
    const next = pickRabbitHole(focusedArticle, atlas);
    if (next) focusArticle(next.id);
  };

  return (
    <section ref={sectionRef} className="scroll-mt-24 paper-panel p-5 sm:p-6">
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
          <svg viewBox="0 0 100 100" className="h-[30rem] w-full">
            <defs>
              <linearGradient id="graphEdge" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(141,106,54,0.35)" />
                <stop offset="100%" stopColor="rgba(49,95,125,0.72)" />
              </linearGradient>
              <linearGradient id="graphPreviewEdge" x1="0%" x2="100%" y1="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(141,106,54,0.26)" />
                <stop offset="100%" stopColor="rgba(49,95,125,0.4)" />
              </linearGradient>
            </defs>
            {graph.edges.map((edge, index) => (
              <line
                key={`${edge.source.nodeId}-${edge.target.nodeId}-${index}`}
                x1={edge.source.x}
                y1={edge.source.y}
                x2={edge.target.x}
                y2={edge.target.y}
                stroke={edge.tier === 'preview' ? 'url(#graphPreviewEdge)' : 'url(#graphEdge)'}
                strokeOpacity={edge.tier === 'preview' ? '0.52' : '0.78'}
                strokeWidth={edge.tier === 'preview' ? '0.22' : '0.42'}
              />
            ))}
            {graph.nodes.map((node) => (
              <g
                key={node.nodeId}
                onClick={() => focusArticle(node.article.id)}
                role="button"
                tabIndex={0}
                aria-label={`Focus ${node.article.title}`}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    focusArticle(node.article.id);
                  }
                }}
                className="cursor-pointer"
              >
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={tierStyles[node.tier].radius}
                  fill={tierStyles[node.tier].fill}
                  stroke={tierStyles[node.tier].stroke}
                  strokeWidth={tierStyles[node.tier].strokeWidth}
                />
                <text
                  x={node.x}
                  y={node.y - tierStyles[node.tier].radius - 1.4}
                  textAnchor="middle"
                  fontSize={tierStyles[node.tier].fontSize}
                  fill="#24303a"
                  opacity={tierStyles[node.tier].opacity}
                >
                  {truncateLabel(node.article.title, tierStyles[node.tier].labelLength)}
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
            <p className="archive-label">Next-hop records</p>
            <div className="mt-4 grid gap-2">
              {(atlas.relatedById.get(focusedArticle.id) ?? []).slice(0, 6).map((id) => {
                const article = atlas.articleById.get(id);
                if (!article) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => focusArticle(id)}
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
