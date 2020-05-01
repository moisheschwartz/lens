import React from "react";
import Login from "./components/login";
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import PrivateRouter from "./privateRoutes";

const loggedin = localStorage.getItem("loggedin");

function App() {
  return (
    <Router>
      {loggedin ? "" : <Redirect to="/login" />}
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route component={PrivateRouter} />
      </Switch>
    </Router>
  );
}

export default App;
