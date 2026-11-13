import { useWatchlist } from "../context/WatchlistContext";
import ShowCard from "./ShowCard";

//showlist is horizontally scrollable
function ShowList({ shows }) {
  const {
    toggleWatchlist,
    isInWatchlist,
    openShowDetails,
  } = useWatchlist();

  return (
    <div className="show-list">
      {shows.map((show) => (
        <ShowCard
          key={show.id}
          show={show}
          onViewDetails={openShowDetails}
          onToggleWatchlist={toggleWatchlist}
          isInWatchlist={isInWatchlist(show.id)}
        />
      ))}
    </div>
  );
}

export default ShowList;