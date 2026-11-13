import { useEffect, useState } from "react";
import { getPopularShows } from "../services/tvService";

import Hero from "../components/Hero";
import ShowList from "../components/ShowList";

function HomePage() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchShows() {
      try {
        setLoading(true);
        setError("");

        const popularShows = await getPopularShows();
        setShows(popularShows);
      } catch (error) {
        setError("Unable to load popular TV shows.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchShows();
  }, []);

  return (
    <div className="home-page">
      <Hero onExplore={() => (window.location.href = "/explore")} />

      <section className="popular-section">
        <div className="section-heading">
          <h2>Popular TV Shows</h2>
        </div>

        {loading && (
          <p className="status-message">Loading popular shows...</p>
        )}

        {error && (
          <p className="error-message">{error}</p>
        )}

        {!loading && !error && shows.length === 0 && (
          <p className="status-message">
            No TV shows were found.
          </p>
        )}

        {!loading && !error && shows.length > 0 && (
          <ShowList shows={shows} />
        )}
      </section>
    </div>
  );
}

export default HomePage;