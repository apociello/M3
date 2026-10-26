import { RECENT_DAYS, prepareGames, summarizeRatings } from '../logic.js';
import GamesList from './GamesList.jsx';
import PlayerHeader from './PlayerHeader.jsx';
import Ratings from './Ratings.jsx';
import '../styles/PlayerCard.css';

function PlayerCard({ player }) {
  // Derived on every render from the stored player, never kept in state
  const ratings = summarizeRatings(player.stats);
  const games = prepareGames(player.games, player.profile.username);

  return (
    <article className="player">
      <PlayerHeader profile={player.profile} />
      {ratings.length > 0 && <Ratings ratings={ratings} />}
      {games.length === 0 ? (
        <p className="empty">No games in the last {RECENT_DAYS} days.</p>
      ) : (
        <GamesList games={games} />
      )}
    </article>
  );
}

export default PlayerCard;
