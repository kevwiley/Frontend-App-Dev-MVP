import { Link } from "react-router-dom";
import Navigation from "./Navigation";

function Header({ watchlistCount }) {
  return (
    <header className="header">
      <Link to="/" className="logo">
        TV<span>Library</span>
      </Link>
      <Navigation watchlistCount={watchlistCount} />
    </header>
  );
}

export default Header;