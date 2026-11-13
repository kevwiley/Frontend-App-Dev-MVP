import { useFollow } from "../context/FollowContext";
import ActorCard from "../components/ActorCard";

function FollowingPage() {
  const { followedActors } = useFollow();

  //displays followed individuals in a list, they can be removed as well
  return (
    <section className="page-content">
      <p className="eyebrow">YOUR FAVORITE PEOPLE</p>

      <h1>My Following List</h1>

      {followedActors.length === 0 ? (
        <p className="empty-message">
          You aren't following anyone yet. Visit the Actors page to find
          people to follow.
        </p>
      ) : (
        <div className="actors-grid">
          {followedActors.map((actor) => (
            <ActorCard key={actor.id} actor={actor} />
          ))}
        </div>
      )}
    </section>
  );
}

export default FollowingPage;