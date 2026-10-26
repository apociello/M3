import GameRow from './GameRow.jsx';
import '../styles/GamesList.css';

const MAX_GAMES_LISTED = 20;

function GamesList({ games }) {
  const shown = games.slice(0, MAX_GAMES_LISTED);

  return (
    <section>
      <h3>
        Recent games · {shown.length} of {games.length}
      </h3>
      <ol className="games">
        {shown.map((game) => (
          <GameRow key={game.url} game={game} />
        ))}
      </ol>
    </section>
  );
}

export default GamesList;
