import '../styles/Ratings.css';

function Ratings({ ratings }) {
  return (
    <ul className="ratings">
      {ratings.map(({ timeClass, rating, best }) => (
        <li key={timeClass} className="rating">
          <span className="rating-label">{timeClass}</span>
          <strong className="rating-value">{rating}</strong>
          {best && <span className="rating-best">best {best}</span>}
        </li>
      ))}
    </ul>
  );
}

export default Ratings;
