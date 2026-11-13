
import { describe, test, expect, beforeEach, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

vi.mock("../services/tvService", () => ({
  getPopularShows: vi.fn().mockResolvedValue([
    {
      id: 123,
      title: "The Test Show",
      rating: "8.5",
      year: "2024",
      poster: "",
      description: "A test show.",
    },
  ]),
  getPopularPeople: vi.fn().mockResolvedValue([
    {
      id: 456,
      name: "Pedro Pascal",
      known_for_department: "Acting",
      profile_path: null,
    },
  ]),
  getTVGenres: vi.fn().mockResolvedValue([]),
  getShowsByGenre: vi.fn().mockResolvedValue([]),
}));

describe("TVLibrary Tests", () => {
  beforeEach(() => {
    localStorage.clear();
    window.history.pushState({}, "", "/");
  });

  //test application is rendered
  test("renders the application", async () => {
    render(<App />);
    expect(await screen.findByText("The Test Show")).toBeInTheDocument();
  });

  //tests show cards show up
  test("displays show cards", async () => {
  render(<App />);

  expect(await screen.findByText("The Test Show")).toBeInTheDocument();
  expect(screen.getByText(/8\.5/)).toBeInTheDocument();
});

  //test how page displays
  test("displays the home page", async () => {
    render(<App />);
    expect(await screen.findByText("The Test Show")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  });

  //test navigation display links show up
  test("displays navigation links", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: /explore/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /genres/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /actors/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /watchlist/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /following/i })).toBeInTheDocument();
  });

  //test to see if users can use button to add show to watchlist
  test("allows users to add a show to their watchlist", async () => {
    render(<App />);
    await screen.findByText("The Test Show");

    fireEvent.click(screen.getByRole("button", { name: /watchlist/i }));
    fireEvent.click(screen.getByRole("link", { name: /watchlist/i }));

    expect(await screen.findByText("The Test Show")).toBeInTheDocument();
  });

  //test if user can use button to follow an actor
  test("allows users to follow an actor", async () => {
    render(<App />);
    fireEvent.click(screen.getByRole("link", { name: /actors/i }));

    expect(await screen.findByText("Pedro Pascal")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Follow" }));

    expect(screen.getByRole("button", { name: "Following" })).toBeInTheDocument();
  });
});
