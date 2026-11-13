//showcard will have image, ratings, detail button, add to watchlist button
function ShowCard({ show, onViewDetails, onToggleWatchlist, isInWatchlist }) {
  return (
    <div className="show-card">
      <div className="poster-container">
        <img
          src={show.poster}
          alt={`${show.title} poster`}
          className="show-poster"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <span className="show-rating">★ {show.rating} </span>
      </div>

      <div className="show-info">
        <h3>{show.title}</h3>
        <p>{show.year}</p>

        <button className="details-button" onClick={() => onViewDetails(show)}>View Details</button>

        <button
          className={`watchlist-button ${
            isInWatchlist ? "added" : ""
          }`}
          onClick={() => onToggleWatchlist(show)}
        >
          {isInWatchlist ? "Added" : "Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default ShowCard;