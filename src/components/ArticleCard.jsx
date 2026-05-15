import { Link } from 'react-router-dom';
import { scoreAverage } from '../lib/atlas.js';

const Tag = ({ children }) => (
  <span className="catalog-pill">
    {children}
  </span>
);

export const ArticleCard = ({ article, relatedCount = 0, compact = false }) => {
  return (
    <Link
      to={`/article/${article.id}`}
      className="group block h-full border border-stone-300 bg-paper-50 p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-atlas-blue hover:shadow-paper"
    >
      <div className="flex items-start justify-between gap-4 border-b border-stone-200 pb-3">
        <div>
          <div className="archive-label">{article.tags[0]}</div>
          <h3 className="mt-1 font-article text-2xl leading-tight text-atlas-link group-hover:underline">
            {article.title}
          </h3>
        </div>
        <div className="border border-stone-300 bg-paper-100 px-2 py-1 text-xs text-ink-600">
          {Math.round(scoreAverage(article.scores))}
        </div>
      </div>

      <p className={`mt-3 text-sm leading-6 text-ink-800 ${compact ? 'max-h-[4.5rem] overflow-hidden' : ''}`}>
        {article.hook}
      </p>
      {!compact ? (
        <>
          <p className="mt-3 max-h-28 overflow-hidden text-sm leading-7 text-ink-600">
            {article.summary}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {article.tags.slice(0, 4).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </>
      ) : null}
      <div className="mt-4 flex items-center justify-between border-t border-stone-200 pt-3 text-[11px] uppercase tracking-[0.18em] text-ink-600">
        <span>{relatedCount} see also</span>
        <span className="text-atlas-link">Open record</span>
      </div>
    </Link>
  );
};
