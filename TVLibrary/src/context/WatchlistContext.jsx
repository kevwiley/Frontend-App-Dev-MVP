import { createContext, useContext, useState, useEffect } from "react";

const WatchlistContext = createContext();

export function WatchlistProvider({ children }) {
  //load saved watchlist from localStorage when app starts
  const [watchlist, setWatchlist] = useState(() => {
    const savedWatchlist = localStorage.getItem("watchlist");
    return savedWatchlist ? JSON.parse(savedWatchlist) : [];
  });

  const [selectedShow, setSelectedShow] = useState(null);

  //save watchlist whenever it changes
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  function toggleWatchlist(show) {
    setWatchlist((currentWatchlist) => {
      const alreadyAdded = currentWatchlist.some(
        (item) => item.id === show.id
      );

      if (alreadyAdded) {
        return currentWatchlist.filter((item) => item.id !== show.id);
      }

      return [...currentWatchlist, show];
    });
  }

  function isInWatchlist(showId) {
    return watchlist.some((show) => show.id === showId);
  }

  function openShowDetails(show) {
    setSelectedShow(show);
  }

  function closeShowDetails() {
    setSelectedShow(null);
  }

  return (
    <WatchlistContext.Provider
      value={{
        watchlist,
        toggleWatchlist,
        isInWatchlist,
        selectedShow,
        openShowDetails,
        closeShowDetails,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
}

export function useWatchlist() {
  return useContext(WatchlistContext);
}
