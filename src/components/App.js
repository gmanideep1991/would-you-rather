import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/common";
import LoadingBar from "react-redux-loading-bar";
import Navbar from "./Navbar";
import Home from "./Home";
import LeaderBoard from "./LeaderBoard";
import Login from "./Login";
import NewQuestion from "./NewQuestion";
import ViewQuestion from "./ViewQuestion";
import Error from "./Error";

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
            <Route path="/" exact component={Home} />
            <Route path="/add" exact component={NewQuestion} />
            <Route path="/leaderboard" exact component={LeaderBoard} />
            <Route
              path="/question/:questionId"
              exact
              component={ViewQuestion}
            />
            <Route path="/error" exact component={Error} />
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
