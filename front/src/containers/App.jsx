import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Header from "../components/Header";
import TopMovies from "../components/TopMovies";
import Register from "../components/Register"
import Movie from "../components/Movie";
import Users from "../components/Users";
import Login from "../components/Login";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <TopMovies/>} />
        <Route
          path="/movies/:id"
          render={({ match }) => <Movie movieId={match.params.id} />}
        />
        <Route path="/login" render={() => <Login />}/>
        <Route path="/register" render={() => <Register />}/>
        <Route path="/users" render={() => <Users />} />
        {/* <Redirect from="/" to="/movies" /> */}
      </Switch>
    </div>
  );
};

export default App;
