# TVLibrary

TVLibrary is a React-based web application that allows users to explore TV shows, discover popular actors, browse shows by genre, and create a personal watchlist. The application uses The Movie Database (TMDB) API to retrieve TV show and actor information.

## Features

- **Explore TV Shows:** Browse popular TV shows and search for specific titles.
- **Browse by Genre:** View TV shows organized by genre.
- **Discover Actors:** Browse popular actors and search for people.
- **Follow Actors:** Follow and unfollow actors to keep track of them.
- **Personal Watchlist:** Add and remove TV shows from a personal watchlist.
- **Local Storage:** Save watchlist and followed actors so they remain available after refreshing the page.
- **Show Details:** View additional information about TV shows.

## Technologies Used

- React
- JavaScript
- Vite
- React Router
- CSS
- TMDB API
- Browser Local Storage
- Vitest
- React Testing Library

## Prerequisites

- Node.js installed.
- A TMDB API key.

## Installation and Setup

### 1. Clone the Repository

Clone the project to your local machine:

```
git clone YOUR_REPOSITORY_URL
```

### 2. Install Dependencies

Install the required dependencies:

```
npm install
```

### 3. Configure the TMDB API Key

The application requires a TMDB API key to retrieve TV show and actor information.

1. Create an account at https://www.themoviedb.org/.
2. Obtain an API key from your account settings.
3. Create a file named `.env` in the project's root directory.
4. Add your API key:

```
VITE_TMDB_API_KEY=your_api_key_here
```

### 4. Start the Development Server

Run:

```
npm run dev
```

Vite will provide a local URL, open the URL in your browser to use TVLibrary.

## Running Tests

TVLibrary uses Vitest and React Testing Library for testing.

To run tests:

```
npm run test:run
```

To run tests in watch mode:

```
npm test
```