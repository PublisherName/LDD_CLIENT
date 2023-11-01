import React from 'react'
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';

function SignupNew(
  {
    formData,
    handleInputChange,
    showAlert,
    setShowAlert,
    errorMessage,
    handleSubmit,
    validateForm,
    isLoading
  }
) {
  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
                </div>
                <form className="user" onSubmit={handleSubmit}>
                  {showAlert && (
                    <Alert variant={errorMessage ? "danger" : "success"} onClose={() => setShowAlert(false)} dismissible>
                      {errorMessage ? errorMessage : "Signup successful!"}
                    </Alert>
                  )}
                  <div className="form-group">
                    <input className="form-control form-control-user"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      id="username"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input className="form-control form-control-user"
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        id="first_name"
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input className="form-control form-control-user"
                        type="text"
                        name="last_name"
                        id="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input className="form-control form-control-user"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      id="email"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input className="form-control form-control-user"
                        type="password"
                        name="password"
                        value={formData.password}
                        id="password"
                        onChange={handleInputChange}
                        placeholder="Password"
                        required
                      />
                    </div>
                    <div className="col-sm-6">
                      <input className="form-control form-control-user"
                        type="password"
                        name="confirm_password"
                        id="confirm_password"
                        value={formData.confirm_password}
                        onChange={handleInputChange}
                        placeholder="Repeat Password"
                        required
                      />
                    </div>
                  </div>
                  {isLoading ?
                    <div className="d-flex justify-content-center">
                      <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    </div>
                    : <button className="btn btn-primary btn-user btn-block" type="submit" disabled={!validateForm()}>
                      Register Account
                    </button>
                  }
                  <hr />
                </form>
                <hr />
                <div className="text-center">
                  <Link className="small" to="/forgot-password">Forgot Password?</Link>
                </div>
                <div className="text-center">
                  <Link className="small" to="/login">Already have an account? Login!</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupNew