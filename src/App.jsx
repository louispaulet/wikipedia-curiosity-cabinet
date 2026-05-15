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
  ['Curated pages', 'hand-selected weirdness'],
  ['Graph links', 'semantic neighborhoods'],
  ['Trails', 'themed rabbit holes'],
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
    <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">{eyebrow}</p>
    <h2 className="mt-2 font-display text-3xl text-white sm:text-4xl">{title}</h2>
    <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{body}</p>
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
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-glow sm:p-10 lg:p-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <div className="inline-flex items-center rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-amber-100">
              the internet’s cabinet of curiosities
            </div>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-none text-white sm:text-7xl">
              Explore the strangest corners of Wikipedia.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              A beautifully curated atlas of bizarre legal cases, failed utopias, vanished technologies,
              Cold War oddities, improbable disasters, and pages that feel too strange to be real.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <RabbitHoleButton
                label="Give me a rabbit hole"
                onClick={() => navigate(`/article/${strangestArticle.id}`)}
              />
              <button
                type="button"
                onClick={() => navigate(`/collections/${atlas.collections[0].slug}`)}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/10"
              >
                Browse collections
              </button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            {heroStats.map(([label, value]) => (
              <div key={label} className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
                <div className="text-xs uppercase tracking-[0.35em] text-slate-400">{label}</div>
                <div className="mt-2 font-display text-2xl text-white">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow">
          <SectionTitle
            eyebrow="Featured collections"
            title="Editorial starting points"
            body="Each collection is designed to feel like a mini exhibition: not random, but curated around a strong narrative shape."
          />
          <div className="mt-6 grid gap-4">
            {featuredCollections.map((collection) => (
              <button
                key={collection.slug}
                type="button"
                onClick={() => navigate(`/collections/${collection.slug}`)}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5 text-left transition hover:border-amber-300/30 hover:bg-white/8"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Collection</div>
                    <div className="mt-2 font-display text-2xl text-white">{collection.title}</div>
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                    {collection.articleIds.length} pages
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{collection.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow">
          <SectionTitle
            eyebrow="Featured pages"
            title="A few doors into the maze"
            body="These articles show the tone of the site: compact editorial summaries, strange context, and neighboring pages that open into a cluster."
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

      <section className="mt-10 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-glow sm:p-8">
        <SectionTitle
          eyebrow="Back shelf"
          title="Little nuggets from the margins"
          body="A quieter shelf of pages and editorials that sit lower on the page by design. They are still connected to the atlas, just a little more tucked away."
        />
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {backShelfCollections.map((collection) => (
              <button
                key={collection.slug}
                type="button"
                onClick={() => navigate(`/collections/${collection.slug}`)}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-left transition hover:border-amber-300/30 hover:bg-white/8"
              >
                <div className="text-xs uppercase tracking-[0.35em] text-slate-500">Back shelf editorial</div>
                <div className="mt-2 font-display text-2xl text-white">{collection.title}</div>
                <p className="mt-3 text-sm leading-6 text-slate-300">{collection.description}</p>
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
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-slate-300 sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl text-white">Collection not found</h1>
      </div>
    );
  }

  const articles = collection.articleIds
    .map((id) => atlas.articleById.get(id))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-glow sm:p-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Collection</p>
            <h1 className="mt-2 font-display text-5xl text-white sm:text-6xl">{collection.title}</h1>
            {backShelfCollectionIds.includes(collection.id) ? (
              <div className="mt-4 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-amber-100">
                Back shelf editorial
              </div>
            ) : null}
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{collection.description}</p>
          </div>
          <RabbitHoleButton onClick={() => navigate('/graph')} label="Take me deeper" />
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
      <div className="mx-auto max-w-4xl px-4 py-16 text-center text-slate-300 sm:px-6 lg:px-8">
        <h1 className="font-display text-5xl text-white">Page not found</h1>
      </div>
    );
  }

  const relatedArticles = (atlas.relatedById.get(article.id) ?? [])
    .map((id) => atlas.articleById.get(id))
    .filter(Boolean);
  const rabbitHole = pickRabbitHole(article, atlas);
  const backShelf = isBackShelfArticle(article);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2.5rem] border border-white/10 bg-white/5 p-6 shadow-glow sm:p-10">
          <div className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Article card</div>
          <h1 className="mt-3 font-display text-5xl text-white sm:text-6xl">{article.title}</h1>
          {backShelf ? (
            <div className="mt-4 inline-flex rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-amber-100">
              Back shelf nugget
            </div>
          ) : null}
          <p className="mt-4 text-lg leading-8 text-slate-200">{article.hook}</p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300">{article.summary}</p>
          <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-5">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Why it is strange</div>
            <p className="mt-3 text-sm leading-7 text-slate-300">{article.whyStrange}</p>
          </div>
          {article.wikipediaUrl ? (
            <div className="mt-6 rounded-[1.5rem] border border-amber-300/20 bg-amber-300/5 p-5">
              <div className="text-xs uppercase tracking-[0.35em] text-amber-200/70">Original Wikipedia article</div>
              <a
                href={article.wikipediaUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 block text-sm leading-7 text-amber-100 underline decoration-amber-200/30 underline-offset-4 hover:text-white"
              >
                Open the source page on Wikipedia
              </a>
            </div>
          ) : null}
          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => navigate(`/graph?focus=${article.id}`)}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10"
            >
              Open in graph
            </button>
            {article.wikipediaUrl ? (
              <a
                href={article.wikipediaUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-100 hover:bg-amber-300/20"
              >
                Open original Wikipedia page
              </a>
            ) : null}
            {rabbitHole ? (
              <button
                type="button"
                onClick={() => navigate(`/article/${rabbitHole.id}`)}
                className="rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm text-amber-100 hover:bg-amber-300/20"
              >
                Take a stranger turn
              </button>
            ) : null}
          </div>
        </article>

        <div className="grid gap-6">
          <ScoreMeter scores={article.scores} />
          <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5">
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Related pages</div>
            <div className="mt-4 grid gap-3">
              {relatedArticles.slice(0, 6).map((related) => (
                <button
                  key={related.id}
                  type="button"
                  onClick={() => navigate(`/article/${related.id}`)}
                  className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-amber-300/30 hover:bg-white/8"
                >
                  <div className="font-medium text-white">{related.title}</div>
                  <div className="mt-1 max-h-10 overflow-hidden text-xs leading-5 text-slate-400">
                    {related.hook}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <button
            type="button"
            onClick={() => navigate(`/collections/${atlas.collections[0].slug}`)}
            className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5 text-left hover:bg-white/8"
          >
            <div className="text-xs uppercase tracking-[0.35em] text-slate-400">Collection membership</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {article.collectionIds.map((collectionId) => {
                const collection = atlas.collectionById.get(collectionId);
                return collection ? (
                  <span
                    key={collectionId}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300"
                  >
                    {collection.title}
                  </span>
                ) : null;
              })}
            </div>
          </button>
        </div>
      </section>
    </div>
  );
};

const GraphPage = ({ atlas, searchParams }) => {
  const focus = searchParams.get('focus');
  const startingArticle = focus ? atlas.articleById.get(focus) : atlas.articles[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-6">
        <GraphExplorer atlas={atlas} initialFocusedId={startingArticle?.id} />
        <TrailBuilder atlas={atlas} />
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow">
          <SectionTitle
            eyebrow="Rabbit-hole seed"
            title={startingArticle ? startingArticle.title : 'Start anywhere'}
            body="Use the article page to jump into the graph, or use the graph itself to keep wandering toward stranger pages that still feel related."
          />
        </div>
      </div>
    </div>
  );
};

const AppContent = ({ atlas }) => {
  return (
    <PageShell atlas={atlas}>
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
          <div className="font-display text-5xl text-white">Loading the atlas...</div>
          <p className="mt-3 text-slate-300">Curating strange pages and knitting the graph.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid min-h-screen place-items-center px-6 text-center">
        <div className="max-w-2xl rounded-[2rem] border border-rose-400/30 bg-rose-500/10 p-8 text-rose-100">
          <div className="font-display text-4xl">Atlas load failed</div>
          <pre className="mt-4 whitespace-pre-wrap text-left text-sm text-rose-100/80">
            {String(error?.message ?? error)}
          </pre>
        </div>
      </div>
    );
  }

  return <AppContent atlas={atlas} />;
}
