import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getPopularMovies} from "../store/movies";

const TopMovies = () => {

  const dispatch = useDispatch();
  
  React.useEffect(() => {
    dispatch(getPopularMovies());
  }, [dispatch]);

  // React.useEffect(() => {
  //   dispatch(getPopularMovies());
  // }, [movies]);

  const movies = useSelector((state) => state.movies);

  return (
    <div>
      <div className="movie-container jumbotron ">
      <h1 className="display-3"> Movies for you! </h1>
        {movies.length > 0 && movies.map((movie) => {
          return (
            <div className="movie-box" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <img
                  src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
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
