import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/common";
import LoadingBar from "react-redux-loading-bar";
import Navbar from "./Navbar";
import Add from "./Add";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        {this.props.authedUser === null ? (
          <Login />
        ) : (
          <Fragment>
            <Navbar />
            <LoadingBar />
            <div>
              <Route path="/" exact component={Home} />
              <Route path="/add" exact component={Add} />
              <Route path="/leaderboard" exact component={LeaderBoard} />
              {/* <Route path="/tweet/:id" component={TweetPage} />
              <Route path="/new" component={NewTweet} /> */}
            </div>
          </Fragment>
        )}
      </Router>
    );
  }
}
function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(App);
