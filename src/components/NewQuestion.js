import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
  root: {
    minWidth: 275,
    marginTop: 25,
    padding: 25,
  },
  or: {
    textAlign: "center",
    padding: "15px 0px",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
class NewQuestion extends Component {
  state = {
    optionOne: "",
    optionTwo: "",
  };
  updateOption = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  addQuestion = (e) => {
    e.preventDefault();
    const question = {
      author: this.props.author,
      optionone: this.state.optionOne,
      optiontwo: this.state.optionTwo,
    };
    console.log(question);
  };
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="sm">
        <Card className={classes.root} variant="outlined">
          <CardHeader title="Create a new question:" />
          <CardContent>
            <Typography component="h6">Would you rather?</Typography>
          </CardContent>
          <TextField
            id="optionOne"
            label="option one"
            type="text"
            variant="outlined"
            fullWidth
            value={this.state.optionOne}
            onChange={this.updateOption}
          />
          <Typography component="h6" className={classes.or}>
            OR
          </Typography>
          <TextField
            id="optionTwo"
            label="option two"
            type="text"
            variant="outlined"
            fullWidth
            value={this.state.optionTwo}
            onChange={this.updateOption}
          />
          <CardActions>
            <Button variant="contained" fullWidth onClick={this.addQuestion}>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Container>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    author: authedUser,
  };
}

export default connect(mapStateToProps)(
  withStyles(useStyles, { withTheme: true })(NewQuestion)
);
