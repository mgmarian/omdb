import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {getPopularMovies} from "../store/movies";

const TopMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  const top10 = useSelector((state) => state.movies);
  console.log(top10);

  return (
    <div>
      <h1 className="pageTitle"> Most popular movies </h1>
      <div className="movie-container">
        {top10.map((movie) => {
          return (
            <div className="movie-box" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                ></img>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopMovies;
