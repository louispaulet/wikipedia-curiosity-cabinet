export const RabbitHoleButton = ({ onClick, label = 'Take me somewhere stranger' }) => (
  <button
    type="button"
    onClick={onClick}
    className="inline-flex items-center justify-center rounded-full border border-amber-300/30 bg-amber-300/10 px-5 py-3 text-sm font-medium text-amber-100 transition hover:border-amber-200/50 hover:bg-amber-300/20"
  >
    {label}
  </button>
);

