import { useEffect, useState } from "react";
import GenreCard from "../components/GenreCard";
import { getTVGenres } from "../services/tvService";

function GenresPage() {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGenres() {
      try {
        const data = await getTVGenres();
        setGenres(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGenres();
  }, []);

  if (loading) {
    return <p className="status-message">Loading genres...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <section className="genres-section page-content">
      <p className="eyebrow">FIND YOUR NEXT FAVORITE</p>

      <h1>Browse by Genre</h1>
      
      <p className="genre-description">
        Explore television shows based on your favorite genres.
      </p>

      <div className="genres-grid">
        {genres.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </section>
  );
}

export default GenresPage;