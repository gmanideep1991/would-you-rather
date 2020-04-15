import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

function calculatePercent(votes, totalVotes) {
  let percent = ((votes / totalVotes) * 100).toFixed(2);
  return parseFloat(percent);
}

export default function Result(props) {
  const { author, question, userVote } = props;
  const optionOneVotes = question.optionOne.votes.length;
  const optionTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePercent = calculatePercent(optionOneVotes, totalVotes);
  const optionTwoPercent = calculatePercent(optionTwoVotes, totalVotes);

  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader
          avatar={<Avatar alt={author.name} src={author.avatarURL}></Avatar>}
          title={`${author.name} asked`}
        />
        <CardContent>
          <h2>
            You chose :
            {userVote === "optionOne"
              ? question.optionOne.text
              : question.optionTwo.text}
          </h2>
          <Card>
            <CardContent>
              <h4>
                1. {question.optionOne.text} - {optionOnePercent}%
              </h4>
              <LinearProgress variant="determinate" value={optionOnePercent} />
              <div>{`${optionOneVotes} of ${totalVotes}`} votes</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h4>
                2. {question.optionTwo.text} - {optionTwoPercent}%
              </h4>
              <LinearProgress variant="determinate" value={optionTwoPercent} />
              <div>{`${optionTwoVotes} of ${totalVotes}`} votes </div>
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
