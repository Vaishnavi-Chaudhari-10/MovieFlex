import { useState } from "react";
import {
  Search,
  Home,
  Compass,
  Heart,
  Ticket,
  Users,
  User,
  Bell,
  Play,
  Star,
  Plus,
  ChevronRight,
  Sparkles,
  Menu,
  X
} from "lucide-react";

import "./App.css";

const movies = [
  {
    id: 1,
    title: "Interstellar",
    year: 2014,
    genre: ["Sci-Fi", "Drama"],
    rating: 4.8,
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    gradient: "movie-one"
  },
  {
    id: 2,
    title: "Inception",
    year: 2010,
    genre: ["Sci-Fi", "Thriller"],
    rating: 4.7,
    description:
      "A skilled thief who steals secrets through dream-sharing technology is given one impossible task.",
    gradient: "movie-two"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: ["Action", "Crime"],
    rating: 4.9,
    description:
      "Batman faces a criminal mastermind who pushes Gotham and its heroes to their limits.",
    gradient: "movie-three"
  },
  {
    id: 4,
    title: "Everything Everywhere All at Once",
    year: 2022,
    genre: ["Action", "Comedy", "Drama"],
    rating: 4.6,
    description:
      "A woman discovers that she can connect with versions of herself across parallel universes.",
    gradient: "movie-four"
  },
  {
    id: 5,
    title: "Dune",
    year: 2021,
    genre: ["Sci-Fi", "Adventure"],
    rating: 4.5,
    description:
      "A young nobleman must travel to a dangerous desert planet that holds the future of humanity.",
    gradient: "movie-five"
  },
  {
    id: 6,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    genre: ["Animation", "Action"],
    rating: 4.7,
    description:
      "Miles Morales becomes Spider-Man and discovers that there are many Spider-People.",
    gradient: "movie-six"
  },
  {
    id: 7,
    title: "The Grand Budapest Hotel",
    year: 2014,
    genre: ["Comedy", "Drama"],
    rating: 4.4,
    description:
      "A legendary concierge and his young lobby boy become involved in a mysterious adventure.",
    gradient: "movie-seven"
  },
  {
    id: 8,
    title: "Parasite",
    year: 2019,
    genre: ["Drama", "Thriller"],
    rating: 4.8,
    description:
      "An unexpected relationship develops between two families from very different social worlds.",
    gradient: "movie-eight"
  }
];

