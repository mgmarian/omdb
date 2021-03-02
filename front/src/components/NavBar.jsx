import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">
        <img className="nav-icon" src="img/omdb-logo.png" alt='icono omdb'></img>
      </Link>
      <input type="text" placeholder='Search movie'/> 
      <Link to="/">
        <button>Login</button>
        <button>Sign up</button>
      </Link>
    </div>
  );
};

export default NavBar;
