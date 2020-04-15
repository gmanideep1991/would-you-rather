import React, { Component } from "react";
import { connect } from "react-redux";
import Result from "./Result";
import Poll from "./Poll";
import { Redirect } from "react-router-dom";
import { handleSaveQuestionAnswer } from "../actions/users";

class ViewQuestion extends Component {
  submitPoll = (user, qid, optionValue) => {
    this.props.dispatch(handleSaveQuestionAnswer(user, qid, optionValue));
  };
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
      return (
        <Poll
          author={this.props.author}
          question={this.props.question}
          authedUser={this.props.authedUser}
          submitPoll={this.submitPoll}
        />
      );
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
    author = users[question.author];
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
    authedUser,
  };
}

export default connect(mapStateToProps)(ViewQuestion);
