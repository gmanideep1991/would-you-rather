import React, { Component } from "react";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { setAuthedUser } from "../actions/authedUser";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
});

class Login extends Component {
  state = {
    userId: "",
  };
  handleChange = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };
  handleSubmit = () => {
    this.props.dispatch(setAuthedUser(this.state.userId));
  };
  render() {
    return (
      <Container maxWidth="sm">
        <Card>
          <CardHeader title="Login" />
          <CardContent style={{ textAlign: "center" }}>
            <FormControl
              variant="outlined"
              className={this.props.classes.formControl}
            >
              <InputLabel htmlFor="outlined-user-native-simple">
                user
              </InputLabel>

              <Select
                native
                value={this.state.userId}
                onChange={this.handleChange}
                label="User"
                inputProps={{
                  name: "user",
                  id: "outlined-user-native-simple",
                }}
              >
                <option hidden value="default">
                  Select a user...
                </option>
                {this.props.users.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              </Select>
              <Button
                component={Link}
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
                to={
                  this.props.location === undefined
                    ? "/"
                    : this.props.location.from
                }
              >
                Submit
              </Button>
            </FormControl>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users: Object.values(users),
  };
}
export default connect(mapStateToProps)(
  withStyles(useStyles, { withTheme: true })(Login)
);
