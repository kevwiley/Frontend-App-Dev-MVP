import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ShowList from "../components/ShowList";
import {
  getShowsByGenre,
  getTVGenres,
} from "../services/tvService";

function GenreShowsPage() {
  const { genreId } = useParams();

  const [shows, setShows] = useState([]);
  const [genreName, setGenreName] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchGenreShows() {
      setLoading(true);
      setError("");

      try {
        const [showData, genreData] = await Promise.all([
          getShowsByGenre(genreId),
          getTVGenres(),
        ]);

        setShows(showData);

        const selectedGenre = genreData.find(
          (genre) => genre.id === Number(genreId)
        );

        setGenreName(selectedGenre?.name || "Genre");
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchGenreShows();
  }, [genreId]);

  if (loading) {
    return <p className="status-message">Loading shows...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <section className="page-content">
      <Link to="/genres" className="back-link">
        Back to Genres
      </Link>

      <p className="eyebrow">BROWSE BY CATEGORY</p>
      <h1>{genreName} TV Shows</h1>

      {shows.length === 0 ? (
        <p>No shows were found for this genre.</p>
      ) : (
        <ShowList shows={shows} />
      )}
    </section>
  );
}

export default GenreShowsPage;