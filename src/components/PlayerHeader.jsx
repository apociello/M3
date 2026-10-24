import '../styles/PlayerHeader.css';

// Avatar on the left, name and details on the right
function PlayerHeader({ profile }) {
  return (
    <header className="player-head">
      {profile.avatar && <img className="avatar" src={profile.avatar} alt="" />}
      <div>
        <h2 className="player-name">
          {profile.title && <span className="title-badge">{profile.title}</span>} {profile.username}
        </h2>
        {profile.name && <p className="muted">{profile.name}</p>}
        <p className="muted">{profile.followers} followers</p>
        <a className="profile-link" href={profile.url} target="_blank" rel="noopener">
          View on Chess.com ↗
        </a>
      </div>
    </header>
  );
}

export default PlayerHeader;
