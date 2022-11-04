import React, { useState } from "react";
// import ReactDOM from "react-dom";
import "../stylesheets/loginpage.css";


function LoginPage(props) {
  // React States
  const [errorMessages, setErrorMessages] = useState({});

  const switchToCreateAccount = () => {
      props.setNavigation("createAccount");
  };


  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

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

              <div className="create-account-realign">
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