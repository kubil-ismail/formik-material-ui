import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from './Login';
import Register from './Register';

export default function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="login" />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}
