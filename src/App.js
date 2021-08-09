import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appointment from "./component/Appointment/Appointment/Appointment";
import Layout from "./component/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout></Layout>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
