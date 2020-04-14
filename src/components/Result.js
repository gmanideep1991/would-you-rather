import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Link } from "react-router-dom";

function calculatePercent(votes, totalVotes) {
  let percent = ((votes / totalVotes) * 100).toFixed(2);
  return parseFloat(percent);
}

export default function Result(props) {
  const { author, question, userVote } = props;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;

  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader title={`${author.name} asked`} />
        <CardContent>
          <Card>
            <CardContent>
              <h4>
                {userVote === "optionOne" && "you chose: "}
                {question.optionOne.text}
              </h4>
              <LinearProgress
                variant="determinate"
                value={calculatePercent(optionOneVotes, totalVotes)}
              />
              <div>{`${optionOneVotes} of ${totalVotes}`}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4>
                {userVote === "optionTwo" && "you chose: "}
                {question.optionTwo.text}
              </h4>
              <LinearProgress
                variant="determinate"
                value={calculatePercent(optionTwoVotes, totalVotes)}
              />
              <div>{`${optionTwoVotes} of ${totalVotes}`}</div>
            </CardContent>
          </Card>
        </CardContent>

        <CardActions>
          <Button component={Link} variant="contained" fullWidth to="/">
            Go Home!!
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
