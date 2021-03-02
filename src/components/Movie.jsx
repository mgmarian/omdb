import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => (
  <div className="movie-unit">
    <h2>{movie.title}</h2>
    <img
      className="img-unit"
      src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
      alt={movie.title}
    ></img>
    <div className="description-unit">
      <p>Release date: {movie.release_date}</p>
      <p>Duration: {movie.runtime}</p>
      <p>Overview: {movie.overview}</p>
      <p>Genre:</p>
      <p>Rating : {movie.vote_average} </p>
      <Link to="/">Atrás</Link>
    </div>
  </div>
);

export default Movie;
