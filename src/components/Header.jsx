import '../styles/Header.css';

function Header() {
  return (
    <header className="site-header">
      <h1 className="logo">
        <span className="logo-icon" aria-hidden="true">♞</span> Chess Scout
      </h1>
      <p className="tagline">Know your opponent before the first move.</p>
    </header>
  );
}

export default Header;
