import React from "react";
import { Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";

import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";

import JobsList from "./components/jobs/jobsList/jobsList";
import JobDetails from "./components/jobs/job/jobDetails";

function PrivateRouter() {
  const loggedin = localStorage.getItem("loggedin");
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Grid container justify="space-between">
            <Typography variant="h6">Lens Project</Typography>
            <Button
              color="inherit"
              onClick={() => {
                localStorage.removeItem("loggedin");
                window.location.href = "/login";
              }}
            >
              Logout
            </Button>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid
        container
        style={{ marginTop: "120px" }}
        justify="center"
        alignItems="center"
      >
        <Grid item xs={8}>
          <Router>
            {!loggedin ? <Redirect to="/login" /> : ""}
            <Switch>
              <Route path="/" exact component={JobsList} />
              <Route path="/jobs" exact component={JobsList} />
              <Route path="/job/:id" exact component={JobDetails} />
            </Switch>
          </Router>
        </Grid>
      </Grid>
    </>
  );
}

export default PrivateRouter;
