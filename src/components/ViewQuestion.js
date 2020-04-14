import React, { Component } from "react";
import { connect } from "react-redux";
import Result from "./Result";
import Poll from "./Poll";
import { Redirect } from "react-router-dom";

class ViewQuestion extends Component {
  render() {
    if (this.props.isValidId) {
      if (this.props.isQuestionAnswered) {
        return (
          <Result
            author={this.props.author}
            question={this.props.question}
            userVote={this.props.userVote}
          />
        );
      }
      return <Poll author={this.props.author} question={this.props.question} />;
    }
    return <Redirect to="/error" />;
  }
}

function mapStateToProps({ authedUser, users, questions }, { match }) {
  const { questionId } = match.params;
  const question = questions[questionId];
  let author, userVote;
  let isQuestionAnswered = false;
  let isValidId = false;
  if (question !== undefined) {
    isValidId = true;
    author = users[authedUser];
    isQuestionAnswered =
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser);
    userVote = users[authedUser].answers[questionId];
  }
  return {
    isValidId,
    isQuestionAnswered,
    userVote,
    author,
    question,
  };
}

export default connect(mapStateToProps)(ViewQuestion);
