import React from 'react'
import { Link } from 'react-router-dom'

function ActivateAccountView({errorMessage,sucessMessage}) {
  return (
    <>
        <div className="container">
                <div className="row justify-content-center">

                    <div className="col-xl-10 col-lg-12 col-md-9">

                        <div className="card o-hidden border-0 shadow-lg my-5">
                            <div className="card-body p-0">
                                    <div className="col-lg-12">
                                        <div className="p-5">
                                            <div className="text-center">
                                                <h1 className="h4 text-gray-900 mb-2">Account activation?</h1>
                                                {errorMessage && 
                                                    <div className="alert alert-danger" role="alert">
                                                    {errorMessage} <br /> 
                                                    <p><b>Unable to activate account.</b></p>
                                                </div>
                                                }
                                                {sucessMessage && 
                                                    <div className="alert alert-success" role="alert">
                                                        {sucessMessage}! <br />
                                                        <p><b>Account has been activated, Please <Link className="small" to="/login">login</Link> to continue.</b></p>
                                                    </div>
                                                }
                                            </div>
                                            <div className="text-center">
                                                <Link className="small" to="/login">Login to your Account!</Link>
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

export default ActivateAccountView