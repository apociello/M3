import '../styles/OutcomeBar.css';

// One segment per outcome, as wide as its share of the games
function OutcomeBar({ counts, total }) {
  const segments = Object.entries(counts).filter(([, count]) => count > 0);

  return (
    <div className="outcome-bar">
      {segments.map(([outcome, count]) => (
        <span
          key={outcome}
          className={`segment result-${outcome}`}
          style={{ width: `${(count / total) * 100}%` }}
        >
          {count}
        </span>
      ))}
    </div>
  );
}

export default OutcomeBar;
