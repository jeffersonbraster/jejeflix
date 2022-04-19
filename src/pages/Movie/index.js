import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "./style.css";

const Movie = () => {
  const { id } = useParams();
  const navigation = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: process.env.REACT_APP_TMDB_API_KEY,
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigation("/", { replace: true });
          return;
        });
    }

    loadMovie();

    return () => {
      console.log("desmontado");
    };
  }, [id, navigation]);

  const saveMovie = () => {
    const list = localStorage.getItem("@JejeFlix");

    let savedMovies = JSON.parse(list) || [];

    const hasMovie = savedMovies.some(
      (savedMovie) => savedMovie.id === movie.id
    );

    if (hasMovie) {
      alert("Filme já existe em seus favoritos.");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@JejeFlix", JSON.stringify(savedMovies));
    alert("Filme adicionado com sucesso.");
  };

  if (loading) {
    return (
      <div className="movie-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>

      <strong>Avaliação: {movie.vote_average} / 10</strong>

      <div className="area-buttons">
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a
            target="_blank"
            href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
            rel="noreferrer"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
};

export default Movie;
