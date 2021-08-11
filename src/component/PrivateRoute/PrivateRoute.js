import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { DataContext, UserContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          // (note:when i use session data then it need otherwise its shouldNot===>|| sessionStorage.getItem("token") )
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
