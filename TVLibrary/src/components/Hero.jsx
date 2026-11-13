function Hero({ onExplore }) {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">ALL YOUR TELEVISION NEEDS</p>
        <h1>Discover Your Next Favorite Show.</h1>

        <p className="hero-description">
          Explore popular TV shows, discover talented actors,
          and keep track of everything you want to watch.
        </p>
        <button className="hero-button" onClick={onExplore}>Explore Shows</button>
      </div>
    </section>
  );
}

export default Hero;