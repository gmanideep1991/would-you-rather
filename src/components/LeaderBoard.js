import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

function LeaderBoard(props) {
  const classes = useStyles();

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Answer Count</TableCell>
              <TableCell align="center">Question Count</TableCell>
              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.leaderboardData.map((user) => (
              <TableRow key={user.id}>
                <TableCell align="center">
                  <Chip
                    avatar={
                      <Avatar alt={user.name} src={user.avatarURL}></Avatar>
                    }
                    label={user.name}
                  />
                </TableCell>
                <TableCell align="center">{user.answerCount}</TableCell>
                <TableCell align="center">{user.questionCount}</TableCell>
                <TableCell align="center">{user.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
function mapStateToProps({ users }) {
  const leaderboardData = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      answerCount: Object.values(user.answers).length,
      questionCount: user.questions.length,
      total: Object.values(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.total - a.total);
  return {
    leaderboardData,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
