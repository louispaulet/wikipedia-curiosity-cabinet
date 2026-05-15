import { useLayoutEffect } from 'react';
import { Navigate, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArticleCard } from './components/ArticleCard.jsx';
import { GraphExplorer } from './components/GraphExplorer.jsx';
import { PageShell } from './components/PageShell.jsx';
import { RabbitHoleButton } from './components/RabbitHoleButton.jsx';
import { ScoreMeter } from './components/ScoreMeter.jsx';
import { TrailBuilder } from './components/TrailBuilder.jsx';
import { useAtlas } from './hooks/useAtlas.js';
import { pickRabbitHole } from './lib/atlas.js';

const heroStats = [
  ['Curated records', '67 sourced pages'],
  ['Relationship map', 'semantic neighborhoods'],
  ['Field routes', 'themed rabbit holes'],
];

const backShelfCollectionIds = ['small-print-curiosities', 'haunted-footnotes', 'afterimage-files', 'shadow-dossiers'];
const backShelfArticleIds = [
  'mellified-man',
  'cadaver-synod',
  'god-helmet',
  'monster-study',
  'island-of-the-dolls',
  'bhangarh-fort',
  'green-children-of-woolpit',
  'mokele-mbembe',
  'the-hum',
  'phantom-time-conspiracy-theory',
  'shroud-of-turin',
  'the-langley-schools-music-project',
  'dracula-gigas',
  'orchis-simia',
  'red-mercury',
  'disappearance-of-harold-holt',
  'hollow-earth',
  'shag-harbour-ufo-incident',
  'bell-witch',
  'utsuro-bune',
  'mummy-brown',
];

const isBackShelfArticle = (article) =>
  article.collectionIds.some((collectionId) => backShelfCollectionIds.includes(collectionId));

const SectionTitle = ({ eyebrow, title, body }) => (
  <div>
    <p className="archive-label">{eyebrow}</p>
    <h2 className="wiki-rule mt-2 font-article text-3xl text-ink-800 sm:text-4xl">{title}</h2>
    <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-600">{body}</p>
  </div>
);

