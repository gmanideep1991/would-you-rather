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
});

class Login extends Component {
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
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
            value={this.props.value}
            onChange={this.handleChange}
            label="Age"
            inputProps={{
              name: "age",
              id: "outlined-age-native-simple",
            }}
          >
            <option aria-label="None" value="" />
            {/* {this.props.users.map((user) => (
              <option value={user.id}>user.name</option>
            ))} */}
          </Select>
        </FormControl>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users,
    value: "",
  };
}
export default connect(mapStateToProps)(
  withStyles(useStyles, { withTheme: true })(Login)
);
