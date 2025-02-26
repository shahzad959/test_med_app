import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Login.css'; // Import the CSS file for styling

const Login = () => {
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add your login logic here
    console.log('Form submitted');
  };

  return (
    <div className="container">
      {/* Main container div for the page content */}
      <div className="login-grid">
        {/* Div for login grid layout */}
        <div className="login-text">
          {/* Div for login text */}
          <h2>Login</h2>
        </div>
        <div className="login-text">
          {/* Additional login text with a link to Sign Up page */}
          Are you a new member?{' '}
          <span>
            <Link to="/signup" style={{ color: '#2190FF' }}>
              Sign Up Here
            </Link>
          </span>
        </div>
        <br />
        <div className="login-form">
          {/* Div for login form */}
          <form onSubmit={handleSubmit}>
            {/* Form group for email input */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-describedby="helpId"
                required // Ensure the field is required
              />
            </div>
            {/* Form group for password input */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                aria-describedby="helpId"
                required // Ensure the field is required
              />
            </div>
            {/* Button group for login and reset buttons */}
            <div className="btn-group">
              <button
                type="submit"
                className="btn btn-primary mb-2 mr-1 waves-effect waves-light"
              >
                Login
              </button>
              <button
                type="reset"
                className="btn btn-danger mb-2 waves-effect waves-light"
              >
                Reset
              </button>
            </div>
            <br />
            {/* Additional login text for 'Forgot Password' option */}
            <div className="login-text">Forgot Password?</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;