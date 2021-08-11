import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appointment from "./component/Appointment/Appointment/Appointment";
import Layout from "./component/Layout/Layout";
import Login from "../src/component/Login/Login";
import AboutDefiner from "./component/Custom/AboutDefiner/AboutDefiner";
import CustomServices from "./component/Custom/CustomService/Services/CustomServices";
import CustomBlog from "./component/Custom/CustomBlog/CustomBlog";

//
export const UserContext = createContext();
const App = () => {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Layout></Layout>
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <AboutDefiner></AboutDefiner>
          </Route>
          <Route path="/service">
            <CustomServices></CustomServices>
          </Route>
          <Route path="/blog">
            <CustomBlog></CustomBlog>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
