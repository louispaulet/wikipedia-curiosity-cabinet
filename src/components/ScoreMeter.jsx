const MeterRow = ({ label, value }) => (
  <div>
    <div className="mb-1 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-slate-400">
      <span>{label}</span>
      <span>{Math.round(value)}</span>
    </div>
    <div className="h-2 rounded-full bg-white/8">
      <div
        className="h-2 rounded-full bg-gradient-to-r from-amber-300 via-orange-300 to-cyan-300"
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export const ScoreMeter = ({ scores }) => (
  <div className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5">
    <MeterRow label="Obscurity" value={scores.obscurity} />
    <MeterRow label="Strangeness" value={scores.strangeness} />
    <MeterRow label="Significance" value={scores.significance} />
    <MeterRow label="Visual appeal" value={scores.visualAppeal} />
    <MeterRow label="Conversation power" value={scores.conversationPower} />
  </div>
);

