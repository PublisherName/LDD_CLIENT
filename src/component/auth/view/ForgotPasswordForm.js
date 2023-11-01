import React from 'react'
import { Link } from 'react-router-dom';

function ForgotPasswordForm(
    {
        email,
        setEmail,
        showAlert,
        setShowAlert,
        errorMessage,
        validateForm,
        handleSubmit,
        isLoading
    }
) {
    return (
        <div className="container">
            <div className="row justify-content-center">

                <div className="col-xl-10 col-lg-12 col-md-9">

                    <div className="card o-hidden border-0 shadow-lg my-5">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-6 d-none d-lg-block bg-password-image"></div>
                                <div className="col-lg-6">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-2">Forgot Your Password?</h1>
                                            <p className="mb-4">We get it, stuff happens. Just enter your email address below
                                                and we'll send you a link to reset your password!</p>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit}>
                                            <div className="form-group">
                                                <input className="form-control form-control-user"
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    aria-describedby="emailHelp"
                                                    placeholder="Enter Email Address..."
                                                    required
                                                />
                                            </div>

                                            {isLoading ?
                                                <div className="d-flex justify-content-center">
                                                    <div className="spinner-border" role="status">
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                </div>
                                                : <button className="btn btn-primary btn-user btn-block" disabled={!validateForm()}>
                                                    Reset Password
                                                </button>}
                                        </form>
                                        <hr />
                                        <div className="text-center">
                                            <Link className="small" to="/sign-up">Create an Account!</Link>
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

            </div>
        </div>
    )
}

export default ForgotPasswordForm