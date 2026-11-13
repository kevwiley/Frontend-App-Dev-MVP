import { Link } from "react-router-dom";

function GenreCard({ genre }) {
  return (
    <Link to={`/genres/${genre.id}`} className="genre-card">
      <h3>{genre.name}</h3>
      <span>Explore Shows →</span>
    </Link>
  );
}

export default GenreCard;