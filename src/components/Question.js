import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Question(props) {
  const { question, answered } = props;
  const classes = useStyles();

  return (
    <Grid item xs={8}>
      <Card className={classes.root} variant="outlined">
        <CardHeader title={question.author} />
        <CardContent>
          <Typography component="h6">Would you rather?</Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {question.optionOne.text}
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            or
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {question.optionTwo.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            {answered === "true" ? "View results" : "Answer Question"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
