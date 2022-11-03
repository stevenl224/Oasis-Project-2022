import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "../stylesheets/loginpage.css";


// We need to setup the database to mutable with useState so that when a user creates a new account, it will mutate the database

// Need to setup a boolean useState so that the page knows when to go from the login page to the landing page 
// ---this is more likely to be done more on the landing page. 


//Have to make a page to create an account info.


function LoginPage(props) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});

  const switchToCreateAccount = () => {
    console.log('THis ran');
      props.setNavigation("createAccount");
  };

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
    const userData = props.database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        props.setNavigation("landingPage");
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

              <div className="submit">
                <button onClick={switchToCreateAccount}> Create Account </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return renderForm
}

export default LoginPage;