import Header from "./Header";
import ShowDetailsModal from "./ShowDetailsModal";
import { useWatchlist } from "../context/WatchlistContext";

function Layout({ children }) {
  const {
    watchlist,
    selectedShow,
    toggleWatchlist,
    isInWatchlist,
    closeShowDetails,
  } = useWatchlist();

  return (
    <div className="app">
      <Header watchlistCount={watchlist.length} />
      {children}
      {selectedShow && (
        <ShowDetailsModal
          show={selectedShow}
          onClose={closeShowDetails}
          onToggleWatchlist={toggleWatchlist}
          isInWatchlist={isInWatchlist(selectedShow.id)}
        />
      )}
    </div>
  );
}

export default Layout;
