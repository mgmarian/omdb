import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getSearchMovies } from "../store/movies";

const NavBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchMovies(input));
  };

  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link to="/">
        <img
          className="nav-icon"
          src="img/omdb-logo.png"
          alt="icono omdb"
        ></img>
      </Link>
      <form className="form-bar" onSubmit={handleSubmit}>
        <input
          className="search-bar form-control"
          type="text"
          placeholder="Search movie"
          onChange={handleChange}
          value={input}
        />
      </form>

      <div>
        <Link to="/login">
          <button className="btn btn-warning">Login</button>
        </Link>
        <Link to="/register">
          <button className="btn btn-warning">Sign up</button>
        </Link>
        <Link to="/users">
          <button className="btn btn-warning"> Usuarios registrados </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
