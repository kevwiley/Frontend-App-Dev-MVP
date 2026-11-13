//modal for show will have title, image description, and rating
function ShowDetailsModal({
  show,
  onClose,
  onToggleWatchlist,
  isInWatchlist,
}) {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="details-modal" onClick={(event) => event.stopPropagation()}>
        <button className="close-button" onClick={onClose} aria-label="Close details">&times;</button>

        <img
          src={show.poster}
          alt={`${show.title} poster`}
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />

        <div className="modal-content">

          <p className="eyebrow">TV SHOW DETAILS</p>
          <h2>{show.title}</h2>
          <p>{show.year} · ★ {show.rating}</p>
          <p>{show.description}</p>

          <button className="watchlist-button" onClick={() => onToggleWatchlist(show)}>
            {isInWatchlist
              ? "Added to Watchlist"
              : "Add to Watchlist"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShowDetailsModal;