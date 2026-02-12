import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("Action");
  const [country, setCountry] = useState("");
  const [filter, setFilter] = useState("All");

  function handleAddMovie(e) {
    e.preventDefault();
    if (!title.trim()) return;

    setMovies([
      ...movies,
      {
        id: crypto.randomUUID(),
        title: title.trim(),
        genre,
        country: country.trim() || "Unknown",
        watched: false,
      },
    ]);

    setTitle("");
    setCountry("");
  }

  function toggleWatched(id) {
    setMovies(movies.map(m =>
      m.id === id ? { ...m, watched: !m.watched } : m
    ));
  }

  function deleteMovie(id) {
    setMovies(movies.filter(m => m.id !== id));
  }

  const filteredMovies = movies.filter(movie => {
    if (filter === "Watched") return movie.watched;
    if (filter === "Unwatched") return !movie.watched;
    return true;
  });

  const watchedCount = movies.filter(m => m.watched).length;

  return (
    <div className="app">
      <div className="app-card">
        <h1>🎬 Movie Watchlist</h1>

        <form onSubmit={handleAddMovie}>
          <input
            placeholder="Movie title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />

          <input
            placeholder="Country (e.g. USA, Japan)"
            value={country}
            onChange={e => setCountry(e.target.value)}
          />

          <select value={genre} onChange={e => setGenre(e.target.value)}>
            {[
              "Action", "Adventure", "Animation", "Comedy", "Crime",
              "Drama", "Fantasy", "Horror", "Mystery",
              "Romance", "Sci-Fi", "Thriller"
            ].map(g => <option key={g}>{g}</option>)}
          </select>

          <button>Add Movie</button>
        </form>

        <div className="filters">
          {["All", "Watched", "Unwatched"].map(f => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="movie-grid">
          {filteredMovies.length === 0 && (
            <p className="empty">No movies found. Add one!</p>
          )}

          {filteredMovies.map(movie => (
            <li key={movie.id} className="movie-card">
              <div className="card-header">
                <h3 className="movie-title">{movie.title}</h3>

                <div className="meta">
                  <span className={`genre-badge ${movie.genre.toLowerCase()}`}>
                    {movie.genre}
                  </span>

                  <span className={`country-badge ${movie.country.toLowerCase()}`}>
                    {movie.country}
                  </span>
                </div>
              </div>

              <div className="divider" />

              <span className={`status ${movie.watched ? "watched" : "unwatched"}`}>
                {movie.watched ? "Watched" : "Unwatched"}
              </span>

              <div className="card-actions">
                <button onClick={() => toggleWatched(movie.id)}>
                  {movie.watched ? "Mark as Unwatched" : "Mark as Watched"}
                </button>
                <button className="delete" onClick={() => deleteMovie(movie.id)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="summary">
          <p>Total: <strong>{movies.length}</strong></p>
          <p>Watched: <strong>{watchedCount}</strong></p>
          <p>Unwatched: <strong>{movies.length - watchedCount}</strong></p>

          {movies.length > 0 && watchedCount === movies.length && (
            <p className="celebrate">🎉 You watched everything!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;