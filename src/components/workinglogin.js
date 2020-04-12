import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
class Dashboard extends Component {
  render() {
    return <div>{JSON.stringify(this.props.users)}</div>;
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(Dashboard);
