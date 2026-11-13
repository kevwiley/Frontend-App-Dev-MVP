import { useWatchlist } from "../context/WatchlistContext";
import ShowList from "../components/ShowList";

//watchlist will display shows in a list, they can be removed
function WatchlistPage() {
  const { watchlist } = useWatchlist();

  return (
    <section className="page-section">
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>You haven't added any shows to your watchlist yet.</p>
      ) : (
        <ShowList shows={watchlist} />
      )}
    </section>
  );
}

export default WatchlistPage;