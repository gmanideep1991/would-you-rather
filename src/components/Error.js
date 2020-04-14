import React from "react";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function Error(props) {
  return (
    <Container maxWidth="sm">
      <Card>
        <CardContent>
          <h3>Oops. URL might be broken or please go to home and login.</h3>
        </CardContent>
        <CardActions>
          <Button component={Link} to="/" size="small">
            Home
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