const genres = [
  "All",
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Drama",
  "Sci-Fi",
  "Thriller"
];

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [watchlist, setWatchlist] = useState([]);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" ||
      movie.genre.includes(selectedGenre);

    return matchesSearch && matchesGenre;
  });

  function toggleWatchlist(movie) {
    setWatchlist((current) => {
      const exists = current.some((item) => item.id === movie.id);

      if (exists) {
        return current.filter((item) => item.id !== movie.id);
      }

      return [...current, movie];
    });
  }

  return (
    <div className="app">

      {/* SIDEBAR */}

      <aside className={`sidebar ${mobileMenu ? "mobile-open" : ""}`}>

        <div className="sidebar-top">

          <div className="logo">
            <div className="logo-icon">
              <Play size={18} fill="currentColor" />
            </div>

            <span>MovieFlex</span>
          </div>

          <button
            className="mobile-close"
            onClick={() => setMobileMenu(false)}
          >
            <X size={22} />
          </button>

        </div>

        <div className="nav-section">

          <p className="nav-label">MENU</p>

          <button
            className={`nav-item ${
              activePage === "Home" ? "active" : ""
            }`}
            onClick={() => {
              setActivePage("Home");
              setMobileMenu(false);
            }}
          >
            <Home size={19} />
            <span>Home</span>
          </button>

          <button
            className={`nav-item ${
              activePage === "Discover" ? "active" : ""
            }`}
            onClick={() => {
              setActivePage("Discover");
              setMobileMenu(false);
            }}
          >
            <Compass size={19} />
            <span>Discover</span>
          </button>

          <button
            className={`nav-item ${
              activePage === "Watchlist" ? "active" : ""
            }`}
            onClick={() => {
              setActivePage("Watchlist");
              setMobileMenu(false);
            }}
          >
            <Heart size={19} />
            <span>Watchlist</span>

            {watchlist.length > 0 && (
              <span className="nav-count">
                {watchlist.length}
              </span>
            )}
          </button>

        </div>

        <div className="nav-section">

          <p className="nav-label">SOCIAL</p>

          <button
            className="nav-item"
            onClick={() => setActivePage("Watch Parties")}
          >
            <Users size={19} />
            <span>Watch Parties</span>
          </button>

        </div>

        <div className="nav-section">

          <p className="nav-label">YOUR ACCOUNT</p>

          <button className="nav-item">
            <Ticket size={19} />
            <span>My Bookings</span>
          </button>

          <button className="nav-item">
            <User size={19} />
            <span>Profile</span>
          </button>

        </div>

        <div className="sidebar-bottom">

          <div className="profile-mini">

            <div className="avatar">
              V
            </div>

            <div>
              <strong>Vaishnavi</strong>
              <span>Movie Explorer</span>
            </div>

          </div>

        </div>

      </aside>


      {/* MAIN CONTENT */}

      <main className="main-content">

        {/* TOP BAR */}

        <header className="topbar">

          <button
            className="mobile-menu"
            onClick={() => setMobileMenu(true)}
          >
            <Menu size={24} />
          </button>

          <div className="search-box">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search movies, genres..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

          </div>

          <div className="topbar-actions">

            <button className="icon-button">
              <Bell size={20} />
              <span className="notification-dot"></span>
            </button>

            <div className="top-avatar">
              V
            </div>

          </div>

        </header>


        {/* HERO */}

        <section className="hero">

          <div className="hero-content">

            <div className="hero-badge">
              <Sparkles size={15} />
              PERSONALIZED FOR YOU
            </div>

            <h1>
              Your next
              <br />
              <span>great movie</span>
              <br />
              is waiting.
            </h1>

            <p>
              Discover movies selected around your taste,
              book your seats, and watch together with
              friends.
            </p>

            <div className="hero-buttons">

              <button
                className="primary-button"
                onClick={() => {
                  document
                    .getElementById("recommendations")
                    ?.scrollIntoView({
                      behavior: "smooth"
                    });
                }}
              >
                Explore Movies
                <ChevronRight size={18} />
              </button>

              <button className="secondary-button">
                <Users size={18} />
                Start a Watch Party
              </button>

            </div>

          </div>

          <div className="hero-visual">

            <div className="hero-card hero-card-back">
              <div className="hero-poster poster-dune"></div>
            </div>

            <div className="hero-card hero-card-middle">
              <div className="hero-poster poster-inception"></div>
            </div>

            <div className="hero-card hero-card-front">

              <div className="hero-poster poster-interstellar">

                <div className="poster-overlay">

                  <span>NOW TRENDING</span>

                  <strong>
                    Interstellar
                  </strong>

                  <small>
                    ⭐ 4.8
                  </small>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* PERSONALIZED SECTION */}

        <section
          className="content-section"
          id="recommendations"
        >

          <div className="section-header">

            <div>

              <div className="section-eyebrow">
                <Sparkles size={15} />
                AI RECOMMENDATIONS
              </div>

              <h2>
                Picked for you
              </h2>

              <p>
                Based on your taste and viewing
                preferences.
              </p>

            </div>

            <button className="view-all">
              View all
              <ChevronRight size={17} />
            </button>

          </div>


          <div className="movie-grid">

            {filteredMovies
              .slice(0, 4)
              .map((movie) => (

                <MovieCard
                  key={movie.id}
                  movie={movie}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                  onSelect={setSelectedMovie}
                />

              ))}

          </div>

        </section>


        {/* GENRES */}

        <section className="content-section genre-section">

          <div className="section-header">

            <div>

              <div className="section-eyebrow">
                EXPLORE
              </div>

              <h2>
                Find your mood
              </h2>

            </div>

          </div>

          <div className="genre-list">

            {genres.map((genre) => (

              <button
                key={genre}
                className={
                  selectedGenre === genre
                    ? "genre-button selected"
                    : "genre-button"
                }
                onClick={() =>
                  setSelectedGenre(genre)
                }
              >
                {genre}
              </button>

            ))}

          </div>

        </section>


        {/* DISCOVER */}

        <section className="content-section">

          <div className="section-header">

            <div>

              <div className="section-eyebrow">
                DISCOVER
              </div>

              <h2>
                Trending movies
              </h2>

            </div>

            <button className="view-all">
              See more
              <ChevronRight size={17} />
            </button>

          </div>

          <div className="movie-grid">

            {filteredMovies
              .slice(4, 8)
              .map((movie) => (

                <MovieCard
                  key={movie.id}
                  movie={movie}
                  watchlist={watchlist}
                  toggleWatchlist={toggleWatchlist}
                  onSelect={setSelectedMovie}
                />

              ))}

          </div>

        </section>


        {/* EMPTY SEARCH */}

        {filteredMovies.length === 0 && (

          <div className="empty-state">

            <Search size={42} />

            <h3>
              No movies found
            </h3>

            <p>
              Try another title or genre.
            </p>

          </div>

        )}

      </main>


      {/* MOVIE DETAILS MODAL */}

      {selectedMovie && (

        <div
          className="modal-overlay"
          onClick={() => setSelectedMovie(null)}
        >

          <div
            className="movie-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <button
              className="modal-close"
              onClick={() => setSelectedMovie(null)}
            >
              <X size={20} />
            </button>

            <div
              className={`modal-poster ${selectedMovie.gradient}`}
            >
              <div className="modal-poster-content">

                <span>
                  MOVIEFLEX
                </span>

                <h2>
                  {selectedMovie.title}
                </h2>

              </div>
            </div>

            <div className="modal-info">

              <div className="modal-title-row">

                <div>

                  <h2>
                    {selectedMovie.title}
                  </h2>

                  <p>
                    {selectedMovie.year}
                    {" • "}
                    {selectedMovie.genre.join(" • ")}
                  </p>

                </div>

                <div className="modal-rating">

                  <Star
                    size={18}
                    fill="currentColor"
                  />

                  {selectedMovie.rating}

                </div>

              </div>

              <p className="modal-description">
                {selectedMovie.description}
              </p>

              <div className="recommendation-reason">

                <Sparkles size={18} />

                <div>

                  <strong>
                    Why we recommend it
                  </strong>

                  <p>
                    You enjoy {selectedMovie.genre[0]}
                    {" "}movies and highly rated
                    titles. This movie matches
                    your current preferences.
                  </p>

                </div>

              </div>

              <div className="modal-actions">

                <button className="primary-button">
                  <Ticket size={18} />
                  Book Tickets
                </button>

                <button
                  className="secondary-button"
                  onClick={() =>
                    toggleWatchlist(selectedMovie)
                  }
                >
                  <Heart size={18} />
                  {watchlist.some(
                    (item) =>
                      item.id === selectedMovie.id
                  )
                    ? "Remove from Watchlist"
                    : "Add to Watchlist"}
                </button>

                <button className="secondary-button">
                  <Users size={18} />
                  Watch Party
                </button>

              </div>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}


function MovieCard({
  movie,
  watchlist,
  toggleWatchlist,
  onSelect
}) {

  const isSaved = watchlist.some(
    (item) => item.id === movie.id
  );

  return (

    <article className="movie-card">

      <div
        className={`movie-poster ${movie.gradient}`}
        onClick={() => onSelect(movie)}
      >

        <div className="poster-content">

          <span className="poster-brand">
            MOVIEFLEX
          </span>

          <h3>
            {movie.title}
          </h3>

          <span>
            {movie.year}
          </span>

        </div>

        <button
          className={`heart-button ${
            isSaved ? "saved" : ""
          }`}
          onClick={(event) => {
            event.stopPropagation();
            toggleWatchlist(movie);
          }}
        >
          <Heart
            size={18}
            fill={isSaved ? "currentColor" : "none"}
          />
        </button>

      </div>

      <div className="movie-info">

        <div className="movie-title-row">

          <h3>
            {movie.title}
          </h3>

          <div className="rating">

            <Star
              size={14}
              fill="currentColor"
            />

            {movie.rating}

          </div>

        </div>

        <div className="movie-meta">

          <span>
            {movie.year}
          </span>

          <span className="dot">
            •
          </span>

          <span>
            {movie.genre[0]}
          </span>

        </div>

        <div className="movie-card-actions">

          <button
            onClick={() => onSelect(movie)}
          >
            Details
          </button>

          <button>
            <Ticket size={15} />
            Book
          </button>

        </div>

      </div>

    </article>
  );
}

export default App;