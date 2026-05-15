export const RabbitHoleButton = ({ onClick, label = 'Trace another link' }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center justify-center border border-sepia-500 bg-sepia-500 px-4 py-2 text-sm font-semibold text-paper-50 shadow-sm transition hover:bg-sepia-700"
  >
    {label}
  </button>
);
