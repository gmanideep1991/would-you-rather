import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  userprofile: {
    textAlign: "right",
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
});

class NavTabs extends Component {
  state = {
    value: 0,
  };

  handleChange = (event, newValue) => {
    this.setState({
      value: newValue,
    });
  };
  handleLogout = () => {
    this.props.dispatch(setAuthedUser(null));
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <AppBar position="static">
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <Tabs
                variant="standard"
                value={this.state.value}
                onChange={this.handleChange}
                aria-label="nav tabs"
                centered
              >
                <Tab component={Link} label="Home" to="/" />
                <Tab component={Link} label="New Question" to="/add" />
                <Tab component={Link} label="Leaderboard" to="/leaderboard" />
              </Tabs>
            </Grid>
            <Grid item xs={6} className={this.props.classes.userprofile}>
              <Chip
                avatar={
                  <Avatar
                    alt={this.props.user.name}
                    src={this.props.user.avatarURL}
                  ></Avatar>
                }
                label={this.props.user.name}
              />
              <Button
                component={Link}
                variant="contained"
                color="secondary"
                className={this.props.classes.button}
                endIcon={<ExitToAppIcon />}
                onClick={this.handleLogout}
                to="/"
              >
                Logout
              </Button>
            </Grid>
          </Grid>
        </AppBar>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    user: users[authedUser],
  };
}
export default connect(mapStateToProps)(
  withStyles(useStyles, { withTheme: true })(NavTabs)
);
