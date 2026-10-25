import { summarizeRatings } from '../logic.js';
import PlayerHeader from './PlayerHeader.jsx';
import Ratings from './Ratings.jsx';
import '../styles/PlayerCard.css';

function PlayerCard({ player }) {
  // Derived on every render from the stored player, never kept in state
  const ratings = summarizeRatings(player.stats);

  return (
    <article className="player">
      <PlayerHeader profile={player.profile} />
      {ratings.length > 0 && <Ratings ratings={ratings} />}
    </article>
  );
}

export default PlayerCard;
