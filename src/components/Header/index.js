import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        Jeje Flix
      </Link>
      <Link className="favorite" to="/">
        My Movies
      </Link>
    </header>
  );
};

export default Header;
