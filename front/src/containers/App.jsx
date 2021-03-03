import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../components/Header";
import TopMovies from "../components/TopMovies";
import Auth from "../components/Auth"
import SelectedMovie from "./SelectedMovie";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/movies" render={() => <TopMovies />} />
        <Route
          path="/movies/:id"
          render={({ match }) => <SelectedMovie movieId={match.params.id} />}
        />
        <Route path="/auth" render={() => <Auth />}/>
        <Redirect from="/" to="/movies" />
      </Switch>
    </div>
  );
};

export default App;
