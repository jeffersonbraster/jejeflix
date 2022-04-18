import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Error = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Pagina não encontrada</h2>
      <Link to="/">Go home</Link>
    </div>
  );
};

export default Error;
