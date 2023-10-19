import React from 'react'
import { Link } from 'react-router-dom';
import { Alert } from "react-bootstrap";

function LoginForm({
    email,
    password,
    setPassword,
    setEmail,
    handleSubmit,
    showAlert,
    setShowAlert,
    errorMessage,
    validateForm
}) {
    return (
        <>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <div className="text-center">
                                                    <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                                </div>
                                                <form className="user" onSubmit={handleSubmit}>
                                                    <div className="form-group">
                                                        {showAlert && (
                                                            <Alert variant={errorMessage ? "danger" : "success"} onClose={() => setShowAlert(false)} dismissible>
                                                                {errorMessage ? errorMessage : "Login successful!"}
                                                            </Alert>
                                                        )}
                                                        <input className="form-control form-control-user"
                                                            type="email"
                                                            id="email"
                                                            name="email"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            aria-describedby="emailHelp"
                                                            placeholder="Enter Email Address..."
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input className="form-control form-control-user"
                                                            type="password"
                                                            name="password"
                                                            id="password"
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            placeholder="Password"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <div className="custom-control custom-checkbox small">
                                                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                                                            <label className="custom-control-label" htmlFor="customCheck">Remember
                                                                Me</label>
                                                        </div>
                                                    </div>
                                                    <button className="btn btn-primary btn-user btn-block" disabled={!validateForm()}>
                                                        Login
                                                    </button>
                                                    <hr />
                                                    <a href="/#" className="btn btn-google btn-user btn-block">
                                                        <i className="fab fa-google fa-fw"></i> Login with Google
                                                    </a>
                                                    <a href="/#" className="btn btn-facebook btn-user btn-block">
                                                        <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                                    </a>
                                                </form>
                                                <hr />
                                                <div className="text-center">
                                                    <Link className="small" to="/forgot-password">Forgot Password?</Link>
                                                </div>
                                                <div className="text-center">
                                                    <Link className="small" to="/sign-up">Create an Account!</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default LoginForm