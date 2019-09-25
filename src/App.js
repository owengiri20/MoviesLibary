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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    }
    this.handleQuery = this.handleQuery.bind(this);
  }

  handleQuery(query) {
    this.setState({ query: query })
  }

  render() {
    return (
      <div className="App scrollbar">
        <Navbar handleQuery={this.handleQuery} />
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
            exact render={(routeProps) => <MovieSearchResults {...routeProps} query={this.state.query}
            />} />
        </Switch>


        <Footer />
      </div>
    );
  }

}

export default App;
