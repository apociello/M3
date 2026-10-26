import '../styles/GameRow.css';

const OUTCOME_LABELS = { win: 'W', draw: 'D', loss: 'L' };
const gameDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

function GameRow({ game }) {
  return (
    <li>
      <a className="game" href={game.url} target="_blank" rel="noopener">
        <span className={`result result-${game.outcome}`}>{OUTCOME_LABELS[game.outcome]}</span>
        <span className="game-opponent">
          {game.opponent.username} ({game.opponent.rating})
        </span>
        <span className="game-meta">
          {game.color} · {game.timeClass}
        </span>
        <time className="game-meta">{gameDate.format(game.playedAt)}</time>
      </a>
    </li>
  );
}

export default GameRow;
