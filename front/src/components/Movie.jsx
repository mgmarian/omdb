import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  const oneMovie = movie;
  console.log(oneMovie)

  return (
    <div className="movie-unit card text-white bg-dark mb-3" >
      <h2 className="card-header">{oneMovie.title}</h2>
      <img
        className="img-unit"
        src={`http://image.tmdb.org/t/p/w300/${oneMovie.poster_path}`}
        alt={oneMovie.title}
      ></img>
      <div className="description-unit">
        <p>Release date: {oneMovie.release_date}</p>
        <p>Duration: {oneMovie.runtime}</p>
        <p>Overview: {oneMovie.overview}</p>
        <p>Genre:</p>
        <p>Rating : {oneMovie.vote_average} </p>
        <Link to="/"><button className="btn btn-secondary">Atrás</button></Link>
      </div>
    </div>
  );
};

export default Movie;
