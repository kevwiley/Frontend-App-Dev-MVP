import { useEffect, useState } from "react";
import { getPopularShows, searchTVShows } from "../services/tvService";
import ShowList from "../components/ShowList";

function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchShows() {
      try {
        setLoading(true);
        setError("");

        let results;

        if (searchTerm.trim() === "") {
          //display popular shows when search bar is empty
          results = await getPopularShows();
        } else {
          //search TMDB when user enters a title
          results = await searchTVShows(searchTerm.trim());
        }

        if (!cancelled) {
          setShows(results);
        }
      } catch (error) {
        if (!cancelled) {
          setError("Unable to load TV shows. Please try again.");
        }

        console.error(error);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    //wait shortly after typing before making search request
    const delay = searchTerm.trim() === "" ? 0 : 350;

    const timer = setTimeout(fetchShows, delay);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [searchTerm]);

  return (
    <section className="page-content" id="explore">
      <p className="eyebrow">FIND SOMETHING NEW</p>

      <h1>Explore TV Shows</h1>

      <p className="explore-description">
        Search for your favorite TV shows or discover something new.
      </p>

      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="Search for TV shows..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          aria-label="Search TV shows"
        />
      </div>

      <div className="explore-results">
        <div className="section-heading">
          <h2>
            {searchTerm.trim() === ""
              ? "Popular TV Shows"
              : `Search Results for "${searchTerm}"`}
          </h2>
        </div>

        {loading && (
          <p className="status-message">Loading TV shows...</p>
        )}

        {error && (
          <p className="error-message">{error}</p>
        )}

        {!loading && !error && shows.length === 0 && (
          <p className="status-message">
            No TV shows found. Try a different search.
          </p>
        )}

        {!loading && !error && shows.length > 0 && (
          <ShowList shows={shows} />
        )}
      </div>
    </section>
  );
}

export default ExplorePage;
