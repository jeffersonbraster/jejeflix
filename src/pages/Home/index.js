import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./style.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: process.env.REACT_APP_TMDB_API_KEY,
          language: "pt-BR",
          page: 1,
        },
      });

      setMovies(response.data.results.slice(0, 10));
      setLoading(false);
    }

    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Carregando...</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="list-movies">
        {movies.map((movie) => (
          <article key={movie.id}>
            <strong>{movie.title}</strong>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
            />
            <Link to={`/movie/${movie.id}`}>Detalhes</Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Home;
