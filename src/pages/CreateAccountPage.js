import React from 'react';
import { useState } from 'react';
import '../stylesheets/createaccountpage.css';

function CreateAccountPage(props) {

  const handleForm = (e) => {
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }))
  };
  
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
    firstName: '',
    budget: '',
  });

  const updateDatabase = () => {
    const before = props.database;
    before.push({username: inputs.username, password: inputs.password, firstName: inputs.firstName, budget: inputs.budget})
    props.setDatabase(before)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    alert('Successfully created a new account!')
    returnToLoginPage()
    updateDatabase()
  }


  const returnToLoginPage = () => {
    props.setNavigation("loginPage")
  }

  return (
    <html>
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

          <div className="input-block">
            <label className="label">
              First Name: <span className="requiredLabel">*</span>
            </label>
            <input
              name = "firstName"
              onChange={handleForm}
              placeholder="Bob"
              tabIndex={-1}
              required
            />
          </div>

          <div className="input-block">
            <label className="label">
              Budget Amount: <span className="requiredLabel">*</span>
            </label>
            <input
              name = "budget"
              onChange={handleForm}
              placeholder="100"
              tabIndex={-1}
              required
            />
          </div>

            <input 
              type = "submit"
              value = "Submit"
              tabIndex={-1}
              className={`submit-button ${
                inputs.password.length > 8 ? 'button-success' : ''
              }`}
            />
        </form>
      </section>
      </html>
    
  );
}

export default CreateAccountPage;