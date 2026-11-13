import { Link } from "react-router-dom";

//handles error and gives user way to return
function NotFoundPage() {
  return (
    <section className="page-content not-found">
      <h1>404 - Page Not Found</h1>

      <p>
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="hero-button">
        Return Home
      </Link>
    </section>
  );
}

export default NotFoundPage;