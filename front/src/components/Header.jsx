import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getSearchMovies } from "../store/movies";
import { clearUser } from "../store/loginUser";

const NavBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState([]);

  const user = useSelector((state) => state.loginUser);

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchMovies(input));
  };

  const handleClick = () => {
    dispatch(clearUser({}));
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
        {!user.token ? (
          <>
            <Link to="/login">
              <button className="btn btn-warning">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-warning">Sign up</button>
            </Link>
          </>
        ) : (
          <>
            <button onClick={handleClick} className="btn btn-warning">
              Logout
            </button>
            <button className="btn btn-warning">{user.email}</button>
          </>
        )}

        <Link to="/users">
          <button className="btn btn-warning"> Usuarios registrados </button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
