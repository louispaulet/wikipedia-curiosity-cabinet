const MeterRow = ({ label, value }) => (
  <div>
    <div className="mb-1 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-ink-600">
      <span>{label}</span>
      <span>{Math.round(value)}</span>
    </div>
    <div className="h-2 border border-stone-300 bg-paper-100">
      <div
        className="h-full bg-gradient-to-r from-sepia-300 via-moss-500 to-atlas-blue"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export const ScoreMeter = ({ scores }) => (
  <div className="paper-panel grid gap-4 p-5">
    <div className="archive-label">Cabinet index</div>
    <MeterRow label="Obscurity" value={scores.obscurity} />
    <MeterRow label="Strangeness" value={scores.strangeness} />
    <MeterRow label="Significance" value={scores.significance} />
    <MeterRow label="Visual appeal" value={scores.visualAppeal} />
    <MeterRow label="Conversation power" value={scores.conversationPower} />
  </div>
);
