import React from 'react';
import { useState } from 'react';
import '../stylesheets/createaccountpage.css';

function CreateAccountPage(props) {

  const handleForm = (e) => {
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }));
  };
  
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  });

  //fix this
  const updateDatabase = (inputs) => {
    const x = [...props.database, {username: inputs.username, password: inputs.password} ]
    console.log(x);
    props.setDatabase(x)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Successfully created a new account!');
    returnToLoginPage();
  }


  const returnToLoginPage = () => {
    props.setNavigation("loginPage");
  }

  return (
    
      <section className="form-section">
        <h1 className="heading"> Create your Account! </h1>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label className="label">
              Username <span className="requiredLabel">*</span>
            </label>
            <input
              name = "username"
              onChange={handleForm}
              placeholder="user01"
              tabIndex={-1}
              required
            />
          </div>
          <div className="input-block">
            <label className="label">
              Password <span className="requiredLabel">*</span>
            </label>
            <input
              className={`input ${
                inputs.password.length < 8 ? 'wrong-input' : 'correct-input'
              }`}
              type="password"
              name="password"
              onChange={handleForm}
              minLength="8"
              tabIndex={-1}
              required
            />
          </div>
          <div>
            {inputs.password.length < 8 ? (
              <p className="warning-message">
                Password length should be at least 8 characters
              </p>
            ) : (
              ''
            )}
          </div>
            <button 
              type = "submit"
              tabIndex={-1}
              className={`submit-button ${
                inputs.password.length > 8 ? 'button-success' : ''
              }`}
              // onClick={() => {updateDatabase(); returnToLoginPage();}}
            >
              Submit
            </button>
        </form>
      </section>
    
  );
}

export default CreateAccountPage;