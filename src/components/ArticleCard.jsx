import { Link } from 'react-router-dom';
import { getArticleAccent, scoreAverage } from '../lib/atlas.js';

const Tag = ({ children }) => (
  <span className="rounded-full bg-white/8 px-2.5 py-1 text-[11px] uppercase tracking-[0.2em] text-slate-300 ring-1 ring-white/10">
    {children}
  </span>
);

export const ArticleCard = ({ article, relatedCount = 0, compact = false }) => {
  const accent = getArticleAccent(article);

  return (
    <Link
      to={`/article/${article.id}`}
      className="group block overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-amber-300/30 hover:bg-white/[0.07]"
    >
      <div className={`h-1.5 bg-gradient-to-r ${accent}`} />
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.35em] text-amber-200/70">
              {article.tags[0]}
            </div>
            <h3 className="mt-2 font-display text-2xl leading-tight text-white sm:text-[2rem]">
              {article.title}
            </h3>
          </div>
          <div className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-1 text-xs text-slate-300">
            {Math.round(scoreAverage(article.scores))}
          </div>
        </div>

        <p className={`mt-4 text-sm leading-6 text-slate-300 ${compact ? 'max-h-[4.5rem] overflow-hidden' : 'max-h-24 overflow-hidden'}`}>
          {article.hook}
        </p>
        {!compact ? (
          <>
            <p className="mt-4 max-h-28 overflow-hidden text-sm leading-7 text-slate-400">
              {article.summary}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {article.tags.slice(0, 4).map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <div className="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
              <span>{relatedCount} related</span>
              <span className="text-amber-200/80 group-hover:text-white">Open page</span>
            </div>
            {article.wikipediaUrl ? (
              <div className="mt-2 text-xs uppercase tracking-[0.24em] text-slate-500">
                <span className="text-slate-400">Wikipedia:</span>{' '}
                <a
                  href={article.wikipediaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-amber-200/80 underline decoration-amber-200/30 underline-offset-4 hover:text-amber-100"
                >
                  Original page
                </a>
              </div>
            ) : null}
          </>
        ) : (
          <div className="mt-4 flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
            <span>{relatedCount} related</span>
            <span className="text-amber-200/80 group-hover:text-white">Open page</span>
          </div>
        )}
      </div>
    </Link>
  );
};
