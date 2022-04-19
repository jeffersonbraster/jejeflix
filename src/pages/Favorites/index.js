import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@JejeFlix");

    setMovies(JSON.parse(myList) || []);
  }, []);

  return (
    <div className="my-movies">
      <h1>Minha lista</h1>

      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.id}>
              <span>{movie.title}</span>
              <div>
                <Link to={`/movie/${movie.id}`}>Detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorites;
