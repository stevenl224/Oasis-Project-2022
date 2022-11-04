import React from 'react';
import '../stylesheets/createaccountpage.css';

function CreateAccountPage(props) {
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });

  const [toggleClass, setToggleClass] = React.useState(false);

  const handleForm = (e) => {
    setForm((formProps) => ({ ...formProps, [e.target.name]: e.target.value }));
  };

  const checkLength = () => {
    if (form.password.length < 8) {
      setToggleClass((prevState) => !prevState);
    }
  };


  //fix this
  const updateDatabase = () => {
    props.setDatabase([...props.database, form])
  }

  const returnToLoginPage = () => {
    props.setNavigation("loginPage");
  }

  return (
    
      <section className="form-section">
        <h1 className="heading"> Create your Account! </h1>
        <form
          autoComplete="false"
          action="https://formspree.io/f/meqvlgqr"
          method="POST"
        >
          <div className="input-block">
            <label className="label">
              Username <span className="requiredLabel">*</span>
            </label>
            <input
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
                form.password.length < 8 ? 'wrong-input' : 'correct-input'
              }`}
              type="password"
              name="password"
              value={form.password}
              onChange={handleForm}
              minLength="8"
              tabIndex={-1}
              required
            />
          </div>
          <div>
            {form.password.length < 8 ? (
              <p className="warning-message">
                Password length should be at least 8 characters
              </p>
            ) : (
              ''
            )}
          </div>
          <div
            className={`submit-button-wrapper ${toggleClass ? 'float' : ''}`}
          >
            <button 
              tabIndex={-1}
              className={`submit-button ${
                form.password.length > 8 ? 'button-success' : ''
              }`}
            //  onClick={updateDatabase, returnToLoginPage}
              onClick={() => {updateDatabase(); returnToLoginPage();}}
              onMouseEnter={checkLength}
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    
  );
}

export default CreateAccountPage;