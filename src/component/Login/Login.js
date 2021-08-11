import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import { Form, Button } from "react-bootstrap";
import firebaseConfig from "./firebase.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import "./Login.css";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    displayName: "",
    email: "",
    photoURL: "",
    name: "",
    password: "",
    confirm_password: "",
    error: "",
    success: false,
  });
  console.log(user);
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  // for google signIn
  const googleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isSignedIn: true,
          displayName: displayName,
          email: email,
          photoURL: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
        // setUserToken();
        // return signedInUser;
      });
  };

  // const setUserToken = () => {
  //   firebase
  //     .auth()
  //     .currentUser.getIdToken(/* forceRefresh */ true)
  //     .then(function (idToken) {
  //       sessionStorage.setItem("token", idToken);
  //     })
  //     .catch(function (error) {
  //       // Handle error
  //     });
  // };

  console.log(user);

  ///

  const handleBlur = (event) => {
    let isFieldValid = true;
    if (event.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === "password") {
      isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,20}$/.test(
        event.target.value
      );
    }
    if (event.target.name === "confirm_password") {
      isFieldValid = /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{6,20}$/.test(
        event.target.value
      );
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      if (user.password !== user.confirm_password) {
        const newUserInfo = { ...user };
        newUserInfo.error = "Password did not match : Please try again...";
        setUser(newUserInfo);
      } else {
        firebase
          .auth()
          .createUserWithEmailAndPassword(user.email, user.password)
          .then((res) => {
            const errorMessage = "";
            const newUserInfo = { ...user };
            newUserInfo.error = errorMessage;
            newUserInfo.success = true;
            setUser(newUserInfo);
            console.log(errorMessage);
            console.log(user.name);
            updateUserName(user.name);
            setLoggedInUser(newUserInfo);
            history.replace(from);
          })
          .catch((error) => {
            const errorMessage = error.message;
            const newUserInfo = { ...user };
            newUserInfo.error = errorMessage;
            newUserInfo.success = false;
            setUser(newUserInfo);
            console.log(errorMessage);
          });
      }
    }
    if (!newUser && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          // Signed in
          const errorMessage = "";
          const newUserInfo = { ...user };
          newUserInfo.error = errorMessage;
          newUserInfo.success = true;
          console.log(newUserInfo);
          setUser(newUserInfo);
          console.log("sign in user info ", res.user);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((error) => {
          const errorMessage = error.message;
          const newUserInfo = { ...user };
          newUserInfo.error = "SignUp First !! Please try again...";
          newUserInfo.success = false;
          setUser(newUserInfo);
          console.log(errorMessage);
        });
    }
    e.preventDefault();
  };
  const updateUserName = (name) => {
    console.log(name);
    const user = firebase.auth().currentUser;
    user
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        console.log("Update successful.");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(user.displayName);
  return (
    <>
      <div className="row">
        <div className="col-lg-6">
          <div className="need-bg">
            <div className="email-with-password">
              <div className="new-user px-3">
                {newUser ? (
                  <h3>Create An Account</h3>
                ) : (
                  <h3 className="position-need">Log In</h3>
                )}
              </div>
              <form onSubmit={handleSubmit}>
                {newUser && (
                  <input
                    type="text"
                    name="name"
                    onBlur={handleBlur}
                    onFocus={handleBlur}
                    placeholder="Your Name"
                    required
                  />
                )}
                <br />
                <input
                  type="email"
                  name="email"
                  onBlur={handleBlur}
                  onFocus={handleBlur}
                  placeholder="Email"
                  required
                />
                <br />
                <input
                  type="password"
                  name="password"
                  onBlur={handleBlur}
                  placeholder="Password"
                  required
                />
                <br />
                {newUser && (
                  <input
                    type="password"
                    name="confirm_password"
                    onBlur={handleBlur}
                    placeholder="Confirm Password"
                    required
                  />
                )}
                <br />

                <button type="submit">{newUser ? "Sign up" : "Sign In"}</button>
              </form>
              {newUser ? (
                <div className="need-flex">
                  <div className="need-a-caption">
                    <p> already Have an Account</p>
                  </div>
                  <div className="create-an-account">
                    <p onClick={() => setNewUser(!newUser)}>Log In </p>
                  </div>
                </div>
              ) : (
                <div className="need-flex">
                  <div className="need-a-caption">
                    <p>If you are new to the site </p>
                  </div>
                  <div className="create-an-account">
                    <p onClick={() => setNewUser(!newUser)}>
                      Create An Account
                    </p>
                  </div>
                </div>
              )}
              <p style={{ color: "red" }}>{user.error}</p>
              {user.success && (
                <p style={{ color: "green" }}>
                  User {newUser ? "created" : "Logged In"} successfully
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="sign-in">
            <div onClick={googleSignIn} className="google-sign-in">
              <div className="logo">
                <span>
                  {" "}
                  <FontAwesomeIcon icon={faGoogle} />
                </span>
              </div>
              <div className="title">
                <h3>Sign In With Google</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
