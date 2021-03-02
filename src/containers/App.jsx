import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import axios from "axios";

import NavBar from "../components/NavBar";
import TopMovies from "../components/TopMovies";
import SelectedMovie from "./SelectedMovie"

const apiKey = "9bcd5f8d7a9165bb7f785ab7e82a5143";

const App = () => {
  const [top10, setTop10] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-EN&page=1`
      )
      .then((res) => res.data.results)
      .then((top10) => setTop10(top10));
  }, []);

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/movies" render={() => <TopMovies top10={top10} />}/>

        <Route path='/movies/:id' render={({match}) => <SelectedMovie movieId={match.params.id} />} /> 
         <Redirect from="/" to="/movies" /> 
      </Switch>
    </div>
  );
};

export default App;
