import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "../stylesheets/loginpage.css";
import LandingPage from '../pages/LandingPage.js'
import CreateAccountPage from '../pages/CreateAccountPage.js'
import navigation from '../navigation'


// We need to setup the database to mutable with useState so that when a user creates a new account, it will mutate the database

// Need to setup a boolean useState so that the page knows when to go from the login page to the landing page 
// ---this is more likely to be done more on the landing page. 


//Have to make a page to create an account info.


function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);

  const[navigation, setNavigation] = useState("renderForm");
  const switchToCreateAccount = () => {
      setNavigation("createAccount");
  };

  // Previous User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  // const [database, setDatabase] = useState([]);

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setNavigation("landingPage");
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="app">
      <div className="login-form">
        <div className="title">
          Sign in
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {renderErrorMessage("uname")}
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {renderErrorMessage("pass")}
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>

              <button onClick={switchToCreateAccount}> Create Account </button>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
  
  /*
  navigation value = "login" "create" "dashboard"

  navigation manager 
    if ("login") ...
    else if ("create") ...
    else "dashboard" ...

    login/create
    dashboard/login-create

    login/create/dashbboard

  login page< ---> create account
     |               |
      x -----x-------x
             |
             v
          Dashboard

  */


if (navigation === "renderForm") {
  return <div> {renderForm} </div>

} else if(navigation === "createAccount") {
  return <CreateAccountPage/>
} else if(navigation === "landingPage") {
  return <LandingPage/>
}
  
}

export default App;