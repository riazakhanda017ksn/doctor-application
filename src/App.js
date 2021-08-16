import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Appointment from "./component/Appointment/Appointment/Appointment";
import Layout from "./component/Layout/Layout";
import Login from "../src/component/Login/Login";
import AboutDefiner from "./component/Custom/AboutDefiner/AboutDefiner";
import CustomServices from "./component/Custom/CustomService/Services/CustomServices";
import CustomBlog from "./component/Custom/CustomBlog/CustomBlog";
import PrivateRoute from "./component/PrivateRoute/PrivateRoute";
import ContactSection from "./component/Custom/ContactSection/ContactSection";
import DashboardLayout from "./component/Dashboard/DashboardLayout/DashboardLayout";
import DashboardCalender from "./component/Dashboard/DashboardCalender/DashboardCalender";
import AddDoctor from "./component/Dashboard/AddDoctor/AddDoctor";
import ReviewUpload from "./component/ReviewUpload/ReviewUpload";
import Admin from "./component/Dashboard/Admin/Admin";
import ShowAdmin from "./component/Dashboard/ShowAdmin/ShowAdmin";
import AppoinmentManagement from "./component/Appointment/AppoinmentManagement/AppoinmentManagement";
import Activities from "./component/Dashboard/Acivities/Activities";
import DashboardActivities from "./component/Dashboard/DashboardActivities/DashboardActivities";

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
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
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
          <Route path="/contact">
            <ContactSection></ContactSection>
          </Route>
          <PrivateRoute path="/dashboard">
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
          <PrivateRoute path="/myAppointment">
            <DashboardCalender></DashboardCalender>
          </PrivateRoute>
          <PrivateRoute path="/review">
            <ReviewUpload></ReviewUpload>
          </PrivateRoute>
          <PrivateRoute path="/add-admin">
            <Admin></Admin>
          </PrivateRoute>
          <privateRoute path="/admin">
            <ShowAdmin></ShowAdmin>
          </privateRoute>
          <PrivateRoute path="/add-doctor">
            <AddDoctor></AddDoctor>
          </PrivateRoute>
          <PrivateRoute path="/appointment_management">
            <AppoinmentManagement></AppoinmentManagement>
          </PrivateRoute>
          <PrivateRoute path="/dashboardActivities">
            <Activities></Activities>
          </PrivateRoute>
          <PrivateRoute path="/active">
            <DashboardActivities></DashboardActivities>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
