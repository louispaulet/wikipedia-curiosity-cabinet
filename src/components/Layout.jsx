import { Link, NavLink } from 'react-router-dom';

const navClass = ({ isActive }) =>
  [
    'border-b-2 px-2 py-1 text-sm transition sm:px-3',
    isActive
      ? 'border-atlas-blue text-ink-800'
      : 'border-transparent text-ink-600 hover:border-stone-300 hover:text-atlas-blue',
  ].join(' ');

export const Layout = ({ children, atlas }) => {
  return (
    <div className="min-h-screen text-ink-800">
      <header className="sticky top-0 z-40 border-b border-stone-300/80 bg-paper-50/92 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center border border-stone-400 bg-paper-100 font-display text-xl text-sepia-700 shadow-sm">
              W
            </div>
            <div>
              <div className="font-display text-xl font-semibold tracking-wide text-ink-800">
                Wunderwiki
              </div>
              <div className="text-[11px] uppercase tracking-[0.24em] text-ink-600">
                encyclopedia cabinet
              </div>
            </div>
          </Link>
          <nav className="flex max-w-full items-center gap-2 overflow-x-auto">
            <NavLink to="/" end className={navClass}>
              Main page
            </NavLink>
            <NavLink to="/graph" className={navClass}>
              Relationship map
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
