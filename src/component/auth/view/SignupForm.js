import React from 'react'
import { Link } from 'react-router-dom';

function SignupNew() {
  return (
    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div className="col-lg-7">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form className="user">
                <div className="form-group">
                  <input className="form-control form-control-user"
                    type="text"
                    name="username"
                    id="exampleInputUsername"
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input className="form-control form-control-user"
                      type="text"
                      name="firstName"
                      id="exampleFirstName"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input className="form-control form-control-user"
                      type="text"
                      name="lastName"
                      id="exampleLastName"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input className="form-control form-control-user"
                    type="email"
                    name="email"
                    id="exampleInputEmail"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <input className="form-control form-control-user"
                      type="password"
                      name="password"
                      id="exampleInputPassword"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input className="form-control form-control-user"
                      type="password"
                      name="password-confirm"
                      id="exampleRepeatPassword"
                      placeholder="Repeat Password"
                      required
                    />
                  </div>
                </div>
                <button className="btn btn-primary btn-user btn-block" type="submit">
                  Register Account
                </button>
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
  )
}

export default SignupNew