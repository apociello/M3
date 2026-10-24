import PlayerHeader from './PlayerHeader.jsx';
import '../styles/PlayerCard.css';

function PlayerCard({ player }) {
  return (
    <article className="player">
      <PlayerHeader profile={player.profile} />
    </article>
  );
}

export default PlayerCard;
