import { BrowserRouter, Routes, Route } from "react-router-dom";

import { WatchlistProvider } from "./context/WatchlistContext";
import { FollowProvider } from "./context/FollowContext";

import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import ExplorePage from "./pages/ExplorePage";
import GenresPage from "./pages/GenresPage";
import GenreShowsPage from "./pages/GenreShowsPage";
import ActorsPage from "./pages/ActorsPage";
import WatchlistPage from "./pages/WatchlistPage";
import FollowingPage from "./pages/FollowingPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <WatchlistProvider>
      <FollowProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/explore" element={<ExplorePage />} />
              <Route path="/genres" element={<GenresPage />} />
              <Route path="/genres/:genreId" element={<GenreShowsPage />} />
              <Route path="/actors" element={<ActorsPage />} />
              <Route path="/watchlist" element={<WatchlistPage />} />
              <Route path="/following" element={<FollowingPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </FollowProvider>
    </WatchlistProvider>
  );
}

export default App;