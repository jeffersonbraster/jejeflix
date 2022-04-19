import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@JejeFlix");

    setMovies(JSON.parse(myList) || []);
  }, []);

  const deleteMovie = (id) => {
    let filterMovies = movies.filter((movie) => movie.id !== id);

    localStorage.setItem("@JejeFlix", JSON.stringify(filterMovies));
    setMovies(filterMovies);
    toast.success("Filme removido com sucesso.");
  };

  return (
    <div className="my-movies">
      <h1>Minha lista</h1>

      {movies.length === 0 && (
        <span>Você ainda não possui lista de favoritos :( </span>
      )}

      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <span>{movie.title}</span>
              <div>
                <Link to={`/movie/${movie.id}`}>Detalhes</Link>
                <button onClick={() => deleteMovie(movie.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
