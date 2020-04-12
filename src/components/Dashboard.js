import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";
class Dashboard extends Component {
  render() {
    const { questionsData } = this.props;
    return (
      <div>
        <h3>Unanswered</h3>
        <div className="questions-list"></div>
        {questionsData.unAnswered.map((question) => (
          <Question question={question} />
        ))}
        <h3>Answered</h3>
        <div className="questions-list"></div>
        {questionsData.answered.map((question) => (
          <Question question={question} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  const answerIds = Object.keys(users[authedUser].answers);
  const answered = Object.values(questions)
    .filter((question) => answerIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);
  const unAnswered = Object.values(questions)
    .filter((question) => !answerIds.includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return {
    questionsData: { answered, unAnswered },
  };
}
export default connect(mapStateToProps)(Dashboard);