const HomePage = ({ atlas }) => {
  const navigate = useNavigate();
  const featuredCollections = atlas.collections.slice(0, 4);
  const featuredArticles = atlas.articles.slice(0, 6);
  const backShelfCollections = backShelfCollectionIds
    .map((collectionId) => atlas.collectionById.get(collectionId))
    .filter(Boolean);
  const backShelfArticles = backShelfArticleIds
    .map((articleId) => atlas.articleById.get(articleId))
    .filter(Boolean);
  const strangestArticle = [...atlas.articles].sort(
    (left, right) => right.scores.strangeness - left.scores.strangeness,
  )[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="paper-panel overflow-hidden p-6 sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div>
            <div className="archive-label">
              from the internet cabinet of curiosities
            </div>
            <h1 className="mt-4 max-w-3xl border-b border-stone-300 pb-3 font-article text-5xl leading-none text-ink-800 sm:text-6xl">
              Strange Wikipedia Atlas
            </h1>
            <p className="mt-4 max-w-3xl font-article text-xl leading-8 text-ink-800">
              A selected index of unusual Wikipedia pages with documentary gravity: bizarre legal cases,
              failed utopias, vanished technologies, Cold War oddities, improbable disasters, and source
              pages that feel filed from the edge of the public record.
            </p>
            <p className="field-note mt-5 max-w-3xl">
              Read it like an encyclopedia, wander it like a cabinet, and keep one eye on the marginal notes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <RabbitHoleButton
                label="Open a curious record"
                onClick={() => navigate(`/article/${strangestArticle.id}`)}
              />
              <button
                type="button"
                onClick={() => navigate(`/collections/${atlas.collections[0].slug}`)}
                className="inline-flex items-center justify-center border border-stone-400 bg-paper-50 px-4 py-2 text-sm font-semibold text-ink-800 transition hover:border-atlas-blue hover:text-atlas-blue"
              >
                Browse shelves
              </button>
            </div>
          </div>
          <div className="border border-stone-300 bg-paper-100">
            <div className="border-b border-stone-300 px-4 py-3 font-article text-xl text-ink-800">
              Index notes
            </div>
            {heroStats.map(([label, value]) => (
              <div key={label} className="border-b border-stone-300 px-4 py-4 last:border-b-0">
                <div className="archive-label">{label}</div>
                <div className="mt-1 font-article text-xl text-ink-800">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="paper-panel p-6">
          <SectionTitle
            eyebrow="Featured shelves"
            title="Editorial starting points"
            body="Each collection is arranged like a small exhibition: not random, but curated around a strong narrative shape."
          />
          <div className="mt-6 grid gap-4">
            {featuredCollections.map((collection) => (
              <button
                key={collection.slug}
                type="button"
                onClick={() => navigate(`/collections/${collection.slug}`)}
                className="border border-stone-300 bg-paper-50 p-4 text-left transition hover:border-atlas-blue hover:bg-white"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="archive-label">Collection</div>
                    <div className="mt-1 font-article text-2xl text-atlas-link">{collection.title}</div>
                  </div>
                  <div className="border border-stone-300 bg-paper-100 px-3 py-1 text-xs text-ink-600">
                    {collection.articleIds.length} pages
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-ink-600">{collection.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="paper-panel p-6">
          <SectionTitle
            eyebrow="Selected records"
            title="A few doors into the archive"
            body="Compact editorial summaries, source links, and neighboring pages that open into a cluster."
          />
          <div className="mt-6 grid gap-4">
            {featuredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                compact
                relatedCount={atlas.relatedById.get(article.id)?.length ?? 0}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="paper-panel mt-8 p-6 sm:p-8">
        <SectionTitle
          eyebrow="Marginal shelves"
          title="Small files from the margins"
          body="A quieter set of pages and editorials. They are still connected to the atlas, just filed a little lower in the cabinet."
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {backShelfCollections.map((collection) => (
              <button
                key={collection.slug}
                type="button"
                onClick={() => navigate(`/collections/${collection.slug}`)}
                className="border border-stone-300 bg-paper-100 p-4 text-left transition hover:border-atlas-blue hover:bg-paper-50"
              >
                <div className="archive-label">Marginal shelf</div>
                <div className="mt-1 font-article text-2xl text-atlas-link">{collection.title}</div>
                <p className="mt-3 text-sm leading-6 text-ink-600">{collection.description}</p>
              </button>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {backShelfArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                compact
                relatedCount={atlas.relatedById.get(article.id)?.length ?? 0}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const CollectionPage = ({ atlas, slug }) => {
  const navigate = useNavigate();
  const collection = atlas.collectionBySlug.get(slug);

  if (!collection) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-ink-600 sm:px-6 lg:px-8">
        <h1 className="font-article text-5xl text-ink-800">Collection not found</h1>
      </div>
    );
  }

  const articles = collection.articleIds
    .map((id) => atlas.articleById.get(id))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="paper-panel p-6 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="archive-label">Collection</p>
            <h1 className="wiki-rule mt-2 font-article text-5xl text-ink-800 sm:text-6xl">{collection.title}</h1>
            {backShelfCollectionIds.includes(collection.id) ? (
              <div className="catalog-pill mt-4">
                Marginal shelf
              </div>
            ) : null}
            <p className="mt-4 max-w-3xl font-article text-xl leading-8 text-ink-800">{collection.description}</p>
          </div>
          <RabbitHoleButton onClick={() => navigate('/graph')} label="Open relationship map" />
        </div>
      </section>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
            relatedCount={atlas.relatedById.get(article.id)?.length ?? 0}
          />
        ))}
      </div>
    </div>
  );
};

const ArticlePage = ({ atlas, articleId }) => {
  const navigate = useNavigate();
  const article = atlas.articleById.get(articleId);

  if (!article) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-ink-600 sm:px-6 lg:px-8">
        <h1 className="font-article text-5xl text-ink-800">Page not found</h1>
      </div>
    );
  }

  const relatedArticles = (atlas.relatedById.get(article.id) ?? [])
    .map((id) => atlas.articleById.get(id))
    .filter(Boolean);
  const rabbitHole = pickRabbitHole(article, atlas);
  const backShelf = isBackShelfArticle(article);
  const primaryCollection = article.collectionIds
    .map((collectionId) => atlas.collectionById.get(collectionId))
    .find(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_22rem]">
        <article className="paper-panel p-6 sm:p-8">
          <div className="archive-label">Encyclopedia record</div>
          <h1 className="wiki-rule mt-2 font-article text-5xl text-ink-800 sm:text-6xl">{article.title}</h1>
          {backShelf ? (
            <div className="catalog-pill mt-4">
              Marginal file
            </div>
          ) : null}
          <p className="mt-5 font-article text-xl leading-8 text-ink-800">{article.hook}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-ink-700">{article.summary}</p>
          <div className="field-note mt-6">
            <div className="archive-label">Cabinet note</div>
            <p className="mt-2">{article.whyStrange}</p>
          </div>
          {article.wikipediaUrl ? (
            <div className="mt-6 border border-stone-300 bg-paper-100 p-4">
              <div className="archive-label">Original Wikipedia source</div>
              <a
                href={article.wikipediaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-sm leading-7 underline decoration-atlas-link/30 underline-offset-4 hover:text-sepia-700"
              >
                Open the original Wikipedia source page
              </a>
            </div>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="catalog-pill"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate(`/graph?focus=${article.id}`)}
              className="border border-stone-400 bg-paper-50 px-4 py-2 text-sm font-semibold text-ink-800 hover:border-atlas-blue hover:text-atlas-blue"
            >
              Open in map
            </button>
            {article.wikipediaUrl ? (
              <a
                href={article.wikipediaUrl}
                target="_blank"
                rel="noreferrer"
                className="border border-stone-400 bg-paper-50 px-4 py-2 text-sm font-semibold hover:border-atlas-blue"
              >
                Open source
              </a>
            ) : null}
            {rabbitHole ? (
              <button
                type="button"
                onClick={() => navigate(`/article/${rabbitHole.id}`)}
                className="border border-sepia-500 bg-sepia-500 px-4 py-2 text-sm font-semibold text-paper-50 hover:bg-sepia-700"
              >
                Trace another link
              </button>
            ) : null}
          </div>
        </article>

        <aside className="grid content-start gap-6">
          <ScoreMeter scores={article.scores} />
          <div className="paper-panel p-5">
            <div className="archive-label">See also</div>
            <div className="mt-4 grid gap-3">
              {relatedArticles.slice(0, 6).map((related) => (
                <button
                  key={related.id}
                  type="button"
                  onClick={() => navigate(`/article/${related.id}`)}
                  className="border border-stone-300 bg-paper-50 px-4 py-3 text-left text-sm text-ink-800 transition hover:border-atlas-blue"
                >
                  <div className="font-semibold text-atlas-link">{related.title}</div>
                  <div className="mt-1 max-h-10 overflow-hidden text-xs leading-5 text-ink-600">
                    {related.hook}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => primaryCollection && navigate(`/collections/${primaryCollection.slug}`)}
            className="paper-panel p-5 text-left hover:border-atlas-blue"
          >
            <div className="archive-label">Collection membership</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {article.collectionIds.map((collectionId) => {
                const collection = atlas.collectionById.get(collectionId);
                return collection ? (
                  <span
                    key={collectionId}
                    className="catalog-pill"
                  >
                    {collection.title}
                  </span>
                ) : null;
              })}
            </div>
          </button>
        </aside>
      </section>
    </div>
  );
};

const GraphPage = ({ atlas, searchParams }) => {
  const focus = searchParams.get('focus');
  const startingArticle = focus ? atlas.articleById.get(focus) : atlas.articles[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid gap-6">
        <GraphExplorer atlas={atlas} initialFocusedId={startingArticle?.id} />
        <TrailBuilder atlas={atlas} />
        <div className="paper-panel p-6">
          <SectionTitle
            eyebrow="Route seed"
            title={startingArticle ? startingArticle.title : 'Start anywhere'}
            body="Use the article page to open the relationship map, or use the map itself to keep wandering toward pages that still feel related."
          />
        </div>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);

  return null;
};

const AppContent = ({ atlas }) => {
  return (
    <PageShell atlas={atlas}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage atlas={atlas} />} />
        <Route path="/collections/:slug" element={<CollectionRoute atlas={atlas} />} />
        <Route path="/article/:articleId" element={<ArticleRoute atlas={atlas} />} />
        <Route path="/graph" element={<GraphRoute atlas={atlas} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageShell>
  );
};

const CollectionRoute = ({ atlas }) => {
  const { slug } = useParams();
  return <CollectionPage atlas={atlas} slug={slug} />;
};

const ArticleRoute = ({ atlas }) => {
  const { articleId } = useParams();
  return <ArticlePage atlas={atlas} articleId={articleId} />;
};

const GraphRoute = ({ atlas }) => {
  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  return <GraphPage atlas={atlas} searchParams={searchParams} />;
};

export default function App() {
  const { atlas, loading, error } = useAtlas();

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center px-6 text-center">
        <div>
          <div className="font-article text-5xl text-ink-800">Loading the atlas...</div>
          <p className="mt-3 text-ink-600">Curating records and knitting the map.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid min-h-screen place-items-center px-6 text-center">
        <div className="max-w-2xl border border-rose-400 bg-rose-50 p-8 text-rose-900">
          <div className="font-article text-4xl">Atlas load failed</div>
          <pre className="mt-4 whitespace-pre-wrap text-left text-sm text-rose-800">
            {String(error?.message ?? error)}
          </pre>
        </div>
      </div>
    );
  }

  return <AppContent atlas={atlas} />;
}
