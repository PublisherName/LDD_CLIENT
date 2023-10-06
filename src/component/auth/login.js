import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Alert } from "react-bootstrap";
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  return fetch('http://127.0.0.1:8080/auth/login/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .then(data => {
      if (data.detail === "Login successful") {
        return data.token;
      } else {
        throw new Error(`${data.detail}`)
      }
    })
    .catch(error => {});
}



const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function validateForm() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email) > 0 && password.length > 0;
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      "login":email,
      password: password
    });
    if (token){
      setToken(token);
      setShowAlert(true);
      
    } else {
      setShowAlert(true);
      setErrorMessage("Login failed");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      {showAlert && (
        <Alert variant={errorMessage ? "danger" : "success"} onClose={() => setShowAlert(false)} dismissible>
          {errorMessage ? errorMessage : "Login successful!"}
        </Alert>
      )}
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button className="btn btn-primary" disabled={!validateForm()} >
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        <Link to="/sign-up">Sign up</Link> | <Link to="#">Forgot password?</Link>
      </p>
    </form>
  )
}

export default Login

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};