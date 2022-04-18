import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../src/components/Header";
import Home from "./pages/Home";
import Movie from "./pages/Movie";

function RouteApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
