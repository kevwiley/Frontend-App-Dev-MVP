import { useFollow } from "../context/FollowContext";

//actor card will contain image of actor, nameand what they are known for, they will be followable
function ActorCard({ actor }) {
  const { toggleFollow, isFollowing } = useFollow();
  const following = isFollowing(actor.id);

  return (
    <div className="actor-card">
      {actor.profile_path ? (
        <img src={`https://image.tmdb.org/t/p/w185${actor.profile_path}`} alt={actor.name}/>
      ) : (
        <div className="actor-placeholder">No Image</div>
      )}

      <h3>{actor.name}</h3>
      <p>{actor.known_for_department}</p>
      <button className={`follow-button ${following ? "following" : ""}`} onClick={() => toggleFollow(actor)}>
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
}

export default ActorCard;