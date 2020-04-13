import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SimpleTabPanel, { a11yProps } from "./SimpleTabPanel";
import Question from "./Question";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
});
class Home extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };
  render() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Tabs
            variant="standard"
            value={this.state.value}
            onChange={this.handleChange}
            aria-label="nav tabs"
            centered
          >
            <Tab label="UnAnswered" {...a11yProps(0)} />
            <Tab label="Answered" {...a11yProps(1)} />
          </Tabs>

          <SimpleTabPanel value={this.state.value} index={0}>
            <Grid direction="column" container spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  {this.props.questionsData.unAnswered.map((question) => (
                    <Question question={question} answered="false" />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </SimpleTabPanel>
          <SimpleTabPanel value={this.state.value} index={1}>
            <Grid direction="column" container spacing={2}>
              <Grid item xs={12}>
                <Grid container justify="center" spacing={2}>
                  {this.props.questionsData.answered.map((question) => (
                    <Question question={question} answered="true" />
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </SimpleTabPanel>
        </Grid>
      </Grid>
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
export default connect(mapStateToProps)(
  withStyles(useStyles, { withTheme: true })(Home)
);
