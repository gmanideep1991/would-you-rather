import React, { Component } from "react";
import { connect } from "react-redux";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";

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
    userId: null,
  };
  handleChange = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <FormControl
          variant="outlined"
          className={this.props.classes.formControl}
        >
          <InputLabel htmlFor="outlined-age-native-simple">user</InputLabel>
          <Select
            native
            value={this.state.userId}
            onChange={this.handleChange}
            label="Age"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
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
        </FormControl>
      </div>
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
