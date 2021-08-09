import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "./component/Layout/Layout";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout></Layout>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
