import { NavLink } from "react-router-dom";

function Navigation({ watchlistCount }) {
  return (
    <nav className="navigation">
      <NavLink to="/" end>Home</NavLink>

      <NavLink to="/explore">Explore</NavLink>

      <NavLink to="/genres">Genres</NavLink>

      <NavLink to="/actors">Actors</NavLink>

      <NavLink to="/following">Following</NavLink>

      <NavLink to="/watchlist">
        Watchlist
        {watchlistCount > 0 && (
          <span className="watchlist-count">
            {watchlistCount}
          </span>
        )}
      </NavLink>
    </nav>
  );
}

export default Navigation;