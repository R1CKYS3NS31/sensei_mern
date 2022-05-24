import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../components/NavBar";
import { MoviesList, MoviesInsert, MoviesUpdate } from "../pages/index";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/movies/list" exact component={MoviesList} />
        <Route path="/movies/create" exact component={MoviesInsert} />
        <Route path="/movies/update/:id" exact component={MoviesUpdate} />
      </Switch>
    </Router>
  );
}

export default App;
