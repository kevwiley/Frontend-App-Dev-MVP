const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

//reusable function for making API requests
async function fetchFromTMDB(endpoint, params = {}) {
  if (!API_KEY) {
    throw new Error("TMDB API key missing.");
  }

  const url = new URL(`${BASE_URL}${endpoint}`);

  url.search = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
    ...params,
  }).toString();

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`TMDB request failed: ${response.status}`);
  }

  return response.json();
}

//format show information
function formatShow(show) {
  return {
    id: show.id,
    title: show.name,
    rating: show.vote_average?.toFixed(1) ?? "N/A",
    year: show.first_air_date
      ? show.first_air_date.substring(0, 4)
      : "Unknown",
    poster: show.poster_path
      ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
      : "",
    description: show.overview || "No description available.",
  };
}

//get popular shows
export async function getPopularShows() {
  const data = await fetchFromTMDB("/tv/popular");
  return data.results.map(formatShow);
}

//search shows by title
export async function searchTVShows(searchTerm) {
  const data = await fetchFromTMDB("/search/tv", {
    query: searchTerm,
    page: 1,
  });

  return data.results.map(formatShow);
}

//get show genres
export async function getTVGenres() {
  const data = await fetchFromTMDB("/genre/tv/list");
  return data.genres;
}

//get shows by genre
export async function getShowsByGenre(genreId) {
  const data = await fetchFromTMDB("/discover/tv", {
    with_genres: genreId,
    sort_by: "popularity.desc",
  });

  return data.results.map(formatShow);
}

//get popular actors and people
export async function getPopularPeople() {
  const data = await fetchFromTMDB("/person/popular");
  return data.results;
}

//search actors and people by name
export async function searchPeople(searchTerm) {
  const data = await fetchFromTMDB("/search/person", {
    query: searchTerm,
    page: 1,
  });

  return data.results;
}