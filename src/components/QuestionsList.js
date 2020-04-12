import React, { Component } from "react";
import { connect } from "react-redux";

class QuestionsList extends Component {
  render() {
    return <div>QuestionsList</div>;
  }
}

function mapStateToProps({ authUser, users }) {
  const user = users[authUser];
  return {
    user,
  };
}
export default connect(mapStateToProps)(QuestionsList);
