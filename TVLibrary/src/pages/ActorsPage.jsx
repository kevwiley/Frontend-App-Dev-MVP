import { useEffect, useState } from "react";
import { getPopularPeople, searchPeople } from "../services/tvService";
import ActorCard from "../components/ActorCard";

function ActorsPage() {
  const [actors, setActors] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function fetchActors() {
      try {
        setLoading(true);
        setError("");

        let results;

        if (searchTerm.trim() === "") {
          results = await getPopularPeople();
        } else {
          results = await searchPeople(searchTerm.trim());
        }

        if (!cancelled) {
          setActors(results);
        }
      } catch (error) {
        if (!cancelled) {
          setError(error.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    //wait shortly after typing before searching TMDB for shows matching user input
    const delay = searchTerm.trim() === "" ? 0 : 350;
    const timer = setTimeout(fetchActors, delay);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [searchTerm]);

  return (
    <section className="page-content">
      <p className="eyebrow">THE PEOPLE BEHIND THE SHOWS</p>

      <h1>Popular Actors & People</h1>

      <p className="actors-description">
        Search for someone in the industry, then follow them to add them to
        your list.
      </p>

      <div className="actor-search-container">
        <input
          type="search"
          className="actor-search-input"
          placeholder="Search for actors and people..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          aria-label="Search actors and people"
        />
      </div>

      <div className="actors-results">
        <h2>
          {searchTerm.trim() === ""
            ? "Popular People"
            : `Search Results for "${searchTerm}"`}
        </h2>

        {loading && (
          <p className="status-message">Loading people...</p>
        )}

        {error && (
          <p className="error-message">{error}</p>
        )}

        {!loading && !error && actors.length === 0 && (
          <p className="status-message">No people found. Try a different search.</p>
        )}

        {!loading && !error && actors.length > 0 && (
          <div className="actors-grid">
            {actors.map((actor) => (
              <ActorCard key={actor.id} actor={actor} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ActorsPage;