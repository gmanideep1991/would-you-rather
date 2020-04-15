import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
  },
}));

export default function Poll(props) {
  const { author, question, authedUser, submitPoll } = props;

  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(" ");
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value === "") {
      setHelperText("Please select an option.");
      setError(true);
    } else {
      submitPoll(authedUser, question.id, value);
    }
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <CardHeader
          avatar={<Avatar alt={author.name} src={author.avatarURL}></Avatar>}
          title={`${author.name} asked`}
        />
        <CardContent>
          <form onSubmit={handleSubmit}>
            <FormControl
              component="fieldset"
              error={error}
              className={classes.formControl}
            >
              <FormLabel component="legend">Would you rather?</FormLabel>
              <RadioGroup
                aria-label="quiz"
                name="quiz"
                value={value}
                onChange={handleRadioChange}
              >
                <FormControlLabel
                  value="optionOne"
                  control={<Radio />}
                  label={question.optionOne.text}
                />
                <FormControlLabel
                  value="optionTwo"
                  control={<Radio />}
                  label={question.optionTwo.text}
                />
              </RadioGroup>
              <FormHelperText>{helperText}</FormHelperText>
              <div style={{ display: "inline-flex" }}>
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                >
                  Submit
                </Button>
                <Button
                  component={Link}
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  to="/"
                >
                  Go home!!
                </Button>
              </div>
            </FormControl>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}
