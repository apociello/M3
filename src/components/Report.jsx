import { RECENT_DAYS } from '../logic.js';
import OutcomeBar from './OutcomeBar.jsx';
import '../styles/Report.css';

function Report({ report }) {
  const tiles = [
    { label: 'Games', value: report.total },
    { label: 'Win rate', value: `${report.winRate}%` },
    { label: 'As white', value: `${report.whiteWinRate}%` },
    { label: 'As black', value: `${report.blackWinRate}%` },
  ];

  return (
    <section>
      <h3>Last {RECENT_DAYS} days</h3>
      <OutcomeBar counts={report.counts} total={report.total} />
      <div className="tiles">
        {tiles.map(({ label, value }) => (
          <div key={label} className="tile">
            <span className="tile-label">{label}</span>
            <strong className="tile-value">{value}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Report;
