import { Link, NavLink } from 'react-router-dom';

const navClass = ({ isActive }) =>
  [
    'rounded-full px-4 py-2 text-sm transition',
    isActive ? 'bg-white text-slate-950 shadow-glow' : 'text-slate-300 hover:bg-white/10',
  ].join(' ');

export const Layout = ({ children, atlas }) => {
  return (
    <div className="min-h-screen text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-300/15 text-amber-200 ring-1 ring-amber-200/30">
              ✦
            </div>
            <div>
              <div className="font-display text-lg tracking-wide text-white">
                Strange Wikipedia Atlas
              </div>
              <div className="text-xs uppercase tracking-[0.3em] text-slate-400">
                cabinet of curiosities
              </div>
            </div>
          </Link>
          <nav className="flex items-center gap-2 overflow-x-auto">
            <NavLink to="/" end className={navClass}>
              Home
            </NavLink>
            <NavLink to="/graph" className={navClass}>
              Graph
            </NavLink>
            {atlas?.collections?.slice(0, 3).map((collection) => (
              <NavLink key={collection.slug} to={`/collections/${collection.slug}`} className={navClass}>
                {collection.title}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

