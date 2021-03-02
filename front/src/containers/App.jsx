import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import NavBar from "../components/NavBar";
import TopMovies from "../components/TopMovies";
import SelectedMovie from "./SelectedMovie";
import getPopularMovies from "../store/movies";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/movies" render={() => <TopMovies />} />
        <Route
          path="/movies/:id"
          render={({ match }) => <SelectedMovie movieId={match.params.id} />}
        />
        <Redirect from="/" to="/movies" />
      </Switch>
    </div>
  );
};

export default App;
