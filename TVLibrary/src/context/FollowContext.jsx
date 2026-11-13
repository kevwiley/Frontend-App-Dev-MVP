import { createContext, useContext, useState, useEffect } from "react";

const FollowContext = createContext();

export function FollowProvider({ children }) {
  //loads saved following list from localStorage
  const [followedActors, setFollowedActors] = useState(() => {
    const savedActors = localStorage.getItem("followedActors");
    return savedActors ? JSON.parse(savedActors) : [];
  });

  //save following list whenever it changes
  useEffect(() => {
    localStorage.setItem("followedActors", JSON.stringify(followedActors));
  }, [followedActors]);

  function toggleFollow(actor) {
    setFollowedActors((currentActors) => {
      const alreadyFollowing = currentActors.some(
        (item) => item.id === actor.id
      );

      if (alreadyFollowing) {
        return currentActors.filter((item) => item.id !== actor.id);
      }

      return [...currentActors, actor];
    });
  }

  function isFollowing(actorId) {
    return followedActors.some((actor) => actor.id === actorId);
  }

  return (
    <FollowContext.Provider
      value={{
        followedActors,
        toggleFollow,
        isFollowing,
      }}
    >
      {children}
    </FollowContext.Provider>
  );
}

export function useFollow() {
  return useContext(FollowContext);
}
