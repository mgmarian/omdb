import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useSelector, useDispatch } from 'react-redux';

import {getSearchMovies} from "../store/movies"

const NavBar = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState([])

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getSearchMovies(input));
  }

  const searchedMovies = useSelector((state) => state.movies)
  console.log(searchedMovies)

  return (
    <div className="nav-bar">
      <Link to="/">
        <img className="nav-icon" src="img/omdb-logo.png" alt='icono omdb'></img>
      </Link>
      <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Search movie' onChange= {handleChange} value={input}/> 
      </form>
      <Link to="/auth">
        <button>Login</button>
        <button>Sign up</button>
      </Link>
    </div>
  );
};

export default NavBar;
