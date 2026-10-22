import '../styles/Footer.css';

const API_DOCS_URL = 'https://www.chess.com/news/view/published-data-api';

function Footer() {
  return (
    <footer className="site-footer">
      Data from the{' '}
      <a href={API_DOCS_URL} target="_blank" rel="noopener">
        Chess.com Published-Data API
      </a>
    </footer>
  );
}

export default Footer;
