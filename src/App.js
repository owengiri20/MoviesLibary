import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route, Switch } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Footer from "./Components/Footer";
import ViewMovie from "./Components/ViewMovie";
import CastMemberProfile from "./Components/CastMemberProfile";
import MovieSearchResults from "./Components/MovieSearchResults";


import DisplayCarousels from "./Components/DisplayCarousels"
import API_KEY from './Helpers/key';

function App() {
  return (
    <div className="App scrollbar">
      <Navbar />
      <Switch>
        <Route
          exact path="/"
          render={() =>
            <div>
              <Landing />
              <DisplayCarousels />
            </div>} />

        <Route
          exact
          path="/ViewMovie/:id"
          render={(routeProps) => <ViewMovie {...routeProps}
          />} />

        <Route
          path="/Person/:id"
          exact render={(routeProps) => <CastMemberProfile {...routeProps}
          />} />

        <Route
          path="/SearchMovie/:query"
          exact render={(routeProps) => <MovieSearchResults {...routeProps}
          />} />
      </Switch>


      <Footer />
    </div>
  );
}

export default App;
